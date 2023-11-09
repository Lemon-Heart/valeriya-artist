import { ref } from 'vue'
import Paint from '@/models/Paint'

export default function CatalogController () {
  const paintings = ref(null)
  const currentPaint = ref(null)

  const getCatalog = async () => {
    if (!paintings.value) {
      const response = await fetch('https://valeriya-artist.art/api/catalog')
      if (response.ok) {
        const res = await response.json()
        if (!res.mess) paintings.value = res.map((o) => new Paint(o))
      }
    }
  }

  const getProduct = async (id) => {
    if (currentPaint.value === null || currentPaint.value.id !== id) {
      const response = await fetch(`https://valeriya-artist.art/api/catalog/${id}`)
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
