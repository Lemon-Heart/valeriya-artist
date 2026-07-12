<template lang="pug">
.notification(
  v-if="message"
  :class="{ 'notification--error': type === 'error', 'notification--success': type === 'success' }"
)
  span {{ message }}
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      validator: (value) => ['error', 'success'].includes(value),
      default: 'success'
    }
  }
}
</script>

<style lang="sass" scoped>
.notification
  position: fixed
  bottom: 30px
  left: 30px
  padding: 15px 20px
  border-radius: $BR
  background: rgba(0, 0, 0, 0.85)
  color: $white
  @include font('t16-regular')
  z-index: 1000
  max-width: 400px
  animation: slideIn 0.3s ease-out
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
  border: 2px solid transparent

  &--error
    border-color: #ff6b6b

  &--success
    border-color: #51cf66

@keyframes slideIn
  from
    transform: translateX(-100%)
    opacity: 0
  to
    transform: translateX(0)
    opacity: 1
</style>
