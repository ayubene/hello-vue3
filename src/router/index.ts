import { createRouter,createWebHistory } from "vue-router";
import emitter from "@/utils/emitter";
import Props from '@/pages/01-props/Parent.vue'
import CustomEvent from '@/pages/02-custom-event/Parent.vue'
import Mitt from '@/pages/03-mitt/Parent.vue'
import Vmodel from '@/pages/04-v-model/Parent.vue'
import Attrs from '@/pages/05-attrs/Parent.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props
        },
        {
            path: '/custom-event',
            component: CustomEvent
        },
        {
            path: '/mitt',
            component: Mitt
        },
        {
            path: '/v-model',
            component: Vmodel
        },
        {
            path: '/attrs',
            component: Attrs
        },
    ]
})

// export default router