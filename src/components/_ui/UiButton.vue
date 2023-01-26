<template lang="pug">
button.buttonComponent(
  type="button"
  :class="[buttonClasses, `_${variant}`]"
  :disabled="isDisabled"
  @click="click"
)
  .text
    slot
</template>

<script>
export default {
  props: {
    isDisabled: Boolean,
    isResponsive: Boolean,
    isAnimated: Boolean,
    // XS - 30, S - 34, M - 40, L - 50, XL - 58 (padding)
    size: {
      type: String,
      default: 'XL'
    },
    // default | rounded | dark
    variant: {
      type: String,
      default: 'default'
    },
    scrollTo: {
      type: String,
      default: null
    }
  },
  computed: {
    buttonClasses () {
      return [{
        _disabled: this.isDisabled,
        _animation: this.isAnimated,
        _responsive: this.isResponsive
      }, this.sizeClasses]
    },
    sizeClasses () {
      switch (this.size) {
        case 'XS':
          return '_extra-small'
        case 'S':
          return '_small'
        case 'M':
          return '_medium'
        case 'L':
          return '_large'
        default:
          return '_extra-large'
      }
    }
  },
  methods: {
    click () {
      if (this.scrollTo) {
        document.getElementById(this.scrollTo).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
._animation
  transition: all 0.2s ease-in-out
  position: relative
  overflow: hidden
  &:before
    content: ""
    background-color: rgba(255,255,255,0.5)
    height: 100%
    width: 3em
    display: block
    position: absolute
    top: 0
    left: -4.5em
    animation: 3s blink ease-in-out infinite
@keyframes blink
  0%
    transform: skewX(-45deg) translateX(0)
  20%
    transform: skewX(-45deg) translateX(390px)
  100%
    transform: skewX(-45deg) translateX(390px)

.buttonComponent
  width: fit-content
  display: flex
  align-items: center
  position: relative
  user-select: none
  transition: .2s linear
  border-radius: $BR
  background-color: $btnBG
  color: $white
  &:hover
    background-color: $btnBGHover
    color: $white
  &:active
    background-color: $btnBGActive
    color: $white

  > .text
    white-space: nowrap
    font-family: GolosTextWebDemiBold, serif
    font-size: 4*$u
    line-height: 5*$u
    margin: auto

  &._extra-small
    height: 7.5*$u
    border: 0.25*$u solid transparent
    padding: 0 6.5*$u
    > .text
      font-family: GolosTextWebDemiBold, serif
      font-size: 4*$u
      line-height: 5*$u

  &._small
    height: 8.5*$u
    border: 0.25*$u solid transparent
    padding: 0 5*$u
    > .text
      font-family: GolosTextWebDemiBold, serif
      font-size: 4*$u
      line-height: 5*$u

  &._medium
    height: 10*$u
    border: 0.25*$u solid transparent
    padding: 0 5*$u
    > .text
      font-family: GolosTextWebDemiBold, serif
      font-size: 4*$u
      line-height: 5*$u

  &._large
    height: 12.5*$u
    border: 0.25*$u solid transparent
    padding: 0 5*$u

  &._extra-large
    height: 14.5*$u
    border: 0.25*$u solid transparent
    padding: 0 10*$u

  &._rounded
    border-radius: 99em

  &._dark
    background-color: $btnBGDark
    &:hover
      background-color: $btnBGDarkHover

  &._responsive
    width: 100%
    justify-content: center

  &._disabled,
  &._disabled:active,
  &._disabled:hover
    cursor: not-allowed
    background-color: $gray
    color: $headerBG
</style>
