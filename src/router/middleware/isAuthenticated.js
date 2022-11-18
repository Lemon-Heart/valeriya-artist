// redirects to home page if user is not authenticated.
export default function isAuthenticated ({ next, store, nextMiddleware }) {
  if (!store.user.isAuth) {
    return next({
      name: 'Home'
    })
  }

  return nextMiddleware()
}
