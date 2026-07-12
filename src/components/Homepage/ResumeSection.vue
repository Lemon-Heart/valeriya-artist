<template lang="pug">
section.resume-section
  h1
    ui-text-anim Познакомимся?
  .about
    .shadowWrapper
      .shadow
    .img
      img(:src="'img/homepage/section8/1.PNG'")
    .text
      ul
        li
          span Меня зовут Валерия. Я художник, и рисование — это часть моей жизни уже больше 20 лет.
        li
          span Я начала с классики: детская художественная школа, академический рисунок, годы обучения, бесконечные наброски и поиски «правильной линии». Потом архитектурное образование - композиция, черчение, форма, логика... Всё это сильно повлияло на то, как я вижу портрет сегодня: не как набор штрихов, а как цельный образ, характер и состояние человека.
        li
          span Я много лет училась и продолжаю учиться до сих пор: искусству, блогерству, преподаванию, работе с людьми. Помимо искусства, я глубоко погружалась в психологию и продажи, потому что в какой-то момент поняла: художнику важно не только уметь рисовать, но и уметь доносить ценность своего творчества.
        li
          span Сегодня развиваюсь в разных направлениях: пишу картины маслом, участвую в выставках, провожу персональные занятия, мастер-классы и, конечно, продолжаю дополнять этот курс. Портрет всегда был и остается для меня особенным направлением — это диалог с человеком, попытка почувствовать и передать его внутреннее состояние, а не просто внешнее сходство.
        li
          span Я прошла путь от «рисую для себя» до стабильного дохода на творчестве. Создала собственный бренд Valeriya.Artist. Сотрудничала с арт-проектом для фестиваля Burning Man в 2022 году.
        li
          span Этот курс я создала для тех, кто:
          br
          span — боится портретов, но очень хочет их рисовать
          br
          span — застрял между «что-то не так» и «не понимаю, как исправить»
          br
          span — устал от сухой теории и хочет ясности, структуры и поддержки
        li
          span Я не обещаю волшебную таблетку. Зато я даю понятную систему, честную обратную связь и опыт, который сама собирала годами  через практику, ошибки и рост.
        li
          span  Если ты здесь — значит, тебе откликается портрет. И я буду рада пройти этот путь вместе с тобой 🤍
</template>

<style lang="sass" scoped>
.resume-section
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
        max-height: 250*$u
        overflow: hidden
      @media screen and (max-width: $XXLWidth)
        max-height: 220*$u
      @media screen and (max-width: $padWidth)
        max-height: 190*$u
      @media screen and (max-width: $XSWidth)
        max-height: 150*$u
      @media screen and (max-width: $XXSWidth)
        max-height: 120*$u
      @media screen and (max-width: $mobileWidth)
        max-height: 110*$u
      img
        position: absolute
        width: 90%
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
