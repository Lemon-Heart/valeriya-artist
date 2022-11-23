// redirects to home page if user is not authenticated.
export default function closeSideMenu ({ next, store, nextMiddleware }) {
  store.sideMenu.close()
  return nextMiddleware()
}
