#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 分组导出 PNG 工具 (ai_group_exporter)
========================================
通过 COM 自动化驱动本机已安装的 Adobe Illustrator，
遍历 .ai 文件中的各个分组（Group），将每个分组单独导出为
透明背景的 PNG 图片。支持：
  - 批量处理多个 .ai 文件 / 单个文件内的全部分组
  - 配置导出分辨率（PPI）
  - 配置输出目录
  - 配置文件命名规则（模板变量）
  - 仅顶层分组 / 递归全部分组
  - 透明背景（PNG24 / PNG8 + Transparency）
  - 可选导出格式：PNG（透明）/ PNG8（8位透明）/ JPG（不透明压缩）/ SVG（矢量）
  - 可选边距、最小尺寸过滤、跳过满画板分组

依赖: Windows + Adobe Illustrator + pywin32  (pip install pywin32)
用法:
  GUI 模式:  python ai_group_exporter.py
  CLI 模式:  python ai_group_exporter.py --input 文件或文件夹 --out 输出目录 --ppi 300
"""

import os
import re
import sys
import time
import argparse
import threading

try:
    import win32com.client
    import win32com.client.gencache
except ImportError:
    win32com = None

# Illustrator 常量（Illustrator 2020 / 24 实测值，向前兼容通常不变）
AI_PNG24 = 5          # AiExportType.aiPNG24
AI_RGB = 1            # AiDocumentColorSpace.aiRGB
AI_DO_NOT_SAVE = 2    # AiDocumentSaveOptions.aiDoNotSaveChanges

# 导出格式表：key -> (AiExportType 整数, 文件扩展名, ExportOptions 类名)
# 值均在本机 Illustrator 2020 类型库中实测取得。
# 注：BMP / PDF 的 ExportOptions 类在本机不可用，故不提供。
EXPORT_FORMATS = {
    "png":  (5, "png", "PNG24"),   # 透明 PNG（默认）
    "png8": (4, "png", "PNG8"),    # 8 位透明 PNG（体积更小）
    "jpg":  (1, "jpg", "JPEG"),    # 不支持透明，背景为白
    "svg":  (3, "svg", "SVG"),     # 矢量，无损可缩放
}
# 界面下拉项（显示文本 -> 格式 key）
FORMAT_CHOICES = [
    ("PNG（透明，默认）", "png"),
    ("PNG8（8位透明，更小）", "png8"),
    ("JPG（不透明，压缩）", "jpg"),
    ("SVG（矢量）", "svg"),
]


class Options:
    """导出参数集合。"""
    def __init__(self):
        self.ppi = 300              # 导出分辨率（每英寸点数）
        self.pad = 0                # 分组四周额外留白（pt）
        self.out_dir = ""           # 输出目录
        self.template = "{doc}_{i3}"  # 命名模板
        self.recursive = False      # 是否递归导出嵌套分组
        self.min_size = 0           # 最小边长过滤（pt），0=不过滤
        self.skip_full_artboard = False  # 跳过与画板同尺寸的分组
        self.anti_alias = True      # 抗锯齿
        self.fmt = "png"            # 导出格式：png / png8 / jpg / svg
        self.scope = "group"       # 导出范围：group(按分组) / item(按单个图形)


# ---------------------------------------------------------------------------
# Illustrator 连接与分组收集
# ---------------------------------------------------------------------------

def connect_illustrator(visible=True):
    """连接（或启动）本机 Illustrator，返回 Application 对象。"""
    if win32com is None:
        raise RuntimeError("未安装 pywin32，请先执行: pip install pywin32")
    app = win32com.client.gencache.EnsureDispatch("Illustrator.Application")
    try:
        app.Visible = visible
    except Exception:
        pass
    try:
        # 静默所有弹窗（缺失字体/链接/版本兼容等），避免自动化过程被卡住。
        # 注意：UserInteractionLevel=2 即 aiSilenceAll（静默）；1 反而会弹出对话框。
        app.UserInteractionLevel = 2
    except Exception:
        pass
    return app


def unlock_layers(doc):
    """确保所有图层可见且未锁定，否则隐藏/锁定图层上的分组无法被枚举与复制。"""
    for L in range(1, doc.Layers.Count + 1):
        lay = doc.Layers.Item(L)
        try:
            lay.Visible = True
        except Exception:
            pass
        try:
            lay.Locked = False
        except Exception:
            pass


def collect_targets(doc, scope, recursive):
    """收集要导出的对象列表。

    scope:
      "group" —— 仅导出顶层分组（每个 GroupItem 一张）；recursive=True 时
                 递归进入嵌套分组。适合“每个图标已编组”的文件。
      "item"  —— 导出所有图层的**顶层图元**（layer.PageItems），每个图元
                 （无论是否编组）各导一张。这样未编组的散落单个图形也能被
                 单独导出；已编组的图标仍作为整体导出一张。
    """
    result = []

    if scope == "item":
        # 逐图层取顶层图元：包含分组（整体）与未编组的散落图形。
        for L in range(1, doc.Layers.Count + 1):
            lay = doc.Layers.Item(L)
            n = lay.PageItems.Count
            for i in range(1, n + 1):
                result.append(lay.PageItems.Item(i))
        return result

    # group 模式：遍历文档全部顶层分组（含隐藏/锁定图层）
    def walk(container):
        n = container.GroupItems.Count
        for i in range(1, n + 1):
            g = container.GroupItems.Item(i)
            result.append(g)
            if recursive:
                walk(g)

    walk(doc)  # doc.GroupItems 即文档全部顶层分组
    return result


# ---------------------------------------------------------------------------
# 命名
# ---------------------------------------------------------------------------

_BAD = re.compile(r'[\\/:*?"<>|\r\n\t]+')


def sanitize(name):
    name = (name or "").strip()
    name = _BAD.sub("_", name)
    if len(name) > 60:
        name = name[:60]
    return name


def make_name(template, doc_base, idx, gname):
    raw = (gname or "").strip()
    if not raw:
        raw = "group%d" % idx
    safe = sanitize(raw)
    return (template
            .replace("{doc}", doc_base)
            .replace("{i4}", "%04d" % idx)
            .replace("{i3}", "%03d" % idx)
            .replace("{i2}", "%02d" % idx)
            .replace("{i}", str(idx))
            .replace("{name}", safe))


def dedupe(used, name):
    if name not in used:
        used[name] = 1
        return name
    used[name] += 1
    return "%s_%d" % (name, used[name])


# ---------------------------------------------------------------------------
# 单分组导出
# ---------------------------------------------------------------------------

def build_export_options(opts):
    """根据 opts.fmt 构造对应的 ExportOptions 对象与 AiExportType 整数。

    支持的格式：png(PNG24 透明) / png8(PNG8 透明) / jpg(JPEG 不透明) / svg(矢量)。
    对每种格式仅设置实测存在且安全的属性，避免属性错误。
    """
    etype, ext, cls = EXPORT_FORMATS[opts.fmt]
    exp = win32com.client.Dispatch("Illustrator.ExportOptions%s" % cls)
    try:
        exp.AntiAliasing = opts.anti_alias
    except Exception:
        pass
    try:
        exp.ArtBoardClipping = True
    except Exception:
        pass
    try:
        exp.SaveAsHTML = False
    except Exception:
        pass
    # 栅格格式按 PPI 设置缩放；SVG 为矢量，忽略分辨率
    if cls in ("PNG24", "PNG8", "JPEG"):
        scale = opts.ppi / 72.0 * 100.0
        try:
            exp.HorizontalScale = scale
        except Exception:
            pass
        try:
            exp.VerticalScale = scale
        except Exception:
            pass
    if cls in ("PNG24", "PNG8"):
        try:
            exp.Transparency = True
        except Exception:
            pass
    if cls == "PNG8":
        try:
            exp.ColorCount = 256
        except Exception:
            pass
    if cls == "JPEG":
        try:
            exp.Quality = 80
        except Exception:
            pass
        try:
            exp.Optimization = True
        except Exception:
            pass
    if cls == "SVG":
        try:
            exp.EmbedRasterImages = True
        except Exception:
            pass
    return etype, ext, exp


def export_group(app, g, out_path, opts):
    """将单个分组复制进新文档并导出为透明 PNG。返回是否成功。"""
    # 确保所在图层可见且未锁定，否则无法复制
    try:
        g.Layer.Visible = True
        g.Layer.Locked = False
    except Exception:
        pass
    # 选中该对象（用列表形式 [g]，对分组与单个图形都可靠；
    # 直接传单个对象在部分 Illustrator 版本下对散落 PathItem 会复制失败）
    try:
        app.Selection = [g]
    except Exception:
        try:
            app.Selection = g
        except Exception:
            try:
                g.Selected = True
            except Exception:
                return False
    app.Copy()

    newdoc = app.Documents.Add(AI_RGB, 100, 100)
    try:
        newdoc.Paste()
        n = newdoc.PageItems.Count
        if n == 0:
            return False
        xs, ys = [], []
        for i in range(1, n + 1):
            it = newdoc.PageItems.Item(i)
            try:
                bb = list(it.ControlBounds)   # ControlBounds 尊重裁剪蒙版
            except Exception:
                bb = list(it.VisibleBounds)
            xs += [bb[0], bb[2]]
            ys += [bb[1], bb[3]]
        l, tp, r, bo = min(xs), max(ys), max(xs), min(ys)
        if r - l < 1:
            r = l + 1
        if tp - bo < 1:
            tp = bo + 1
        pad = opts.pad
        rect = [l - pad, tp + pad, r + pad, bo - pad]
        newdoc.Artboards.Item(1).ArtboardRect = rect

        etype, _ext, exp = build_export_options(opts)
        newdoc.Export(out_path, etype, exp)
        return True
    finally:
        try:
            newdoc.Close(AI_DO_NOT_SAVE)
        except Exception:
            pass


# ---------------------------------------------------------------------------
# 单文件处理
# ---------------------------------------------------------------------------

def process_file(app, path, opts, on_log, stop_event):
    """打开一个 .ai 文件，导出其中每个对象。返回 (成功数, 失败数)。"""
    base = os.path.basename(path)
    doc = app.Open(path)
    ok = 0
    fail = 0
    try:
        unlock_layers(doc)
        groups = collect_targets(doc, opts.scope, opts.recursive)
        label = "分组" if opts.scope == "group" else "图形"
        on_log("  ? %s : 发现 %d 个%s" % (base, len(groups), label))
        doc_base = sanitize(os.path.splitext(base)[0])
        used = {}
        idx = 0
        aw = ah = 0
        try:
            ar = list(doc.Artboards.Item(1).ArtboardRect)
            aw, ah = ar[2] - ar[0], ar[1] - ar[3]
        except Exception:
            pass
        for g in groups:
            if stop_event and stop_event.is_set():
                on_log("  ? 已用户中止")
                break
            idx += 1
            try:
                try:
                    b = list(g.ControlBounds)
                except Exception:
                    b = list(g.VisibleBounds)
            except Exception:
                on_log("    [%d/%d] 跳过（无法读取边界）" % (idx, len(groups)))
                fail += 1
                continue
            w, h = b[2] - b[0], b[1] - b[3]
            if opts.min_size and max(w, h) < opts.min_size:
                on_log("    [%d/%d] 跳过（尺寸过小 %.0fx%.0f < %d）" %
                       (idx, len(groups), w, h, opts.min_size))
                continue
            if opts.skip_full_artboard and aw > 0 and ah > 0:
                if (abs(w - aw) < 2 and abs(h - ah) < 2 and
                        abs(b[0]) < 2 and abs(b[1]) < 2):
                    on_log("    [%d/%d] 跳过（与画板同尺寸的背景分组）" % (idx, len(groups)))
                    continue
            name = dedupe(used, make_name(opts.template, doc_base, idx, g.Name))
            ext = EXPORT_FORMATS[opts.fmt][1]
            out_path = os.path.join(opts.out_dir, name + "." + ext)
            if export_group(app, g, out_path, opts):
                px = max(1, round(w * opts.ppi / 72.0))
                py = max(1, round(h * opts.ppi / 72.0))
                on_log("    [%d/%d] %s.%s  (%dx%d px)" % (idx, len(groups), name, ext, px, py))
                ok += 1
            else:
                on_log("    [%d/%d] %s 导出失败" % (idx, len(groups), name))
                fail += 1
    finally:
        try:
            doc.Close(AI_DO_NOT_SAVE)
        except Exception:
            pass
    return ok, fail


# ---------------------------------------------------------------------------
# 编排：批量处理多个文件
# ---------------------------------------------------------------------------

def gather_files(input_path):
    """根据输入（文件或文件夹）返回 .ai 文件列表。"""
    if os.path.isfile(input_path):
        return [input_path] if input_path.lower().endswith(".ai") else []
    if os.path.isdir(input_path):
        files = []
        for fn in sorted(os.listdir(input_path)):
            if fn.lower().endswith(".ai"):
                files.append(os.path.join(input_path, fn))
        return files
    return []


def run_export(app, files, opts, on_log, stop_event):
    """依次处理文件列表，返回汇总。"""
    total_ok = 0
    total_fail = 0
    for f in files:
        if stop_event and stop_event.is_set():
            break
        on_log("? 处理文件: %s" % f)
        try:
            ok, fail = process_file(app, f, opts, on_log, stop_event)
            total_ok += ok
            total_fail += fail
            on_log("  -> 完成: 成功 %d / 失败 %d" % (ok, fail))
        except Exception as e:
            on_log("  !! 处理失败: %s" % e)
            total_fail += 1
    return total_ok, total_fail


# ---------------------------------------------------------------------------
# CLI 模式
# ---------------------------------------------------------------------------

def run_cli():
    ap = argparse.ArgumentParser(
        description="Adobe Illustrator 分组批量导出图片工具（PNG/PNG8/JPG/SVG）")
    ap.add_argument("--input", "-i", required=True,
                    help="输入 .ai 文件或包含 .ai 的文件夹")
    ap.add_argument("--out", "-o", required=True, help="输出目录")
    ap.add_argument("--ppi", type=float, default=300, help="分辨率 PPI（默认 300）")
    ap.add_argument("--pad", type=float, default=0, help="四周留白 pt（默认 0）")
    ap.add_argument("--template", default="{doc}_{i3}",
                    help="命名模板，变量: {doc} {i} {i2} {i3} {i4} {name}")
    ap.add_argument("--recursive", action="store_true",
                    help="递归导出嵌套分组（含子分组）")
    ap.add_argument("--min-size", type=float, default=0,
                    help="最小边长过滤 pt，小于则跳过（默认 0=不过滤）")
    ap.add_argument("--skip-full-artboard", action="store_true",
                    help="跳过与画板同尺寸的背景分组")
    ap.add_argument("--no-aa", action="store_true", help="关闭抗锯齿")
    ap.add_argument("--format", default="png", choices=["png", "png8", "jpg", "svg"],
                    help="导出格式：png(透明PNG24) / png8(8位透明) / jpg(不透明) / svg(矢量)")
    ap.add_argument("--scope", default="group", choices=["group", "item"],
                    help="导出范围：group=按组导出（默认）；item=按单个图形/页面对象导出")
    ap.add_argument("--visible", action="store_true",
                    help="显示 Illustrator 窗口（默认后台静默运行）")
    args = ap.parse_args()

    files = gather_files(args.input)
    if not files:
        print("未找到任何 .ai 文件: %s" % args.input)
        sys.exit(1)
    os.makedirs(args.out, exist_ok=True)

    opts = Options()
    opts.ppi = args.ppi
    opts.pad = args.pad
    opts.out_dir = args.out
    opts.template = args.template
    opts.recursive = args.recursive
    opts.min_size = args.min_size
    opts.skip_full_artboard = args.skip_full_artboard
    opts.anti_alias = not args.no_aa
    opts.fmt = args.format
    opts.scope = args.scope

    print("将处理 %d 个 .ai 文件，范围=%s，格式=%s，输出到: %s"
          % (len(files), args.scope, args.format, args.out))
    app = connect_illustrator(visible=args.visible)
    try:
        ok, fail = run_export(app, files, opts, lambda m: print(m), None)
    finally:
        try:
            app.Quit()
        except Exception:
            pass
    print("全部完成: 成功 %d / 失败 %d" % (ok, fail))
    sys.exit(0 if fail == 0 else 1)


# ---------------------------------------------------------------------------
# GUI 模式（tkinter，中文界面）
# ---------------------------------------------------------------------------

def resource_path(rel):
    """onefile EXE 内取随包资源的绝对路径；源码运行时取脚本同目录。"""
    base = getattr(sys, "_MEIPASS", os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base, rel)


def run_gui():
    import tkinter as tk
    from tkinter import ttk, filedialog, scrolledtext, messagebox

    root = tk.Tk()
    root.title("AI 分组导出 PNG 工具")
    root.resizable(True, True)  # 允许自由缩放，避免小屏被裁切
    try:
        root.tk.call("tk", "scaling", 1.4)
    except Exception:
        pass
    # 窗口标题栏/任务栏图标（与 EXE 图标一致）
    try:
        root.iconbitmap(resource_path("app_icon.ico"))
    except Exception:
        pass

    # ====================== 滚动容器（内容超出时可用滚轮/滚动条） ======================
    CONTENT_W = 800
    canvas = tk.Canvas(root, borderwidth=0, highlightthickness=0)
    vsb = ttk.Scrollbar(root, orient="vertical", command=canvas.yview)
    canvas.configure(yscrollcommand=vsb.set)
    vsb.pack(side="right", fill="y")
    canvas.pack(side="left", fill="both", expand=True)

    content = ttk.Frame(canvas, width=CONTENT_W)
    content_id = canvas.create_window((0, 0), window=content, anchor="nw")

    def _on_content_configure(event):
        canvas.configure(scrollregion=canvas.bbox("all"))
    content.bind("<Configure>", _on_content_configure)

    def _on_canvas_configure(event):
        # 让内部内容宽度跟随画布宽度（最小 CONTENT_W），文字换行稳定
        w = max(CONTENT_W, event.width)
        canvas.itemconfig(content_id, width=w)
    canvas.bind("<Configure>", _on_canvas_configure)

    def _on_mousewheel(event):
        canvas.yview_scroll(int(-1 * (event.delta / 120)), "units")
    root.bind_all("<MouseWheel>", _on_mousewheel)

    opts = Options()
    files_var = {"files": []}
    stop_event = threading.Event()

    # ====================== 使用说明 / 前置操作 ======================
    help_text = (
        "【导出标准与前置操作】\n"
        "1. 运行环境：本机需安装 Adobe Illustrator（2020 及以上）。\n"
        "2. 导出范围（关键）：在“导出参数”里选「导出范围」：\n"
        "   · 按分组（默认）：以“一个分组 = 一张图”导出，需先在 Illustrator 把每个图标"
        "用 Ctrl+G 编组；未编组的零散图形不会被单独导出。\n"
        "   · 按单个图形：直接遍历文件里所有顶层对象，未编组的零散图形、文字、路径等"
        "都会各自导出一张；已是分组的仍整组导出。适合文件没编组、想全量拆出的情况。\n"
        "3. 输出内容：默认透明 PNG（PNG24）；可在“导出参数”里"
        "切换 PNG8（更小透明）/ JPG（不透明压缩）/ SVG（矢量）。同一文件可含多个对象。\n"
        "4. 文件安全：源 .ai 文件不会被修改（以“不保存”方式关闭）。\n"
        "5. 命名规则：默认 文件名_序号.png，可在下方修改模板（{doc}文件名 {i}序号 {i3}补零 {name}组名）。\n"
        "\n※ 关于 pywin32：本程序是打包好的独立 EXE，运行环境（Python / pywin32 /"
        "tkinter / Pillow）已全部内置，双击即可使用，无需安装任何 Python 依赖。"
        "仅当你用 python 直接运行源码 ai_group_exporter.py 时，才需先 pip install pywin32。"
    )
    # 用自动换行的 Label（按内容自适应高度，不会被固定高度裁切）
    frm_help = ttk.LabelFrame(content, text="使用说明（导出前必读）", padding=8)
    frm_help.pack(fill="x", padx=10, pady=6)
    help_label = tk.Label(frm_help, text=help_text, wraplength=770,
                          justify="left", anchor="nw",
                          background=root.cget("background"),
                          font=("Microsoft YaHei", 10))
    help_label.pack(fill="x", padx=2, pady=2)

    # ====================== 操作按钮（紧接在使用说明下方） ======================
    frm_btn = ttk.LabelFrame(content, text="导出操作", padding=8)
    frm_btn.pack(fill="x", padx=10, pady=6)
    ttk.Button(frm_btn, text="开始导出", command=lambda: start()).pack(
        side="left", padx=(0, 6))
    ttk.Button(frm_btn, text="停止", command=lambda: stop()).pack(
        side="left", padx=6)
    ttk.Button(frm_btn, text="打开输出目录", command=lambda: open_out()).pack(
        side="right", padx=6)

    # ====================== 输入区 ======================
    frm_in = ttk.LabelFrame(content, text="选择要导出的 .ai", padding=8)
    frm_in.pack(fill="x", padx=10, pady=6)
    mode = tk.StringVar(value="file")
    ttk.Radiobutton(frm_in, text="单个文件", variable=mode,
                    value="file").grid(row=0, column=0, sticky="w")
    ttk.Radiobutton(frm_in, text="文件夹（批量）", variable=mode,
                    value="folder").grid(row=0, column=1, sticky="w")
    input_var = tk.StringVar()
    ttk.Entry(frm_in, textvariable=input_var, width=62).grid(
        row=1, column=0, columnspan=2, sticky="we", pady=2)
    lbl_files = ttk.Label(frm_in, text="未选择")
    lbl_files.grid(row=2, column=0, columnspan=2, sticky="w")
    lbl_analyze = ttk.Label(frm_in, text="（选好文件后点“分析文件”可预览分组数量）",
                            foreground="#555555")
    lbl_analyze.grid(row=3, column=0, columnspan=2, sticky="w")

    def auto_out(p):
        # 选好输入后，自动把输出目录填为输入旁边的“导出”文件夹
        if os.path.isfile(p):
            d = os.path.dirname(p)
        else:
            d = p
        out_var.set(os.path.join(d, "导出"))

    def pick_input():
        if mode.get() == "folder":
            p = filedialog.askdirectory(title="选择包含 .ai 的文件夹")
        else:
            p = filedialog.askopenfilename(
                title="选择 .ai 文件", filetypes=[("Illustrator", "*.ai")])
        if p:
            input_var.set(p)
            fs = gather_files(p)
            files_var["files"] = fs
            lbl_files.config(text="已找到 %d 个 .ai 文件" % len(fs))
            auto_out(p)

    ttk.Button(frm_in, text="浏览...", command=pick_input).grid(
        row=1, column=2, padx=4)

    def analyze():
        p = input_var.get()
        if not p:
            messagebox.showinfo("提示", "请先选择 .ai 文件或文件夹")
            return
        files = gather_files(p)
        if not files:
            messagebox.showinfo("提示", "未找到 .ai 文件")
            return
        lbl_analyze.config(text="分析中，请稍候（会启动 Illustrator）…",
                           foreground="#1565C0")
        root.update_idletasks()

        def aw():
            try:
                app = connect_illustrator(visible=False)
            except Exception as e:
                root.after(0, lambda: lbl_analyze.config(
                    text="无法连接 Illustrator: %s" % e, foreground="#B71C1C"))
                return
            try:
                if len(files) == 1:
                    doc = app.Open(files[0])
                    unlock_layers(doc)
                    sc = scope_map.get(scope_var.get(), "group")
                    slabel = "分组" if sc == "group" else "图形"
                    n = len(collect_targets(doc, sc, rec_var.get()))
                    doc.Close(AI_DO_NOT_SAVE)
                    msg = "「%s」包含 %d 个%s，预计导出 %d 张图片" % (
                        os.path.basename(files[0]), n, slabel, n)
                    fg = "#2E7D32" if n > 0 else "#B71C1C"
                    root.after(0, lambda: lbl_analyze.config(text=msg, foreground=fg))
                    if n == 0:
                        root.after(0, lambda: messagebox.showwarning(
                            "未找到可导出对象",
                            "该文件在「%s」模式下没有可识别的对象。\n"
                            "若选的是“分组”模式，请先在 Illustrator 中将每个图标的"
                            "图形编组（Ctrl+G）；\n若选的是“单个图形”模式，请确认文件里存在图形。"
                            % slabel))
                else:
                    root.after(0, lambda: lbl_analyze.config(
                        text="文件夹内含 %d 个 .ai 文件，将逐批导出" % len(files),
                        foreground="#1565C0"))
            except Exception as e:
                root.after(0, lambda: lbl_analyze.config(
                    text="分析失败: %s" % e, foreground="#B71C1C"))
            finally:
                try:
                    app.Quit()
                except Exception:
                    pass

        threading.Thread(target=aw, daemon=True).start()

    ttk.Button(frm_in, text="分析文件", command=analyze).grid(
        row=2, column=2, padx=4, sticky="w")

    # ====================== 参数区 ======================
    frm_opt = ttk.LabelFrame(content, text="导出参数", padding=8)
    frm_opt.pack(fill="x", padx=10, pady=6)

    ttk.Label(frm_opt, text="分辨率 (PPI):").grid(row=0, column=0, sticky="w")
    ppi_var = tk.StringVar(value="300")
    ttk.Combobox(frm_opt, textvariable=ppi_var, width=10,
                 values=["72", "150", "300", "600", "1200"]).grid(
        row=0, column=1, sticky="w")

    ttk.Label(frm_opt, text="留白 (pt):").grid(row=0, column=2, sticky="w")
    pad_var = tk.StringVar(value="0")
    ttk.Entry(frm_opt, textvariable=pad_var, width=8).grid(row=0, column=3, sticky="w")

    ttk.Label(frm_opt, text="输出目录:").grid(row=1, column=0, sticky="w")
    out_var = tk.StringVar()
    ttk.Entry(frm_opt, textvariable=out_var, width=44).grid(
        row=1, column=1, columnspan=3, sticky="we")
    ttk.Button(frm_opt, text="浏览...", command=lambda: out_var.set(
        filedialog.askdirectory(title="选择输出目录") or out_var.get())
    ).grid(row=1, column=4, padx=4)

    ttk.Label(frm_opt, text="命名模板:").grid(row=2, column=0, sticky="w")
    tpl_var = tk.StringVar(value="{doc}_{i3}")
    ttk.Entry(frm_opt, textvariable=tpl_var, width=44).grid(
        row=2, column=1, columnspan=3, sticky="we")
    ttk.Label(frm_opt, text="{doc}文件名 {i}序号 {i3}补零 {name}组名").grid(
        row=3, column=0, columnspan=5, sticky="w")

    rec_var = tk.BooleanVar(value=False)
    rec_chk = ttk.Checkbutton(frm_opt, text="递归导出嵌套分组",
                             variable=rec_var)
    rec_chk.grid(row=4, column=0, columnspan=2, sticky="w")
    minsz_var = tk.StringVar(value="0")
    ttk.Label(frm_opt, text="最小边长(pt,0=不过滤):").grid(row=4, column=2, sticky="w")
    ttk.Entry(frm_opt, textvariable=minsz_var, width=8).grid(row=4, column=3, sticky="w")

    # ====================== 导出格式 ======================
    ttk.Label(frm_opt, text="导出格式:").grid(row=5, column=0, sticky="w")
    fmt_var = tk.StringVar(value="PNG（透明，默认）")
    ttk.Combobox(frm_opt, textvariable=fmt_var, width=24, state="readonly",
                 values=[c[0] for c in FORMAT_CHOICES]).grid(
        row=5, column=1, columnspan=3, sticky="w")
    fmt_map = {c[0]: c[1] for c in FORMAT_CHOICES}

    # ====================== 导出范围（按组 / 按单个图形） ======================
    ttk.Label(frm_opt, text="导出范围:").grid(row=6, column=0, sticky="w")
    scope_var = tk.StringVar(value="按分组（默认）")
    ttk.Combobox(frm_opt, textvariable=scope_var, width=24, state="readonly",
                 values=["按分组（默认）", "按单个图形"]).grid(
        row=6, column=1, columnspan=3, sticky="w")
    scope_map = {"按分组（默认）": "group", "按单个图形": "item"}

    # “按单个图形”时递归无意义，联动禁用“递归导出嵌套分组”
    def _on_scope_change(*_a):
        if scope_map.get(scope_var.get(), "group") == "item":
            rec_var.set(False)
            rec_chk.state(["disabled"])
        else:
            rec_chk.state(["!disabled"])
    scope_var.trace_add("write", _on_scope_change)

    # ====================== 日志区 ======================
    log_box = scrolledtext.ScrolledText(content, height=11, state="disabled")
    log_box.pack(fill="x", padx=10, pady=6)
    progress = ttk.Progressbar(content, mode="indeterminate")
    progress.pack(fill="x", padx=10)

    def log_msg(msg):
        log_box.configure(state="normal")
        log_box.insert("end", msg + "\n")
        log_box.see("end")
        log_box.configure(state="disabled")

    # ====================== 运行（后台线程） ======================
    def worker():
        try:
            opts.ppi = float(ppi_var.get() or 300)
            opts.pad = float(pad_var.get() or 0)
            opts.out_dir = out_var.get()
            opts.template = tpl_var.get() or "{doc}_{i3}"
            opts.recursive = rec_var.get()
            opts.min_size = float(minsz_var.get() or 0)
            opts.fmt = fmt_map.get(fmt_var.get(), "png")
            opts.scope = scope_map.get(scope_var.get(), "group")
        except ValueError as e:
            log_msg("参数错误: %s" % e)
            return
        if not opts.out_dir:
            log_msg("请先选择输出目录")
            return
        if not files_var["files"]:
            log_msg("请先选择输入（文件或文件夹）")
            return
        os.makedirs(opts.out_dir, exist_ok=True)
        log_msg("开始导出，共 %d 个文件..." % len(files_var["files"]))
        progress.start(20)
        try:
            app = connect_illustrator(visible=False)
        except Exception as e:
            progress.stop()
            log_msg("无法连接 Illustrator: %s" % e)
            log_msg("请确认已安装 Adobe Illustrator 且本机为 Windows。")
            return
        try:
            ok, fail = run_export(app, files_var["files"], opts, log_msg, stop_event)
        finally:
            try:
                app.Quit()
            except Exception:
                pass
            progress.stop()
        log_msg("导出结束: 成功 %d / 失败 %d" % (ok, fail))
        log_msg("输出目录: %s" % opts.out_dir)

    def start():
        stop_event.clear()
        threading.Thread(target=worker, daemon=True).start()

    def stop():
        stop_event.set()
        log_msg("正在中止（完成当前分组后停止）...")

    def open_out():
        if opts.out_dir and os.path.isdir(opts.out_dir):
            os.startfile(opts.out_dir)

    if win32com is None:
        messagebox.showwarning("缺少依赖",
                               "未检测到 pywin32。请先安装：\n"
                               "pip install pywin32\n\n"
                               "本工具需要 Windows + Adobe Illustrator。")

    # ====================== 自适应窗口高度（尽量完整露出所有功能） ======================
    def fit_window():
        root.update_idletasks()
        req_h = content.winfo_reqheight()
        sw = root.winfo_screenwidth()
        sh = root.winfo_screenheight()
        # 宽度：内容宽度 + 滚动条
        w = CONTENT_W + 24
        # 高度：尽量等于内容所需高度；超过屏幕 92% 时上限，交给滚动条
        h = min(req_h + 24, int(sh * 0.92))
        root.geometry("%dx%d" % (w, h))

    root.after(0, fit_window)
    root.mainloop()



# ---------------------------------------------------------------------------

def main():
    # CLI 模式：提供 --input 即进入命令行模式；--help/-h 也走 CLI 以显示参数说明
    if "--input" in sys.argv or "-i" in sys.argv or \
       "--help" in sys.argv or "-h" in sys.argv:
        run_cli()
    else:
        run_gui()


if __name__ == "__main__":
    main()
