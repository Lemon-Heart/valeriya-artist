// redirects to home page if user is not authenticated.
export default function yametrika ({ next, store, nextMiddleware }) {
  if (process.env.NODE_ENV === 'production') window.ym(91363549, 'hit', {})
  return nextMiddleware()
}
