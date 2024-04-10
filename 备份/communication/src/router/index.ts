import { createRouter,createWebHistory } from "vue-router";
import emitter from "@/utils/emitter";
import Props from '@/pages/01-props/Parent.vue'
import CustomEvent from '@/pages/02-custom-event/Parent.vue'
import Mitt from '@/pages/03-mitt/Parent.vue'
import Vmodel from '@/pages/04-v-model/Parent.vue'
import Attrs from '@/pages/05-attrs/Parent.vue'
import Refs from '@/pages/06-refs-parent/Parent.vue'
import Provide from '@/pages/07-provide-inject/Parent.vue'
import Pinia from '@/pages/08-pinia/Parent.vue'
import Slot from '@/pages/09-slot/Parent.vue'


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
        {
            path: '/refs',
            component: Refs
        },
        {
            path: '/provide',
            component: Provide
        },
        {
            path: '/pinia',
            component: Pinia
        },
        {
            path: '/slot',
            component: Slot
        },
    ]
})

// export default router