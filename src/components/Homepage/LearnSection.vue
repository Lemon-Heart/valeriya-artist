<template lang="pug">
section.section3
  h1
    ui-text-anim Чему ты научишься?
  list-component(:items="items" variant="number")
</template>

<script>
import ListComponent from '@/components/ListComponent/ListComponent'
import { ref } from 'vue'

export default {
  components: { ListComponent },
  setup () {
    const items = ref([
      {
        title: 'Основы',
        list: [
          'Разберешься в анатомии: от черепа и мышц до строения каждой части лица;',
          'Изучишь построение в разных ракурсах;',
          'Научишься сам видеть и исправлять свои ошибки.'
        ]
      },
      {
        title: 'Передача',
        list: [
          'Научишься делать портрет «живым»;',
          'Передавать сходство с учетом индивидуальных особенностей;',
          'Передавать эмоции и настроение;'
        ]
      },
      {
        title: 'Лайфхаки и фишки',
        list: [
          'Начнешь анализировать референсы как художник, а не зритель;',
          'Узнаешь как усилить портрет и сделать его выразительнее чем референс;'
        ]
      },
      {
        title: 'Уверенность',
        list: [
          'Перестанешь бояться сложных ракурсов и нестандартных лиц;',
          'Научишься доводить работу до гармоничного завершения;',
          'Результат станет предсказуемым, а процесс - спокойным и в удовольствие.'
        ]
      },
      {
        title: 'Осознанность',
        list: [
          'Перестанешь бездумно срисовывать и начнешь мыслить формой;',
          'Поймешь, как сохранять сходство даже при стилизации;'
        ]
      }
    ])
    return { items }
  }
}
</script>

<style lang="sass" scoped>
.section3
  display: flex
  flex-direction: column
  @media screen and (max-width: $padWidth)
    padding-bottom: 20*$u
</style>
