<template>
  <a :href="`tel:${toTel(props.tel)}`">
    <phone v-if="props.icon" />
    <span v-if="props.whatsapp">{{ props.whatsapp }}</span>
    <span v-else>{{ props.tel }}</span>
    <whatsapp v-if="props.whatsapp" />
  </a>
</template>

<script setup>
import { defineProps } from 'vue'
import phone from '~icons/my-icons/phone'
import whatsapp from '~icons/my-icons/whatsapp'

const props = defineProps({
  tel: {
    type: String,
    required: true
  },
  icon: {
    type: Boolean,
    default: false
  },
  whatsapp: {
    type: String,
    default: null
  }
})

const toTel = (tel) => tel.replace(/[^+\d]/g, '')
</script>
