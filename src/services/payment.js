export const payment = async payload => {
  if (!payload) return
  const res = await fetch('https://valeriya-artist.ru/api/payment', {
    method: 'POST',
    body: payload
  })
  return res
}
