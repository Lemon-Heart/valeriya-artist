<template>
  <header class="header">
    <div class="cont">
      <div class="header__top">
        <ui-kit-logo class="header__logo" />
        <div class="header__loc"><loc /><span>Иваново</span></div>
        <div class="header__numbers">
          <ui-kit-link-tel v-for="(phone, i) in data.phone" :key="i" :tel="phone" />
        </div>
        <div class="header__btns">
          <ui-kit-link-tel :tel="data.whatsapp.tel" class="btn spare" :whatsapp="data.whatsapp.text" />
        </div>
      </div>
    </div>
    <div class="header__bg">
      <div class="cont">
        <div class="header__bot">
          <base-menu :menu="data.menu" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('header', () => $fetch(`${$baseURL}/mock/header.json`))

import loc from '~icons/my-icons/loc'
</script>
