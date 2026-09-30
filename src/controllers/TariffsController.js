import { ref } from 'vue'
import Tariff from '@/models/Tariff'
import API_BASE_URL from '@/services/constants'

export default function TariffsController () {
  const tariffs = ref(null)

  const getTariffs = async () => {
    if (!tariffs.value) {
      const response = await fetch(`${API_BASE_URL}/tariffs`)
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
