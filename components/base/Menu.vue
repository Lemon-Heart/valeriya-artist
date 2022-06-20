<template>
  <div ref="menu" class="header__menu">
    <nuxt-link v-for="(i, j) in props.menu.links" :key="j" :to="`/${j}`">{{ i }}</nuxt-link>
  </div>
  <div class="header__userEl">
    <div class="header__search">
      <form ref="searchForm" action="">
          <input class="inp" placeholder="Поиск скоро заработает" type="text">
          <button class="btn primary" @click.prevent>Поиск</button>
      </form>
      <search @click="toogleClassOpen(searchForm)" />
    </div>
    <nuxt-link to="/lk" class="header__login">
      <login />
    </nuxt-link>
    <nuxt-link to="/basket" class="header__basket">
      <basketIcon />
      <!-- <span v-if="basket.basketItems.length">{{ basket.basketItems.length }}</span> -->
    </nuxt-link>
  </div>
  <div ref="hamb" class="header__hamb hamb" @click="toogleClassOpen(hamb, menu)">
    <span v-for="i in 6" :key="i"></span>
  </div>
</template>

<script setup>
import { basket } from '@/store/basket'
import { ref, onMounted } from 'vue'

import login from '~icons/my-icons/login'
import basketIcon from '~icons/my-icons/basket'
import search from '~icons/my-icons/search'

const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  basket.formBasket()
})

const menu = ref(null)
const hamb = ref(null)
const searchForm = ref(null)
const toogleClassOpen = (...arg) => {
  for (const i of arg) {
    i.classList.toggle('open')
  }
}
</script>
