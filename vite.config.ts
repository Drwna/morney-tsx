import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 更多配置项：https://github.com/vuejs/babel-plugin-jsx#options
    vueJsx({ transformOn: true }),
  ],
})
