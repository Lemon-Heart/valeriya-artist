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
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  &.mt
    margin-top: 20px
</style>
