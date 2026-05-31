import { createWebHistory, createRouter } from 'vue-router'
import Index from './src/pages/Index.vue'


const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('./src/pages/NotFound.vue'),
        meta: { title: 'Page NotFound' },
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
                path: '/dashboard/articles',
                component: () => import('./src/layouts/Articles.vue'),
            },
            {
                path: '/dashboard/new-article',
                component: () => import('./src/layouts/newArticle.vue'),
            },
            {
                path: '/dashboard/edit-article/:id',
                component: () => import('./src/layouts/editArticle.vue'),
            },
            {
                path: '/dashboard/activities',
                component: () => import('./src/layouts/activities.vue'),
            },
            {
                path: '/dashboard/new-activity',
                component: () => import('./src/layouts/newActivity.vue'),
            },
            {
                path: '/dashboard/edit-activity/:id',
                component: () => import('./src/layouts/editActivity.vue'),
            },
            {
                path: '/dashboard/products',
                component: () => import('./src/layouts/Products.vue'),
            },
            {
                path: '/dashboard/new-product',
                component: () => import('./src/layouts/newProduct.vue'),
            },
            {
                path: '/dashboard/edit-product/:id',
                component: () => import('./src/layouts/editProduct.vue'),
            },
            {
                path: '/dashboard/companies',
                component: () => import('./src/layouts/Companies.vue'),
            },
            {
                path: '/dashboard/new-company',
                component: () => import('./src/layouts/newCompany.vue'),
            },
            {
                path: '/dashboard/edit-company/:id',
                component: () => import('./src/layouts/editCompany.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./src/pages/Login.vue'),
    },
    {
        path: '/activity/:id',
        name: 'activity',
        component: () => import('./src/layouts/SingleActivity.vue'),
    },
    {
        path: '/product/:id',
        name: 'product',
        component: () => import('./src/layouts/SingleProduct.vue'),
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

router.beforeEach((to) => {
    const { title } = to.meta
    document.title = title || 'IT-Comany'
})

export default router