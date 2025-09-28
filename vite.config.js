import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TestApp/',
  server: {
    host: true,
    port: 3000,
    open: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 3000,
      path: '/TestApp/'
    }
  },
  preview: { port: 3000 }
})