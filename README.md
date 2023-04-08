<<<<<<< HEAD
# 使用 Vite 搭建 Vue3 + Typescripe + TSX 项目



## 1. 安装启动项目

```bash
pnpm create vite
```

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/Snipaste_2023-02-28_16-09-10.png" alt="Snipaste_2023-02-28_16-09-10" width="600px"></center>



## 2. 安装 router

[vue-router 官网](https://router.vuejs.org/zh/introduction.html)

**1. 安装**

```bash
pnpm add vue-router
```

**2. 使用**

src 目录下新建 router/index.ts

```ts
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Home } from '@/views/Home'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
```

main.ts

```tsx
import { createApp } from 'vue'
import App from './App'
import 'virtual:svg-icons-register'
import router from '@/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
```





## 3.安装 Pinia

[pinia 官网](https://pinia.vuejs.org/getting-started.html)

**1. 安装**

```bash
pnpm add pinia
```

**2. 配置**

在 `main.ts` 中添加

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/20230408222204.png" alt="20230408222204" width="600px"></center>

**3. 使用**

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/20230408222651.png" alt="20230408222651" width="600px"></center>



```tsx
// store/useCounterStore.ts

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
```









## 4. 配置 Eslint

使用 antfu 的配置：[antfu](https://github.com/antfu)/**[eslint-config](https://github.com/antfu/eslint-config)**

**1. 安装：**

```base
pnpm add -D eslint @antfu/eslint-config
```

**2. 配置 `.eslintrc`**

根目录下创建 `.eslintrc`

```bash
{
  "extends": "@antfu"
}
```

**3. 配置 VS Code 自动修正**

需要安装插件[VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 安装完成后，在根目录创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



## 5. 配置别名

**1. 修改vite.config.ts**

```js
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```



<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/Snipaste_2023-02-28_17-54-31.png" alt="Snipaste_2023-02-28_17-54-31" width="600px"></center>

**2. 修改 tsconfig.json**

```js
{
  "compilerOptions": {
	...
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
    ...
  }
}
```



## 6. 配置 JSX

**1. 安装** [@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)

```bash
pnpm i @vitejs/plugin-vue-jsx -D
```

**2. 配置** vite.config.ts

```bash
...
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 更多配置项：https://github.com/vuejs/babel-plugin-jsx#options
    vueJsx({ transformOn: true }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```



## 7.封装通用 Icon 插件

**1. 安装插件**：**[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)**

```
pnpm install vite-plugin-svg-icons -D
```

**2.配置** vite.config.ts

```ts
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
```

在 `main.ts` 中引入

```js
import 'virtual:svg-icons-register'
```



**使用：封装一个 Icon 组件**

```tsx
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Name = 'right' | 'left'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<Name>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class="icon" aria-hidden="true">
        <use xlink:href={`#icon-${props.name}`}></use>
      </svg >
    )
  },
})


// 使用
<Icon name='right' />
```




































=======


# 使用 Vite 搭建 Vue3 + Typescripe + TSX 项目



## 1. 安装启动项目

```bash
pnpm create vite
```

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/Snipaste_2023-02-28_16-09-10.png" alt="Snipaste_2023-02-28_16-09-10" width="600px"></center>



## 2. 安装 router

[vue-router 官网](https://router.vuejs.org/zh/introduction.html)

**1. 安装**

```bash
pnpm add vue-router
```

**2. 使用**

src 目录下新建 router/index.ts

```ts
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Home } from '@/views/Home'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
```

main.ts

```tsx
import { createApp } from 'vue'
import App from './App'
import 'virtual:svg-icons-register'
import router from '@/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
```





## 3.安装 Pinia

[pinia 官网](https://pinia.vuejs.org/getting-started.html)

**1. 安装**

```bash
pnpm add pinia
```

**2. 配置**

在 `main.ts` 中添加

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/20230408222204.png" alt="20230408222204" width="600px"></center>

**3. 使用**

<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/20230408222651.png" alt="20230408222651" width="600px"></center>



```tsx
// store/useCounterStore.ts

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
```









## 4. 配置 Eslint

使用 antfu 的配置：[antfu](https://github.com/antfu)/**[eslint-config](https://github.com/antfu/eslint-config)**

**1. 安装：**

```base
pnpm add -D eslint @antfu/eslint-config
```

**2. 配置 `.eslintrc`**

根目录下创建 `.eslintrc`

```bash
{
  "extends": "@antfu"
}
```

**3. 配置 VS Code 自动修正**

需要安装插件[VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 安装完成后，在根目录创建 `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```



## 5. 配置别名

**1. 修改vite.config.ts**

```js
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```



<center><img src="https://cdn.jsdelivr.net/gh/Drwna/image//images/Snipaste_2023-02-28_17-54-31.png" alt="Snipaste_2023-02-28_17-54-31" width="600px"></center>

**2. 修改 tsconfig.json**

```js
{
  "compilerOptions": {
	...
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
    ...
  }
}
```



## 6. 配置 JSX

**1. 安装** [@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)

```bash
pnpm i @vitejs/plugin-vue-jsx -D
```

**2. 配置** vite.config.ts

```bash
...
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 更多配置项：https://github.com/vuejs/babel-plugin-jsx#options
    vueJsx({ transformOn: true }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```



## 7.封装通用 Icon 插件

**1. 安装插件**：**[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)**

```
pnpm install vite-plugin-svg-icons -D
```

**2.配置** vite.config.ts

```ts
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
```

在 `main.ts` 中引入

```js
import 'virtual:svg-icons-register'
```



**使用：**封装一个 Icon 组件

```tsx
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Name = 'right' | 'left'

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<Name>,
      required: true,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class="icon" aria-hidden="true">
        <use xlink:href={`#icon-${props.name}`}></use>
      </svg >
    )
  },
})


// 使用
<Icon name='right' />
```




































>>>>>>> f2abb551b9e4925d0293734c04f0f0cd56cf55ce





