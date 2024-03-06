<template lang="pug">
.tariff(:class="{ 'tariff_alt': alt }")
  .tariff__icons(v-if="alt")
    ui-svg-icon(name="diamond" :size="60")
  .tariff__title
    span Тариф
    h1 {{ name }}
  .tariff__body(v-if="textTop")
    .tariff__text(v-html="textTop")
  .tariff__footer(v-if="textMiddle")
    .tariff__text(v-html="textMiddle")
  .tariff__footer(v-if="textBottom")
    .tariff__text(v-html="textBottom")
  .tariff__footer(v-if="textMore")
    .tariff__text(v-html="textMore")
  .tariff__priceWrapper
    template(v-if="newPrice")
      .tariff__oldPrice {{ price }} ₽
      h1.tariff__price {{ newPrice }} ₽
    template(v-else)
      .tariff__defaultPrice {{ price }} ₽
  ui-button.tariff__button(is-animated variant="dark" @click="$emit('buy', 'Стандарт')") Оформить заказ
</template>

<script>
export default {
  props: {
    alt: Boolean,
    name: String,
    textTop: String,
    textMiddle: String,
    textBottom: String,
    textMore: String,
    price: String,
    newPrice: String,
    code: String
  }
}
</script>

<style lang="sass" scoped>
.tariff
  position: relative
  flex: 1
  display: flex
  flex-direction: column
  padding: 10*$u 5*$u
  border: 1px solid $white
  border-radius: $BR
  box-shadow: 0 0 10px 10px $btnBGDarkHover
  height: fit-content
  max-width: calc((100% - 10*$u) / 3)
  min-width: calc((100% - 10*$u) / 3)
  &_alt
    box-shadow: 0 0 10px 10px $btnBGDarkHover
    border: none
    background: $BGOpacity
  @media screen and (max-width: $XXLWidth)
    max-width: 100*$u
    margin-bottom: 20*$u
    width: 100%
  &__title
    display: flex
    flex-direction: column
    align-items: center
  &__body
    display: flex
    flex-direction: column
    margin-bottom: 10*$u
    &_with-margin
      margin-bottom: 16.75*$u
  &__footer
    display: flex
    flex-direction: column
    padding: 10*$u 0
    border-top: 1px solid $firstColor
  &__text
    @include font('t18-demibold')
    @media screen and (max-width: $padWidth)
      @include font('t16-medium')
    &:deep(b)
      font-weight: bold
  &__priceWrapper
    display: flex
    flex-direction: column
    align-items: center
  &__oldPrice, &__defaultPrice
    text-decoration: line-through
    @include font('h3')
    white-space: nowrap
    @media screen and (max-width: $padWidth)
      @include font('t18-demibold')
  &__defaultPrice
    text-decoration: none
    @include font('h1')
  &__button
    margin: 10*$u auto 0 auto
  &__icons
    display: flex
    grid-gap: 4*$u
    gap: 4*$u
    position: absolute
    align-items: center
    top: 0
    left: 50%
    transform: translate(-50%, -60%)
    img
      width: 15*$u
      height: 15*$u
      object-fit: contain
</style>
