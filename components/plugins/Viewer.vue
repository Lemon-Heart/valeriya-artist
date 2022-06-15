<template>
  <teleport to='body'>
    <swiper
      class="viewer"
      :modules="modules"
      :initialSlide="props.initImage"
      navigation
      @click="emits('close')"
    >
      <swiper-slide v-for="(item, i) in props.items" :key="i" class="viewer__item">
        <img v-lazy="{src: `/img/${item}`}">
      </swiper-slide>
      <div class="viewer__close" @click="emits('close')">✖</div>
      <!-- <div class="swiper-button-next">⇒</div>
      <div class="swiper-button-prev">⇐</div> -->
    </swiper>
  </teleport>
</template>

<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
const modules = [Navigation]

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  initImage: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['close'])
</script>
