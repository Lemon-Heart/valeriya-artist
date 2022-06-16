import { defineNuxtConfig } from 'nuxt'
import Icons from 'unplugin-icons/vite'

import { FileSystemIconLoader } from 'unplugin-icons/loaders'
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.scss'
  ],
  hooks: {
    'pages:extend' (pages) {
      for (const page of pages) {
        if (page.path.includes('/licenses')) page.name = 'Лицензии'
        if (page.path.includes('/index')) page.name = 'Главная'
        if (page.path.includes('/news')) page.name = 'Новости'
        if (page.path.includes('/requisites')) page.name = 'Реквизиты'
        if (page.path.includes('/sale')) page.name = 'Акции'
        if (page.path.includes('/sko')) page.name = 'Надзорные органы'
        if (page.path.includes('/basket')) page.name = 'Корзина'
        if (page.path.includes('/lk')) page.name = 'Личный кабинет'
      }
    }
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
        customCollections: {
          'my-icons': FileSystemIconLoader(
            './assets/icons'
          )
        }
      })
    ]
  }
})
