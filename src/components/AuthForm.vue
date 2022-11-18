<template lang="pug">
form.signinForm(ref="form")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-input.password(
    v-model="pass"
    :type="viewPass ? 'text' : 'password'"
    :class="{'show': viewPass}"
    name="pass"
    placeholder="Введите пароль"
    iconName="eye"
    @onIconClick="toggleViewPass"
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

    const viewPass = ref(false)
    const toggleViewPass = () => (viewPass.value = !viewPass.value)

    return { form, mail, pass, error, errMess, handleFormSubmit, toggleViewPass, viewPass }
  }
}
</script>

<style lang="sass" scoped>
.password.show
  position: relative
  &:deep
    .icon:before
      content: ''
      position: absolute
      width: 7.5*$u
      height: .5*$u
      background: $gray
      transform: rotate(-45deg)
      top: 3.5*$u
      right: 0
.signinForm
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $error
</style>
