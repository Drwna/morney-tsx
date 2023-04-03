import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 更多配置项：https://github.com/vuejs/babel-plugin-jsx#options
    vueJsx({ transformOn: true }),
    createSvgIconsPlugin(
      {
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: {
          plugins: [
            { name: 'removeAttrs', params: { attrs: ['fill'] } },
          ],
        },
      },
    ),
  ],
})
