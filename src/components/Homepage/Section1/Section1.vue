<template lang="pug">
section.section1
  .text
    h1 С чего начинается портрет
    p Научись рисовать профессиональные портреты, зарабатывай на любимом деле из любой точки мира, стань частью творческого сообщества и убедись, что все твои мечты гораздо ближе, чем кажется.
    ui-button.buttonDesktop(is-animated scroll-to="tariffs") Оформить заявку
  .img
    img(:src="'/img/homepage/section1/3.webp'")
  ui-button.buttonMobile(is-animated scroll-to="tariffs") Оформить заявку
</template>

<style lang="sass" scoped>
.section1
  display: flex
  height: calc( 100vh - #{35*$u} )
  position: relative
  overflow: hidden
  @media screen and (max-width: $padWidth)
    flex-direction: column
  @media screen and (max-width: $mobileWidth)
    height: auto
  .text
    display: flex
    flex-direction: column
    flex: 1
    justify-content: center
    @media screen and (max-width: $padWidth)
      padding-top: 2.5*$u
    .buttonDesktop
      @media screen and (max-width: $padWidth)
        display: none
    h1
      text-align: start
      @media screen and (max-width: $padWidth)
        text-align: center
    p
      margin-bottom: 10*$u
      @include font('t18-demibold')
      @media screen and (max-width: $padWidth)
        @include font('t16-demibold')
        margin-bottom: 0
        text-align: center
      @media screen and (max-width: $mobileWidth)
        @include font('t16-regular')
  .img
    display: flex
    flex-direction: column
    flex: 1
    justify-content: flex-end
    @media screen and (max-width: $padWidth)
      align-items: center
      margin-top: 5*$u
    img
      width: 100%
      max-height: 100%
      object-fit: contain
      @media screen and (max-width: $padWidth)
        object-fit: cover
        transform: none
  .buttonMobile
    display: none
    @media screen and (max-width: $padWidth)
      justify-content: center
      display: flex
      left: 50%
      transform: translateX(-50%)
      position: absolute
      bottom: 5*$u
      z-index: 10
      min-width: 50*$u
</style>
