import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@api': '/src/api',
      '@store': '/src/store'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/forward.scss";`,
      },
    },
  },
>>>>>>> 43adfa9c78613ca56820d96c196b09c21cdc697a
})
