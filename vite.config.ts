import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serve o app em /moneylance-frontend/
  base: '/moneylance-frontend/',
  plugins: [
    react(),
    // Service worker: guarda o app no aparelho para abrir mesmo sem internet
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      // O manifesto já existe em public/manifest.webmanifest e é linkado no index.html
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2,webmanifest}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})
