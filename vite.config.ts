import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serve o app em /moneylance-frontend/
  base: '/moneylance-frontend/',
  plugins: [react()],
})
