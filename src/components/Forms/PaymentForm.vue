<template lang="pug">
form.modalBuy(ref="form")
  h1 Заполните форму
  ui-input(v-model="name" name="name" placeholder="Введите ваше имя")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input(v-model="phone" phone-mask="+7 (000) 000-00-00" name="phone" placeholder="Введите ваш телефон")
  ui-input(v-if="!haveSelect && tariffProps" type="hidden" v-model="tariff" name="tariff")
  ui-select(v-if="haveSelect" v-model="tariff" name="tariff" placeholder="Выберите" :options="options")
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Оформить заявку
</template>

<script>
import { ref, computed } from 'vue'
import { payment } from '@/services/payment'

export default {
  props: {
    tariffProps: {
      type: String,
      default: ''
    },
    haveSelect: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const form = ref('')
    const name = ref('')
    const mail = ref('')
    const phone = ref('')
    const tariff = ref(props.tariffProps ?? '')
    const options = ref(['Базовый', 'Стандарт', 'Премиум'])
    const error = computed(() => {
      if (name.value !== '' && mail.value !== '' && phone.value !== '') return false
      else return true
    })

    async function handleFormSubmit () {
      const data = new FormData(form.value)
      const response = await payment(data)

      if (response.ok) {
        // const res = await response.json()
        // window.location.href = res.url
      }
    }

    return { form, name, mail, phone, tariff, options, error, handleFormSubmit }
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
