<template lang="pug">
.cont
  .headerComponent
    router-link.logo(:to="{name: 'Home'}")
      .text1 Авторский курс от
      .text2 Valeriya.Artist
    .right
      header-soc
      ui-button.button(v-if="isAuth" size="M" @click="logout") Выйти
      ui-button.button(v-else size="M" @click="onButtonClick") Войти
</template>

<script>
import { inject, computed } from 'vue'
import HeaderSoc from './HeaderSoc/HeaderSoc'
import LoginAndAuthComponent from '@/components/LoginAndAuthComponent'

export default {
  components: { HeaderSoc, LoginAndAuthComponent },
  setup () {
    const store = inject('store')
    const isAuth = computed(() => store.user.authToken)
    const logout = store.user.logout
    const onButtonClick = () => {
      store.modalQueue.push({
        key: 'LoginAndAuthComponent',
        component: LoginAndAuthComponent
      })
    }
    return { onButtonClick, isAuth, logout }
  }
}
</script>

<style lang="sass" scoped>
.headerComponent
  color: white
  display: flex
  justify-content: space-between
  align-items: center
  .right
    display: flex
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
  .button
    margin-left: 4*$u
    @media screen and (max-width: $mobileWidth)
      margin-left: 2*$u
</style>
