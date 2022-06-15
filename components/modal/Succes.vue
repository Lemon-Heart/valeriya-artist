<template>
  <div class="status">
    <h2><succes class="succes" />Успех!</h2>
    <span>Мы скоро с Вами свяжемся</span>
  </div>
</template>

<script setup>
import succes from '~icons/my-icons/succes'
// eslint-disable-next-line no-undef
const { $modal } = useNuxtApp()
setTimeout(() => {
  $modal.hide()
}, 2000)
</script>
