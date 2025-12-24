import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Proxy configuration for development
  // This allows the dev server to proxy API requests
  // In production, Vercel serverless functions handle this
  server: {
    proxy: {
      '/api/sales-data': {
        target: 'http://74.225.26.105:8000',
        changeOrigin: true,
        rewrite: (path) => {
          // Rewrite /api/sales-data to /salecomparison/lmtd/gsm
          return '/salecomparison/lmtd/gsm';
        },
      },
    },
  },
})
