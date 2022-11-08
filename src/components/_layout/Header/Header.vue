<template lang="pug">
.cont
  .headerComponent
    router-link.logo(:to="{name: 'Home'}")
      .text1 Авторский курс от
      .text2 Valeriya.Artist
    header-soc
</template>

<script>
import HeaderSoc from './HeaderSoc/HeaderSoc'
export default { components: { HeaderSoc } }
</script>

<style lang="sass" scoped>
.headerComponent
  color: white
  display: flex
  justify-content: space-between
  align-items: center
  .logo
    display: flex
    color: $socIcon
    @include font('h3')
    .text1
      margin-right: 2*$u
      @media screen and (max-width: $XXSWidth)
        display: none
</style>
