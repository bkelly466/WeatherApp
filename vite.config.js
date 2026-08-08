import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
    files: './tests/**/*.test.jsx',
  },
  server: {
    proxy: {
      '/api': process.env.BACKEND_URL || 'http://localhost:5001',
    },
  },
})