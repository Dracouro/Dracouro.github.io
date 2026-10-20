# 米米世界.exe（嵌入的 Minecraft 复刻作品）

首页点 WELCOME 字母 → 字母围成圆环 → 中间的方块图标就是进入这里的入口。

- **来源**：[X1aoZhe/OpusMC](https://github.com/X1aoZhe/OpusMC)（`OpusMC-main` 存档）
- **内容**：纯 JavaScript + WebGL2 从零实现的 Minecraft 复刻版，无引擎、无第三方库
- **本地改动**（与原作存档的差异，共三处）：
  1. `<title>` 改成「米米世界.exe」，与首页入口标签一致；
  2. 加了右上角「← 返回网站」出口（鼠标被 Pointer Lock 抓走时自动变灰、不可点）；
  3. `js/redstone.js`、`js/textures.js` 是本仓库补的红石系统（原作没有红石），
     同时修改了 `js/blocks.js` / `js/mesher.js` / `js/game.js` / `js/world.js` /
     `js/render.js` / `js/audio.js` / `js/screens.js` 以接入它。
- **自检**：红石那套逻辑带脚本 —— `node tools/redstone_selftest.cjs`（在配套的开发仓库里）。

## 许可

- `js/` 下除 `js/assets.js` 以外的源码：MIT（见同目录 `LICENSE`），版权归原作者 X1aoZhe。
- `js/assets.js` 里的贴图 / GUI / 字体提取自 Minecraft 官方资源，版权归 **Mojang Studios /
  Microsoft**，**不**适用 MIT，仅为演示收录。如权利方要求，将予移除。
- 本作品为第三方非官方作品，与 Mojang / Microsoft 无关，未获其认可。
  "Minecraft" 是 Mojang Synergies AB 的商标。
