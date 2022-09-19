<template lang="pug">
.row
  learn-item(
    v-for="(item, i) in items"
    :key="i"
    :number="i + 1"
    :title="item.title"
    :list="item.list"
  )
</template>

<script>
import LearnItem from './LearnListItem'

export default {
  components: { LearnItem },
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.row
  display: grid
  grid-template-columns: 1fr 1fr
  grid-auto-rows: 1fr
  grid-gap: 10*$u
  gap: 10*$u
  @media screen and (max-width: $padWidth)
    grid-template-columns: 1fr
    grid-auto-rows: auto
    grid-gap: 0*$u
    gap: 0*$u
</style>
