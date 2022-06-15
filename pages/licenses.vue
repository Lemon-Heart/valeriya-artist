
<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <blocks-photo :items="data.items" :viewer="true" />
    </div>
  </div>
</template>

<script setup>
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('licenses', () => $fetch(`${$baseURL}/mock/licenses.json`))

const title = 'Лицензии'
useHead({ title })
</script>
