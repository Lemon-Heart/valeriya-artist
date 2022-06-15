<template>
  <div class="cont">
    <div class="blockContent">
      <h1>{{ title }}</h1>
      <p class="p">{{ data.head }}</p>
      <table>
        <tbody>
          <tr v-for="(tr, i) in data.items" :key="i">
            <td v-for="(td, j) in tr" :key="j">
              <div v-if="j === 'numbers'">
                <ui-kit-link-tel v-for="(phone, k) in td" :key="k" :tel="phone" />
              </div>
              <div v-else-if="j === 'mail'">
                <a :href="`mailto:${td}`">{{ td }}</a>
              </div>
              <div v-else v-html="td">
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('requisites', () => $fetch(`${$baseURL}/mock/requisites.json`))

const title = 'Реквизиты'
// eslint-disable-next-line no-undef
useHead({
  title
})
</script>
