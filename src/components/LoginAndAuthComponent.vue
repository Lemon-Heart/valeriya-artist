<template lang="pug">
.tabs
  .tabs__head
    span(@click="toggleTab" :class="{'active': currentTab === 0}") Регистрация
    span(@click="toggleTab" :class="{'active': currentTab === 1}") Вход
  .tabs__content
    LoginForm(v-if="currentTab === 0")
    AuthForm(v-if="currentTab === 1")
</template>

<script>
import { ref } from 'vue'
import AuthForm from '@/components/AuthForm'
import LoginForm from '@/components/LoginForm'

export default {
  components: { AuthForm, LoginForm },
  setup () {
    const currentTab = ref(0)
    const toggleTab = () => (currentTab.value = Number(!currentTab.value))
    return { toggleTab, currentTab }
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
