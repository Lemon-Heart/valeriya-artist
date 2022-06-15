<template>
  <main>
    <blocks-main-banner :slides="index.data.value.mainBanner" />
    <blocks-advantage :advantage="index.data.value.advantage" />
    <blocks-note :link="index.data.value.note.link" :label="index.data.value.note.label" :numbers="index.data.value.note.numbers" />
    <blocks-analyzes :head="index.data.value.analyzesBlock.head" :items="index.data.value.analyzesBlock.items" />
    <blocks-services :head="servicesBlock.head" :subhead="servicesBlock.subhead" :items="servicesBlock.items" />
    <blocks-map :head="mapBlock.head" :text="mapBlock.text" :map="mapBlock.map" :height="mapBlock.height" :btnText="mapBlock.btnText" />
    <blocks-news :blocks="index.data.value.news" />
    <blocks-facts :facts="index.data.value.factsBlock" />
  </main>
</template>

<script setup>
import { servicesBlock } from '@/store/servicesBlock'
import { mapBlock } from '@/store/mapBlock'

const { $baseURL } = useNuxtApp()
const index = await useAsyncData('index', () => $fetch(`${$baseURL}/mock/index.json`))
// eslint-disable-next-line no-undef
useHead({
  title: 'Медикс Лаб'
})
</script>
