// 引入createApp创建应用
import { createApp } from "vue";
//  引入APP根组件
import App from './App.vue'

// 引入pinia
import { createPinia } from "pinia";
// 引入路由器
// import router from "./router";
// 创建一个应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 使用路由器
// app.use(router)

// 安装pinia
app.use(pinia)
// 挂载应用到app容器
app.mount('#app')

