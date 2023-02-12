<template lang="pug">
form.form(ref="form")
  ui-input(v-model="mail" name="mail" placeholder="Введите ваш email")
  ui-button.button(:is-animated="!error" :is-disabled="error" :title="error ? 'Заполните все поля' : ''" @click="handleFormSubmit") Восстановить пароль
  .error(v-if="errMess") {{ errMess }}
</template>

<script>
import { ref, computed, inject } from 'vue'
import UiMessage from '@/components/_ui/UiMessage'

export default {
  setup () {
    const store = inject('store')

    const form = ref('')
    const mail = ref('')
    const errMess = computed(() => store.user.errMess)
    const error = computed(() => {
      if (mail.value !== '') return false
      else return true
    })

    const handleFormSubmit = () => {
      const data = new FormData(form.value)
      store.user.changePass(data).then((mess) => {
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

    return { form, mail, error, errMess, handleFormSubmit }
  }
}
</script>

<style lang="sass" scoped>
.form
  display: flex
  flex-direction: column
  > *:not(:last-child)
    margin-bottom: 12*$u
.error
  color: $error
</style>
