<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <div class="contacts">
        <ui-kit-link-tel v-for="(phone, i) in contacts.phone" :key="i" :tel="phone" />
        <a :href="`mailto:${contacts.mail}`">{{ contacts.mail }}</a>
      </div>
      <blocks-map :text="mapBlock.text" :map="mapBlock.map" :height="mapBlock.height" :btnText="mapBlock.btnText" />
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { mapBlock } from '@/store/mapBlock'
import { contacts } from '@/store/contacts'
const title = 'Контакты'
useHead({
  title
})
</script>
