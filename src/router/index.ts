// 创建一个路由 并暴露出去

// 引入createRouter
import { createRouter,createWebHistory } from "vue-router";

// 引入可能要呈现的组件
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import News from "@/components/News.vue";

// 创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/home',
            component: Home
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/news',
            component: News
        },
    ]
})

// 暴露出去
export default router