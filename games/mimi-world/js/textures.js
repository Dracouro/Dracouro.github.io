'use strict';
// ---------------------------------------------------------------------------
// Procedurally generated 16x16 tiles (redstone update).
//
// assets.js 只包含官方材质包里已有的贴图，红石相关的方块（拉杆、踏板、中继器、
// 红石灯…）在原版里是独立贴图，这里用极小的像素生成器把它们画出来，并追加到
// 共享的纹理数组末尾（见 Renderer.init）。这样 blocks.js 里可以像其它方块一样
// 用 T('lever') 直接引用，物品图标也能自动复用同一张图。
// ---------------------------------------------------------------------------
const GEN_TILES = {};   // name -> painter(put, src)
const GEN_NAMES = [];

// 注册一张生成贴图。put(x, y, [r, g, b, a?]) 写入一个像素，
// src(tileName, x, y) 读取官方材质里的像素（用来做"变体"，比如踏板的边框）。
function genTile(name, painter) { GEN_TILES[name] = painter; GEN_NAMES.push(name); }

const clamp255 = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);
function mul(c, k) { return [clamp255(c[0] * k), clamp255(c[1] * k), clamp255(c[2] * k), c[3] === undefined ? 255 : c[3]]; }

// 用字符画描述 16x16 贴图：'.' 或未定义的字符 = 透明
function artTile(rows, pal) {
  return (put) => {
    for (let y = 0; y < 16; y++) {
      const row = rows[y] || '';
      for (let x = 0; x < 16; x++) {
        const c = pal[row[x]];
        if (c) put(x, y, c);
      }
    }
  };
}

// ---- 红石火把 -------------------------------------------------------------
const TORCH_ART = [
  '................',
  '................',
  '................',
  '................',
  '.....RRRRRR.....',
  '.....RrrrrR.....',
  '.....RrrrrR.....',
  '.....RrrrrR.....',
  '.....RRRRRR.....',
  '.......sS.......',
  '.......sS.......',
  '.......sS.......',
  '.......sS.......',
  '.......sS.......',
  '.......sS.......',
  '.......sS.......',
];
genTile('redstone_torch_off', artTile(TORCH_ART, {
  R: [122, 62, 56], r: [82, 34, 30], s: [150, 108, 66], S: [104, 74, 44],
}));
genTile('redstone_torch_on', artTile(TORCH_ART, {
  R: [255, 106, 74], r: [232, 40, 28], s: [150, 108, 66], S: [104, 74, 44],
}));

// ---- 红石线（粒子 / 备用贴图） --------------------------------------------
genTile('redstone_dust', (put) => {
  const c = [214, 36, 30], d = [150, 22, 18];
  for (let i = 4; i < 12; i++) { put(i, 7, c); put(i, 8, d); put(7, i, c); put(8, i, d); }
  for (let y = 6; y < 10; y++) for (let x = 6; x < 10; x++) put(x, y, c);
});

// ---- 红石灯 ---------------------------------------------------------------
function lampPainter(edge, frame, cell) {
  return (put) => {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const onEdge = x === 0 || y === 0 || x === 15 || y === 15;
      const onFrame = !onEdge && (x === 3 || x === 4 || x === 11 || x === 12 || y === 3 || y === 4 || y === 11 || y === 12);
      const n = ((x * 7 + y * 5) % 3) - 1;
      let c = onEdge ? edge : onFrame ? frame : cell;
      c = [clamp255(c[0] + n * 4), clamp255(c[1] + n * 3), clamp255(c[2] + n * 2)];
      put(x, y, c);
    }
  };
}
genTile('redstone_lamp', lampPainter([56, 30, 16], [74, 40, 22], [104, 58, 30]));
genTile('redstone_lamp_on', lampPainter([168, 96, 40], [232, 158, 62], [255, 216, 128]));

// ---- 拉杆 -----------------------------------------------------------------
genTile('lever', (put, src) => {
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    let c = src('cobblestone', x, y);
    if (x === 0 || y === 0 || x === 15 || y === 15) c = mul(c, 0.7);
    if (x >= 6 && x <= 9 && y >= 6 && y <= 9) c = ((x + y) & 1) ? [122, 84, 48] : [96, 64, 34];
    put(x, y, c);
  }
});

// ---- 石 / 木 压力板 -------------------------------------------------------
function platePainter(base) {
  return (put, src) => {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      let c = src(base, x, y);
      const border = x === 0 || y === 0 || x === 15 || y === 15;
      const inner = x === 1 || y === 1 || x === 14 || y === 14;
      if (border) c = mul(c, 0.66);
      else if (inner) c = mul(c, 0.86);
      else if ((x === 7 || x === 8) && (y === 7 || y === 8)) c = mul(c, 0.94);
      put(x, y, c);
    }
  };
}
genTile('stone_pressure_plate', platePainter('smooth_stone'));
genTile('oak_pressure_plate', platePainter('oak_planks'));

// ---- 红石中继器 -----------------------------------------------------------
function repeaterPainter(dot, dotDark) {
  return (put, src) => {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      let c = src('smooth_stone', x, y);
      const border = x === 0 || y === 0 || x === 15 || y === 15;
      if (border) c = mul(c, 0.62);
      else if (x >= 5 && x <= 10 && y >= 5 && y <= 10) c = mul(c, 1.06);
      put(x, y, c);
    }
    // 两个"火把"点
    for (const cy of [4, 11]) {
      for (let y = cy - 1; y <= cy + 1; y++) for (let x = 6; x <= 9; x++) {
        if (x === 6 || x === 9 || y === cy - 1 || y === cy + 1) put(x, y, dotDark);
        else put(x, y, dot);
      }
    }
  };
}
genTile('repeater', repeaterPainter([150, 40, 32], [96, 24, 20]));
genTile('repeater_on', repeaterPainter([255, 120, 84], [214, 46, 32]));

// ---------------------------------------------------------------------------
// 把生成贴图登记到 ASSETS 里（必须在 blocks.js 之前执行）
// ---------------------------------------------------------------------------
(function registerGeneratedTiles() {
  if (!window.ASSETS) { console.warn('ASSETS missing, generated tiles disabled'); return; }
  ASSETS.genNames = [];
  let n = ASSETS.count;
  for (const name of GEN_NAMES) {
    if (ASSETS.tiles[name] !== undefined) continue;    // 官方材质里已有 -> 直接用
    ASSETS.tiles[name] = n++;
    ASSETS.genNames.push(name);
  }
  ASSETS.genCount = ASSETS.genNames.length;
  ASSETS.countWithGen = n;
})();
