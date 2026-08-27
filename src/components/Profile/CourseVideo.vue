<template lang="pug">
.video(:class="videoClasses")
  .video__name {{ name }}
  .video__img(
    v-if="!isFrameVisible && preview",
    :class="vertical ? 'video__img_vertical' : ''"
  )
    img.video__play(src="/img/play.png")
    img.video__preview(
      v-lazy="preview",
      @click="available ? isFrameVisible = true : isFrameVisible = false"
    )
  iframe(
    v-if="(isFrameVisible || !preview) && available",
    :src="videoFormatted",
    allow="autoplay",
    allowfullscreen
  )
  a.video__link(
    v-if="link && available",
    :href="link",
    target="blank"
  ) Дополнительные материалы
    ui-svg-icon(name="link", :size="20")
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    name: String,
    video: String,
    link: String,
    preview: String,
    available: Boolean,
    vertical: Boolean
  },
  setup (props) {
    const isFrameVisible = ref(false)

    const videoClasses = computed(() => ({
      notAvailable: !props.available,
      vertical: props.vertical
    }))

    const isVK = computed(() => {
      return props.video.includes('vkvideo.ru')
    })
    const isRT = computed(() => {
      return props.video.includes('rutube.ru')
    })
    function extractId (url) {
      const pattern = /\/embed\/([a-f0-9]+)/
      const match = url.match(pattern)
      return match ? match[1] : null
    }
    function extractAccessKey (url) {
      const match = url.match(/[?&]p=([^&]+)/)
      return match ? match[1] : null
    }
    const videoFormatted = computed(() => {
      if (isVK.value) return props.video
      if (isRT.value) return `https://rutube.ru/play/embed/${extractId(props.video)}/?p=${extractAccessKey(props.video)}&autoplay=true&mute=1`
      return `https://www.youtube.com/embed/${extractId(props.video)}?autoplay=1&amp`
    })
    return { isFrameVisible, videoFormatted, videoClasses }
  }
}
</script>

<style lang="sass" scoped>
.video
  width: 100%
  height: 100%
  display: grid
  grid-template-rows: 1fr auto 20px
  gap: 15px
  &.notAvailable
    filter: brightness(0.5)
  iframe, &__img
    max-width: 95*$u
    border-radius: 20px
    width: 100%
    height: 50*$u
    position: relative
    &_vertical
      height: auto
      aspect-ratio: 9 / 16
      max-height: 100*$u
  &__preview
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center
    border-radius: 20px
  &__play
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 15*$u
    opacity: .5
    cursor: pointer
  &__icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    cursor: pointer
  &__name
    @include font('t16-demibold')
    line-height: 130%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
  &__link
    @include font('t14-regular')
    display: flex
    color: $firstColor
    &:deep
      .svgIconComponent
        margin-left: $u
      svg
        fill: $firstColor
</style>
