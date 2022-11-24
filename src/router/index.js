import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticated from './middleware/isAuthenticated'
import closeSideMenu from './middleware/closeSideMenu'
import yametrika from './middleware/yametrika'
import store from '@/store'
import middlewarePipeline from '@/_core/router/middlewarePipeline'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      middleware: [isAuthenticated]
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('@/views/Catalog.vue')
  },
  {
    path: '/catalog/:id',
    name: 'Product',
    props: route => ({ productId: Number(route.params.id) }),
    component: () => import('@/views/Product')
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import('@/views/Offer.vue')
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
    component: () => import('@/views/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from) {
    if (to.name !== from.name) document.getElementById('app').scrollIntoView()
  }
})

router.beforeEach((to, from, next) => {
  let middleware = [closeSideMenu, yametrika]
  if (to.meta.middleware) middleware = middleware.concat(Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware])
  if (!middleware.length) return next()

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1)
  })
})

export default router
