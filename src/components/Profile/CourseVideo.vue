<template lang="pug">
.video(:class="vertical ? 'video_vertical' : ''")
  .video__name {{ name }}
  .video__media(:class="vertical ? 'video__media_vertical' : ''")
    img.video__play(
      v-if="!isFrameVisible && preview",
      src="/img/marathon/video-section/play.PNG",
      @click="available ? isFrameVisible = true : isFrameVisible = false"
    )
    img.video__preview(
      v-if="!isFrameVisible && preview",
      v-lazy="preview",
      @click="available ? isFrameVisible = true : isFrameVisible = false"
    )
    iframe(
      v-if="(isFrameVisible || !preview) && available",
      :src="videoFormatted",
      allow="autoplay",
      allowfullscreen
    )
    .video__frame(v-if="!vertical")
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
  position: relative
  display: flex
  flex-direction: column
  gap: 5*$u
  &.notAvailable
    filter: brightness(0.5)

  &_vertical
    gap: 2*$u

  &__media
    position: relative
    width: 100%
    aspect-ratio: 16 / 9
    border-radius: 20px

    &_vertical
      aspect-ratio: 9 / 16
      max-height: 100*$u
      margin: 0 auto
      border: 4px solid rgba(255, 255, 255, 0.9)
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3)
      border-radius: 20px

      @media screen and (max-width: $XXSWidth)
        .video__play
          width: 10*$u
          height: 10*$u
          bottom: -5*$u
          left: calc(50% - 5*$u)

  &__preview,
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-fit: cover
    border-radius: 20px

  &__play
    position: absolute
    cursor: pointer
    width: 16*$u
    height: 16*$u
    bottom: -7*$u
    left: calc(50% - 8*$u)
    z-index: 10

  &__frame
    position: absolute
    top: -9%
    right: -5%
    bottom: -9%
    left: -5%
    background-image: url('./border.PNG')
    background-repeat: no-repeat
    background-position: center center
    background-size: 100% 100%
    pointer-events: none
    z-index: 5
    border-radius: 20px

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
    margin-top: 4*$u
    &:deep
      .svgIconComponent
        margin-left: $u
      svg
        fill: $firstColor
</style>
