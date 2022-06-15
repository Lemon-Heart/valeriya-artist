<template>
  <label class="label-text" :class="addClass">
    <input :placeholder="placeholder" :value="props.modelValue" type="text" :name="props.name" @input="$emit('update:modelValue', $event.target.value)">
    <span>{{ props.label }}</span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, null, undefined],
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  error: {
    type: Boolean,
    default: false
  }
})

const addClass = computed(() => {
  const className = []
  props.error ? className.push('error') : className.filter(function (f) { return f !== 'error' })
  props.modelValue === '' || props.modelValue === null ? className.filter(function (f) { return f !== 'notEmpty' }) : className.push('notEmpty')
  return className
})
</script>
