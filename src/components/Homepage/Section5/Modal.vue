<template lang="pug">
.modalBuy
  h1 Заполните форму
  label
    span Введите ваше имя
    ui-input(v-model="name" placeholder="name")
  label
    span Введите ваш email
    ui-input(v-model="mail" placeholder="mail")
  label
    span Введите ваш телефон
    ui-input(v-model="phone" placeholder="phone")
  ui-button.button(is-animated variant="dark") Оформить заявку
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const name = ref('')
    const mail = ref('')
    const phone = ref('')
    return { name, mail, phone }
  }
}
</script>

<style lang="sass" scoped>
h1
  color: $secondColor
.modalBuy
  label
    display: flex
    flex-direction: column
    &:not(:last-child)
      margin-bottom: 5*$u
    span
      margin-bottom: 2.5*$u
  .button
    margin-top: 10*$u
    margin-left: auto
</style>
