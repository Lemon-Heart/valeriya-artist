<template lang="pug">
.cont
  .headerComponent
    .left
      ui-burger-menu-icon
      ui-logo
    .right
      header-soc
</template>

<script>
import HeaderSoc from './HeaderSoc/HeaderSoc'

export default {
  components: { HeaderSoc }
}
</script>

<style lang="sass" scoped>
.headerComponent
  color: white
  display: flex
  justify-content: space-between
  align-items: center
  .left
    display: flex
    & > *
      margin-right: 10*$u
      @media screen and (max-width: $mobileWidth)
        margin-right: 5*$u
  .right
    display: flex
  .button
    margin-left: 4*$u
    @media screen and (max-width: $mobileWidth)
      margin-left: 2*$u
</style>
