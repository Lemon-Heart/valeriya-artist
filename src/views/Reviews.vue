<template lang="pug">
.cont
  h1 Твой отзыв может вдохновить других!
  ReviewForm(
    v-if="isAuth"
    :photos-required="sourceFromQuery === 'course' ? 'both' : 'one'"
  )

  .auth-message(v-else)
    p Чтобы оставить отзыв, необходимо&nbsp;
      router-link(:to="{ name: 'Profile' }") авторизоваться

ReviewsSlider(:reviews="filteredReviews")

UiNotification(
  v-if="store.review.errMess || store.review.successMess"
  :message="store.review.errMess || store.review.successMess"
  :type="store.review.errMess ? 'error' : 'success'"
)
</template>

<script>
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'
import ReviewsSlider from '@/components/Reviews/ReviewSlider'
import ReviewForm from '@/components/Reviews/ReviewForm'

export default {
  name: 'ReviewsPage',
  components: {
    ReviewsSlider,
    ReviewForm
  },
  setup () {
    const route = useRoute()
    const store = inject('store')

    const reviews = computed(() => store.review.reviews)
    const isAuth = computed(() => store.auth.isAuth)
    const sourceFromQuery = computed(() => route.query.source)

    // variant: 1 — course (оба фото), 2 — marathon (одно фото)
    const targetVariant = computed(() => {
      if (sourceFromQuery.value === 'course') return 1
      if (sourceFromQuery.value === 'marathon') return 2
      return null
    })

    const filteredReviews = computed(() => {
      if (targetVariant.value === null) return reviews.value
      return reviews.value.filter(review => Number(review.variant) === targetVariant.value)
    })

    store.review.getReviews()

    return {
      store,
      reviews,
      filteredReviews,
      isAuth,
      sourceFromQuery
    }
  }
}
</script>

<style lang="sass" scoped>
.auth-message
  background: $BGOpacity
  padding: 30px
  border-radius: $BR
  text-align: center
  margin-bottom: 40px

  p
    @include font('t18-regular')
    color: $white

    a
      color: $firstColor
      text-decoration: underline
      cursor: pointer

      &:hover
        opacity: 0.8
</style>
