<template>
  <div class="cont cont--np">
    <swiper class="main-banner" :modules="modules" navigation :space-between="30">
      <swiper-slide v-for="(slide, i) in props.slides" :key="i" class="main-banner__slide">
        <div class="main-banner__text">
          <h2>{{ slide.head }}</h2>
          <p v-for="(text, j) in slide.p" :key="j">{{ text }}</p>
          <div class="main-banner__price">
            <span class="main-banner__newPrice">{{ slide.new }}</span>
            <span v-if="slide.oldPrice" class="main-banner__oldPrice">Старая цена<span style="text-decoration: line-through;">{{ slide.oldPrice }} ₽</span>
            </span>
          </div>
        </div>
        <img class="main-banner__img" v-lazy="{src: `/img/${slide.background}`}">
      </swiper-slide>
      <!-- <div class="swiper-button-next"><swiperRight /></div>
      <div class="swiper-button-prev"><swiperLeft /></div> -->
    </swiper>
  </div>
</template>

<script setup>
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiperLeft from '~icons/my-icons/arrLeft'
// import swiperRight from '~icons/my-icons/arrRight'
import 'swiper/css'
import 'swiper/css/navigation'
const modules = [Navigation]

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})
</script>
