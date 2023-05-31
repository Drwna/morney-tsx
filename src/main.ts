import { createApp } from 'vue'
import 'virtual:svg-icons-register'

import App from '@/App'
import pinia from '@/store'
import router from '@/router'

import './styles/reset.css'
import './styles/index.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
