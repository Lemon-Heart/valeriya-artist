import { ref } from 'vue'

export function useLoading () {
  const loading = ref(false)
  const loadingOn = () => {
    loading.value = true
  }
  const loadingOff = () => {
    loading.value = false
  }

  return {
    loading,
    loadingOn,
    loadingOff
  }
}
