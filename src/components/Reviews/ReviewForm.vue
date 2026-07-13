<template lang="pug">
.review-form
  .wrapper(v-show="isSubmitting")
    UiFullScreenLoader

  .review-form__title Оставить отзыв
  textarea.review-form__textarea(
    v-model="reviewText"
    placeholder="Напишите ваш отзыв..."
    maxlength="2000"
    rows="4"
  )

  .review-form__photos(:class="photoClasses")
    .review-form__photo
      UiImageUploader(
        v-model="photoBefore"
        :label="photosRequired === 'both' ? 'Фото до *' : 'Фото до'"
        placeholder="Перетащите или нажмите для загрузки"
        icon="download"
        :key="photoBeforeKey"
      )
      .review-form__photo-hint Макс. размер: 5 МБ
    .review-form__photo
      UiImageUploader(
        v-model="photoAfter"
        :label="photosRequired === 'both' ? 'Фото после *' : 'Фото после'"
        placeholder="Перетащите или нажмите для загрузки"
        icon="download"
        :key="photoAfterKey"
      )
      .review-form__photo-hint Макс. размер: 5 МБ

    .review-form__hint(v-if="photosRequired === 'both'")
      | * Оба фото обязательны для загрузки
    .review-form__hint(v-else-if="photosRequired === 'one'")
      | * Необходимо загрузить хотя бы одно фото
    .review-form__hint(v-else)
      | Фото загружаются по желанию

    .review-form__hint
      | Отправляя отзыв, вы соглашаетесь с&nbsp;
      router-link(:to="{ name: 'Policy'}") политикой обработки персональных данных

  .review-form__footer
    span.review-form__chars {{ reviewText.length }}/2000
    UiButton(
      variant="dark"
      size="M"
      is-animated
      @click="submit"
      :is-disabled="isDisabled"
    ) Оставить отзыв
</template>

<script>
import { ref, computed, inject } from 'vue'

export default {
  name: 'ReviewForm',
  props: {
    photosRequired: {
      type: String,
      default: 'none',
      validator: (value) => ['none', 'one', 'both'].includes(value)
    }
  },
  setup (props) {
    const store = inject('store')

    const reviewText = ref('')
    const photoBefore = ref(null)
    const photoAfter = ref(null)
    const isSubmitting = ref(false)

    // Ключи для принудительного перерендера компонентов
    const photoBeforeKey = ref(0)
    const photoAfterKey = ref(0)

    const photoClasses = computed(() => {
      const classes = {}
      if (props.photosRequired === 'both') {
        classes['review-form__photos--required-both'] = true
      }
      if (props.photosRequired === 'one') {
        classes['review-form__photos--required-one'] = true
      }
      return classes
    })

    const isDisabled = computed(() => {
      // Если идет отправка - кнопка заблокирована
      if (isSubmitting.value) return true

      const loading = store.review.loading
      if (loading) return true
      if (!reviewText.value.trim()) return true

      if (props.photosRequired === 'both') {
        return !photoBefore.value || !photoAfter.value
      }

      if (props.photosRequired === 'one') {
        return !photoBefore.value && !photoAfter.value
      }

      return false
    })

    const getFormData = () => {
      const formData = new FormData()
      formData.append('review_text', reviewText.value.trim())
      formData.append('photos_required', props.photosRequired)

      if (photoBefore.value) {
        formData.append('photo_before', photoBefore.value)
      }
      if (photoAfter.value) {
        formData.append('photo_after', photoAfter.value)
      }
      return formData
    }

    const resetForm = () => {
      reviewText.value = ''
      photoBefore.value = null
      photoAfter.value = null
      // Обновляем ключи для перерендера компонентов
      photoBeforeKey.value++
      photoAfterKey.value++
    }

    const submit = async () => {
      if (isDisabled.value) return

      // Включаем лоадер
      isSubmitting.value = true

      try {
        const formData = getFormData()
        const success = await store.review.addReview(formData)

        if (success) {
          resetForm()
          await store.review.getReviews()
        }
      } catch (error) {
        console.error('Error submitting review:', error)
      } finally {
        // Выключаем лоадер
        isSubmitting.value = false
      }
    }

    return {
      store,
      reviewText,
      photoBefore,
      photoAfter,
      photoClasses,
      isDisabled,
      isSubmitting,
      photoBeforeKey,
      photoAfterKey,
      submit,
      getFormData,
      resetForm
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  position: fixed
  right: 0
  left: 0
  bottom: 0
  top: 0
  background: rgba(0, 0, 0, .8)
  color: $firstColor
  @include font('h2')
  display: flex
  justify-content: center
  align-items: center
  z-index: 100
  text-align: center

.review-form
  background: $BGOpacity
  padding: 30px
  border-radius: $BR
  margin-bottom: 40px
  @media screen and (max-width: $XSWidth)
    padding: 20px

  &__title
    @include font('h2')
    color: $firstColor
    margin-bottom: 20px

  &__textarea
    width: 100%
    padding: 15px
    background: rgba(255, 255, 255, 0.05)
    border: 1px solid rgba(255, 255, 255, 0.1)
    border-radius: $BR
    color: $white
    @include font('t18-regular')
    resize: none
    min-height: 120px
    transition: border-color 0.3s
    font-family: inherit

    &:focus
      outline: none
      border-color: $firstColor

    &::placeholder
      color: rgba(255, 255, 255, 0.5)

  &__photos
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 20px
    margin: 20px 0
    @media screen and (max-width: 500px)
      grid-template-columns: 1fr

    &--required-both
      .image-uploader__label
        border-color: rgba($firstColor, 0.3)

        &:hover
          border-color: $firstColor

    &--required-one
      .image-uploader__label
        border-color: rgba($firstColor, 0.2)

        &:hover
          border-color: $firstColor

  &__photo
    min-height: 150px
    display: flex
    flex-direction: column
    gap: 6px

  &__photo-hint
    color: rgba(255, 255, 255, 0.35)
    @include font('t14-regular')
    text-align: center
    font-size: 12px

  &__hint
    grid-column: 1 / -1
    color: rgba(255, 255, 255, 0.5)
    @include font('t14-regular')
    text-align: center

    a
      color: $firstColor

    &:empty
      display: none

  &__footer
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 15px
    @media screen and (max-width: 500px)
      flex-direction: column
      gap: 15px

  &__chars
    color: rgba(255, 255, 255, 0.5)
    @include font('t14-regular')
</style>
