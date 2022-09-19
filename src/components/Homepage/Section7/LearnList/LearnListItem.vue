<template lang="pug">
.item(v-observe)
  .icon
    ui-svg-icon(name="check")
  .text(v-if="text") {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.item
  position: relative
  padding: 5*$u
  @include font('t16-regular')
  transform: translate(0%, 50%)
  opacity: 0
  transition: 1s
  &.observe
    opacity: 1
    transform: translate(0%, 0%)
  &:nth-child(2n)
    opacity: 0
    transform: translate(0%, 100%)
    &.observe
      transform: translate(0%, 50%)
      opacity: 1
  @media screen and (max-width: $padWidth)
    padding: 0
    transform: translate(-50%, 0%)
    &:nth-child(2n)
      transform: translate(-50%, 0%)
      &.observe
        transform: translate(0%, 0%)
    &.observe
      transform: translate(0%, 0%)
    @include font('t16-demibold')
    &:not(:last-child)
      margin-bottom: 20*$u
  @media screen and (max-width: $mobileWidth)
    @include font('t16-regular')
    &:not(:last-child)
      margin-bottom: 10*$u
  @media screen and (max-width: $XXSWidth)
    margin-left: 2.5*$u
  .icon
    z-index: -10
    position: absolute
    color: $btnBG
    transform: translate(-20%, -30%)
    top: 0
    left: 0
    width: 50*$u
    height: 60*$u
    @media screen and (max-width: $padWidth)
      width: 30*$u
      height: 30*$u
  .text
    padding-left: 5*$u
    @include font('h3')
    @media screen and (max-width: $padWidth)
      @include font('t16-regular')
</style>
