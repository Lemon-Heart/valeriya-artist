<template lang="pug">
form.loginForm(ref="form")
  ui-input(v-model="name" name="name" placeholder="Введите ваше имя")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input(v-model="phone" phone-mask="+7 (000) 000-00-00" name="phone" placeholder="Введите ваш телефон")
  ui-input(
    v-model="pass"
    type="password"
    name="pass"
    placeholder="Придумайте пароль (минимум 8 символов)"
    iconName="eye"
  )
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Зарегистрироваться
  .error(v-if="errMess") {{ errMess }}
</template>

<script>
import { ref, computed, inject } from 'vue'

export default {
  setup () {
    const store = inject('store')

    const form = ref('')
    const name = ref('')
    const mail = ref('')
    const phone = ref('')
    const pass = ref('')
    const errMess = computed(() => store.user.errMess)
    const error = computed(() => {
      if (name.value !== '' && mail.value !== '' && phone.value !== '' && pass.value !== '' && pass.value.length >= 8) return false
      else return true
    })

    async function handleFormSubmit () {
      const data = new FormData(form.value)
      store.user.login(data)
    }

    return { form, name, mail, phone, pass, error, errMess, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
.loginForm
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $error
</style>
