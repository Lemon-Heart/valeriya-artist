<template>
  <form @submit.prevent.stop="order">
    <h2>{{ data.title }}</h2>
    <component
      v-for="(item, i) in form"
      :key="i" :is="item.component"
      v-model="item.value"
      :label="item.label"
      :name="item.name"
      :error="item.error"
      :checked="item.checked"
      @update:modelValue="item.error = false"
      @update:checked="item.checked = $event"
    />
    <button class="btn primary" type="submit" @click.prevent.stop="order">{{ data.btnText || 'Сформировать заказ' }}</button>
  </form>
</template>

<script setup>
import { makeRequest } from '@/use/api'
import { validate, getForm } from '@/use/formHandler'
import { basket } from '@/store/basket'

const { $modal, $baseURL } = useNuxtApp()
const { data } = await useAsyncData('orderForm', () => $fetch(`${$baseURL}/mock/form/orderForm.json`))

const form = getForm(data.value.form)

const order = () => {
  if (validate(form).valid) {
    const info = validate(form).info
    info.analyzesID = basket.basketItemsID // Добавить в параметры товары из корзины
    makeRequest.post('/basket', info)
      .then(() => {
        $modal.show('Succes')
        basket.clearBasket()
      })
      .catch(() => $modal.show('Error'))
  }
}
</script>
