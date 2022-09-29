<template lang="pug">
form.modalBuy(ref="form")
  h1 Заполните форму
  ui-input(v-model="name" name="name" placeholder="Введите ваше имя")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input(v-model="phone" phone-mask="+7 (000) 000-00-00" name="phone" placeholder="Введите ваш телефон")
  ui-select(
    v-model="tariff"
    name="tariff"
    placeholder="Выберите"
    :options="options"
  )
  ui-button.button(is-animated @click="handleFormSubmit") Оформить заявку
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    tariffProps: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const form = ref('')
    const name = ref('')
    const mail = ref('')
    const phone = ref('')
    const tariff = ref(props.tariffProps ?? '')
    const options = ref(['Базовый', 'Стандарт', 'Премиум'])

    const toggleLoader = () => {
      console.log(1)
    }
    const onSuccess = () => {
      console.log('succes')
    }
    const onError = () => {
      console.log('error')
    }

    function validateForm () {
      if (name.value !== '') {
        return true
      }
    }

    function serializeForm () {
      const data = new FormData(form.value)
      return data
    }
    async function sendData (data) {
      return await fetch('/api/apply/', {
        method: 'POST',
        body: data
      })
    }
    async function handleFormSubmit () {
      if (validateForm()) {
        const data = serializeForm()
        toggleLoader()
        const { status } = await sendData(data)
        toggleLoader()

        if (status === 200) {
          onSuccess()
        } else {
          onError()
        }
      }
    }

    return { form, name, mail, phone, tariff, options, handleFormSubmit }
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
</style>
