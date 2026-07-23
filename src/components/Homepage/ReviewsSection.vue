<template lang="pug">
section.reviews-section
  h1.reviews-section__title
    ui-text-anim Отзывы учеников
  .reviews-section__subtitle то, ради чего я создала этот курс
  UiFullScreenLoader(v-if="loading")
  ReviewSlider.reviews-section__slider(v-else :reviews="reviews")
  ReviewsCta.reviews-section__cta(text="Уже прошел обучение? Напиши пару слов и загрузи фото своей работы до/после прохождения курса")
</template>

<script>
import { inject, computed } from 'vue'
import ReviewSlider from '@/components/Reviews/ReviewSlider'
import ReviewsCta from '@/components/Reviews/ReviewsCta'

export default {
  name: 'ReviewsSection',
  components: { ReviewSlider, ReviewsCta },
  setup () {
    const store = inject('store')

    const loading = computed(() => store.review.loading)
    const reviews = computed(() => store.review.reviews)

    store.review.getReviews()

    return {
      loading,
      reviews
    }
  }
}
</script>

<style lang="sass" scoped>
.reviews-section
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u

  &__title
    margin-bottom: 2*$u

  &__subtitle
    @include font('t18-regular')
    text-align: center
    margin-bottom: 10*$u
    @media screen and (max-width: $XSWidth)
      @include font('t14-regular')
      margin-bottom: 5*$u

  &__slider
    margin-bottom: 5*$u

  &__cta
    max-width: 210*$u
    margin-left: auto
    margin-right: auto
    @media screen and (max-width: 840px)
      margin-left: 5*$u
      margin-right: 5*$u
</style>
