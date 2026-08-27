<template lang="pug">
section.memory-section(ref="sectionRef")
  h1
    ui-text-anim Впереди тебя ждет столько воспоминаний…
  .memory-section__block
    h2 На протяжении 30 дней мы будем ежедневно возвращаться в твое детство и вспоминать самые важные, теплые моменты.
      br
      | Например…
    .memory-section__container
      .memory-section__bg(
        :style="{ clipPath: 'inset(0 ' + clipRight + '% 0 0)' }"
      )
      img.memory-section__bicycle(
        ref="bicycleRef"
        src="/img/marathon/memory-section/bicycle.PNG"
        :style="{ left: bicyclePosition + '%' }"
      )
  .memory-section__ready
    img.memory-section__branch(src="/img/marathon/memory-section/branch.PNG" alt="")
    img.memory-section__flowers(src="/img/marathon/memory-section/flowers.PNG" alt="")
    h1
      ui-text-anim Готов начать?
    ui-button(is-animated variant="primary" size="XL") Начать путешествие
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup () {
    const sectionRef = ref(null)
    const bicycleRef = ref(null)
    const bicyclePosition = ref(0)
    const clipRight = ref(100)
    let isScrolling = false

    const handleScroll = () => {
      if (isScrolling) return
      isScrolling = true

      requestAnimationFrame(() => {
        const section = sectionRef.value
        if (!section) {
          isScrolling = false
          return
        }

        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        const start = viewportHeight
        const end = viewportHeight * 0.1

        let progress = 1 - (rect.top - end) / (start - end)
        progress = Math.max(0, Math.min(1, progress))

        bicyclePosition.value = -20 + progress * 105

        const bicycleCenter = bicyclePosition.value + 12
        clipRight.value = Math.max(0, Math.min(100, 100 - bicycleCenter))

        isScrolling = false
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      sectionRef,
      bicycleRef,
      bicyclePosition,
      clipRight
    }
  }
}
</script>

<style lang="sass" scoped>
.memory-section
  position: relative

  h2
    @include font('t18-regular')
    max-width: 150*$u
    margin: auto
    text-align: center
    @media screen and (max-width: $padWidth)
      @include font('t16-regular')
    @media screen and (max-width: $mobileWidth)
      @include font('t14-regular')

  &__block
    margin-top: 10*$u

  &__container
    margin-top: 5*$u
    position: relative
    width: 100%
    max-height: 73*$u
    height: calc(100vw / 4.6)

  &__bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url('/public/img/marathon/memory-section/bg.PNG')
    background-repeat: no-repeat
    background-position: center center
    background-size: contain
    transition: clip-path 0.05s linear

  &__bicycle
    position: absolute
    max-height: 90*$u
    height: calc(100vw / 3.8)
    top: 50%
    transform: translateY(-50%)
    left: 0
    will-change: left
    z-index: 2

  &__ready
    position: relative
    margin: 10*$u auto 0
    display: flex
    flex-direction: column
    gap: 3*$u
    align-items: center

  &__flowers
    width: 30*$u
    position: absolute
    top: 40%
    left: 66%
    @media screen and (max-width: $XXLWidth)
      width: 25*$u
      left: 80%
    @media screen and (max-width: $padWidth)
      display: none

  &__branch
    width: 50*$u
    position: absolute
    top: 50%
    transform: translateY(-50%)
    right: 70%
    @media screen and (max-width: $XXLWidth)
      width: 40*$u
      right: 80%
    @media screen and (max-width: $padWidth)
      display: none
</style>
