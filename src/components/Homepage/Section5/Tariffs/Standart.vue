<template lang="pug">
.tariff
  .icons
    ui-svg-icon(name="diamond" :size="60")
  .title
    span Тариф
    h1 Стандарт
  .body
    .text <b>Модуль 1.</b> Введение.
    .text <b>Модуль 2.</b> Психология.
    .text <b>Модуль 3.</b> Обучение.
    .text <b>Модуль 4.</b> Продажи.
    .text <b>Модуль 5.</b> Юридическая составляющая.
    .text <b>Модуль 6.</b> Бонусный.
  .footer
    .text Домашние задания.
    .text Чек-листы.
    .text <span class="bold">Сертификат</span> о прохождении курса.
    .text Доступ к урокам на <span class="bold">12 месяцев</span>.
  .footer
    .text Чат с другими учениками курса.
    .text Возможность приобретения <span class="bold">новых знакомств и поддержки</span> от других художников.
  .priceWrapper
    .oldPrice 45 700 ₽
    h1.price 39 900 ₽
  ui-button.button(is-animated variant="dark") Оформить заказ
</template>

<script>
export default {
  setup () {
    return {}
  },
  components: { }
}
</script>

<style lang="sass" scoped>
.icons
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
.button
  margin: 10*$u auto 0 auto
.bold
  font-weight: bold
h1
  color: $firstColor
  text-transform: uppercase
  text-align: center
  @include font('h1')
.tariff
  position: relative
  flex: 1
  display: flex
  flex-direction: column
  padding: 10*$u 5*$u
  // border: 1px solid $cText
  border-radius: $BR
  box-shadow: 0 0 10px 10px $btnBGDarkHover
  height: fit-content
  background: $BGOpacity
  @media screen and (max-width: $XXLWidth)
    max-width: 100*$u
    width: 100%
  .title
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 5*$u
  .body
    display: flex
    flex-direction: column
    margin-bottom: 10*$u
  .footer
    display: flex
    flex-direction: column
    padding: 10*$u 0
    border-top: 1px solid $firstColor
  .text
    @include font('t18-demibold')
    @media screen and (max-width: $padWidth)
      @include font('t16-medium')
    b
      text-transform: uppercase
      font-weight: bold
  .priceWrapper
    display: flex
    flex-direction: column
    align-items: center
    .oldPrice
      text-decoration: line-through
      @include font('h3')
      white-space: nowrap
      @media screen and (max-width: $padWidth)
        @include font('t18-demibold')
</style>
