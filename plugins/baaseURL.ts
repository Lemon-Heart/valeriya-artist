export default defineNuxtPlugin(() => {
  return {
    provide: {
      baseURL: 'https://lemon-heart.netlify.app'
      // baseURL: 'http://localhost:3000'
    }
  }
})