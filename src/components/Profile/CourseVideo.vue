<template lang="pug">
.video
  .video__name {{ name }}
  .video__img(v-if="!isFrameVisible")
    ui-svg-icon.video__icon(name="youtube" :size="60" @click="isFrameVisible = true")
    img(v-lazy="`//img.youtube.com/vi/${video}/hqdefault.jpg`" @click="isFrameVisible = true")
  iframe(v-if="isFrameVisible" :src="`https://www.youtube.com/embed/${video}?autoplay=1&amp`" allow="autoplay" allowfullscreen)
  a.video__link(:href="link" target="blank") Дополнительные материалы
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    name: String,
    video: String,
    link: String
  },
  setup () {
    const isFrameVisible = ref(false)
    return { isFrameVisible }
  }
}
</script>

<style lang="sass" scoped>
.video
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  iframe, &__img
    max-width: 95*$u
    border-radius: 20px
    width: 100%
    margin: auto 0 0
    height: 50*$u
    position: relative
    img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center
      border-radius: 20px
  &__icon
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    cursor: pointer
  &__name
    @include font('h3')
    line-height: 100%
    margin-bottom: 3*$u
  &__link
    margin-top: 3*$u
</style>
