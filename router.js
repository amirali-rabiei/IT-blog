import { createWebHistory, createRouter } from 'vue-router'
import Index from './src/pages/Index.vue'


const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('./src/pages/NotFound.vue'),
        meta: { title: 'Page NotFound' }
    },
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('./src/pages/Blog.vue'),
        meta: { title: 'Blog' },
    },
    {
        path: '/blog/:id',
        component: () => import('./src/pages/SingleBlog.vue'),
        meta: { title: 'Blog post' }
    },
    {
        path: '/dashboard',
        component: () => import('./src/pages/Dashboard.vue'),
        meta: { title: 'Dashboard - Admin' },
        children: [
            {
                path: '/dashboard/article',
                component: () => import('./src/layouts/Articles.vue'),
            },
            {
                path: '/dashboard/new-article',
                component: () => import('./src/layouts/newArticle.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./src/pages/Login.vue'),
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const { title } = to.meta
    document.title = title || 'IT-Comany'
})

export default router