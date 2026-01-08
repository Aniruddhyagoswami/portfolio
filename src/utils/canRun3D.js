export async function canRun3D() {
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')

    if (!gl) return false

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (!debugInfo) return true // allow if extension unavailable (Safari/iOS)

    const renderer = gl
      .getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      .toLowerCase()

    /* ---------------- HARD BLOCK (ONLY THESE) ---------------- */

    if (
      renderer.includes('swiftshader') ||
      renderer.includes('llvmpipe') ||
      renderer.includes('software') ||
      renderer.includes('angle (software)')
    ) {
      return false
    }

    /* ---------------- GPU TIERS ---------------- */

    let tier = 'mid'

    // Very weak GPUs
    if (
      renderer.includes('adreno 3') ||
      renderer.includes('adreno 4') ||
      renderer.includes('mali-400') ||
      renderer.includes('mali-450') ||
      renderer.includes('mali-t') ||
      renderer.includes('powervr sgx')
    ) {
      tier = 'low'
    }

    // Strong GPUs
    if (
      renderer.includes('adreno 6') ||
      renderer.includes('adreno 7') ||
      renderer.includes('mali-g5') ||
      renderer.includes('mali-g6') ||
      renderer.includes('apple') ||
      renderer.includes('nvidia') ||
      renderer.includes('radeon')
    ) {
      tier = 'high'
    }

    /* ---------------- MEMORY SAFETY ---------------- */

    const ram = navigator.deviceMemory || 4

    if (tier === 'low' && ram < 4) {
      return false
    }

    /* ---------------- FPS PROBE (RELAXED) ---------------- */

    let frames = 0
    const start = performance.now()

    return await new Promise((resolve) => {
      function loop() {
        frames++
        if (performance.now() - start < 1200) {
          requestAnimationFrame(loop)
        } else {
          const fps = frames / 1.2

          // thresholds per tier
          if (tier === 'low') resolve(fps >= 20)
          if (tier === 'mid') resolve(fps >= 24)
          if (tier === 'high') resolve(true)
        }
      }
      requestAnimationFrame(loop)
    })
  } catch {
    return true // fail open (better UX)
  }
}
