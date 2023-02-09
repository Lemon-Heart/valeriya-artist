<template lang="pug">
form.modalBuy(ref="form")
  h1 Заполните форму
  ui-input(v-model="name" name="name" placeholder="Введите ваше имя")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input(v-model="phone" phone-mask="+7 (000) 000-00-00" name="phone" placeholder="Введите ваш телефон")
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Купить
</template>

<script>
import { ref, computed } from 'vue'
import { buyPaint } from '@/services/payment'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const form = ref('')
    const name = ref('')
    const mail = ref('')
    const phone = ref('')
    const error = computed(() => {
      if (name.value !== '' && mail.value !== '' && phone.value !== '') return false
      else return true
    })

    async function handleFormSubmit () {
      const data = new FormData(form.value)
      data.append('id', props.id)
      const response = await buyPaint(data)

      if (response.ok) {
        // const res = await response.json()
        // window.location.href = res.url
      }
    }

    return { form, name, mail, phone, error, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
h1
  color: $firstColor
.modalBuy
  label
    display: flex
    flex-direction: column
    &:not(:last-child)
      margin-bottom: 12*$u
  .button
    margin-top: 10*$u
    margin-left: auto
  .error
    color: $error
</style>
