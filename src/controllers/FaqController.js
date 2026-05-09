import { ref } from 'vue'
import FaqItem from '@/models/FaqItem'

export default function FaqController () {
  const faq = ref(null)

  const getFaq = async () => {
    if (!faq.value) {
      const response = await fetch('https://valeriya-artist.art/api/faq')
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
