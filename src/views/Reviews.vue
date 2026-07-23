<template lang="pug">
.cont
  h1 Твой отзыв может вдохновить других!
  ReviewForm(v-if="isAuth" photos-required="both")

  .auth-message(v-else)
    p Чтобы оставить отзыв, необходимо&nbsp;
      router-link(:to="{ name: 'Profile' }") авторизоваться

ReviewsSlider(:reviews="reviews")

UiNotification(
  v-if="store.review.errMess || store.review.successMess"
  :message="store.review.errMess || store.review.successMess"
  :type="store.review.errMess ? 'error' : 'success'"
)
</template>

<script>
import { inject, computed } from 'vue'
import ReviewsSlider from '@/components/Reviews/ReviewSlider'
import ReviewForm from '@/components/Reviews/ReviewForm'

export default {
  name: 'ReviewsPage',
  components: {
    ReviewsSlider,
    ReviewForm
  },
  setup () {
    const store = inject('store')

    const reviews = computed(() => store.review.reviews)
    const isAuth = computed(() => store.auth.isAuth)

    store.review.getReviews()

    return {
      store,
      reviews,
      isAuth
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
