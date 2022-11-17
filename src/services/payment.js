export const payment = async payload => {
  if (!payload) return
  const res = await fetch('/api/payment', {
    method: 'POST',
    body: payload
  })
  return res
}
