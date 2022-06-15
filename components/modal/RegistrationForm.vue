<template>
  <form @submit.prevent.stop="reg">
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
    <div class="row">
      <button class="btn primary" type="submit" @click.prevent.stop="reg">Зарегистрироваться</button>
      <button class="btn" @click.prevent.stop="$modal.show('LoginForm')">Вход</button>
    </div>
  </form>
</template>

<script setup>
import { makeRequest } from '@/use/api'
import { validate, getForm } from '@/use/formHandler'

const { $baseURL, $modal } = useNuxtApp()
const { data } = await useAsyncData('registrationForm', () => $fetch(`${$baseURL}/mock/form/registrationForm.json`))

const form = getForm(data.value.form)

const reg = () => {
  if (validate(form).valid) {
    makeRequest.post('/reg', validate(form).info)
      .then(() => $modal.show('Succes'))
      .catch(() => $modal.show('Error'))
  }
}
</script>
