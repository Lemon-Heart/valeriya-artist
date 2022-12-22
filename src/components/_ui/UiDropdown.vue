<template lang="pug">
.accordion(
  ref="item"
  :class="{'np': variant === 'np'}"
)
  .accordion__header(@click="click")
    .img(v-if="icon")
      img(:src="icon")
    span {{ title }}
  .accordion__body(ref="body")
    .accordion__content
      slot
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    variant: {
      // np
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    altListHeading: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const item = ref()
    const body = ref()
    const click = () => {
      item.value.classList.toggle('accordion__item_show')
      body.value.style.transitionDuration = body.value.scrollHeight < 100 ? body.value.scrollHeight / 200 + 's' : body.value.scrollHeight < 500 ? body.value.scrollHeight / 500 + 's' : body.value.scrollHeight / 2500 + 's'
      if (body.value.style.height) (body.value.style.height = null)
      else (body.value.style.height = body.value.scrollHeight + 'px')
    }
    return { click, item, body }
  }
}
</script>

<style lang="sass">
.accordion
  overflow: hidden
  border-radius: $BR
  &.np
    .accordion__header
      width: fit-content
      padding: 0
      background: transparent
      span
        color: $firstColor
        margin-right: 3*$u
    .accordion__content
      padding: 4*$u 0 0 0
      background: transparent
  &__header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5*$u
    cursor: pointer
    transition: background-color 0.2s ease-out
    font-weight: bold
    background-color: $btnBGHover
    @media screen and (max-width: $XXSWidth)
      padding: 2.5*$u 5*$u
    &:hover
      background-color: $headerBG
    &::after
      flex-shrink: 0
      width: 1.25rem
      height: 1.25rem
      margin-left: auto
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
      background-repeat: no-repeat
      background-size: 1.25rem
      content: ""
      transition: transform 0.2s ease-out
    .img
      height: 25*$u
      margin-right: 5*$u
      @media screen and (max-width: $XXSWidth)
        height: 15*$u
      img
        object-fit: contain
        object-position: center
        height: 100%
  &__item_show
    .accordion__header
      background-color: $headerBG
      &::after
        transform: rotate(-180deg)
  &__body
    height: 0
  &__content
    display: flex
    flex-direction: column
    background: $headerBG
    padding: 5*$u
    @include font('t16-regular')
</style>
