<template>
  <base-header />
  <base-breadcrumbs v-if="route.path !== '/'" />
  <NuxtLayout>
    <nuxt-page />
  </NuxtLayout>
  <base-footer />
  <modal-wrap v-if="$modal.visible.value" />
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
