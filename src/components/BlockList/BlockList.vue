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
  @media screen and (max-width: $XXLWidth)
    grid-template-columns: repeat(auto-fit, 37%)
  @media screen and (max-width: $XXSWidth)
    grid-template-columns: repeat(auto-fit, 100%)
    grid-gap: 0
    gap: 0
</style>
