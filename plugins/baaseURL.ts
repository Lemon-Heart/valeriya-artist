export default defineNuxtPlugin(() => {
  return {
    provide: {
      // baseURL: 'https://medix-lab.netlify.app'
      baseURL: 'http://localhost:3000'
    }
  }
})