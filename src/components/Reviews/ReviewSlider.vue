<template lang="pug">
.reviews-slider
  swiper(
    v-if="reviews.length > 0"
    :loop="reviews.length > 3"
    :spaceBetween="0"
    :slidesPerView="1"
    :slidesPerGroup="1"
    :grabCursor="true"
    :pagination="pagination"
    :modules="modules"
    :breakpoints="breakpoints"
  )
    swiper-slide(
      v-for="review in reviews"
      :key="review.id"
    )
      ReviewCard(:review="review")

  .reviews-slider__empty(v-else)
    p Пока нет отзывов. Будьте первыми!
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import ReviewCard from '@/components/Reviews/ReviewCard'

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
  setup () {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>'
      }
    }

    const modules = [Pagination]

    const breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }

    return {
      pagination,
      modules,
      breakpoints
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

  &__empty
    text-align: center
    padding: 60px 20px
    background: $BGOpacity
    border-radius: $BR

    p
      @include font('h3')
      color: rgba(255, 255, 255, 0.5)
</style>
