import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // Ensures Emotion + React optimizations
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

          // --- UI STACK ---
          if (
            id.includes('@mui') ||
            id.includes('@emotion')
          ) {
            return 'vendor-mui'
          }

          // --- THREE / R3F STACK ---
          if (
            id.includes('three') ||
            id.includes('@react-three')
          ) {
            return 'vendor-three'
          }

          // --- ANIMATION ---
          if (id.includes('gsap')) {
            return 'vendor-gsap'
          }

          // --- STATE ---
          if (id.includes('zustand')) {
            return 'vendor-state'
          }

          // --- ROUTING ---
          if (id.includes('react-router')) {
            return 'vendor-router'
          }

          // --- REACT CORE ---
          if (
            id.includes('react') ||
            id.includes('scheduler')
          ) {
            return 'vendor-react'
          }

          // Everything else
          return 'vendor'
        },
      },
    },
  },
})
