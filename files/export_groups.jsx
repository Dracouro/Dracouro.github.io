// export_groups.jsx  —  Adobe Illustrator 分组批量导出透明 PNG（兜底脚本）
//
// 用法：在 Illustrator 中 文件 > 脚本 > 其他脚本... 选择本文件。
// 会在弹窗中选择「输入文件夹」（含 .ai）与「输出文件夹」，
// 然后逐个 .ai 文件遍历其顶层分组，将每个分组单独导出为透明 PNG。
//
// 说明：
//   - 自动解锁/显示所有图层，确保隐藏图层上的分组也能被导出。
//   - 使用 controlBounds 裁剪（尊重裁剪蒙版），导出为 PNG24 + 透明。
//   - 命名规则：<文件名>_<001>.png（可按需修改下方 TEMPLATE）。
//
// 注意：JSX 中集合下标从 0 开始（COM/Python 从 1 开始）。

#target illustrator

var PPI = 300;                 // 导出分辨率
var PAD = 0;                   // 四周留白（pt）
var TEMPLATE = "{doc}_{i3}";   // 命名模板：{doc}文件名 {i}序号 {i3}补零

function sanitize(s) {
    s = (s || "").replace(/[\\/:*?"<>|\r\n\t]+/g, "_");
    if (s.length > 60) s = s.substring(0, 60);
    return s;
}
function makeName(tpl, docBase, idx, gname) {
    var raw = (gname && gname.length) ? gname : ("group" + idx);
    var safe = sanitize(raw);
    function p(n, w) { var s = "" + n; while (s.length < w) s = "0" + s; return s; }
    return tpl.replace("{doc}", docBase)
              .replace("{i3}", p(idx, 3)).replace("{i2}", p(idx, 2))
              .replace("{i}", "" + idx).replace("{name}", safe);
}

function unlockLayers(doc) {
    for (var L = 0; L < doc.layers.length; L++) {
        try { doc.layers[L].visible = true; } catch (e) {}
        try { doc.layers[L].locked = false; } catch (e) {}
    }
}

function exportGroup(g, outPath) {
    try { g.layer.visible = true; g.layer.locked = false; } catch (e) {}
    app.selection = g;          // 替换式选择
    app.copy();
    var nd = app.documents.add(DocumentColorSpace.RGB);
    nd.paste();
    if (nd.pageItems.length === 0) { nd.close(SaveOptions.DONOTSAVECHANGES); return false; }
    var xs = [], ys = [];
    for (var i = 0; i < nd.pageItems.length; i++) {
        var bb = nd.pageItems[i].controlBounds;   // [l, t, r, b]
        xs.push(bb[0]); xs.push(bb[2]); ys.push(bb[1]); ys.push(bb[3]);
    }
    var l = Math.min.apply(null, xs), t = Math.max.apply(null, ys);
    var r = Math.max.apply(null, xs), b = Math.min.apply(null, ys);
    if (r - l < 1) r = l + 1;
    if (t - b < 1) t = b + 1;
    nd.artboards[0].artboardRect = [l - PAD, t + PAD, r + PAD, b - PAD];

    var opts = new ExportOptionsPNG24();
    opts.transparency = true;
    opts.antiAliasing = true;
    opts.artBoardClipping = true;
    opts.horizontalScale = PPI / 72 * 100;
    opts.verticalScale = PPI / 72 * 100;
    opts.saveAsHTML = false;
    nd.exportFile(new File(outPath), ExportType.PNG24, opts);
    nd.close(SaveOptions.DONOTSAVECHANGES);
    return true;
}

function main() {
    if (app.documents.length === 0) { /* 允许后续打开 */ }
    var inFolder = Folder.selectDialog("选择包含 .ai 的文件夹");
    if (!inFolder) return;
    var outFolder = Folder.selectDialog("选择输出文件夹");
    if (!outFolder) return;

    var files = inFolder.getFiles(function (f) {
        return f instanceof File && /\.ai$/i.test(f.name);
    });
    if (!files || files.length === 0) { alert("未找到 .ai 文件"); return; }

    var totalOk = 0, totalFail = 0;
    for (var fi = 0; fi < files.length; fi++) {
        var f = files[fi];
        var doc = app.open(f);
        unlockLayers(doc);
        var base = sanitize(f.name.replace(/\.ai$/i, ""));
        var groups = doc.groupItems;
        var idx = 0;
        for (var gi = 0; gi < groups.length; gi++) {
            idx++;
            var g = groups[gi];
            var name = makeName(TEMPLATE, base, idx, g.name);
            var outPath = outFolder.fsName + "/" + name + ".png";
            try {
                if (exportGroup(g, outPath)) totalOk++; else totalFail++;
            } catch (e) {
                totalFail++;
            }
        }
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }
    alert("导出完成：成功 " + totalOk + " / 失败 " + totalFail);
}

main();
