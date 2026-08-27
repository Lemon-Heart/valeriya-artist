import { ref } from 'vue'
import router from '@/router'
import UserProfile from '@/models/UserProfile'
import Module from '@/models/Module'
import Lesson from '@/models/Lesson'
import { buyCourse } from '@/services/payment'
import { useLoading } from '@/composables/useLoading'

export default function UserController (auth, modalQueue, sideMenu) {
  const { loading, loadingOn, loadingOff } = useLoading()

  const profile = ref(null)
  const courses = ref(null)
  const marathon = ref(null)
  const errMess = ref('')

  const setError = (error) => {
    errMess.value = error
    setTimeout(() => (errMess.value = ''), 3000)
  }

  const getCourses = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.art/api/courses', {
      method: 'GET',
      headers: {
        Authorization: auth.getAuthToken()
      }
    })

    if (response.ok) {
      const res = await response.json()
      if (!res.mess) courses.value = res.map((o) => new Module(o))
      loadingOff()
    } else {
      await refresh(getCourses)
    }
  }

  const getMarathon = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.art/api/marathon', {
      method: 'GET',
      headers: {
        Authorization: auth.getAuthToken()
      }
    })

    if (response.ok) {
      const res = await response.json()
      if (!res.mess) marathon.value = res.map((o) => new Lesson(o))
      loadingOff()
    } else {
      await refresh(getMarathon)
    }
  }

  const getProfile = async () => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.art/api/profile', {
      method: 'GET',
      headers: {
        Authorization: auth.getAuthToken()
      }
    })

    if (response.ok) {
      const res = await response.json()
      profile.value = new UserProfile(res)
      loadingOff()
    } else {
      await refresh(getProfile)
    }
  }

  const refresh = async (func) => {
    if (!auth.getUuid()) {
      logout()
      loadingOff()
      return
    }

    const response = await fetch('https://valeriya-artist.art/api/refresh', {
      method: 'GET',
      headers: {
        uuid: auth.getUuid()
      }
    })

    if (response.ok) {
      const res = await response.json()
      auth.setAuthToken(res.auth_token)
      await func()
    } else {
      logout()
    }
    loadingOff()
  }

  const authAction = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/auth', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) {
      auth.setAuthToken(res.auth_token)
      auth.setUuid(res.uuid)
      if (router.currentRoute.value.query.checkout) {
        const data = new FormData()
        data.append('tariff', router.currentRoute.value.query.checkout)
        await buyCourse(data)
      } else await router.push({ name: 'Profile' })
      modalQueue.removeAll()
    } else setError(res.err)
  }

  const login = async payload => {
    if (!payload) return
    const response = await fetch('https://valeriya-artist.art/api/login', {
      method: 'POST',
      body: payload
    })
    const res = await response.json()
    if (response.ok) authAction(payload)
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
    auth.clearAuth()
    profile.value = new UserProfile(null)
    router.push({ name: 'Home' })
    sideMenu.close()
  }

  const changeProfileInfo = async payload => {
    loadingOn()
    const response = await fetch('https://valeriya-artist.art/api/profile/change', {
      method: 'POST',
      headers: {
        Authorization: auth.getAuthToken()
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
        Authorization: auth.getAuthToken()
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
    auth: authAction,
    login,
    changePass,
    restore,
    logout,
    profile,
    getProfile,
    courses,
    getCourses,
    marathon,
    getMarathon,
    errMess,
    changeProfileInfo,
    changeProfileAvatar
  }
}
