<template lang="pug">
span(ref="text" v-observe class="effect")
  slot
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const text = ref()
    onMounted(() => {
      const a = text.value.innerHTML.split('')
      const b = a.map((w) => {
        return `<span>${w}</span>`
      })
      text.value.innerHTML = b.join('')
    })
    return { text }
  }
}
</script>

<style lang="sass" scoped>
.effect
  :deep(span)
    opacity: 0
    @for $i from 1 to 100
      $td: $i * .03
      &:nth-child(#{$i})
        transition-delay: #{$td}s
  &.observe
    :deep(span)
      opacity: 1
</style>
