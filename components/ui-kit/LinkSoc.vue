<template>
  <a target="blank" :href="props.link">
    <vk v-if="props.icon === 'vk'" /><tg v-if="props.icon === 'tg'" />
  </a>
</template>

<script setup>
import vk from '~icons/my-icons/vk'
import tg from '~icons/my-icons/tg'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
