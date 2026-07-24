<template lang="pug">
.photo-viewer
  .photo-viewer__content
    button.photo-viewer__close(@click="close") ×

    swiper.photo-viewer__swiper(
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :initial-slide="currentIndex"
      :grab-cursor="true"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    )
      swiper-slide(
        v-for="(image, index) in images"
        :key="index"
      )
        img.photo-viewer__image(
          :src="image"
          :alt="`Фото ${index + 1}`"
          @click="close"
        )

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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
  name: 'PhotoViewer',
  components: {
    Swiper,
    SwiperSlide
  },
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
    const swiperInstance = ref(null)

    const close = () => {
      emit('close')
    }

    const nextImage = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slideNext()
      }
    }

    const prevImage = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slidePrev()
      }
    }

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper
    }

    const onSlideChange = (swiper) => {
      currentIndex.value = swiper.realIndex
    }

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
      swiperInstance,
      close,
      nextImage,
      prevImage,
      onSwiper,
      onSlideChange
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
    max-width: 100vw
    max-height: 100vh
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center

  &__swiper
    width: 100%
    height: 100%
    max-width: 90vw
    max-height: 90vh

    :deep(.swiper-slide)
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
    cursor: pointer

  &__close
    position: fixed
    top: 20px
    right: 30px
    background: none
    border: none
    color: $white
    font-size: 40px
    cursor: pointer
    opacity: 0.7
    transition: opacity 0.3s
    padding: 5px 15px
    line-height: 1
    z-index: 10

    &:hover
      opacity: 1

  &__nav
    position: fixed
    bottom: 30px
    left: 50%
    transform: translateX(-50%)
    display: flex
    align-items: center
    gap: 20px
    background: rgba(0, 0, 0, 0.7)
    padding: 10px 20px
    border-radius: $BR
    z-index: 10

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
      right: 15px
      font-size: 30px

    &__swiper
      max-width: 100vw
      max-height: 80vh

    &__image
      max-width: 95vw
      max-height: 80vh

    &__nav
      bottom: 20px
      padding: 8px 15px
      gap: 15px

    &__nav-btn
      font-size: 24px

@media screen and (max-width: 500px)
  .photo-viewer
    &__nav
      bottom: 15px
      padding: 6px 12px
      gap: 10px

    &__nav-btn
      font-size: 20px

    &__counter
      font-size: 14px
      min-width: 40px
</style>
