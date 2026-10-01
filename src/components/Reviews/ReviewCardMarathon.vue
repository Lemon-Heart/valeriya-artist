<template lang="pug">
.review-card
  .review-card__avatar
    img(
      v-if="review.user.avatar"
      :src="review.user.avatar"
      :alt="review.user.name"
    )
    .review-card__avatar-placeholder(v-else)
      span {{ review.user.name.charAt(0) }}

  .review-card__content
    .review-card__text-wrapper
      .review-card__text {{ review.review_text }}

    .review-card__name — {{ review.user.name }}

    .review-card__photo(
      v-if="review.photo_after"
      @click="openPhotoViewer(1)"
    )
      img.review-card__photo-bg(src="/img/photoSingle.png")
      img.review-card__photo-img(
        :src="review.photo_after"
        alt="Фото после"
      )
      .review-card__photo-zoom
        ui-svg-icon(name="zoom" :size="10")
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

    return {
      photoUrls,
      openPhotoViewer
    }
  }
}
</script>

<style lang="sass" scoped>
.review-card
  height: 100%
  display: flex
  gap: 4*$u
  padding: 4*$u

  &__content
    display: flex
    flex-direction: column
    width: 100%

  &__avatar
    width: 50px
    height: 50px
    border-radius: 50%
    overflow: hidden
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

  &__name
    @include font('h3')
    color: $firstColor

  &__text-wrapper
    user-select: none
    touch-action: pan-y
    -webkit-overflow-scrolling: touch
    flex: 1
    max-height: 30*$u
    overflow-y: auto
    padding-right: 5px
    margin-bottom: 4*$u
    @include custom-scrollbar($firstColor, $BG, 3*$u)
    @media screen and (max-width: $XSWidth)
      max-height: 20*$u

  &__text
    @include font('t16-regular')
    color: $white
    line-height: 1.6
    word-wrap: break-word
    @media screen and (max-width: $XSWidth)
      @include font('t14-regular')

  &__photo
    position: relative
    border-radius: $BR
    overflow: hidden
    cursor: pointer
    transition: transform 0.3s ease
    max-width: 50*$u
    margin: -10*$u 7*$u 0 auto
    transform: rotate(5deg)

    &-bg
      width: 100%
      object-fit: fill
      pointer-events: none

    &-img
      width: 94%
      height: 63%
      object-fit: cover
      pointer-events: none
      position: absolute
      z-index: 10
      top: 31%
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
