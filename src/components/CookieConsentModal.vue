<template lang="pug">
transition(name="cookie-slide")
  .cookie-consent(v-if="visible")
    .cookie-consent__content
      .cookie-consent__text
        h3 Мы используем cookies
        p Мы используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. Продолжая использовать наш сайт, вы соглашаетесь с нашей
          router-link(:to="{ name: 'Policy'}")
            |  Политикой конфиденциальности
          | .
      .cookie-consent__buttons
        ui-button(@click="acceptAll" is-animated variant="dark") Принять
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'CookieConsent',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['accept', 'close'],
  setup (props, { emit }) {
    const store = inject('store')

    const acceptAll = () => {
      localStorage.setItem('cookie_consent', 'all')
      if (store) store.cookieConsent = 'all'
      emit('accept', 'all')
      emit('close')
    }

    const acceptNecessary = () => {
      localStorage.setItem('cookie_consent', 'necessary')
      if (store) store.cookieConsent = 'necessary'
      emit('accept', 'necessary')
      emit('close')
    }

    return {
      acceptAll,
      acceptNecessary
    }
  }
}
</script>

<style lang="sass" scoped>
.cookie-consent
  position: fixed
  bottom: 5*$u
  right: 5*$u
  z-index: 1000
  display: flex
  justify-content: center
  pointer-events: none

  @media screen and (max-width: $XSWidth)
    left: 5*$u

  &__content
    background: $BG
    color: white
    border-radius: $BR
    padding: 3*$u 4*$u
    min-width: 280px
    max-width: 500px
    margin: 0 auto
    box-shadow: 0 0 5px 5px $btnBGDarkHover
    pointer-events: auto

    @media screen and (max-width: $XSWidth)
      max-width: 100%

  &__text
    margin-bottom: 3*$u

    h3
      margin: 0 0 1.5*$u 0
      font-size: 1.2rem

    p
      margin: 0
      font-size: 0.9rem
      line-height: 1.5

      a
        color: $firstColor
        text-decoration: none
        transition: color 0.3s

        &:hover
          text-decoration: underline

  &__buttons
    display: flex
    gap: 2*$u
    justify-content: flex-end

    @media screen and (max-width: $mobileWidth)
      flex-direction: column
      gap: 1.5*$u

// Анимация появления
.cookie-slide-enter-active,
.cookie-slide-leave-active
  transition: all 0.3s ease-out

.cookie-slide-enter-from,
.cookie-slide-leave-to
  transform: translateY(100%)
  opacity: 0

.cookie-slide-enter-to,
.cookie-slide-leave-from
  transform: translateY(0)
  opacity: 1
</style>
