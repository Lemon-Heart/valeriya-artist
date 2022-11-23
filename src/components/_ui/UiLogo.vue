<template lang="pug">
router-link(:to="{name: 'Home'}").logo(:style="`color: ${color}`")
  .text1(v-if="!clipped") Авторский курс от
  .text2 Valeriya.Artist
</template>

<script>
export default {
  props: {
    clipped: Boolean,
    color: String
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.logo
  display: flex
  color: $socIcon
  @include font('h3')
  @media screen and (max-width: $mobileWidth)
    font-size: 4.5*$u
  .text1
    margin-right: 2*$u
    @media screen and (max-width: $XSWidth)
      display: none
</style>
