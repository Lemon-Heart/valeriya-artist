<template lang="pug">
.tabs
  .tabs__head
    span(@click="changeTab(0)" :class="{'active': currentTab === 0}") Регистрация
    span(@click="changeTab(1)" :class="{'active': currentTab === 1}") Вход
  .tabs__content
    LoginForm(v-if="currentTab === 0")
    AuthForm(v-if="currentTab === 1" @restorePass="changeTab(2)")
    RequestChangePass(v-if="currentTab === 2")
</template>

<script>
import { ref, onUnmounted, inject } from 'vue'
import AuthForm from './AuthForm'
import LoginForm from './LoginForm'
import RequestChangePass from './RequestChangePass'
import { useRouter } from 'vue-router'

export default {
  components: { AuthForm, LoginForm, RequestChangePass },
  setup () {
    const store = inject('store')
    const router = useRouter()

    const currentTab = ref(0)
    const changeTab = (tab) => {
      store.user.errMess = ''
      currentTab.value = tab
    }

    onUnmounted(() => router.push({ query: {} }))

    return { changeTab, currentTab }
  }
}
</script>

<style lang="sass" scoped>
.tabs
  &__head
    margin-bottom: 15*$u
    span
      color: $firstColor
      @include font('t18-demibold')
      position: relative
      cursor: pointer
      padding: 2*$u
      &:before
        content: ''
        position: absolute
        bottom: -3*$u
        height: $u
        right: 0
        background: $firstColor
        transition: .4s
        width: 0
      &.active:before
        width: 100%
      &:last-child:before
        left: 0
        right: auto
  &__content
    min-height: 112.5*$u
</style>
