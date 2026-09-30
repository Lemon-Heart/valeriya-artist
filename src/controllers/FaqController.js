import { ref } from 'vue'
import FaqItem from '@/models/FaqItem'
import API_BASE_URL from '@/services/constants'

export default function FaqController () {
  const faq = ref(null)

  const getFaq = async () => {
    if (!faq.value) {
      const response = await fetch(`${API_BASE_URL}/faq`)
      if (response.ok) {
        const res = await response.json()
        if (!res.mess) faq.value = res.map((o) => new FaqItem(o))
      }
    }
  }

  return {
    getFaq,
    faq
  }
}
