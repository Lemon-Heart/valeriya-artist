<template lang="pug">
.item(v-observe)
  .number(v-if="number") {{ number }}
  .head(v-if="title") {{ title }}
  ul(v-if="list")
    li(
      v-for="(item, i) in list"
      :key="i"
    )
      span {{ item }}
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    list: {
      type: Array,
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
  @media screen and (max-width: $mobileWidth)
    @include font('t16-regular')
  @media screen and (max-width: $mobileWidth)
    &:not(:last-child)
      margin-bottom: 10*$u
  @media screen and (max-width: $XXSWidth)
    margin-left: 2.5*$u
  .number
    z-index: -10
    position: absolute
    color: $btnBG
    transform: translate(-40%, 10%)
    top: 0
    left: 0
    font-size: 40*$u
    line-height: 110px
    font-family: GolosTextWebDemiBold, serif
    @media screen and (max-width: $XSWidth)
      font-size: 30*$u
  .head
    @include font('h2')
    margin-bottom: 4*$u
    color: $firstColor
</style>
