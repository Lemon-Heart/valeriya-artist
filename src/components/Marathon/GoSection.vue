<template lang="pug">
section.go-section
  .go-section__images
    img.go-section__bg(src="/img/marathon/go-section/bg.PNG" alt="" v-observe)
    img.go-section__sticker(src="/img/marathon/go-section/sticker.PNG" alt="" v-observe)
  .go-section__block
    h1
      ui-text-anim Ты можешь начать прямо сейчас!
    ui-button(is-animated variant="primary" size="XL") Начать путешествие
</template>

<script>
export default {
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.go-section
  &__images
    display: grid
    grid-template-columns: 3fr 2fr
    align-items: center
  &__bg
    width: 100%
    border-radius: 20*$u
    transform: rotate(0) scale(0)
    opacity: 0
    transition: 1s
    &.observe
      opacity: 1
      transform: rotate(-5deg) scale(1)
    @media screen and (max-width: $padWidth)
      border-radius: 10*$u
  &__sticker
    width: 100%
    transform: translateX(0) scale(1.1)
    opacity: 0
    transition: 1s
    &.observe
      opacity: 1
      transform: translateX(-10%) scale(1)
  &__block
    margin: 10*$u auto 0
    display: flex
    flex-direction: column
    gap: 5*$u
    align-items: center
</style>
