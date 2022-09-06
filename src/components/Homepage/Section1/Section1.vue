<template lang="pug">
section.section1
  .text
    h1 С чего начинается портрет
    p Научись рисовать профессиональные портреты, зарабатывай на любимом деле из любой точки мира, стань частью творческого сообщества и убедись, что все твои мечты гораздо ближе, чем кажется.
    ui-button.buttonDesktop(is-animated scroll-to="tariffs") Оформить заявку
  .img
    img(v-lazy="'/img/homepage/section1/3.webp'")
    ui-button.buttonMobile(is-animated scroll-to="tariffs") Оформить заявку
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.section1
  display: flex
  height: calc( 100vh - #{35*$u} )
  position: relative
  overflow: hidden
  @media screen and (max-width: $padWidth)
    flex-direction: column
  .text
    display: flex
    flex-direction: column
    flex: 1
    justify-content: center
    .buttonDesktop
      @media screen and (max-width: $padWidth)
        display: none
    h1
      text-transform: uppercase
        color: $firstColor
      @include font('h1')
      @media screen and (max-width: $padWidth)
        @include font('h2')
      @media screen and (max-width: $mobileWidth)
        @include font('h3')
    p
      @include font('t18-demibold')
      @media screen and (max-width: $padWidth)
        @include font('t16-demibold')
      @media screen and (max-width: $mobileWidth)
        @include font('t16-regular')
    h1, p
      margin-bottom: 10*$u
      @media screen and (max-width: $padWidth)
        margin-bottom: 5*$u
        text-align: center
  .img
    display: flex
    flex-direction: column
    flex: 1
    justify-content: flex-end
    @media screen and (max-width: $XXXLWidth)
      flex: 1
    @media screen and (max-width: $padWidth)
      align-items: center
    img
      width: 100%
      transform: scale(-1, 1)
      @media screen and (max-width: $padWidth)
        transform: none
    .buttonMobile
      display: none
      @media screen and (max-width: $padWidth)
        justify-content: center
        display: flex
        position: absolute
        bottom: 5*$u
        z-index: 10
        min-width: 50*$u
</style>
