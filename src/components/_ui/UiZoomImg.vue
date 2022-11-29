<template lang="pug">
template(v-if="loading")
  .wrapper
  ui-base-loader.loader
.zoom(v-else :style="loaded ? `background-image: url(${img})` : ''" @mousemove="handlerMove" @mouseenter="handlerEnter" @mouseleave="handlerLeave")
</template>

<script>
import { useLoading } from '@/composables/useLoading'
import { ref } from 'vue'

export default {
  props: {
    img: String
  },
  setup (props) {
    const { loading, loadingOn, loadingOff } = useLoading()
    const loaded = ref(false)

    const handlerEnter = (event) => {
      event.target.style.opacity = 1
      if (!loaded.value) {
        loadingOn()

        new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => {
            resolve(props.img)
          }
          img.onerror = () => {
            reject(props.img)
          }
          img.src = props.img
        })
          .finally(() => {
            loaded.value = true
            loadingOff()
          })
      }
    }

    const handlerMove = (event) => {
      const targetCoords = event.target.getBoundingClientRect()
      const x = (event.clientX - targetCoords.left) / targetCoords.width * 100
      const y = (event.clientY - targetCoords.top) / targetCoords.height * 100
      event.target.style.backgroundPosition = `${x}% ${y}%`
    }

    const handlerLeave = (event) => {
      event.target.style.opacity = 0
    }

    return { handlerMove, handlerLeave, handlerEnter, loaded, loading }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  position: absolute
  height: 100%
  width: 100%
  top: 0
  left: 0
  background: rgba(0, 0, 0, .5)
.loader
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
.zoom
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-size: 200%
  background-repeat: no-repeat
  transition: opacity .12s linear
  opacity: 0
  cursor: zoom-in
</style>
