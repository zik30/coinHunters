import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@api': '/src/api',
      '@store': '/src/store',
      '@shared': '/src/shared'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/forward.scss";`,
      },
    },
  },
})
