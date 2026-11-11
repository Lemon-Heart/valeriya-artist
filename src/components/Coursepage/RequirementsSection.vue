<template lang="pug">
section.requirements-section
  h1
    ui-text-anim Что тебе потребуется для обучения
  .requirements-section__items
    img.requirements-section__item(v-for="item in items" :key="item.icon" :src="item.icon")
  div.requirements-section__text Сразу после оплаты курса тебе будет доступен 1 модуль «Материалы и техники», где я подробно рассказываю какие материалы лучше выбрать, где их приобретать и как красиво оформить скетчбук, чтобы он стал не только местом для обучения, а еще и местом вдохновения
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const items = ref([
      {
        icon: '/img/coursepage/requirements-section/paper1.png'
      },
      {
        icon: '/img/coursepage/requirements-section/pen1.png'
      },
      {
        icon: '/img/coursepage/requirements-section/book1.png'
      },
      {
        icon: '/img/coursepage/requirements-section/eraser1.png'
      }
    ])
    return { items }
  }
}
</script>

<style lang="sass" scoped>
.requirements-section
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
  &__items
    display: grid
    background-image: url('/public/img/coursepage/requirements-section/line1.png')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    grid-template-columns: repeat(4, 1fr)
    @media screen and (max-width: $padWidth)
      background-image: url('/public/img/coursepage/requirements-section/line2.png')
      background-size: 115%
      background-position: right
      grid-template-columns: repeat(2, 1fr)
      gap: 10vw 0
  &__item
    display: block
    height: 20vw
    max-height: 65*$u
    width: auto
    max-width: 100%
    object-fit: contain
    margin: 0 auto
    &:first-child
      transform: translate(-10%, -5%) scale(1.1)
    @media screen and (max-width: $padWidth)
      height: 35vw
  &__text
    font-size: 20px
    text-align: center
    line-height: 32px
    margin-top: 20*$u
    padding: 10*$u 5*$u
    border: 1px solid $white
    border-radius: $BR
    box-shadow: 0 0 10px 10px $btnBGDarkHover
    @media screen and (max-width: $XXSWidth)
      font-size: 16px
      line-height: 26px
</style>
