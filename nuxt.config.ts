import { defineNuxtConfig } from 'nuxt'
import  { resolve } from 'path';
import Icons from 'unplugin-icons/vite'

import { FileSystemIconLoader } from 'unplugin-icons/loaders'
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: '/js/chatbot.js' },
        { src: '/js/y-metrika.js' }
      ]
    }
  },
  css: [
    '@/assets/css/main.scss'
  ],
  hooks: {
    'pages:extend' (pages) {
      for (const page of pages) {
        if (page.name.includes('catalog')) page.meta = {breadcrumbsName: 'Анализы и цены'}
        if (page.name.includes('catalog-name')) page.meta = {breadcrumbsName: 'Анализы и цены'}
        if (page.path.includes('/licenses')) page.meta = {breadcrumbsName: 'Лицензии'}
        if (page.path.includes('/index')) page.meta = {breadcrumbsName: 'Главная'}
        if (page.path.includes('/news')) page.meta = {breadcrumbsName: 'Новости'}
        if (page.path.includes('/requisites')) page.meta = {breadcrumbsName: 'Реквизиты'}
        if (page.path.includes('/sale')) page.meta = {breadcrumbsName: 'Акции'}
        if (page.path.includes('/sko')) page.meta = {breadcrumbsName: 'Надзорные органы'}
        if (page.path.includes('/basket')) page.meta = {breadcrumbsName: 'Корзина'}
        if (page.path.includes('/lk')) page.meta = {breadcrumbsName: 'Личный кабинет'}
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
