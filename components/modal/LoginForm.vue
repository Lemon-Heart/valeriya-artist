<template>
  <form @submit.prevent.stop="login">
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
      <button class="btn primary" type="submit" @click.prevent.stop="login">Войти</button>
      <button class="btn" @click.prevent.stop="$modal.show('RegistrationForm')">Регистрация</button>
    </div>
  </form>
</template>

<script setup>
import { makeRequest } from '@/use/api'
import { validate, getForm } from '@/use/formHandler'
import { useRouter } from 'vue-router'

const router = useRouter()
const { $baseURL, $modal } = useNuxtApp()
const { data } = await useAsyncData('loginForm', () => $fetch(`${$baseURL}/mock/form/loginForm.json`))

const form = getForm(data.value.form)

const login = () => {
  if (validate(form).valid) {
    if (validate(form).info.login === 'admin' && validate(form).info.password === '123456') {
      $modal.hide()
      const user = useCookie('user')
      user.value = 'admin'
      router.push('/lk')
    } else {
      makeRequest.post('/login', validate(form).info)
        .then(() => $modal.show('Succes'))
        .catch(() => $modal.show('Error'))
    }
  }
}
</script>
