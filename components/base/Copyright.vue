<template>
  <span v-for="(text, i) in props.text" :key="i">{{ text }}</span>
</template>

<script setup>
const props = defineProps({
  text: {
    type: Array,
    required: true
  }
})
</script>
