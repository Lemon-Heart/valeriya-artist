<template lang="pug">
.svgIconComponent(
  v-if="iconsFolderPath && name",
  :style="iconStyles"
)
  .svg(v-html="html")
</template>

<script>
import { reactive } from 'vue'

const iconCache = reactive({})

export default {
  props: {
    iconsFolderPath: {
      type: String,
      default: '/icons/'
    },
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 0
    }
  },
  computed: {
    imageUrl () {
      return `${this.iconsFolderPath}${this.name}.svg`
    },
    iconStyles () {
      return {
        width: !this.size ? '100%' : `${this.size}px`,
        height: !this.size ? '100%' : `${this.size}px`
      }
    },
    html () {
      return iconCache[this.name]
    }
  },
  watch: {
    name: {
      handler () {
        const name = this.name
        if (name && iconCache[name] === undefined) {
          iconCache[name] = null
          fetch(this.imageUrl)
            .then(response => response.text())
            .then(svg => { iconCache[name] = svg })
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="sass" scoped>
.svgIconComponent
  display: grid
  > .svg
    line-height: 0

    &:deep(svg)
      width: 100%
      height: 100%
</style>
