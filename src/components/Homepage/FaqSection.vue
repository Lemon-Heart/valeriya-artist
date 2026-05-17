<template lang="pug">
section.faq(id="faq")
  h1
    ui-text-anim Частые вопросы
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
.faq
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
</style>
