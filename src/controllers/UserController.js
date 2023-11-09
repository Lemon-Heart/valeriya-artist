import { ref, computed } from 'vue'
import router from '@/router'
import UserProfile from '@/models/UserProfile'
import Module from '@/models/Module'
import store from '@/store'
import { buyCourse } from '@/services/payment'
import { useLoading } from '@/composables/useLoading'

export default function UserController () {
  const { loading, loadingOn, loadingOff } = useLoading()

  const authToken = ref(localStorage.getItem('auth_token') || '')
  const uuid = ref(localStorage.getItem('uuid') || '')
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
    const response = await fetch('https://valeriya-artist.art/api/courses', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      if (!res.mess) courses.value = res.map((o) => new Module(o))
      loadingOff()
    } else refresh(getCourses)
  }

  const getProfile = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.art/api/profile', {
      method: 'GET',
      headers: {
        Authorization: authToken.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      profile.value = new UserProfile(res)
      loadingOff()
    } else refresh(getProfile)
  }

  const refresh = async (func) => {
    if (!uuid.value) {
      logout()
      return
    }
    const response = await fetch('https://valeriya-artist.art/api/refresh', {
      method: 'GET',
      headers: {
        uuid: uuid.value
      }
    })
    if (response.ok) {
      const res = await response.json()
      localStorage.setItem('auth_token', res.auth_token)
      authToken.value = res.auth_token
      func()
    }
    loadingOff()
  }

  const auth = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/auth', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) {
      localStorage.setItem('auth_token', res.auth_token)
      localStorage.setItem('uuid', res.uuid)
      authToken.value = res.auth_token
      uuid.value = res.uuid
      if (router.currentRoute.value.query.checkout) {
        const data = new FormData()
        data.append('tariff', router.currentRoute.value.query.checkout)
        await buyCourse(data)
      } else await router.push({ name: 'Profile' })
      store.modalQueue.removeAll()
    } else setError(res.err)
  }

  const login = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/login', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) auth(payload)
    else setError(res.err)
  }

  const changePass = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/changepass', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) return res.mess
    else return res.err
  }

  const restore = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/restore', {
      method: 'POST',
      headers: {
        uuid: router.currentRoute.value.query.uuid
      },
      body: payload
    })
    const res = await response.json()
    if (response.ok) return res.mess
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
    const response = await fetch('https://valeriya-artist.art/api/profile/change', {
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
    const response = await fetch('https://valeriya-artist.art/api/profile/avatar', {
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
    changePass,
    restore,
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
