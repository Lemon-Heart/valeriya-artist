<template>
  <div class="servicesBlock">
    <div class="cont">
      <h2>{{ props.head }}</h2>
    </div>
    <div class="servicesBlock__search">
      <div class="cont">
        <form action="">
          <loupe />
          <input placeholder="Поиск скоро заработает" type="text" class="inp">
          <button class="btn" @click.prevent>Поиск</button>
        </form>
      </div>
    </div>
    <div class="cont">
      <h6>{{ props.subhead }}</h6>
      <div v-if="props.items" class="servicesBlock__list">
        <div v-for="(item, i) in items" :key="i" class="servicesBlock__item" :class="{'active': basket.basketItemsID.includes(item.id)}" @click.prevent="toogleBacket($event, item.id)">
          <span class="servicesBlock__name">{{ item.head }}</span>
          <span class="servicesBlock__price">{{ item.price }} ₽</span>
          <div class="servicesBlock__toBasket"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { basket } from '@/store/basket'
import loupe from '~icons/my-icons/loupe'
const props = defineProps({
  head: {
    type: String,
    default: null
  },
  subhead: {
    type: String,
    default: null
  },
  items: {
    type: Array,
    default: null
  }
})

const toogleBacket = ($event, id) => {
  $event.target.closest('.servicesBlock__item').classList.toggle('active')
  basket.toggleBasketItem(id)
}
</script>
