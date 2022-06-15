<template>
  <div class="photoBlock">
    <a v-for="(item, i) in props.items" :key="i" class="photoBlock__item" @click="show(i)">
      <img v-lazy="{src: `/img/${item}`}" alt="">
    </a>
  </div>
  <plugins-viewer v-if="viewer && isVisible" :items="props.items" :init-image="imagesView" @close="close" />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  viewer: {
    type: Boolean,
    default: false
  }
})

const imagesView = ref(0)
const isVisible = ref(false)

const show = (i) => {
  imagesView.value = i
  isVisible.value = true
}
const close = () => {
  isVisible.value = false
}
</script>
