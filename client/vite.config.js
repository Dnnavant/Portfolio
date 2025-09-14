import { defineConfig } from 'vite'
import path from 'node:path'

// Vite configuration
// - Sets up a proxy so calls to `/api/*` go to the Express server on 3001
// - Helpful during development so the contact form works without CORS hassles
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

