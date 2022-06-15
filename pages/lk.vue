<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <button class="btn" @click="logout">Выйти</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
/* eslint-disable no-undef */
const title = 'Личный кабинет'
useHead({
  title
})

const router = useRouter()

const logout = () => {
  const user = useCookie('user')
  user.value = null
  router.push('/')
}

definePageMeta({
  middleware: () => {
    const user = useCookie('user')
    if (!user.value) {
      const { $modal } = useNuxtApp()
      $modal.show('LoginForm')
      return abortNavigation()
    }
  }
})
</script>
