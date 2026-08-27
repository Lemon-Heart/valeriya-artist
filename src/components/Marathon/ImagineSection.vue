<template lang="pug">
section.imagine-section
  img.imagine-section__flowers(src="/img/marathon/imagine-section/flowers.PNG" v-observe)
  h1
    ui-text-anim Представь...
  .imagine-section__block
    img.imagine-section__arrow.imagine-section__arrow_1(src="/img/marathon/imagine-section/arrow-1.PNG" v-observe)
    img.imagine-section__arrow.imagine-section__arrow_2(src="/img/marathon/imagine-section/arrow-2.PNG" v-observe)
    img.imagine-section__arrow.imagine-section__arrow_3(src="/img/marathon/imagine-section/arrow-3.PNG" v-observe)
    .imagine-section__item(
      v-for="(item, i) in list"
      :key="i"
      v-observe
    )
      img.imagine-section__img(:src="item.image")
      .imagine-section__description(:class="i % 2 === 0 ? 'even' : 'odd'" v-html="item.description")
</template>

<script>
export default {
  setup () {
    const list = [
      {
        image: '/img/marathon/imagine-section/1.PNG',
        description: 'Ты находишь на карте дом, где прошло твое детство. И видишь не только его, а еще тропинки, по которым гулял.'
      },
      {
        image: '/img/marathon/imagine-section/2.PNG',
        description: 'Начинаешь рассказывать маме<br>«А помнишь…»<br>И она продолжает. А потом вы вместе смеетесь.'
      },
      {
        image: '/img/marathon/imagine-section/3.PNG',
        description: 'Ты берешь в руки карандаш… И Начинаешь рисовать свои воспоминания.'
      },
      {
        image: '/img/marathon/imagine-section/4.PNG',
        description: 'В памяти всплывают все новые истории, будто кадры из старого кино. И все их хочется запечатлеть.'
      }
    ]
    return { list }
  }
}
</script>

<style lang="sass" scoped>
.imagine-section
  position: relative
  &__block
    position: relative
    display: grid
    gap: 5*$u 25*$u
    margin-top: 10*$u
    grid-template-columns: 1fr 1fr
    @media screen and (max-width: $XXXLWidth)
      gap: 5*$u
    @media screen and (max-width: $XSWidth)
      grid-template-columns: 1fr
  &__item
    position: relative
    opacity: 0
    transform: scale(0)
    transition: .5s
    &.observe
      opacity: 1
      transform: scale(1)
  &__img
    width: 100%
  &__description
    position: absolute
    color: $brown
    max-width: 60%
    @include font('t18-demibold')
    font-size: clamp($u, calc(100vw / 67), 4.5*$u)
    line-height: clamp($u, calc(100vw / 43), 7*$u)
    top: 70%
    text-align: center
    &.even
      right: 15%
    &.odd
      left: 10%
    @media screen and (max-width: $XSWidth)
      font-size: calc(100vw / 32)
      line-height: calc(100vw / 21)
  &__arrow
    position: absolute
    opacity: 0
    transition: 2s
    &.observe
      opacity: 1
    @media screen and (max-width: $XXXLWidth)
      display: none
    &_1
      width: 55*$u
      left: 38%
      top: 15%
      transform: rotate(180deg)
    &_2
      width: 65*$u
      left: 39%
      top: 55%
      transform: rotate(125deg)
    &_3
      width: 65*$u
      left: 39%
      top: 100%
      transform: rotate(187deg) scaleX(-1)
  &__flowers
    position: absolute
    top: 2*$u
    left: 65%
    width: 30*$u
    opacity: 0
    transform: scale(0)
    transition: .4s
    &.observe
      opacity: 1
      transform: scale(1)
    @media screen and (max-width: $XXLWidth)
      left: 70%
      width: 25*$u
    @media screen and (max-width: $XXSWidth)
      left: 75%
      width: 20*$u
</style>
