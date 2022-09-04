<template lang="pug">
section.section3
  h1
    ui-text-anim Чему ты научишься?
  learn
</template>

<script>
import Learn from './Learn/Learn'

export default {
  components: { Learn },
  setup () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.section3
  display: flex
  flex-direction: column
  @media screen and (max-width: $padWidth)
    padding-bottom: 20*$u
  h1
    text-align: center
    margin-bottom: 10*$u
    @include font('h1')
    @media screen and (max-width: $padWidth)
      @include font('h2')
    @media screen and (max-width: $mobileWidth)
      @include font('h3')
</style>
