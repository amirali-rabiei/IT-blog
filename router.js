import { createWebHistory, createRouter } from 'vue-router'
import Login from './src/pages/Login.vue'
import Index from './src/components/Index.vue'


const routes = [
    {
        path: '/travel-agency-landing',
        name: 'index',
        component: Index
    },
    {
        path: '/travel-agency-landing/login',
        name: 'login',
        component: Login
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router