import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: ['mac.memant.net'],
    host: '0.0.0.0',
    port: 8000
  }
})
