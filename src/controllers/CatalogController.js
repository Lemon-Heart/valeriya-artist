import { ref } from 'vue'
import Paint from '@/models/Paint'
import API_BASE_URL from '@/services/constants'

export default function CatalogController () {
  const paintings = ref(null)
  const currentPaint = ref(null)

  const getCatalog = async () => {
    if (!paintings.value) {
      const response = await fetch(`${API_BASE_URL}/catalog`)
      if (response.ok) {
        const res = await response.json()
        if (!res.mess) paintings.value = res.map((o) => new Paint(o))
      }
    }
  }

  const getProduct = async (id) => {
    if (currentPaint.value === null || currentPaint.value.id !== id) {
      const response = await fetch(`${API_BASE_URL}/catalog/${id}`)
      if (response.ok) {
        const res = await response.json()
        currentPaint.value = new Paint(res)
      }
    }
  }

  return {
    getProduct,
    currentPaint,
    getCatalog,
    paintings
  }
}
