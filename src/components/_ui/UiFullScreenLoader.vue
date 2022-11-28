<template lang="pug">
.fullscreen-loader(:class="{'mt': mt}" id="loader")
  UiBaseLoader
</template>
<script>
export default {
  props: {
    mt: Boolean
  }
}
</script>

<style lang="sass" scoped>
.fullscreen-loader
  width: 100%
  height: calc(100vh - 45*$u)
  display: flex
  align-items: center
  justify-content: center
  &.mt
    margin-top: 20px
</style>
