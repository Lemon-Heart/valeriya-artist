<template lang="pug">
.cont
  .headerComponent
    .left
      ui-burger-menu-icon
      ui-logo
    .right
      header-soc
      //- ui-button.button(v-if="user.isAuth" size="M" @click="user.logout") Выйти
      //- ui-button.button(v-else size="M" @click="onButtonClick") Войти
</template>

<script>
import { inject } from 'vue'
import HeaderSoc from './HeaderSoc/HeaderSoc'
import LoginAndAuthComponent from '@/components/LoginAndAuthComponent'

export default {
  components: { HeaderSoc, LoginAndAuthComponent },
  setup () {
    const store = inject('store')
    const user = store.user
    const onButtonClick = () => {
      store.modalQueue.push({
        key: 'LoginAndAuthComponent',
        component: LoginAndAuthComponent
      })
    }

    return { onButtonClick, user }
  }
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
