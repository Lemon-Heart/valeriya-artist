<template lang="pug">
.div
  .title(v-if="item.title") {{ item.title }}
  img(:src="item.icon")
  .text {{ item.text }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.div
  display: flex
  flex-direction: column
  grid-gap: 5*$u
  gap: 5*$u
  @media screen and (max-width: $padWidth)
    grid-gap: 0
    gap: 0
  @media screen and (max-width: $XXSWidth)
    margin-bottom: 15*$u
  .title
    text-transform: uppercase
    text-align: center
    white-space: nowrap
    @include font('h2')
    @media screen and (max-width: $XXLWidth)
      @include font('h3')
    @media screen and (max-width: $padWidth)
      margin-bottom: 5*$u
  img
    object-fit: contain
    object-position: center
    height: 230px
    @media screen and (max-width: $XXSWidth)
      height: auto
      width: 50%
      margin: auto
  .iconWrapper
    &:deep(svg)
      width: 100%
      height: 50*$u
      @media screen and (max-width: $XXLWidth)
        height: 30*$u
  .text
    text-align: center
    @include font('h3')
    @media screen and (max-width: $XXLWidth)
      @include font('t16-regular')
    @media screen and (max-width: $padWidth)
      transform: translateY(-20px)
    @media screen and (max-width: $XXSWidth)
      transform: translateY(0px)
      margin-top: 3*$u
</style>
