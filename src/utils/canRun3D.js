export async function canRun3D() {
  // 1. WebGL check
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    if (!gl) return false

    // 2. GPU check
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (!debugInfo) return false

    const renderer = gl
      .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      .toLowerCase()

    // Block weak / mobile / software GPUs
    if (
      renderer.includes('swiftshader') ||
      renderer.includes('llvmpipe') ||
      renderer.includes('mali') ||
      renderer.includes('adreno') ||
      renderer.includes('intel hd')
    ) {
      return false
    }

    // 3. Quick FPS probe (~1.5s)
    let frames = 0
    const start = performance.now()

    return await new Promise((resolve) => {
      function loop() {
        frames++
        if (performance.now() - start < 1500) {
          requestAnimationFrame(loop)
        } else {
          const fps = frames / 1.5
          resolve(fps >= 40)
        }
      }
      requestAnimationFrame(loop)
    })
  } catch {
    return false
  }
}
