<template lang="pug">
section.reviews-section(
  :class="[{'reviews-section__empty': !reviews.length}]"
)
  UiFullScreenLoader(v-if="loading")
  ReviewSlider(v-else :reviews="reviews")
</template>

<script>
import { inject, computed } from 'vue'
import ReviewSlider from '@/components/Reviews/ReviewSlider'

export default {
  name: 'ReviewsSection',
  components: { ReviewSlider },
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
  &__empty
    margin-top: 0
</style>
