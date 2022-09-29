<template lang="pug">
.uiSelectComponent(ref="select")
  .uiSelectComponent__title(@click="toggle")
    span(ref="title") {{ modelValue ?? placeholder }}
    svg(class="uiSelectComponent__icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M5.5 9.43555L12 16.4355L18.5 9.43555" stroke="#191816" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
  .uiSelectComponent__body
    p(v-for="(option, i) in options" :key="i" @click="active(option)") {{ option }}
  input(
    type="hidden"
    :name="name"
    :value="modelValue"
    ref="input"
  )
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup (_, { emit }) {
    const select = ref()
    const input = ref()
    const title = ref()

    const toggle = () => select.value.classList.toggle('open')

    function active (option) {
      toggle()
      emit('update:modelValue', option)
      title.value.innerHTML = option
    }

    return {
      select, toggle, input, title, active
    }
  }
}
</script>

<style lang="sass" scoped>
.uiSelectComponent
  &.error
    .uiSelectComponent__title
      border: 1px solid red
  &.open
    .uiSelectComponent__icon
      transform: rotate(180deg)
    .uiSelectComponent__body
      max-height: 150px
      overflow: auto
      padding: 10px 10px
    .uiSelectComponent__title
      background: #ECEDF3
  &__title
    color: #282C2D
    background: #F2F3F9
    border-radius: 14px
    padding: 20px 15px
    cursor: pointer
    display: flex
    align-items: center
    justify-content: space-between
    height: 60px
    box-sizing: border-box
    &:hover
      background: #ECEDF3
    .uiSelectComponent__icon
      transition: .3s
  &__body
    background: #ECEDF3
    border-radius: 14px
    margin-top: 10px
    padding: 0px 10px
    max-height: 0
    display: flex
    flex-direction: column
    overflow: hidden
    transition: .3s
    scrollbar-width: thin
    scrollbar-color: transparent #ADB2C3
    &::-webkit-scrollbar
      width: 6px
    &::-webkit-scrollbar-button
      display: none
    &::-webkit-scrollbar-track
      background-color: transparent
    &::-webkit-scrollbar-thumb
      background-color: #ADB2C3
      border-radius: 30px
      opacity: .5
      transition: opacity .3s ease
    &::-webkit-scrollbar-thumb:hover
      opacity: 1
  & p
    text-align: start
    color: #151E3F
    cursor: pointer
    margin: 0
    padding: 8px 0px
    font-weight: 500
    font-size: 14px
</style>
