<template lang="pug">
.reviews-slider
  swiper(
    v-if="reviews.length > 0"
    :loop="reviews.length > 3"
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
      ReviewCardMarathon(:review="review")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import ReviewCardMarathon from '@/components/Reviews/ReviewCardMarathon'
import { ref } from 'vue'

export default {
  name: 'ReviewsSlider',
  components: {
    Swiper,
    SwiperSlide,
    ReviewCardMarathon
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
      transition: all 0.3s ease
      cursor: pointer
      max-width: 120*$u
      position: relative
      @media screen and (max-width: $XSWidth)
        max-width: 75vw

      &:not(:last-child)::after
        content: ''
        position: absolute
        top: 0
        bottom: 0
        right: 0
        width: 1px
        background: $firstColor
        pointer-events: none
        border-radius: 50%
        opacity: .5
</style>
