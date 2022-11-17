const getCookie = function (name) {
  const results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  if (results) return results[2]
  else return null
}

export default getCookie
