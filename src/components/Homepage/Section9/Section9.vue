<template lang="pug">
section.section9
  h1
    ui-text-anim Что тебя ждет
  .galery
    swiper(
      :autoplay="false"
      :loop="true"
      :spaceBetween="0"
      :slidesPerView="3"
      :slidesPerGroup="1"
      :grabCursor="true"
      :navigation="true"
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
    )
      swiper-slide(v-for="i in 13" :key="i")
        img(:src="`/img/homepage/section9/${i}.webp`")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
export default {
  components: { Swiper, SwiperSlide },
  setup () {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      modules: [Pagination, Navigation, Autoplay]
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
