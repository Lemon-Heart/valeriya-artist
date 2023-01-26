<template lang="pug">
aside.sideMenuWrapper(:class="{'open': sideMenu.isOpen}" @click="sideMenu.close")
  .sideMenu(@click.stop)
    .top
      ui-logo(clipped color="#f8d4ac")
      ui-close(:size="40" @onClick="sideMenu.toggle")
    .menu
      .mainMenu
        router-link(:to="{ name: 'Home'}") Главная
        router-link(:to="{ name: 'Profile'}") Профиль
        router-link(:to="{ name: 'Catalog'}") Каталог
      .footerMenu
        .exit(v-if="user.isAuth" @click="user.logout") Выход
          ui-svg-icon(name="exit" :size="24")
        router-link(:to="{ name: 'Offer'}") Публичная оферта
        router-link(:to="{ name: 'Payment'}") Способы оплаты
        header-soc.soc
</template>

<script>
import { inject } from 'vue'
import HeaderSoc from '@/components/_layout/Header/HeaderSoc/HeaderSoc'

export default {
  components: { HeaderSoc },
  setup () {
    const store = inject('store')
    const user = store.user
    const sideMenu = store.sideMenu
    return { sideMenu, user }
  }
}
</script>

<style lang="sass" scoped>
.sideMenuWrapper
  position: fixed
  width: 100%
  height: 100%
  background: $btnBGDarkHover
  top: 0
  transition: .5s
  opacity: 0
  visibility: hidden
  &.open
    visibility: visible
    z-index: 100
    opacity: 1
    .sideMenu
      transform: translateX(0)
.sideMenu
  position: relative
  display: flex
  flex-direction: column
  max-width: 75*$u
  height: 100%
  padding: 6*$u 10*$u 10*$u 10*$u
  background: $headerBG
  box-shadow: 0px 0px 10px 10px black
  transform: translateX(-100%)
  transition: .5s
.top
  display: flex
  & > *:first-child
    margin-right: 11*$u
.menu
  margin-top: 10*$u
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%
  & > *
    display: flex
    flex-direction: column
.mainMenu, .exit
  @include font('h3')
.mainMenu a
  transition: .1s
  &:hover
    color: $firstColor
    transform: scale(1.05)
    font-size: 5.15*$u
.exit
  cursor: pointer
  display: flex
  align-items: center
  margin-bottom: 5*$u
  & > *
    margin-left: 2*$u
    margin-top: $u
.footerMenu
  @include font('t16-regular')
  .soc
    margin-top: 10*$u
</style>
