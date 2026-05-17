<template lang="pug">
.row
  template(v-if="variant === 'icon'")
    list-item-icon(
      v-for="(item, i) in items"
      :key="i"
      :text="item.text"
    )
  template(v-if="variant === 'number'")
    list-item-number(
      v-for="(item, i) in items"
      :key="i"
      :number="i + 1"
      :title="item.title"
      :list="item.list"
    )
</template>

<script>
import ListItemNumber from './ListItemNumber'
import ListItemIcon from './ListItemIcon'

export default {
  components: { ListItemNumber, ListItemIcon },
  props: {
    items: {
      type: Array,
      default: null
    },
    variant: {
      type: String,
      default: 'icon' // 'number' | 'icon'
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
