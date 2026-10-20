# public/proto/bg/ —— 首页第一屏（WELCOME）背景图

把背景图放到这里，文件名固定为 **`welcome.png`**，替换掉现在的透明占位图即可生效。

- 生效路径：`/proto/bg/welcome.png`（站点绝对路径）。
- 换图后跑一次 `pnpm build`（或 `preview.bat`）刷新就能看到。
- 因为画布是**透明**的（`alpha: true`、场景无背景色/雾），图片会出现在三维字母的背后，
  不用改任何三维代码。

## 建议

- **尺寸**：宽 1920–2560px 足够（会被 `background-size: cover` 裁切，长边再大收益很低）。
- **体积**：尽量 **< 1 MB**（首页首屏已经在加载 1.9 MB 的 three，背景图别再加太多）。
  单张 **> 25 MiB 会被 Cloudflare Pages 拒收**（单文件硬上限）。
- **明暗**：字母是浅色的，背景**偏暗**对比最好；如果图偏亮，可在图片上叠一层暗罩
  （或在 `home.html` 的 `.stage` 规则里加 `background-color` 兜底 + 一个半透明遮罩层）。
- 想换格式（webp/jpg 更省体积）也可以，把 `home.html` 里那句
  `background-image: url('/proto/bg/welcome.png')` 换成对应文件名即可。
