<template lang="pug">
label.uiInputComponent(v-show="type !== 'hidden'" :class="classed")
  input.input(
    ref="input"
    :class="{_withBorder: withBorder}"
    :type="type"
    :value="modelValue"
    @input="update"
    :name="name"
    :data-mask="phoneMask"
    :placeholder="phoneMask"
  )
  .icon(v-if="iconName" @click="onIconClick")
    ui-svg-icon(:name="iconName" :size="15")
  span {{ placeholder }}
</template>

<script>
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
    return { update }
  },
  computed: {
    classed () {
      const className = []
      this.error ? className.push('error') : className.filter(function (f) { return f !== 'error' })
      this.modelValue === '' ? className.filter(function (f) { return f !== 'notEmpty' }) : className.push('notEmpty')
      return className
    }
  },
  methods: {
    onIconClick () {
      this.$refs.input.focus()
    }
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
  &.notEmpty span
    font-size: 3.5*$u
    color: white
    top: -40%
    left: 0
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
    width: 4*$u
    height: 4*$u
    position: absolute
    left: 5*$u
    top: 50%
    transform: translateY(-50%)
    color: $btnBGDarkHover
    cursor: pointer
</style>
