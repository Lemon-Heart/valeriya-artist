
import API_BASE_URL from '@/services/constants'

export const buyCourse = async payload => {
  if (!payload) return
  const response = await fetch(`${API_BASE_URL}/payment/course`, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('auth_token')
    },
    body: payload
  })
  if (response.ok) {
    const res = await response.json()
    window.location.href = res.url
  }
}

export const buyMarathon = async () => {
  const response = await fetch(`${API_BASE_URL}/payment/marathon`, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('auth_token')
    }
  })
  if (response.ok) {
    const res = await response.json()
    window.location.href = res.url
  }
}

export const buyPaint = async payload => {
  if (!payload) return
  const response = await fetch(`${API_BASE_URL}/payment/paint`, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('auth_token')
    },
    body: payload
  })
  if (response.ok) {
    const res = await response.json()
    window.location.href = res.url
  }
}
