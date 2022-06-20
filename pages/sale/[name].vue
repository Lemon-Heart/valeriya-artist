<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <div class="detail">
        <img v-lazy="{src: `/img/${data.img}`}" alt="">
        <div class="detail__content">
          <span :key="route.params.name">{{ data.text }}</span>
          <p :key="route.params.name">{{ data.textDetail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { useRoute } from 'vue-router'
const route = useRoute()

const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData(`${route.params.name}`, () => $fetch(`${$baseURL}/mock/sale/detail/${route.params.name}.json`))

const title = route.params.name
useHead({
  title
})
</script>
