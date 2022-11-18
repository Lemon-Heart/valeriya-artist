export const payment = async payload => {
  if (!payload) return
  const response = await fetch('https://valeriya-artist.ru/api/payment', {
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
