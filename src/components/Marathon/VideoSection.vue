<template lang="pug">
section.video-section
  .cont
    .video-section__block
      .video-section__wrapper
        .video-section__inner
          img.video-section__play(
            v-if="!isFrameVisible",
            src="/img/marathon/video-section/play.PNG",
            @click="isFrameVisible = true"
          )
          img.video-section__video(
            v-if="!isFrameVisible",
            src="/img/marathon/video-section/preview.JPG",
            @click="isFrameVisible = true"
          )
          iframe.video-section__video(
            v-if="isFrameVisible",
            src="https://rutube.ru/play/embed/e856f7c155859f8357e03665444d5b52/?p=_7hgBDUJEqQDDlhybU-jnQ&skinColor=000000&autoplay=true&mute=1",
            allow="autoplay",
            allowfullscreen
          )
      .video-section__border
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const isFrameVisible = ref(false)

    return { isFrameVisible }
  }
}
</script>

<style lang="sass" scoped>
.video-section
  padding: 25*$u 0
  background-image: url('/public/img/marathon/video-section/bg.PNG')
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  @media screen and (max-width: $padWidth)
    padding: 15*$u 0
    .cont
      padding: 0

  &__block
    position: relative
    max-width: 100%

  &__wrapper
    position: relative
    width: 100%
    padding-bottom: 56.25%
    overflow: hidden
    border-radius: 20px

  &__inner
    position: absolute
    top: 10%
    left: 10%
    right: 5%
    bottom: 10%
    border-radius: 10px

    img
      cursor: pointer

  &__video
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-fit: cover

  &__play
    position: absolute
    width: 20*$u
    height: 20*$u
    bottom: -10*$u
    left: calc(50% - 10*$u)
    z-index: 10
    @media screen and (max-width: $padWidth)
      width: 10*$u
      height: 10*$u
      bottom: -5*$u
      left: calc(50% - 5*$u)

  &__border
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background-image: url('/public/img/marathon/video-section/border.PNG')
    background-repeat: no-repeat
    background-position: center center
    background-size: 100% 100%
    pointer-events: none
    z-index: 2
</style>
