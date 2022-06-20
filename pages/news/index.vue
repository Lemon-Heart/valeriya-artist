<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <div class="list">
        <nuxt-link v-for="(item, i) in data.items" :key="i" class="list__item" :to="`/news/${item.head}`">
          <div class="list__img">
            <img v-lazy="{src: `/img/${item.img}`}" alt="">
          </div>
          <div class="list__descr">
            <span v-if="item.date" class="list__date">{{ item.date }}</span>
            <h3 class="list__h">{{ item.head }}</h3>
            <span class="list__text">{{ item.text }}</span>
            <p class="list__textDetail">{{ item.textDetail }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('news', () => $fetch(`${$baseURL}/mock/news/news.json`))

const title = data.value.head
useHead({
  title
})
</script>
