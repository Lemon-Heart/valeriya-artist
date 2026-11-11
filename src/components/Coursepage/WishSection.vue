<template lang="pug">
section.wish-section
  h1
    ui-text-anim Этот курс для тебя, если ты хочешь:
  .wish-section__items
    img.wish-section__item(v-for="item in advantage" :key="item.icon" :src="item.icon")
  ui-button.button(is-animated variant="dark" scroll-to="tariffs") Хочу на курс
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const advantage = ref([
      {
        icon: '/img/coursepage/wish-section/molbert.png'
      },
      {
        icon: '/img/coursepage/wish-section/brand.png'
      },
      {
        icon: '/img/coursepage/wish-section/money.png'
      },
      {
        icon: '/img/coursepage/wish-section/portfolio.png'
      },
      {
        icon: '/img/coursepage/wish-section/earth.png'
      },
      {
        icon: '/img/coursepage/wish-section/time.png'
      },
      {
        icon: '/img/coursepage/wish-section/hands.png'
      },
      {
        icon: '/img/coursepage/wish-section/portret.png'
      }
    ])
    return { advantage }
  }
}
</script>

<style lang="sass" scoped>
.wish-section
  display: flex
  flex-direction: column
  align-items: center
  &__items
    display: grid
    background-image: url('/public/img/coursepage/requirements-section/line3.png')
    background-repeat: no-repeat
    background-position: center
    background-size: contain
    grid-template-columns: repeat(4, 1fr)
    gap: 5*$u
    @media screen and (max-width: $padWidth)
      background-image: url('/public/img/coursepage/requirements-section/line.png')
      grid-template-columns: repeat(2, 1fr)
  &__item
    display: block
    height: 20vw
    max-height: 65*$u
    width: auto
    max-width: 100%
    object-fit: contain
    margin: 0 auto
    &:nth-child(3)
      transform: translate(-5%, -5%) scale(1.15)
    &:nth-child(5)
      transform: rotate(15deg)
    &:nth-child(7)
      transform: scale(.95)
    @media screen and (max-width: $padWidth)
      height: 35vw
  .button
    z-index: 10
    margin-top: 10*$u
</style>
