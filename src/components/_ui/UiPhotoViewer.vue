<template lang="pug">
.photo-viewer
  .photo-viewer__content
    button.photo-viewer__close(@click="close") ×
    img.photo-viewer__image(:src="images[currentIndex]" :alt="`Фото ${currentIndex + 1}`")
    .photo-viewer__nav(v-if="images.length > 1")
      button.photo-viewer__nav-btn(
        @click="prevImage"
        :disabled="currentIndex === 0"
      ) ‹
      span.photo-viewer__counter {{ currentIndex + 1 }} / {{ images.length }}
      button.photo-viewer__nav-btn(
        @click="nextImage"
        :disabled="currentIndex === images.length - 1"
      ) ›
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'PhotoViewer',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const currentIndex = ref(props.initialIndex)

    const close = () => {
      emit('close')
    }

    const nextImage = () => {
      if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++
      }
    }

    const prevImage = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--
      }
    }

    // Обработка клавиш
    const onKeydown = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    onMounted(() => {
      document.addEventListener('keydown', onKeydown)
      document.body.classList.add('fixed')
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', onKeydown)
      document.body.classList.remove('fixed')
    })

    return {
      currentIndex,
      close,
      nextImage,
      prevImage
    }
  }
}
</script>

<style lang="sass" scoped>
.photo-viewer
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background: rgba(0, 0, 0, 0.95)
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999

  &__content
    position: relative
    max-width: 90vw
    max-height: 90vh
    display: flex
    align-items: center
    justify-content: center

  &__image
    max-width: 90vw
    max-height: 85vh
    object-fit: contain
    border-radius: $BR
    user-select: none
    -webkit-user-drag: none

  &__close
    position: absolute
    top: -50px
    right: 0
    background: none
    border: none
    color: $white
    font-size: 40px
    cursor: pointer
    opacity: 0.7
    transition: opacity 0.3s
    padding: 5px 15px
    line-height: 1

    &:hover
      opacity: 1

  &__nav
    position: absolute
    bottom: -60px
    left: 50%
    transform: translateX(-50%)
    display: flex
    align-items: center
    gap: 20px
    background: rgba(0, 0, 0, 0.7)
    padding: 10px 20px
    border-radius: $BR

  &__nav-btn
    background: none
    border: none
    color: $white
    font-size: 30px
    cursor: pointer
    opacity: 0.7
    transition: opacity 0.3s
    padding: 0 10px
    line-height: 1

    &:hover
      opacity: 1

    &:disabled
      opacity: 0.3
      cursor: not-allowed

  &__counter
    color: $white
    @include font('t16-regular')
    min-width: 60px
    text-align: center

@media screen and (max-width: 768px)
  .photo-viewer
    &__close
      top: 10px
      right: 10px
      font-size: 30px

    &__nav
      bottom: 20px
      padding: 8px 15px
      gap: 15px

    &__nav-btn
      font-size: 24px

    &__image
      max-width: 95vw
      max-height: 80vh
</style>
