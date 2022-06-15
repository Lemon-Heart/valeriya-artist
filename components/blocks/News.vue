<template>
  <div class="newsBlock__wrap">
    <pre>
    </pre>
    <div class="cont">
      <div class="newsBlock">
        <span v-for="(item, i) in props.blocks" :key="i" class="newsBlock__tab" :class="{'active': i === activeBlockId}" @click="changeTab(i)">{{ item.head }}</span>
        <swiper
          class="swiper-default"
          :modules="modules"
          navigation
          :space-between="0"
          :slidesPerView="1"
          :breakpoints="{
            '550': {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }"
        >
          <swiper-slide v-for="(slide, i) in activeBlock.items" :key="i" class="swiper-slide newsBlock__item">
            <div class="newsBlock__left">
              <img v-lazy="{src: `/img/${slide.img}`}">
            </div>
            <div class="newsBlock__right">
              <span v-if="slide.date">{{ slide.date }}</span>
              <h5>{{ slide.head }}</h5>
              <p>{{ slide.text }}</p>
            </div>
          </swiper-slide>
          <!-- <div v-show="activeBlock.items.length > 2" class="swiper-button-next"><swiperRight /></div>
          <div v-show="activeBlock.items.length > 2" class="swiper-button-prev"><swiperLeft /></div> -->
        </swiper>
        <nuxt-link class="newsBlock__a" :to="activeBlock.link">Все {{ activeBlock.head }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiperLeft from '~icons/my-icons/arrLeft'
// import swiperRight from '~icons/my-icons/arrRight'
const modules = [Navigation]

const props = defineProps({
  blocks: {
    type: Object,
    required: true
  }
})
const activeBlock = ref(props.blocks[0])
const activeBlockId = ref(0)

const changeTab = (id = 0) => {
  activeBlock.value = props.blocks[id]
  activeBlockId.value = id
}
</script>
