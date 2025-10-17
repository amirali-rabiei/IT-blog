import { createWebHistory, createRouter } from 'vue-router'
import Index from './src/pages/Index.vue'
import Blog from './src/pages/Blog.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router