<template lang="pug">
.burgerMenu(:class="{'open': sideMenu.isOpen}" @click="sideMenu.toggle")
  span(v-for="i in 9" :key="i")
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const store = inject('store')
    const sideMenu = store.sideMenu
    return { sideMenu }
  }
}
</script>

<style lang="sass" scoped>
.burgerMenu
  width: 30px
  height: 30px
  position: relative
  transition: .3s
  cursor: pointer
  display: inline-block
.burgerMenu span
  width: 5px
  height: 5px
  background-color: $firstColor
  display: block
  border-radius: 50%
  position: absolute
.burgerMenu span:nth-child(1)
  left: 0
  top: 0
.burgerMenu span:nth-child(2)
  left: 12px
  top: 0
.burgerMenu span:nth-child(3)
  right: 0
  top: 0
.burgerMenu span:nth-child(4)
  left: 0
  top: 12px
.burgerMenu span:nth-child(5)
  position: absolute
  left: 12px
  top: 12px
.burgerMenu span:nth-child(6)
  right: 0px
  top: 12px
.burgerMenu span:nth-child(7)
  left: 0px
  bottom: 0px
.burgerMenu span:nth-child(8)
  position: absolute
  left: 12px
  bottom: 0px
.burgerMenu span:nth-child(9)
  right: 0px
  bottom: 0px
.burgerMenu.open
  transform: rotate(180deg)
  cursor: pointer
  transition: .2s cubic-bezier(.8, .5, .2, 1.4)
.burgerMenu.open span
  border-radius: 50%
  transition-delay: 200ms
  transition: .5s cubic-bezier(.8, .5, .2, 1.4)
.burgerMenu.open span:nth-child(2)
  left: 6px
  top: 6px
.burgerMenu.open span:nth-child(4)
  left: 6px
  top: 18px
.burgerMenu.open span:nth-child(6)
  right: 6px
  top: 6px
.burgerMenu.open span:nth-child(8)
  left: 18px
  bottom: 6px
</style>
