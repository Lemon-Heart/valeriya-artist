import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/offer',
    name: 'offer',
    component: () => import('../views/OfferView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/PaymentView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
