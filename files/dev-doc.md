# 个人作品站 · 开发文档

> 站点定位：存放并展示我制作的 UE5 项目、图片、3D 模型、文档、思维导图等产物，支持在线预览与下载。
> 核心约束：**长期成本趋近于 0，服务器资源占用趋近于 0，运维时间趋近于 0。**
>
> **文档版本：v2.0**　|　适用环境：Windows 11 / Node 20+ / pnpm
> v1.0 见 `docs/archive/开发文档-v1.0.md`

---

## v2.0 变更说明

v1.0 是一份"通用作品站"方案。v2.0 根据实际内容形态做了六处重要修订：

| # | 变更 | 影响章节 |
|---|---|---|
| 1 | **项目栏目改为两级层级**（项目 → 功能模块），新增**蓝图存档可视化**与 **C++ 代码展示** | 1、3、5、6、7、8.2、8.3、8.4、13 |
| 2 | **图片栏目改为图集分区**，瀑布流不裁切，点击放大查看详情 | 1、5、6、7、8.5 |
| 3 | **音频栏目推迟到最后**（M6） | 13 |
| 4 | **文档支持只读预览**，且每篇可独立控制是否允许下载 | 6、8.6、11 |
| 5 | **内容更新只走本地发布**，站点不存在任何写接口 | 3、11 |
| 6 | **思维导图收纳进项目之下**，取消独立栏目 | 5、7、8.7 |

---

## 目录

1. [需求分析](#1-需求分析)
2. [方案选型与成本对比](#2-方案选型与成本对比)
3. [总体架构](#3-总体架构)
4. [技术栈](#4-技术栈)
5. [目录结构](#5-目录结构)
6. [数据模型](#6-数据模型)
7. [路由与页面设计](#7-路由与页面设计)
8. [核心功能实现](#8-核心功能实现)
9. [部署流程](#9-部署流程)
10. [性能与成本优化](#10-性能与成本优化)
11. [安全与权限](#11-安全与权限)
12. [日常使用流程](#12-日常使用流程)
13. [开发路线图](#13-开发路线图)
14. [验收清单](#14-验收清单)
15. [附录](#15-附录)

---

## 1. 需求分析

### 1.1 内容类型矩阵

内容按**预览方式**分类（而不是按扩展名），因为预览方式决定了要写什么组件、要生成什么衍生文件。

| 类型 | 常见格式 | 在线预览方式 | 需生成的衍生文件 | 体积量级 |
|---|---|---|---|---|
| **项目** | UE5 工程 | 项目页 + 功能模块页 | 封面、模块结构 | — |
| **蓝图存档** | `.t3d`（UE 复制的节点文本） | **可缩放平移的节点图谱**（复刻 UE 观感） | 无（文本本身即数据） | 10 KB～2 MB |
| **代码** | `.h` / `.cpp` / `.cs` | 语法高亮 + 行号 + 复制 | 高亮后的静态 HTML（构建期生成） | 1～200 KB |
| 思维导图 | `.md` | markmap 交互式导图 | 无（Markdown 直接渲染） | 1～200 KB |
| 图片 | jpg / png / webp | **瀑布流（不裁切）+ 灯箱详情** | 480/960/1600 三档 AVIF+WebP | 0.1～5 MB |
| 3D 模型 | glb / gltf | 网页内旋转看**布线**（三角网拓扑） | Draco / meshopt 压缩体 + 首帧封面 | 1～80 MB |
| 文档 | pdf / md | **只读预览**（下载开关独立控制） | 首页缩略图 | 0.1～20 MB |
| 音频 | mp3 / wav | 波形播放器（**最后做**） | 转码 + 波形 JSON | 1～60 MB |

### 1.2 项目栏目的层级设计

这是 v2.0 的核心变化。原来的"一个项目 = 一页图文"不足以承载 UE5 工程的复杂度，改为**两级结构**：

```
项目（Project）
├── 项目概览
│     · 封面、一句话简介、引擎版本、技术栈、外链、整包下载
│     · 该项目的模块导航（卡片式）
│     · 该项目下的思维导图入口
│     · 该项目下的蓝图存档总览
│
├── 功能模块（Module）  ← 第二级
│     · 模块说明正文（Markdown）
│     · 蓝图存档：该模块涉及的所有蓝图，逐个可视化
│     · C++ 代码：该模块涉及的头文件与实现，语法高亮
│     · 截图 / 图集
│     · 附件下载
│
└── 思维导图（Mindmap，可多个）
      · 由 Markdown 直接渲染的可交互导图
```

举例（"钛心番茄"项目）：

| 模块 | 蓝图存档 | C++ 代码 |
|---|---|---|
| 农场系统 | `BP_Farming_Master`、`BP_PlantStem_Segment` | — |
| 交互系统 | `BP_Farmer`（输入绑定） | `UInteractionManagerComponent.h/.cpp` |
| 拼装/合成 | `AC_AssemblySystem`（蓝图侧） | `AC_AssemblySystem.h/.cpp` |
| 化肥/化学合成 | `DT_AssemblyRecipes` 相关 | — |

### 1.3 蓝图存档：为什么是 T3D 文本而不是截图

在 UE 里选中蓝图节点按 `Ctrl+C`，剪贴板里拿到的**不是图片**，而是一段 T3D/ASCII 序列化文本，形如：

```
Begin Object Class=/Script/BlueprintGraph.K2Node_CallFunction Name="K2Node_CallFunction_0"
   FunctionReference=(MemberParent=Class'"/Script/Engine.KismetSystemLibrary"',MemberName="PrintString")
   NodePosX=1024
   NodePosY=320
   NodeGuid=A1B2C3D4...
   CustomProperties Pin (PinId=...,PinName="execute",Direction="EGPD_Input",
                         PinType.PinCategory="exec",...,LinkedTo=(K2Node_CallFunction_5 1A2B...,),)
End Object
```

这段文本里包含了重建图谱所需的**全部信息**：节点类型、节点坐标（`NodePosX/NodePosY`）、引脚定义、引脚连接（`LinkedTo`）、默认值、注释。

| 对比项 | 蓝图截图 | T3D 文本存档 |
|---|---|---|
| 可视化 | ✅ 所见即所得 | ✅ 可重建为节点图谱 |
| 可缩放 | ❌ 放大就糊 | ✅ 矢量渲染，无限缩放 |
| 可搜索 | ❌ 只是像素 | ✅ 能搜节点名、函数名 |
| 可复制回 UE | ❌ | ✅ 原文本直接粘回去 |
| 体积 | 1～5 MB / 张 | 10 KB～2 MB / 个 |
| 出图成本 | 手动截图 + 拼接 | `Ctrl+A` → `Ctrl+C` → 存文件 |

**结论：用 T3D 文本，废弃截图方案。** 截图只作为"库解析不了的冷门节点类型"的兜底。

### 1.4 图片栏目：图集分区 + 不裁切

| 需求 | 落地方式 |
|---|---|
| 分区放置 | 一个图集 = 一个目录，图集列表页是"分区卡片墙"，点进去才是图 |
| 图集功能 | 每个图集有标题、封面、说明、创作日期、标签 |
| 点击放大看详情 | 灯箱：大图 + 标题 + 说明 + 原始尺寸 + 下载 |
| **尺寸不被裁切** | CSS 多列瀑布流（`columns`），图片按原始比例完整显示，**绝不使用 `object-fit: cover`** |

> **"不裁切"的三条铁律**：
> 1. 缩略图一律 `width:100%; height:auto`，让高度跟着原始比例走；
> 2. 容器不设固定 `aspect-ratio`，不用 `object-fit: cover`；
> 3. 每个 `<img>` 必须写 `width`/`height` 属性（取自原始像素），否则瀑布流会剧烈抖动。

### 1.5 文档：只读 + 下载开关

| 模式 | 在线看 | 下载 | 实现 |
|---|---|---|---|
| `public` | ✅ | ✅ | 默认，正常渲染下载按钮 |
| `readonly` | ✅ | ❌ | 不渲染下载入口；自托管 pdf.js 并禁用其"下载/打印"按钮；原文件放 R2 私有前缀，不暴露直链 |
| `strict` | ✅（图片流） | ❌ | 构建期把 PDF 渲染成图片序列，浏览器端拿不到原始 PDF，也无法复制文本 |

每篇文档在 frontmatter 里写 `docMode: public | readonly | strict`，独立控制。

### 1.6 权限：只有我能改

**技术上的实现是"不存在写接口"**：

- 站点是纯静态的，部署产物全是 HTML/CSS/JS/图片；服务器（CDN）**只支持 GET**。
- 不存在 `/admin`、不存在 API、不存在数据库、不开放评论与投稿。
  （本地那个 `pnpm admin`（<http://127.0.0.1:4322>）只是给我自己写作时用的辅助工具，
  只监听 127.0.0.1、不参与构建、不进 `dist/`、不上线，所以不违反这一条。）
- 内容的唯一来源是**我本地电脑上的 `content/` 目录**，通过脚本发布。
- 结论：外部访客在技术上**无法**修改任何内容；只有拿得到这台电脑和仓库的人才能改。

### 1.7 非功能需求

| 维度 | 目标值 |
|---|---|
| 成本 | 每月 ≤ ¥5，年度 ≤ ¥80（只有域名是刚性支出） |
| 服务器计算资源 | **0 核 0 内存** |
| 首屏体积 | HTML+CSS+JS < 120 KB |
| 蓝图页 JS | 允许较大（图谱库），但仅该页加载且懒加载 |
| 单文件下载速度 | 不被带宽卡死（走对象存储 CDN，不走小水管 VPS） |
| 内容扩容 | 加 10 GB 素材成本增幅 < ¥1/月 |
| 运维 | 每月主动干预 ≤ 1 次 |

---

## 2. 方案选型与成本对比

### 2.1 方案横向对比

| 方案 | 前端托管 | 大文件存储 | 计算资源 | 年成本 | 下载体验 | 结论 |
|---|---|---|---|---|---|---|
| **A. 静态站 + 对象存储** | Cloudflare Pages（无限带宽） | R2（10 GB 免费、**出口零费用**） | 0 | **≈ ¥0**（仅域名 ¥55） | CDN 边缘节点，满速 | ✅ **采用** |
| B. 轻量云自建 | 同机 | 服务器磁盘 | 2C2G 常驻 | ¥99～300 | **3 Mbps 卡死大文件** | ❌ |
| C. Serverless/BaaS | Vercel 免费 | Supabase 1 GB 免费 | 冷启动计价 | ¥0～¥200 | 每月 100 GB 流量上限 | ⚠️ |
| D. 现成平台 | Notion/Obsidian Publish | 依附平台 | 0 | ¥0～¥600 | 放不了蓝图与 3D | ❌ |
| E. GitHub Pages + Releases | 免费 | Releases（单文件 2 GB） | 0 | ¥0 | 速度一般但免费 | 🟡 备胎 |

### 2.2 为什么锁定 R2

| 项目 | 免费额度 | 超出后单价 |
|---|---|---|
| 存储 | 10 GB·月 | $0.015 / GB·月（50 GB ≈ ¥5.3/月） |
| Class A（写） | 100 万次/月 | $4.50 / 百万次 |
| Class B（读） | 1000 万次/月 | $0.36 / 百万次 |
| **出口流量** | **无限** | **$0** |

对比阿里云 OSS：存储 40 GB ≈ ¥5/月，但**出网流量 ¥0.5/GB**。R2 把这项成本直接归零——这是"承担不起服务器费用"的最优解。

两个容易被忽略的成本杀手：

1. **出口流量费**：朋友下载一个 500 MB 的模型包，100 次就是 50 GB = ¥25。
2. **带宽换算陷阱**：3 Mbps = 375 KB/s，下载 1 GB 模型**理论最快 45 分钟**。

所以选型的核心不是"挑便宜的服务器"，而是**挑一个出口流量不要钱的对象存储**。

> **25 MiB 规则**：Cloudflare Pages 单文件上限 25 MiB、单站点 20000 个文件。
> **大于 25 MiB 的文件一律放 R2，绝不进前端仓库。** 这条是整套架构的分界线。

### 2.3 国内访问的现实问题

| 情况 | 说明 | 应对 |
|---|---|---|
| Cloudflare 大陆直连质量 | 晚高峰可能绕路、丢包 | 静态页小，影响可接受 |
| 自定义域名指向境外 | **不需要** ICP 备案 | 直接绑域名 |
| 自定义域名指向大陆 | **必须** ICP 备案 | 若后续要备案，迁腾讯云 EdgeOne |
| 给国内 HR / 客户看 | 打开速度是真实体验指标 | 备选 EdgeOne Pages（有免费额度、国内节点快） |

**决策建议**：先用 Cloudflare（零成本、零备案）跑起来。真遇到"国内太慢"的投诉，再把静态层迁到 EdgeOne（页面代码不用改，只改部署目标），大文件继续留 R2。

---

## 3. 总体架构

### 3.1 架构图

```
┌─────────────────────── 本地（Windows，唯一的写入口）───────────────────────┐
│                                                                          │
│  inbox/             content/                    library/                  │
│  （新素材丢进来）     （唯一的真源）              （归档原始素材）            │
│    │                    │                          ▲                      │
│    ▼                    │                          │                      │
│  publish.mjs ───────────┼──────────────────────────┘                      │
│  ①识别类型 ②算SHA256 ③派生（压缩/转码/缩略图）④上传 R2                       │
│    │                    │                                                 │
│    ▼                    │                                                 │
│  data/assets.json ◄─────┘                                                 │
│  （资源清单：id → R2 key / 大小 / 哈希 / 元数据）                            │
└────────────────────────┼──────────────────────────────────────────────────┘
                         │ ⑤astro build（读 content/ + assets.json）
                         ▼
                    ┌─────────┐   HTTPS PUT   ┌──────────────┐
                    │  dist/  │──────────────►│  R2 存储桶    │
                    └────┬────┘  （大文件）     │  10GB 免费    │
                         │                    │  出口零费用    │
                         │ 部署                └──────┬───────┘
                         ▼                           │ 绑定自定义域
                  ┌──────────────┐                   ▼
                  │ Cloudflare   │            ┌──────────────┐
                  │   Pages      │            │ cdn.xxx.com  │
                  │ 无限带宽 免费  │            │ 支持 Range    │
                  └──────┬───────┘            └──────┬───────┘
                         │                           │
                         │                  ┌────────┴─────────┐
                         │                  ▼                  │
                         │            ┌───────────┐            │
                         │            │  Worker   │◄───────────┘
                         │            │ 验签+计数  │──► 读对象
                         │            │ 10万次/天 │
                         │            └───────────┘
                         ▼
              ┌──────────────────────────────────────────┐
              │  访问者（浏览器）—— 只有 GET，没有任何写能力  │
              │  · 页面/图片/代码 ← Pages（CDN 缓存）        │
              │  · 蓝图图谱 ← 静态库 + T3D 文本（本地渲染）   │
              │  · 模型/音频预览 ← cdn.xxx.com（直连+Range）  │
              │  · 点击下载 ← /d/{key}?sig=...（Worker 验签） │
              └──────────────────────────────────────────┘
```

### 3.2 三条数据通路

| 通路 | 路径 | 是否经过计算 | 缓存策略 |
|---|---|---|---|
| 页面 / 图片 / 代码 | 浏览器 → Pages CDN | 否（代码高亮在构建期完成） | HTML 不缓存，`/assets/*` 一年 immutable |
| 蓝图图谱 | 浏览器本地渲染（T3D 文本 + ueblueprint 库） | **否，零服务端** | 库文件长缓存；T3D 文本随页面 |
| 大文件预览 / 下载 | cdn 域名直连 / Worker 验签 | 直连否，下载是（1～3 ms CPU） | 预览长缓存，下载不缓存 |

设计要点：**99% 的请求不产生任何服务器计算**。只有"点击下载"走 Worker，免费额度 10 万次/天。

---

## 4. 技术栈

| 层 | 选型 | 版本 | 选它的理由 |
|---|---|---|---|
| 静态站框架 | **Astro** | 7.x | 默认 0 KB JS；内容集合自带 Zod 校验；同一套代码按需塞入交互组件 |
| 类型系统 | TypeScript | 5.x | frontmatter 写错会在构建时报错 |
| 样式 | Tailwind CSS | 4.x | 产物自动裁剪 |
| 内容 | Astro Content Collections + Zod | 内置 | 一篇内容一个 `.md`，schema 即文档 |
| **蓝图可视化** | **`ueblueprint`** | 3.x | 纯 Web 复刻 UE 蓝图编辑器；解析 T3D 文本；支持双向粘贴；**可离线自托管** |
| **代码高亮** | **Astro 内置 Shiki** | 内置 | **构建期**高亮成静态 HTML，运行时 0 JS；支持 C++ / C# / HLSL |
| 搜索 | Pagefind | 1.x | 构建期静态索引，浏览器端检索，零服务端，中文可用 |
| 思维导图 | markmap-lib / markmap-view | 0.18.x | **直接渲染 Markdown**，复用已有 md 源文件 |
| 3D 预览 | `@google/model-viewer` | 4.3.1（自托管） | 一个 Web Component 搞定旋转缩放；**连同 Draco / Basis 解码器一起自托管**，离线可用 |
| 音频 | 原生 `<audio>` + wavesurfer.js | 7.x | （M6 再做） |
| 图片处理 | sharp | 最新 | 构建期生成多档 AVIF/WebP |
| 3D 处理 | gltf-transform CLI | 4.x | Draco 压缩、贴图转 WebP |
| 对象存储 | Cloudflare R2 | — | 见 2.2 |
| 下载网关 | Cloudflare Workers | — | 验签、计数 |
| 静态托管 | Cloudflare Pages | — | 无限带宽免费 |

### 4.1 关于蓝图可视化库的取舍

`ueblueprint`（npm / GitHub：`barsdeveloper/ueblueprint`）是目前唯一成体系的纯前端 UE 蓝图渲染实现。

| 优点 | 代价 |
|---|---|
| 逐像素复刻 UE 蓝图编辑器观感 | 库体积较大，**必须懒加载** |
| 支持缩放、平移、节点拖动 | 仅能渲染它认得的节点类型，冷门/自定义节点需兜底 |
| 支持把节点复制回 UE（双向） | 需要自托管 `dist/` 到 `public/vendor/` |
| 纯前端，零服务端计算 | 大蓝图（>300 节点）渲染会吃一些内存 |

**使用方式**

```html
<link rel="stylesheet" href="/vendor/ueblueprint/css/ueb-style.min.css" />

<ueb-blueprint data-zoom="-4" style="--ueb-height: 620px">
  <template><!-- T3D 文本 --></template>
</ueb-blueprint>

<script type="module">
  // 只在进入视口后才加载，避免拖累首屏
  import { Blueprint } from '/vendor/ueblueprint/ueblueprint.min.js'
</script>
```

**兜底策略**：解析失败的蓝图，自动降级显示"原始 T3D 文本 + 下载按钮"，并提示"这张图用了自定义节点"。

### 4.2 明确不引入的东西

| 不引入 | 原因 |
|---|---|
| 数据库（MySQL/Postgres/D1） | 内容量千级以内，纯文件 + 构建期索引足够；引入数据库就多一份运维和成本 |
| 后端框架 / 在线管理后台 | 唯一的动态逻辑是"验签下载"；**没有后台就没有攻击面**（见 1.6） |
| CMS（Strapi/Directus） | 需要常驻进程，与"0 计算资源"目标冲突；Markdown 文件本身就是最好的 CMS |
| 前端 SSR 框架 | 静态站不需要 SSR |
| 第三方图床 / 代码托管型 CDN | 素材主权不在自己手里 |

---

## 5. 目录结构

```
D:\MeWeb\
├─ content/                         # 【源】唯一需要手写的地方
│  ├─ projects/                     # 一个项目 = 一个目录（不是单个 md）
│  │  └─ tihsin-tomato/
│  │     ├─ project.md              #   项目概览
│  │     ├─ modules/                #   功能模块（第二级）
│  │     │  ├─ 01-farming.md
│  │     │  ├─ 02-interaction.md
│  │     │  └─ 03-assembly.md
│  │     ├─ blueprints/             #   蓝图存档（T3D 文本）
│  │     │  ├─ BP_Farming_Master.t3d
│  │     │  └─ BP_PlantStem_Segment.t3d
│  │     ├─ code/                   #   C++ 源码
│  │     │  ├─ InteractionManagerComponent.h
│  │     │  └─ InteractionManagerComponent.cpp
│  │     └─ mindmaps/               #   该项目下的思维导图
│  │        └─ 农场系统总览.md
│  ├─ gallery/                      # 一个图集 = 一个目录
│  │  ├─ ue5-renders/
│  │  │  └─ album.md                #   图集元信息（图片走 assets.json 引用）
│  │  └─ concept-art/
│  ├─ docs/                         # 文档：一篇一个 md
│  └─ models/                       # 3D 模型：一个模型一个 md（glb 本身放 public/ 或 R2）
│     └─ chibi-model.md
│
├─ inbox/                           # 【源】新素材丢这里，publish 脚本扫
├─ library/                         # 【归档】处理完的原始素材（不进 Git）
├─ data/
│  ├─ assets.json                   # 【生成】资源清单
│  └─ assets.lock.json              # 【生成】已上传记录（增量用）
│
├─ scripts/
│  ├─ publish.mjs                   # 上传 R2 + 派生缩略图 + 更新 assets.json
│  ├─ new-project.mjs               # 交互式生成项目骨架
│  ├─ new-module.mjs                # 生成功能模块 md 草稿
│  ├─ new-album.mjs                 # 生成图集草稿
│  ├─ import-blueprint.mjs          # 从文件导入 T3D，清洗 + 预检 + 归档
│  ├─ build-manifest.mjs            # 构建前把 assets.json 注入 src/data/
│  ├─ sign-links.mjs                # 生成签名下载链接
│  ├─ sync-vendor.mjs               # 把 ueblueprint / model-viewer（含解码器）拷到 public/vendor/
│  └─ release.mjs                   # 一键：上传 → 构建 → 部署
│
├─ worker/                          # 下载网关
│  ├─ src/index.ts
│  └─ wrangler.toml
│
├─ src/
│  ├─ content.config.ts             # 内容集合 schema（Zod）
│  ├─ lib/
│  │  └─ gltf-stats.ts              # 构建期读 glb：面数 / 材质 / 贴图 / 包围盒 / 压缩情况
│  ├─ data/
│  │  ├─ site.ts                    # 站点配置（站点名/作者/域名/导航）
│  │  └─ assets.json                # 【生成】
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ ProjectLayout.astro        # 项目内的二级导航（模块 / 蓝图 / 导图）
│  ├─ components/
│  │  ├─ cards/WorkCard.astro
│  │  ├─ cards/AlbumCard.astro
│  │  ├─ viewer/BlueprintViewer.astro   # ueblueprint 岛（懒加载 + 兜底）
│  │  ├─ viewer/CodeViewer.astro        # Shiki 高亮 + 复制 + 下载
│  │  ├─ viewer/MindmapViewer.astro     # markmap 岛
│  │  ├─ viewer/ModelViewer.astro
│  │  ├─ viewer/ImageViewer.astro       # 灯箱（原生 dialog）
│  │  ├─ viewer/DocViewer.astro         # pdf.js 只读预览
│  │  ├─ Masonry.astro                  # CSS 多列瀑布流容器
│  │  ├─ FileList.astro
│  │  └─ DownloadButton.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ projects/index.astro
│  │  ├─ projects/[...path].astro       # 项目 / 模块 / 蓝图 / 导图 的多级路由
│  │  ├─ gallery/index.astro
│  │  ├─ gallery/[album].astro
│  │  ├─ docs/index.astro
│  │  ├─ docs/[slug].astro
│  │  ├─ models/index.astro
│  │  ├─ audio/index.astro              # 最后做
│  │  ├─ tags/[tag].astro
│  │  ├─ about.astro
│  │  ├─ search.astro
│  │  ├─ feed.xml.ts
│  │  └─ 404.astro
│  ├─ styles/global.css
│  └─ styles/ueb-overrides.css          # 蓝图库的配色对齐站点主题
│
├─ public/
│  ├─ _headers
│  ├─ vendor/
│  │  ├─ ueblueprint/                   # 自托管（脚本同步）
│  │  └─ pdfjs/                         # 自托管（只读预览用）
│  ├─ assets/thumbs/                    # 小缩略图（< 25 MiB，随站点部署）
│  └─ favicon.svg
│
├─ docs/                                 # 项目文档
├─ astro.config.mjs
├─ package.json
└─ README.md
```

**设计要点**：`content/` 与 `inbox/` 是纯输入；`data/`、`public/vendor/`、`src/data/assets.json` 是纯输出（可随时删除重建）。备份只需管 `content/` + `inbox/` + `library/`。

---

## 6. 数据模型

### 6.1 资源（Asset）—— `data/assets.json`

```jsonc
{
  "img-20260915-a1b2": {
    "id": "img-20260915-a1b2",
    "type": "image",                    // image|model3d|audio|document|video|archive|blueprint
    "name": "farm-cover.png",           // 原始文件名（下载时用）
    "key": "images/2026/farm-cover.a1b2c3.webp",   // R2 对象键（含内容哈希）
    "mime": "image/webp",
    "size": 184320,
    "sha256": "a1b2c3...",
    "title": "农场系统封面",
    "variants": [                        // 派生尺寸（瀑布流 srcset 用）
      { "w": 480,  "key": "...-480.avif",  "size": 31200 },
      { "w": 960,  "key": "...-960.avif",  "size": 96400 },
      { "w": 1600, "key": "...-1600.avif", "size": 210300 }
    ],
    "meta": { "width": 3840, "height": 2160 },   // 原始像素，必须写进 <img width/height>
    "createdAt": "2026-09-15T10:00:00+08:00",
    "visibility": "public"
  }
}
```

**关键设计**

- `key` 含内容哈希 → 内容变了名字就变 → 可打 `immutable` 缓存一年（**内容寻址**）。
- `sha256` 用于**上传去重**：同一文件传两次只占一份空间。
- `meta.width/height` 是**原始像素**，瀑布流靠它写死 `<img width height>`，避免抖动。

### 6.2 项目（Project）—— `content/projects/<slug>/project.md`

```yaml
---
title: 钛心番茄
slug: tihsin-tomato
kind: project
summary: UE5 火星生存游戏，含农场、交互、拼装合成、化肥提炼四大系统。
cover: img-20260915-a1b2
engine: UE 5.4                     # 引擎版本
langs: [C++, Blueprint]            # 用了哪些实现方式
tags: [UE5, 生存, 农场系统]
links:
  repo: https://github.com/xxx
  demo: https://example.com
license: All-Rights-Reserved
visibility: public
featured: true
createdAt: 2026-03-01
updatedAt: 2026-09-15
---

## 项目背景

Markdown 正文……
```

### 6.3 功能模块（Module）—— `content/projects/<slug>/modules/NN-<name>.md`

```yaml
---
title: 农场系统
slug: farming
order: 1                            # 模块顺序
summary: 作物分节生长、病害可视化、交互收割。
blueprints:                         # 本模块涉及的蓝图存档
  - id: BP_Farming_Master
    file: BP_Farming_Master.t3d
    title: 农场主控蓝图
    desc: 负责地块注册、生长 Tick 分发。
    assetPath: /Game/Farming/BP_Farming_Master    # UE 里的资产路径
  - id: BP_PlantStem_Segment
    file: BP_PlantStem_Segment.t3d
    title: 植株分节生长
code:                               # 本模块涉及的代码文件
  - file: InteractionManagerComponent.h
    title: 交互管理组件 · 声明
  - file: InteractionManagerComponent.cpp
    title: 交互管理组件 · 实现
assets:                             # 本模块的截图/附件
  - img-20260915-c3d4
mindmaps:
  - 农场系统总览.md
---

## 模块说明

正文……
```

### 6.4 蓝图存档（Blueprint）—— `content/projects/<slug>/blueprints/*.t3d`

**纯文本文件，内容就是 UE 复制出来的原文**，不做任何加工。元数据写在模块的 frontmatter 里（见 6.3），这样同一个 `.t3d` 可以被多个模块引用。

好处：`.t3d` 保持纯净 → 用户可以直接下载后粘回 UE；元数据集中管理 → 改标题不用动原文件。

### 6.5 图集（Album）—— `content/gallery/<album>/album.md`

**实际 schema**（`src/content.config.ts` 的 `gallerySchema`，2026-09-20）：

```yaml
---
title: 我爱用的装饰性图案（自制素材库）
titleEn: Decorative Motif
summary: 一套纯色无底装饰性图案。
cover: /media/marathon-volt/xxx.webp
order: 10
credit: 来源 / 版权说明
tags: [装饰性图标]
images:                                 # 数组顺序 = 页面上从上到下的顺序
  - src: /media/marathon-volt/a.webp
    w: 1600                             # 上传/扫描时自动量好
    h: 900
    alt: ''                             # 可留空 → 页面退回用图集标题
    caption: 图下小注                     # 可留空 → 不渲染 figcaption
    group: 常见标志                      # 同组会插一个分组小标题
    layout: half                        # full | two-thirds | half | third
    align: center                       # center | left | right
updated: 2026-08-26
---
```

排版为什么是"顺序 + 占宽 + 对齐"而不是自由拖拽定位：图集页的图片流是
**6 栏 CSS 网格**（`grid-auto-flow: row dense`），每张图按 `layout` 跨栏，
于是半栏图自动并排、整栏图独占一行。这套模型在编辑器里是**拖缩略图**
（所见即所得：缩略图上怎么并排，页面上就怎么并排），不需要坐标系统，
也不会出现"作者排好的版在窄屏上错位"。

`panel`（说明面板配色）**已废弃**（2026-09-20 用户要求删掉配色调节）：
字段保留仅为兼容老内容，页面不读取，编辑器不显示。

> 上面 `photos` / `asset` / `slug` / `visibility` 那套是**早期草案**（配合
> `assets.json` 内容寻址方案），已不采用：`slug` 由目录名决定、`visibility`
> 统一由 `draft` 表达、图片直接用 `public/` 路径而不是资产 ID。

### 6.6 文档（Document）—— `content/docs/<slug>.md`

```yaml
---
title: UE5 蓝图与 C++ 混合开发规范
slug: ue5-bp-cpp-convention
summary: 项目内的命名、分层与通信约定。
docMode: readonly                 # public | readonly | strict（见 1.5）
file: doc-20260915-k1l2           # 指向 assets.json 里的 PDF
pages: 42
tags: [规范, UE5]
visibility: public
createdAt: 2026-08-12
---
```

### 6.7 3D 模型（Model）—— `content/models/<slug>.md`

模型文件本身**不进 frontmatter**（glb 动辄几十 MB，YAML 里塞不下也不该塞），
这里只登记路径与表现参数；文件放 `public/media/models/`（小的）
或 R2（超过 25 MiB，见铁律 1）。

```yaml
---
title: 甲壳虫概念车
titleEn: Beetle Concept
summary: 一个 3 万面的硬表面模型，贴图全转成了 2K WebP。
order: 10
tags: [硬表面, 载具]
cover: /media/models/beetle.webp        # 可留空：留空则列表卡片用内置占位
src: /media/models/beetle-draco.glb     # 渲染用（通常就是压缩版）
srcNote: 面数减半、贴图 2K WebP
original: /media/models/beetle-orig.glb # 可选。给了下载区就多一行「原始版」
originalNote: 未压缩，21 MB
viewer:                                 # 全部可留空，留空即默认
  autoRotate: true
  orbit: turntable                      # sphere | turntable
  zoom: true
  theta: -28
  phi: 70
  exposure: 1
  shadow: 1
  transparent: true
updated: 2026-09-16
---

## 这是什么

正文……
```

**为什么没有 `downloads` 数组**：实际需求就是"压缩版 + 原始版"两份，
做成数组会让编辑器多一整套增删行的交互，换来的只是多支持第 3、4 个文件 ——
那种情况本来就该走 R2 与验签下载（见 8.9），不该塞在 frontmatter 里。

**规格数字不在 frontmatter 里**：面数、顶点、材质、贴图、包围盒、体积
全部在构建期从 glb 文件里读出来（见 8.11）。手填的数字迟早会和文件对不上。
只有当模型放在 R2、构建期读不到文件时，才会用到可选的 `stats` 覆盖字段。

### 6.8 Zod schema（`src/content.config.ts`）

```ts
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '*/project.md', base: './content/projects' }),
  schema: z.object({
    title: z.string().max(80),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    summary: z.string().max(200),
    cover: z.string().optional(),
    engine: z.string().default('UE 5.4'),
    langs: z.array(z.enum(['C++', 'Blueprint', 'Python', 'HLSL'])).default([]),
    tags: z.array(z.string()).default([]),
    links: z.record(z.string().url()).default({}),
    license: z.string().default('All-Rights-Reserved'),
    visibility: z.enum(['public', 'unlisted', 'private']).default('public'),
    featured: z.boolean().default(false),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
})

const modules = defineCollection({
  loader: glob({ pattern: '*/modules/*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    order: z.number().default(0),
    summary: z.string().default(''),
    blueprints: z.array(z.object({
      id: z.string(),
      file: z.string(),
      title: z.string(),
      desc: z.string().default(''),
      assetPath: z.string().optional(),
    })).default([]),
    code: z.array(z.object({
      file: z.string(),
      title: z.string().default(''),
      lang: z.enum(['cpp', 'c', 'csharp', 'hlsl', 'python', 'ini']).default('cpp'),
    })).default([]),
    assets: z.array(z.string()).default([]),
    mindmaps: z.array(z.string()).default([]),
  }),
})

const albums = defineCollection({
  loader: glob({ pattern: '*/album.md', base: './content/gallery' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cover: z.string().optional(),
    summary: z.string().default(''),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    visibility: z.enum(['public', 'unlisted', 'private']).default('public'),
    photos: z.array(z.object({
      asset: z.string(),
      title: z.string().optional(),
      caption: z.string().optional(),
    })).default([]),
  }),
})

const docs = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/docs' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string().default(''),
    docMode: z.enum(['public', 'readonly', 'strict']).default('public'),
    file: z.string(),
    pages: z.number().optional(),
    tags: z.array(z.string()).default([]),
    visibility: z.enum(['public', 'unlisted', 'private']).default('public'),
    createdAt: z.coerce.date(),
  }),
})

export const collections = { projects, modules, albums, docs }
```

写错标签名、日期格式、引用了不存在的资源 id，**构建阶段就会报错**，不会等到用户点开发现白屏。

---

## 7. 路由与页面设计

| 路由 | 页面 | 核心内容 | 交互组件 | 加载策略 |
|---|---|---|---|---|
| `/` | 首页 | 简介、精选项目、最新更新 | — | 静态 |
| `/projects` | 项目列表 | 卡片 + 引擎/语言/标签筛选 | FilterBar | 静态 |
| `/projects/[project]` | **项目概览** | 封面、正文、模块导航、导图入口、蓝图总览、整包下载 | — | 静态 |
| `/projects/[project]/[module]` | **功能模块** | 说明 + 蓝图图谱 + 代码 + 截图 + 附件 | BlueprintViewer、CodeViewer | 按需 |
| `/projects/[project]/blueprint/[id]` | 蓝图独立页 | 单个蓝图全屏查看（方便分享链接） | BlueprintViewer | 按需 |
| `/projects/[project]/mindmaps` | 导图列表 | 该项目下的全部导图 | — | 静态 |
| `/projects/[project]/mindmaps/[slug]` | 导图详情 | markmap 可交互导图 | MindmapViewer | 按需 |
| `/gallery` | **图集列表** | 分区卡片墙（封面 + 张数 + 日期） | — | 静态 |
| `/gallery/[album]` | **图集详情** | **6 栏网格图片流（不裁切，可排版）** + 说明面板 | — | 静态 |
| `/docs` | 文档列表 | 卡片（页数、体积、只读标记） | — | 静态 |
| `/docs/[slug]` | 文档预览 | pdf.js 只读阅读器；按 `docMode` 决定有无下载 | DocViewer | 按需 |
| `/models` | **模型列表** | 卡片墙（封面 / 面数 / 体积 / 标签）——**不加载 3D 库** | — | 静态 |
| `/models/[slug]` | **模型详情** | 可拖拽旋转的 3D 视口 + 规格表 + 下载 | model-viewer | 懒加载 |
| `/audio` | 音频 | **最后做（M6）** | AudioPlayer | — |
| `/tags/[tag]` | 标签聚合 | 该标签下全部内容 | — | 静态 |
| `/search` | 搜索 | Pagefind 即时搜索 | Pagefind UI | 按需 |
| `/about` | 关于 | 联系方式、技术栈、本站架构 | — | 静态 |
| `/feed.xml` `/sitemap-index.xml` | — | — | — | 构建期生成 |
| `404` | — | — | — | 静态 |

**设计原则**

- **项目内的板块用二级导航切换**（概览 / 模块 / 蓝图 / 导图），`ProjectLayout` 统一承载，避免用户在层级里迷路。
- **列表页统一卡片组件**，靠 `kind` 切换元信息行。
- **交互库一律懒加载**，首页 JS 目标 < 5 KB；蓝图页因为要加载图谱库允许放宽，但绝不影响其他页面。
- **蓝图页给"下载 .t3d"按钮** —— 别人拿走能直接粘回 UE，这是这个功能最实用的地方。

---

## 8. 核心功能实现

### 8.1 内容集合与构建期索引

构建流程：

1. `sync-vendor.mjs` 把 `ueblueprint` / `pdf.js` 拷到 `public/vendor/`；
2. 扫 `content/**`，用 Zod 校验所有 frontmatter；
3. 读 `data/assets.json`，把资源 id 解析成 CDN URL + 签名下载 URL；
4. **构建期用 Shiki 把 C++ 源码高亮成静态 HTML**（运行时 0 JS）；
5. Astro 生成静态 HTML，Pagefind 建索引。

```jsonc
{
  "scripts": {
    "dev": "node scripts/build-manifest.mjs && astro dev",
    "build": "node scripts/sync-vendor.mjs && node scripts/build-manifest.mjs && astro build && pagefind --site dist",
    "new:project": "node scripts/new-project.mjs",
    "new:module": "node scripts/new-module.mjs",
    "new:album": "node scripts/new-album.mjs",
    "import:bp": "node scripts/import-blueprint.mjs",
    "publish": "node scripts/publish.mjs",
    "release": "node scripts/publish.mjs && npm run build && npm run deploy",
    "deploy": "wrangler pages deploy dist --project-name=meweb"
  }
}
```

> **上面这份是方案期的规划，实际实现的与它有几处出入**（`build-manifest.mjs`、
> `new-*.mjs`、`import-blueprint.mjs`、`publish.mjs` 目前都不存在 ——
> 内容不是用脚手架建的，是用本地编辑器 `pnpm admin` 建的；`data/assets.json`
> 那条 CDN 流水线属于 M4）。当前真实的 `build` 是：
>
> ```jsonc
> "build": "node scripts/build.mjs"
> ```
>
> `scripts/build.mjs` 分四步跑：vendor 同步 → astro 构建 → **sitemap 生成** → Pagefind 索引。
> **每一步都带超时**，并且能识别 `astro build` 那类「页面全生成完、但进程不退出」的卡死
> （详见 §8.11 末尾的排查记录）。sitemap 之所以改成自己生成、不用 `@astrojs/sitemap`，
> 正是因为那条集成跑在卡死点之后 —— 原因写在 `scripts/gen-sitemap.mjs` 顶部。

### 8.2 蓝图存档：T3D 文本 → 可视化图谱

**这是 v2.0 最核心的新功能**，分三步：导出 → 导入清洗 → 渲染。

#### 第 1 步：在 UE 里导出

1. 打开蓝图图表；
2. `Ctrl+A` 全选节点（也可以只选一个功能块）；
3. `Ctrl+C`；
4. 粘到文本编辑器，存成 `.t3d`。

> **建议按功能块分块导出**。一张 300 节点的巨型图没人看得下去；拆成"初始化 / 生长 Tick / 病害判定"三张图，可读性和加载性能都更好。

#### 第 2 步：导入并清洗（`scripts/import-blueprint.mjs`）

UE 复制出来的文本有时会带零宽字符，需要清洗；同时做**预检**，提前发现库解析不了的节点：

```js
// scripts/import-blueprint.mjs
import fs from 'node:fs/promises'
import path from 'node:path'

const NODE_RE = /^Begin Object Class=([^\s]+)/gm

export function analyze(t3d) {
  const classes = [...new Set([...t3d.matchAll(NODE_RE)].map((m) => m[1]))]
  const nodeCount = [...t3d.matchAll(NODE_RE)].length
  return {
    nodeCount,
    classCount: classes.length,
    // 已知能渲染的节点族
    unknown: classes.filter(
      (c) => !/K2Node_|EdGraphNode_Comment|EdGraphNode_Link|K2Node_Knot/.test(c)
    ),
  }
}

export function sanitize(raw) {
  return raw.replace(/\u200b|\ufeff/g, '').replace(/\r\n/g, '\n').trim() + '\n'
}

const [src, dest] = process.argv.slice(2)
const clean = sanitize(await fs.readFile(src, 'utf8'))
const info = analyze(clean)

console.log(`节点数: ${info.nodeCount}  节点类型: ${info.classCount}`)
if (info.unknown.length) {
  console.warn('⚠ 可能无法渲染的节点类型:')
  info.unknown.forEach((c) => console.warn('   ' + c))
}
await fs.mkdir(path.dirname(dest), { recursive: true })
await fs.writeFile(dest, clean, 'utf8')
console.log(`已写入 ${dest}`)
```

#### 第 3 步：渲染（`BlueprintViewer.astro`）

```astro
---
// src/components/viewer/BlueprintViewer.astro
import fs from 'node:fs/promises'
import path from 'node:path'

interface Props {
  project: string     // 项目 slug
  file: string        // t3d 文件名
  title: string
  height?: number
  assetPath?: string
}

const { project, file, title, height = 620, assetPath } = Astro.props
const abs = path.join(process.cwd(), 'content/projects', project, 'blueprints', file)
const t3d = await fs.readFile(abs, 'utf8')

// 粗粒度预检：有无法识别的节点族时降级为文本视图
const classes = [...new Set([...t3d.matchAll(/^Begin Object Class=([^\s]+)/gm)].map((m) => m[1]))]
const unknown = classes.filter((c) => !/K2Node_|EdGraphNode_/.test(c))
const degraded = unknown.length > 0
---

<section class="bp" data-bp>
  <header class="bp-head">
    <h3>{title}</h3>
    {assetPath && <code class="bp-path">{assetPath}</code>}
    <a class="btn btn-ghost"
       href={`/projects/${project}/blueprint/${file.replace(/\.t3d$/, '')}`}>全屏查看</a>
    <a class="btn btn-ghost"
       href={`/dl/blueprint/${project}/${file}`} download>下载 .t3d</a>
  </header>

  {degraded ? (
    <div class="notice">
      <span aria-hidden="true">◆</span>
      <span>
        这张图包含 <b>{unknown.length}</b> 种无法可视化的自定义节点类型，已降级为原始文本。
        可下载 .t3d 后在 UE 里查看完整图形。
      </span>
      <pre class="bp-raw">{t3d.slice(0, 4000)}</pre>
    </div>
  ) : (
    <div class="bp-stage" style={`--ueb-height:${height}px`}>
      <ueb-blueprint data-zoom="-4" data-pagefind-ignore>
        <template set:html={t3d} />
      </ueb-blueprint>
      <p class="bp-hint">滚轮缩放 · 拖拽平移 · 可全选后 Ctrl+C 粘回 UE</p>
    </div>
  )}
</section>

<link rel="stylesheet" href="/vendor/ueblueprint/css/ueb-style.min.css" />

<script>
  // 图谱库体积较大：进入视口才加载
  const io = new IntersectionObserver(async (entries) => {
    if (!entries.some((e) => e.isIntersecting)) return
    io.disconnect()
    await import('/vendor/ueblueprint/ueblueprint.min.js')
  }, { rootMargin: '300px' })
  document.querySelectorAll('[data-bp]').forEach((el) => io.observe(el))
</script>
```

**注意点**

| 问题 | 处理 |
|---|---|
| T3D 里含 `<` `>` `&` | 用 `<template set:html={t3d}>`；`.t3d` 不含脚本标签，风险可控 |
| 深色/浅色模式 | 库提供 `.ueb-light-mode`；按 `data-theme` 切换类名，并用 `ueb-overrides.css` 对齐站点配色 |
| 大图卡顿 | 默认 `data-zoom="-4"` 缩小显示全局，用户按需放大 |
| Pagefind 索引 | `<ueb-blueprint>` 加 `data-pagefind-ignore`，避免把 T3D 原文塞进搜索索引 |
| 库更新 | `sync-vendor.mjs` 从 `node_modules/ueblueprint/dist/` 拷到 `public/vendor/` |

### 8.3 C++ 代码展示

**用 Astro 内置的 Shiki，在构建期高亮**——输出带内联样式的静态 HTML，运行时零 JS、零额外请求。

```astro
---
// src/components/viewer/CodeViewer.astro
import fs from 'node:fs/promises'
import path from 'node:path'
import { Code } from 'astro:components'

interface Props {
  project: string
  file: string
  title?: string
  lang?: string
  maxLines?: number
  allowDownload?: boolean
}

const { project, file, title, lang = 'cpp', maxLines, allowDownload = true } = Astro.props
const abs = path.join(process.cwd(), 'content/projects', project, 'code', file)
const source = await fs.readFile(abs, 'utf8')

const lines = source.split('\n')
const truncated = !!maxLines && lines.length > maxLines
const shown = truncated ? lines.slice(0, maxLines).join('\n') : source
const kb = (Buffer.byteLength(source) / 1024).toFixed(1)
---

<figure class="code">
  <figcaption class="code-head">
    <span class="code-name">{title || file}</span>
    <span class="code-meta">{lines.length} 行 · {kb} KB · {lang}</span>
    <button class="icon-btn" data-copy={`#code-${file}`} aria-label="复制全部代码">复制</button>
    {allowDownload && (
      <a class="btn btn-ghost" href={`/dl/code/${project}/${file}`} download>下载</a>
    )}
  </figcaption>

  <div id={`code-${file}`} class="code-body" data-pagefind-ignore>
    <Code code={shown} lang={lang} theme="github-dark" wrap={false} />
    {truncated && <p class="code-more">仅显示前 {maxLines} 行，完整内容请下载源文件。</p>}
  </div>
</figure>

<script>
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const el = document.querySelector(btn.getAttribute('data-copy')!)
      if (!el) return
      await navigator.clipboard.writeText(el.textContent || '')
      const old = btn.textContent
      btn.textContent = '已复制'
      setTimeout(() => (btn.textContent = old), 1400)
    })
  })
</script>
```

| 能力 | 做法 |
|---|---|
| 语法高亮 | Shiki，构建期完成，支持 C++ / C# / HLSL / INI |
| 长文件 | `maxLines` 截断 + 提示下载全文（避免一页 3000 行） |
| 复制全文 | `navigator.clipboard`，几行 JS |
| 下载源码 | 走签名链接，可统计 |
| 搜索 | 代码块加 `data-pagefind-ignore`；需要检索代码的话另建纯文本索引（本阶段不做） |

### 8.4 项目两级层级与模块页

`ProjectLayout.astro` 承载项目内的二级导航：

```astro
---
interface Props {
  project: { slug: string; title: string }
  active: 'overview' | 'modules' | 'blueprints' | 'mindmaps'
}
const { project, active } = Astro.props
const tabs = [
  { key: 'overview',   href: `/projects/${project.slug}`,            label: '概览' },
  { key: 'modules',    href: `/projects/${project.slug}#modules`,    label: '功能模块' },
  { key: 'blueprints', href: `/projects/${project.slug}/blueprints`, label: '蓝图存档' },
  { key: 'mindmaps',   href: `/projects/${project.slug}/mindmaps`,   label: '思维导图' },
]
---
<nav class="subnav" aria-label="项目导航">
  {tabs.map((t) => (
    <a href={t.href} aria-current={t.key === active ? 'page' : undefined}>{t.label}</a>
  ))}
</nav>
```

模块页按顺序渲染：**说明正文 → 蓝图存档 → 代码 → 截图 → 附件**。

### 8.5 图片：图集分区 + 网格图片流 + 手动排版

> **2026-09-20 状态更新（本节以下内容是早期方案，实际实现见"现在的实现"）**
>
> 实际落地的图集详情页（`src/pages/gallery/[album].astro`）与下面这版早期草案有三点不同：
>
> 1. **不是多列瀑布流，是 6 栏网格流**。因为用户要"手动排版图片的位置"——
>    多列瀑布流由浏览器按列高自动分配，作者无法控制哪张图跟哪张并排。
>    改成 6 栏网格 + `grid-auto-flow: row dense` 之后，每张图按 `layout`
>    跨 1/2/3/4/6 栏，**连着的两张半栏图自动并排**，而整栏图照旧独占一行。
>    顺序由编辑器拖拽决定，页面上从上到下就是清单顺序。
> 2. **说明面板不做配色调节**（用户 2026-09-20 要求删掉）。面板直接吃站点设计
>    token，跟其它页面一套观感；`--panel-*` 那套 CSS 变量重映射已经撤了。
>    frontmatter 里的 `panel` 字段保留但不读取（兼容老内容）。
> 3. **没有灯箱**。图集页目前是"一图一段、按比例完整显示"，点击放大属于后续排期。
>
> **现在的实现**
>
> ```css
> /* 6 栏网格：--span 由内容里的 layout 档位决定 */
> .stream {
>   display: grid;
>   grid-template-columns: repeat(6, minmax(0, 1fr));
>   grid-auto-flow: row dense;   /* 让"半宽 + 半宽"落到同一行 */
>   gap: 26px 18px;
> }
> .span-6 { grid-column: 1 / -1; }   /* full  —— 整栏 */
> .span-4 { grid-column: span 4; }   /* two-thirds */
> .span-3 { grid-column: span 3; }   /* half —— 两张并排 */
> .span-2 { grid-column: span 2; }   /* third —— 三张并排 */
>
> /* 绝不做的事：object-fit: cover / aspect-ratio / 固定 height —— 都会裁切 */
> .shot img { width: 100%; height: auto; display: block; }
> ```
>
> 窄于 720px 时一律退回单栏：手机上半宽的图没法看。
>
> 图片进库有两条路，**都在编辑器里完成**（详见本文档 12.4「新增一个图集」）：
> 多选上传（自动落盘 + 读文件头量宽高 + 清洗文件名），或扫描已有目录。
> 大 PNG 的减重在**构建期**自动做（`scripts/optimize-png.mjs`，只补同名 `.webp`，
> 不改 `content/`）。

#### 早期方案：CSS 多列瀑布流（未采用）

用 **CSS 多列布局**，不用 JS 计算高度——零 JS、无布局抖动、天然不裁切。

```css
/* src/styles/global.css */
.masonry { column-count: 3; column-gap: 16px; }
@media (max-width: 1024px) { .masonry { column-count: 2; } }
@media (max-width: 640px)  { .masonry { column-count: 1; } }

.masonry > figure {
  break-inside: avoid;      /* 关键：卡片不被拆到两列 */
  margin: 0 0 16px;
}

.masonry img {
  width: 100%;
  height: auto;             /* 关键：高度跟着原始比例走，绝不裁切 */
  display: block;
  border-radius: var(--radius-sm);
}
```

> **绝不要写** `object-fit: cover`、`aspect-ratio: 1/1`、固定 `height`。这三样都会裁切图片，直接违反需求。

```astro
---
// src/components/Masonry.astro
interface Props { photos: { asset: Asset; title?: string; caption?: string }[] }
const { photos } = Astro.props
---
<div class="masonry">
  {photos.map((p) => (
    <figure
      data-lightbox
      data-src={p.asset.variants.at(-1)?.url}
      data-title={p.title ?? p.asset.title}
      data-caption={p.caption}
      data-size={`${p.asset.meta.width}×${p.asset.meta.height}`}
      data-download={p.asset.downloadUrl}
    >
      <img
        src={p.asset.variants[1].url}
        srcset={p.asset.variants.map((v) => `${v.url} ${v.w}w`).join(', ')}
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        width={p.asset.meta.width}
        height={p.asset.meta.height}
        alt={p.asset.title ?? ''}
        loading="lazy"
        decoding="async"
      />
      {p.title && <figcaption>{p.title}</figcaption>}
    </figure>
  ))}
</div>
```

**注意**：`width`/`height` 必须写**原始像素**，浏览器会按比例自动缩放；写错会导致瀑布流高度算错、CLS 爆炸。

#### 灯箱（点击放大看详情）

用原生 `<dialog>`，无障碍和 Esc 关闭都是浏览器自带的：

```astro
<!-- src/components/viewer/ImageViewer.astro -->
<dialog id="lightbox" class="lightbox">
  <div class="lb-stage"><img id="lb-img" alt="" /></div>
  <aside class="lb-info">
    <h3 id="lb-title"></h3>
    <p id="lb-caption"></p>
    <dl><dt>原始尺寸</dt><dd id="lb-size"></dd></dl>
    <a id="lb-dl" class="btn btn-primary" download>下载原图</a>
    <button class="btn btn-ghost" data-lb-close>关闭</button>
  </aside>
  <button class="lb-nav lb-prev" data-lb-prev aria-label="上一张">‹</button>
  <button class="lb-nav lb-next" data-lb-next aria-label="下一张">›</button>
</dialog>

<script>
  const dlg = document.getElementById('lightbox')!
  const figs = [...document.querySelectorAll('[data-lightbox]')]
  let idx = 0

  const show = (i: number) => {
    idx = (i + figs.length) % figs.length
    const f = figs[idx]
    document.getElementById('lb-img')!.src = f.dataset.src!
    document.getElementById('lb-title')!.textContent = f.dataset.title || ''
    document.getElementById('lb-caption')!.textContent = f.dataset.caption || ''
    document.getElementById('lb-size')!.textContent = f.dataset.size || ''
    document.getElementById('lb-dl')!.href = f.dataset.download || '#'
    if (!dlg.open) dlg.showModal()
  }

  figs.forEach((f, i) => f.addEventListener('click', () => show(i)))
  document.querySelector('[data-lb-close]')?.addEventListener('click', () => dlg.close())
  document.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(idx - 1))
  document.querySelector('[data-lb-next]')?.addEventListener('click', () => show(idx + 1))

  // 点击遮罩关闭（点内容区不关）；Esc 由 <dialog> 原生处理
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close() })
  document.addEventListener('keydown', (e) => {
    if (!dlg.open) return
    if (e.key === 'ArrowLeft') show(idx - 1)
    if (e.key === 'ArrowRight') show(idx + 1)
  })
</script>
```

灯箱大图用**最高档变体（1600w）**而不是原始文件——原图可能 20 MB，手机加载不动；真要原图，点"下载原图"。

### 8.6 文档：只读预览与下载开关

| `docMode` | 在线看 | 下载按钮 | 原文件位置 | pdf.js 工具栏 |
|---|---|---|---|---|
| `public` | ✅ | ✅ | R2 公开前缀 | 全功能 |
| `readonly` | ✅ | ❌ | R2 私有前缀，只经 Worker 签名访问 | 隐藏"下载/打印"按钮 |
| `strict` | ✅（图片流） | ❌ | 构建期转图片序列，原 PDF 根本不部署 | 无（图片浏览器） |

**自托管 pdf.js 并裁剪工具栏**（`readonly` 用）：fork `public/vendor/pdfjs/viewer.html`，把 toolbar 里的 `#download`、`#print` 两个按钮节点删掉，并在初始化时置空 `PDFViewerApplication.download` / `.print`。

这不是"防黑客"级别的保护（浏览器总能抓到网络请求），但足以达成"站点上不提供下载入口"的目标。真要彻底不外传，用 `strict`。

### 8.7 思维导图（收纳进项目）

不再有独立的 `/mindmaps` 栏目。每个项目下可以有多个导图，一个导图就是一个 Markdown 文件：

```
content/projects/tihsin-tomato/mindmaps/农场系统总览.md
```

```astro
---
// src/components/viewer/MindmapViewer.astro
interface Props { md: string; height?: number }
const { md, height = 560 } = Astro.props
---
<div class="mm-wrap">
  <svg class="mm" style={`height:${height}px`} data-pagefind-ignore></svg>
  <textarea class="mm-src" hidden>{md}</textarea>
</div>

<script>
  document.querySelectorAll('.mm').forEach((el) => {
    const md = (el.closest('.mm-wrap')!.querySelector('.mm-src') as HTMLTextAreaElement).value
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const [{ Transformer }, { Markmap }] = await Promise.all([
        import('markmap-lib'), import('markmap-view'),
      ])
      const { root } = new Transformer().transform(md)
      const mm = Markmap.create(el as unknown as SVGElement, {
        duration: 320, maxWidth: 240, spacingVertical: 8, initialExpandLevel: 3,
      }, root)
      new ResizeObserver(() => mm.fit()).observe(el)
    }, { rootMargin: '200px' })
    io.observe(el)
  })
</script>
```

**复用优势**：写项目思路时顺手写的 Markdown，直接就是可交互导图，不用再单独维护一份 xmind。

### 8.8 资源上传流水线（`scripts/publish.mjs`）

| 步骤 | 动作 | 产物 |
|---|---|---|
| 1 | 扫 `inbox/` | 待处理文件列表 |
| 2 | 识别 MIME 与类型 | `type` 字段 |
| 3 | 计算 SHA-256 | 去重键 |
| 4 | 查 `assets.lock.json`，命中则跳过 | 增量发布 |
| 5 | 派生处理（见下表） | 缩略图 / 压缩模型 / 转码 |
| 6 | 上传 R2（带缓存头与元数据） | R2 对象 |
| 7 | 回写 `data/assets.json` | 资源清单 |
| 8 | 归位源文件到 `library/` | 有序归档 |

| 类型 | 派生动作 |
|---|---|
| image | 生成 480/960/1600 三档 AVIF+WebP；缩略图进 `public/assets/thumbs/` |
| model3d | `gltf-transform optimize ... --simplify --texture-compress webp`；渲染首帧封面 |
| document | PDF 首页 → WebP 缩略图；按 `docMode` 选公开/私有前缀上传 |
| audio / video | ffmpeg 转码 + 抽首帧 |
| **blueprint** | 只做 `sanitize()` 清洗与节点预检，**原文不加工**（保证能粘回 UE） |

> **大文件**：R2 单次 `PUT` 上限约 5 GB；超过 200 MB 的文件改用 `@aws-sdk/lib-storage` 自动分片。

### 8.9 下载与签名（Worker）

- **预览路径**：`https://cdn.example.com/<key>`（R2 自定义域，公开、可 CDN 缓存、支持 HTTP Range）
- **下载路径**：`https://dl.example.com/d/<key>?exp=<时间戳>&sig=<HMAC>`，Worker 验签后流转对象并计数
- **构建期签名**：静态站不能运行时签名，所以链接在构建时签好，有效期 30 天，靠每月定时重建滚动刷新

```ts
// worker/src/index.ts 核心逻辑
const now = Math.floor(Date.now() / 1000)
if (now > exp) return new Response('链接已过期，请回站点重新获取', { status: 410 })

const expect = await hmac(env.DOWNLOAD_SECRET, `${key}:${exp}`)
if (!safeEqual(sig, expect)) return new Response('forbidden', { status: 403 })

const head = await env.BUCKET.head(key)
if (!head) return new Response('not found', { status: 404 })

env.COUNTER?.writeDataPoint({ blobs: [key, req.headers.get('referer') ?? '-'], doubles: [1] })

return new Response(obj.body, {
  status: 200,
  headers: {
    'Content-Type': obj.httpMetadata?.contentType ?? 'application/octet-stream',
    'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
    'Cache-Control': 'private, no-store',
    'Accept-Ranges': 'bytes',
  },
})
```

完整实现（含 Range 分段支持与 HMAC 生成）见 v1.0 章节 8.3，逻辑未变。

### 8.10 搜索（Pagefind）

- 生成 `dist/pagefind/` 静态索引，浏览器端检索，**零服务端**。
- 中文支持：Pagefind 内置 CJK 分词。
- `<main data-pagefind-body>` 限定索引范围。
- **必须排除的内容**：T3D 原文、C++ 源码全文、导图 SVG。这些加 `data-pagefind-ignore`，否则索引会爆炸且搜索结果全是乱码。
- 蓝图存档改为索引**名称 + 描述 + 资产路径**（写在模块 frontmatter 里，天然会被索引）。

### 8.11 3D 模型：懒加载布线视口 + 从文件读出来的规格

> **2026-09-20 状态更新：视口已经从 `model-viewer` 换成自托管的 three.js 布线视图。**
>
> 下面「用 `@google/model-viewer`」那一节记录的是**早期方案**（仍然保留，因为
> 规格数字、解码器、懒加载那几条都没变），但**视口本身已经不是它了**：
>
> | | 早期（model-viewer） | 现在（自托管 three.js） |
> |---|---|---|
> | 画什么 | 实体模型（带材质/贴图/光照） | **面（中性黏土）+ 真实三角网特征边** |
> | 库体积 | 1.1 MB（three 已打进） | 924 KB（three + GLTFLoader + OrbitControls，点进屏才下） |
> | 视图切换 | 需要自己加"线框"按钮 | **没有切换按钮**：面与线同时画着，没有可切的 |
> | 自托管位置 | `public/vendor/model-viewer/` | `public/vendor/three-wire/` |
>
> **为什么换**：用户要的是展示**模型布线**，不是展示材质模型。
> 而 `model-viewer` 三条路都堵死 ——
>
> 1. **它没有公开的 wireframe 属性**（源码里 59 处 "wireframe" 全是 three 内部材质字段），
>    `mv.model` 是压缩包装类，拿不到底层 THREE 材质；
> 2. **它拒绝加载 LINES 图元的 glb**（GLTF 处理时 `Cannot read properties of null (reading 'slice')`）
>    —— 做过一个把 TRIANGLES 转成 LINES 的 glb 生成器（`glb-wireframe.mjs`），
>    能生成能自检，但 viewer 加载即炸，此路不通，工具已删；
> 3. **线框是 DCC 的视口模式，不是模型数据** —— Blender 的线框视图不会导出进 glb，
>    文件里只有三角面。所以必须在浏览器里自己画。
>
> ⚠️ **只画线是个错误的方向**（2026-09-20 用户纠正）：一开始那版剥掉了所有面、
> 只留线，结果是"完全无法看清模型的形状"。用户原话：
> *"线框之间的面还是需要保留的，我只是想展示布线，不是为了展示线框"*。
> 所以现在的画法是**面 + 特征边两层**，缺一不可：
>
> | 层 | 实现 | 要点 |
> |---|---|---|
> | 面 | `MeshStandardMaterial`（`metalness: 0`，黏土质感）+ 三盏平行光/环境光 | 复用 glb 几何、**不加载**原材质贴图；`polygonOffset` 把面推远一点，压在上面的线才不会被 z-fighting 切碎 |
> | 边 | `EdgesGeometry(geo, edgeThreshold)` + `LineSegments` | 只取**夹角 > 22° 的特征边**；`depthWrite: false`（线不互相遮挡出锯齿） |
>
> 为什么不用 `WireframeGeometry`（全三角剖分线）：高模上那是几万条线，
> 密到糊成一块剪影，反而看不见形体。特征边阈值只留结构上的折线 —— 实测
> 68k 面的角色模型从 103k 条线段降到 23k 条，形体反而更清楚。
>
> **现在的画法**（`public/vendor/three-wire/wireframe-runner.js` 的 `initTopology`）：
>
> - 遍历 glb 的每个 mesh，面与边**共享同一份几何**（面直接用原几何、保留索引，
>   省掉高模上翻倍的顶点内存），各自把网格的世界矩阵烘进对象，挂到同一个 root 下。
> - 两个材质是**共享实例**（几十个网格只有两次材质创建），`dispose()` 里各回收一次；
>   边线的几何是本地的要逐个 dispose，面的几何来自 glb、由 loader 那边管。
> - 相机的近远裁剪面与轨道半径都由 `Box3` 从模型实际尺寸算出来，
>   所以 1 单位的方块和 1000 单位的场景取景一致。
> - 页面（`src/pages/models/[slug].astro`）里只有一个 `<canvas data-topology>`，
>   `stage` 上带着 `data-theta / data-phi / data-turntable / data-zoom / data-autorotate`，
>   进屏（`IntersectionObserver`，提前 400px）才 `import()` 引擎并 `initTopology(...)`。
> - **工具条是 `.stage` 的兄弟节点**，所以取控制器不能 `closest('[data-stage]')`
>   （那恒为 null，曾经导致重置/旋转/全屏三个按钮静默失效）；
>   统一 `closest('.main')?.querySelector('[data-stage]')`。
> - "重置视角"只重置**相机**，不关自转 —— 自转是用户开的开关，不是视角。
> - ⚠️ **`opts` 的键名大小写必须跟解构的那份一致**：HTML dataset 是全小写
>   （`data-autorotate` → `dataset.autorotate`），引擎读的是 `opts.autoRotate`。
>   另有一个更隐蔽的：引擎里解构出 `autoRotate` 之后**必须写到 `controls.autoRotate` 上**
>   —— 曾经漏了这一步，于是 content 里写 `autoRotate: true` 既不自转也不报错，
>   而按钮还显示"停止自转"（按钮文案读的是 content，不是控制器）。
>   现在探针会读控制器的真实状态来兜这条（见下）。
> - 验证钩子：`window.__wireLines` / `window.__solidMeshes` / `window.__topology`
>   （`dispose` / `setAutoRotate` / `getAutoRotate` / `lineCount` / `meshCount` / `drawnTriangles`）。
>   `drawnTriangles` 是 `renderer.info.render.triangles` —— **判"面到底画没画出来"最硬的判据**，
>   比数截图里的亮像素可靠（亮像素占比随取景/背景变，三角形数是渲染器自己数的）。
>
> ⚠️ 引擎加载失败（库没下来 / 文件坏了 / 没 WebGL）时切到 `[data-fallback]`：
> 至少把封面和下载入口留住，不留一块空画布。
>
> 验收：`pnpm test:admin` 会检查页面里确实没有 `model-viewer` 元素、没有切换按钮、
> 画布真的被 `initTopology` 初始化（而不是留着骨架空转）。

#### 早期方案：用 `@google/model-viewer`（视口已不用，资产仍在）

**用到的东西**：`@google/model-viewer` 4.3.1（BSD-3-Clause，自托管）
+ 它需要的 Draco / Basis 解码器（从 `three/examples/jsm/libs/` 下取）。
`sync-vendor.mjs` 仍然会把它们同步到 `public/vendor/model-viewer/` —— 留在那儿，
以后要加"实体/材质预览"时可以直接用。

#### 一、为什么连解码器一起搬进 `public/vendor/`

`sync-vendor.mjs` 会把运行时那份 `model-viewer.min.js`（1.1 MB，three.js 已经打进去了）
和 Draco / Basis 解码器拷到 `public/vendor/model-viewer/` 下。

内核在于**解码器路径必须在 `import` 之前写好**：

```js
// 库在模块求值时会读一次 self.ModelViewerElement，
// 读不到就回落到 www.gstatic.com —— 那就是一条我们不想有的外部依赖
self.ModelViewerElement = Object.assign(self.ModelViewerElement || {}, {
  dracoDecoderLocation: '/vendor/model-viewer/draco/',
  ktx2TranscoderLocation: '/vendor/model-viewer/basis/',
})
await import('/vendor/model-viewer/model-viewer.min.js')
```

不写这三行会非常隐蔽：**不压缩的模型一切正常，一旦用 Draco 压缩过的 glb，
访客的浏览器就会去 Google 的服务器取解码器** —— 页面照样能看，只是多了一条
谁都没注意到的外部依赖，而且离线时直接失效。

另外两个坑：

| 坑 | 现象 | 解法 |
|---|---|---|
| 用错构建产物 | 引 `model-viewer-module.min.js`（475 KB）→ 控制台报裸模块名解析失败 | 那个"模块版"里留着 `import 'three'`，必须用 1.1 MB 那份自包含的 `model-viewer.min.js` |
| 目录被连带删掉 | 解码器刚放进去就消失 | 同步脚本里 `model-viewer` 那条会先删整个目录，Draco / Basis 两条必须排在它**后面** |


#### 二、规格数字从文件里读，不手填

`src/lib/gltf-stats.ts` 在构建期解析 glb 容器（12 字节头 + JSON chunk + BIN chunk），
算出三角面数、顶点数、材质数、贴图数、动画数、包围盒尺寸、文件体积与压缩扩展。

三处值得说的：

1. **面数按 primitive 的模式换算**，不是"索引数 ÷ 3"一刀切：
   `TRIANGLES` 是 `count/3`，`TRIANGLE_STRIP` / `TRIANGLE_FAN` 是 `count-2`，
   `LINES` / `POINTS` 一个三角面都不算。切错的直接后果是数字虚高。
2. **包围盒要把节点的世界变换算进去**：本地包围盒的 8 个角乘上
   「父矩阵 × 本节点矩阵」后再取并集。不看这一步，只要模型在 DCC 里带了个缩放，
   报出来的尺寸就是错的 —— 而错的数字比没有数字更糟。
3. **文件读不到就报错，不静默**。路径写错会让构建直接失败并指出是哪个文件，
   而不是生成一个"少了几个数字"的页面蒙混上线。

文件体积也顺手在同一处读了（`localFileSize`），所以下载区那行"约 21.4 MB"
同样是文件说了算。构建期带一层缓存，列表页与详情页读同一个文件不会读两遍。

> 自测脚本覆盖了：缩放节点 / 旋转节点 / 父子平移累加 / STRIP / FAN / LINES /
> 缺 `min-max` / 非三角面 / 坏文件报错。**它当场抓出过一个真 bug** ——
> 示例模型生成器把偏移在"局部坐标"和"节点 translation"上各加了一遍，
> 模型飘在半空，页面上的包围盒数字立刻不对。

#### 三、视口与列表页的分工

| | 加载 3D 库 | 内容 |
|---|---|---|
| `/models` 列表 | **否** | 封面图（或内置占位）+ 面数 / 体积 / 标签 |
| `/models/[slug]` 详情 | 进屏才加载（`IntersectionObserver`，提前 400px） | 可拖拽旋转的视口 + 规格表 + 下载 |

列表页刻意不加载：1.1 MB 的库乘上五张卡片就是五份代价，
而列表只要让人判断"这是什么、多大、值不值得点进去"就够了。

视口这边三个必须处理的细节：

1. **`touch-action="pan-y"`** —— 手机上一根手指上下滑要能翻页，不能被模型吃掉；
   左右滑才交给模型转。
2. **滚轮缩放的取舍** —— 开着的时候鼠标停在模型上页面滚不动。
   默认保留（并给了全屏按钮），按模型可以关掉（`viewer.zoom: false`）。
3. **失败要有出路** —— 库没下来 / 文件坏了 / 没有 WebGL 时，
   把封面图和下载入口露出来，而不是留一块黑。

#### 四、构建期读文件：别用 `import.meta.url` 定位 `public/`

这是本次唯一一个「代码看着完全合理、一构建就报错」的坑：

```ts
// ❌ 开发期对，构建期错
const publicDir = new URL('../../public/', import.meta.url)
```

开发期模块在 `src/lib/` 下，这个相对路径正好指到项目根的 `public/`；
但 **`astro build` 会把它打包进 `dist/.prerender/chunks/`**，
同一个相对路径就变成了 `dist/public/`，于是构建报：

```
模型文件不存在：public/media/models/xxx.glb
（frontmatter 里写的是 /media/models/xxx.glb）
```

**而文件名其实一点没错** —— 报错信息把人往「文件名写错了」的方向带，
比直接抛一个类型错误难查得多。

正确写法是**以 `process.cwd()` 为准**（Astro 的工作目录就是项目根），
`import.meta.url` 只作兜底，两个都试、取实际存在的那个：

```ts
const candidates = [
  path.join(process.cwd(), 'public'),
  fileURLToPath(new URL('../../public/', import.meta.url)),
]
cachedPublicDir = candidates.find((c) => existsSync(c)) ?? candidates[0]
```

顺带两件事：站点路径可能是 URL 编码过的（中文名、空格），换成磁盘路径要
`decodeURIComponent`；查询串（版本号那类）要 `split('?')[0]` 掉。

> **这条对所有「构建期读 `public/` 下文件」的功能都成立**，不只是 3D ——
> 以后做音频时长探测、文档预览会踩同一个坑。

#### 五、`astro build` 卡死：已定位到具体的一次系统调用

**症状**：路线全部生成、日志停在 `✓ Completed in 451ms.`，之后既不报错也不退出，
CPU 归零。卡死率很高（同一批 6 次里卡 5 次），而且**成串出现**（连卡几次、
再连好几次），不像独立的随机事件。

**定位方法**：用 `--import` 预加载一个 fs 追踪器（`scripts/trace-fs.mjs`，已留在仓库里，
以后遇到同类问题直接复用），把 fs 的 callback / promises 两套 API 全部包起来，
谁超过 4 秒不返回，就把它和它前面的调用现场一起打出来。一次就抓到了：

```bash
node --import ./scripts/trace-fs.mjs node_modules/astro/bin/astro.mjs build
```

```
[+11.06s] !!! PENDING 5.4s :: p:rm(file:///D:/MeWeb/dist/.prerender/, {recursive:true,force:true})
      ...
      cb:lstat(D:\MeWeb\dist\.prerender\)    ✓ 返回
      cb:lstat(D:\MeWeb\dist\.prerender\)    ✓ 返回
      cb:rmdir(D:\MeWeb\dist\.prerender\)    ✗ 永不返回
```

**结论**：卡死点是 Astro `static-build.js:119` 收尾清理内部临时目录时的最后一步
`RemoveDirectoryW(D:\MeWeb\dist\.prerender)` —— 系统调用卡在核心里不返回。
它是整条流水线的倒数第二步，之后只剩 `astro:build:done`（写 sitemap）和收尾日志
—— 所以**一次卡死等于整个构建失败，连 sitemap 都会缺**。

**已排除**（都实测过，别再重复走一遍）：

| 怀疑对象 | 怎么排除的 |
|---|---|
| 线程池饥饿 | `UV_THREADPOOL_SIZE=16` 对照实验（两组各 6 次）：baseline 5/6 卡、uv16 3/6 卡，无改善；且卡住时 `_getActiveRequests()` 里只有**一个** `FSReqCallback`，真被占满应该是 4 个 |
| pnpm 的脚本外壳 | `node node_modules/astro/bin/astro.mjs build` 直接跑一样卡 |
| `dist` 里有坏状态 | 把整个 `dist` 移走、从空目录重建，一样卡 |
| 上次强杀留下的 `.prerender` 污染下次 | 手动 `rm -rf` 同一条路径 **1 秒完成**，毫无问题 |
| 网络 / astro 遥测 | 卡住时 `netstat` 找不到任何连接；关掉遥测照样卡 |
| Pagefind 的锅 | `astro build` 单独跑卡过，而 pagefind 单独跑 0.8 秒就完 |
| 残留进程 / 预览服务 | 全部停掉照样卡 |
| 权限 / ACL | 手动 `rm -rf` 同一个目录删得掉；`icacls` 也正常 |
| Astro 的配置 | `getPrerenderOutputDirectory()` 恒等于 `dist/.prerender/`，没有任何开关能改路径或跳过这次删除 |

**根因判断**：本机**文件系统过滤层偶发把「删除目录」的请求卡住**。旁证是同一台机器上
另外两个同族症状：`pnpm install --force` 反复 `os error 5`（删不掉旧目录）、
Pagefind 的 58 MB 二进制首次运行假死数分钟。本机实时防护与行为监控全开，
且只有 Windows Defender 一家杀软。

**治根**：给项目目录加一条 Defender 排除（需管理员权限，一次到位）：

```powershell
Add-MpPreference -ExclusionPath "D:\MeWeb"
```

**兜底**（没加排除时）：`scripts/build.mjs` 三点应对 ——

① astro 若「安静」15 秒、且日志里报过的路由数已被 `dist` 里的 html 数追平，
就判定「页面其实已经全部写全、只是进程卡在收尾」，立刻杀进程树
（把每次卡死的代价从 120 秒压到 15 秒左右）；

② **这一次判为通过**，因为卡死点之后只剩 `astro:build:done`（原本写 sitemap 的地方）
与收尾日志 —— 原本该在那个钩子里跑的 sitemap，改由紧随其后的
`scripts/gen-sitemap.mjs` 生成。于是整条流水线与「卡不卡」无关：
**实测卡死率 100% 时也能稳定构建**（全流程约 30 秒）；

③ astro 别的报错、pagefind 失败照常重试。唯独 astro 的卡死不重试 —— 重试没用
（实测连续 4 次全卡在同一个调用上）。

### 8.12 首页档案阵列：`content/` 是唯一真源，构建时自动同步（2026-09-20）

**用户报的问题**

> "希望物品的详情页与实际页面的内容能够链接起来。例如现在已经删除了小桌子的内容，
> 但是在主页的第二页滚动卡盒界面中的模型详情页上写的还是小桌子模型的信息。
> 我希望能够一起修改，从实际的栏目中读取真实的信息，而不是每次更新栏目都要重新修改详情页上的信息。"

**为什么会脱节：数据有三份，而且都不在构建流水线里**

| 产物 | 谁产 | 谁读 |
|---|---|---|
| `spike/three-archive/content/archives.json` | `gen-archives.mjs` 从 `content/` 收 | 重出嵌入包时的输入 |
| `public/proto/three-archive/archives.json` | 上一步的拷贝 | **宿主 DOM**：栏目标签 / 右侧说明面板 / 无 WebGL 回退卷轴 |
| `public/proto/three-archive/archive.js` | `vite build --config vite.embed.config.ts` | **三维层**：1.2 MB，数据是**构建期烘进包里**的 |

以前这三份靠一套**手动流程**维护（`gen-archives` → 重出包 → 逐文件 sha256 比对 → 复制 → 再 `pnpm build`）。
漏一步的后果分两档：轻的是"内容删了、首页还在讲旧的"；
重的是**两份数据不是同一代** → 下标错位 → **点卡片显示别的项目、详情跳错页**。

**现在：`scripts/sync-archive.mjs`，进构建流水线的第 2 步**

1. 跑 `gen-archives.mjs` 从 `content/` 重新收一遍；
2. 跟已发布的 `archives.json` **逐字节比** —— 一样就结束（**绝大多数构建走这条，0.2 秒**）；
3. 不一样才重出嵌入包，并逐文件 sha256 比对，**只覆盖真的变了的**；
4. **同一代校验**：`archive.js` 里 `findings` 的出现次数必须等于 `archives.json` 的记录数
   （minify 后每条记录的 `findings` 都会留成字面量）。对不上就大声警告。

两条刻意的设计：

- **不碰站点目录重建**：嵌入包走 `vite.embed.safe.config.ts`（`outDir` 指 `tmp/embed-out`，
  `emptyOutDir: false`），再逐文件复制 —— 直接用正牌配置会 `emptyOutDir` 那个目录，
  一旦中途挂掉，首页三维直接白屏（本机删目录还会偶发卡在内核里）。
- **失败不拦构建**：档案同步不上只影响首页第二屏，不该让整站发不出去。脚本自己吞异常，
  退出码恒为 0。

> 顺带修掉的两个"只在构建时才发现"的坑：
> ① glb / 图片的路径字段被写成**本机绝对路径**（`D:\MeWeb\public\...`）时构建不报错、
>    线上必然 404 —— 现在 `scripts/content-lint.mjs` 在流水线第 1 步就拦下来；
> ② `gltf-stats` 自测原来读死 `public/media/models/sample-table.glb`，
>    那个文件被作者换成自己的模型后自测就一直 ENOENT —— 改成**用合成 glb 现造夹具**，
>    不再依赖站里恰好存在某个文件。

### 8.13 为什么 `pnpm dev` 从 `astro dev` 换成了"重建 + 静态服务"（2026-09-20）

**用户报的问题**

> "我文案已经修改重构后，正文内容仍然没有改变。"

**查下来：`astro dev` 对 `content/` 的改动不可靠。** 同一个文件：

| | 正文新内容 | 分组 / 小注 | 占宽 |
|---|---|---|---|
| `astro dev`（4321） | ✗ 还是旧的 | ✗ | ✗ |
| `astro build` + preview | ✓ | ✓ | ✓ |

而且**不报任何错**。内容集合那一层在 dev 下的失效/刷新行为没有对外文档，
追它不划算 —— 用户的感受是"我改了、页面没变"，这比"慢一秒"严重得多。

**换法**：`scripts/watch.mjs` —— 盯 `content/`、`src/`、`public/`，一变就跑**真正的构建**
（`scripts/build.mjs` 那条流水线），然后用 `astro preview` 发 `dist/`。

| 命令 | 干什么 |
|---|---|
| `pnpm dev`（`dev.bat`） | 自动重建 + 发 `dist/` **← 默认走这条** |
| `pnpm preview`（`preview.bat`） | 只构建一次（改内容不自动跟） |
| `pnpm dev:hmr` | 原来的 `astro dev`，**只给改页面/组件代码时用** |

三个必须处理的细节（都踩过）：

1. **防抖 250ms**：编辑器保存会连着写好几个文件（正文 + frontmatter + 可能的宽高补齐），
   不防抖就是一次保存触发 3~4 次构建。
2. **串行 + 合并**：构建期间又来改动，只置一个"还得再跑一次"的标记，不插队 ——
   两个构建同时写 `dist/` 会互相踩。
3. **失败不退出**：内容体检没过时只打印那几行错、继续盯着。作者改好文件应该自动恢复，
   而不是要重新起一次服务。

> ⚠️ `--import` 参数必须传 **`file://` URL**（用 `pathToFileURL`）。
> Windows 绝对路径会被 ESM 加载器当成协议 `d:`，报 `ERR_UNSUPPORTED_ESM_URL_SCHEME`。
>
> ⚠️ 用 `fs.watch(dir, { recursive: true })` 时必须忽略 `dist/`、`tmp/`、`.astro/`，
> 否则构建产物会触发下一轮构建，**无限循环**。

### 8.14 图集排版：为什么把 CSS 网格换成了"服务端排行"（2026-09-20）

原来的做法：图片流是一个 `repeat(6, 1fr)` 的网格 + `grid-auto-flow: row dense`，
每张图按 `layout` 跨 2/3/4/6 栏。**这个做法有个藏不住的问题**：
`dense` 会把后面的小图回填到前面的空隙里，于是"作者以为的相邻两张"和
"页面上并排的两张"可能不是同一对 —— 作者看到的并排关系跟他排的顺序对不上。

现在的做法（`src/pages/gallery/[album].astro`）：

1. 每张图一个 `layout` → `perRow`（`half`=2、`third`=3、`quarter`=4、其余=1）；
2. **在服务端把 `images[]` 切成行**：连着几张同档位的图并成一行，档位一变就另起一行；
3. 模板只画 `.row` + `.shot`，宽度是 `calc((100% - 间距×(n-1)) / n)`。

合并条件两条，**第二条的后半句是关键**：

```
① 档位相同、还没排满
② 对齐方式一致 —— 或者并进去之后这一行正好铺满
```

后半句不能省：`align` 只在"一行没排满"时才有意义（铺满时靠左靠右一样）。
拿它当硬条件的话，两张半栏图会因为一张写了 `center`、一张没写而被拆成两行 ——
**实测踩到过，现象就是"设了半栏却没并排"**。

⚠️ **编辑器里那份行合并逻辑必须跟页面一字不差**（`admin.html` 的 `groupIntoRows`）。
两份不一致 = "预览里并排、页面上没并排"。自测里有一条断言盯着这两边。

⚠️ **分组小标题会打断一行**：中间插了一条分组标题，两侧的图不会并排。
这是规则不是 bug，编辑器预览里看得见。

---

## 9. 部署流程

### 9.1 一次性初始化

```bash
# 0. 前置：Node 20+、pnpm、Cloudflare 账号
pnpm install

# 1. 登录 Cloudflare
npx wrangler login

# 2. 创建 R2 存储桶
npx wrangler r2 bucket create meweb-assets

# 3. 为 R2 绑定自定义域（Cloudflare Dashboard 操作）
#    R2 → meweb-assets → Settings → Public access → Custom domain → cdn.example.com
```

`astro.config.mjs` 关键部分：

```js
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: { plugins: [tailwindcss()] },
  // sitemap 由 scripts/gen-sitemap.mjs 在构建流水线里生成，不用 @astrojs/sitemap
  // （集成跑在 astro:build:done，正好在卡死点之后，见 §8.11 五）
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
})
```

密钥写入（**绝不进仓库**）：

```bash
npx wrangler secret put DOWNLOAD_SECRET --cwd worker
# 本地构建用的密钥写进 .env（.gitignore 里必须有 .env）
```

### 9.2 首次上线

```bash
pnpm build
npx wrangler pages project create meweb --production-branch=main
npx wrangler pages deploy dist --project-name=meweb
# → https://meweb.pages.dev   此时花费 ¥0
```

### 9.3 缓存规则（`public/_headers`）

```
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/vendor/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/pagefind/*
  Cache-Control: public, max-age=86400

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
```

R2 对象的缓存头在上传时就写死（`immutable` 一年）——因为 key 含内容哈希，内容永不变。

### 9.4 自动化（GitHub Actions）

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push: { branches: [main] }
  schedule: [{ cron: '0 3 1 * *' }]     # 每月 1 号重建，滚动刷新签名链接
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with: { version: 9 }
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
        env:
          DOWNLOAD_SECRET: ${{ secrets.DOWNLOAD_SECRET }}
          R2_ACCOUNT_ID: ${{ secrets.R2_ACCOUNT_ID }}
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          command: pages deploy dist --project-name=meweb
```

> CI 里只部署**已构建好的静态产物**，**不要**在流水线里跑素材上传（大文件会拖慢且容易超时）。素材上传留在本地脚本。

### 9.5 回滚

Pages 每次部署都有历史版本，Dashboard → Deployments → 选中旧版本 → **Rollback**，10 秒回到任意历史版本。R2 对象因为 key 含哈希，回滚站点不会导致资源 404。

---

## 10. 性能与成本优化

### 10.1 性能预算

| 指标 | 预算 | 说明 |
|---|---|---|
| 首屏 HTML（gzip） | < 30 KB | |
| 首屏 CSS | < 25 KB | Tailwind 自动裁剪 |
| **首页 JS** | **< 5 KB** | 交互组件全部懒加载 |
| **蓝图页 JS** | < 900 KB | 图谱库较大，但**只在这一页加载** |
| 代码页 JS | ≈ 0 KB | Shiki 构建期完成高亮 |
| LCP | < 1.5 s | |
| CLS | < 0.05 | 所有图片写死 width/height |
| Lighthouse 性能分 | ≥ 95（首页） | |

### 10.2 成本实测估算

按"20 个项目 / 200 张图 / 50 张蓝图 / 30 GB 素材 / 每月 5000 次访问 / 500 次下载"估算：

| 项目 | 用量 | 免费额度 | 费用 |
|---|---|---|---|
| Pages 请求 | 5000 | 无限 | ¥0 |
| Pages 带宽 | 约 2 GB | 无限 | ¥0 |
| R2 存储 | 30 GB | 10 GB 免费，超 20 GB | $0.30 ≈ **¥2.2/月** |
| R2 Class A | 约 500 次/月 | 100 万 | ¥0 |
| R2 Class B | 约 10000 次/月 | 1000 万 | ¥0 |
| **R2 出口流量** | 约 40 GB | **无限免费** | ¥0 |
| Worker | 500 次/月 | 300 万次/月 | ¥0 |
| 域名 | — | — | **¥55/年** |
| **合计** | | | **≈ ¥26/年** |

> 素材 10 GB 以内，年成本 = 域名费。每多存 10 GB，每月多约 ¥1。

### 10.3 少占资源的八个做法

1. **内容寻址**：文件名含哈希 → 长缓存 → 几乎不回源 → CDN 命中率 99%+。
2. **`< 25 MiB` 才进仓库**，其余全在 R2，仓库永远轻量、构建永远快。
3. **代码高亮在构建期做**（Shiki），运行时零成本——这是"零 JS"最划算的一笔。
4. **蓝图图谱只在蓝图页加载**，且 `IntersectionObserver` 触发；其他页面首屏 JS 仍 < 5 KB。
5. **T3D 文本而非截图**：一个蓝图 20 KB vs 一张截图 3 MB。
6. **瀑布流用 CSS 多列**，不用 JS 算高度——零 JS、无抖动。
7. **派生文件只留必需档位**：缩略图 3 档足够。
8. **定时重建每月一次**（只为刷新签名），不做高频构建。

---

## 11. 安全与权限

### 11.1 "只有我能改"是怎么实现的

| 层 | 措施 |
|---|---|
| 站点 | 纯静态产物，CDN **只响应 GET**；不存在任何 POST/PUT/DELETE 接口 |
| 后台 | **不存在**。没有 /admin、没有 API、没有数据库、没有 CMS、没有评论 |
| 内容源 | 只存在于我本地电脑的 `content/` 目录；发布需要这台电脑 + 脚本 |
| 仓库 | 建议 GitHub 设为 **private** |
| 账号 | Cloudflare 开两步验证 |
| 密钥 | R2 写密钥只存本地 `.env` 与 GitHub Secrets；`DOWNLOAD_SECRET` 只在本地与 Worker |
| 攻击面 | 评论/投稿/搜索注入全都不存在 → 攻击面接近于零 |

**结论**：访客在技术层面无法修改任何内容。这是"零后端"带来的额外收益——不只是省钱，还省掉了整类安全问题。

### 11.2 其他安全项

| 风险 | 应对 |
|---|---|
| 下载链接被外站盗用 | Worker 校验 HMAC 签名 + 30 天有效期 |
| 素材被恶意刷流量 | R2 出口免费，不怕刷；Worker 10 万次/天兜底 |
| 私密内容外泄 | `readonly` 模式原文件走 R2 私有前缀；`strict` 模式不部署原文件 |
| 版权 | frontmatter 强制 `license` 字段，详情页底部自动渲染许可说明 |
| 备案 | 域名指向境外（Cloudflare）**无需备案**；指向国内节点需先 ICP 备案 |
| 隐私 | 不收集个人数据；统计只记录对象 key 与 referer，无 IP、无 cookie |
| 不希望的收录 | `unlisted`/`private` 加 `noindex` 并写入 `robots.txt` Disallow |

---

## 12. 日常使用流程

> **先看这一句**：下面这些 `pnpm new:*` / `pnpm import:*` 是**规划中的命令行形态**，
> 现在还没实现（`package.json` 里没有这些脚本）。
> **当前加内容的实际入口是本地内容编辑器**：`pnpm admin` → <http://127.0.0.1:4322>，
> 五（六）类内容都有表单，改完点「重新构建」就能在预览里看到。
> 逐字段的操作说明见本文档 6「数据模型」（各类内容的字段表）。
> 这一章的细节仍然有效 —— 它描述的是每个步骤**在做什么**，
> 用编辑器做的是同一件事，只是不用手敲命令。

### 12.1 新增一个项目

```bash
pnpm new:project                     # 交互式：标题、slug、引擎、标签
# 生成 content/projects/<slug>/ 目录骨架
# （project.md + modules/ + blueprints/ + code/ + mindmaps/）
```

### 12.2 新增一个功能模块

```bash
pnpm new:module --project tihsin-tomato --title "农场系统" --slug farming
# 生成 content/projects/tihsin-tomato/modules/02-farming.md 草稿
```

### 12.3 导入一份蓝图存档（最常用）

```bash
# 1. 在 UE 里选中节点 → Ctrl+C
# 2. 粘到 inbox/BP_Farming_Master.t3d
pnpm import:bp --project tihsin-tomato --file inbox/BP_Farming_Master.t3d
#  → 节点数: 47  节点类型: 12
#  → 已写入 content/projects/tihsin-tomato/blueprints/BP_Farming_Master.t3d

# 3. 在模块 md 的 frontmatter 里引用它（见 6.3）
```

### 12.4 新增一个图集

```bash
# 1. 把图片丢进 inbox/
# 2. 上传并生成缩略图（批量）
pnpm publish
#  → 已上传: 12 张图，生成 36 个变体

# 3. 建图集、填 photos 列表
pnpm new:album --slug ue5-renders --title "UE5 场景渲染"
```

### 12.5 发布

```bash
pnpm release      # = 上传新素材 → 构建 → 部署
```

或双击 `deploy.bat`。

### 12.6 内容组织约定

| 约定 | 规则 |
|---|---|
| 项目 slug | 全小写 + 连字符，**一旦发布永不修改**（链接即身份） |
| 模块 slug | 同上，建议加 `NN-` 前缀控制顺序 |
| 蓝图文件名 | 与 UE 里的资产名**保持一致**（`BP_Farming_Master.t3d`），方便对照 |
| 代码文件 | 与工程里同名（`InteractionManagerComponent.cpp`） |
| 素材文件名 | 英文 + 连字符，**不要中文文件名**（避免 URL 编码地狱） |
| 标签 | 复用为主，总数控制在 30 个以内 |
| 封面 | 每个项目、每个图集都必须有 `cover` |

---

## 13. 开发路线图

| 里程碑 | 内容 | 验收标准 |
|---|---|---|
| **M0 骨架** ✅ | 项目结构、设计系统、主题、缓存规则、构建流水线 | 本地构建通过，9 个页面可访问 |
| **M0.5 上线** | 部署到 Cloudflare Pages，绑自定义域 | 能通过公网地址打开首页 |
| **M1 内容层** | Content Collections + Zod；项目两级层级；项目概览页 / 模块页；**Shiki 代码展示** | 录入 1 个真实项目 + 3 个模块 + 2 份 C++ 代码，全部正确渲染 |
| **M2 蓝图存档** ⭐ | `import-blueprint.mjs`；`BlueprintViewer`（ueblueprint 集成 + 懒加载 + 降级兜底）；蓝图独立页；深浅色对齐 | 导入 3 份真实蓝图（含大图），能缩放平移，能下载 .t3d 并粘回 UE |
| **M3 图片图集** | 图集列表 / 详情；CSS 瀑布流（不裁切）；原生 dialog 灯箱；多档 AVIF 变体 | 一个 20 张图的图集，横竖混排不裁切，点击放大可看详情与下载原图 |
| **M4 资源流水线** | `publish.mjs`（R2 上传 + 派生 + 去重）；签名 Worker；下载计数 | 上传一个 50 MB 文件，下载成功且 SHA-256 校验一致 |
| **M5 文档** | 文档列表 / 只读预览（自托管 pdf.js）；`docMode` 三种模式；下载开关 | `readonly` 模式页面无任何下载入口；`public` 模式下载正常 |
| **M6 收尾 + 音频** | Pagefind 搜索、RSS、Sitemap、Web Analytics、性能优化；**音频栏目（最后做）** | Lighthouse 首页 ≥ 95；首屏 JS < 5 KB |

> **顺序说明**：音频按你的要求挪到 M6；蓝图存档提到 M2，因为它是这个站最独特、最有展示价值的功能。

---

## 14. 验收清单

### 项目 / 蓝图 / 代码

- [ ] 项目列表能按引擎版本、语言（C++ / 蓝图）筛选
- [ ] 项目概览页有封面、正文、模块导航、导图入口、蓝图总览
- [ ] 点进任意模块，能看到：说明 → 蓝图 → 代码 → 截图 的完整顺序
- [ ] **蓝图图谱能缩放、平移，观感与 UE 里一致**
- [ ] 蓝图页有"下载 .t3d"按钮，下载后能粘回 UE 正常显示
- [ ] 解析不了的蓝图会自动降级为文本视图并给出提示（不白屏）
- [ ] **C++ 代码有语法高亮、行号、复制按钮、下载按钮**
- [ ] 超长代码文件默认截断并提示下载全文
- [ ] 项目下的思维导图按项目聚合，能展开折叠缩放

### 图片

- [ ] 图片按图集分区，图集列表页显示封面 + 张数
- [ ] 图集内是瀑布流，**横竖混排时图片完整显示、绝不裁切**
- [ ] 所有 `<img>` 都有 `width`/`height`，滚动时无布局抖动
- [ ] 点击图片弹出灯箱，显示大图 + 标题 + 说明 + 原始尺寸
- [ ] 灯箱支持 ←/→ 切换、Esc 关闭、点击遮罩关闭
- [ ] 灯箱里的"下载原图"能拿到原始分辨率文件

### 文档

- [ ] `docMode: readonly` 的文档页面**没有任何下载入口**
- [ ] `docMode: readonly` 时 pdf.js 工具栏无下载/打印按钮
- [ ] `docMode: public` 的文档下载按钮正常，文件名正确
- [ ] 文档列表显示页数、体积、只读标记

### 权限与安全

- [ ] 站点任何地方都不存在写接口（DevTools 里看不到 POST/PUT）
- [ ] `.env` 未提交进仓库（`git log -p | grep -i secret` 无结果）
- [ ] R2 写密钥只存在于本地环境变量与 GitHub Secrets
- [ ] 仓库已设为 private

### 性能与成本

- [ ] 首页首屏 JS < 5 KB
- [ ] 蓝图库只出现在蓝图页，且进入视口才加载
- [ ] T3D 原文与 C++ 源码未被 Pagefind 索引
- [ ] 月度账单 ≤ ¥5
- [ ] `content/` + `inbox/` + `library/` 三处有备份

---

## 15. 附录

### 15.1 蓝图导出速查（写在最前面，因为最常用）

| 步骤 | 操作 |
|---|---|
| 1 | 打开蓝图图表（Event Graph / 函数 / 宏都行） |
| 2 | `Ctrl+A` 全选（或框选一个功能块） |
| 3 | `Ctrl+C` |
| 4 | 粘到 `inbox/xxx.t3d` |
| 5 | `pnpm import:bp --project <项目> --file inbox/xxx.t3d` |

**建议**：按功能块分批导出，一张图控制在 50 个节点以内，可读性最好。

### 15.2 命令速查

```bash
pnpm dev                  # 本地开发预览
pnpm build                # 构建到 dist/（含 vendor 同步 + Pagefind 索引）
pnpm release              # 上传素材 + 构建 + 部署（一键上线）
pnpm run deploy           # 仅部署已有 dist/（⚠️ 必须带 run，裸的 pnpm deploy 是 pnpm 内置命令）

pnpm new:project          # 新建项目骨架
pnpm new:module           # 新建功能模块
pnpm new:album            # 新建图集
pnpm import:bp            # 导入蓝图 T3D
pnpm publish              # 上传 inbox/ 里的素材到 R2

npx wrangler tail                        # 实时看 Worker 日志
npx wrangler r2 object list meweb-assets # 列出桶内对象
npx wrangler pages deployment list --project-name=meweb   # 部署历史
```

### 15.3 常见问题

| 问题 | 原因 | 解决 |
|---|---|---|
| 蓝图显示空白 | 节点类型不被库支持 / T3D 未转义 | 看控制台报错；检查降级逻辑是否触发 |
| 蓝图节点位置全挤在一起 | 复制时节点坐标丢失 | 确认是在图表里 `Ctrl+C`，不是从别处复制 |
| 蓝图页很卡 | 单张图节点过多（>300） | 拆成多张图，按功能块存档 |
| 图片被裁切了 | 用了 `object-fit: cover` 或固定高度 | 改回 `width:100%; height:auto` |
| 瀑布流高度错乱 | `<img>` 的 width/height 写成了缩略图尺寸 | 必须写**原始像素**尺寸 |
| 代码块没有高亮 | lang 写错 | 检查 `lang` 是否为 `cpp` / `csharp` / `hlsl` |
| 只读文档仍能下载 | pdf.js 工具栏没改 | 改 `public/vendor/pdfjs/viewer.html`，删掉 download/print 按钮 |
| Pages 部署报文件过大 | 有文件超 25 MiB | 移到 R2，`public/` 只放缩略图 |
| 中文搜索无结果 | Pagefind 索引未生成 | 确认 `build` 脚本里有 `pagefind --site dist` |
| 下载链接全部 410 | 签名过期，站点没重建 | 跑一次 `pnpm release`，或等每月定时构建 |
| 国内访问偶发打不开 | Cloudflare 线路问题 | 静态层迁 EdgeOne，或等线路恢复 |

### 15.4 术语表

| 术语 | 含义 |
|---|---|
| T3D | UE 序列化文本格式；蓝图复制出来的就是这种格式 |
| 蓝图图谱 | 由 T3D 文本重建的可视化节点图 |
| SSG | Static Site Generation，构建期把页面编译成静态 HTML |
| 内容寻址 | 文件名包含内容哈希，内容变则名字变，因此可长期缓存 |
| Range 请求 | HTTP 分段请求，音频/视频拖进度条依赖它 |
| 签名 URL | 带 HMAC 校验和有效期的下载链接 |
| Egress | 出口流量，云服务里最常见的"隐形账单杀手" |
| Island | Astro 的交互组件模式，页面静态、局部动态 |
| Shiki | Astro 内置的语法高亮器，构建期把代码渲染成静态 HTML |
| Draco / Meshopt | 3D 几何压缩格式，可大幅减小 glb 体积 |

### 15.5 备选方案对照（如果改变主意）

| 想做 | 换成 | 代价 |
|---|---|---|
| 国内访问更快、必须用国内节点 | 腾讯云 EdgeOne Pages + COS | 需 ICP 备案；COS 有出网流量费 |
| 完全不花钱也不怕 GitHub | GitHub Pages + Releases 存大文件 | 单文件 2 GB 上限；速度一般；无自定义缓存头 |
| 想要在线管理后台 | Cloudflare Access + D1 | 引入后端与数据库，攻击面上升，与 1.6 的"零后台"原则冲突 |
| 蓝图库解析不了的节点太多 | 自研轻量渲染器 | 工作量中等，观感不如 UE 原版，但完全可控 |

---

*文档结束（v2.0）。下一步：M0.5 部署上线 → M1 内容层 + 代码展示 → M2 蓝图存档。*
