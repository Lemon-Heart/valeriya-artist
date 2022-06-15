<template>
  <label class="label-checkbox" :class="{'error': props.error}">
    <input :value="props.modelValue" type="checkbox" :name="props.name" :checked="props.checked" @input="input">
    <span class="label-checkbox__fake" />
    <span class="label">{{ props.label }}</span>
  </label>
</template>

<script setup>
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
  error: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits()

const input = ($event) => {
  emits('update:checked', $event.target.checked)
  emits('update:modelValue', $event.target.value)
}
</script>
