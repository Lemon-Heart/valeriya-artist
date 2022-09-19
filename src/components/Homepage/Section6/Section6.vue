<template lang="pug">
section.section6
  h1
    ui-text-anim Что вам потребуется для обучения?
  block-list(:items="items")
</template>

<script>
import { ref } from 'vue'
import BlockList from '@/components/BlockList/BlockList'

export default {
  components: { BlockList },
  setup () {
    const items = ref([
      {
        title: 'Блокнот и ручка',
        icon: '/img/homepage/section6/book.png',
        text: 'Потребуются для теоретических модулей. Он обязательно должен быть самый красивый!'
      },
      {
        title: 'Карандаши',
        icon: '/img/homepage/section6/pen.webp',
        text: 'Карандаш средней твердости НВ (ТМ) Карандаш мягкий 2В/4В (2М/4М) Я люблю использовать механический карандаш'
      },
      {
        title: 'Бумага',
        icon: '/img/homepage/section6/paper.webp',
        text: 'Плотность ~200 г/м2 Формат А3 Продаётся в папках «Для черчения» Бумага для акварели или обычная для печати НЕ подойдёт'
      },
      {
        title: 'Ластик/клячка',
        icon: '/img/homepage/section6/eraser.png',
        text: 'Ластик выбирайте мягкий белый. Лучше использовать клячку, т.к. она не затирает бумагу, не оставляет крошек. НЕ рекомендую использовать цветные ластики, т.к. они пачкают бумагу.'
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
</style>
