import { ref } from 'vue'
import Tariff from '@/models/Tariff'

export default function TariffsController () {
  const tariffs = ref(null)

  const getTariffs = async () => {
    if (!tariffs.value) {
      const response = await fetch('https://valeriya-artist.art/api/tariffs')
      if (response.ok) {
        const res = await response.json()
        if (!res.mess) tariffs.value = Array.isArray(res) ? res.map((o) => new Tariff(o)) : res
      }
    }
  }

  return {
    getTariffs,
    tariffs
  }
}
