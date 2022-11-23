import { ref, computed } from 'vue'
import router from '@/router'
import UserProfile from '@/models/UserProfile'
import Module from '@/models/Module'
import store from '@/store'
import { payment } from '@/services/payment'

export default function UserController () {
  const authToken = ref(localStorage.getItem('auth_token') || '')
  const profile = ref(null)
  const courses = ref(null)
  const errMess = ref('')

  const isAuth = computed(() => authToken.value)

  const getCourses = async () => {
    const response = await fetch('https://valeriya-artist.ru/api/courses', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      courses.value = res.map((o) => new Module(o))
    }
  }

  const getProfile = async () => {
    const response = await fetch('https://valeriya-artist.ru/api/profile', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      profile.value = new UserProfile(res)
    }
  }

  const auth = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.ru/api/auth', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) {
      errMess.value = ''
      localStorage.setItem('auth_token', res.auth_token)
      authToken.value = res.auth_token
      if (router.currentRoute.value.query.checkout) {
        const data = new FormData()
        data.append('tariff', router.currentRoute.value.query.checkout)
        await payment(data)
      } else await router.push({ name: 'Profile' })
      store.modalQueue.removeAll()
    } else errMess.value = res.err
  }

  const login = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.ru/api/login', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) auth(payload)
    else errMess.value = res.err
  }

  const logout = async () => {
    localStorage.removeItem('auth_token')
    authToken.value = ''
    profile.value = new UserProfile(null)
    router.push({ name: 'Home' })
  }

  return {
    auth,
    isAuth,
    login,
    logout,
    profile,
    getProfile,
    courses,
    getCourses,
    errMess
  }
}
