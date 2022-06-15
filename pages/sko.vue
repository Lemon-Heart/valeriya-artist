<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <h2>{{ data.h2 }}</h2>
      <div class="skoBlock">
        <div v-for="(item, i) in data.items" :key="i" class="skoBlock__item">
          <img :src="`/img/${item.img}`" alt="">
          <h4>{{ item.head }}</h4>
          <span class="skoBlock__sp">Сайт</span>
          <a target="blank" :href="item.site">{{ item.site }}</a>
          <span class="skoBlock__sp">Телефон</span>
          <ui-kit-link-tel v-for="(phone, j) in item.numbers" :key="j" :tel="phone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { sko } from '@/store/sko'
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('sko', () => $fetch(`${$baseURL}/mock/sko.json`))

const title = 'Надзорные органы'
// eslint-disable-next-line no-undef
useHead({
  title
})
</script>
