<template lang="pug">
.div
  .title(v-if="item.title") {{ item.title }}
  img(v-lazy="item.icon")
  .text {{ item.text }}
</template>

<script>
export default {
  components: { },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.div
  display: flex
  flex-direction: column
  gap: 5*$u
  @media screen and (max-width: $padWidth)
    gap: 0
  @media screen and (max-width: $XXSWidth)
    gap: 5*$u
  .title
    text-transform: uppercase
    text-align: center
    @include font('h2')
    @media screen and (max-width: $XXLWidth)
      @include font('h3')
  img
    object-fit: contain
    object-position: center
    height: 230px
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
</style>
