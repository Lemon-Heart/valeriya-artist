<template lang="pug">
section.reviews-section
  UiFullScreenLoader(v-if="loading")
  ReviewSlider(v-else :reviews="reviews")
  ReviewsCta(text="Уже прошел обучение? Напиши пару слов и загрузи фото своей работы до/после прохождения курса").reviews-section__cta
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

  &__cta
    max-width: 210*$u
    margin-left: auto
    margin-right: auto
</style>
