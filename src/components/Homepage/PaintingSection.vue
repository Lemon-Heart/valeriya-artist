<template lang="pug">
section.painting-section
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
      :breakpoints="swiperBreakpoints"
      class="mySwiper"
    )
      swiper-slide(v-for="(image, index) in images" :key="index" @click="openPhotoViewer(index)")
        img(:src="image" :alt="`Изображение ${index + 1}`")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper'
import UiPhotoViewer from '@/components/_ui/UiPhotoViewer'
import { inject, ref } from 'vue'

export default {
  components: { Swiper, SwiperSlide },
  setup () {
    const store = inject('store')
    const images = ref([])

    for (let i = 1; i <= 19; i++) {
      images.value.push(`/img/homepage/section9/${i}.webp`)
    }

    const openPhotoViewer = (index) => {
      if (images.value.length === 0) return

      store.modalQueue.push({
        key: `photo-viewer-${Date.now()}`,
        component: UiPhotoViewer,
        props: {
          images: images.value,
          initialIndex: index
        },
        params: {
          isClosable: true,
          isFullscreen: true
        },
        on: {
          close: () => {
            store.modalQueue.remove(`photo-viewer-${Date.now()}`)
          }
        }
      })
    }

    return {
      images,
      openPhotoViewer,
      pagination: {
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      modules: [Pagination, Navigation, Autoplay],
      swiperBreakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.painting-section
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
    @media screen and (max-width: $mobileWidth)
      margin-left: -10px
      margin-right: -10px
    .swiper-slide
      display: flex
      cursor: pointer

      img
        margin: auto
        height: 175*$u
        object-fit: contain
        width: 100%
        max-width: calc(100% - 120px)
        filter: drop-shadow(0px 9px 11px black)
        transition: transform 0.3s ease
        @media screen and (max-width: $padWidth)
          height: 125*$u
          max-width: calc(100% - 80px)
        @media screen and (max-width: $XXSWidth)
          height: 100*$u
          max-width: calc(100% - 60px)
        @media screen and (max-width: $mobileWidth)
          height: 90*$u
          max-width: calc(100% - 40px)
      &:hover img
        transform: scale(1.02)
    .swiper-slide-active img
      object-position: center
    .swiper-slide-next img
      object-position: center
</style>
