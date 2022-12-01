<template lang="pug">
section.section8
  h1
    ui-text-anim Об авторе
  .about
    .shadowWrapper
      .shadow
    .img
      img(:src="'img/homepage/section8/1.webp'")
    .text
      ul
        li
          span Валерия – художник более 20 лет.
        li
          span 15 лет посвятила образованию: 5 лет в детской художественной школе, 2 года индивидуального дополнительного образования по рисунку, 2 года дополнительного образования при Строительном институте по направлениям: «Композиция» и «Черчение», 5 лет на кафедре «Архитектура и дизайн» Строительного института, всегда обучалась и продолжаю обучаться самостоятельно не только в творчестве, а еще в продажах и психологии.
        li
          span По образованию архитектор.
        li
          span Владеет такими направлениями и техниками как: ручная художественная роспись одежды, стен, картины и портреты акварелью, карандашом, акрилом.
        li
          span Прошла путь от рисования до продаж с доходом 100.000 руб./мес. на творчестве.
        li
          span Создатель бренда Valeriya.Artist.
        li
          span Сотрудничала с проектом для участия в фестивале Burning Man в 2022 году.
</template>

<style lang="sass" scoped>
.section8
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
  .about
    display: flex
    border: 1px solid $white
    border-radius: $BR
    box-shadow: 0 0 10px 10px $btnBGDarkHover
    position: relative
    @media screen and (max-width: $XXXLWidth)
      flex-direction: column
      border: none
      box-shadow: none
    .shadowWrapper
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: 45*$u
      overflow: hidden
      border-radius: 0 0 $BR $BR
      @media screen and (max-width: $XXXLWidth)
        display: none
      .shadow
        position: absolute
        box-shadow: inset 3px 29px 39px 12px rgb(21 21 21 / 100%)
        bottom: 0
        left: -5%
        right: -5%
        z-index: 1
        height: 52*$u
        transform: rotate(180deg)
    .img
      flex: 1
      position: relative
      @media screen and (max-width: $XXXLWidth)
        max-height: 200*$u
        overflow: hidden
      @media screen and (max-width: $XXLWidth)
        max-height: 160*$u
      @media screen and (max-width: $padWidth)
        max-height: 130*$u
      @media screen and (max-width: $XSWidth)
        max-height: 110*$u
      @media screen and (max-width: $XXSWidth)
        max-height: 95*$u
      @media screen and (max-width: $mobileWidth)
        max-height: 75*$u
      img
        position: absolute
        width: 100%
        bottom: 0
        transform: translateX(-5%)
        @media screen and (max-width: $XXXLWidth)
          position: inherit
          transform: translateX(0)
    .text
      padding: 10*$u 10*$u 10*$u 0
      flex: 1.1
      @include font('t16-regular')
      line-height: 20px
      @media screen and (max-width: 1390px)
        padding: 5*$u 10*$u 5*$u 0
      @media screen and (max-width: $XXXLWidth)
        z-index: 10
        border: 1px solid $white
        padding: 10*$u
        border-radius: $BR
        box-shadow: 0 -10px 20px 10px black
      @media screen and (max-width: $XXSWidth)
        padding: 5*$u
      ul
        li
          margin: 7*$u 0
          @media screen and (max-width: 1330px)
            margin: 6*$u 0
</style>
