<template lang="pug">
.row
  block-list-item(
    v-for="(item, i) in items"
    :key="i"
    :item="item"
  )
</template>

<script>
import BlockListItem from './BlockListItem'

export default {
  components: { BlockListItem },
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
  width: 100%
  display: grid
  grid-template-columns: repeat(auto-fit, 21%)
  grid-gap: 5*$u 0
  gap: 5*$u 0
  justify-content: space-around
  @media screen and (max-width: $padWidth)
    grid-template-columns: repeat(auto-fit, 40%)
  @media screen and (max-width: $XXSWidth)
    grid-template-columns: repeat(auto-fit, 100%)
    grid-gap: 20*$u
    gap: 20*$u
</style>
