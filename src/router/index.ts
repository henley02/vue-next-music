import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/recommend'
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/recommend/recommend.vue')
    },
    {
        path: '/singer',
        name: 'Singer',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/singer/singer.vue')
    },
    {
        path: '/top-list',
        name: 'TopList',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/top-list/top-list.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/search/search.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
