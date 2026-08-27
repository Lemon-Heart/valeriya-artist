<template lang="pug">
section.agitation-section
  .text
    h1 Детство невозможно верунть
    p Но можно снова открыть его страницы
    .description Присоединяйся к марафону и начни свое путешествие в самые теплые воспоминания
  .img
    img.img__main(src="/img/marathon/agitation-section/bg.PNG" alt="")
    .img__description Присоединяйся к марафону и начни свое путешествие в самые теплые воспоминания
    ui-button(is-animated variant="primary" size="XL") Хочу на марафон
</template>

<script>
export default {
  setup () {
    const list = [
      'Вспомни давно забытые истории',
      'Проведи время с собой и близкими',
      'Создай книгу воспоминаний своими руками'
    ]
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.agitation-section
  display: grid
  grid-template-columns: 1.3fr 1fr
  align-items: center
  @media screen and (max-width: $padWidth)
    grid-template-columns: 1fr 1fr
  @media screen and (max-width: 730px)
    grid-template-columns: 1fr
    gap: 10*$u
  .text
    display: flex
    flex-direction: column
    justify-content: center
    gap: 10*$u
    @media screen and (max-width: $padWidth)
      gap: 6*$u
    @media screen and (max-width: 730px)
      align-items: center
    span
      @include font('t18-demibold')
    h1
      @include heading-ustroke
      text-align: start
      @media screen and (max-width: $XXXLWidth)
        font-size: 15*$u
        line-height: 15*$u
      @media screen and (max-width: $XXLWidth)
        font-size: 13*$u
        line-height: 13*$u
      @media screen and (max-width: $padWidth)
        font-size: 10*$u
        line-height: 10*$u
      @media screen and (max-width: 730px)
        text-align: center
    p
      color: $firstColor
      @include font('t18-finland')
      @media screen and (max-width: $XXXLWidth)
        @include font('t16-finland')
      @media screen and (max-width: $XXLWidth)
        @include font('t14-finland')
      @media screen and (max-width: 730px)
        text-align: center
    .description
      @include font('t18-demibold')
      @media screen and (max-width: $XXXLWidth)
        @include font('t16-demibold')
      @media screen and (max-width: $padWidth)
        @include font('t14-demibold')
      @media screen and (max-width: 730px)
        display: none
  .img
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: relative
    gap: 10*$u
    &__description
      display: none
      @include font('t14-demibold')
      @media screen and (max-width: 730px)
        display: block
    &__main
      max-width: 100%
      @media screen and (max-width: $padWidth)
        object-fit: contain
        overflow: visible
</style>
