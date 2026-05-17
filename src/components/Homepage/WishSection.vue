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
        text: 'Разобраться в основах и уверенно доводить портрет до законченного результата'
      },
      {
        icon: '/img/homepage/section2/brandwhite.webp',
        text: 'Найти свой авторский почерк для развития личного бренда художника'
      },
      {
        icon: '/img/homepage/section2/moneywhite.webp',
        text: 'Заниматься любимым делом, монетизируя свои навыки'
      },
      {
        icon: '/img/homepage/section2/portfoliowhite.webp',
        text: 'Сформировать портфолио на основе сильных работ'
      },
      {
        icon: '/img/homepage/section2/earthwhite.png',
        text: 'Работать из любой точки мира'
      },
      {
        icon: '/img/homepage/section2/timewhite.webp',
        text: 'Сфокуссироваться на самом важном, без лишних лет обучения'
      },
      {
        icon: '/img/homepage/section2/handswhite.webp',
        text: 'Стать частью творческого сообщества единомышленников и обрести поддержку'
      },
      {
        icon: '/img/homepage/section2/portretwhite.webp',
        text: 'Научиться видеть и передавать сходство в портрете'
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
