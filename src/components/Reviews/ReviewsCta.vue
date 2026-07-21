<template lang="pug">
section.reviews-cta
  img.reviews-cta__img(:src="'/img/envelope.png'")
  h2.reviews-cta__title Твой отзыв может вдохновить других!
  p.reviews-cta__subtitle {{ text }}
  router-link.reviews-cta__button(
    :to="{ name: 'Reviews'}"
    variant="dark"
    size="L"
    is-animated
  ) Оставить отзыв
</template>

<script>
export default {
  name: 'ReviewsCta',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.reviews-cta
  background: $BGOpacity
  border-radius: 5*$u
  padding: 10*$u 8*$u 10*$u 5*$u
  box-sizing: border-box
  display: grid
  grid-template-areas: "img title title" "img subtitle button"
  gap: 5*$u
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23f8d4ac' stroke-width='2' stroke-dasharray='20 12' stroke-dashoffset='0' rx='20'/%3e%3c/svg%3e")
  background-repeat: no-repeat
  background-position: center
  background-size: 100% 100%
  grid-template-columns: auto 1fr auto
  @media screen and (max-width: $XXLWidth)
    // grid-template-columns: auto 1fr
    // grid-template-areas: "img title" "img subtitle" "button button"
  @media screen and (max-width: $padWidth)
    padding: 8*$u 6*$u 8*$u 3*$u
  @media screen and (max-width: $XXSWidth)
    padding: 4*$u 4*$u 4*$u 2*$u

  &__img
    grid-area: img
    margin: auto
    height: 130px
    transform: rotate(-15deg)
    filter: invert(100%)
    // filter: brightness(0) saturate(100%) invert(83%) sepia(45%) saturate(400%) hue-rotate(320deg) brightness(105%) contrast(90%)
    @media screen and (max-width: $padWidth)
      height: 110px
    @media screen and (max-width: $XSWidth)
      height: 90px
    @media screen and (max-width: $XXSWidth)
      height: 70px

  &__title
    grid-area: title
    @include font('h2')
    color: $firstColor
    text-transform: uppercase
    @media screen and (max-width: $XXLWidth)
      @include font('h3')
    @media screen and (max-width: $padWidth)
      font-size: 18px
      line-height: 28px
    @media screen and (max-width: $XSWidth)
      font-size: 16px
      line-height: 24px
    @media screen and (max-width: $XXSWidth)
      font-size: 14px
      line-height: 22px

  &__subtitle
    grid-area: subtitle
    text-wrap: balance
    @include font('t16-regular')
    color: $white
    @media screen and (max-width: $padWidth)
      font-size: 14px
      line-height: 20px
    @media screen and (max-width: $XSWidth)
      font-size: 10px
      line-height: 14px
    @media screen and (max-width: $XXSWidth)
      font-size: 8px
      line-height: 10px
      letter-spacing: 0px

  &__button
    grid-area: button
    border: 1px solid $firstColor
    border-radius: 5*$u
    padding: 4*$u 6*$u
    color: $firstColor
    height: fit-content
    text-transform: uppercase
    font-weight: 700
    text-align: center
    transition: .2s
    &:hover
      background: $firstColor
      color: $gray
    @media screen and (max-width: $padWidth)
      padding: 2*$u 3*$u
      font-size: 12px
      line-height: 20px
    @media screen and (max-width: $padWidth)
      padding: 2*$u 3*$u
      font-size: 10px
      line-height: 14px
    @media screen and (max-width: $XXSWidth)
      padding: 2*$u
</style>
