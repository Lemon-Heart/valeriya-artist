<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <div v-if="basket.basketItemsID.length" class="basket">
        <transition-group name="basket" mode="in-out">
          <div v-for="item in basket.basketItems" :key="item.id" class="basket__item">
            <div class="basket__descr">
              <h4 class="basket__h">{{ item.head }}</h4>
              <span class="basket__price">{{ item.price }} ₽</span>
            </div>
            <div class="basket__remove" @click="remove(item.id)">✖</div>
          </div>
          <div key="total" class="basket__total">{{ basket.basketPrice }} ₽</div>
          <button key="btn" class="btn primary right" @click="$modal.show('OrderForm')">{{ basket.btn || 'Оформить' }}</button>
        </transition-group>
      </div>
      <h3 v-else>{{ basket.empty || 'Ваша корзина пуста' }}</h3>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { basket } from '@/store/basket'

const title = 'Корзина'
useHead({
  title
})

const remove = (id) => {
  basket.toggleBasketItem(id)
}
</script>
