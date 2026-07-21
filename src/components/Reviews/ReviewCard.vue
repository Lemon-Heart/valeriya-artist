<template lang="pug">
.review-card
  ui-svg-icon.review-card__quote(name="quote" :size="40")
  .review-card__header
    .review-card__avatar
      img(
        v-if="review.user.avatar"
        :src="review.user.avatar"
        :alt="review.user.name"
      )
      .review-card__avatar-placeholder(v-else)
        span {{ review.user.name.charAt(0) }}
    .review-card__info
      .review-card__name {{ review.user.name }}
      .review-card__date {{ formatDate(review.created_at) }}

  .review-card__text-wrapper
    .review-card__text {{ review.review_text }}

  .review-card__photos(v-if="review.photo_before || review.photo_after")
    .review-card__photo(
      v-if="review.photo_before"
      @click="openPhotoViewer(0)"
    )
      img.review-card__photo-bg(src="/img/photoBefore.png")
      img.review-card__photo-img(:src="review.photo_before" alt="Фото до")
      .review-card__photo-zoom
        ui-svg-icon(name="zoom" :size="20")
    .review-card__photo(
      v-if="review.photo_after"
      @click="openPhotoViewer(1)"
    )
      img.review-card__photo-bg(src="/img/photoAfter.png")
      img.review-card__photo-img(:src="review.photo_after" alt="Фото после")
      .review-card__photo-zoom
        ui-svg-icon(name="zoom" :size="20")
</template>

<script>
import { computed, inject } from 'vue'
import UiPhotoViewer from '@/components/_ui/UiPhotoViewer'

export default {
  name: 'ReviewCard',
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const store = inject('store')

    const photoUrls = computed(() => {
      const urls = []
      if (props.review.photo_before) urls.push(props.review.photo_before)
      if (props.review.photo_after) urls.push(props.review.photo_after)
      return urls
    })

    const openPhotoViewer = (index) => {
      if (photoUrls.value.length === 0) return

      store.modalQueue.push({
        key: `photo-viewer-${props.review.id}-${Date.now()}`,
        component: UiPhotoViewer,
        props: {
          images: photoUrls.value,
          initialIndex: index
        },
        params: {
          isClosable: true,
          isFullscreen: true
        },
        on: {
          close: () => {
            store.modalQueue.remove(`photo-viewer-${props.review.id}-${Date.now()}`)
          }
        }
      })
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
      return date.toLocaleDateString('ru-RU', options)
    }

    return {
      photoUrls,
      openPhotoViewer,
      formatDate
    }
  }
}
</script>

<style lang="sass" scoped>
.review-card
  background: black
  padding: 4*$u
  border-radius: $BR
  height: 100%
  display: flex
  flex-direction: column

  &__quote
    position: absolute
    top: 5*$u
    right: 5*$u
    color: $firstColor

  &__header
    display: flex
    align-items: center
    margin-bottom: 15px

  &__avatar
    width: 50px
    height: 50px
    border-radius: 50%
    overflow: hidden
    margin-right: 15px
    flex-shrink: 0

    img
      width: 100%
      height: 100%
      object-fit: cover

  &__avatar-placeholder
    width: 50px
    height: 50px
    border-radius: 50%
    background: $socIcon
    display: flex
    align-items: center
    justify-content: center
    font-size: 24px
    font-weight: bold
    color: $firstColor

  &__info
    flex: 1
    min-width: 0

  &__name
    @include font('h3')
    color: $firstColor

  &__date
    @include font('t14-regular')
    color: rgba(255, 255, 255, 0.5)

  &__text-wrapper
    flex: 1
    max-height: 120px
    overflow-y: auto
    padding-right: 5px
    @include custom-scrollbar($firstColor, $BG, 3*$u)

  &__text
    @include font('t16-regular')
    color: $white
    line-height: 1.6
    word-wrap: break-word

  &__photos
    display: flex
    gap: 3*$u
    margin-top: 10*$u

  &__photo
    position: relative
    border-radius: $BR
    overflow: hidden
    cursor: pointer
    transition: transform 0.3s ease

    &-bg
      width: 100%
      object-fit: fill
      pointer-events: none

    &-img
      width: 94%
      height: 76%
      object-fit: cover
      pointer-events: none
      position: absolute
      z-index: 10
      top: 9*$u
      right: 2*$u
      left: 2*$u
      bottom: 2*$u
      top: 20%
      right: 3%
      left: 3%
      bottom: 4%

    &:hover
      .review-card__photo-zoom
        opacity: 1

  &__photo-zoom
    z-index: 20
    position: absolute
    bottom: 10px
    right: 10px
    background: rgba(0, 0, 0, 0.7)
    padding: 8px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    opacity: 0
    transition: opacity 0.3s ease
    pointer-events: none
</style>
