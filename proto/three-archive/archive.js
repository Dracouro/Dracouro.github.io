import * as u from "three";
import { ACESFilmicToneMapping as oi, AddEquation as ns, AgXToneMapping as li, AnimationClip as ci, BackSide as hi, Bone as ui, Box3 as di, BoxGeometry as fi, BufferAttribute as Ft, BufferGeometry as Ws, CineonToneMapping as pi, ClampToEdgeWrapping as mi, Color as ce, ColorManagement as Zt, CustomBlending as gi, CustomToneMapping as vi, DataTexture as xi, DepthStencilFormat as wi, DepthTexture as Mi, DirectionalLight as yi, DoubleSide as Ti, DstAlphaFactor as bi, DstColorFactor as Ai, FileLoader as js, Float32BufferAttribute as os, FloatType as Si, FrontSide as Ci, Group as Ht, HalfFloatType as rt, ImageBitmapLoader as Ri, InstancedBufferAttribute as Ei, InstancedMesh as Vs, InterleavedBuffer as Li, InterleavedBufferAttribute as Di, Interpolant as Pi, InterpolateDiscrete as Oi, InterpolateLinear as Xs, Line as Ni, LineBasicMaterial as Ii, LineLoop as Ui, LineSegments as Fi, LinearFilter as Lt, LinearMipmapLinearFilter as _s, LinearMipmapNearestFilter as Hi, LinearSRGBColorSpace as we, LinearToneMapping as Bi, Loader as ki, LoaderUtils as pt, Material as Bt, MathUtils as Ks, Matrix4 as at, Mesh as xe, MeshBasicMaterial as ft, MeshDepthMaterial as zi, MeshLambertMaterial as Gi, MeshNormalMaterial as Wi, MeshPhysicalMaterial as he, MeshStandardMaterial as Dt, MirroredRepeatWrapping as ji, NearestFilter as Ce, NearestMipmapLinearFilter as Vi, NearestMipmapNearestFilter as Xi, NeutralToneMapping as _i, NoBlending as Ae, NumberKeyframeTrack as ls, Object3D as ss, OrthographicCamera as Ys, PerspectiveCamera as Ki, PointLight as qs, Points as Yi, PointsMaterial as qi, PropertyBinding as Qi, Quaternion as Qs, QuaternionKeyframeTrack as cs, RGBADepthPacking as Zi, RawShaderMaterial as Ji, RedFormat as $i, ReinhardToneMapping as er, RepeatWrapping as mt, SRGBColorSpace as gt, SRGBTransfer as tr, Scene as sr, ShaderMaterial as oe, Skeleton as ir, SkinnedMesh as rr, Sphere as ar, SpotLight as nr, Texture as Pt, TextureLoader as or, Timer as lr, TriangleFanDrawMode as Jt, TriangleStripDrawMode as Zs, TrianglesDrawMode as cr, UniformsUtils as le, UnsignedInt248Type as hr, Vector2 as Me, Vector3 as Se, VectorKeyframeTrack as hs, WebGLRenderTarget as nt, ZeroFactor as us } from "three";
var ur = [], dr = [
  "项目",
  "图片",
  "视频",
  "文档",
  "模型",
  "工具"
], fr = [
  {
    id: "tomato",
    title: "火星番茄",
    en: "U_Tomato",
    category: "项目",
    department: "Unreal Engine 5.7",
    date: "2026-10-01",
    lead: "C++ / 蓝图 / 数据表 / PCG",
    clearance: "进行中",
    abstract: "火星生存题材的 UE5 项目。房间里本来什么都没有 —— 花盆、灯、化学台、炉子，全部得从垃圾里拼出来。",
    findings: [],
    source: "/projects/tomato/",
    preview: "/media/tomato/cover.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/projects/tomato/"
  },
  {
    id: "dcat",
    title: "暖洋洋呆猫村",
    en: "U_DCat02",
    category: "项目",
    department: "Unreal Engine 5.7",
    date: "2024-03-06",
    lead: "蓝图 / 增强输入 / UMG / 数据表",
    clearance: "搁置",
    abstract: "一只跑酷的猫，和一套从零手搓的背包。九天做完、停摆两年，全部用蓝图 —— 工程里一行 C++ 都没有。",
    findings: [],
    source: "/projects/dcat/",
    preview: "/media/dcat/cover.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/projects/dcat/"
  },
  {
    id: "wfc-island",
    title: "坍缩浮岛",
    en: "",
    category: "项目",
    department: "原生浏览器（Canvas 2D · 零依赖）",
    date: "2026-09-25",
    lead: "波函数坍缩 WFC / Canvas 2D / 等距体素渲染 / 解析式点选命中 / 零依赖单文件",
    clearance: "已完成",
    abstract: '用波函数坍缩生成一座浮空小岛。看着每一格从"不确定"被逐个观测、塌缩成地形，整体立体成一座体素岛，然后还能直接点着改地形。',
    findings: [],
    source: "/projects/wfc-island/",
    preview: "/media/wfc-island/island.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/projects/wfc-island/"
  },
  {
    id: "illustration-portfolio",
    title: "插画作品集「42」",
    en: "Illustration Portfolio 2024",
    category: "图片",
    department: "图集",
    date: "14 张",
    lead: "插画 / 场景概念 / 角色设计",
    clearance: "插画",
    abstract: "2024 年插画作品集：角色、场景概念设计与卡通插画，共 17 张。",
    findings: [],
    source: "",
    preview: "/media/illustration-portfolio/ill-01.webp",
    previewW: 1920,
    previewH: 1080,
    downloadable: !1,
    downloadUrl: "",
    href: "/gallery/illustration-portfolio"
  },
  {
    id: "marathon-volt",
    title: "我爱用的装饰性图案（自制素材库）",
    en: "Decorative Motif",
    category: "图片",
    department: "图集",
    date: "111 张",
    lead: "装饰性图标",
    clearance: "装饰性图标",
    abstract: "一套纯色无底装饰性图案。",
    findings: [],
    source: "",
    preview: "/media/marathon-volt/DDD_027.png",
    previewW: 683,
    previewH: 1175,
    downloadable: !1,
    downloadUrl: "",
    href: "/gallery/marathon-volt"
  },
  {
    id: "ui-portfolio",
    title: "作品集",
    en: "UI Design Portfolio",
    category: "图片",
    department: "图集",
    date: "28 张",
    lead: "UI设计 / 人物设计 / 插画",
    clearance: "UI设计",
    abstract: "2024 届作品集节选：游戏 UI 元件、人物设计、插画与项目实机，共 31 张。",
    findings: [],
    source: "",
    preview: "/media/ui-portfolio/ui-13.webp",
    previewW: 3e3,
    previewH: 2398,
    downloadable: !1,
    downloadUrl: "",
    href: "/gallery/ui-portfolio"
  },
  {
    id: "dev-doc",
    title: "个人作品站 · 开发文档",
    en: "MD",
    category: "文档",
    department: "可下载",
    date: "2026-09-15",
    lead: "建站 / 方案 / Astro / 成本",
    clearance: "MD",
    abstract: "从需求分析到部署验收的完整建站方案，共 15 章。含选型与成本对比、蓝图存档可视化、图集布局、文档只读预览、性能预算与验收清单。",
    findings: [],
    source: "/files/dev-doc.md",
    preview: "/media/docs/dev-doc/cover.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/files/dev-doc.md",
    href: "/docs/dev-doc"
  },
  {
    id: "marathon-art-style",
    title: "Marathon 美术风格拆解与 UE5 复刻流程",
    en: "MD",
    category: "文档",
    department: "只读",
    date: "2026-10-14",
    lead: "Marathon / 美术风格 / UE5 / 模块化 / Trim Sheet",
    clearance: "MD",
    abstract: "从 2,313 个网格与 14,654 张贴图的实测数据反推《Marathon》的图形写实风格：七条风格判据、资产预算表、模块化规范与 trim sheet 工作流，以及 UE5 侧的关键开关。",
    findings: [],
    source: "",
    preview: "/media/docs/marathon/deck-001-iso.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/docs/marathon-art-style"
  },
  {
    id: "brim-hat-parts",
    title: "Q版角色（大檐帽）",
    en: "Chibi Character (Brim Hat)",
    category: "模型",
    department: "模型",
    date: "2025-10-30",
    lead: "Q版 / 二次元 / 角色",
    clearance: "Q版",
    abstract: "戴宽檐帽的 Q 版角色，双手张开站着，一万五千多面",
    findings: [],
    source: "/media/models/brim-hat-parts.glb",
    preview: "/media/models/brim-hat-parts.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/media/models/brim-hat-parts.glb",
    href: "/models/brim-hat-parts"
  },
  {
    id: "chibi-model",
    title: "给朋友做的小模型",
    en: "Chibi model",
    category: "模型",
    department: "模型",
    date: "2025-07-05",
    lead: "Q版 / 二次元 / 角色",
    clearance: "Q版",
    abstract: "给朋友画的可爱角色建模并3D打印了出来",
    findings: [],
    source: "/media/models/chibi-model.glb",
    preview: "/media/models/chibi-model.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/models/chibi-model"
  },
  {
    id: "fufu-02",
    title: "给朋友的角色制作的正比模型，带有绑骨",
    en: "Character Model",
    category: "模型",
    department: "模型",
    date: "2025-09-21",
    lead: "",
    clearance: "GLB",
    abstract: "使用二分渲染加描边，绑定标准UE骨骼，手绘贴图",
    findings: [],
    source: "/media/models/LILIYU_.glb",
    preview: "/media/models/FUFU.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/media/models/LILIYU_.glb",
    href: "/models/fufu-02"
  },
  {
    id: "star-helmet-chibi",
    title: "Q版角色（星徽头盔）",
    en: "Chibi Character (Star Helmet)",
    category: "模型",
    department: "模型",
    date: "2025-10-30",
    lead: "Q版 / 二次元 / 角色",
    clearance: "Q版",
    abstract: "戴五角星盔、双手张开的 Q 版角色，身侧各一片刃，一万二千面",
    findings: [],
    source: "/media/models/star-helmet-chibi.glb",
    preview: "/media/models/star-helmet-chibi.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/media/models/star-helmet-chibi.glb",
    href: "/models/star-helmet-chibi"
  },
  {
    id: "takamatsu-tomori",
    title: "高松灯（企鹅装）",
    en: "Takamatsu Tomori",
    category: "模型",
    department: "模型",
    date: "2026-04-17",
    lead: "Q版 / 二次元 / 角色",
    clearance: "Q版",
    abstract: "企鹅兜帽造型的 Q 版高松灯，七千面的小体量角色",
    findings: [],
    source: "/media/models/takamatsu-tomori.glb",
    preview: "/media/models/takamatsu-tomori.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/media/models/takamatsu-tomori.glb",
    href: "/models/takamatsu-tomori"
  },
  {
    id: "vector-group-exporter",
    title: "矢量图分组导出工具",
    en: "工具",
    category: "工具",
    department: "工具",
    date: "2026-09-22",
    lead: "工具 / Illustrator / 批量导出 / Python / 已完成",
    clearance: "已完成",
    abstract: "驱动本机 Illustrator，把 .ai 矢量文件里编好组的图形批量拆成透明 PNG —— 一个分组一张图，300 PPI，自动裁到图形边界。已打包成免安装 EXE。",
    findings: [],
    source: "/files/ai_png_exporter.exe",
    preview: "/media/vector-group-exporter/cover.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !0,
    downloadUrl: "/files/ai_png_exporter.exe",
    href: "/tools/vector-group-exporter/"
  },
  {
    id: "scavenger",
    title: "【食腐者】",
    en: "Scavenger",
    category: "视频",
    department: "视频",
    date: "2026-10-21",
    lead: "视频 / 资源归档",
    clearance: "42 条",
    abstract: "一批导出片段，42 条，合计约 49 分钟。网页里逐条播放；未经转码的原片（1080p）打包放在夸克网盘。",
    findings: [],
    source: "",
    preview: "/media/videos/scavenger/cover.webp",
    previewW: 0,
    previewH: 0,
    downloadable: !1,
    downloadUrl: "",
    href: "/videos/scavenger/"
  }
], is = {
  categories: ur,
  columns: dr,
  records: fr
}, Ot = is.records, dn = ["全部档案", ...is.categories], Be = is.columns;
function ke(e) {
  return Ot.map((t, s) => ({
    record: t,
    index: s
  })).filter(({ record: t }) => t.category === Be[e]).map(({ index: t }) => t);
}
function ne(e) {
  const t = Be.indexOf(Ot[e].category), s = 12 + ke(t).indexOf(e);
  return {
    lane: t,
    row: s,
    slot: t * 32 + s
  };
}
function pr(e) {
  const t = ke(Math.floor(e / 32));
  return t[Math.max(0, Math.min(t.length - 1, e % 32 - 12))];
}
var G = 5.2, W = 0.62, mr = [
  0,
  1,
  2,
  3,
  4,
  -2,
  -1,
  5,
  6
];
function ds(e, t) {
  return (e % t + t) % t;
}
function fs(e, t, s) {
  return e + Math.floor((t - e + s / 2) / s) * s;
}
function kt({ lane: e, row: t }) {
  const s = ke(ds(e, Be.length));
  return s[ds(t - 12, s.length)];
}
function gr(e, t, s) {
  if (s && "cell" in s) return { ...s.cell };
  const i = ne(e), r = fs(i.row, t.row, ke(i.lane).length);
  return s?.axis === "row" ? {
    lane: t.lane,
    row: t.row + s.direction
  } : {
    lane: s?.axis === "lane" ? t.lane + s.direction : fs(i.lane, t.lane, Be.length),
    row: r
  };
}
function zt(e) {
  return {
    lane: mr[Math.floor(e / 32)],
    row: e % 32
  };
}
function ve(e) {
  return `${e.lane}:${e.row}`;
}
function ut(e, t) {
  return e.lane === t.lane && e.row === t.row;
}
var vr = [
  [0, 1],
  [0, 2],
  [0, 4],
  [1, 3],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 7],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7]
], xr = class {
  camera = new u.PerspectiveCamera();
  frustum = new u.Frustum();
  matrix = new u.Matrix4();
  box = new u.Box3();
  candidates = 0;
  previous = [];
  cachedCells = [];
  update(e, t, s, i, r) {
    const n = [
      ...e.projectionMatrix.elements,
      ...e.matrixWorldInverse.elements,
      e.near,
      e.far,
      t,
      s,
      i,
      Number(r)
    ];
    if (n.every((y, M) => y === this.previous[M])) return this.cachedCells;
    this.previous = n, this.camera.copy(e, !1), this.camera.far = Math.min(e.far, Math.max(e.near + 1, t + 8)), this.camera.updateProjectionMatrix();
    const a = r ? 1.5 : 1.18;
    this.camera.projectionMatrix.elements[0] /= a, this.camera.projectionMatrix.elements[5] /= a, this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(), this.matrix.multiplyMatrices(this.camera.projectionMatrix, e.matrixWorldInverse), this.frustum.setFromProjectionMatrix(this.matrix);
    const o = this.matrix.clone().invert(), l = Array.from({ length: 8 }, (y, M) => new u.Vector3(M & 1 ? 1 : -1, M & 2 ? 1 : -1, M & 4 ? 1 : -1).applyMatrix4(o)), c = new u.Box3(), h = -6.5, d = 6.5;
    for (const y of l) y.y >= h && y.y <= d && c.expandByPoint(y);
    for (const [y, M] of vr) for (const b of [h, d]) {
      const S = l[y], P = l[M], L = P.y - S.y;
      if (Math.abs(L) < 1e-9) continue;
      const R = (b - S.y) / L;
      R >= 0 && R <= 1 && c.expandByPoint(S.clone().lerp(P, R));
    }
    if (c.isEmpty())
      return this.candidates = 0, this.cachedCells = [];
    const f = Math.floor((c.min.x - 2.8 + s) / G + 2) - 1, p = Math.ceil((c.max.x + 2.8 + s) / G + 2) + 1, v = Math.floor((c.min.z - 0.6 - i) / W + 15.5) - 2, x = Math.ceil((c.max.z + 0.6 - i) / W + 15.5) + 2, w = [];
    for (let y = f; y <= p; y++) for (let M = v; M <= x; M++) {
      const b = (y - 2) * G - s, S = (M - 15.5) * W + i;
      this.box.min.set(b - 2.8, h, S - 1.2), this.box.max.set(b + 2.8, d, S + 1.2), this.frustum.intersectsBox(this.box) && w.push({
        lane: y,
        row: M
      });
    }
    return this.candidates = w.length, this.cachedCells = w;
  }
  intersects(e, t, s) {
    return this.box.min.set(e - 2.8, t - 0.3, s - 1.2), this.box.max.set(e + 2.8, t + 4.1, s + 1.2), this.frustum.intersectsBox(this.box);
  }
}, vt = class {
  first = 1 / 0;
  last = -1;
  attribute;
  constructor(e) {
    this.attribute = e;
  }
  set(e, t) {
    const s = this.attribute.array;
    for (let i = 0; i < t.length; i++) {
      const r = e + i, n = Math.fround(t[i]);
      s[r] !== n && (s[r] = n, this.first = Math.min(this.first, r), this.last = Math.max(this.last, r));
    }
  }
  scalar(e, t) {
    t = Math.fround(t), this.attribute.array[e] !== t && (this.attribute.array[e] = t, this.first = Math.min(this.first, e), this.last = Math.max(this.last, e));
  }
  commit() {
    return this.last < 0 ? !1 : (this.attribute.addUpdateRange(this.first, this.last - this.first + 1), this.attribute.needsUpdate = !0, this.first = 1 / 0, this.last = -1, !0);
  }
}, wr = class {
  values = [];
  cursor = 0;
  changed = !0;
  begin() {
    this.cursor = 0;
  }
  add(...e) {
    for (const t of e)
      this.values[this.cursor] !== t && (this.changed = !0), this.values[this.cursor++] = t;
  }
  floats(...e) {
    this.add(...e.map((t) => t === void 0 ? void 0 : Math.fround(t)));
  }
  end() {
    const e = this.changed || this.values.length !== this.cursor;
    return this.values.length = this.cursor, this.changed = !1, e;
  }
  invalidate() {
    this.changed = !0;
  }
}, Re = class {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}, Mr = new Ys(-1, 1, 1, -1, 0, 1), yr = class extends Ws {
  constructor() {
    super(), this.setAttribute("position", new os([
      -1,
      3,
      0,
      -1,
      -1,
      0,
      3,
      -1,
      0
    ], 3)), this.setAttribute("uv", new os([
      0,
      2,
      0,
      0,
      2,
      0
    ], 2));
  }
}, Tr = new yr(), ot = class {
  constructor(e) {
    this._mesh = new xe(Tr, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Mr);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}, br = class {
  constructor(e = Math) {
    this.grad3 = [
      [
        1,
        1,
        0
      ],
      [
        -1,
        1,
        0
      ],
      [
        1,
        -1,
        0
      ],
      [
        -1,
        -1,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        -1,
        0,
        1
      ],
      [
        1,
        0,
        -1
      ],
      [
        -1,
        0,
        -1
      ],
      [
        0,
        1,
        1
      ],
      [
        0,
        -1,
        1
      ],
      [
        0,
        1,
        -1
      ],
      [
        0,
        -1,
        -1
      ]
    ], this.grad4 = [
      [
        0,
        1,
        1,
        1
      ],
      [
        0,
        1,
        1,
        -1
      ],
      [
        0,
        1,
        -1,
        1
      ],
      [
        0,
        1,
        -1,
        -1
      ],
      [
        0,
        -1,
        1,
        1
      ],
      [
        0,
        -1,
        1,
        -1
      ],
      [
        0,
        -1,
        -1,
        1
      ],
      [
        0,
        -1,
        -1,
        -1
      ],
      [
        1,
        0,
        1,
        1
      ],
      [
        1,
        0,
        1,
        -1
      ],
      [
        1,
        0,
        -1,
        1
      ],
      [
        1,
        0,
        -1,
        -1
      ],
      [
        -1,
        0,
        1,
        1
      ],
      [
        -1,
        0,
        1,
        -1
      ],
      [
        -1,
        0,
        -1,
        1
      ],
      [
        -1,
        0,
        -1,
        -1
      ],
      [
        1,
        1,
        0,
        1
      ],
      [
        1,
        1,
        0,
        -1
      ],
      [
        1,
        -1,
        0,
        1
      ],
      [
        1,
        -1,
        0,
        -1
      ],
      [
        -1,
        1,
        0,
        1
      ],
      [
        -1,
        1,
        0,
        -1
      ],
      [
        -1,
        -1,
        0,
        1
      ],
      [
        -1,
        -1,
        0,
        -1
      ],
      [
        1,
        1,
        1,
        0
      ],
      [
        1,
        1,
        -1,
        0
      ],
      [
        1,
        -1,
        1,
        0
      ],
      [
        1,
        -1,
        -1,
        0
      ],
      [
        -1,
        1,
        1,
        0
      ],
      [
        -1,
        1,
        -1,
        0
      ],
      [
        -1,
        -1,
        1,
        0
      ],
      [
        -1,
        -1,
        -1,
        0
      ]
    ], this.p = [];
    for (let t = 0; t < 256; t++) this.p[t] = Math.floor(e.random() * 256);
    this.perm = [];
    for (let t = 0; t < 512; t++) this.perm[t] = this.p[t & 255];
    this.simplex = [
      [
        0,
        1,
        2,
        3
      ],
      [
        0,
        1,
        3,
        2
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        2,
        3,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        2,
        3,
        0
      ],
      [
        0,
        2,
        1,
        3
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        3,
        1,
        2
      ],
      [
        0,
        3,
        2,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        3,
        2,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        2,
        0,
        3
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        1,
        3,
        0,
        2
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        2,
        3,
        0,
        1
      ],
      [
        2,
        3,
        1,
        0
      ],
      [
        1,
        0,
        2,
        3
      ],
      [
        1,
        0,
        3,
        2
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        2,
        0,
        3,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        2,
        1,
        3,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        2,
        0,
        1,
        3
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        3,
        0,
        1,
        2
      ],
      [
        3,
        0,
        2,
        1
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        3,
        1,
        2,
        0
      ],
      [
        2,
        1,
        0,
        3
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        3,
        1,
        0,
        2
      ],
      [
        0,
        0,
        0,
        0
      ],
      [
        3,
        2,
        0,
        1
      ],
      [
        3,
        2,
        1,
        0
      ]
    ];
  }
  noise(e, t) {
    let s, i, r;
    const n = 0.5 * (Math.sqrt(3) - 1), a = (e + t) * n, o = Math.floor(e + a), l = Math.floor(t + a), c = (3 - Math.sqrt(3)) / 6, h = (o + l) * c, d = o - h, f = l - h, p = e - d, v = t - f;
    let x, w;
    p > v ? (x = 1, w = 0) : (x = 0, w = 1);
    const y = p - x + c, M = v - w + c, b = p - 1 + 2 * c, S = v - 1 + 2 * c, P = o & 255, L = l & 255, R = this.perm[P + this.perm[L]] % 12, C = this.perm[P + x + this.perm[L + w]] % 12, O = this.perm[P + 1 + this.perm[L + 1]] % 12;
    let D = 0.5 - p * p - v * v;
    D < 0 ? s = 0 : (D *= D, s = D * D * this._dot(this.grad3[R], p, v));
    let N = 0.5 - y * y - M * M;
    N < 0 ? i = 0 : (N *= N, i = N * N * this._dot(this.grad3[C], y, M));
    let j = 0.5 - b * b - S * S;
    return j < 0 ? r = 0 : (j *= j, r = j * j * this._dot(this.grad3[O], b, S)), 70 * (s + i + r);
  }
  noise3d(e, t, s) {
    let i, r, n, a;
    const o = (e + t + s) * 0.3333333333333333, l = Math.floor(e + o), c = Math.floor(t + o), h = Math.floor(s + o), d = 1 / 6, f = (l + c + h) * d, p = l - f, v = c - f, x = h - f, w = e - p, y = t - v, M = s - x;
    let b, S, P, L, R, C;
    w >= y ? y >= M ? (b = 1, S = 0, P = 0, L = 1, R = 1, C = 0) : w >= M ? (b = 1, S = 0, P = 0, L = 1, R = 0, C = 1) : (b = 0, S = 0, P = 1, L = 1, R = 0, C = 1) : y < M ? (b = 0, S = 0, P = 1, L = 0, R = 1, C = 1) : w < M ? (b = 0, S = 1, P = 0, L = 0, R = 1, C = 1) : (b = 0, S = 1, P = 0, L = 1, R = 1, C = 0);
    const O = w - b + d, D = y - S + d, N = M - P + d, j = w - L + 2 * d, Ee = y - R + 2 * d, Le = M - C + 2 * d, ue = w - 1 + 3 * d, de = y - 1 + 3 * d, ye = M - 1 + 3 * d, z = l & 255, F = c & 255, fe = h & 255, ze = this.perm[z + this.perm[F + this.perm[fe]]] % 12, pe = this.perm[z + b + this.perm[F + S + this.perm[fe + P]]] % 12, me = this.perm[z + L + this.perm[F + R + this.perm[fe + C]]] % 12, ie = this.perm[z + 1 + this.perm[F + 1 + this.perm[fe + 1]]] % 12;
    let V = 0.6 - w * w - y * y - M * M;
    V < 0 ? i = 0 : (V *= V, i = V * V * this._dot3(this.grad3[ze], w, y, M));
    let Q = 0.6 - O * O - D * D - N * N;
    Q < 0 ? r = 0 : (Q *= Q, r = Q * Q * this._dot3(this.grad3[pe], O, D, N));
    let K = 0.6 - j * j - Ee * Ee - Le * Le;
    K < 0 ? n = 0 : (K *= K, n = K * K * this._dot3(this.grad3[me], j, Ee, Le));
    let Y = 0.6 - ue * ue - de * de - ye * ye;
    return Y < 0 ? a = 0 : (Y *= Y, a = Y * Y * this._dot3(this.grad3[ie], ue, de, ye)), 32 * (i + r + n + a);
  }
  noise4d(e, t, s, i) {
    const r = this.grad4, n = this.simplex, a = this.perm, o = (Math.sqrt(5) - 1) / 4, l = (5 - Math.sqrt(5)) / 20;
    let c, h, d, f, p;
    const v = (e + t + s + i) * o, x = Math.floor(e + v), w = Math.floor(t + v), y = Math.floor(s + v), M = Math.floor(i + v), b = (x + w + y + M) * l, S = x - b, P = w - b, L = y - b, R = M - b, C = e - S, O = t - P, D = s - L, N = i - R, j = C > O ? 32 : 0, Ee = C > D ? 16 : 0, Le = O > D ? 8 : 0, ue = C > N ? 4 : 0, de = O > N ? 2 : 0, ye = D > N ? 1 : 0, z = j + Ee + Le + ue + de + ye, F = n[z][0] >= 3 ? 1 : 0, fe = n[z][1] >= 3 ? 1 : 0, ze = n[z][2] >= 3 ? 1 : 0, pe = n[z][3] >= 3 ? 1 : 0, me = n[z][0] >= 2 ? 1 : 0, ie = n[z][1] >= 2 ? 1 : 0, V = n[z][2] >= 2 ? 1 : 0, Q = n[z][3] >= 2 ? 1 : 0, K = n[z][0] >= 1 ? 1 : 0, Y = n[z][1] >= 1 ? 1 : 0, lt = n[z][2] >= 1 ? 1 : 0, Ge = n[z][3] >= 1 ? 1 : 0, De = C - F + l, We = O - fe + l, te = D - ze + l, X = N - pe + l, Z = C - me + 2 * l, Pe = O - ie + 2 * l, Oe = D - V + 2 * l, je = N - Q + 2 * l, Ve = C - K + 3 * l, ge = O - Y + 3 * l, Xe = D - lt + 3 * l, _e = N - Ge + 3 * l, Ke = C - 1 + 4 * l, Ye = O - 1 + 4 * l, ct = D - 1 + 4 * l, qe = N - 1 + 4 * l, se = x & 255, Te = w & 255, re = y & 255, Ne = M & 255, Ut = a[se + a[Te + a[re + a[Ne]]]] % 32, Qe = a[se + F + a[Te + fe + a[re + ze + a[Ne + pe]]]] % 32, J = a[se + me + a[Te + ie + a[re + V + a[Ne + Q]]]] % 32, m = a[se + K + a[Te + Y + a[re + lt + a[Ne + Ge]]]] % 32, g = a[se + 1 + a[Te + 1 + a[re + 1 + a[Ne + 1]]]] % 32;
    let T = 0.6 - C * C - O * O - D * D - N * N;
    T < 0 ? c = 0 : (T *= T, c = T * T * this._dot4(r[Ut], C, O, D, N));
    let E = 0.6 - De * De - We * We - te * te - X * X;
    E < 0 ? h = 0 : (E *= E, h = E * E * this._dot4(r[Qe], De, We, te, X));
    let I = 0.6 - Z * Z - Pe * Pe - Oe * Oe - je * je;
    I < 0 ? d = 0 : (I *= I, d = I * I * this._dot4(r[J], Z, Pe, Oe, je));
    let H = 0.6 - Ve * Ve - ge * ge - Xe * Xe - _e * _e;
    H < 0 ? f = 0 : (H *= H, f = H * H * this._dot4(r[m], Ve, ge, Xe, _e));
    let k = 0.6 - Ke * Ke - Ye * Ye - ct * ct - qe * qe;
    return k < 0 ? p = 0 : (k *= k, p = k * k * this._dot4(r[g], Ke, Ye, ct, qe)), 27 * (c + h + d + f + p);
  }
  _dot(e, t, s) {
    return e[0] * t + e[1] * s;
  }
  _dot3(e, t, s, i) {
    return e[0] * t + e[1] * s + e[2] * i;
  }
  _dot4(e, t, s, i, r) {
    return e[0] * t + e[1] * s + e[2] * i + e[3] * r;
  }
}, xt = {
  name: "SSAOShader",
  defines: {
    PERSPECTIVE_CAMERA: 1,
    KERNEL_SIZE: 32
  },
  uniforms: {
    tNormal: { value: null },
    tDepth: { value: null },
    tNoise: { value: null },
    kernel: { value: null },
    cameraNear: { value: null },
    cameraFar: { value: null },
    resolution: { value: new Me() },
    cameraProjectionMatrix: { value: new at() },
    cameraInverseProjectionMatrix: { value: new at() },
    kernelRadius: { value: 8 },
    minDistance: { value: 5e-3 },
    maxDistance: { value: 0.05 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`
}, wt = {
  name: "SSAODepthShader",
  defines: { PERSPECTIVE_CAMERA: 1 },
  uniforms: {
    tDepth: { value: null },
    cameraNear: { value: null },
    cameraFar: { value: null }
  },
  vertexShader: `varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`
}, Mt = {
  name: "SSAOBlurShader",
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new Me() }
  },
  vertexShader: `varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`
}, Et = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
}, Js = class st extends Re {
  constructor(t, s, i = 512, r = 512, n = 32) {
    super(), this.width = i, this.height = r, this.clear = !0, this.needsSwap = !1, this.camera = s, this.scene = t, this.kernelRadius = 8, this.kernel = [], this.noiseTexture = null, this.output = 0, this.minDistance = 5e-3, this.maxDistance = 0.1, this._visibilityCache = [], this._generateSampleKernel(n), this._generateRandomKernelRotations();
    const a = new Mi();
    a.format = wi, a.type = hr, this.normalRenderTarget = new nt(this.width, this.height, {
      minFilter: Ce,
      magFilter: Ce,
      type: rt,
      depthTexture: a
    }), this.ssaoRenderTarget = new nt(this.width, this.height, { type: rt }), this.blurRenderTarget = this.ssaoRenderTarget.clone(), this.ssaoMaterial = new oe({
      defines: Object.assign({}, xt.defines),
      uniforms: le.clone(xt.uniforms),
      vertexShader: xt.vertexShader,
      fragmentShader: xt.fragmentShader,
      blending: Ae
    }), this.ssaoMaterial.defines.KERNEL_SIZE = n, this.ssaoMaterial.uniforms.tNormal.value = this.normalRenderTarget.texture, this.ssaoMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture, this.ssaoMaterial.uniforms.tNoise.value = this.noiseTexture, this.ssaoMaterial.uniforms.kernel.value = this.kernel, this.ssaoMaterial.uniforms.cameraNear.value = this.camera.near, this.ssaoMaterial.uniforms.cameraFar.value = this.camera.far, this.ssaoMaterial.uniforms.resolution.value.set(this.width, this.height), this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse), this.normalMaterial = new Wi(), this.normalMaterial.blending = Ae, this.blurMaterial = new oe({
      defines: Object.assign({}, Mt.defines),
      uniforms: le.clone(Mt.uniforms),
      vertexShader: Mt.vertexShader,
      fragmentShader: Mt.fragmentShader
    }), this.blurMaterial.uniforms.tDiffuse.value = this.ssaoRenderTarget.texture, this.blurMaterial.uniforms.resolution.value.set(this.width, this.height), this.depthRenderMaterial = new oe({
      defines: Object.assign({}, wt.defines),
      uniforms: le.clone(wt.uniforms),
      vertexShader: wt.vertexShader,
      fragmentShader: wt.fragmentShader,
      blending: Ae
    }), this.depthRenderMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture, this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this.copyMaterial = new oe({
      uniforms: le.clone(Et.uniforms),
      vertexShader: Et.vertexShader,
      fragmentShader: Et.fragmentShader,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      blendSrc: Ai,
      blendDst: us,
      blendEquation: ns,
      blendSrcAlpha: bi,
      blendDstAlpha: us,
      blendEquationAlpha: ns
    }), this._fsQuad = new ot(null), this._originalClearColor = new ce();
  }
  dispose() {
    this.normalRenderTarget.dispose(), this.ssaoRenderTarget.dispose(), this.blurRenderTarget.dispose(), this.normalMaterial.dispose(), this.blurMaterial.dispose(), this.copyMaterial.dispose(), this.depthRenderMaterial.dispose(), this._fsQuad.dispose();
  }
  render(t, s, i) {
    switch (this._overrideVisibility(), this._renderOverride(t, this.normalMaterial, this.normalRenderTarget, 7829503, 1), this._restoreVisibility(), this.ssaoMaterial.uniforms.kernelRadius.value = this.kernelRadius, this.ssaoMaterial.uniforms.minDistance.value = this.minDistance, this.ssaoMaterial.uniforms.maxDistance.value = this.maxDistance, this._renderPass(t, this.ssaoMaterial, this.ssaoRenderTarget), this._renderPass(t, this.blurMaterial, this.blurRenderTarget), this.output) {
      case st.OUTPUT.SSAO:
        this.copyMaterial.uniforms.tDiffuse.value = this.ssaoRenderTarget.texture, this.copyMaterial.blending = Ae, this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : i);
        break;
      case st.OUTPUT.Blur:
        this.copyMaterial.uniforms.tDiffuse.value = this.blurRenderTarget.texture, this.copyMaterial.blending = Ae, this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : i);
        break;
      case st.OUTPUT.Depth:
        this._renderPass(t, this.depthRenderMaterial, this.renderToScreen ? null : i);
        break;
      case st.OUTPUT.Normal:
        this.copyMaterial.uniforms.tDiffuse.value = this.normalRenderTarget.texture, this.copyMaterial.blending = Ae, this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : i);
        break;
      case st.OUTPUT.Default:
        this.copyMaterial.uniforms.tDiffuse.value = this.blurRenderTarget.texture, this.copyMaterial.blending = gi, this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : i);
        break;
      default:
        console.warn("THREE.SSAOPass: Unknown output type.");
    }
  }
  setSize(t, s) {
    this.width = t, this.height = s, this.ssaoRenderTarget.setSize(t, s), this.normalRenderTarget.setSize(t, s), this.blurRenderTarget.setSize(t, s), this.ssaoMaterial.uniforms.resolution.value.set(t, s), this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse), this.blurMaterial.uniforms.resolution.value.set(t, s);
  }
  _renderPass(t, s, i, r, n) {
    t.getClearColor(this._originalClearColor);
    const a = t.getClearAlpha(), o = t.autoClear;
    t.setRenderTarget(i), t.autoClear = !1, r != null && (t.setClearColor(r), t.setClearAlpha(n || 0), t.clear()), this._fsQuad.material = s, this._fsQuad.render(t), t.autoClear = o, t.setClearColor(this._originalClearColor), t.setClearAlpha(a);
  }
  _renderOverride(t, s, i, r, n) {
    t.getClearColor(this._originalClearColor);
    const a = t.getClearAlpha(), o = t.autoClear;
    t.setRenderTarget(i), t.autoClear = !1, r = s.clearColor || r, n = s.clearAlpha || n, r != null && (t.setClearColor(r), t.setClearAlpha(n || 0), t.clear()), this.scene.overrideMaterial = s, t.render(this.scene, this.camera), this.scene.overrideMaterial = null, t.autoClear = o, t.setClearColor(this._originalClearColor), t.setClearAlpha(a);
  }
  _generateSampleKernel(t) {
    const s = this.kernel;
    for (let i = 0; i < t; i++) {
      const r = new Se();
      r.x = Math.random() * 2 - 1, r.y = Math.random() * 2 - 1, r.z = Math.random(), r.normalize();
      let n = i / t;
      n = Ks.lerp(0.1, 1, n * n), r.multiplyScalar(n), s.push(r);
    }
  }
  _generateRandomKernelRotations() {
    const i = new br(), r = 16, n = new Float32Array(r);
    for (let a = 0; a < r; a++) {
      const o = Math.random() * 2 - 1, l = Math.random() * 2 - 1;
      n[a] = i.noise3d(o, l, 0);
    }
    this.noiseTexture = new xi(n, 4, 4, $i, Si), this.noiseTexture.wrapS = mt, this.noiseTexture.wrapT = mt, this.noiseTexture.needsUpdate = !0;
  }
  _overrideVisibility() {
    const t = this.scene, s = this._visibilityCache;
    t.traverse(function(i) {
      (i.isPoints || i.isLine || i.isLine2) && i.visible && (i.visible = !1, s.push(i));
    });
  }
  _restoreVisibility() {
    const t = this._visibilityCache;
    for (let s = 0; s < t.length; s++) t[s].visible = !0;
    t.length = 0;
  }
};
Js.OUTPUT = {
  Default: 0,
  SSAO: 1,
  Blur: 2,
  Depth: 3,
  Normal: 4
};
var yt = {
  name: "BokehShader",
  defines: {
    DEPTH_PACKING: 1,
    PERSPECTIVE_CAMERA: 1
  },
  uniforms: {
    tColor: { value: null },
    tDepth: { value: null },
    focus: { value: 1 },
    aspect: { value: 1 },
    aperture: { value: 0.025 },
    maxblur: { value: 0.01 },
    nearClip: { value: 1 },
    farClip: { value: 1e3 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`
}, Ar = class extends Re {
  constructor(e, t, s) {
    super(), this.scene = e, this.camera = t;
    const i = s.focus !== void 0 ? s.focus : 1, r = s.aperture !== void 0 ? s.aperture : 0.025, n = s.maxblur !== void 0 ? s.maxblur : 1;
    this._renderTargetDepth = new nt(1, 1, {
      minFilter: Ce,
      magFilter: Ce,
      type: rt
    }), this._renderTargetDepth.texture.name = "BokehPass.depth", this._materialDepth = new zi(), this._materialDepth.depthPacking = Zi, this._materialDepth.blending = Ae;
    const a = le.clone(yt.uniforms);
    a.tDepth.value = this._renderTargetDepth.texture, a.focus.value = i, a.aspect.value = t.aspect, a.aperture.value = r, a.maxblur.value = n, a.nearClip.value = t.near, a.farClip.value = t.far, this.materialBokeh = new oe({
      defines: Object.assign({}, yt.defines),
      uniforms: a,
      vertexShader: yt.vertexShader,
      fragmentShader: yt.fragmentShader
    }), this.uniforms = a, this._fsQuad = new ot(this.materialBokeh), this._oldClearColor = new ce();
  }
  render(e, t, s) {
    this.scene.overrideMaterial = this._materialDepth, e.getClearColor(this._oldClearColor);
    const i = e.getClearAlpha(), r = e.autoClear;
    e.autoClear = !1, e.setClearColor(16777215), e.setClearAlpha(1), e.setRenderTarget(this._renderTargetDepth), e.clear(), e.render(this.scene, this.camera), this.uniforms.tColor.value = s.texture, this.uniforms.nearClip.value = this.camera.near, this.uniforms.farClip.value = this.camera.far, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), e.clear(), this._fsQuad.render(e)), this.scene.overrideMaterial = null, e.setClearColor(this._oldClearColor), e.setClearAlpha(i), e.autoClear = r;
  }
  setSize(e, t) {
    this.materialBokeh.uniforms.aspect.value = e / t, this._renderTargetDepth.setSize(e, t);
  }
  dispose() {
    this._renderTargetDepth.dispose(), this._materialDepth.dispose(), this.materialBokeh.dispose(), this._fsQuad.dispose();
  }
}, ps = class extends Js {
  packed;
  sharing = !0;
  savedColor = new u.Color();
  depthClear = new Float32Array([
    1,
    1,
    1,
    1
  ]);
  constructor(e, t, s, i, r = 32) {
    super(e, t, s, i, r), this.packed = this.normalRenderTarget.texture.clone(), this.packed.name = "Archive.packedDepth", this.normalRenderTarget.textures.push(this.packed), this.normalMaterial.onBeforeCompile = (n) => {
      this.sharing && (n.vertexShader = `varying vec2 vArchiveZW;
` + n.vertexShader, n.vertexShader = n.vertexShader.replace("#include <project_vertex>", `#include <project_vertex>
vArchiveZW = gl_Position.zw;`), n.fragmentShader = `varying vec2 vArchiveZW;
layout(location = 1) out vec4 archivePackedDepth;
#include <packing>
` + n.fragmentShader, n.fragmentShader = n.fragmentShader.replace("void main() {", `void main() {
archivePackedDepth = packDepthToRGBA(0.5 * vArchiveZW.x / vArchiveZW.y + 0.5);`));
    }, this.normalMaterial.customProgramCacheKey = () => `archive-normal-packed-depth-v1-${this.sharing}`;
  }
  setSharing(e) {
    e !== this.sharing && (this.normalRenderTarget.dispose(), this.sharing = e, this.normalRenderTarget.textures.length = 1, e && this.normalRenderTarget.textures.push(this.packed), this.normalMaterial.needsUpdate = !0);
  }
  _renderOverride(e, t, s, i, r) {
    e.getClearColor(this.savedColor);
    const n = e.getClearAlpha(), a = e.autoClear, o = this.scene.overrideMaterial;
    e.setRenderTarget(s), e.autoClear = !1, e.setClearColor(i, r), e.clear();
    const l = e.getContext();
    this.sharing && l.clearBufferfv(l.COLOR, 1, this.depthClear), this.scene.overrideMaterial = t;
    try {
      e.render(this.scene, this.camera);
    } finally {
      this.scene.overrideMaterial = o, e.autoClear = a, e.setClearColor(this.savedColor, n);
    }
  }
}, Sr = class extends Ar {
  source;
  width = 1;
  height = 1;
  quad;
  constructor(e, t, s, i) {
    super(e, t, s), this.source = i, this.quad = new ot(this.materialBokeh);
  }
  setSize(e, t) {
    super.setSize(e, t), this.width = e, this.height = t;
  }
  render(e, t, s, i, r) {
    const n = this.source(), a = this.uniforms;
    if (!n.enabled || n.width !== this.width || n.height !== this.height) return super.render(e, t, s, i, r);
    const o = a.tDepth.value;
    a.tDepth.value = n.normalRenderTarget.textures[1], a.tColor.value = s.texture, a.nearClip.value = this.camera.near, a.farClip.value = this.camera.far;
    const l = e.autoClear;
    e.autoClear = !1, e.setRenderTarget(this.renderToScreen ? null : t), this.renderToScreen || e.clear();
    try {
      this.quad.render(e);
    } finally {
      a.tDepth.value = o, e.autoClear = l;
    }
  }
  dispose() {
    super.dispose(), this.quad.dispose();
  }
};
function ms(e) {
  const t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  e.traverse((r) => {
    if (r instanceof u.Mesh) {
      r instanceof u.InstancedMesh && r.dispose(), t.add(r.geometry);
      for (const n of [
        r.material,
        r.userData.fullMaterial,
        r.userData.fastMaterial
      ].flat()) n instanceof u.Material && s.add(n);
    }
  });
  for (const r of s) {
    for (const n of Object.values(r)) n instanceof u.Texture && i.add(n);
    r.dispose();
  }
  e instanceof u.Scene && (e.environment && i.add(e.environment), e.background instanceof u.Texture && i.add(e.background)), t.forEach((r) => r.dispose()), i.forEach((r) => r.dispose()), e.clear();
}
var gs = (e) => `${e.lane}:${e.row}`, vs = (e) => (e = Math.max(0, Math.min(1, e)), e * e * (3 - 2 * e)), Cr = class {
  target = 0;
  start = -10;
  origin = {
    row: 12,
    lane: 2
  };
  from = /* @__PURE__ */ new Map();
  latest = /* @__PURE__ */ new Map();
  backgroundFrom = 0;
  set(e, t, s, i = !1) {
    const r = e ? 1 : 0;
    r === this.target && !i || (this.backgroundFrom = i ? r : this.background(t), this.from = i ? /* @__PURE__ */ new Map() : new Map(this.latest), this.target = r, this.start = i ? t - 10 : t, this.origin = { ...s });
  }
  background(e) {
    return this.backgroundFrom + (this.target - this.backgroundFrom) * vs((e - this.start) / 0.85);
  }
  beginFrame() {
    this.latest.clear();
  }
  sample(e, t) {
    const s = Math.min(0.6, Math.abs(e.row - this.origin.row) * 0.034 + Math.abs(e.lane - this.origin.lane) * 0.11), i = this.from.get(gs(e)) ?? this.backgroundFrom, r = i + (this.target - i) * vs((t - this.start - s) / 0.58);
    return this.latest.set(gs(e), r), r;
  }
}, Rr = {
  Frosted_Polymer: "#626b70",
  Ivory_Edges: "#687277",
  Optical_Diffuser: "#192226",
  Titanium_Fasteners: "#b1b9bb",
  Index_Inlay: "#c6a36b",
  Printed_Label: "#303a3e",
  Subsurface_Optics: "#939e9f",
  Optical_Edges: "#bbc3bc",
  Carbon_Ink: "#b6bdb8"
};
function Nt(e, t, s = !1, i = { value: 0 }) {
  const r = { value: 0 }, n = e.onBeforeCompile, a = e.customProgramCacheKey.bind(e)(), o = new u.Color(Rr[t] ?? (t.includes("Orange") ? "#bb8850" : "#969f9f"));
  return e.onBeforeCompile = (l, c) => {
    n.call(e, l, c), l.uniforms.rhineTheme = r, l.uniforms.rhineDarkSurface = { value: o }, l.uniforms.rhineSubduedIndex = i, s && (l.vertexShader = `attribute float archiveTheme; varying float vRhineTheme;
` + l.vertexShader, l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
vRhineTheme = archiveTheme;`), l.fragmentShader = `varying float vRhineTheme;
` + l.fragmentShader), l.fragmentShader = `uniform float rhineTheme; uniform vec3 rhineDarkSurface; uniform float rhineSubduedIndex;
` + l.fragmentShader;
    const h = s ? "vRhineTheme" : "rhineTheme", d = t === "Printed_Canvas", f = d ? "#include <opaque_fragment>" : "#include <roughnessmap_fragment>", p = d ? "mix(vec3(0.023, 0.032, 0.037), vec3(0.78, 0.78, 0.71), 1.0 - smoothstep(0.12, 0.65, dot(diffuseColor.rgb, vec3(.2126,.7152,.0722))))" : t === "Frosted_Polymer" && !s ? "mix(rhineDarkSurface, vec3(0.92, 0.96, 0.97), glassRevealAtHeight(archiveClarity, vArchiveHeight))" : t === "Index_Inlay" ? "mix(rhineDarkSurface, vec3(0.030, 0.042, 0.048), rhineSubduedIndex)" : "rhineDarkSurface", v = d ? "outgoingLight" : "diffuseColor.rgb";
    l.fragmentShader = l.fragmentShader.replace(f, `${v} = mix(${v}, ${p}, ${h});
${f}`);
  }, e.customProgramCacheKey = () => `${a}-rhine-theme-${t}-${s}`, r;
}
var xs = /* @__PURE__ */ new WeakMap(), Er = new u.Color("#11181b"), Lr = new u.Color("#192125"), Dr = new u.Color("#263136");
function Pr(e, t, s) {
  let i = xs.get(e);
  if (!i) {
    const r = [];
    e.traverse((a) => {
      a instanceof u.Light && r.push({
        light: a,
        intensity: a.intensity
      });
    });
    const n = e.getObjectByName("archive-floor")?.material;
    i = {
      background: e.background.clone(),
      fog: e.fog?.color.clone(),
      intensity: e.environmentIntensity,
      exposure: t.toneMappingExposure,
      lights: r,
      floor: n ? {
        material: n,
        color: n.color.clone()
      } : void 0
    }, xs.set(e, i);
  }
  e.background.copy(i.background).lerp(Er, s), e.fog && i.fog && e.fog.color.copy(i.fog).lerp(Dr, s), i.floor && i.floor.material.color.copy(i.floor.color).lerp(Lr, s), e.environmentIntensity = u.MathUtils.lerp(i.intensity, 0.32, s), t.toneMappingExposure = u.MathUtils.lerp(i.exposure, 0.98, s);
  for (const { light: r, intensity: n } of i.lights) r.intensity = n * (1 - 0.35 * s);
}
var He = (e, t = 0, s = 1) => Math.min(s, Math.max(t, e)), ws = () => ({
  low: 0,
  mid: 0,
  high: 0,
  activity: 0
});
function Or(e, t, s, i, r) {
  const n = i.low * 0.8 * (0.5 + 0.5 * Math.sin(e * 0.29 - t * 0.5 - s * 2.7)), a = i.mid * 0.48 * (0.5 + 0.5 * Math.sin(e * 0.72 + t * 0.9 - s * 4.3)), o = i.high * 0.18 * Math.pow(Math.max(0, Math.sin(e * 1.7 - t * 2.2 - s * 6.4)), 4);
  return He((n + a + o) * He(r, 0, 2), 0, 1.8);
}
var Nr = class {
  weights = {
    legacy: 1,
    wave: 0,
    lift: 0
  };
  update(e, t, s, i) {
    for (const r of [
      "legacy",
      "wave",
      "lift"
    ]) this.weights[r] += ((i === r ? 1 : 0) - this.weights[r]) * (1 - Math.exp(-He(s, 0, 0.1) * 5));
    return { style: { ...this.weights } };
  }
};
function Ir(e, t, s, i, r, n, a = 0.5) {
  a = He(a);
  const o = (p) => p * p * (3 - 2 * p), l = o(He((a - 0.5) * 2)), c = 1 - o(He(a * 2)), h = 1 - c - l, d = (i.low * c + i.mid * h + i.high * l) * (0.72 + 0.28 * Math.sin(e * 0.32 - s * 2.2)) * 0.95, f = i.low * 0.62 * (0.55 + 0.45 * Math.sin(e * 0.22 + t * 0.18 - s * 1.8)) + i.mid * 0.42 * (0.55 + 0.45 * Math.sin(e * 0.38 - t * 0.27 - s * 2.8)) + i.high * 0.28 * (0.55 + 0.45 * Math.sin(e * 0.62 + t * 0.4 - s * 4.1));
  return Or(e, t, s, i, r) * n.style.legacy + (n.style.wave * d + n.style.lift * f) * He(r, 0, 2);
}
function Ms(e, t) {
  if (t === cr)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
  if (t === Jt || t === Zs) {
    let s = e.getIndex();
    if (s === null) {
      const a = [], o = e.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        e.setIndex(a), s = e.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
    }
    const i = s.count - 2, r = [];
    if (t === Jt) for (let a = 1; a <= i; a++)
      r.push(s.getX(0)), r.push(s.getX(a)), r.push(s.getX(a + 1));
    else for (let a = 0; a < i; a++) a % 2 === 0 ? (r.push(s.getX(a)), r.push(s.getX(a + 1)), r.push(s.getX(a + 2))) : (r.push(s.getX(a + 2)), r.push(s.getX(a + 1)), r.push(s.getX(a)));
    r.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const n = e.clone();
    return n.setIndex(r), n.clearGroups(), n;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
function Ur(e) {
  const t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = e.clone();
  return $s(e, i, function(r, n) {
    t.set(n, r), s.set(r, n);
  }), i.traverse(function(r) {
    if (!r.isSkinnedMesh) return;
    const n = r, a = t.get(r), o = a.skeleton.bones;
    n.skeleton = a.skeleton.clone(), n.bindMatrix.copy(a.bindMatrix), n.skeleton.bones = o.map(function(l) {
      return s.get(l);
    }), n.bind(n.skeleton, n.bindMatrix);
  }), i;
}
function $s(e, t, s) {
  s(e, t);
  for (let i = 0; i < e.children.length; i++) $s(e.children[i], t.children[i], s);
}
var ys = class extends ki {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new zr(t);
    }), this.register(function(t) {
      return new Gr(t);
    }), this.register(function(t) {
      return new Qr(t);
    }), this.register(function(t) {
      return new Zr(t);
    }), this.register(function(t) {
      return new Jr(t);
    }), this.register(function(t) {
      return new jr(t);
    }), this.register(function(t) {
      return new Vr(t);
    }), this.register(function(t) {
      return new Xr(t);
    }), this.register(function(t) {
      return new _r(t);
    }), this.register(function(t) {
      return new kr(t);
    }), this.register(function(t) {
      return new Kr(t);
    }), this.register(function(t) {
      return new Wr(t);
    }), this.register(function(t) {
      return new qr(t);
    }), this.register(function(t) {
      return new Yr(t);
    }), this.register(function(t) {
      return new Hr(t);
    }), this.register(function(t) {
      return new Ts(t, A.EXT_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new Ts(t, A.KHR_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new $r(t);
    });
  }
  load(e, t, s, i) {
    const r = this;
    let n;
    if (this.resourcePath !== "") n = this.resourcePath;
    else if (this.path !== "") {
      const l = pt.extractUrlBase(e);
      n = pt.resolveURL(l, this.path);
    } else n = pt.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, o = new js(this.manager);
    o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      try {
        r.parse(l, n, function(c) {
          t(c), r.manager.itemEnd(e);
        }, a);
      } catch (c) {
        a(c);
      }
    }, s, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, s, i) {
    let r;
    const n = {}, a = {}, o = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(e, 0, 4)) === ei) {
        try {
          n[A.KHR_BINARY_GLTF] = new ea(e);
        } catch (c) {
          i && i(c);
          return;
        }
        r = JSON.parse(n[A.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(o.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(/* @__PURE__ */ new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new fa(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const h = this.pluginCallbacks[c](l);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, n[h.name] = !0;
    }
    if (r.extensionsUsed) for (let c = 0; c < r.extensionsUsed.length; ++c) {
      const h = r.extensionsUsed[c], d = r.extensionsRequired || [];
      switch (h) {
        case A.KHR_MATERIALS_UNLIT:
          n[h] = new Br();
          break;
        case A.KHR_DRACO_MESH_COMPRESSION:
          n[h] = new ta(r, this.dracoLoader);
          break;
        case A.KHR_TEXTURE_TRANSFORM:
          n[h] = new sa();
          break;
        case A.KHR_MESH_QUANTIZATION:
          n[h] = new ia();
          break;
        default:
          d.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
      }
    }
    l.setExtensions(n), l.setPlugins(a), l.parse(s, i);
  }
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(i, r) {
      s.parse(e, t, i, r);
    });
  }
};
function Fr() {
  let e = {};
  return {
    get: function(t) {
      return e[t];
    },
    add: function(t, s) {
      e[t] = s;
    },
    remove: function(t) {
      delete e[t];
    },
    removeAll: function() {
      e = {};
    }
  };
}
function B(e, t, s) {
  const i = e.json.materials[t];
  return i.extensions && i.extensions[s] ? i.extensions[s] : null;
}
var A = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, Hr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_LIGHTS_PUNCTUAL, this.cache = {
      refs: {},
      uses: {}
    };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let i = t.cache.get(s);
    if (i) return i;
    const r = t.json, n = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let a;
    const o = new ce(16777215);
    n.color !== void 0 && o.setRGB(n.color[0], n.color[1], n.color[2], we);
    const l = n.range !== void 0 ? n.range : 0;
    switch (n.type) {
      case "directional":
        a = new yi(o), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        a = new qs(o), a.distance = l;
        break;
      case "spot":
        a = new nr(o), a.distance = l, n.spot = n.spot || {}, n.spot.innerConeAngle = n.spot.innerConeAngle !== void 0 ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = n.spot.outerConeAngle !== void 0 ? n.spot.outerConeAngle : Math.PI / 4, a.angle = n.spot.outerConeAngle, a.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + n.type);
    }
    return a.position.set(0, 0, 0), ae(a, n), n.intensity !== void 0 && (a.intensity = n.intensity), a.name = t.createUniqueName(n.name || "light_" + e), i = Promise.resolve(a), t.cache.add(s, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], r = (i.extensions && i.extensions[this.name] || {}).light;
    return r === void 0 ? null : this._loadLight(r).then(function(n) {
      return s._getNodeRef(t.cache, r, n);
    });
  }
}, Br = class {
  constructor() {
    this.name = A.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ft;
  }
  extendParams(e, t, s) {
    const i = [];
    e.color = new ce(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const n = r.baseColorFactor;
        e.color.setRGB(n[0], n[1], n[2], we), e.opacity = n[3];
      }
      r.baseColorTexture !== void 0 && i.push(s.assignTexture(e, "map", r.baseColorTexture, gt));
    }
    return Promise.all(i);
  }
}, kr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    return s === null || s.emissiveStrength !== void 0 && (t.emissiveIntensity = s.emissiveStrength), Promise.resolve();
  }
}, zr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    if (s.clearcoatFactor !== void 0 && (t.clearcoat = s.clearcoatFactor), s.clearcoatTexture !== void 0 && i.push(this.parser.assignTexture(t, "clearcoatMap", s.clearcoatTexture)), s.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = s.clearcoatRoughnessFactor), s.clearcoatRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), s.clearcoatNormalTexture !== void 0 && (i.push(this.parser.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== void 0)) {
      const r = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Me(r, r);
    }
    return Promise.all(i);
  }
}, Gr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    return s === null || (t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0), Promise.resolve();
  }
}, Wr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    return s.iridescenceFactor !== void 0 && (t.iridescence = s.iridescenceFactor), s.iridescenceTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceMap", s.iridescenceTexture)), s.iridescenceIor !== void 0 && (t.iridescenceIOR = s.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), s.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum), s.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum), s.iridescenceThicknessTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)), Promise.all(i);
  }
}, jr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    if (t.sheenColor = new ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, s.sheenColorFactor !== void 0) {
      const r = s.sheenColorFactor;
      t.sheenColor.setRGB(r[0], r[1], r[2], we);
    }
    return s.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = s.sheenRoughnessFactor), s.sheenColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenColorMap", s.sheenColorTexture, gt)), s.sheenRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)), Promise.all(i);
  }
}, Vr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    return s.transmissionFactor !== void 0 && (t.transmission = s.transmissionFactor), s.transmissionTexture !== void 0 && i.push(this.parser.assignTexture(t, "transmissionMap", s.transmissionTexture)), Promise.all(i);
  }
}, Xr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    t.thickness = s.thicknessFactor !== void 0 ? s.thicknessFactor : 0, s.thicknessTexture !== void 0 && i.push(this.parser.assignTexture(t, "thicknessMap", s.thicknessTexture)), t.attenuationDistance = s.attenuationDistance || 1 / 0;
    const r = s.attenuationColor || [
      1,
      1,
      1
    ];
    return t.attenuationColor = new ce().setRGB(r[0], r[1], r[2], we), Promise.all(i);
  }
}, _r = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    return s === null || (t.ior = s.ior !== void 0 ? s.ior : 1.5), Promise.resolve();
  }
}, Kr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    t.specularIntensity = s.specularFactor !== void 0 ? s.specularFactor : 1, s.specularTexture !== void 0 && i.push(this.parser.assignTexture(t, "specularIntensityMap", s.specularTexture));
    const r = s.specularColorFactor || [
      1,
      1,
      1
    ];
    return t.specularColor = new ce().setRGB(r[0], r[1], r[2], we), s.specularColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "specularColorMap", s.specularColorTexture, gt)), Promise.all(i);
  }
}, Yr = class {
  constructor(e) {
    this.parser = e, this.name = A.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    return t.bumpScale = s.bumpFactor !== void 0 ? s.bumpFactor : 1, s.bumpTexture !== void 0 && i.push(this.parser.assignTexture(t, "bumpMap", s.bumpTexture)), Promise.all(i);
  }
}, qr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    return B(this.parser, e, this.name) !== null ? he : null;
  }
  extendMaterialParams(e, t) {
    const s = B(this.parser, e, this.name);
    if (s === null) return Promise.resolve();
    const i = [];
    return s.anisotropyStrength !== void 0 && (t.anisotropy = s.anisotropyStrength), s.anisotropyRotation !== void 0 && (t.anisotropyRotation = s.anisotropyRotation), s.anisotropyTexture !== void 0 && i.push(this.parser.assignTexture(t, "anisotropyMap", s.anisotropyTexture)), Promise.all(i);
  }
}, Qr = class {
  constructor(e) {
    this.parser = e, this.name = A.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], n = t.options.ktx2Loader;
    if (!n) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, n);
  }
}, Zr = class {
  constructor(e) {
    this.parser = e, this.name = A.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, i = s.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const n = r.extensions[t], a = i.images[n.source];
    let o = s.textureLoader;
    if (a.uri) {
      const l = s.options.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return s.loadTextureImage(e, n.source, o);
  }
}, Jr = class {
  constructor(e) {
    this.parser = e, this.name = A.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, i = s.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const n = r.extensions[t], a = i.images[n.source];
    let o = s.textureLoader;
    if (a.uri) {
      const l = s.options.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return s.loadTextureImage(e, n.source, o);
  }
}, Ts = class {
  constructor(e, t) {
    this.name = t, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const i = s.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), n = this.parser.options.meshoptDecoder;
      if (!n || !n.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const o = i.byteOffset || 0, l = i.byteLength || 0, c = i.count, h = i.byteStride, d = new Uint8Array(a, o, l);
        return n.decodeGltfBufferAsync ? n.decodeGltfBufferAsync(c, h, d, i.mode, i.filter).then(function(f) {
          return f.buffer;
        }) : n.ready.then(function() {
          const f = new ArrayBuffer(c * h);
          return n.decodeGltfBuffer(new Uint8Array(f), c, h, d, i.mode, i.filter), f;
        });
      });
    } else return null;
  }
}, $r = class {
  constructor(e) {
    this.name = A.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0) return null;
    const i = t.meshes[s.mesh];
    for (const o of i.primitives) if (o.mode !== ee.TRIANGLES && o.mode !== ee.TRIANGLE_STRIP && o.mode !== ee.TRIANGLE_FAN && o.mode !== void 0) return null;
    const r = s.extensions[this.name].attributes, n = [], a = {};
    for (const o in r) n.push(this.parser.getDependency("accessor", r[o]).then((l) => (a[o] = l, a[o])));
    return n.length < 1 ? null : (n.push(this.parser.createNodeMesh(e)), Promise.all(n).then((o) => {
      const l = o.pop(), c = l.isGroup ? l.children : [l], h = o[0].count, d = [];
      for (const f of c) {
        const p = new at(), v = new Se(), x = new Qs(), w = new Se(1, 1, 1), y = new Vs(f.geometry, f.material, h);
        for (let M = 0; M < h; M++)
          a.TRANSLATION && v.fromBufferAttribute(a.TRANSLATION, M), a.ROTATION && x.fromBufferAttribute(a.ROTATION, M), a.SCALE && w.fromBufferAttribute(a.SCALE, M), y.setMatrixAt(M, p.compose(v, x, w));
        for (const M in a) if (M === "_COLOR_0") {
          const b = a[M];
          y.instanceColor = new Ei(b.array, b.itemSize, b.normalized);
        } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && f.geometry.setAttribute(M, a[M]);
        ss.prototype.copy.call(y, f), this.parser.assignFinalMaterial(y), d.push(y);
      }
      return l.isGroup ? (l.clear(), l.add(...d), l) : d[0];
    }));
  }
}, ei = "glTF", dt = 12, bs = {
  JSON: 1313821514,
  BIN: 5130562
}, ea = class {
  constructor(e) {
    this.name = A.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, dt), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== ei) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - dt, r = new DataView(e, dt);
    let n = 0;
    for (; n < i; ) {
      const a = r.getUint32(n, !0);
      n += 4;
      const o = r.getUint32(n, !0);
      if (n += 4, o === bs.JSON) {
        const l = new Uint8Array(e, dt + n, a);
        this.content = s.decode(l);
      } else if (o === bs.BIN) {
        const l = dt + n;
        this.body = e.slice(l, l + a);
      }
      n += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}, ta = class {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = A.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, n = e.extensions[this.name].attributes, a = {}, o = {}, l = {};
    for (const c in n) {
      const h = $t[c] || c.toLowerCase();
      a[h] = n[c];
    }
    for (const c in e.attributes) {
      const h = $t[c] || c.toLowerCase();
      if (n[c] !== void 0) {
        const d = s.accessors[e.attributes[c]];
        l[h] = it[d.componentType].name, o[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(c) {
      return new Promise(function(h, d) {
        i.decodeDracoFile(c, function(f) {
          for (const p in f.attributes) {
            const v = f.attributes[p], x = o[p];
            x !== void 0 && (v.normalized = x);
          }
          h(f);
        }, a, l, we, d);
      });
    });
  }
}, sa = class {
  constructor() {
    this.name = A.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}, ia = class {
  constructor() {
    this.name = A.KHR_MESH_QUANTIZATION;
  }
}, ti = class extends Pi {
  constructor(e, t, s, i) {
    super(e, t, s, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let n = 0; n !== i; n++) t[n] = s[r + n];
    return t;
  }
  interpolate_(e, t, s, i) {
    const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, o = a * 2, l = a * 3, c = i - t, h = (s - t) / c, d = h * h, f = d * h, p = e * l, v = p - l, x = -2 * f + 3 * d, w = f - d, y = 1 - x, M = w - d + h;
    for (let b = 0; b !== a; b++) {
      const S = n[v + b + a], P = n[v + b + o] * c, L = n[p + b + a], R = n[p + b] * c;
      r[b] = y * S + M * P + x * L + w * R;
    }
    return r;
  }
}, ra = new Qs(), aa = class extends ti {
  interpolate_(e, t, s, i) {
    const r = super.interpolate_(e, t, s, i);
    return ra.fromArray(r).normalize().toArray(r), r;
  }
}, ee = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, it = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, As = {
  9728: Ce,
  9729: Lt,
  9984: Xi,
  9985: Hi,
  9986: Vi,
  9987: _s
}, Ss = {
  33071: mi,
  33648: ji,
  10497: mt
}, Gt = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, $t = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, be = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, na = {
  CUBICSPLINE: void 0,
  LINEAR: Xs,
  STEP: Oi
}, Wt = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function oa(e) {
  return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Dt({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Ci
  })), e.DefaultMaterial;
}
function Ie(e, t, s) {
  for (const i in s.extensions) e[i] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = s.extensions[i]);
}
function ae(e, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function la(e, t, s) {
  let i = !1, r = !1, n = !1;
  for (let c = 0, h = t.length; c < h; c++) {
    const d = t[c];
    if (d.POSITION !== void 0 && (i = !0), d.NORMAL !== void 0 && (r = !0), d.COLOR_0 !== void 0 && (n = !0), i && r && n) break;
  }
  if (!i && !r && !n) return Promise.resolve(e);
  const a = [], o = [], l = [];
  for (let c = 0, h = t.length; c < h; c++) {
    const d = t[c];
    if (i) {
      const f = d.POSITION !== void 0 ? s.getDependency("accessor", d.POSITION) : e.attributes.position;
      a.push(f);
    }
    if (r) {
      const f = d.NORMAL !== void 0 ? s.getDependency("accessor", d.NORMAL) : e.attributes.normal;
      o.push(f);
    }
    if (n) {
      const f = d.COLOR_0 !== void 0 ? s.getDependency("accessor", d.COLOR_0) : e.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], d = c[1], f = c[2];
    return i && (e.morphAttributes.position = h), r && (e.morphAttributes.normal = d), n && (e.morphAttributes.color = f), e.morphTargetsRelative = !0, e;
  });
}
function ca(e, t) {
  if (e.updateMorphTargets(), t.weights !== void 0) for (let s = 0, i = t.weights.length; s < i; s++) e.morphTargetInfluences[s] = t.weights[s];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const s = t.extras.targetNames;
    if (e.morphTargetInfluences.length === s.length) {
      e.morphTargetDictionary = {};
      for (let i = 0, r = s.length; i < r; i++) e.morphTargetDictionary[s[i]] = i;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function ha(e) {
  let t;
  const s = e.extensions && e.extensions[A.KHR_DRACO_MESH_COMPRESSION];
  if (s ? t = "draco:" + s.bufferView + ":" + s.indices + ":" + jt(s.attributes) : t = e.indices + ":" + jt(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let i = 0, r = e.targets.length; i < r; i++) t += ":" + jt(e.targets[i]);
  return t;
}
function jt(e) {
  let t = "";
  const s = Object.keys(e).sort();
  for (let i = 0, r = s.length; i < r; i++) t += s[i] + ":" + e[s[i]] + ";";
  return t;
}
function es(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function ua(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var da = new at(), fa = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Fr(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
      refs: {},
      uses: {}
    }, this.cameraCache = {
      refs: {},
      uses: {}
    }, this.lightCache = {
      refs: {},
      uses: {}
    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, i = -1, r = !1, n = -1;
    if (typeof navigator < "u" && typeof navigator.userAgent < "u") {
      const a = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      i = s && o ? parseInt(o[1], 10) : -1, r = a.indexOf("Firefox") > -1, n = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && i < 17 || r && n < 98 ? this.textureLoader = new or(this.options.manager) : this.textureLoader = new Ri(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new js(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(n) {
      return n._markDefs && n._markDefs();
    }), Promise.all(this._invokeAll(function(n) {
      return n.beforeRoot && n.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(n) {
      const a = {
        scene: n[0][i.scene || 0],
        scenes: n[0],
        animations: n[1],
        cameras: n[2],
        asset: i.asset,
        parser: s,
        userData: {}
      };
      return Ie(r, a, i), ae(a, i), Promise.all(s._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a);
      })).then(function() {
        for (const o of a.scenes) o.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const n = t[i].joints;
      for (let a = 0, o = n.length; a < o; a++) e[n[a]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const n = e[i];
      n.mesh !== void 0 && (this._addNodeRef(this.meshCache, n.mesh), n.skin !== void 0 && (s[n.mesh].isSkinnedMesh = !0)), n.camera !== void 0 && this._addNodeRef(this.cameraCache, n.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const i = s.clone(), r = (n, a) => {
      const o = this.associations.get(n);
      o != null && this.associations.set(a, o);
      for (const [l, c] of n.children.entries()) r(c, a.children[l]);
    };
    return r(s, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && s.push(r);
    }
    return s;
  }
  getDependency(e, t) {
    const s = e + ":" + t;
    let i = this.cache.get(s);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
      }
      this.cache.add(s, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, n) {
        return s.getDependency(e, n);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], s = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[A.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, n) {
      s.load(pt.resolveURL(t.uri, i.path), r, void 0, function() {
        n(/* @__PURE__ */ new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(s) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return s.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, s = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const n = Gt[i.type], a = it[i.componentType], o = i.normalized === !0, l = new a(i.count * n);
      return Promise.resolve(new Ft(l, n, o));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(n) {
      const a = n[0], o = Gt[i.type], l = it[i.componentType], c = l.BYTES_PER_ELEMENT, h = c * o, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? s.bufferViews[i.bufferView].byteStride : void 0, p = i.normalized === !0;
      let v, x;
      if (f && f !== h) {
        const w = Math.floor(d / f), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + w + ":" + i.count;
        let M = t.cache.get(y);
        M || (v = new l(a, w * f, i.count * f / c), M = new Li(v, f / c), t.cache.add(y, M)), x = new Di(M, o, d % f / c, p);
      } else
        a === null ? v = new l(i.count * o) : v = new l(a, d, i.count * o), x = new Ft(v, o, p);
      if (i.sparse !== void 0) {
        const w = Gt.SCALAR, y = it[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, b = i.sparse.values.byteOffset || 0, S = new y(n[1], M, i.sparse.count * w), P = new l(n[2], b, i.sparse.count * o);
        a !== null && (x = new Ft(x.array.slice(), x.itemSize, x.normalized)), x.normalized = !1;
        for (let L = 0, R = S.length; L < R; L++) {
          const C = S[L];
          if (x.setX(C, P[L * o]), o >= 2 && x.setY(C, P[L * o + 1]), o >= 3 && x.setZ(C, P[L * o + 2]), o >= 4 && x.setW(C, P[L * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        x.normalized = p;
      }
      return x;
    });
  }
  loadTexture(e) {
    const t = this.json, s = this.options, i = t.textures[e].source, r = t.images[i];
    let n = this.textureLoader;
    if (r.uri) {
      const a = s.manager.getHandler(r.uri);
      a !== null && (n = a);
    }
    return this.loadTextureImage(e, i, n);
  }
  loadTextureImage(e, t, s) {
    const i = this, r = this.json, n = r.textures[e], a = r.images[t], o = (a.uri || a.bufferView) + ":" + n.sampler;
    if (this.textureCache[o]) return this.textureCache[o];
    const l = this.loadImageSource(t, s).then(function(c) {
      c.flipY = !1, c.name = n.name || a.name || "", c.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (c.name = a.uri);
      const h = (r.samplers || {})[n.sampler] || {};
      return c.magFilter = As[h.magFilter] || Lt, c.minFilter = As[h.minFilter] || _s, c.wrapS = Ss[h.wrapS] || mt, c.wrapT = Ss[h.wrapT] || mt, c.generateMipmaps = !c.isCompressedTexture && c.minFilter !== Ce && c.minFilter !== Lt, i.associations.set(c, { textures: e }), c;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = l, l;
  }
  loadImageSource(e, t) {
    const s = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
    const n = i.images[e], a = self.URL || self.webkitURL;
    let o = n.uri || "", l = !1;
    if (n.bufferView !== void 0) o = s.getDependency("bufferView", n.bufferView).then(function(h) {
      l = !0;
      const d = new Blob([h], { type: n.mimeType });
      return o = a.createObjectURL(d), o;
    });
    else if (n.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const c = Promise.resolve(o).then(function(h) {
      return new Promise(function(d, f) {
        let p = d;
        t.isImageBitmapLoader === !0 && (p = function(v) {
          const x = new Pt(v);
          x.needsUpdate = !0, d(x);
        }), t.load(pt.resolveURL(h, r.path), p, void 0, f);
      });
    }).then(function(h) {
      return l === !0 && a.revokeObjectURL(o), ae(h, n), h.userData.mimeType = n.mimeType || ua(n.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), h;
    });
    return this.sourceCache[e] = c, c;
  }
  assignTexture(e, t, s, i) {
    const r = this;
    return this.getDependency("texture", s.index).then(function(n) {
      if (!n) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (n = n.clone(), n.channel = s.texCoord), r.extensions[A.KHR_TEXTURE_TRANSFORM]) {
        const a = s.extensions !== void 0 ? s.extensions[A.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = r.associations.get(n);
          n = r.extensions[A.KHR_TEXTURE_TRANSFORM].extendTexture(n, a), r.associations.set(n, o);
        }
      }
      return i !== void 0 && (n.colorSpace = i), e[t] = n, n;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, n = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new qi(), Bt.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, o.sizeAttenuation = !1, this.cache.add(a, o)), s = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + s.uuid;
      let o = this.cache.get(a);
      o || (o = new Ii(), Bt.prototype.copy.call(o, s), o.color.copy(s.color), o.map = s.map, this.cache.add(a, o)), s = o;
    }
    if (i || r || n) {
      let a = "ClonedMaterial:" + s.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), n && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = s.clone(), r && (o.vertexColors = !0), n && (o.flatShading = !0), i && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(s))), s = o;
    }
    e.material = s;
  }
  getMaterialType() {
    return Dt;
  }
  loadMaterial(e) {
    const t = this, s = this.json, i = this.extensions, r = s.materials[e];
    let n;
    const a = {}, o = r.extensions || {}, l = [];
    if (o[A.KHR_MATERIALS_UNLIT]) {
      const h = i[A.KHR_MATERIALS_UNLIT];
      n = h.getMaterialType(), l.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new ce(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], we), a.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", h.baseColorTexture, gt)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), n = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = Ti);
    const c = r.alphaMode || Wt.OPAQUE;
    if (c === Wt.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, c === Wt.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && n !== ft && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Me(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && n !== ft && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && n !== ft) {
      const h = r.emissiveFactor;
      a.emissive = new ce().setRGB(h[0], h[1], h[2], we);
    }
    return r.emissiveTexture !== void 0 && n !== ft && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, gt)), Promise.all(l).then(function() {
      const h = new n(a);
      return r.name && (h.name = r.name), ae(h, r), t.associations.set(h, { materials: e }), r.extensions && Ie(i, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = Qi.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, s = this.extensions, i = this.primitiveCache;
    function r(a) {
      return s[A.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return Cs(o, a, t);
      });
    }
    const n = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const l = e[a], c = ha(l), h = i[c];
      if (h) n.push(h.promise);
      else {
        let d;
        l.extensions && l.extensions[A.KHR_DRACO_MESH_COMPRESSION] ? d = r(l) : d = Cs(new Ws(), l, t), i[c] = {
          primitive: l,
          promise: d
        }, n.push(d);
      }
    }
    return Promise.all(n);
  }
  loadMesh(e) {
    const t = this, s = this.json, i = this.extensions, r = s.meshes[e], n = r.primitives, a = [];
    for (let o = 0, l = n.length; o < l; o++) {
      const c = n[o].material === void 0 ? oa(this.cache) : this.getDependency("material", n[o].material);
      a.push(c);
    }
    return a.push(t.loadGeometries(n)), Promise.all(a).then(function(o) {
      const l = o.slice(0, o.length - 1), c = o[o.length - 1], h = [];
      for (let f = 0, p = c.length; f < p; f++) {
        const v = c[f], x = n[f];
        let w;
        const y = l[f];
        if (x.mode === ee.TRIANGLES || x.mode === ee.TRIANGLE_STRIP || x.mode === ee.TRIANGLE_FAN || x.mode === void 0)
          w = r.isSkinnedMesh === !0 ? new rr(v, y) : new xe(v, y), w.isSkinnedMesh === !0 && w.normalizeSkinWeights(), x.mode === ee.TRIANGLE_STRIP ? w.geometry = Ms(w.geometry, Zs) : x.mode === ee.TRIANGLE_FAN && (w.geometry = Ms(w.geometry, Jt));
        else if (x.mode === ee.LINES) w = new Fi(v, y);
        else if (x.mode === ee.LINE_STRIP) w = new Ni(v, y);
        else if (x.mode === ee.LINE_LOOP) w = new Ui(v, y);
        else if (x.mode === ee.POINTS) w = new Yi(v, y);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + x.mode);
        Object.keys(w.geometry.morphAttributes).length > 0 && ca(w, r), w.name = t.createUniqueName(r.name || "mesh_" + e), ae(w, r), x.extensions && Ie(i, w, x), t.assignFinalMaterial(w), h.push(w);
      }
      for (let f = 0, p = h.length; f < p; f++) t.associations.set(h[f], {
        meshes: e,
        primitives: f
      });
      if (h.length === 1)
        return r.extensions && Ie(i, h[0], r), h[0];
      const d = new Ht();
      r.extensions && Ie(i, d, r), t.associations.set(d, { meshes: e });
      for (let f = 0, p = h.length; f < p; f++) d.add(h[f]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e], i = s[s.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? t = new Ki(Ks.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : s.type === "orthographic" && (t = new Ys(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), s.name && (t.name = this.createUniqueName(s.name)), ae(t, s), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], s = [];
    for (let i = 0, r = t.joints.length; i < r; i++) s.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(i) {
      const r = i.pop(), n = i, a = [], o = [];
      for (let l = 0, c = n.length; l < c; l++) {
        const h = n[l];
        if (h) {
          a.push(h);
          const d = new at();
          r !== null && d.fromArray(r.array, l * 16), o.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new ir(a, o);
    });
  }
  loadAnimation(e) {
    const t = this.json, s = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, n = [], a = [], o = [], l = [], c = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const f = i.channels[h], p = i.samplers[f.sampler], v = f.target, x = v.node, w = i.parameters !== void 0 ? i.parameters[p.input] : p.input, y = i.parameters !== void 0 ? i.parameters[p.output] : p.output;
      v.node !== void 0 && (n.push(this.getDependency("node", x)), a.push(this.getDependency("accessor", w)), o.push(this.getDependency("accessor", y)), l.push(p), c.push(v));
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c)
    ]).then(function(h) {
      const d = h[0], f = h[1], p = h[2], v = h[3], x = h[4], w = [];
      for (let M = 0, b = d.length; M < b; M++) {
        const S = d[M], P = f[M], L = p[M], R = v[M], C = x[M];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const O = s._createAnimationTracks(S, P, L, R, C);
        if (O) for (let D = 0; D < O.length; D++) w.push(O[D]);
      }
      const y = new ci(r, void 0, w);
      return ae(y, i), y;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : s.getDependency("mesh", i.mesh).then(function(r) {
      const n = s._getNodeRef(s.meshCache, i.mesh, r);
      return i.weights !== void 0 && n.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, l = i.weights.length; o < l; o++) a.morphTargetInfluences[o] = i.weights[o];
      }), n;
    });
  }
  loadNode(e) {
    const t = this.json, s = this, i = t.nodes[e], r = s._loadNodeShallow(e), n = [], a = i.children || [];
    for (let l = 0, c = a.length; l < c; l++) n.push(s.getDependency("node", a[l]));
    const o = i.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(n),
      o
    ]).then(function(l) {
      const c = l[0], h = l[1], d = l[2];
      d !== null && c.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, da);
      });
      for (let f = 0, p = h.length; f < p; f++) c.add(h[f]);
      if (c.userData.pivot !== void 0 && h.length > 0) {
        const f = c.userData.pivot, p = h[0];
        c.pivot = new Se().fromArray(f), c.position.x -= f[0], c.position.y -= f[1], c.position.z -= f[2], p.position.set(0, 0, 0), delete c.userData.pivot;
      }
      return c;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, s = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], n = r.name ? i.createUniqueName(r.name) : "", a = [], o = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return o && a.push(o), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let c;
      if (r.isBone === !0 ? c = new ui() : l.length > 1 ? c = new Ht() : l.length === 1 ? c = l[0] : c = new ss(), c !== l[0]) for (let h = 0, d = l.length; h < d; h++) c.add(l[h]);
      if (r.name && (c.userData.name = r.name, c.name = n), ae(c, r), r.extensions && Ie(s, c, r), r.matrix !== void 0) {
        const h = new at();
        h.fromArray(r.matrix), c.applyMatrix4(h);
      } else
        r.translation !== void 0 && c.position.fromArray(r.translation), r.rotation !== void 0 && c.quaternion.fromArray(r.rotation), r.scale !== void 0 && c.scale.fromArray(r.scale);
      if (!i.associations.has(c)) i.associations.set(c, {});
      else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
        const h = i.associations.get(c);
        i.associations.set(c, { ...h });
      }
      return i.associations.get(c).nodes = e, c;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, s = this.json.scenes[e], i = this, r = new Ht();
    s.name && (r.name = i.createUniqueName(s.name)), ae(r, s), s.extensions && Ie(t, r, s);
    const n = s.nodes || [], a = [];
    for (let o = 0, l = n.length; o < l; o++) a.push(i.getDependency("node", n[o]));
    return Promise.all(a).then(function(o) {
      for (let c = 0, h = o.length; c < h; c++) {
        const d = o[c];
        d.parent !== null ? r.add(Ur(d)) : r.add(d);
      }
      const l = (c) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, f] of i.associations) (d instanceof Bt || d instanceof Pt) && h.set(d, f);
        return c.traverse((d) => {
          const f = i.associations.get(d);
          f != null && h.set(d, f);
        }), h;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, s, i, r) {
    const n = [], a = e.name ? e.name : e.uuid, o = [];
    be[r.path] === be.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }) : o.push(a);
    let l;
    switch (be[r.path]) {
      case be.weights:
        l = ls;
        break;
      case be.rotation:
        l = cs;
        break;
      case be.translation:
      case be.scale:
        l = hs;
        break;
      default:
        s.itemSize === 1 ? l = ls : l = hs;
    }
    const c = i.interpolation !== void 0 ? na[i.interpolation] : Xs, h = this._getArrayFromAccessor(s);
    for (let d = 0, f = o.length; d < f; d++) {
      const p = new l(o[d] + "." + be[r.path], t.array, h, c);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(p), n.push(p);
    }
    return n;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = es(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, n = t.length; r < n; r++) i[r] = t[r] * s;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      return new (this instanceof cs ? aa : ti)(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
};
function pa(e, t, s) {
  const i = t.attributes, r = new di();
  if (i.POSITION !== void 0) {
    const o = s.json.accessors[i.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (r.set(new Se(l[0], l[1], l[2]), new Se(c[0], c[1], c[2])), o.normalized) {
        const h = es(it[o.componentType]);
        r.min.multiplyScalar(h), r.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const n = t.targets;
  if (n !== void 0) {
    const o = new Se(), l = new Se();
    for (let c = 0, h = n.length; c < h; c++) {
      const d = n[c];
      if (d.POSITION !== void 0) {
        const f = s.json.accessors[d.POSITION], p = f.min, v = f.max;
        if (p !== void 0 && v !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(v[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(v[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(v[2]))), f.normalized) {
            const x = es(it[f.componentType]);
            l.multiplyScalar(x);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    r.expandByVector(o);
  }
  e.boundingBox = r;
  const a = new ar();
  r.getCenter(a.center), a.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = a;
}
function Cs(e, t, s) {
  const i = t.attributes, r = [];
  function n(a, o) {
    return s.getDependency("accessor", a).then(function(l) {
      e.setAttribute(o, l);
    });
  }
  for (const a in i) {
    const o = $t[a] || a.toLowerCase();
    o in e.attributes || r.push(n(i[a], o));
  }
  if (t.indices !== void 0 && !e.index) {
    const a = s.getDependency("accessor", t.indices).then(function(o) {
      e.setIndex(o);
    });
    r.push(a);
  }
  return Zt.workingColorSpace !== we && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Zt.workingColorSpace}" not supported.`), ae(e, t), pa(e, t, s), Promise.all(r).then(function() {
    return t.targets !== void 0 ? la(e, t.targets, s) : e;
  });
}
var ma = class extends sr {
  constructor() {
    super(), this.name = "RoomEnvironment", this.position.y = -3.5;
    const e = new fi();
    e.deleteAttribute("uv");
    const t = new Dt({ side: hi }), s = new Dt(), i = new qs(16777215, 900, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const r = new xe(e, t);
    r.position.set(-0.757, 13.219, 0.717), r.scale.set(31.713, 28.305, 28.591), this.add(r);
    const n = new Vs(e, s, 6), a = new ss();
    a.position.set(-10.906, 2.009, 1.846), a.rotation.set(0, -0.195, 0), a.scale.set(2.328, 7.905, 4.651), a.updateMatrix(), n.setMatrixAt(0, a.matrix), a.position.set(-5.607, -0.754, -0.758), a.rotation.set(0, 0.994, 0), a.scale.set(1.97, 1.534, 3.955), a.updateMatrix(), n.setMatrixAt(1, a.matrix), a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), a.updateMatrix(), n.setMatrixAt(2, a.matrix), a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), a.updateMatrix(), n.setMatrixAt(3, a.matrix), a.position.set(2.291, -0.756, -2.621), a.rotation.set(0, -0.286, 0), a.scale.set(1.546, 1.552, 1.496), a.updateMatrix(), n.setMatrixAt(4, a.matrix), a.position.set(-2.193, -0.369, -5.547), a.rotation.set(0, 0.516, 0), a.scale.set(3.875, 3.487, 2.986), a.updateMatrix(), n.setMatrixAt(5, a.matrix), this.add(n);
    const o = new xe(e, Ze(50));
    o.position.set(-16.116, 14.37, 8.208), o.scale.set(0.1, 2.428, 2.739), this.add(o);
    const l = new xe(e, Ze(50));
    l.position.set(-16.109, 18.021, -8.207), l.scale.set(0.1, 2.425, 2.751), this.add(l);
    const c = new xe(e, Ze(17));
    c.position.set(14.904, 12.198, -1.832), c.scale.set(0.15, 4.265, 6.331), this.add(c);
    const h = new xe(e, Ze(43));
    h.position.set(-0.462, 8.89, 14.52), h.scale.set(4.38, 5.441, 0.088), this.add(h);
    const d = new xe(e, Ze(20));
    d.position.set(3.235, 11.486, -12.541), d.scale.set(2.5, 2, 0.1), this.add(d);
    const f = new xe(e, Ze(100));
    f.position.set(0, 20, 0), f.scale.set(1, 0.1, 1), this.add(f);
  }
  dispose() {
    const e = /* @__PURE__ */ new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
};
function Ze(e) {
  return new Gi({
    color: 0,
    emissive: 16777215,
    emissiveIntensity: e
  });
}
function ga(e, t, s = "baseline") {
  const i = s === "refined";
  e.toneMappingExposure = i ? 1 : 1.05;
  const r = new u.PMREMGenerator(e), n = new ma();
  t.environment = r.fromScene(n, 0.04).texture, n.dispose(), r.dispose(), t.environmentIntensity = i ? 0.52 : 0.48, t.add(new u.HemisphereLight("#fffaf5", i ? "#b49b80" : "#b4a18c", i ? 0.5 : 0.65));
  const a = new u.DirectionalLight(i ? "#fff4e5" : "#fff7ed", i ? 1.7 : 1.4);
  a.position.set(...i ? [
    -8,
    14,
    4
  ] : [
    -6,
    14,
    -5
  ]);
  const o = new u.DirectionalLight("#ffffff", i ? 0.3 : 0.6);
  return o.position.set(7, 8, -10), t.add(a, o), a;
}
var va = class extends Re {
  constructor(e, t = "tDiffuse") {
    super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof oe ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = le.clone(e.uniforms), this.material = new oe({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this._fsQuad = new ot(this.material);
  }
  render(e, t, s) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = s.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}, Rs = class extends Re {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, s) {
    const i = e.getContext(), r = e.state;
    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0);
    let n, a;
    this.inverse ? (n = 0, a = 1) : (n = 1, a = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, n, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(!0), e.setRenderTarget(s), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.color.setMask(!0), r.buffers.depth.setMask(!0), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), r.buffers.stencil.setLocked(!0);
  }
}, xa = class extends Re {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}, wa = class {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const s = e.getSize(new Me());
      this._width = s.width, this._height = s.height, t = new nt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: rt }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new va(Et), this.copyPass.material.blending = Ae, this.timer = new lr();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    this.timer.update(), e === void 0 && (e = this.timer.getDelta());
    const t = this.renderer.getRenderTarget();
    let s = !1;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const n = this.passes[i];
      if (n.enabled !== !1) {
        if (n.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), n.render(this.renderer, this.writeBuffer, this.readBuffer, e, s), n.needsSwap) {
          if (s) {
            const a = this.renderer.getContext(), o = this.renderer.state.buffers.stencil;
            o.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), o.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Rs !== void 0 && (n instanceof Rs ? s = !0 : n instanceof xa && (s = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Me());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const s = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(s, i), this.renderTarget2.setSize(s, i);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(s, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}, Ma = class extends Re {
  constructor(e, t, s = null, i = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = s, this.clearColor = i, this.clearAlpha = r, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this.isRenderPass = !0, this._oldClearColor = new ce();
  }
  render(e, t, s) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, n;
    this.overrideMaterial !== null && (n = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : s), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = n), e.autoClear = i;
  }
}, Tt = {
  name: "OutputShader",
  uniforms: {
    tDiffuse: { value: null },
    toneMappingExposure: { value: 1 }
  },
  vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
}, ya = class extends Re {
  constructor() {
    super(), this.isOutputPass = !0, this.uniforms = le.clone(Tt.uniforms), this.material = new Ji({
      name: Tt.name,
      uniforms: this.uniforms,
      vertexShader: Tt.vertexShader,
      fragmentShader: Tt.fragmentShader
    }), this._fsQuad = new ot(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, s) {
    this.uniforms.tDiffuse.value = s.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, Zt.getTransfer(this._outputColorSpace) === tr && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === Bi ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === er ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === pi ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === oi ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === li ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === _i ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === vi && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this._fsQuad.dispose();
  }
}, bt = {
  name: "SMAAEdgesShader",
  defines: { SMAA_THRESHOLD: "0.1" },
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new Me(1 / 1024, 1 / 512) }
  },
  vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`
}, At = {
  name: "SMAAWeightsShader",
  defines: {
    SMAA_MAX_SEARCH_STEPS: "8",
    SMAA_AREATEX_MAX_DISTANCE: "16",
    SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )",
    SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )"
  },
  uniforms: {
    tDiffuse: { value: null },
    tArea: { value: null },
    tSearch: { value: null },
    resolution: { value: new Me(1 / 1024, 1 / 512) }
  },
  vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`
}, Vt = {
  name: "SMAABlendShader",
  uniforms: {
    tDiffuse: { value: null },
    tColor: { value: null },
    resolution: { value: new Me(1 / 1024, 1 / 512) }
  },
  vertexShader: `

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`
}, Ta = class extends Re {
  constructor() {
    super(), this._edgesRT = new nt(1, 1, {
      depthBuffer: !1,
      type: rt
    }), this._edgesRT.texture.name = "SMAAPass.edges", this._weightsRT = new nt(1, 1, {
      depthBuffer: !1,
      type: rt
    }), this._weightsRT.texture.name = "SMAAPass.weights";
    const e = this, t = new Image();
    t.src = this._getAreaTexture(), t.onload = function() {
      e._areaTexture.needsUpdate = !0;
    }, this._areaTexture = new Pt(), this._areaTexture.name = "SMAAPass.area", this._areaTexture.image = t, this._areaTexture.minFilter = Lt, this._areaTexture.generateMipmaps = !1, this._areaTexture.flipY = !1;
    const s = new Image();
    s.src = this._getSearchTexture(), s.onload = function() {
      e._searchTexture.needsUpdate = !0;
    }, this._searchTexture = new Pt(), this._searchTexture.name = "SMAAPass.search", this._searchTexture.image = s, this._searchTexture.magFilter = Ce, this._searchTexture.minFilter = Ce, this._searchTexture.generateMipmaps = !1, this._searchTexture.flipY = !1, this._uniformsEdges = le.clone(bt.uniforms), this._materialEdges = new oe({
      defines: Object.assign({}, bt.defines),
      uniforms: this._uniformsEdges,
      vertexShader: bt.vertexShader,
      fragmentShader: bt.fragmentShader
    }), this._uniformsWeights = le.clone(At.uniforms), this._uniformsWeights.tDiffuse.value = this._edgesRT.texture, this._uniformsWeights.tArea.value = this._areaTexture, this._uniformsWeights.tSearch.value = this._searchTexture, this._materialWeights = new oe({
      defines: Object.assign({}, At.defines),
      uniforms: this._uniformsWeights,
      vertexShader: At.vertexShader,
      fragmentShader: At.fragmentShader
    }), this._uniformsBlend = le.clone(Vt.uniforms), this._uniformsBlend.tDiffuse.value = this._weightsRT.texture, this._materialBlend = new oe({
      uniforms: this._uniformsBlend,
      vertexShader: Vt.vertexShader,
      fragmentShader: Vt.fragmentShader
    }), this._fsQuad = new ot(null);
  }
  render(e, t, s) {
    this._uniformsEdges.tDiffuse.value = s.texture, this._fsQuad.material = this._materialEdges, e.setRenderTarget(this._edgesRT), this.clear && e.clear(), this._fsQuad.render(e), this._fsQuad.material = this._materialWeights, e.setRenderTarget(this._weightsRT), this.clear && e.clear(), this._fsQuad.render(e), this._uniformsBlend.tColor.value = s.texture, this._fsQuad.material = this._materialBlend, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(), this._fsQuad.render(e));
  }
  setSize(e, t) {
    this._edgesRT.setSize(e, t), this._weightsRT.setSize(e, t), this._materialEdges.uniforms.resolution.value.set(1 / e, 1 / t), this._materialWeights.uniforms.resolution.value.set(1 / e, 1 / t), this._materialBlend.uniforms.resolution.value.set(1 / e, 1 / t);
  }
  dispose() {
    this._edgesRT.dispose(), this._weightsRT.dispose(), this._areaTexture.dispose(), this._searchTexture.dispose(), this._materialEdges.dispose(), this._materialWeights.dispose(), this._materialBlend.dispose(), this._fsQuad.dispose();
  }
  _getAreaTexture() {
    return "data:image/png;base64,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";
  }
  _getSearchTexture() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=";
  }
}, ba = {
  performance: {
    scale: 80,
    pixelRatio: 1,
    antialias: "off",
    shadows: 1024,
    aoSamples: 0,
    aoResolution: 0.5,
    depthOfField: 0,
    transmission: 0.5,
    anisotropy: 4
  },
  original: {
    scale: 100,
    pixelRatio: 1.5,
    antialias: "off",
    shadows: 2048,
    aoSamples: 32,
    aoResolution: 1,
    depthOfField: 100,
    transmission: 0.5,
    anisotropy: 16
  },
  high: {
    scale: 125,
    pixelRatio: 2,
    antialias: "smaa",
    shadows: 4096,
    aoSamples: 32,
    aoResolution: 1,
    depthOfField: 100,
    transmission: 1,
    anisotropy: 16
  },
  ultra: {
    scale: 150,
    pixelRatio: 2,
    antialias: "smaa",
    shadows: 4096,
    aoSamples: 64,
    aoResolution: 1,
    depthOfField: 100,
    transmission: 1,
    anisotropy: 16
  }
}, Ue = (e, t, s) => t.includes(e) ? e : s, Es = (e, t, s, i, r) => typeof e == "number" && Number.isFinite(e) ? Math.min(s, Math.max(t, Math.round(e / i) * i)) : r;
function Xt(e, t = !0) {
  const s = ba.original, i = e && typeof e == "object" ? e : {}, r = t ? s : {
    ...s,
    pixelRatio: 1,
    aoSamples: 0,
    depthOfField: 0
  };
  return {
    scale: Es(i.scale, 50, 200, 5, r.scale),
    pixelRatio: Ue(i.pixelRatio, [
      1,
      1.5,
      2,
      3
    ], r.pixelRatio),
    antialias: Ue(i.antialias, ["off", "smaa"], r.antialias),
    shadows: Ue(i.shadows, [
      0,
      1024,
      2048,
      4096
    ], r.shadows),
    aoSamples: Ue(i.aoSamples, [
      0,
      16,
      32,
      64
    ], r.aoSamples),
    aoResolution: Ue(i.aoResolution, [
      0.5,
      0.75,
      1
    ], r.aoResolution),
    depthOfField: Es(i.depthOfField, 0, 150, 5, r.depthOfField),
    transmission: Ue(i.transmission, [
      0.25,
      0.5,
      0.75,
      1
    ], r.transmission),
    anisotropy: Ue(i.anisotropy, [
      1,
      2,
      4,
      8,
      16
    ], r.anisotropy)
  };
}
function Aa(e, t, s, i, r, n, a = 8294400) {
  const o = Math.min(r, e.pixelRatio) * i * e.scale / 100, l = Math.min(o, Math.sqrt(a / Math.max(1, t * s)), n / Math.max(1, t, s));
  return {
    ratio: l,
    width: Math.max(1, Math.floor(t * l)),
    height: Math.max(1, Math.floor(s * l)),
    limited: l < o - 1e-4
  };
}
function Sa(e, t, s) {
  const i = Math.min(s.anisotropy, t.capabilities.getMaxAnisotropy()), r = /* @__PURE__ */ new Set();
  e.traverse((n) => {
    if (n instanceof u.Mesh)
      for (const a of Array.isArray(n.material) ? n.material : [n.material]) for (const o of Object.values(a)) o instanceof u.Texture && !o.isRenderTargetTexture && r.add(o);
  });
  for (const n of r)
    n.anisotropy !== i && (n.anisotropy = i, n.needsUpdate = !0);
}
function Ca(e, t, s, i, r = !1) {
  const n = Math.max(1, s.clientWidth), a = Math.max(1, s.clientHeight), o = Aa(i, n, a, s.getBoundingClientRect().width / n, devicePixelRatio, e.capabilities.maxTextureSize, r ? 921600 : 8294400);
  return e.setPixelRatio(o.ratio), e.setSize(n, a), t.setPixelRatio(o.ratio), t.setSize(n, a), e.transmissionResolutionScale = i.transmission, s.dataset.renderQuality = JSON.stringify({
    ...o,
    antialias: i.antialias,
    transmission: i.transmission,
    anisotropy: Math.min(i.anisotropy, e.capabilities.getMaxAnisotropy()),
    superPerformance: r
  }), o;
}
var Ra = 0.12, Ea = 0.42, Ls = 0.025, La = 0.016, Da = `
float archiveTransmissionLod(float roughness, float ior, vec2 samplerSize) {
  float nativeLod = log2(samplerSize.x) * roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
  float strength = clamp((roughness - ${Ls}) / 0.39499999999999996, 0.0, 1.0);
  float panelPixels = length(vArchiveProjectedAxis * samplerSize);
  float clearLod = log2(samplerSize.x) * ${Ls} * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
  float boundedLod = log2(max(exp2(clearLod), panelPixels * ${La} * pow(strength, 1.15)));
  return mix(nativeLod, min(nativeLod, boundedLod), archiveQuality);
}`, Pa = `
float glassRevealAtHeight(float progress, float height) {
  float edge = 1.0 - 1.24 * clamp(progress, 0.0, 1.0);
  return smoothstep(edge, edge + ${2 * Ra}, clamp(height, 0.0, 1.0));
}`, Oa = {
  Optical_Glass_Body: {
    color: "#929894",
    roughness: 0.38,
    opacity: 0.27,
    order: 20
  },
  Optical_Glass_Roof: {
    color: "#929b94",
    roughness: 0.34,
    opacity: 0.42,
    order: 24
  },
  Optical_Glass_Edge: {
    color: "#edf0e7",
    roughness: 0.19,
    opacity: 0.9,
    order: 28
  },
  Optical_Bridge_Glass: {
    color: "#a0aca2",
    roughness: 0.32,
    opacity: 0.36,
    order: 26
  }
};
function Na(e, t) {
  const s = Oa[e];
  s && (t.color.set(s.color), t.roughness = s.roughness, t.metalness = 0.015, t.clearcoat = 0.42, t.clearcoatRoughness = 0.24, t.opacity = s.opacity, t.transmission = 0, t.transparent = !1, t.blending = u.CustomBlending, t.blendEquation = u.AddEquation, t.blendSrc = u.SrcAlphaFactor, t.blendDst = u.OneMinusSrcAlphaFactor, t.blendSrcAlpha = u.OneFactor, t.blendDstAlpha = u.OneMinusSrcAlphaFactor, t.depthWrite = !1, t.side = u.FrontSide, t.userData.opticalOrder = s.order);
}
function Ia(e) {
  return e.replace("#include <opaque_fragment>", `diffuseColor.a = min(0.86, opacity + 0.42 * pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0));
     #include <opaque_fragment>`);
}
var Ua = class {
  palettes = /* @__PURE__ */ new Map();
  disposeSources() {
    for (const e of this.palettes.values())
      e.high.dispose(), e.low?.dispose();
    this.palettes.clear();
  }
  register(e, t, s) {
    this.palettes.set(e, {
      high: t,
      low: s
    });
  }
  prepare(e) {
    for (const t of e.children) {
      const s = t, i = s.userData.surface, r = this.palettes.get(i);
      if (!r) {
        s.userData.themeAmount = Nt(s.material, "Printed_Canvas");
        continue;
      }
      const n = r.high.clone(), a = { value: 0 }, o = { value: 0 };
      s.material = n, n.userData.opticalOrder && (s.renderOrder = n.userData.opticalOrder), s.userData.appearance = a, s.userData.glassClarity = o, n.onBeforeCompile = (l) => {
        n.userData.opticalOrder && (l.fragmentShader = Ia(l.fragmentShader)), l.uniforms.archiveQuality = a, l.uniforms.archiveClarity = o, l.fragmentShader = `uniform float archiveQuality;
uniform float archiveClarity;
` + l.fragmentShader, i === "Frosted_Polymer" ? (l.vertexShader = `varying float vArchiveHeight;
varying vec2 vArchiveProjectedAxis;
` + l.vertexShader, l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
vArchiveHeight = position.y / 3.7;`), l.fragmentShader = `varying float vArchiveHeight;
varying vec2 vArchiveProjectedAxis;
` + Pa + l.fragmentShader, l.vertexShader = l.vertexShader.replace("#include <project_vertex>", `#include <project_vertex>
vArchiveProjectedAxis = 1.85 * vec2(projectionMatrix[0][0] * modelViewMatrix[1][0], projectionMatrix[1][1] * modelViewMatrix[1][1]) / max(0.0001, abs(mvPosition.z));`), l.fragmentShader = l.fragmentShader.replace("#include <transmission_pars_fragment>", Da + `
` + u.ShaderChunk.transmission_pars_fragment.replace("float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );", "float lod = archiveTransmissionLod(roughness, ior, transmissionSamplerSize);")), l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= mix(mix(vec3(0.40, 0.30, 0.20), vec3(1.0, 0.98, 0.94), smoothstep(0.1, 1.0, vArchiveHeight)), vec3(1.0), archiveQuality);`), l.fragmentShader = l.fragmentShader.replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
roughnessFactor = mix(mix(0.28, ${Ea}, archiveQuality), 0.025, glassRevealAtHeight(archiveClarity, vArchiveHeight));`)) : r.low || (l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
float coverage = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
if (archiveQuality <= coverage) discard;`));
      }, n.customProgramCacheKey = () => `archive-surface-clarity-${i}-${!!r.low}`, s.userData.subduedIndex = { value: 0 }, s.userData.themeAmount = Nt(n, i, !1, s.userData.subduedIndex);
    }
  }
  setClarity(e, t) {
    const s = u.MathUtils.clamp(t, 0, 1);
    e.traverse((i) => {
      if (!(i instanceof u.Mesh) || !i.userData.glassClarity || (i.userData.glassClarity.value = s, i.userData.surface !== "Frosted_Polymer")) return;
      const r = i.material, n = this.palettes.get("Frosted_Polymer"), a = i.userData.appearance.value, o = (l) => u.MathUtils.lerp(n.low?.[l] ?? n.high[l], n.high[l], a);
      r.thickness = u.MathUtils.lerp(o("thickness"), 0.018, s), r.transmission = u.MathUtils.lerp(o("transmission"), 0.985, s), r.attenuationDistance = u.MathUtils.lerp(o("attenuationDistance"), 8, s);
    });
  }
  setTheme(e, t, s = !1) {
    e.traverse((i) => {
      i.userData.themeAmount && (i.userData.themeAmount.value = t), i.userData.subduedIndex && (i.userData.subduedIndex.value = u.MathUtils.clamp(Number(s), 0, 1));
    });
  }
  apply(e, t) {
    for (const s of e.children) {
      const i = s, r = this.palettes.get(i.userData.surface);
      if (!r) {
        i.material.opacity = t;
        continue;
      }
      i.userData.appearance.value = t;
      const { high: n, low: a } = r;
      if (!a) continue;
      const o = i.material;
      o.color.copy(a.color).lerp(n.color, t), o.attenuationColor && a.attenuationColor && n.attenuationColor && (o.attenuationColor.copy(a.attenuationColor).lerp(n.attenuationColor, t), o.attenuationDistance = Number.isFinite(a.attenuationDistance) && Number.isFinite(n.attenuationDistance) ? u.MathUtils.lerp(a.attenuationDistance, n.attenuationDistance, t) : n.attenuationDistance);
      for (const l of [
        "roughness",
        "metalness",
        "transmission",
        "thickness",
        "clearcoat",
        "clearcoatRoughness"
      ]) o[l] = u.MathUtils.lerp(a[l] ?? 0, n[l] ?? 0, t);
      n.transmission > 0 && (o.transmission = Math.max(1e-6, o.transmission));
    }
  }
  dispose(e) {
    for (const t of e.children) {
      const s = t, i = s.material;
      s.userData.surface || i.map?.dispose(), i.dispose();
    }
  }
}, Fa = 34.12, Ha = 39.56, St = 1.5, Ba = (e) => Math.max(0, Math.min(1, e)), Fe = (e) => {
  const t = Ba(e);
  return t * t * t * (10 + t * (-15 + t * 6));
};
function _t(e, t) {
  if (t <= e[0][0]) return e[0][1];
  if (t >= e[e.length - 1][0]) return e[e.length - 1][1];
  const s = (c) => (e[c + 1][1] - e[c][1]) / (e[c + 1][0] - e[c][0]), i = (c) => {
    if (c === 0 || c === e.length - 1) return 0;
    const h = s(c - 1), d = s(c);
    if (h * d <= 0) return 0;
    const f = e[c][0] - e[c - 1][0], p = e[c + 1][0] - e[c][0], v = 2 * p + f, x = p + 2 * f;
    return (v + x) / (v / h + x / d);
  };
  let r = 0;
  for (; t > e[r + 1][0]; ) r++;
  const n = e[r + 1][0] - e[r][0], a = (t - e[r][0]) / n, o = a * a, l = o * a;
  return (2 * l - 3 * o + 1) * e[r][1] + (l - 2 * o + a) * n * i(r) + (-2 * l + 3 * o) * e[r + 1][1] + (l - o) * n * i(r + 1);
}
var ka = [
  [34.24, 0],
  [34.4, 0.19],
  [34.64, 0.57],
  [34.96, 0.79],
  [35.28, 0.92],
  [35.6, 0.973],
  [36.04, 1]
], za = [
  [38.84, 0],
  [38.92, 0.28],
  [39, 0.51],
  [39.16, 0.74],
  [39.32, 0.94],
  [39.56, 1]
], Ga = [
  [37.72, 1],
  [37.88, 0.72],
  [38, 0.38],
  [38.12, 0.22],
  [38.24, 0.14],
  [38.4, 0.075],
  [38.64, 0.024],
  [38.84, 0]
];
function Je(e) {
  const t = _t(ka, e), s = _t(Ga, e), i = [];
  return e >= 34.24 && e < 36.04 && t > 0 ? i.push([0, t * 0.5], [1 - t * 0.5, 1]) : e >= 36.04 && e < 38.84 && i.push([0.5 - s * 0.5, 0.5 + s * 0.5]), {
    time: e,
    intervals: i,
    markers: Fe((e - 34.2) / 0.12) * (1 - Fe((e - 37.76) / 0.56)),
    point: Fe((e - 38.58) / 0.2) * (1 - Fe((e - 39.08) / 0.22)),
    label: Fe((e - 34.32) / 0.36) * (1 - Fe((e - 37.68) / 0.24)),
    labelValue: Fe((e - 35.64) / 0.56),
    clarity: _t(za, e),
    phase: e < 34.24 ? "waiting" : e < 36.04 ? "joining" : e < 37.72 ? "connected" : e < 38.84 ? "retracting" : e < 39.56 ? "revealing" : "clear"
  };
}
var Wa = class {
  clarity = 0;
  active = !1;
  elapsed = null;
  frame = Je(-1);
  enter(e = !1) {
    this.active || (this.active = !0, this.elapsed = e ? 5.440000000000005 / St : null, e && this.finish());
  }
  leave() {
    this.active = !1, this.elapsed = null, this.frame = Je(-1);
  }
  select(e = 0) {
    this.leave(), this.clarity = e;
  }
  finish() {
    this.elapsed = 5.440000000000005 / St, this.clarity = 1, this.frame = Je(Ha);
  }
  update(e, t, s, i) {
    if (i !== void 0) {
      this.frame = Je(i), this.clarity = this.frame.clarity;
      return;
    }
    if (!this.active) {
      this.clarity = s ? 0 : this.clarity * Math.exp(-Math.max(0, e) * 9), this.clarity < 1e-4 && (this.clarity = 0), this.frame = Je(-1);
      return;
    }
    if (s) {
      this.finish();
      return;
    }
    this.elapsed === null && t ? this.elapsed = 0 : this.elapsed !== null && (this.elapsed = Math.min(this.elapsed + Math.max(0, e), 5.440000000000005 / St)), this.elapsed !== null && (this.frame = Je(Fa + this.elapsed * St), this.clarity = this.frame.clarity > this.clarity ? this.frame.clarity : this.frame.phase === "clear" ? 1 : this.clarity * Math.exp(-Math.max(0, e) * 9));
  }
}, si = '<path d="M156 75C127 48 103 15 70 15C37 15 15 39 15 70S38 128 70 128C103 128 127 96 176 52M155 75C182 99 208 128 240 128C273 128 295 105 295 73S273 15 240 15C221 15 207 23 192 38" fill="none" stroke="currentColor" stroke-width="26"/><path d="M44 70h50M69 45v50M219 70h44" fill="none" stroke="currentColor" stroke-width="15"/>', ja = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 145" color="#171713">${si}</svg>`, $e = {
  org: "MEWEB",
  sub: "个人作品站 · PERSONAL WORKS",
  badge: "M W / I S",
  corner: "INDEX",
  markTitle: "个人作品站",
  markSub: "PERSONAL WORKS"
}, fn = `<svg viewBox="0 0 310 185" aria-label="Rhine Lab" role="img">${si}<text x="165" y="174" text-anchor="middle" font-family="MiSans,sans-serif" font-size="16" font-weight="700" letter-spacing="22">RHINE·LAB</text></svg>`, Va = [
  2,
  28,
  55,
  81,
  103,
  129,
  154,
  166
], pn = `<h1>RHINE LAB</h1><div>SYNTHESIZE INFORMATION</div><p><span class="brand-analysis" role="img" aria-label="ANALYSIS">${[..."ANALYSIS"].map((e, t) => `<span aria-hidden="true" style="left:${Va[t]}px">${e}</span>`).join("")}</span> <b>OS</b></p>`;
function Xa(e, t, s, i, r) {
  const n = e / t, a = n < 1.05, o = s + (5.9 - s) * i, l = Math.max(6.3 / n, 3.7 * t / Math.max(100, 0.54 * t - 156));
  return {
    span: a ? Math.max(o, 8.4 / n + (l - 8.4 / n) * i) : Math.max(o, o * (16 / 9) / n),
    portrait: a,
    previewY: a ? 0.36 : 0.5,
    detailX: a ? 0.5 : r ? 0.27 : 550 / 1920,
    detailY: a ? 0.27 + 34 / t : r ? 0.49 : 560 / 1080
  };
}
var _a = class {
  active = !1;
  moved = !1;
  value = {
    lane: 0,
    row: 0
  };
  x = 0;
  y = 0;
  inverse = null;
  samples = [];
  lastMotion = -1 / 0;
  motionDirection = {
    x: 0,
    y: 0
  };
  pointer = {
    x: 0,
    y: 0
  };
  start(e, t, s, i = 0) {
    this.active = !1, this.moved = !1, this.x = e, this.y = t, this.value = {
      lane: 0,
      row: 0
    }, this.samples = [{
      value: this.value,
      time: i
    }], this.lastMotion = -1 / 0, this.motionDirection = {
      x: 0,
      y: 0
    }, this.pointer = {
      x: e,
      y: t
    };
    const { lane: r, row: n } = s, a = r.x * n.y - n.x * r.y, o = Math.hypot(r.x, r.y) * Math.hypot(n.x, n.y);
    this.inverse = Number.isFinite(o) && o > 0 && Math.abs(a) > o * 1e-3 ? {
      lane: {
        x: n.y / a,
        y: -n.x / a
      },
      row: {
        x: -r.y / a,
        y: r.x / a
      }
    } : null;
  }
  move(e, t, s) {
    const i = e - this.x, r = t - this.y, n = Math.hypot(i, r);
    if (n > 7 && (this.moved = !0), !this.inverse || !this.active && n < 10) return;
    this.active = !0;
    const a = {
      lane: i * this.inverse.lane.x + r * this.inverse.lane.y,
      row: i * this.inverse.row.x + r * this.inverse.row.y
    }, o = this.samples.at(-1);
    if (o) {
      const l = {
        x: e - this.pointer.x,
        y: t - this.pointer.y
      };
      Math.hypot(l.x, l.y) > 1e-9 && (this.lastMotion = s, l.x * this.motionDirection.x + l.y * this.motionDirection.y < 0 && (this.samples = [o]), this.motionDirection = l);
    }
    this.pointer = {
      x: e,
      y: t
    }, this.value = a, o?.time === s ? this.samples[this.samples.length - 1] = {
      value: a,
      time: s
    } : this.samples.push({
      value: a,
      time: s
    }), this.samples = this.samples.filter((l) => s - l.time <= 120).slice(-32);
  }
  releaseVelocity(e, t) {
    const s = this.samples[0], i = this.samples.at(-1);
    if (t || !s || !i || e - this.lastMotion > 80 || i.time - s.time < 8) return {
      lane: 0,
      row: 0
    };
    const r = 1e3 / (i.time - s.time);
    return {
      lane: (i.value.lane - s.value.lane) * r,
      row: (i.value.row - s.value.row) * r
    };
  }
}, Ds = class {
  value;
  velocity;
  phase;
  target;
  friction = 2.4;
  constructor(e, t) {
    this.value = e, this.velocity = t, this.phase = Math.abs(t) >= 0.75 ? "coasting" : "snapping", this.target = Math.round(e);
  }
  step(e, t = this.phase === "coasting") {
    if (t) {
      const s = Math.exp(-this.friction * e);
      this.value += this.velocity * (1 - s) / this.friction, this.velocity *= s, Math.abs(this.velocity) < 0.6 && (this.target = Math.round(this.value + this.velocity / this.friction), this.phase = "snapping");
    } else if (this.phase === "snapping") {
      const i = this.value - this.target, r = this.velocity + 10 * i, n = Math.exp(-10 * e);
      this.value = this.target + (i + r * e) * n, this.velocity = (this.velocity - 10 * r * e) * n, Math.abs(this.value - this.target) < 1e-4 && Math.abs(this.velocity) < 5e-3 && (this.value = this.target, this.velocity = 0, this.phase = "idle");
    }
  }
}, Ka = class {
  lane;
  row;
  constructor(e, t) {
    this.lane = new Ds(e.lane, t.lane), this.row = new Ds(e.row, t.row);
  }
  get phase() {
    return this.lane.phase === "coasting" || this.row.phase === "coasting" ? "coasting" : this.lane.phase === "idle" && this.row.phase === "idle" ? "idle" : "snapping";
  }
  get value() {
    return {
      lane: this.lane.value,
      row: this.row.value
    };
  }
  get velocity() {
    return {
      lane: this.lane.velocity,
      row: this.row.velocity
    };
  }
  step(e) {
    const t = this.phase === "coasting";
    this.lane.step(e, t), this.row.step(e, t);
  }
}, Ya = () => {
  const e = globalThis.__ARCHIVE_ASSET_BASE__;
  return typeof e != "string" || !e ? "/" : e.endsWith("/") ? e : `${e}/`;
}, Ct = (e) => Ya() + e.replace(/^\//, ""), q = (e) => (e = Math.max(0, Math.min(1, e)), e * e * e * (10 + e * (-15 + 6 * e))), It = (e, t) => Math.exp(-0.5 * (e / t) ** 2);
function ii(e, t, s) {
  const i = s - 22, r = e + (t - 2) * 0.65, n = q(i / 0.32), a = 3 + i * 19, o = 32 - (i - 2.3) * 24, l = (c) => 2.5 * It(c, 3.8) - 0.58 * It(c - 6, 3.5);
  return n * (l(r - a) * (1 - q((i - 2.15) / 0.65)) + l(r - o) * q((i - 2.17) / 0.32) * (1 - q((i - 3.5) / 0.85)));
}
function qa(e) {
  return 0.4 * q((e - 25.58) / 0.82) + 2.95 * q((e - 27.55) / 1.3);
}
function ts(e, t) {
  const s = t - 25.05 - Math.abs(e) * 0.065;
  return Math.max(-0.42, 2.15 - 0.17 * (Math.sqrt(e * e + 1) - 1)) * (q(s / 0.62) + 0.18 * (s > 0 ? Math.sin(s * 5.1) * Math.exp(-s * 1.3) : 0) * q(s / 0.16));
}
function Qa(e, t) {
  return t < 0 || t > 3.2 ? 0 : 0.8 * q(t / 0.2) * Math.exp(-t * 1.15) * Math.cos((e - t * 8) * 0.58) * It(e - t * 8, 3.4);
}
function Za(e, t) {
  return q(e / 2.5) * Math.max(0, Math.cos((e - t * 8) * 0.58));
}
function ri(e, t, s = 1) {
  return 1 + (0.25 + 0.75 * It(e - t, 0.55) - 1) * q(s);
}
function Ja(e, t, s) {
  return 0.075 * Math.sin(s * Math.PI * 2 / 8 + e * 0.3 - t * 0.45) + 0.027 * Math.sin(s * Math.PI * 2 / 13 - e * 0.17 + t * 0.3);
}
function $a(e, t, s, i = 12, r = 2) {
  const n = q((s - 24.95) / 0.45), a = q((s - 25.4) / 0.95), o = s + 0.3 * n * (1 - a);
  return ii(e, t, s) * (1 - n) + ts(e - i, o) * ri(t, r, (s - 25.4) / 0.95);
}
var Ps = 4.05;
function Os(e, t, s = !1) {
  const i = e * Math.exp(-t * (s ? 35 : 7));
  return Math.abs(i) <= 1e-3 ? 0 : i;
}
function et(e, t, s, i) {
  const r = e.value - t, n = e.velocity + s * r, a = Math.exp(-s * i);
  e.value = t + (r + n * i) * a, e.velocity = (e.velocity - s * n * i) * a;
}
var Ns = "row", Is = (() => {
  if (typeof window > "u") return Ns;
  const e = new URLSearchParams(window.location.search).get("wave");
  return e === "row" || e === "depth" || e === "vertical" ? e : Ns;
})(), en = (() => {
  if (typeof window > "u") return 1;
  const e = Number(new URLSearchParams(window.location.search).get("amp"));
  return Number.isFinite(e) && e > 0 ? e : 1;
})();
function tt(e, t, s, i) {
  if (Is === "row") return {
    u: e,
    v: t,
    dRow: 0.5,
    dLane: 0
  };
  const r = (t - 2) * s, n = (e - 15.5) * i, a = 0.5 / Math.SQRT2;
  return Is === "depth" ? {
    u: (r - n) / (Math.SQRT2 * i),
    v: (r + n) / (Math.SQRT2 * s),
    dRow: -a,
    dLane: a * i / s
  } : {
    u: (r + n) / (Math.SQRT2 * i),
    v: (r - n) / (Math.SQRT2 * s),
    dRow: a,
    dLane: a * i / s
  };
}
var Us = "y", Fs = 1, tn = (() => {
  if (typeof window > "u") return Us;
  const e = new URLSearchParams(window.location.search).get("axis");
  return e === "x" || e === "y" ? e : Us;
})(), sn = (() => {
  if (typeof window > "u") return Fs;
  const e = Number(new URLSearchParams(window.location.search).get("fx"));
  return Number.isFinite(e) && e > 0 ? e : Fs;
})(), rn = 90, Hs = (() => {
  const e = rn * Math.PI / 180;
  if (typeof window > "u") return e;
  const t = new URLSearchParams(window.location.search).get("roll");
  if (t === null) return e;
  const s = Number(t);
  return Number.isFinite(s) ? s * Math.PI / 180 : e;
})(), Bs = "z", ks = (() => {
  if (typeof window > "u") return Bs;
  const e = new URLSearchParams(window.location.search).get("pitch");
  return e === "x" || e === "z" || e === "-z" ? e : Bs;
})(), an = (() => {
  if (typeof window > "u") return 1;
  const e = new URLSearchParams(window.location.search).get("tilt");
  if (e === null) return 1;
  const t = Number(e);
  return Number.isFinite(t) && t > 0 ? t : 1;
})(), Kt = 370, Yt = 280, ai = (() => {
  if (typeof window > "u") return [Kt, Yt];
  const e = new URLSearchParams(window.location.search).get("pan");
  if (e === null) return [Kt, Yt];
  const [t, s] = e.split(",").map(Number);
  return [Number.isFinite(t) ? t : Kt, Number.isFinite(s) ? s : Yt];
})(), nn = ai[0], on = ai[1], zs = typeof window < "u" && new URLSearchParams(window.location.search).get("pan") !== null, qt = 180, Qt = 280, ni = (() => {
  if (typeof window > "u") return [qt, Qt];
  const e = new URLSearchParams(window.location.search).get("panportrait");
  if (e === null) return [qt, Qt];
  const [t, s] = e.split(",").map(Number);
  return [Number.isFinite(t) ? t : qt, Number.isFinite(s) ? s : Qt];
})(), ln = ni[0], cn = ni[1], U = (e) => (e = u.MathUtils.clamp(e, 0, 1), e * e * e * (e * (e * 6 - 15) + 10));
async function Gs(e, t, s, i) {
  let r = i;
  if (!r) {
    const a = await fetch(t);
    if (!a.ok) throw new Error(`模型取不到（HTTP ${a.status}）：${t}`);
    r = await a.arrayBuffer();
  }
  const n = r.byteLength >= 4 ? new DataView(r).getUint32(0, !0) : 0;
  if (n !== 1179937895) throw new Error(`${t} 不是 glTF 字节流（前 4 字节 0x${n.toString(16).padStart(8, "0")}，应为 0x46546c67）—— 多半是 CDN 没按 public/_headers 的 Content-Encoding: br 解压这份预压缩资产`);
  return e.parseAsync(r, s);
}
var hn = class {
  container;
  selectionPulse;
  deferSelectionPulse;
  lightingLook;
  inputEvents = new AbortController();
  presence = 1;
  presenceTarget = 1;
  setPresentationVisible(e, t = !1) {
    this.presenceTarget = Number(e), t && (this.presence = this.presenceTarget), e || this.cancelPointer();
  }
  get presentationHidden() {
    return this.presenceTarget === 0 && this.presence === 0;
  }
  presentationDrop(e) {
    const t = 0.15 * (1 + Math.tanh((e.row - this.selectedCell.row) * 0.1 + (e.lane - this.selectedCell.lane) * 0.25));
    return 35 * Math.pow(u.MathUtils.clamp((1 - this.presence - t) / 0.7, 0, 1), 2);
  }
  revealImmediately() {
    this.reveal = this.targetReveal;
  }
  dispose() {
    this.inputEvents.abort(), this.cancelPointer(), ms(this.scene), this.appearance.disposeSources(), this.model.clear(), this.outgoing = [], this.instances = [], this.assemblyTemplate?.then(ms).catch(() => {
    }), this.assemblyTemplate = void 0, this.light.shadow.map?.dispose();
    for (const e of this.composer.passes) e.dispose();
    this.composer.dispose(), this.renderer.dispose(), this.renderer.forceContextLoss(), this.renderer.domElement.remove(), this.loaded = !1;
  }
  uiOnlyParallax = !1;
  theme = new Cr();
  subduedIndex = { value: 0 };
  selectedIndexOnly = !1;
  superPerformance = !1;
  setSuperPerformance(e) {
    if (this.superPerformance !== e) {
      this.superPerformance = e;
      for (const t of this.instances) {
        const s = t.userData.fullMaterial ??= t.material;
        if (e && !t.userData.fastMaterial) {
          const i = s.clone();
          i.onBeforeCompile = s.onBeforeCompile, i.customProgramCacheKey = s.customProgramCacheKey.bind(s), i.transmission = 0, i.clearcoat = 0, i.roughness = Math.max(0.45, s.roughness), t.userData.fastMaterial = i;
        }
        t.material = e ? t.userData.fastMaterial : s, t.visible = !e || s.name.replace(/\.\d+$/, "") !== "Titanium_Fasteners";
      }
      this.resize();
    }
  }
  setSelectedIndexAccent(e) {
    this.selectedIndexOnly = e;
  }
  themeAttribute;
  get themeAmount() {
    return this.theme.background(performance.now() / 1e3);
  }
  setTheme(e, t = !1) {
    this.theme.set(e, performance.now() / 1e3, this.selectedCell, t);
  }
  playfield = {
    enabled: !1,
    bands: ws(),
    strength: 1,
    flatten: 0,
    target: null,
    breathing: !0
  };
  flatMix = 0;
  rhythm = new Nr();
  rhythmStyle = "legacy";
  setRhythmStyle(e) {
    this.rhythmStyle = e;
  }
  relayLifts = /* @__PURE__ */ new Map();
  relayPoints = /* @__PURE__ */ new Map();
  relayActive = !1;
  onRelayPick;
  setPlayfield(e, t, s, i, r, n = !0) {
    this.playfield = {
      enabled: e,
      bands: t,
      strength: s,
      flatten: i,
      target: r,
      breathing: n
    };
  }
  setRelayActive(e) {
    e !== this.relayActive && (this.cancelPointer(), this.setHover(null), this.relayActive = e, this.pointer.set(0, 0));
  }
  relayPulse(e) {
    const t = this.relayPoints.get(e)?.cell;
    t && !this.reduced && this.emitPulse(t);
  }
  projectRelay(e) {
    const t = this.relayPoints.get(e);
    if (!t) return null;
    const s = t.point.clone().project(this.camera), i = this.renderer.domElement.getBoundingClientRect();
    return {
      x: i.left + (s.x + 1) * i.width / 2,
      y: i.top + (1 - s.y) * i.height / 2
    };
  }
  relayCandidates() {
    const e = this.renderer.domElement.getBoundingClientRect();
    return this.scene.updateMatrixWorld(!0), [...this.relayPoints.keys()].filter((t) => {
      const s = this.projectRelay(t), i = (s.x - e.left) / e.width, r = (s.y - e.top) / e.height;
      if (i < 0.18 || i > 0.82 || r < 0.32 || r > 0.76) return !1;
      const n = this.pickCell(s.x, s.y);
      return n && ve(n) === t;
    });
  }
  renderer;
  scene = new u.Scene();
  camera = new u.PerspectiveCamera(34, 16 / 9, 5, 300);
  composer;
  ao;
  bokeh;
  instances = [];
  matrixUpdates;
  themeUpdates;
  renderState = new wr();
  renderedFrames = 0;
  reusedFrames = 0;
  visibility = new xr();
  instanceCapacity = 288;
  drawnCells = [];
  extraCoverage = !1;
  setArchiveCoverage(e) {
    this.extraCoverage = e;
  }
  model = new u.Group();
  appearance = new Ua();
  decryption = new Wa();
  cursor = new u.Vector2();
  raycaster = new u.Raycaster();
  dummy = new u.Object3D();
  cells = [];
  selectedCell = {
    lane: 2,
    row: 12
  };
  looping = !1;
  coordinateOrigin = {
    lane: 0,
    row: 0
  };
  lift = {
    value: 0,
    velocity: 0
  };
  rail = {
    value: 0,
    velocity: 0
  };
  shoulder = {
    value: 12,
    velocity: 0
  };
  laneFocus = {
    value: 2,
    velocity: 0
  };
  columnCamera = {
    value: 0,
    velocity: 0
  };
  returnY = null;
  canInspect = !1;
  clearance = 0;
  pulseGain = 1;
  idleGain = 0;
  lastInteraction = 0;
  scanTime = 29.1;
  scanBlend = 0;
  cameraAim = new u.Vector3();
  outgoing = [];
  pulses = [];
  pendingPulse = null;
  selectedSlot = 76;
  detail = 0;
  targetDetail = 0;
  reveal = 0;
  targetReveal = 0;
  last = 0;
  pointer = new u.Vector2();
  dragging = !1;
  hoverCell = null;
  hoverLifts = /* @__PURE__ */ new Map();
  archiveDrag = new _a();
  dragTrack = null;
  navigatingDrag = !1;
  archiveMomentum = null;
  holdingArchive = !1;
  cancelPointer = () => {
  };
  rotation = 0;
  targetRotation = 0;
  light;
  clock = 0;
  loaded = !1;
  labelCanvas = document.createElement("canvas");
  labelTexture;
  labelMark = new Image();
  reduced = !1;
  quality = Xt(void 0);
  appliedQuality = "";
  smaa = new Ta();
  aoKernelSize = 32;
  displayHeight = 0;
  layoutKind = "";
  onSelect;
  onHover;
  onNavigate;
  constructor(e, t = Qa, s = !1, i = "baseline") {
    this.container = e, this.selectionPulse = t, this.deferSelectionPulse = s, this.lightingLook = i, this.renderer = new u.WebGLRenderer({
      antialias: !0,
      alpha: !1,
      powerPreference: "high-performance"
    }), this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5) * Math.min(innerWidth / 1920, innerHeight / 1080)), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.info.autoReset = !1, this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.autoUpdate = !1, this.renderer.shadowMap.type = u.PCFSoftShadowMap, this.renderer.toneMapping = u.ACESFilmicToneMapping, this.renderer.toneMappingExposure = 1.05, this.renderer.domElement.setAttribute("aria-label", "三维研究档案阵列，点击选择，左右拖动切列，上下拖动或滚轮切换列内档案"), e.appendChild(this.renderer.domElement), this.renderer.domElement.addEventListener("webglcontextrestored", () => this.renderState.invalidate(), { signal: this.inputEvents.signal }), this.scene.background = new u.Color("#eae5e1"), this.scene.matrixWorldAutoUpdate = !1, this.scene.fog = new u.Fog("#eae5e1", 22, 47), this.light = ga(this.renderer, this.scene, i), this.light.castShadow = !0, Object.assign(this.light.shadow.camera, {
      left: -16,
      right: 16,
      top: 15,
      bottom: -15,
      near: 0.1,
      far: 45
    }), this.light.shadow.mapSize.set(2048, 2048), this.light.shadow.normalBias = i === "refined" ? 0.018 : 0.035, this.light.shadow.bias = i === "refined" ? -12e-5 : -3e-4, this.light.shadow.radius = 4;
    const r = new u.Mesh(new u.PlaneGeometry(200, 200), new u.MeshStandardMaterial({
      color: "#d8c9b9",
      roughness: 0.95
    }));
    r.rotation.x = -Math.PI / 2, r.name = "archive-floor", r.position.y = -4.63, r.receiveShadow = !0, this.scene.add(r), this.camera.position.set(-62.26, 35.98, 43.28), this.cameraAim.set(-0.5, 1.1, 0.4), this.camera.fov = 6.15, this.camera.lookAt(this.cameraAim), this.composer = new wa(this.renderer), this.composer.addPass(new Ma(this.scene, this.camera)), this.ao = new ps(this.scene, this.camera, e.clientWidth, e.clientHeight), this.ao.kernelRadius = i === "refined" ? 0.44 : 0.38, this.ao.minDistance = 1e-3, this.ao.maxDistance = 0.09, this.composer.addPass(this.ao), this.bokeh = new Sr(this.scene, this.camera, {
      focus: 25,
      aperture: 18e-4,
      maxblur: 0.011
    }, () => this.ao), this.composer.addPass(this.bokeh), this.smaa.enabled = !1, this.composer.addPass(this.smaa), this.composer.addPass(new ya()), this.bindPointer();
  }
  async load(e = Ct("assets/archive-cassette.glb.br"), t) {
    this.labelMark.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(ja)}`, await this.labelMark.decode();
    const s = await Gs(new ys(), e, Ct("assets/"), t);
    s.scene.updateMatrixWorld(!0);
    const i = [];
    s.scene.traverse((a) => {
      a instanceof u.Mesh && i.push(a);
    });
    const r = 288;
    for (let a = 0; a < r; a++) {
      const o = zt(a);
      this.cells.push(o);
    }
    for (const a of i) {
      const o = a.geometry.clone().applyMatrix4(a.matrixWorld).scale(1, 1, 1), l = a.material, c = l.name.replace(/\.\d+$/, ""), h = l.clone();
      if (h.envMapIntensity = 0.6, c === "Frosted_Polymer" && (h.color.set("#fffdfa"), h.transmission = 0.9, h.thickness = 0.12, h.roughness = 0.21, h.ior = 1.46, h.attenuationColor = new u.Color("#eee6df"), h.attenuationDistance = 2), c === "Internal_Ceramic" && (h.color.set(this.lightingLook === "refined" ? "#c4baae" : "#c7beb6"), h.roughness = 0.6), c === "Printed_Label" && h.color.set("#eae5dc"), c === "Ivory_Edges" && (h.color.set("#f0e7df"), h.roughness = 0.31, h.transmission = 0.65, h.thickness = 0.04), c === "Optical_Diffuser" && (h.color.set("#e2dad4"), h.transmission = 0, h.roughness = 0.7), c === "Subsurface_Optics" && (h.color.set(this.lightingLook === "refined" ? "#b9a796" : "#b9aba1"), h.roughness = 0.48, h.metalness = 0.05), c === "Optical_Edges" && (h.transmission = 0, h.color.set(this.lightingLook === "refined" ? "#d8c7b5" : "#d4c7be"), h.roughness = 0.26, h.metalness = 0.08), Na(c, h), c === "Carbon_Ink") continue;
      const d = new u.Mesh(o, h);
      if (d.userData.surface = c, d.castShadow = c === "Optical_Diffuser", d.receiveShadow = !0, this.model.add(d), ![
        "Frosted_Polymer",
        "Ivory_Edges",
        "Titanium_Fasteners",
        "Index_Inlay",
        "Optical_Diffuser"
      ].includes(c)) {
        this.appearance.register(c, h);
        continue;
      }
      const f = h.clone();
      c === "Frosted_Polymer" && (f.transmission = 0.78, this.lightingLook === "refined" && (f.thickness = 0.28, f.attenuationColor.set("#d4c7b4"), f.attenuationDistance = 1.2), f.transparent = !1, f.color.set("#fff7ed"), f.onBeforeCompile = (v) => {
        v.vertexShader = `varying float vPanelHeight;
` + v.vertexShader, v.vertexShader = v.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
vPanelHeight = position.y / 3.7;`), v.fragmentShader = `varying float vPanelHeight;
` + v.fragmentShader, v.fragmentShader = v.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= mix(vec3(0.40, 0.30, 0.20), vec3(1.0, 0.98, 0.94), smoothstep(0.1, 1.0, vPanelHeight));`);
      }, f.roughness = 0.28, f.clearcoat = 0.3, f.clearcoatRoughness = 0.25), c === "Optical_Diffuser" && f.color.set("#806447"), c === "Ivory_Edges" && (f.transmission = 0, f.color.set(this.lightingLook === "refined" ? "#dcc9b0" : "#fff5e9"), f.roughness = 0.38), c === "Index_Inlay" && (f.color.set("#e4d6c5"), f.metalness = 0.05), this.appearance.register(c, h, f), this.themeAttribute ??= new u.InstancedBufferAttribute(new Float32Array(r), 1).setUsage(u.DynamicDrawUsage), o.setAttribute("archiveTheme", this.themeAttribute), Nt(f, c, !0, this.subduedIndex);
      const p = new u.InstancedMesh(o, f, r);
      p.instanceMatrix = this.instances[0]?.instanceMatrix ?? p.instanceMatrix.setUsage(u.DynamicDrawUsage), p.castShadow = c === "Optical_Diffuser", p.receiveShadow = !0, p.frustumCulled = !1, this.instances.push(p), this.scene.add(p);
    }
    this.labelCanvas.width = 1024, this.labelCanvas.height = 440, this.labelTexture = new u.CanvasTexture(this.labelCanvas), this.labelTexture.colorSpace = u.SRGBColorSpace, this.labelTexture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const n = new u.Mesh(new u.PlaneGeometry(0.99, 0.46), new u.MeshBasicMaterial({
      map: this.labelTexture,
      toneMapped: !1,
      transparent: !0,
      depthWrite: !1
    }));
    n.position.set(-1.36, 3.04, 0.255), this.model.add(n), this.appearance.prepare(this.model), this.appearance.apply(this.model, 0), this.drawLabel(0), this.scene.add(this.model), this.model.position.copy(this.cellPosition(zt(this.selectedSlot))), this.loaded = !0;
  }
  assemblyTemplate;
  async createAssemblyModel() {
    this.assemblyTemplate ??= Gs(new ys(), Ct("assets/archive-assembly.glb.br"), Ct("assets/")).then((a) => (a.scene.updateMatrixWorld(!0), a.scene)).catch((a) => {
      throw this.assemblyTemplate = void 0, a;
    });
    const e = await this.assemblyTemplate, t = new u.Group(), s = [];
    e.traverse((a) => {
      if (!(a instanceof u.Mesh)) return;
      const o = a.material.name.replace(/\.\d+$/, ""), l = new u.Mesh(a.geometry.clone().applyMatrix4(a.matrixWorld), a.material);
      l.userData.surface = o, l.userData.assemblyPart = a.userData.assemblyPart, t.add(l), s.push(l);
    }), this.appearance.prepare(t), this.appearance.apply(t, 1), this.appearance.setClarity(t, this.decryption.clarity), this.appearance.setTheme(t, this.themeAmount);
    const i = document.createElement("canvas");
    i.width = this.labelCanvas.width, i.height = this.labelCanvas.height, i.getContext("2d").drawImage(this.labelCanvas, 0, 0);
    const r = new u.CanvasTexture(i);
    r.colorSpace = u.SRGBColorSpace, r.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    const n = new u.Mesh(new u.PlaneGeometry(0.99, 0.46), new u.MeshBasicMaterial({
      map: r,
      toneMapped: !1,
      transparent: !0,
      depthWrite: !1
    }));
    return n.position.set(-1.36, 3.04, 0.255), n.userData.assemblyPart = "cover", n.userData.themeAmount = Nt(n.material, "Printed_Canvas"), n.userData.themeAmount.value = this.themeAmount, t.add(n), s.push(n), {
      model: t,
      setClarity: (a) => this.appearance.setClarity(t, a),
      dispose: () => {
        for (const a of s)
          a.geometry.dispose(), a.material.dispose();
        r.dispose();
      }
    };
  }
  setMode(e) {
    if (this.cancelPointer(), this.setHover(null), e === "detail" ? this.decryption.enter(this.scanBlend > 0.9 && this.decryption.clarity > 0.999) : this.decryption.leave(), e === "hidden" && this.decryption.select(), e !== "archive" && (this.pendingPulse = null), this.looping = e !== "hidden", !this.looping) {
      const t = ne(pr(this.selectedSlot));
      this.selectedCell = {
        lane: t.lane,
        row: t.row
      }, this.coordinateOrigin = {
        lane: 0,
        row: 0
      };
      for (const s of this.outgoing)
        this.scene.remove(s.group), this.appearance.dispose(s.group);
      this.outgoing = [];
    }
    this.lastInteraction = this.clock, this.targetReveal = e === "hidden" ? 0 : 1, this.targetDetail = e === "detail" ? 1 : 0, this.dragging = !1, e !== "detail" ? (this.targetRotation = 0, this.rotation !== 0 && (this.returnY = this.model.position.y)) : this.returnY = null;
  }
  setReduced(e) {
    e && !this.reduced && this.cancelPointer(), this.reduced = e;
  }
  setQuality(e) {
    const t = typeof e == "boolean" ? Xt(void 0, e) : Xt(e), s = JSON.stringify(t);
    if (this.appliedQuality === s) return;
    if (this.appliedQuality = s, this.quality = t, t.aoSamples && t.aoSamples !== this.aoKernelSize) {
      const r = this.ao;
      this.ao = new ps(this.scene, this.camera, 1, 1, t.aoSamples), this.ao.kernelRadius = r.kernelRadius, this.ao.minDistance = r.minDistance, this.ao.maxDistance = r.maxDistance;
      const n = this.composer.passes.indexOf(r);
      this.composer.removePass(r), this.composer.insertPass(this.ao, n), r.dispose(), this.aoKernelSize = t.aoSamples;
    }
    this.ao.enabled = t.aoSamples > 0, this.bokeh.enabled = t.depthOfField > 0, this.smaa.enabled = t.antialias === "smaa", this.renderer.shadowMap.enabled = t.shadows > 0;
    const i = Math.min(t.shadows || 1024, this.renderer.capabilities.maxTextureSize);
    this.light.shadow.mapSize.x !== i && (this.light.shadow.map?.dispose(), this.light.shadow.map = null, this.light.shadow.mapSize.set(i, i)), this.light.shadow.needsUpdate = !0, Sa(this.scene, this.renderer, t), this.resize();
  }
  cellPosition(e) {
    return new u.Vector3((e.lane - 2) * G, -4.6, (e.row - 15.5) * W);
  }
  rebaseCoordinates() {
    const e = {
      lane: Math.abs(this.selectedCell.lane) > 2048 ? Math.round((this.selectedCell.lane - 2) / 5) * 5 : 0,
      row: Math.abs(this.selectedCell.row) > 2048 ? Math.floor((this.selectedCell.row - 12) / 8) * 8 : 0
    };
    if (!(!e.lane && !e.row)) {
      this.setHover(null), this.hoverLifts.clear(), this.selectedCell.lane -= e.lane, this.selectedCell.row -= e.row, this.coordinateOrigin.lane += e.lane, this.coordinateOrigin.row += e.row, this.laneFocus.value -= e.lane, this.shoulder.value -= e.row, this.columnCamera.value -= e.lane * G, this.rail.value += e.row * W;
      for (const t of this.outgoing)
        t.cell.lane -= e.lane, t.cell.row -= e.row;
      for (const t of this.pulses)
        t.lane -= e.lane, t.row -= e.row;
      this.pendingPulse && (this.pendingPulse.lane -= e.lane, this.pendingPulse.row -= e.row);
    }
  }
  select(e, t) {
    this.navigatingDrag || this.cancelPointer(), this.setHover(null), this.lastInteraction = this.clock;
    const s = ne(e).slot, i = ne(e), r = this.looping ? gr(e, this.selectedCell, t) : {
      lane: i.lane,
      row: i.row
    }, n = !ut(r, this.selectedCell);
    if (this.looping && n && this.loaded && this.lift.value > 1e-4) {
      const o = this.model.clone(!0), l = o.children[o.children.length - 1], c = document.createElement("canvas");
      c.width = 1024, c.height = 440, c.getContext("2d").drawImage(this.labelCanvas, 0, 0);
      const h = new u.CanvasTexture(c);
      h.colorSpace = u.SRGBColorSpace, l.material = new u.MeshBasicMaterial({
        map: h,
        toneMapped: !1,
        transparent: !0,
        depthWrite: !1
      }), this.appearance.prepare(o), this.appearance.apply(o, U(this.lift.value / 0.4)), this.appearance.setClarity(o, this.decryption.clarity), this.scene.add(o), this.outgoing.push({
        group: o,
        slot: this.selectedSlot,
        cell: { ...this.selectedCell },
        lift: { ...this.lift },
        returnY: o.rotation.y !== 0 ? o.position.y : null,
        clarity: this.decryption.clarity
      }), this.lift.value = 0, this.lift.velocity = 0;
    }
    this.selectedSlot = s, this.selectedCell = r, n && (this.decryption.select(), this.rotation = 0, this.returnY = null);
    const a = this.outgoing.findIndex((o) => ut(o.cell, r));
    if (a >= 0) {
      const o = this.outgoing[a];
      this.lift = { ...o.lift }, this.rotation = o.group.rotation.y, this.returnY = o.returnY, this.decryption.select(o.clarity), this.scene.remove(o.group), this.appearance.dispose(o.group), this.outgoing.splice(a, 1);
    }
    this.deferSelectionPulse ? this.pendingPulse = this.looping ? { ...r } : null : this.emitPulse(r), this.targetRotation = 0, this.drawLabel(e);
  }
  emitPulse(e) {
    this.pulses.push({
      ...e,
      time: this.clock
    }), this.pulses = this.pulses.slice(-6);
  }
  drawLabel(e) {
    if (!this.labelTexture) return;
    const t = this.labelCanvas.getContext("2d");
    t.fillStyle = "#e6e2d9", t.fillRect(0, 0, 1024, 440), t.fillStyle = "#171713", t.fillRect(12, 12, 1e3, 6), t.fillRect(12, 419, 1e3, 3), t.font = "bold 81px MiSans", t.fillText($e.org, 22, 116), t.font = "32px MiSans", t.fillStyle = "#878476", t.fillText($e.sub, 25, 174), t.fillStyle = "#171713", t.font = "bold 130px MiSans", t.fillText("NO." + String(e + 1).padStart(3, "0"), 22, 360), t.fillRect(782, 32, 221, 39), t.fillStyle = "#eee9de", t.font = "24px MiSans", t.fillText($e.badge, 809, 61), t.fillStyle = "#171713", t.font = "bold 64px MiSans", t.fillText($e.corner, 830, 143), t.font = "bold 40px MiSans", t.fillText($e.markTitle, 790, 292), t.fillStyle = "#878476", t.font = "24px MiSans", t.fillText($e.markSub, 790, 330), this.labelTexture.needsUpdate = !0;
  }
  ensureInstanceCapacity(e) {
    if (e <= this.instanceCapacity) return;
    const t = Math.max(e, this.instanceCapacity * 2), s = new u.InstancedBufferAttribute(new Float32Array(t * 16), 16).setUsage(u.DynamicDrawUsage);
    s.array.set(this.instances[0].instanceMatrix.array);
    for (const r of this.instances)
      r.dispose(), r.instanceMatrix = s;
    const i = this.themeAttribute;
    this.themeAttribute = new u.InstancedBufferAttribute(new Float32Array(t), 1).setUsage(u.DynamicDrawUsage), i && this.themeAttribute.array.set(i.array);
    for (const r of this.instances) r.geometry.setAttribute("archiveTheme", this.themeAttribute);
    this.matrixUpdates = new vt(s), this.themeUpdates = new vt(this.themeAttribute), this.instanceCapacity = t;
  }
  resize() {
    this.renderState.invalidate();
    const e = this.container.clientWidth, t = this.container.clientHeight, s = this.container.closest("[data-layout]")?.dataset.layout ?? "", i = this.container.getBoundingClientRect().height;
    this.layoutKind === "cinematic" && s !== "cinematic" && this.displayHeight > 0 && (this.camera.fov = u.MathUtils.radToDeg(2 * Math.atan(Math.tan(u.MathUtils.degToRad(this.camera.fov / 2)) * i / this.displayHeight))), this.displayHeight = i, this.layoutKind = s;
    const r = Ca(this.renderer, this.composer, this.container, this.quality, this.superPerformance);
    this.ao.setSize(Math.max(1, Math.floor(r.width * this.quality.aoResolution)), Math.max(1, Math.floor(r.height * this.quality.aoResolution))), this.ao.setSharing(this.ao.enabled && this.bokeh.enabled && this.quality.aoResolution === 1 && !this.superPerformance), this.container.dataset.renderQuality = JSON.stringify({
      ...JSON.parse(this.container.dataset.renderQuality),
      aoSamples: this.ao.enabled ? this.aoKernelSize : 0,
      aoWidth: this.ao.width,
      aoHeight: this.ao.height,
      shadows: this.renderer.shadowMap.enabled ? this.light.shadow.mapSize.x : 0,
      depthOfField: this.bokeh.enabled ? this.quality.depthOfField : 0
    }), this.camera.aspect = e / t, this.camera.updateProjectionMatrix();
  }
  canBrowse() {
    return this.presenceTarget === 1 && this.looping && !this.targetDetail && this.detail < 0.2 && this.reveal >= 0.8 && this.loaded && !this.container.closest("[inert]");
  }
  setHover(e) {
    !e && !this.hoverCell || e && this.hoverCell && ut(e, this.hoverCell) || (this.hoverCell = e ? { ...e } : null, this.onHover?.(e ? kt(e) : null));
  }
  pickCell(e, t) {
    const s = this.renderer.domElement.getBoundingClientRect();
    this.cursor.set((e - s.left) / s.width * 2 - 1, -(t - s.top) / s.height * 2 + 1), this.raycaster.setFromCamera(this.cursor, this.camera);
    const i = this.raycaster.intersectObjects([
      this.instances[0],
      this.model,
      ...this.outgoing.map((n) => n.group)
    ], !0)[0];
    if (!i) return null;
    if (i.instanceId !== void 0) return { ...this.drawnCells[i.instanceId] };
    let r = i.object;
    for (; r; ) {
      const n = this.outgoing.find((a) => a.group === r);
      if (n) return { ...n.cell };
      r = r.parent;
    }
    return { ...this.selectedCell };
  }
  trackCoordinate(e, t) {
    return e === "lane" ? t / G + 2 : (-t - 2.17) / W + 15.5;
  }
  dragProjection() {
    this.model.updateMatrixWorld(!0), this.camera.updateMatrixWorld(!0);
    const e = this.model.localToWorld(new u.Vector3(0, 1.85, 0)), t = this.renderer.domElement.getBoundingClientRect(), s = (i) => {
      const r = e.clone().addScaledVector(i, -0.5).project(this.camera), n = e.clone().addScaledVector(i, 0.5).project(this.camera);
      return {
        x: (n.x - r.x) * t.width / 2,
        y: -(n.y - r.y) * t.height / 2
      };
    };
    return {
      lane: s(new u.Vector3(-G, 0, 0)),
      row: s(new u.Vector3(0, 0, -W))
    };
  }
  trackPosition(e, t) {
    return e === "lane" ? (t - 2) * G : -2.17 - (t - 15.5) * W;
  }
  navigatePlane(e) {
    const t = {
      lane: Math.round(e.lane),
      row: Math.round(e.row)
    };
    if (ut(t, this.selectedCell)) return;
    const s = { ...this.selectedCell }, i = Math.min(64, Math.max(Math.abs(t.lane - s.lane), Math.abs(t.row - s.row)));
    this.navigatingDrag = !0;
    try {
      for (let r = 1; r <= i; r++) {
        const n = {
          lane: Math.round(s.lane + (t.lane - s.lane) * r / i),
          row: Math.round(s.row + (t.row - s.row) * r / i)
        };
        ut(n, this.selectedCell) || this.onSelect?.(kt(n), n);
      }
    } finally {
      this.navigatingDrag = !1;
    }
  }
  stopMomentum() {
    this.archiveMomentum && (this.columnCamera.velocity = 0, this.rail.velocity = 0), this.archiveMomentum = null;
  }
  bindPointer() {
    const e = this.renderer.domElement;
    let t = null, s = 0, i = 0, r = 0, n = !1, a = !1, o = !1, l = 0, c = 0;
    const h = /* @__PURE__ */ new Set(), d = (p) => {
      if (p.pointerType !== "mouse" || !this.canBrowse() || this.archiveMomentum) return;
      const v = e.getBoundingClientRect();
      this.pointer.set((p.clientX - v.left) / v.width - 0.5, (p.clientY - v.top) / v.height - 0.5);
      const x = this.pickCell(p.clientX, p.clientY);
      this.setHover(x), e.style.cursor = x ? "pointer" : "grab";
    }, f = () => {
      const p = t;
      t = null, this.dragging = !1, this.dragTrack = null, this.holdingArchive = !1, a = !1, this.setHover(null), e.style.cursor = this.canBrowse() ? "grab" : "default", p !== null && e.hasPointerCapture(p) && e.releasePointerCapture(p);
    };
    this.cancelPointer = () => {
      o = !0, this.stopMomentum(), h.clear(), l = 0, f();
    }, e.addEventListener("pointerdown", (p) => {
      if (!(p.pointerType === "mouse" && p.button !== 0) && !(!this.canBrowse() && !this.canInspect)) {
        if (h.add(p.pointerId), h.size > 1) {
          o = !0, f();
          return;
        }
        t = p.pointerId, o = !1, n = this.archiveMomentum !== null, i = s = p.clientX, r = p.clientY, a = this.canBrowse(), this.stopMomentum(), a && (this.columnCamera.velocity = 0, this.rail.velocity = 0), this.holdingArchive = a && !1, this.dragging = !a && this.canInspect && !1, this.columnCamera.value, this.rail.value, this.setHover(null), e.setPointerCapture(p.pointerId), this.relayActive && (this.holdingArchive = !1, this.dragging = !1);
      }
    }, { signal: this.inputEvents.signal }), e.addEventListener("pointermove", (p) => {
      if (this.relayActive) {
        p.pointerId === t && (n ||= Math.hypot(p.clientX - i, p.clientY - r) > 7);
        return;
      }
      if (!(t !== null && p.pointerId !== t)) {
        if (t === null) {
          d(p);
          return;
        }
        if (!o) {
          if (n ||= Math.hypot(p.clientX - i, p.clientY - r) > 7, a) {
            if (!this.canBrowse()) {
              this.cancelPointer();
              return;
            }
            return;
          }
          this.dragging && this.canInspect && (this.targetRotation = u.MathUtils.clamp(this.targetRotation + (p.clientX - s) * 4e-3, -0.8, 0.8), s = p.clientX);
        }
      }
    }, { signal: this.inputEvents.signal }), e.addEventListener("pointerup", (p) => {
      if (h.delete(p.pointerId), p.pointerId === t) {
        if (this.relayActive) {
          if (!o && !n) {
            const v = this.pickCell(p.clientX, p.clientY);
            this.onRelayPick?.(v ? ve(v) : null);
          }
          f();
          return;
        }
        if (!o && a && this.canBrowse()) {
          if (this.archiveDrag.active)
            this.reduced || (this.archiveMomentum = {
              time: performance.now() / 1e3,
              motion: new Ka({
                lane: this.trackCoordinate("lane", this.columnCamera.value),
                row: this.trackCoordinate("row", this.rail.value)
              }, this.archiveDrag.releaseVelocity(p.timeStamp, !1))
            });
          else if (!n) {
            const v = this.pickCell(p.clientX, p.clientY);
            v && this.onSelect?.(kt(v), v);
          }
        }
        f();
      }
    }, { signal: this.inputEvents.signal }), e.addEventListener("pointercancel", (p) => {
      h.delete(p.pointerId), p.pointerId === t && (o = !0, f());
    }, { signal: this.inputEvents.signal }), e.addEventListener("lostpointercapture", (p) => {
      h.delete(p.pointerId), p.pointerId === t && (o = !0, f());
    }, { signal: this.inputEvents.signal }), e.addEventListener("pointerleave", () => {
      this.pointer.set(0, 0), this.setHover(null);
    }, { signal: this.inputEvents.signal }), e.addEventListener("wheel", (p) => {
      if (this.relayActive) {
        p.preventDefault();
        return;
      }
      if (!this.canBrowse() || t !== null || p.ctrlKey || Math.abs(p.deltaX) > Math.abs(p.deltaY)) return;
      p.preventDefault(), this.archiveMomentum && this.stopMomentum();
      const v = performance.now(), x = u.MathUtils.clamp(p.deltaY * (p.deltaMode === 1 ? 40 : p.deltaMode === 2 ? e.clientHeight : 1), -300, 300);
      (v - c > 180 || Math.sign(x) !== Math.sign(l)) && (l = 0), c = v, l += x;
      const w = Math.min(3, Math.floor(Math.abs(l) / 100));
      if (!w) return;
      const y = Math.sign(l);
      l -= y * w * 100, this.navigatingDrag = !0;
      try {
        for (let M = 0; M < w; M++) this.onNavigate?.("row", y);
      } finally {
        this.navigatingDrag = !1;
      }
    }, {
      passive: !1,
      signal: this.inputEvents.signal
    }), window.addEventListener("blur", () => this.cancelPointer(), { signal: this.inputEvents.signal }), document.addEventListener("visibilitychange", () => {
      document.hidden && this.cancelPointer();
    }, { signal: this.inputEvents.signal }), window.addEventListener("resize", () => this.cancelPointer(), { signal: this.inputEvents.signal }), window.addEventListener("pointerup", (p) => h.delete(p.pointerId), { signal: this.inputEvents.signal }), window.addEventListener("pointercancel", (p) => h.delete(p.pointerId), { signal: this.inputEvents.signal });
  }
  update(e, t) {
    const s = Math.max(0, e - this.last || 0.016), i = Math.min(s, 0.05);
    if (this.last = e, this.clock = e, !this.loaded) return;
    const r = this.reduced ? 1 : Math.min(s, 0.25) / 1.1;
    this.presence += Math.sign(this.presenceTarget - this.presence) * Math.min(r, Math.abs(this.presenceTarget - this.presence)), this.renderer.domElement.style.opacity = String(u.MathUtils.clamp(this.presence / 0.16, 0, 1)), this.theme.beginFrame(), Pr(this.scene, this.renderer, this.themeAmount);
    const n = 1 - Math.exp(-i * (this.reduced ? 35 : 2.8));
    this.reveal = t ? t.reveal : u.MathUtils.lerp(this.reveal, this.targetReveal, n), this.rotation = this.targetDetail ? u.MathUtils.lerp(this.rotation, this.targetRotation, n) : Os(this.rotation, i, this.reduced);
    const a = t?.time ?? 29.1;
    t ? (this.scanTime = a, this.scanBlend = 1) : (this.scanTime += i, this.scanBlend *= Math.exp(-i * 3)), this.canBrowse() || (this.setHover(null), (this.holdingArchive || this.archiveMomentum) && this.cancelPointer()), this.looping && !t && !this.holdingArchive && !this.archiveMomentum && this.rebaseCoordinates();
    const o = t ? null : this.archiveMomentum;
    o && (o.motion.step(Math.min(Math.max(e - o.time, 0), 0.25)), o.time = e, this.navigatePlane(o.motion.value), this.lastInteraction = e);
    const l = !t && this.hoverCell ? ve(this.hoverCell) : null;
    l && !this.hoverLifts.has(l) && this.hoverLifts.set(l, 0);
    for (const [m, g] of this.hoverLifts) {
      const T = m === l ? 0.28 : 0, E = t ? 0 : this.reduced ? T : u.MathUtils.lerp(g, T, 1 - Math.exp(-i * 14));
      T === 0 && E < 1e-4 ? this.hoverLifts.delete(m) : this.hoverLifts.set(m, E);
    }
    const c = (m) => this.hoverLifts.get(ve(m)) ?? 0, h = this.cellPosition(this.selectedCell), d = this.selectedCell.row, f = this.selectedCell.lane;
    et(this.shoulder, d, this.reduced ? 35 : 5, i), et(this.laneFocus, f, this.reduced ? 35 : 4, i), !this.holdingArchive && !o && (et(this.columnCamera, h.x, this.reduced ? 35 : 3.7, i), et(this.rail, t ? 0 : -2.17 - h.z, this.reduced ? 35 : 3.7, i)), o && (this.columnCamera.value = this.trackPosition("lane", o.motion.lane.value), this.rail.value = this.trackPosition("row", o.motion.row.value), this.columnCamera.velocity = o.motion.lane.velocity * G, this.rail.velocity = -o.motion.row.velocity * W, o.motion.phase === "idle" && (this.archiveMomentum = null)), this.dragTrack && !t && (this.columnCamera.value = this.dragTrack.lane, this.rail.value = this.dragTrack.row, this.columnCamera.velocity = this.rail.velocity = 0), t && (this.rail.value = 0, this.rail.velocity = 0, this.lift.value = qa(a), this.lift.velocity = 0, this.shoulder.value = d, this.laneFocus.value = f, this.laneFocus.velocity = 0, this.columnCamera.value = h.x, this.columnCamera.velocity = 0);
    const p = t ? 0 : this.columnCamera.value;
    this.pulses = this.pulses.filter((m) => e - m.time < 3.2);
    const v = this.outgoing.some((m) => m.returnY !== null), x = !t && !this.reduced && this.targetReveal > 0 && !this.targetDetail && this.detail < 0.01 && this.returnY === null && !v && e - this.lastInteraction > 2.5;
    this.idleGain = t ? 0 : u.MathUtils.lerp(this.idleGain, x ? this.playfield.enabled ? this.playfield.breathing && !this.relayActive ? 1 - this.playfield.bands.activity : 0 : 1 : 0, 1 - Math.exp(-i * (x ? 0.8 : 4))), this.pulseGain = u.MathUtils.lerp(this.pulseGain, this.targetDetail || this.returnY !== null || v ? 0 : 1, 1 - Math.exp(-i * 8));
    const w = this.playfield, y = !t && !this.targetDetail && w.enabled, M = this.rhythm.update(y && !this.reduced ? w.bands : ws(), e, i, this.rhythmStyle);
    this.flatMix += ((y ? w.flatten : 0) - this.flatMix) * (this.reduced ? 1 : 1 - Math.exp(-i * 4)), this.subduedIndex.value = Math.max(Number(this.selectedIndexOnly), this.flatMix);
    const b = (m) => this.selectedIndexOnly ? 1 - U(m / 0.4) * (1 - this.flatMix) : this.flatMix, S = y ? w.target : null;
    S && !this.relayLifts.has(S) && this.relayLifts.set(S, 0);
    for (const [m, g] of this.relayLifts) {
      const T = g + ((m === S ? 0.95 : 0) - g) * (this.reduced ? 1 : 1 - Math.exp(-i * 8));
      T < 1e-3 && m !== S ? this.relayLifts.delete(m) : this.relayLifts.set(m, T);
    }
    const P = new u.Vector3(), L = (m, g) => (P.set((g - 2) * G - p, -4.6, (m - 15.5) * W + this.rail.value).project(this.camera), (P.x + 1) / 2), R = (m, g) => {
      if (t) return $a(m, g, a, this.shoulder.value, this.laneFocus.value);
      const T = ii(m + this.coordinateOrigin.row, g + this.coordinateOrigin.lane, this.scanTime) * this.scanBlend, E = tt(m + this.coordinateOrigin.row, g + this.coordinateOrigin.lane, G, W), I = Ja(E.u, E.v, e) * this.idleGain;
      let H = 0;
      if (!t && !this.reduced) {
        let $ = 0;
        for (const ht of this.pulses) {
          const rs = Math.hypot(m - ht.row, (g - ht.lane) * 2.2), as = e - ht.time;
          $ += this.selectionPulse(rs, as) * (this.deferSelectionPulse ? Za(rs, as) : 1);
        }
        H = u.MathUtils.clamp($, -0.6, 0.6) * this.pulseGain;
      }
      const k = tt(m, g, G, W), _ = tt(this.shoulder.value, this.laneFocus.value, G, W);
      return (T + ts(k.u - _.u, 26.56) * ri(k.v, _.v) * en) * (1 - this.flatMix) + I + H + (y && !this.reduced ? Ir(m, g, e, w.bands, w.strength, M, L(m, g)) : 0) + (this.relayLifts.get(ve({
        row: m,
        lane: g
      })) ?? 0);
    }, C = tn === "x", O = (m) => C ? m * sn : 0, D = (m) => C ? 0 : m, N = (m) => C ? c(m) : 0, j = (m) => C ? 0 : c(m), Ee = ks !== "x", Le = ks === "-z" ? -1 : 1, ue = (m, g, T) => {
      const E = g * an * Le;
      Ee ? m.rotation.set(0, T, E) : m.rotation.set(E, T, 0);
    }, de = R(d, f), ye = h.y + D(de);
    t || (this.returnY !== null && this.rotation !== 0 ? (this.lift.value = this.returnY - ye, this.lift.velocity = 0) : (this.returnY = null, et(this.lift, this.targetDetail ? Ps : this.outgoing.some((m) => m.returnY !== null && m.cell.lane === f && Math.abs(m.cell.row - d) < 5) ? 0 : 0.4 * this.targetReveal * (1 - this.flatMix), this.reduced ? 35 : this.deferSelectionPulse && !this.targetDetail && this.lift.value < 0.4 ? 7.6 : 4.2, i)));
    const z = this.targetDetail ? U((this.lift.value - 0.8) / 2.4) : this.returnY !== null ? this.detail : U((this.lift.value - 0.4) / (Ps - 0.4));
    this.detail = t ? t.zoom : u.MathUtils.lerp(this.detail, z, n);
    const F = this.detail;
    this.decryption.update(i, F > 0.78 && this.lift.value > 3.3, this.reduced, t ? a + 5 : void 0), this.appearance.apply(this.model, U(this.lift.value / 0.4)), this.appearance.setClarity(this.model, this.decryption.clarity);
    const fe = t ? U((a - 21.9) / 0.86) : this.reveal, ze = u.MathUtils.clamp((a - 21.92) / 0.75, 0, 1), pe = t ? -23 * (1 - ze) ** 2 : -28 * (1 - fe);
    for (let m = this.outgoing.length - 1; m >= 0; m--) {
      const g = this.outgoing[m], T = this.cellPosition(g.cell), E = R(g.cell.row, g.cell.lane), I = T.y + D(E);
      g.group.rotation.y = Os(g.group.rotation.y, i, this.reduced), g.returnY !== null ? (g.lift.value = g.returnY - I, g.lift.velocity = 0, g.group.rotation.y === 0 && (g.returnY = null)) : et(g.lift, 0, this.reduced ? 35 : 4.5, i), g.group.position.set(T.x - p + O(E) + N(g.cell), I + g.lift.value + j(g.cell) - this.presentationDrop(g.cell), T.z + pe + this.rail.value);
      const H = U(g.lift.value / 0.4);
      this.appearance.apply(g.group, H), this.appearance.setTheme(g.group, this.theme.sample(g.cell, e), b(g.lift.value)), g.clarity = this.reduced ? 0 : g.clarity * Math.exp(-i * 9), this.appearance.setClarity(g.group, g.clarity);
      const { row: k, lane: _ } = g.cell, $ = tt(k, _, G, W);
      ue(g.group, (R(k + $.dRow, _ + $.dLane) - R(k - $.dRow, _ - $.dLane)) * 0.024 * (1 - F) * (1 - H), g.group.rotation.y), g.lift.value < 1e-4 && Math.abs(g.group.rotation.y) < 1e-4 && (this.scene.remove(g.group), this.appearance.dispose(g.group), this.outgoing.splice(m, 1));
    }
    if (this.pendingPulse && !t && !this.targetDetail && this.targetReveal) {
      const m = ye + this.lift.value, g = this.outgoing.every((T) => T.cell.lane !== f || Math.abs(T.cell.row - d) > 4 || T.group.position.y + 0.015 < m);
      this.lift.value >= 0.35 && this.returnY === null && g && (this.reduced || this.emitPulse(this.pendingPulse), this.pendingPulse = null);
    }
    this.appearance.setTheme(this.model, this.theme.sample(this.selectedCell, e), b(this.lift.value)), this.model.position.set(h.x - p + O(de) + N(this.selectedCell), h.y + D(de) + this.lift.value + j(this.selectedCell) - this.presentationDrop(this.selectedCell), h.z + pe + this.rail.value);
    const me = tt(d, f, G, W);
    ue(this.model, (R(d + me.dRow, f + me.dLane) - R(d - me.dRow, f - me.dLane)) * 0.024 * (1 - F) * (1 - U(this.lift.value / 0.4)), t ? 0 : this.rotation);
    const ie = U((a - 22.6) / 1.6), V = U((a - 24.25) / 2.25), Q = u.MathUtils.degToRad(89 - 22 * ie - 8 * V), K = u.MathUtils.degToRad(3 + 40 * U((a - 21.96) / 0.22) - 8 * ie - 16 * V), Y = u.MathUtils.lerp(u.MathUtils.lerp(10.8, 10.3, ie), 7.33, V), lt = !!t && this.container.closest("[data-layout]")?.dataset.layout === "opening", Ge = lt ? this.container.clientWidth / this.container.clientHeight / (16 / 9) : 1, De = (m) => m / Math.min(1, Ge), We = u.MathUtils.lerp(u.MathUtils.lerp(28 + 7 * ie, 140, V), 72, F), te = new u.Vector3(-1.091, u.MathUtils.lerp(-2.55 + 0.4 * ie, -0.045, V), u.MathUtils.lerp(2.48, 0.481, V)).clone(), X = new u.Vector3(-Math.sin(Q) * Math.cos(K), Math.sin(K), Math.cos(Q) * Math.cos(K));
    if (t) {
      const m = U((a - 27.3) / 1.3), g = U((a - 28.6) / 5.4), T = Q - u.MathUtils.degToRad(9 * m + 32 * g), E = K - u.MathUtils.degToRad(1.5 * m + 3.7 * g);
      X.set(-Math.sin(T) * Math.cos(E), Math.sin(E), Math.cos(T) * Math.cos(E));
    } else X.lerp(new u.Vector3(-0.277, 0.238, 0.931), F).normalize();
    if (t) {
      const m = U((a - 25.4) / 0.95), g = new u.Vector3().crossVectors(new u.Vector3(0, 1, 0), X).normalize();
      te.addScaledVector(g, -2.05 * (1 - m) * U((a - 24.2) / 0.8));
    }
    if (t && a >= 25.05 && a <= 27.3) {
      const m = U((a - 25.4) / 1.05), g = new u.Vector3().crossVectors(new u.Vector3(0, 1, 0), X).normalize(), T = new u.Vector3().crossVectors(X, g).normalize(), E = 1080 / De(Y), I = this.model.position.clone().add(new u.Vector3(-2.5, 3.7, 0));
      I.addScaledVector(g, -(u.MathUtils.lerp(840, 518, m) - 960) * Ge / E), I.addScaledVector(T, -(540 - u.MathUtils.lerp(340, 288, m)) / E), te.lerp(I, U((a - 25.05) / 0.35));
    }
    if (t && a > 27.3) {
      const m = U((a - 27.3) / 6.7), g = U((a - 27.3) / 1.25), T = u.MathUtils.lerp(518 - 98 * g, 618, m), E = u.MathUtils.lerp(296 + 34 * g, 287, m), I = 1080 / De(u.MathUtils.lerp(Y, 5.9, F)), H = new u.Vector3().crossVectors(new u.Vector3(0, 1, 0), X).normalize(), k = new u.Vector3().crossVectors(X, H).normalize(), _ = this.model.position.clone().add(new u.Vector3(-2.5, 3.7, 0));
      _.addScaledVector(H, -(T - 960) * Ge / I), _.addScaledVector(k, -(540 - E) / I), te.lerp(_, U((a - 27.3) / 0.5));
    }
    const Z = Xa(this.container.clientWidth, this.container.clientHeight, Y, F, this.container.closest("[data-layout]")?.dataset.layout === "compact");
    if (!t) {
      const m = new u.Vector3().crossVectors(new u.Vector3(0, 1, 0), X).normalize(), g = new u.Vector3().crossVectors(X, m).normalize(), T = this.container.clientWidth, E = this.container.clientHeight, I = E / Z.span;
      if (Z.portrait) {
        const k = new u.Vector3(0, -4.6 + D(ts(0, 26.56)) + 0.4 + 1.85, -2.17);
        k.addScaledVector(g, (Z.previewY - 0.5) * E / I), te.copy(k);
      }
      const H = this.model.position.clone().add(new u.Vector3(0, 1.85, 0));
      H.addScaledVector(m, (0.5 - Z.detailX) * T / I), H.addScaledVector(g, (Z.detailY - 0.5) * E / I), te.lerp(H, F);
    }
    const Pe = te.clone().addScaledVector(X, We);
    !t && !this.reduced && !this.uiOnlyParallax && (Pe.x += this.pointer.x * 0.12, Pe.y -= this.pointer.y * 0.12);
    const Oe = t ? 1 : 1 - Math.exp(-i * 5);
    this.camera.position.lerp(Pe, Oe), this.cameraAim.lerp(te, Oe), this.camera.lookAt(this.cameraAim), Hs && this.camera.rotateZ(Hs);
    const je = Z.portrait && !zs ? ln : nn, Ve = Z.portrait && !zs ? cn : on;
    if (je || Ve) {
      const m = this.container.clientWidth, g = this.container.clientHeight;
      this.camera.setViewOffset(m, g, je, -Ve, m, g);
    }
    this.camera.fov = u.MathUtils.lerp(this.camera.fov, u.MathUtils.radToDeg(2 * Math.atan((t ? De(u.MathUtils.lerp(Y, 5.9, F)) : Z.span) / (2 * We))), Oe);
    const ge = this.scene.fog, Xe = this.camera.position.distanceTo(this.cameraAim), _e = this.themeAmount;
    ge.near = Xe + u.MathUtils.lerp(5 - 4 * _e, -1, F), ge.far = Xe + u.MathUtils.lerp(25 - 9 * _e, 12, F), this.camera.updateProjectionMatrix(), this.camera.updateMatrixWorld();
    const Ke = (!!t || !this.looping) && !lt;
    this.cells = Ke ? Array.from({ length: 160 }, (m, g) => zt(g)) : this.visibility.update(this.camera, ge.far, p, pe + this.rail.value, this.extraCoverage);
    const Ye = new Set(this.outgoing.map((m) => ve(m.cell)));
    Ye.add(ve(this.selectedCell)), this.drawnCells = [], this.relayPoints.clear(), this.matrixUpdates ??= new vt(this.instances[0].instanceMatrix), this.themeAttribute && (this.themeUpdates ??= new vt(this.themeAttribute));
    for (const m of this.cells) {
      const { row: g, lane: T } = m;
      if (Ye.has(ve(m))) continue;
      const E = R(g, T), I = (T - 2) * G - p + O(E) + N(m), H = -4.6 + D(E) + j(m) - this.presentationDrop(m), k = (g - 15.5) * W + pe + this.rail.value;
      if (!Ke && !this.visibility.intersects(I, H, k)) continue;
      const _ = this.drawnCells.length;
      this.ensureInstanceCapacity(_ + 1), this.drawnCells.push(m), this.themeUpdates?.scalar(_, this.theme.sample(m, e));
      const $ = tt(g, T, G, W), ht = R(g + $.dRow, T + $.dLane) - R(g - $.dRow, T - $.dLane);
      this.dummy.position.set(I, H, k), ue(this.dummy, ht * 0.024 * (1 - F), 0), this.dummy.scale.setScalar(1), this.dummy.updateMatrix(), w.enabled && this.relayPoints.set(ve(m), {
        cell: { ...m },
        point: new u.Vector3(0, 3.5, 0).applyMatrix4(this.dummy.matrix)
      }), this.matrixUpdates.set(_ * 16, this.dummy.matrix.elements);
    }
    const ct = this.instances[0].count !== this.drawnCells.length, qe = this.matrixUpdates.commit();
    for (const m of this.instances) m.count = this.drawnCells.length;
    (qe || ct || !this.instances[0].boundingSphere) && this.instances[0].computeBoundingSphere(), this.themeUpdates?.commit();
    let se = -1 / 0;
    const Te = f, re = d, Ne = C ? 3.4 : 3.76;
    for (let m = re - 5; m <= re + 5; m++) m !== re && (se = Math.max(se, -4.6 + D(R(m, Te)) + Ne));
    for (const m of this.outgoing) m.cell.lane === Te && Math.abs(m.cell.row - re) <= 5 && (se = Math.max(se, m.group.position.y + 3.76));
    this.clearance = this.model.position.y - se, this.canInspect = !t && !!this.targetDetail && F > 0.9 && this.pulseGain < 0.01 && this.clearance > 0.3, this.container.dataset.inspection = this.returnY !== null ? "aligning" : this.canInspect ? "ready" : this.targetDetail ? "lifting" : "preview";
    const Ut = this.model.position.clone().add(new u.Vector3(0, 2, 0)).applyMatrix4(this.camera.matrixWorldInverse), Qe = this.bokeh.uniforms;
    Qe.focus.value = -Ut.z, Qe.aperture.value = u.MathUtils.lerp(3e-4, 8e-4, F) * this.quality.depthOfField / 100, this.renderer.info.reset();
    const J = this.renderState;
    if (this.scene.updateMatrixWorld(), qe || t) J.invalidate();
    else if (J.begin(), J.floats(...this.camera.projectionMatrix.elements, ...this.camera.matrixWorldInverse.elements, ...this.camera.position.toArray(), ge.near, ge.far, this.themeAmount, this.subduedIndex.value, Qe.focus.value, Qe.aperture.value), this.scene.traverse((m) => {
      if (J.add(m.id, Number(m.visible)), !(m instanceof u.Mesh)) return;
      m.modelViewMatrix.multiplyMatrices(this.camera.matrixWorldInverse, m.matrixWorld), m.normalMatrix.getNormalMatrix(m.modelViewMatrix), J.floats(...m.modelViewMatrix.elements, ...m.normalMatrix.elements, ...m.matrixWorld.elements);
      const g = m.material;
      J.add(m.geometry.id, g.uuid, g.map?.uuid, g.map?.version ?? 0), J.floats(g.opacity, g.roughness, g.metalness, g.transmission, g.thickness, g.attenuationDistance, g.clearcoat, g.clearcoatRoughness, g.color.r, g.color.g, g.color.b, g.attenuationColor?.r ?? 0, g.attenuationColor?.g ?? 0, g.attenuationColor?.b ?? 0);
      for (const T of [
        "appearance",
        "glassClarity",
        "themeAmount",
        "subduedIndex"
      ]) J.floats(m.userData[T]?.value ?? 0);
      m instanceof u.InstancedMesh && J.add(m.count, m.instanceMatrix.version, this.themeAttribute?.version ?? 0);
    }), !J.end()) {
      this.reusedFrames++;
      return;
    }
    this.renderedFrames++, this.renderer.shadowMap.needsUpdate = !0, this.superPerformance ? this.renderer.render(this.scene, this.camera) : this.composer.render();
  }
  projectCard(e, t) {
    this.model.updateMatrixWorld(!0);
    const s = this.model.localToWorld(new u.Vector3(e, t, 0.255)).project(this.camera);
    return [(s.x + 1) * this.container.clientWidth / 2, (1 - s.y) * this.container.clientHeight / 2];
  }
  get decryptionFrame() {
    return this.decryption.frame;
  }
  finishDecryption() {
    this.decryption.finish();
  }
  get detailVisibility() {
    return U((this.detail - 0.25) / 0.55);
  }
  getStats() {
    this.model.updateMatrixWorld(!0);
    const e = (t, s, i) => {
      const r = this.model.localToWorld(new u.Vector3(t, s, i)).project(this.camera);
      return [Math.round((r.x + 1) * this.container.clientWidth / 2), Math.round((1 - r.y) * this.container.clientHeight / 2)];
    };
    return {
      decryption: {
        ...this.decryption.frame,
        clarity: this.decryption.clarity
      },
      topLeft: e(-2.5, 3.7, 0),
      topRight: e(2.5, 3.7, 0),
      labelTopLeft: e(-1.855, 3.27, 0.255),
      labelBottomLeft: e(-1.855, 2.81, 0.255),
      modelPosition: this.model.position.toArray().map((t) => Math.round(t * 1e4) / 1e4),
      cameraPosition: this.camera.position.toArray().map((t) => Math.round(t * 1e4) / 1e4),
      fieldOfView: this.camera.fov,
      loaded: this.loaded,
      drawCalls: this.renderer.info.render.calls,
      renderedFrames: this.renderedFrames,
      reusedFrames: this.reusedFrames,
      superPerformance: this.superPerformance,
      presentation: this.presence,
      triangles: this.renderer.info.render.triangles,
      archiveCount: this.drawnCells.length,
      archiveCandidates: this.cells.length,
      archiveCulled: this.cells.length - this.drawnCells.length,
      archiveCapacity: this.instanceCapacity,
      archiveCoverage: this.extraCoverage ? "extra" : "standard",
      returningFiles: this.outgoing.length,
      selectionPhase: this.pendingPulse ? "lifting" : this.pulses.length ? "wave" : "settled",
      pendingPulse: this.pendingPulse ? { ...this.pendingPulse } : null,
      pulses: this.pulses.map((t) => ({ ...t })),
      referenceTime: Math.round((this.scanTime + 5) * 100) / 100,
      selectedSlot: this.selectedSlot,
      selectedLane: Math.floor(this.selectedSlot / 32),
      selectedCell: { ...this.selectedCell },
      hoverCell: this.hoverCell ? { ...this.hoverCell } : null,
      hoverLifts: Object.fromEntries(this.hoverLifts),
      dragTrack: this.dragTrack ? { ...this.dragTrack } : null,
      archiveMomentum: this.archiveMomentum ? {
        phase: this.archiveMomentum.motion.phase,
        value: this.archiveMomentum.motion.value,
        velocity: this.archiveMomentum.motion.velocity
      } : null,
      holdingArchive: this.holdingArchive,
      dragProjection: this.dragProjection(),
      dragMapping: this.archiveDrag.active ? "free" : null,
      coordinateOrigin: { ...this.coordinateOrigin },
      poolBounds: {
        minLane: Math.min(...this.cells.map((t) => t.lane)),
        maxLane: Math.max(...this.cells.map((t) => t.lane)),
        minRow: Math.min(...this.cells.map((t) => t.row)),
        maxRow: Math.max(...this.cells.map((t) => t.row))
      },
      laneFocus: this.laneFocus.value,
      columnCamera: this.columnCamera.value,
      rotation: this.rotation,
      clearance: this.clearance,
      canInspect: this.canInspect,
      returnPhase: this.returnY !== null ? "aligning" : "lowering",
      extraction: Math.round(this.lift.value * 1e3) / 1e3,
      appearance: Math.round(U(this.lift.value / 0.4) * 1e3) / 1e3,
      cameraDetail: Math.round(this.detail * 1e3) / 1e3,
      idleGain: this.idleGain,
      flatten: this.flatMix,
      spectrumActivity: this.playfield.bands.activity,
      selectedIndexDim: this.model.children.find((t) => t.userData.surface === "Index_Inlay")?.userData.subduedIndex?.value,
      returningIndexDims: this.outgoing.map((t) => ({
        cell: t.cell,
        dim: t.group.children.find((s) => s.userData.surface === "Index_Inlay")?.userData.subduedIndex?.value
      })),
      cameraDistance: this.camera.position.distanceTo(this.cameraAim),
      cameraNear: this.camera.near,
      cameraFar: this.camera.far,
      fogNear: this.scene.fog.near,
      fogFar: this.scene.fog.far,
      returningAppearance: this.outgoing.map((t) => ({
        slot: t.slot,
        cell: { ...t.cell },
        lift: t.lift.value,
        quality: U(t.lift.value / 0.4),
        rotation: t.group.rotation.y,
        worldY: t.group.position.y,
        phase: t.returnY !== null ? "aligning" : "lowering"
      })),
      rail: Math.round(this.rail.value * 1e3) / 1e3
    };
  }
}, Rt = (e, t) => (e % t + t) % t;
async function mn(e, t = {}) {
  t.assetsBase && (globalThis.__ARCHIVE_ASSET_BASE__ = t.assetsBase);
  const s = new hn(e);
  s.setTheme(t.dark ?? !0, !0), s.setPresentationVisible(!1, !0), await s.load(void 0, await t.cassette), s.setMode("archive"), s.revealImmediately(), s.setPresentationVisible(!0, !0);
  const i = /* @__PURE__ */ new Map();
  let r = 0, n = !1, a = 0;
  const o = {
    total: Ot.length,
    columns: Be,
    get index() {
      return r;
    },
    get lane() {
      return ne(r).lane;
    },
    select(l, c) {
      r = Rt(l, Ot.length), i.set(ne(r).lane, r), s.select(r, c), o.onSelect?.(r, c);
    },
    stepRow(l) {
      const c = ke(ne(r).lane);
      if (c.length < 2) return !1;
      const h = c.indexOf(r);
      return o.select(c[Rt(h + l, c.length)], {
        axis: "row",
        direction: l
      }), !0;
    },
    stepLane(l) {
      const c = ne(r).lane, h = Rt(c + l, Be.length);
      o.select(i.get(h) ?? ke(h)[0], {
        axis: "lane",
        direction: l
      });
    },
    focusLane(l) {
      const c = Rt(l, Be.length);
      c !== ne(r).lane && o.select(i.get(c) ?? ke(c)[0], {
        axis: "lane",
        direction: c > ne(r).lane ? 1 : -1
      });
    },
    setRunning(l) {
      if (l === n) return;
      if (n = l, !n) {
        a && cancelAnimationFrame(a), a = 0;
        return;
      }
      s.resize();
      const c = () => {
        n && (s.update(performance.now() / 1e3), a = requestAnimationFrame(c));
      };
      a = requestAnimationFrame(c);
    },
    resize() {
      s.resize();
    },
    dispose() {
      n = !1, a && cancelAnimationFrame(a), a = 0, s.dispose();
    }
  };
  return s.onSelect = (l) => {
    o.select(l);
  }, s.onHover = (l) => o.onHover?.(l), s.onNavigate = (l, c) => {
    l === "lane" ? o.stepLane(c) : o.stepRow(c);
  }, o.select(t.initialIndex ?? 0), new URLSearchParams(window.location.search).has("scene") && (window.__scene = s), o;
}
export {
  Be as archiveColumns,
  ke as columnFiles,
  mn as createArchiveEmbed,
  ne as fileLocation,
  Ot as records
};
