<template lang="pug">
.uiInputComponent
  input.input(
    ref="input"
    :class="{_withBorder: withBorder}"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="update"
  )
  .icon(
    v-if="iconName"
    @click="onIconClick"
  )
    ui-svg-icon(
      :name="iconName"
      :size="15"
    )
</template>

<script>
export default {
  props: {
    modelValue: {
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
    }
  },
  emits: ['update:modelValue'],
  methods: {
    update (e) {
      this.$emit('update:modelValue', e.target.value)
    },
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
  align-items: center
  position: relative
  height: 12.5*$u

  > .input
    width: 100%
    height: 100%
    display: block
    border: .25*$u solid transparent
    padding: 0 4*$u
    border-radius: $BR

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
