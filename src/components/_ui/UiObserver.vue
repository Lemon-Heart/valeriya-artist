<template lang="pug">
.observer(ref="observerItem")
  slot
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue'
export default {
  emits: ['observe'],
  setup (_, { emit }) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) emit('observe', true)
      else emit('observe', false)
    }, { root: null, threshold: 0 })
    const observerItem = ref()
    onMounted(() => observer.observe(observerItem.value))
    onUnmounted(() => observer.disconnect())

    return { observerItem }
  }
}
</script>

<style lang="sass">
.observer
  display: flex
  flex-shrink: 0
  height: fit-content
</style>
