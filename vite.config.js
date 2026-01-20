import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: 'public', // Ensures Vite looks into the public folder
  build: {
    outDir: 'dist',
    copyPublicDir: true, // Guarantees _redirects is copied to dist/
    chunkSizeWarningLimit: 1000, // Raises limit to 1MB to reduce warnings
    rollupOptions: {
      output: {
        // Optimization: Splitting large libraries into their own files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui')) return 'vendor-mui';
            if (id.includes('three')) return 'vendor-three';
            if (id.includes('gsap')) return 'vendor-gsap';
            return 'vendor'; // all other dependencies
          }
        },
      },
    },
  },
})