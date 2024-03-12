import { nextTick } from 'vue'
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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue'),
    meta: {
      middleware: [isAuthenticated],
      title: 'Профиль'
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Catalog.vue'),
    meta: {
      title: 'Каталог'
    }
  },
  {
    path: '/catalog/:id',
    name: 'Product',
    props: route => ({ productId: Number(route.params.id) }),
    component: () => import(/* webpackChunkName: "product" */ '@/views/Product')
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import(/* webpackChunkName: "offer" */ '@/views/Offer.vue'),
    meta: {
      title: 'Публичная оферта'
    }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "payment" */ '@/views/Payment.vue'),
    meta: {
      title: 'Способы оплаты'
    }
  },
  {
    path: '/pwa',
    name: 'Pwa',
    component: () => import(/* webpackChunkName: "payment" */ '@/views/Pwa.vue'),
    meta: {
      title: 'Pwa'
    }
  },
  {
    path: '/tg',
    name: 'Tg',
    component: () => import(/* webpackChunkName: "tg" */ '@/views/Tg.vue')
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound'),
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from) {
    if (to.name !== from.name) document.getElementById('app').scrollIntoView()
  }
})

const DEFAULT_TITLE = 'Valeriya.Artist'
const DEFAULT_DESCRIPTION = 'Valeriya.Artist'
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description || DEFAULT_DESCRIPTION)
  })
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
