/**
 * 布线（拓扑）查看器 —— 模型详情页的默认、也是唯一的视图。
 *
 * 为什么不用 model-viewer：
 *   model-viewer 这一版没有公开 wireframe 开关（源码里那 59 处 "wireframe" 全是
 *   three 内部材质字段），mv.model 是压缩包装类拿不到底层材质；而且它拒绝加载
 *   LINES 图元的 glb（加载时报 "Cannot read properties of null"）。
 *   所以这里干脆不用它，直接用 three.js 自己画。
 *
 * 画的是**面 + 特征边**：
 *   · 面 —— 中性黏土材质、只吃光照。**没有面就完全看不出形体**（用户 2026-09-20
 *     明确："线框之间的面还是需要保留的，我只是想展示布线，不是为了展示线框，
 *     这样完全无法看清模型的形状了"）。所以这是默认行为，不是可选项。
 *   · 线 —— **特征边** `EdgesGeometry(geo, edgeThreshold)`（默认 22°），叠在面上。
 *     ⚠️ 不用 `WireframeGeometry`：那是把 glb 里**每一个三角形**的边全画出来，高模（68k 面）
 *     会糊成一团剪影，看不清形体。只保留夹角超过阈值的边才是"看布线"。
 *   作者没写材质，站点要展示的正是"形体 + 布线"这两件事，与材质无关。
 *
 * 依赖（页面 importmap 指到 /vendor/three-wire/ 下的本地文件，零外部请求）：
 *   three / three/addons/loaders/GLTFLoader.js / three/addons/controls/OrbitControls.js
 *   three/addons/loaders/DRACOLoader.js（自托管，见下面 loader 那段注释）
 *
 * 导出 initTopology(canvas, src, opts) -> { reset, setAutoRotate, getAutoRotate, dispose }
 */
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export function initTopology(canvas, src, opts = {}) {
  const {
    theta = -28, // 初始方位角（度）
    phi = 70, // 初始俯仰角（度）
    /*
     * 模型**自身**的朝向修正（度，绕 X 轴）。默认 0 = 不动。
     *
     * 有的导出是 Z-up 的（Blender 里关掉 "+Y up" 那类），在 glTF 的 Y-up 世界里
     * 就是躺平的：从正面看只能看到它"顶面"。brim-hat-parts 就是这样 ——
     * theta/phi 是转**相机**的，转不出立起来的效果，必须把模型自己转回来，
     * 所以这里写 -90（绕 X 转 -90° 就是 Z-up → Y-up）。
     */
    modelRotX = 0,
    turntable = false, // 是否把上下转的角度锁在水平圈里
    zoom = false, // 是否允许缩放（默认关：模型页要的是稳住构图）
    autoRotate = false,
    /* 面：中性黏土。比纯白暗一点，边缘特征才看得出来 */
    faceColor = 0xd7dbe2,
    faceRoughness = 0.62,
    /*
     * 面的渲染面数。默认 'front'（背面剔除）。
     * 低模常见的坑：脸/身体是**单层薄壳**，正面剔除后从正面看就是一个洞
     * （tou2 星徽头盔就是，front 时脸上缺一块）。这类模型在 content 里写
     * `viewer.faceSide: double` 补上。代价是渲染量翻倍，高模不要开。
     */
    faceSide = 'front',
    /* 边：比面深、略带冷调；太亮会盖住面、太暗等于没画 */
    lineColor = 0x39506e,
    lineOpacity = 0.55, // 高模线很密，压一点透明度才看得出层次
    /* 特征边阈值（度）：只有两个相邻面夹角大于它才画线。
       不设阈值（0）会连共面的三角剖分线都画出来 —— 高模直接糊成一片。 */
    edgeThreshold = 22,
    onProgress = null, // (percent) => void
    onReady = null, // () => void
    onError = null, // (err) => void
  } = opts

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()

  /*
   * 光照：面要有形体就必须吃光。
   * 三个方向的组合最省事也最稳 —— 主光定调、补光提暗部、环境光兜底，
   * 不依赖任何环境贴图（那种要额外下 HDR，跟"零外部请求"冲突）。
   */
  scene.add(new THREE.AmbientLight(0xffffff, 0.55))
  const key = new THREE.DirectionalLight(0xffffff, 1.9)
  key.position.set(1, 1.4, 1.1)
  scene.add(key)
  const fill = new THREE.DirectionalLight(0xdfe8ff, 0.75)
  fill.position.set(-1.2, -0.4, -0.9)
  scene.add(fill)

  const camera = new THREE.PerspectiveCamera(40, 1, 0.001, 100000)

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.enableZoom = !!zoom
  controls.enablePan = false
  controls.rotateSpeed = 0.85
  /*
   * ⚠️ 这一行不能省。
   *
   * `autoRotate` 从参数里解构出来之后**必须落到 controls 上** —— 曾经漏了这一步：
   * 选项传进来了、`getAutoRotate()` 也照着 controls 读，于是 content 里写
   * `viewer.autoRotate: true` 时页面**不自转也不报错**，而按钮还显示"停止自转"
   * （按钮文案读的是 content，不是控制器）。一个纯粹由"漏写一行"造成的静默失效。
   *
   * 默认自转速度偏慢，0.6 是"看得出在转、又不抢注意力"的档位。
   */
  controls.autoRotate = !!autoRotate
  controls.autoRotateSpeed = 0.6
  if (turntable) {
    controls.minPolarAngle = THREE.MathUtils.degToRad(62)
    controls.maxPolarAngle = THREE.MathUtils.degToRad(96)
  }

  const faceMat = new THREE.MeshStandardMaterial({
    color: faceColor,
    roughness: faceRoughness,
    metalness: 0, // 全金属在没环境贴图的场景里就是一块黑，永远不要
    // 双面：薄壳低模的脸不会开洞（见上面的 faceSide 注释）
    side: faceSide === 'double' ? THREE.DoubleSide : THREE.FrontSide,
    /*
     * 共面打架：面要稍微"推远"一点，压在它上面的边线才不会被 z-fighting 切碎。
     * 用 polygonOffset 而不是调近裁剪面 —— 后者会影响整个场景的深度精度。
     */
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  })

  const lineMat = new THREE.LineBasicMaterial({
    color: lineColor,
    transparent: true,
    opacity: lineOpacity,
    depthWrite: false, // 布线是透视线框，不写深度 —— 线才不会互相遮挡出锯齿
  })

  /* 模型整体塞进这个 root：自转、重置、框算都以它为单位 */
  const root = new THREE.Group()
  scene.add(root)

  let lineCount = 0
  let meshCount = 0
  let disposed = false
  let raf = 0
  let base = { radius: 1, theta, phi }

  function resize() {
    const w = canvas.clientWidth || canvas.parentElement?.clientWidth || 1
    const h = canvas.clientHeight || canvas.parentElement?.clientHeight || 1
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(() => resize())
  ro.observe(canvas)
  resize()

  function placeCamera(radius, th, ph) {
    const sphere = new THREE.Spherical(
      radius,
      THREE.MathUtils.degToRad(ph),
      THREE.MathUtils.degToRad(th),
    )
    camera.position.setFromSpherical(sphere)
    controls.target.set(0, 0, 0)
    camera.lookAt(0, 0, 0)
    controls.update()
  }

  /**
   * 一个网格 → 面 + 边。
   *
   * 面：直接用原几何（**保留索引**，顶点数不变，高模上是省内存的一半），
   *     换成统一的黏土材质，并共享同一份材质实例（少几十个 draw call 的状态切换）。
   * 边：EdgesGeometry 只取夹角超过阈值的特征边 —— 高模的三角剖分线全画出来会糊成剪影。
   */
  function addMesh(mesh) {
    const geo = mesh.geometry
    if (!geo) return

    /* glTF 缺 NORMAL 时规范要求客户端自算；不算的话受光材质全黑（本项目 glb 实测踩过） */
    if (!geo.attributes.normal) geo.computeVertexNormals()

    const solid = new THREE.Mesh(geo, faceMat)
    /* 世界矩阵直接烘进对象，省掉一层节点遍历（线那边也是同样的处理，两者才对得齐） */
    solid.matrixAutoUpdate = false
    solid.matrix.copy(mesh.matrixWorld)
    root.add(solid)
    meshCount += 1

    let edges
    try {
      edges = new THREE.EdgesGeometry(geo, edgeThreshold)
    } catch (e) {
      console.warn('[topology] 特征边抽取失败，这个网格只画面', e)
      return
    }
    if (!edges.getAttribute('position')?.count) return

    const line = new THREE.LineSegments(edges, lineMat)
    line.matrixAutoUpdate = false
    line.matrix.copy(mesh.matrixWorld)
    root.add(line)
    lineCount += edges.getAttribute('position').count / 2
  }

  const loader = new GLTFLoader()

  /*
   * Draco 解码器 —— 高模压完就是这种格式（本仓实例：LILIYU_ 45.1 MiB → 1.50 MiB）。
   *
   * ⚠️ 解码器必须自托管在同目录下（libs/draco/）。DRACOLoader 的默认行为是去
   *    www.gstatic.com 取 —— 那等于给模型页加一个第三方可用性依赖，跟本文件开头
   *    "零外部请求" 的目标直接冲突（而且那个 CDN 在国内经常连不上）。
   *
   * ✅ 代价是零：GLTFLoader 是**按 `extensionsUsed` 逐个实例化扩展**的
   *    （见 loaders/GLTFLoader.js 第 392 行那个 for 循环），
   *    只有 glb 真的声明了 KHR_draco_mesh_compression 才会走到 preload()。
   *    没压过的模型挂上这个也只是个空壳，不会下那 250 KB 解码器。
   *
   * ⚠️ 三个解码器文件都不能少：draco_wasm_wrapper.js + draco_decoder.wasm 是正常路径，
   *    draco_decoder.js 只在浏览器不支持 wasm 时兜底（现代浏览器都会走 wasm 那条）。
   */
  const draco = new DRACOLoader()
  draco.setDecoderPath('/vendor/three-wire/libs/draco/')
  loader.setDRACOLoader(draco)

  loader.load(
    src,
    (gltf) => {
      if (disposed) return
      gltf.scene.updateMatrixWorld(true)
      gltf.scene.traverse((o) => {
        if (o.isMesh) addMesh(o)
      })
      window.__wireLines = lineCount
      window.__solidMeshes = meshCount

      /*
       * 模型朝向修正**必须在算包围盒之前**做：包围盒是从 root 的 matrixWorld 出的，
       * 先转后量，取景才是按"立起来"的那一版算的（顺序反了会按躺平版留出一堆空白）。
       *
       * root 的合成顺序是 T(position)·R(rotation)·M(子节点)，
       * 所以顶点 = R·M·v + position —— 下面那句 root.position.sub(center) 把
       * 已经旋转过的中心挪到原点，居中依然成立。
       */
      if (modelRotX) {
        root.rotation.x = THREE.MathUtils.degToRad(modelRotX)
        root.updateMatrixWorld(true)
      }

      /* 整个 root 居中：模型在 DCC 里带的偏移不该影响取景 */
      const box = new THREE.Box3().setFromObject(root)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const maxd = Math.max(size.x, size.y, size.z) || 1
      root.position.sub(center)

      camera.near = maxd / 500
      camera.far = maxd * 200
      camera.updateProjectionMatrix()

      const radius = (maxd / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.25
      base = { radius, theta, phi }
      placeCamera(radius, theta, phi)
      onReady?.()
    },
    (e) => {
      if (disposed || !e.total) return
      onProgress?.(Math.min(99, Math.round((e.loaded / e.total) * 100)))
    },
    (e) => {
      console.error('[topology] glb 加载失败', e)
      onError?.(e)
    },
  )

  function animate() {
    raf = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  return {
    reset() {
      placeCamera(base.radius, base.theta, base.phi)
    },
    setAutoRotate(on) {
      controls.autoRotate = !!on
    },
    getAutoRotate() {
      return controls.autoRotate
    },
    get lineCount() {
      return lineCount
    },
    get meshCount() {
      return meshCount
    },
    /**
     * 上一帧真正画了多少三角面。
     *
     * 这是"面到底有没有被画出来"最硬的判据 —— 比"数截图里的亮像素"可靠得多：
     * 亮像素占比取决于取景、模型在画面里的占比、背景亮度，换个模型就变一套阈值；
     * 而三角形数是渲染器自己数出来的。0 就一定是只剩线了。
     */
    get drawnTriangles() {
      return renderer.info.render.triangles
    },
    dispose() {
      disposed = true
      cancelAnimationFrame(raf)
      ro.disconnect()
      controls.dispose?.()
      root.traverse((o) => {
        /* 边线几何是本地的、要自己回收；面的几何来自 glb，由 GLTFLoader 那边管 */
        if (o.isLineSegments) o.geometry?.dispose?.()
      })
      scene.remove(root)
      /* 两个材质都是本模块自己建的共享实例，各回收一次 */
      faceMat.dispose()
      lineMat.dispose()
      /* 解码器 worker 也是本实例建的，不回收会跟着页面活下去 */
      draco.dispose?.()
      renderer.dispose()
    },
  }
}
