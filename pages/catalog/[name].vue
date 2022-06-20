<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      {{ $route.params.name }}
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
const title = 'Анализы'
useHead({
  title
})
</script>
