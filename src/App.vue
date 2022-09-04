<template lang="pug">
.header
  app-header
.content
  app-content
.footer
  app-footer
</template>

<script>
import AppHeader from '@/components/_layout/Header/Header'
import AppFooter from '@/components/_layout/Footer/Footer'
import AppContent from '@/components/_layout/Content/Content'

export default {
  components: { AppHeader, AppFooter, AppContent },
  setup () {
    return {}
  }
}
</script>

<style lang="sass">
#app
  display: flex
  flex-direction: column
  min-height: 99.9vh
.header
  background-color: $headerBG
  position: fixed
  width: 100%
  z-index: 100
  padding: 5*$u 0
.content
  margin-top: 20*$u
  @media screen and (max-width: $padWidth)
  margin-top: 30*$u
  @media screen and (max-width: $mobileWidth)
  margin-top: 22*$u
.footer
  margin-top: auto
</style>
