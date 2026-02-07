<template lang="pug">
section.section6
  h1
    ui-text-anim Что тебе потребуется для обучения
  block-list(:items="items")
  div.section6__text Сразу после оплаты курса тебе будет доступен 1 модуль «Материалы и техники», где я подробно рассказываю какие материалы лучше выбрать, где их приобретать и как красиво оформить скетчбук, чтобы он стал не только местом для обучения, а еще и местом вдохновения
</template>

<script>
import { ref } from 'vue'
import BlockList from '@/components/BlockList/BlockList'

export default {
  components: { BlockList },
  setup () {
    const items = ref([
      {
        title: 'Скетчбук или бумага',
        icon: '/img/homepage/section6/book.png',
        text: 'Плотность ~200г/м² Формат А4 (в идеале А3) Бумага для акварели или принтера НЕ подойдет'
      },
      {
        title: 'Карандаши',
        icon: '/img/homepage/section6/pen.webp',
        text: 'Потребуется 3 вида: средней твердости НВ(ТМ) мягкие 2В(М) и 6В(М)'
      },
      {
        title: 'Блокнот',
        icon: '/img/homepage/section6/paper.webp',
        text: 'Может потребоваться для конспектов, а можешь записывать их прямо в скетчбуке'
      },
      {
        title: 'Ластик/клячка',
        icon: '/img/homepage/section6/eraser.png',
        text: 'Клячка лучше - не затирает бумагу и не оставляет крошек. Ластик советую исключительно белый и мягкий'
      }
    ])
    return { items }
  }
}
</script>

<style lang="sass" scoped>
.section6
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
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
