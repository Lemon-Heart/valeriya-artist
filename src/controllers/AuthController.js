import { ref, computed } from 'vue'

export default function AuthController () {
  const authToken = ref(localStorage.getItem('auth_token') || '')
  const uuid = ref(localStorage.getItem('uuid') || '')

  const isAuth = computed(() => !!authToken.value)

  const setAuthToken = (token) => {
    authToken.value = token
    if (token) {
      localStorage.setItem('auth_token', token)
    } else {
      localStorage.removeItem('auth_token')
    }
  }

  const setUuid = (id) => {
    uuid.value = id
    if (id) {
      localStorage.setItem('uuid', id)
    } else {
      localStorage.removeItem('uuid')
    }
  }

  const clearAuth = () => {
    authToken.value = ''
    uuid.value = ''
    localStorage.removeItem('auth_token')
    localStorage.removeItem('uuid')
  }

  const getAuthToken = () => authToken.value
  const getUuid = () => uuid.value

  return {
    authToken,
    uuid,
    isAuth,
    setAuthToken,
    setUuid,
    clearAuth,
    getAuthToken,
    getUuid
  }
}
