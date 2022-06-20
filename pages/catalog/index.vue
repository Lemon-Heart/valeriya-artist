<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <div class="catalog">
        <nuxt-link v-for="(category, i) in data" :key="i" :to="`/catalog/${category.name}`" class="catalog__item">{{ category.name }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('analyzes', () => $fetch(`${$baseURL}/mock/analyzes.json`))

const title = 'Анализы и цены'
useHead({
  title
})
</script>
