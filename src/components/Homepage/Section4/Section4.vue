<template lang="pug">
section.section4
  h1 О курсе
  .aboutCourse
    .left
      .title Программа курса охватывает все аспекты рисования:
      ul
        li
          span изучение анатомии
        li
          span развитие глазомера
        li
          span методы измерения
        li
          span изучение перспективы
        li
          span понимание конструкции
        li
          span тональность и объем
        li
          span тренировка техники
        li
          span эстетика образа
    .img
      img(src="/img/homepage/section4/module0.png")
    .right Я использую усредненный подход между академическим рисунком и реализмом. Академизм – это основа построения и выявления пропорций, реализм – это техника. Я считаю, что если ты владеешь тем и другим, то можешь смело считать себя настоящим художником! А если к этому добавить авторскую технику, личный бренд и позиционирование – ты станешь уникальны и востребованным. Все эти знания я накопила 15-летним опытом и упаковала в один курс, который ты можешь пройти за 3 недели.
  modules
</template>

<script>
import Modules from './Modules/Modules'

export default {
  components: { Modules },
  setup () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.section4
  display: flex
  flex-direction: column
  h1
    color: $firstColor
    text-transform: uppercase
    text-align: center
    margin-bottom: 10*$u
    @include font('h1')
    @media screen and (max-width: $padWidth)
      @include font('h2')
    @media screen and (max-width: $mobileWidth)
      @include font('h3')
  .aboutCourse
    display: flex
    gap: 10*$u
    position: relative
    @media screen and (max-width: $XXLWidth)
      flex-direction: column-reverse
    @media screen and (max-width: $XXSWidth)
      gap: 5*$u
    .img
      position: absolute
      width: 400px
      left: 50%
      top: 50%
      transform: translate(-90%, -50%)
      @media screen and (max-width: $XXXLWidth)
        transform: translate(-85%, -50%)
        width: 300px
      @media screen and (max-width: $XXLWidth)
        width: 400px
        transform: translate(-10%, 0%)
        left: auto
        top: auto
        bottom: 0
        right: 0
      @media screen and (max-width: $padWidth)
        transform: translate(-10%, -10%)
        width: 300px
      @media screen and (max-width: $XSWidth)
        transform: translate(0%, -20%)
        width: 250px
      @media screen and (max-width: $XXSWidth)
        position: inherit
        transform: translate(0%)
        margin: auto
        left: auto
        top: auto
        bottom: auto
        right: auto
      img
        object-position: center
        object-fit: contain
        width: 100%
    .right
      flex: 5
      text-align: justify
      @include font('t18-demibold')
      @media screen and (max-width: $XXXLWidth)
        @include font('t16-demibold')
      @media screen and (max-width: $XXLWidth)
        flex: 1
      @media screen and (max-width: $XXSWidth)
        @include font('t15-regular')
    .left
      flex: 6
      @include font('t16-demibold')
      @media screen and (max-width: $XXLWidth)
        flex: 1
      @media screen and (max-width: $XXSWidth)
        @include font('t15-regular')
    .title
      margin-bottom: 4*$u
</style>
