<template>
  <form @submit.prevent.stop="callback">
    <h2>{{ data.title }}</h2>
    <component
      v-for="(item, i) in form"
      :key="i"
      :is="item.component"
      v-model="item.value"
      :label="item.label"
      :name="item.name"
      :error="item.error"
      :checked="item.checked"
      @update:modelValue="item.error = false"
      @update:checked="item.checked = $event"
    />
    <button class="btn primary" type="submit" @click.prevent.stop="callback">{{ data.btnText || 'Позвоните мне!' }}</button>
  </form>
</template>

<script setup>
import { makeRequest } from '@/use/api'
import { validate, getForm } from '@/use/formHandler'

const { $modal, $baseURL } = useNuxtApp()
const { data } = await useAsyncData('callBackForm', () => $fetch(`${$baseURL}/mock/form/callBackForm.json`))

const form = getForm(data.value.form)

const callback = () => {
  if (validate(form).valid) {
    makeRequest.post('/answer', validate(form).info)
      .then(() => $modal.show('Succes'))
      .catch(() => $modal.show('Error'))
  }
}
</script>
