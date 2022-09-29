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
        text: 'Рисовать на чем нравится: в digital, маслом на холсте или карандашом на бумаге'
      },
      {
        icon: '/img/homepage/section2/brandwhite.webp',
        text: 'Развить свой личный бренд и стать востребованным художником'
      },
      {
        icon: '/img/homepage/section2/moneywhite.webp',
        text: 'Зарабатывать на любимом деле в кратчайшие сроки'
      },
      {
        icon: '/img/homepage/section2/portfoliowhite.webp',
        text: 'Создать портфолио'
      },
      {
        icon: '/img/homepage/section2/earthwhite.png',
        text: 'Работать из любой точки мира'
      },
      {
        icon: '/img/homepage/section2/timewhite.webp',
        text: 'Заменить годы обучения в художественной школе и вузе на 1,5 месяца'
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
    margin-bottom: 10*$u
    width: 100%
    @media screen and (max-width: $padWidth)
      margin: 20*$u 0
    @media screen and (max-width: $XXSWidth)
      margin: 20*$u 0 0
  .button
    z-index: 10
</style>
