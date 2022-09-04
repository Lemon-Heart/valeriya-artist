import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

export default function useWindowBreakpointCallback (breakpoint, onBeforeBreakpointCallback, onAfterBreakpointCallback = onBeforeBreakpointCallback, ...args) {
  // Resize logic
  const isBeforeBreakpoint = ref(window.innerWidth <= breakpoint)
  const isAfterBreakpoint = ref(window.innerWidth > breakpoint)

  const _onResize = () => {
    isBeforeBreakpoint.value = window.innerWidth <= breakpoint
    isAfterBreakpoint.value = window.innerWidth > breakpoint
  }

  watch(isBeforeBreakpoint, value => {
    if (value) {
      onBeforeBreakpointCallback(...args)
    }
  })

  watch(isAfterBreakpoint, value => {
    if (value) {
      onAfterBreakpointCallback(...args)
    }
  })

  onMounted(() => { window.addEventListener('resize', _onResize) })

  onBeforeUnmount(() => { window.removeEventListener('resize', _onResize) })
}
