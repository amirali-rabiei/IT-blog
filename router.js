import { createWebHistory, createRouter } from 'vue-router'
import Index from './src/pages/Index.vue'
import Blog from './src/pages/Blog.vue'
import SingleBlog from './src/pages/SingleBlog.vue'
import NotFound from './src/pages/NotFound.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound

    },
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/blog/:id',
        component: SingleBlog,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router