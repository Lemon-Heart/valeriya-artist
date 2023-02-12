<template lang="pug">
form.form(ref="form")
  .heading Восстановление пароля
  ui-input(
    v-model="pass"
    type="password"
    name="pass"
    placeholder="Введите новый пароль"
    iconName="eye"
  )
  ui-input(
    v-model="repeatePass"
    type="password"
    name="repeatePass"
    placeholder="Повторите новый пароль"
    iconName="eye"
  )
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Изменить пароль
  .error(v-if="errMess") {{ errMess }}
</template>

<script>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import UiMessage from '@/components/_ui/UiMessage'

export default {
  setup () {
    const store = inject('store')
    const router = useRouter()

    const form = ref('')
    const pass = ref('')
    const repeatePass = ref('')
    const errMess = computed(() => store.user.errMess)
    const error = computed(() => {
      if (pass.value !== '' && pass.value.length >= 8 && pass.value === repeatePass.value) return false
      else return true
    })

    const handleFormSubmit = () => {
      const data = new FormData()
      data.append('pass', pass.value)
      store.user.restore(data).then((mess) => {
        router.push({ query: {} })
        store.modalQueue.removeAll()
        store.modalQueue.push({
          key: 'UiMessage',
          component: UiMessage,
          props: {
            message: mess
          }
        })
      })
    }

    return { form, pass, repeatePass, error, errMess, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
.heading
  color: $white
  @include font('h3')
.form
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $error
</style>
