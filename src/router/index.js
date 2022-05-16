import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'AppView',
    component: () => import('@/views/AppView.vue')
  },
  {
    path: '/about-yan',
    name: 'AboutYan',
    component: () => import('@/views/AboutYan.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

