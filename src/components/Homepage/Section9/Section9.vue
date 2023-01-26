<template lang="pug">
section.section9
  h1
    ui-text-anim Работы Валерии
  .galery
    swiper(
      :autoplay="false"
      :loop="true"
      :spaceBetween="0"
      :slidesPerView="1"
      :grabCursor="true"
      :navigation="true"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
    )
      swiper-slide(v-for="(slide, i) in slides" :key="i")
        img(:src="slide")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { ref } from 'vue'
export default {
  components: { Swiper, SwiperSlide },
  setup () {
    const slides = ref([
      '/img/homepage/section9/11.jpg',
      '/img/homepage/section9/12.PNG',
      '/img/homepage/section9/1.JPG',
      '/img/homepage/section9/2.PNG',
      '/img/homepage/section9/3.PNG',
      '/img/homepage/section9/4.PNG',
      '/img/homepage/section9/5.PNG',
      '/img/homepage/section9/6.PNG',
      '/img/homepage/section9/9.JPG',
      '/img/homepage/section9/10.JPG',
      '/img/homepage/section9/7.JPG',
      '/img/homepage/section9/8.JPG'
    ])
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      modules: [Pagination, Navigation, Autoplay],
      slides
    }
  }
}
</script>

<style lang="sass" scoped>
.section9
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
  .galery
    display: block
    margin-left: -40px
    margin-right: -40px
    @media screen and (max-width: $XXSWidth)
      margin-left: -20px
      margin-right: -20px
    .swiper-slide
      display: flex
    img
      margin: auto
      height: 175*$u
      object-fit: contain
      width: 100%
      max-width: calc(100% - 120px)
      filter: drop-shadow(0px 9px 11px black)
      @media screen and (max-width: $padWidth)
        height: 125*$u
      @media screen and (max-width: $XXSWidth)
        height: 100*$u
        max-width: calc(100% - 100px)
      @media screen and (max-width: $mobileWidth)
        height: 90*$u
    .swiper-slide-active img
      object-position: center
    .swiper-slide-next img
      object-position: center
</style>
