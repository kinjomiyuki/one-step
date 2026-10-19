import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 学習アプリ(/)と、LP(/lp/)の、2つの入口。LP は、コースのデータを読み込まず、軽く表示する
    rollupOptions: {
      input: {
        main: 'index.html',
        lp: 'lp/index.html',
      },
    },
  },
})
