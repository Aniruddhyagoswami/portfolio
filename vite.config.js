import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    tailwindcss(),
  ],

  publicDir: 'public',

  build: {
    outDir: 'dist',
    copyPublicDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          // --- MUI + EMOTION ---
          if (
            id.includes('@mui') ||
            id.includes('@emotion')
          ) {
            return 'vendor-mui'
          }

          // --- THREE / R3F ---
          if (
            id.includes('three') ||
            id.includes('@react-three')
          ) {
            return 'vendor-three'
          }

          // --- GSAP ---
          if (id.includes('gsap')) {
            return 'vendor-gsap'
          }

          // --- ROUTER ---
          if (id.includes('react-router')) {
            return 'vendor-router'
          }

          // --- REACT + STATE (KEEP TOGETHER) ---
          if (
            id.includes('react') ||
            id.includes('scheduler') ||
            id.includes('zustand')
          ) {
            return 'vendor-react'
          }

          return 'vendor'
        },
      },
    },
  },
})
