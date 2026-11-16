/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  // Флаг: был ли контроллер до текущей регистрации.
  // Нужен, чтобы отличить первую установку SW от реального обновления.
  const hadControllerAtStart = !!navigator.serviceWorker?.controller

  // Флаг: запросили ли мы сами активацию нового воркера.
  // Перезагружаемся только в этом случае.
  let updateRequested = false
  let reloaded = false

  // Один раз вешаем слушатель controllerchange — до register(),
  // чтобы не пропустить событие и не навесить несколько слушателей.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // Игнорируем самое первое появление контроллера (первая установка SW),
      // иначе будет неожиданная перезагрузка / возможен цикл.
      if (!hadControllerAtStart) {
        console.log('SW took control for the first time, no reload.')
        return
      }
      // Перезагружаемся только если это мы инициировали обновление
      // и ещё не перезагружались (защита от двойного reload).
      if (!updateRequested || reloaded) return

      reloaded = true
      console.log('New service worker activated, reloading...')
      window.location.reload()
    })
  }

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('App is being served from cache by a service worker.')
    },
    registered (registration) {
      console.log('Service worker has been registered.')

      // Проверяем обновления при возврате на вкладку, а не по таймеру —
      // меньше нагрузки и корректнее работает в фоне.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          registration.update().catch((err) => {
            console.warn('SW update check failed:', err)
          })
        }
      })
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; updating...')

      const waitingWorker = registration.waiting
      if (!waitingWorker) {
        // Воркер ещё не в состоянии waiting — не форсируем,
        // обновление произойдёт при следующей проверке/визите.
        console.warn('No waiting worker yet, skip forced activation.')
        return
      }

      // Помечаем, что перезагрузка после активации — ожидаемая.
      updateRequested = true
      waitingWorker.postMessage({ type: 'SKIP_WAITING' })
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
