import { ref } from 'vue'
import getCookie from '@/_core/helpers/getCookie'
import UserProfile from '@/models/UserProfile'

export default function UserController () {
  const authToken = getCookie('auth_token') || ''
  const profile = ref(null)
  const errMess = ref('')

  const getProfile = async () => {
    const response = await fetch('/api/profile', {
      method: 'GET',
      headers: {
        Authorization: authToken
      }
    })
    const res = await response.json()
    profile.value = new UserProfile(res)
  }

  const auth = async payload => {
    if (!payload) return
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: payload
    })
    if (response.ok) {
      const res = await response.json()
      if (res?.err) errMess.value = res.err
      else {
        errMess.value = ''
        window.location.href = '/profile'
      }
    }
  }

  const login = async payload => {
    if (!payload) return
    const response = await fetch('/api/login', {
      method: 'POST',
      body: payload
    })
    if (response.ok) {
      const res = await response.json()
      if (res?.err) errMess.value = res.err
      else auth(payload)
    }
  }

  const logout = async () => {
    await fetch('/api/logout')
    window.location.href = '/'
  }

  return {
    auth,
    login,
    logout,
    profile,
    getProfile,
    authToken,
    errMess
  }
}
