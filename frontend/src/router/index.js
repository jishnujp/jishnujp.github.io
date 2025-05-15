import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/professional',
            name: 'professional',
            component: () => import('@/views/Professional.vue')
        },
        {
            path: '/academic',
            name: 'academic',
            component: () => import('@/views/Academic.vue')
        }
    ]
})

export default router 