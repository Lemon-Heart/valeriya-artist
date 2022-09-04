import { ref, readonly } from 'vue'
import useEventEmitter from './useEventEmitter'

export default function useApiRequest (requestFunction) {
  if (!requestFunction) throw new Error('Invalid api request data.')

  const { $emit, $on, $off } = useEventEmitter()

  const data = ref(null)
  const errors = ref(null)

  const isLoading = ref(false)
  const isPristine = ref(true)

  const _request = async (...params) => {
    isLoading.value = true
    const response = await requestFunction(...params)
    if (response.data) {
      data.value = response.data
      $emit('success', response.data)
    } else {
      errors.value = response.errors
      $emit('error', response.errors)
    }
    isLoading.value = false
    isPristine.value = false
  }

  const output = {
    isLoading,
    data,
    errors,
    request: _request,
    $on,
    $off
  }

  return readonly(output)
}
