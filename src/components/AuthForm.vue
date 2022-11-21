<template lang="pug">
form.signinForm(ref="form")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input(
    v-model="pass"
    type="password"
    name="pass"
    placeholder="Введите пароль"
    iconName="eye"
  )
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Войти
  .error(v-if="errMess") {{ errMess }}
</template>

<script>
import { ref, computed, inject } from 'vue'

export default {
  setup () {
    const store = inject('store')

    const form = ref('')
    const mail = ref('')
    const pass = ref('')
    const errMess = computed(() => store.user.errMess)
    const error = computed(() => {
      if (mail.value !== '' && pass.value !== '' && pass.value.length >= 8) return false
      else return true
    })

    const handleFormSubmit = () => {
      const data = new FormData(form.value)
      store.user.auth(data)
    }

    return { form, mail, pass, error, errMess, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
.signinForm
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $error
</style>
