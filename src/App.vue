<template lang="pug">
.header
  app-header
  side-menu
.content
  router-view
.footer
  app-footer
app-modal
</template>

<script>
import { useRoute } from 'vue-router'
import { watch, inject } from 'vue'
import AppHeader from '@/components/_layout/Header/Header'
import AppFooter from '@/components/_layout/Footer/Footer'
import AppModal from '@/components/_layout/Modal/Modal'
import SideMenu from '@/components/_layout/SideMenu/SideMenu'
import RestoreForm from '@/components/Forms/RestoreForm'

export default {
  components: { AppHeader, AppFooter, AppModal, SideMenu, RestoreForm },
  setup () {
    const route = useRoute()
    const store = inject('store')
    watch(
      () => route.query.changepass,
      () => {
        if (route.query.uuid && route.query.changepass === 'true') {
          store.modalQueue.push({
            key: 'RestoreForm',
            component: RestoreForm
          })
        }
      },
      { immediate: true }
    )
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
.footer
  margin-top: auto
  background-color: $headerBG
  padding: 5*$u 0
.content
  margin-top: 20*$u
  padding-bottom: 100px
  @media screen and (max-width: $mobileWidth)
    margin-top: 15*$u
</style>
