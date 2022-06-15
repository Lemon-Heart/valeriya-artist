<template>
  <div class="status">
    <h2><error class="error" />Произошла ошибка</h2>
    <span>Попробуйте позже</span>
  </div>
</template>

<script setup>
import error from '~icons/my-icons/error'
// eslint-disable-next-line no-undef
const { $modal } = useNuxtApp()
setTimeout(() => {
  $modal.hide()
}, 2000)
</script>
