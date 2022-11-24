<template lang="pug">
.header
  app-header
  side-menu
.content
  app-content
//- .footer
//-   app-footer
app-modal
</template>

<script>
import AppHeader from '@/components/_layout/Header/Header'
import AppFooter from '@/components/_layout/Footer/Footer'
import AppContent from '@/components/_layout/Content/Content'
import AppModal from '@/components/_layout/Modal/Modal'
import SideMenu from '@/components/_layout/SideMenu/SideMenu'

export default {
  components: { AppHeader, AppFooter, AppContent, AppModal, SideMenu },
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
  overflow-x: hidden
.header
  background-color: $headerBG
  position: fixed
  width: 100%
  z-index: 100
  padding: 5*$u 0
  @media screen and (max-width: $mobileWidth)
    padding: 3*$u 0
.content
  margin-top: 20*$u
  padding-bottom: 100px
.footer
  margin-top: auto
  background-color: $headerBG
  padding: 5*$u 0
</style>
