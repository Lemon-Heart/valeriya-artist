import axios from 'axios'
import to from 'await-to-js'
import Qs from 'qs'
import store from '@/store'

const fetcher = axios.create({
  paramsSerializer: params => Qs.stringify(params, {
    arrayFormat: 'repeat',
    skipNulls: true
  })
})

let apiBaseUrl = ''
let authTokenName = ''
let isInitialized = false

export const init = (params) => {
  if (!params || !params.apiBaseUrl || !params.authTokenName) return false
  apiBaseUrl = params.apiBaseUrl
  authTokenName = params.authTokenName
  isInitialized = true
}

export const callApi = async ({ method, url, data, params, remote = false, authRequired = true, formData = false }) => {
  if (!isInitialized) throw new Error('Fetcher function is not initialized.')
  const authToken = localStorage.getItem(authTokenName) || ''
  const response = {
    data: null,
    errors: null
  }
  const requestConfig = {
    headers: {},
    method,
    url: remote ? url : `${apiBaseUrl}${url}`
  }
  if (authRequired && authToken) requestConfig.headers.Authorization = `Token ${authToken}`
  if (formData) requestConfig.headers['Content-Type'] = 'multipart/form-data'
  if (data) requestConfig.data = data
  if (params) requestConfig.params = params
  const [reqErrors, reqData] = await to(fetcher(requestConfig))
  if (reqData && reqData.data !== null) response.data = reqData.data
  if (reqErrors && reqErrors.response) {
    if (reqErrors.response.status === 401) store.user.logoutOnFrontend()
    response.errors = reqErrors.response.data
  }
  return response
}
