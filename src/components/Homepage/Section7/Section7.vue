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
        text: 'Изучив основы портрета, ты сможешь уверенно рисовать в любой технике: digital, карандашом на бумаге или маслом на холсте - принципы будут работать везде'
      },
      {
        text: 'Рисование перестанет быть источником тревоги и сомнений, а станет любимым пространством  гармонии, спокойствия и вдохновения'
      },
      {
        text: 'Освоенные навыки превратятся в профессиональный инструмент для заказов и дополнительного источника доходов'
      },
      {
        text: 'Создашь сильные, цельные и профессиональные портреты, которые сможешь добавить в своё портфолио'
      },
      {
        text: 'Вместе с курсом ты приобретаешь  творческую семью единомышленников, помогающую тебе расти и быть собой'
      },
      {
        text: 'Избавишься от страхов и получишь уверенность с чего начать рисовать портрет и как вести работу до логического завершения'
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
