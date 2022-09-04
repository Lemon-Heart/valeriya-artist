import { ref, computed } from 'vue'

export default function useFlag (className, initialValue = false) {
  const flag = ref(initialValue)

  const cssClass = computed(() => {
    const classesObject = {}
    classesObject[className] = flag.value
    return classesObject
  })

  const on = () => {
    flag.value = true
  }

  const off = () => {
    flag.value = false
  }

  const toggle = () => {
    flag.value ? off() : on()
  }

  return {
    flag,
    cssClass,
    on,
    off,
    toggle
  }
}
