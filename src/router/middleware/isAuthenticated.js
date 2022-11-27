// redirects to home page if user is not authenticated.
import LoginAndAuthComponent from '@/components/Forms/LoginAndAuthComponent'

export default function isAuthenticated ({ next, store, nextMiddleware }) {
  if (!store.user.isAuth) {
    store.modalQueue.push({
      key: 'LoginAndAuthComponent',
      component: LoginAndAuthComponent
    })
    return next({ name: 'Home' })
  }

  return nextMiddleware()
}
