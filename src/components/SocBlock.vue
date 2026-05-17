<template lang="pug">
a.soc-block(:href="link" target="_blank")
  .soc-block__icons
    .soc-block__icon
      ui-svg-icon(:name="icon" :size="24")
    img.soc-block__icon.soc-block__photo(src="/img/avatar.JPG")
  .soc-block__title {{ title }}
  .soc-block__link Перейти в блог
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
    icon: String
  }
}
</script>

<style lang="sass" scoped>
.soc-block
  position: relative
  background-color: $btnBGHover
  padding: 10*$u 6*$u 8*$u
  border-radius: $BR
  box-shadow: 0 0 10px 10px $btnBGDarkHover
  &__title
    @include font('h2')
    color: $firstColor
    margin-bottom: 4*$u
  &__icons
    position: absolute
    top: 0
    transform: translateY(-50%)
    display: flex
  &__icon
    display: flex
    justify-content: center
    align-items: center
    height: 14*$u
    width: 14*$u
    border-radius: 50%
    background-color: $socIconHover
    z-index: 10
  &__photo
    transform: translateX(-25%)
    z-index: 0
</style>
