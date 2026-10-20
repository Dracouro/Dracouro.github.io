'use strict';
// ---------------------------------------------------------------------------
// Redstone engine
// ---------------------------------------------------------------------------
// 设计目标：在保持代码量可控的前提下，让"红石电路"讲得通、看得见、能搭出有用的东西。
//
// 信号模型
//   * 每个元件读取"相邻方块发给它的信号"（0-15），取最大值。
//   * 电 源：红石块(15)、点亮的红石火把(15)、开启的拉杆/按钮(15)、被踩下的压力板(15)、
//            中继器的输出端(15)。
//   * 红石线是唯一会衰减的元件：相邻两格红石线之间 -1，用多源 BFS 精确求解整张网络。
//   * 实体方块（不透明满方块）会被电源"强充能"。强充能的方块会把信号传给相邻的机制方块
//     （门、活板门、音符盒、TNT、红石灯、中继器）以及相邻的红石线 —— 后者比原版宽松，
//     这样"拉杆→方块→红石线"这种最直觉的搭法可以工作。
//   * 红石线不会给实体方块充能，因此不存在"穿墙"和自激振荡。
//   * 红石火把在它附着的方块（或它点亮的、上方的方块）被充能时熄灭。
//
// 更新传播
//   * 方块变化 → Game.onNeighborUpdate → Redstone.onNeighborUpdate → 位置进入本 tick 的
//     更新队列；每 tick 处理有限预算，超出预算的部分留到下一 tick。
//   * 同一位置在一个 tick 内被反复唤醒太多次就会被丢弃（振荡保护）。
// ---------------------------------------------------------------------------
const RS_DIR4 = [0, 1, 4, 5];            // 4 个水平方向在 DIRS 中的下标
function rsKey(x, y, z) { return x + ',' + y + ',' + z; }

const Redstone = {
  game: null, world: null,
  queue: new Map(),     // 'x,y,z' -> 本 tick 入队次数
  pending: new Map(),   // 中继器：延迟切换的目标电平
  plates: new Set(),    // 当前被踩下的压力板
  ids: null,
  budget: 384,

  attach(game) {
    this.game = game;
    this.world = game ? game.world : null;
    this.queue.clear(); this.pending.clear(); this.plates.clear();
  },

  // ---- 信号查询 -----------------------------------------------------------
  // 方块 (x,y,z) 朝 (dx,dy,dz) 方向发出的信号强度
  emit(w, x, y, z, dx, dy, dz) {
    const id = w.getBlock(x, y, z);
    if (!id) return 0;
    const k = BLOCKS[id].rs;
    if (!k) return 0;
    switch (k) {
      case 'wire': return w.getMeta(x, y, z) & 15;
      case 'torch': return id === this.ids.litTorch ? 15 : 0;
      case 'lever': case 'button': case 'plate': return (w.getMeta(x, y, z) & 8) ? 15 : 0;
      case 'block': return 15;
      case 'repeater': {
        const m = w.getMeta(x, y, z);
        if (!(m & 4)) return 0;
        const D = DIRS[RS_DIR4[m & 3]];
        return (D[0] === dx && D[2] === dz) ? 15 : 0;
      }
      default: return 0;   // 门 / 活板门 / 音符盒 / TNT 只是信号消费者
    }
  },

  // 实体方块被"强充能"后持有的信号强度。skipKey 用于排除自身（防止火把给自己供电）
  conductorPower(w, x, y, z, skipKey) {
    const id = w.getBlock(x, y, z);
    if (!id || !SOLIDCUBE[id] || BLOCKS[id].rs) return 0;
    let best = 0;
    for (let i = 0; i < 6; i++) {
      const D = DIRS[i];
      const nx = x + D[0], ny = y + D[1], nz = z + D[2];
      if (ny < 0 || ny >= HEIGHT) continue;
      if (skipKey !== undefined && skipKey === rsKey(nx, ny, nz)) continue;
      const sid = w.getBlock(nx, ny, nz);
      if (!sid) continue;
      const sk = BLOCKS[sid].rs;
      if (!sk || sk === 'wire' || sk === 'door' || sk === 'trapdoor' || sk === 'note' || sk === 'tnt' || sk === 'lamp') continue;
      const m = w.getMeta(nx, ny, nz);
      if (sk === 'torch') {
        if (sid !== this.ids.litTorch) continue;
        // 火把强充能它上方的方块，也充能被它附着的方块
        const above = (nx === x && ny + 1 === y && nz === z);
        let attached = false;
        const d = attachDir(m);
        if (d >= 0) { const A = DIRS[d]; attached = (nx + A[0] === x && ny + A[1] === y && nz + A[2] === z); }
        if (above || attached) best = 15;
      } else if (sk === 'lever' || sk === 'button') {
        if (!(m & 8)) continue;
        let attached = false;
        const d = attachDir(m);
        if (d >= 0) { const A = DIRS[d]; attached = (nx + A[0] === x && ny + A[1] === y && nz + A[2] === z); }
        else attached = (nx === x && ny - 1 === y && nz === z);
        if (attached) best = 15;
      } else if (sk === 'plate') {
        if ((m & 8) && nx === x && ny - 1 === y && nz === z) best = 15;
      } else if (sk === 'block') {
        best = 15;
      } else if (sk === 'repeater') {
        if (!(m & 4)) continue;
        const D2 = DIRS[RS_DIR4[m & 3]];
        if (nx + D2[0] === x && ny + D2[1] === y && nz + D2[2] === z) best = 15;
      }
    }
    return best;
  },

  // 方块 (sx,sy,sz) 输送到相邻方块 (tx,ty,tz) 的信号强度
  powerFrom(w, sx, sy, sz, tx, ty, tz) {
    const id = w.getBlock(sx, sy, sz);
    if (!id) return 0;
    const b = BLOCKS[id];
    if (b.rs === 'wire') return w.getMeta(sx, sy, sz) & 15;
    if (b.rs) return this.emit(w, sx, sy, sz, tx - sx, ty - sy, tz - sz);
    if (SOLIDCUBE[id]) return this.conductorPower(w, sx, sy, sz);
    return 0;
  },

  // 位置 (x,y,z) 收到的信号（给机制方块与红石线用）
  powerAt(w, x, y, z) {
    let best = 0;
    for (let i = 0; i < 6; i++) {
      const D = DIRS[i];
      const ny = y + D[1];
      if (ny < 0 || ny >= HEIGHT) continue;
      const p = this.powerFrom(w, x + D[0], ny, z + D[2], x, y, z);
      if (p > best) best = p;
    }
    return best;
  },

  // 红石线自身的"外部供电"（非导线邻居）
  wireBase(w, x, y, z) {
    let best = 0;
    for (let i = 0; i < 6; i++) {
      const D = DIRS[i];
      const nx = x + D[0], ny = y + D[1], nz = z + D[2];
      if (ny < 0 || ny >= HEIGHT) continue;
      const id = w.getBlock(nx, ny, nz);
      if (!id) continue;
      const b = BLOCKS[id];
      if (b.rs === 'wire') continue;
      if (b.rs) { const e = this.emit(w, nx, ny, nz, -D[0], -D[1], -D[2]); if (e > best) best = e; continue; }
      if (SOLIDCUBE[id]) { const p = this.conductorPower(w, nx, ny, nz); if (p > best) best = p; }
    }
    return best;
  },

  // 求解整张相连的红石线网络（多源 BFS，两格之间 -1）
  solveWire(w, seeds) {
    const net = new Map(), stack = [];
    for (const s of seeds) stack.push(s);
    while (stack.length && net.size < 8192) {
      const p = stack.pop();
      const key = rsKey(p[0], p[1], p[2]);
      if (net.has(key)) continue;
      if (w.getBlock(p[0], p[1], p[2]) !== this.ids.wire) continue;
      net.set(key, p);
      for (let i = 0; i < 4; i++) {
        const D = DIRS[RS_DIR4[i]];
        stack.push([p[0] + D[0], p[1], p[2] + D[2]]);
      }
    }
    if (!net.size) return;
    const power = new Map(), buckets = [];
    for (let i = 0; i <= 15; i++) buckets.push([]);
    for (const [key, p] of net) {
      const l = this.wireBase(w, p[0], p[1], p[2]);
      power.set(key, l);
      if (l > 0) buckets[l].push(key);
    }
    for (let lvl = 15; lvl > 0; lvl--) {
      const bucket = buckets[lvl];
      for (let i = 0; i < bucket.length; i++) {
        const key = bucket[i];
        if (power.get(key) !== lvl) continue;
        const p = net.get(key);
        for (let d = 0; d < 4; d++) {
          const D = DIRS[RS_DIR4[d]];
          const nk = rsKey(p[0] + D[0], p[1], p[2] + D[2]);
          if (!net.has(nk)) continue;
          if (lvl - 1 > (power.get(nk) || 0)) { power.set(nk, lvl - 1); buckets[lvl - 1].push(nk); }
        }
      }
    }
    for (const [key, p] of net) {
      const lv = power.get(key) || 0;
      if ((w.getMeta(p[0], p[1], p[2]) & 15) === lv) continue;
      w.setMeta(p[0], p[1], p[2], lv);
      // 整张网络已经解完，只需要唤醒相邻的机制方块（导线自己不用再入队）
      for (let i = 0; i < 6; i++) {
        const D = DIRS[i];
        const nx = p[0] + D[0], ny = p[1] + D[1], nz = p[2] + D[2];
        if (ny < 0 || ny >= HEIGHT) continue;
        const nid = w.getBlock(nx, ny, nz);
        if (!nid) continue;
        const nk = BLOCKS[nid].rs;
        if (nk && nk !== 'wire') this.enqueue(nx, ny, nz);
      }
    }
  },

  // ---- 更新队列 -----------------------------------------------------------
  enqueue(x, y, z) {
    if (y < 0 || y >= HEIGHT) return;
    const key = rsKey(x, y, z);
    const c = this.queue.get(key) || 0;
    if (c > 48) return;                    // 振荡保护
    this.queue.set(key, c + 1);
  },

  // 附近完全没有红石元件时直接返回，普通方块更新几乎零开销
  onNeighborUpdate(x, y, z) {
    const w = this.world; if (!w) return;
    let relevant = false;
    const id = w.getBlock(x, y, z);
    if (id && BLOCKS[id].rs) relevant = true;
    if (!relevant) {
      for (let i = 0; i < 6; i++) {
        const D = DIRS[i];
        const nid = w.getBlock(x + D[0], y + D[1], z + D[2]);
        if (nid && BLOCKS[nid].rs) { relevant = true; break; }
      }
    }
    if (!relevant) return;
    this.enqueue(x, y, z);
    for (let i = 0; i < 6; i++) {
      const D = DIRS[i];
      this.enqueue(x + D[0], y + D[1], z + D[2]);
    }
  },

  // 元件状态改变后手动唤醒周围。
  // 电源通过实体方块"强充能"再驱动更远的机制/导线，所以这里要沿着实体方块多传一层。
  notify(x, y, z) {
    const w = this.world;
    this.enqueue(x, y, z);
    for (let i = 0; i < 6; i++) {
      const D = DIRS[i];
      const nx = x + D[0], ny = y + D[1], nz = z + D[2];
      this.enqueue(nx, ny, nz);
      if (!w) continue;
      const id = w.getBlock(nx, ny, nz);
      if (!id || !SOLIDCUBE[id] || BLOCKS[id].rs) continue;
      for (let j = 0; j < 6; j++) {
        const E = DIRS[j];
        this.enqueue(nx + E[0], ny + E[1], nz + E[2]);
      }
    }
  },

  // 立刻处理队列（放置/交互后让电路即时响应）
  flush(limit = 512) { this.process(limit); },

  // 每 game tick 调用
  tick() {
    this.tickPlates();
    this.process(this.budget);
  },

  process(limit) {
    const w = this.world;
    if (!w || !this.queue.size) return;
    let n = 0;
    while (this.queue.size && n < limit) {
      const first = this.queue.keys().next();
      if (first.done) break;
      const key = first.value;
      this.queue.delete(key);
      const [x, y, z] = key.split(',');
      this.updateBlock(w, +x, +y, +z);
      n++;
    }
    if (this.queue.size > 8192) this.queue.clear();
  },

  onScheduledTick(x, y, z) {
    const w = this.world; if (!w) return;
    const id = w.getBlock(x, y, z); if (!id) return;
    const k = BLOCKS[id].rs;
    if (k === 'button') {
      const m = w.getMeta(x, y, z);
      if (m & 8) { w.setMeta(x, y, z, m & ~8); Sound.redstone([x + 0.5, y + 0.5, z + 0.5], false); this.notify(x, y, z); }
      return;
    }
    if (k === 'repeater') {
      const key = rsKey(x, y, z);
      if (!this.pending.has(key)) { this.updateBlock(w, x, y, z); return; }
      const want = this.pending.get(key);
      this.pending.delete(key);
      const m = w.getMeta(x, y, z);
      const nm = want ? (m | 4) : (m & ~4);
      if (nm !== m) { w.setMeta(x, y, z, nm); Sound.redstone([x + 0.5, y + 0.5, z + 0.5], !!want); this.notify(x, y, z); }
      return;
    }
    this.updateBlock(w, x, y, z);
  },

  // ---- 单个方块的元件逻辑 -------------------------------------------------
  updateBlock(w, x, y, z) {
    if (!w.isLoaded(x, z)) return;
    const id = w.getBlock(x, y, z);
    if (!id) return;
    const k = BLOCKS[id].rs;
    if (!k) return;
    switch (k) {
      case 'wire': this.solveWire(w, [[x, y, z]]); break;
      case 'torch': this.updateTorch(w, x, y, z, id); break;
      case 'lamp': this.updateLamp(w, x, y, z, id); break;
      case 'repeater': this.updateRepeater(w, x, y, z); break;
      case 'door': this.updateDoor(w, x, y, z); break;
      case 'trapdoor': this.updateTrapdoor(w, x, y, z); break;
      case 'note': this.updateNote(w, x, y, z); break;
      case 'tnt': this.updateTNT(w, x, y, z); break;
      case 'button': {
        // 存档/读档后可能丢掉"自动弹起"的计划，这里自愈
        const m = w.getMeta(x, y, z);
        if ((m & 8) && !w.ticks.has(rsKey(x, y, z))) { w.setMeta(x, y, z, m & ~8); this.notify(x, y, z); }
        break;
      }
      case 'plate': {
        // 存档/读档后可能残留"被踩下"的状态，没人站在上面就弹起
        const m = w.getMeta(x, y, z);
        if ((m & 8) && !this.entityOnPlate(x, y, z)) {
          w.setMeta(x, y, z, m & ~8);
          this.plates.delete(rsKey(x, y, z));
          this.notify(x, y, z);
        }
        break;
      }
      // lever 由玩家驱动
    }
  },

  updateTorch(w, x, y, z, id) {
    const meta = w.getMeta(x, y, z), d = attachDir(meta);
    const S = d >= 0 ? DIRS[d] : [0, -1, 0];
    const sx = x + S[0], sy = y + S[1], sz = z + S[2];
    const supported = sy >= 0 && sy < HEIGHT && !!SOLIDCUBE[w.getBlock(sx, sy, sz)];
    let lit;
    if (!supported) lit = false;
    else lit = this.conductorPower(w, sx, sy, sz, rsKey(x, y, z)) === 0;
    const isLit = id === this.ids.litTorch;
    if (lit === isLit) return;
    w.setBlock(x, y, z, lit ? this.ids.litTorch : this.ids.torch, meta & 7, 0);
    Sound.redstone([x + 0.5, y + 0.5, z + 0.5], lit);
    this.notify(x, y, z);
  },

  updateLamp(w, x, y, z, id) {
    const on = this.powerAt(w, x, y, z) > 0;
    const isOn = id === this.ids.litLamp;
    if (on === isOn) return;
    w.setBlock(x, y, z, on ? this.ids.litLamp : this.ids.lamp, 0, 0);
    Sound.redstone([x + 0.5, y + 0.5, z + 0.5], on);
  },

  updateRepeater(w, x, y, z) {
    const m = w.getMeta(x, y, z);
    const D = DIRS[RS_DIR4[m & 3]];
    // 中继器只从背面取信号（侧面 / 前面不通）
    const input = this.powerFrom(w, x - D[0], y, z - D[2], x, y, z) > 0 ? 1 : 0;
    const cur = (m & 4) ? 1 : 0;
    if (input === cur) return;
    this.pending.set(rsKey(x, y, z), input);
    w.schedule(x, y, z, 2);
  },

  updateDoor(w, x, y, z) {
    const meta = w.getMeta(x, y, z);
    const base = (meta & 8) ? y - 1 : y;
    if (base < 0) return;
    const bm = w.getMeta(x, base, z);
    const powered = this.powerAt(w, x, base, z) > 0;
    const open = !!(bm & 4), byRs = !!(bm & 16);
    const wantOpen = powered ? true : (byRs ? false : open);
    const nm = (bm & ~20) | (wantOpen ? 4 : 0) | (powered ? 16 : 0);
    if (nm === bm) return;
    w.setMeta(x, base, z, nm);
    if (w.getBlock(x, base + 1, z) === w.getBlock(x, base, z)) w.setMeta(x, base + 1, z, nm | 8);
    Sound.door([x, base, z], wantOpen);
  },

  updateTrapdoor(w, x, y, z) {
    const m = w.getMeta(x, y, z);
    const powered = this.powerAt(w, x, y, z) > 0;
    const open = !!(m & 4), byRs = !!(m & 16);
    const wantOpen = powered ? true : (byRs ? false : open);
    const nm = (m & ~20) | (wantOpen ? 4 : 0) | (powered ? 16 : 0);
    if (nm === m) return;
    w.setMeta(x, y, z, nm);
    Sound.door([x, y, z], wantOpen);
  },

  updateNote(w, x, y, z) {
    const m = w.getMeta(x, y, z);
    const powered = this.powerAt(w, x, y, z) > 0;
    const was = !!(m & 32);
    if (powered === was) return;
    w.setMeta(x, y, z, powered ? (m | 32) : (m & ~32));
    if (!powered) return;
    const pitch = m & 31;
    Sound.note([x + 0.5, y + 0.5, z + 0.5], pitch);
    const g = this.game;
    if (g && g.particles) g.particles.spawn('note', x + 0.5, y + 1.2, z + 0.5, 0, 0.02, 0,
      { col: [255, Math.round(pitch * 10), Math.round(255 - pitch * 10)] });
  },

  updateTNT(w, x, y, z) {
    if (this.powerAt(w, x, y, z) <= 0) return;
    const g = this.game;
    if (!g || g.state !== 'play') return;
    w.setBlock(x, y, z, 0, 0, 0);
    g.entities.push(new PrimedTNT(g, x, y, z));
  },

  // ---- 玩家交互 -----------------------------------------------------------
  toggleLever(x, y, z) {
    const w = this.world; if (!w) return false;
    const id = w.getBlock(x, y, z);
    if (!id || BLOCKS[id].rs !== 'lever') return false;
    const m = w.getMeta(x, y, z);
    w.setMeta(x, y, z, m ^ 8);
    Sound.redstone([x + 0.5, y + 0.5, z + 0.5], !(m & 8));
    this.notify(x, y, z);
    this.flush();
    return true;
  },

  pressButton(x, y, z) {
    const w = this.world; if (!w) return false;
    const id = w.getBlock(x, y, z);
    if (!id) return false;
    const b = BLOCKS[id];
    if (b.rs !== 'button') return false;
    const m = w.getMeta(x, y, z);
    if (m & 8) return false;
    w.setMeta(x, y, z, m | 8);
    w.schedule(x, y, z, id === this.ids.oakButton ? 15 : 20);
    Sound.redstone([x + 0.5, y + 0.5, z + 0.5], true);
    this.notify(x, y, z);
    this.flush();
    return true;
  },

  // ---- 压力板：每 tick 检查站在板上的实体 ---------------------------------
  // 某个实体是否正压在这块板子上
  entityOnPlate(x, y, z) {
    const g = this.game;
    if (!g) return false;
    const test = (e) => {
      if (!e || e.dead || !e.pos || typeof e.box !== 'function') return false;
      const box = e.box();
      return box[0] < x + 15 / 16 && box[3] > x + 1 / 16 &&
        box[2] < z + 15 / 16 && box[5] > z + 1 / 16 &&
        box[1] < y + 2 / 16 + 0.002 && box[4] > y;
    };
    if (test(g.player)) return true;
    for (const e of g.entities) if (test(e)) return true;
    return false;
  },

  tickPlates() {
    const g = this.game, w = this.world;
    if (!g || !w || g.state !== 'play' || !g.player) return;
    const want = new Set();
    const ids = this.ids;
    const check = (x, y, z, box) => {
      const id = w.getBlock(x, y, z);
      if (id !== ids.stonePlate && id !== ids.oakPlate) return;
      // 板子占 [x+1/16, z+1/16, y] .. [x+15/16, z+15/16, y+2/16]
      if (box[0] < x + 15 / 16 && box[3] > x + 1 / 16 &&
        box[2] < z + 15 / 16 && box[5] > z + 1 / 16 &&
        box[1] < y + 2 / 16 + 0.002 && box[4] > y) want.add(rsKey(x, y, z));
    };
    const scan = (e) => {
      if (!e || e.dead || !e.pos) return;
      const box = e.box();
      const x0 = Math.floor(box[0]), x1 = Math.floor(box[3]);
      const z0 = Math.floor(box[2]), z1 = Math.floor(box[5]);
      const y0 = Math.max(0, Math.floor(box[1] - 0.001)), y1 = Math.floor(box[1] + 0.2);
      for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) check(x, y, z, box);
    };
    scan(g.player);
    for (const e of g.entities) scan(e);
    for (const key of want) {
      const [x, y, z] = key.split(',').map(Number);
      const m = w.getMeta(x, y, z);
      if (m & 8) continue;
      w.setMeta(x, y, z, m | 8);
      Sound.redstone([x + 0.5, y + 0.5, z + 0.5], true);
      this.notify(x, y, z);
    }
    for (const key of [...this.plates]) {
      if (want.has(key)) continue;
      const [x, y, z] = key.split(',').map(Number);
      const id = w.getBlock(x, y, z);
      if (id !== ids.stonePlate && id !== ids.oakPlate) { this.plates.delete(key); continue; }
      const m = w.getMeta(x, y, z);
      if (m & 8) {
        w.setMeta(x, y, z, m & ~8);
        Sound.redstone([x + 0.5, y + 0.5, z + 0.5], false);
        this.notify(x, y, z);
      }
      this.plates.delete(key);
    }
    for (const key of want) this.plates.add(key);
  },
};

// blocks.js 已加载，这里缓存元件 id
Redstone.ids = {
  wire: BID.redstone_wire, torch: BID.redstone_torch, litTorch: BID.lit_redstone_torch,
  lever: BID.lever, stoneButton: BID.stone_button, oakButton: BID.oak_button,
  stonePlate: BID.stone_pressure_plate, oakPlate: BID.oak_pressure_plate,
  lamp: BID.redstone_lamp, litLamp: BID.lit_redstone_lamp, repeater: BID.repeater,
};
// 供 mesher 判断红石线的连接形状
const RS_CONNECT = {};
for (const k of ['wire', 'torch', 'lever', 'button', 'lamp', 'repeater', 'block']) RS_CONNECT[k] = 1;
