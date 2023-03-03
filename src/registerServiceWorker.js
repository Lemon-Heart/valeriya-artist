/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

self.addEventListener('install', async event => {
  console.log('install')
})

self.addEventListener('activate', async event => {
  console.log('activate')
})

self.addEventListener('fetch', async event => {
  console.log('fetch', event.request.url)
  event.respondWith(caheFirst(event.request))
})

const caheFirst = async (request) => {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}
