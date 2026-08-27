<template lang="pug">
section.main-section
  .text
    span Авторский творческий марафон
    h1 Возвращение в&nbsp;детство
    p 30 зней, которые помогут снова встретиться со своим детством
    .list
      .list__item(v-for="item in list")
        .list__icon
          ui-svg-icon(name="heart" :size="20")
        .list__text {{ item }}
    ui-button(is-animated variant="primary" size="XL") Начать путешествие
  .img
    picture
      source(media="(max-width: 730px)" srcset="/img/marathon/main-section/bg.PNG")
      source(media="(max-width: 1030px)" srcset="/img/marathon/main-section/bg-mobile.PNG")
      img.img__main(src="/img/marathon/main-section/bg.PNG" alt="")
    .img__note
      span Каждый день&nbsp;- маленькое возвращение в прошлое
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
.main-section
  margin: 25*$u 0 0
  display: grid
  grid-template-columns: 1fr 2fr
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
      @include font('t18-finland')
      @media screen and (max-width: $XXXLWidth)
        @include font('t16-finland')
      @media screen and (max-width: $XXLWidth)
        @include font('t14-finland')
      @media screen and (max-width: 730px)
        text-align: center
    .list
      display: grid
      gap: 4*$u
      @media screen and (max-width: $XXXLWidth)
        gap: 3*$u
      @media screen and (max-width: $padWidth)
        gap: $u
      &__item
        display: grid
        grid-template-columns: 5*$u 1fr
        gap: 2*$u
        align-items: center
      &__icon
        color: $firstColor
        width: 5*$u
        height: 5*$u
      &__text
        @include font('t18-demibold')
        @media screen and (max-width: $padWidth)
          @include font('t16-demibold')
  .img
    display: flex
    flex-direction: column
    justify-content: center
    position: relative
    // @media screen and (max-width: $padWidth)
    //   height: 100%
    @media screen and (max-width: 730px)
      order: -1
    picture
      // @media screen and (max-width: $padWidth)
      //   height: 100%
    &__main
      max-width: 100%
      @media screen and (max-width: $padWidth)
        // height: 100%
        object-fit: contain
        overflow: visible
    &__note
      position: absolute
      right: -5%
      bottom: 100%
      @media screen and (max-width: $XXLWidth)
        bottom: 95%
      @media screen and (max-width: 730px)
        right: 0
        bottom: 100%
      span
        display: block
        text-align: center
        max-width: 50*$u
        color: $firstColor
        @include font('t14-finland')
        @media screen and (max-width: 730px)
          max-width: 40*$u
          @include font('t12-finland')
</style>
