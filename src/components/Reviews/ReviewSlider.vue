<template lang="pug">
.reviews-slider
  swiper(
    v-if="reviews.length > 0"
    :loop="reviews.length > 3"
    :spaceBetween="0"
    slidesPerView="auto"
    :slidesPerGroup="1"
    :grabCursor="true"
    :pagination="pagination"
    :modules="modules"
    :centeredSlides="true"
    @swiper="onSwiper"
  )
    swiper-slide(
      v-for="(review, index) in reviews"
      :key="review.id"
      @click="slideTo(index)"
    )
      ReviewCard(:review="review")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import ReviewCard from '@/components/Reviews/ReviewCard'
import { ref } from 'vue'

export default {
  name: 'ReviewsSlider',
  components: {
    Swiper,
    SwiperSlide,
    ReviewCard
  },
  props: {
    reviews: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup (props) {
    const swiperInstance = ref(null)

    const pagination = {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>'
      }
    }

    const modules = [Pagination]

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper
    }

    const slideTo = (index) => {
      if (swiperInstance.value) {
        const slideIndex = parseInt(index, 10)
        if (!isNaN(slideIndex)) {
          if (props.reviews.length > 3) {
            swiperInstance.value.slideToLoop(slideIndex)
          } else {
            swiperInstance.value.slideTo(slideIndex)
          }
        }
      }
    }

    return {
      pagination,
      modules,
      onSwiper,
      slideTo
    }
  }
}
</script>

<style lang="sass" scoped>
.reviews-slider
  &:deep
    .swiper-wrapper
      padding-bottom: 10*$u

    .swiper-slide
      height: auto
      transform: scale(0.85)
      filter: blur(3px)
      transition: all 0.3s ease
      cursor: pointer
      max-width: 120*$u
      @media screen and (max-width: $XSWidth)
        max-width: 75vw

      &-duplicate-active,
      &-active
        transform: scale(1)
        filter: blur(0)
        z-index: 10
</style>
