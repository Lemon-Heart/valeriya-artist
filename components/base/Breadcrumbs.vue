<template>
  <div class="cont" v-if="route.path !== '/'">
    <div class="breadcrumbs">
      <nuxt-link to="/">Главная страница</nuxt-link>
      <nuxt-link v-for="item in route.matched" :key="item.name" :to="item.path.split(':', 1)[0]">
        {{ item.name }}
      </nuxt-link>
      <span v-if="route.params.name" :key="route.params.name">
        {{ route.params.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
