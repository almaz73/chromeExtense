import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

let app = createApp(App)
app.use(ElementPlus)
app.mount('#app')