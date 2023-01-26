import { ref, computed } from 'vue'
import router from '@/router'
import UserProfile from '@/models/UserProfile'
import Module from '@/models/Module'
import store from '@/store'
import { payment } from '@/services/payment'
import { useLoading } from '@/composables/useLoading'

export default function UserController () {
  const { loading, loadingOn, loadingOff } = useLoading()

  const authToken = ref(localStorage.getItem('auth_token') || '')
  const profile = ref(null)
  const courses = ref(null)
  const errMess = ref('')

  const setError = (error) => {
    errMess.value = error
    setTimeout(() => (errMess.value = ''), 3000)
  }

  const isAuth = computed(() => authToken.value)

  const getCourses = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.ru/api/courses', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      if (!res.mess) courses.value = res.map((o) => new Module(o))
    } else logout()
    loadingOff()
  }

  const getProfile = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.ru/api/profile', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      profile.value = new UserProfile(res)
    } else logout()
    loadingOff()
  }

  const auth = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.ru/api/auth', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) {
      localStorage.setItem('auth_token', res.auth_token)
      authToken.value = res.auth_token
      if (router.currentRoute.value.query.checkout) {
        const data = new FormData()
        data.append('tariff', router.currentRoute.value.query.checkout)
        await payment(data)
      } else await router.push({ name: 'Profile' })
      store.modalQueue.removeAll()
    } else setError(res.err)
  }

  const login = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.ru/api/login', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) auth(payload)
    else setError(res.err)
  }

  const logout = async () => {
    localStorage.removeItem('auth_token')
    authToken.value = ''
    profile.value = new UserProfile(null)
    router.push({ name: 'Home' })
    store.sideMenu.close()
  }

  const changeProfileInfo = async payload => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.ru/api/profile/change', {
      method: 'POST',
      headers: {
        Authorization: authToken.value
      },
      body: JSON.stringify(payload)
    })
    const res = await response.json()
    if (response.ok) getProfile()
    else setError(res.err)
    loadingOff()
  }

  const changeProfileAvatar = async (payload) => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.ru/api/profile/avatar', {
      method: 'POST',
      headers: {
        Authorization: authToken.value
      },
      body: payload
    })
    const res = await response.json()
    if (response.ok) getProfile()
    else setError(res.err)
    loadingOff()
  }

  return {
    loading,
    auth,
    isAuth,
    login,
    logout,
    profile,
    getProfile,
    courses,
    getCourses,
    errMess,
    changeProfileInfo,
    changeProfileAvatar
  }
}
