<template lang="pug">
.video(:class="{'notAvailable': !available}")
  .video__name {{ name }}
  .video__img(v-if="!isFrameVisible")
    img(v-lazy="`//img.youtube.com/vi/${video}/hqdefault.jpg`" @click="available ? isFrameVisible = true : isFrameVisible = false")
  iframe(v-if="isFrameVisible && available" :src="`https://www.youtube.com/embed/${video}?autoplay=1&amp`" allow="autoplay" allowfullscreen)
  a.video__link(v-if="link && available" :href="link" target="blank") Дополнительные материалы
    ui-svg-icon(name="link" :size="20")
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    name: String,
    video: String,
    link: String,
    available: Boolean
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
  display: grid
  grid-template-rows: 1fr auto 20px
  gap: 15px
  // display: flex
  // flex-direction: column
  &.notAvailable
    filter: brightness(0.5)
  iframe, &__img
    max-width: 95*$u
    border-radius: 20px
    width: 100%
    // margin: auto 0 0
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
    @include font('t16-demibold')
    line-height: 130%
    // margin-bottom: 3*$u
  &__link
    @include font('t14-regular')
    // margin-top: 3*$u
    display: flex
    color: $firstColor
    &:deep
      .svgIconComponent
        margin-left: $u
      svg
        fill: $firstColor
</style>
