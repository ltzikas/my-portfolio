import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api/sendmail': {
        target: 'https://portfolio-mail-sender-dycbe6acc7brhucr.chilecentral-01.azurewebsites.net',
        changeOrigin: true,
      }
    }
  }
})