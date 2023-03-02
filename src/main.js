import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import observe from './_core/directives/observe'
import VueLazyLoad from 'vue3-lazyload'
import store, { initStore } from '@/store'

import '@/_core/styles/reset.css'
import '@/assets/styles/general.sass'
import initializeUiKit from '@/components/_ui'

import './registerServiceWorker'

initStore()
const app = createApp(App)
initializeUiKit(app)
app
  .use(router)
  .use(VueLazyLoad)
  .provide('store', store)
  .directive('observe', observe)
  .mount('#app')
