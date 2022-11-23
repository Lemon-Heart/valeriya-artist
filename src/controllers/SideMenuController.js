import { ref } from 'vue'

export default function SideMenuController () {
  const isOpen = ref(false)
  const toggle = () => (isOpen.value = !isOpen.value)
  const close = () => (isOpen.value = false)
  const open = () => (isOpen.value = true)

  return { isOpen, toggle, close, open }
}
