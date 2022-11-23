<template lang="pug">
.closeButton(@click="$emit('onClick')" :style="`width: ${size}px; height: ${size}px`")
  ui-svg-icon(
    name="close"
    :size="size"
  )
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 24
    }
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.closeButton
  position: absolute
  top: 5*$u
  right: 5*$u
  background-color: transparent
  box-shadow: none
  cursor: pointer
</style>
