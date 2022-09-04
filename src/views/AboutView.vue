<template lang="pug">
swiper(
  :grabCursor="true"
  :pagination="true"
  :modules="modules"
  class="mySwiper"
)
  swiper-slide(v-for="i in 8" :key="i")
    img(:src="`https://swiperjs.com/demos/images/nature-${i}.jpg`")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
export default {
  components: { Swiper, SwiperSlide },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}
</script>
