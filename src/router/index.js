import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import('@/views/OfferView.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/views/Payment.vue')
  },
  {
    path: '/tg',
    name: 'Tg',
    component: () => import('@/views/Tg.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "core" */ '@/views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    document.getElementById('app').scrollIntoView()
  }
})

export default router
