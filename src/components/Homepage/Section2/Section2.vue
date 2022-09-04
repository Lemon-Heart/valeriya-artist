<template lang="pug">
section.section2
  h1
    ui-text-anim Этот курс для тебя, если ты хочешь:
  .advantage
    block-list(:items="advantage")
  ui-button.button(is-animated variant="dark" scroll-to="tariffs") Хочу на курс
</template>

<script>
import { ref } from 'vue'
import BlockList from '@/components/BlockList/BlockList'

export default {
  components: { BlockList },
  setup () {
    const advantage = ref([
      {
        icon: '/img/homepage/section2/molbertwhite.webp',
        text: 'Рисовать профессионально как нравится: в digital, маслом на холсте или карандашом на бумаге'
      },
      {
        icon: '/img/homepage/section2/brandwhite.webp',
        text: 'Развить свой личный бренд и стать востребованным художником'
      },
      {
        icon: '/img/homepage/section2/moneyWhite.webp',
        text: 'Зарабатывать на любимом деле в кратчайшие сроки'
      },
      {
        icon: '/img/homepage/section2/portfoliowhite.webp',
        text: 'Создать портфолио'
      },
      {
        icon: '/img/homepage/section2/earthWhite.webp',
        text: 'Работать в любой точке мира'
      },
      {
        icon: '/img/homepage/section2/timeWhite.webp',
        text: 'Заменить годы обучения в худ.школе и вузе на 1,5 месяца'
      },
      {
        icon: '/img/homepage/section2/handswhite.webp',
        text: 'Найти новых друзей среди художников и обрести поддержку'
      },
      {
        icon: '/img/homepage/section2/portretwhite.webp',
        text: 'Изучить основы портрета максимально понятно и не скучно или прокачать свои навыки'
      }
    ])
    return { advantage }
  }
}
</script>

<style lang="sass" scoped>
.section2
  display: flex
  flex-direction: column
  align-items: center
  .advantage
    margin: 12.5*$u 0
    width: 100%
    @media screen and (max-width: $XXLWidth)
      margin: 10*$u 0
  h1
    text-align: center
    @include font('h1')
    @media screen and (max-width: $padWidth)
      @include font('h2')
    @media screen and (max-width: $mobileWidth)
      @include font('h3')
  .button
    z-index: 10
</style>
