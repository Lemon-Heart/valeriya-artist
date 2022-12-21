<template lang="pug">
label.uiInputComponent(v-show="type !== 'hidden'" :class="classed")
  input.input(
    ref="input"
    :class="{_withBorder: withBorder}"
    :type="type === 'password' ? viewPass : type"
    :value="modelValue"
    @input="update"
    :name="name"
    :data-mask="phoneMask"
    :placeholder="phoneMask"
    :disabled="isDisabled"
  )
  span(v-if="placeholder") {{ placeholder }}
  template(v-if="type === 'password'")
    .icon(v-if="iconName" @click="toggleViewPass")
      ui-svg-icon(:name="iconName" :size="30")
  template(v-else)
    .icon(v-if="iconName" @click="onIconClick")
      ui-svg-icon(:name="iconName" :size="30")
</template>

<script>
import { ref, computed } from 'vue'

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
    placeholder: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    withBorder: {
      type: Boolean,
      default: true
    },
    isTransparent: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    phoneMask: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const update = (e) => {
      if (props.phoneMask) {
        const input = e.target
        const mask = input.dataset.mask
        const value = input.value
        const literalPattern = /[0]/
        const numberPattern = /[0-9]/
        let newValue = ''
        try {
          const maskLength = mask.length
          let valueIndex = 0
          let maskIndex = 0
          while (maskIndex < maskLength) {
            if (maskIndex >= value.length) break
            if (mask[maskIndex] === '0' && value[valueIndex].match(numberPattern) === null) break
            while (mask[maskIndex].match(literalPattern) === null) {
              if (value[valueIndex] === mask[maskIndex]) break
              newValue += mask[maskIndex++]
            }
            newValue += value[valueIndex++]
            maskIndex++
          }

          input.value = newValue
        } catch (e) {
          console.log(e)
        }
      }
      emit('update:modelValue', e.target.value)
    }

    const viewPass = ref('password')
    const toggleViewPass = () => {
      viewPass.value === 'password' ? viewPass.value = 'text' : viewPass.value = 'password'
    }

    const onIconClick = () => {
      emit('onIconClick')
    }

    const classed = computed(() => {
      const className = []
      props.error ? className.push('error') : className.filter(function (f) { return f !== 'error' })
      props.modelValue === '' ? className.filter(function (f) { return f !== 'notEmpty' }) : className.push('notEmpty')
      props.isTransparent === false ? className.filter(function (f) { return f !== '_transparent' }) : className.push('_transparent')
      viewPass.value === 'password' ? className.filter(function (f) { return f !== 'show' }) : className.push('show')
      return className
    })

    return { update, onIconClick, viewPass, toggleViewPass, classed }
  }
}
</script>

<style lang="sass" scoped>
.uiInputComponent
  width: 100%
  display: flex
  position: relative
  flex-direction: column
  height: 12.5*$u
  &._transparent
    .input
      background: transparent
      padding: 0
  &.notEmpty span
    font-size: 3.5*$u
    color: white
    top: -40%
    left: 0
  &.show .icon:before
    content: ''
    position: absolute
    width: 7.5*$u
    height: .5*$u
    background: $gray
    transform: rotate(-45deg)
    top: 3.5*$u
    right: 0
  > span
    position: absolute
    top: 50%
    transform: translate(0, -50%)
    left: 4*$u
    color: black
    margin-bottom: 2.5*$u
    position: absolute
    transition: .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)

  > .input
    width: 100%
    display: block
    border: .25*$u solid transparent
    padding: 4*$u
    border-radius: $BR
    &::-webkit-input-placeholder
      transition: opacity 0.5s ease
      opacity: 0
    &::-moz-placeholder
      transition: opacity 0.5s ease
      opacity: 0
    &:-moz-placeholder
      transition: opacity 0.5s ease
      opacity: 0
    &:-ms-input-placeholder
      transition: opacity 0.5s ease
      opacity: 0
    &:focus + span
      font-size: 3.5*$u
      color: white
      top: -40%
      left: 0
    &:focus
      &::-webkit-input-placeholder
        opacity: 1
      &::-moz-placeholder
        opacity: 1
      &:-moz-placeholder
        opacity: 1
      &:-ms-input-placeholder
        opacity: 1

    &._withBorder
      border-color: $btnBGDarkHover

  > .icon
    cursor: pointer
    position: absolute
    transform: translate(0, -50%)
    top: 50%
    right: 10px
</style>
