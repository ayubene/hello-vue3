import { createRouter,createWebHistory } from "vue-router";
import Props from '@/pages/01-props/Parent.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props
        }
    ]
})

// export default router