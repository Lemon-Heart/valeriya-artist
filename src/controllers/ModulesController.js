import { ref } from 'vue'
import API_BASE_URL from '@/services/constants'

export default function ModulesController () {
  const modules = ref(null)
  const modulesDescription = ref(null)

  const getModules = async () => {
    if (!modules.value) {
      const response = await fetch(`${API_BASE_URL}/modules`)
      if (response.ok) {
        const res = await response.json()
        if (!res.mess) {
          modules.value = res.modules.map((o) => o)
          modulesDescription.value = res.modules_description
        }
      }
    }
  }

  return {
    getModules,
    modules,
    modulesDescription
  }
}
