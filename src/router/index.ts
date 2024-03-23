// 创建一个路由 并暴露出去

// 引入createRouter
import { createRouter,createWebHistory } from "vue-router";

// 引入可能要呈现的组件
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";

// 创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name:'/nameHome',
            path:'/home',
            component: Home
        },
        {
            name:'/nameAbout',
            path:'/about',
            component: About
        },
        {
            path:'/news',
            component: News,
            children:[
                {
                    name:'detail',
                    path:'detail',
                    component:Detail,
                    // 方法1
                    // props:true
                    // 方法2
                    props(route) {
                        return route.query
                    }
                    // 方法3
                    // props:{
                    //     a:111,
                    //     b:222,
                    //     c:333,
                    // }
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

// 暴露出去
export default router