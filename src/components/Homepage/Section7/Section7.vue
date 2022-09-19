<template lang="pug">
section.section7
  h1
    ui-text-anim Ты приобретаешь не просто новые знания в рисовании портретов!
  learn-list(:items="items")
</template>

<script>
import LearnList from './LearnList/LearnList'
import { ref } from 'vue'

export default {
  components: { LearnList },
  setup () {
    const items = ref([
      {
        text: 'Избавишься от страхов и «тараканов» в голове.'
      },
      {
        text: 'Научишься зарабатывать на любимом деле и работать из любой точки мира'
      },
      {
        text: 'Изучив основы портрета, ты сможешь рисовать их профессионально в той технике, которая тебе больше нравится: в digital, маслом на холсте или карандашом на бумаге.'
      },
      {
        text: 'Получишь сертификат о прохождении курса, который сможешь добавить в портфолио.'
      },
      {
        text: 'Научишься создавать продающее портфолио.'
      },
      {
        text: 'Обретешь новое окружение единомышленников, поддержку, вдохновение и мотивацию.'
      }
    ])
    return { items }
  }
}
</script>

<style lang="sass" scoped>
.section7
  margin-top: 50*$u
  display: flex
  flex-direction: column
  @media screen and (max-width: $padWidth)
    margin-top: 25*$u
    padding-bottom: 20*$u
</style>
