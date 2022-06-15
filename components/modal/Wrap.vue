<template>
  <div class="modal" @mousedown="close">
    <div class="modal__body" @mousedown.stop>
      <div class="modal__close" @click="close">✖</div>
      <modal-call-back-form v-if="$modal.componentName.value === 'CallBackForm'" />
      <modal-login-form v-if="$modal.componentName.value === 'LoginForm'" />
      <modal-order-form v-if="$modal.componentName.value === 'OrderForm'" />
      <modal-registration-form v-if="$modal.componentName.value === 'RegistrationForm'" />
      <modal-succes v-if="$modal.componentName.value === 'Succes'" />
      <modal-error v-if="$modal.componentName.value === 'Error'" />
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const { $modal } = useNuxtApp()
const close = () => {
  $modal.hide()
}
</script>
