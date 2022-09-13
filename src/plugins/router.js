import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'home', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Home.vue')},
        {path: '/about', name: 'about', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/About.vue')},
        {path: '/podcasts', name: 'podcasts', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Podcasts.vue')},
        {path: '/quelza', name: 'quelza', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Quelza.vue')},
        {path: '/live', name: 'live', meta: { enterClass: 'animate__animated animate__fadeIn', leaveClass: 'animate__animated animate__fadeOut' }, component: () => import('@/views/Live.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
})


export default router

