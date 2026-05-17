<template lang="pug">
section.section10
  h1
    ui-text-anim Наиболее частые вопросы
  Faq
</template>

<script>
import Faq from '@/components/Faq/Faq'

export default {
  components: { Faq },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.section10
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
</style>
