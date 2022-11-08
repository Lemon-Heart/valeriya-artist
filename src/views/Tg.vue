<template lang="pug">
.cont
  h1
    ui-text-anim Тут можно купить мини-урок
  ui-button.tariff__button(is-animated variant="dark" @click="buy") Оформить заказ
</template>

<script>
import PaymentForm from '@/components/PaymentForm'
import { inject } from 'vue'

export default {
  setup () {
    const store = inject('store')
    const buy = () => {
      store.modalQueue.push({
        key: 'PaymentForm',
        component: PaymentForm,
        props: {
          tariffProps: 'Мини',
          haveSelect: false
        }
      })
    }
    return { buy }
  }
}
</script>

<style lang="sass" scoped>
</style>
