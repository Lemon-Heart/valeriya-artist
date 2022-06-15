<template>
  <footer>
    <div class="cont">
      <div class="footer">
        <ui-kit-logo class="footer__logo" />
        <div class="footer__cont">
          <span class="footer__loc"><loc />{{ data.address }}</span>
          <ui-kit-link-tel v-for="(phone, i) in data.phone" :key="i" :tel="phone" :icon="true" />
        </div>
        <div class="footer__soc">
          <ui-kit-link-soc v-for="(link, j) in data.links" :key="j" :link="link" :icon="j" />
        </div>
        <div class="footer__arms">
          <img :src="`/img/${data.arms.img}`" alt="">
          <span>{{ data.arms.text }}</span>
        </div>
        <div class="footer__c">
          <base-copyright :text="data.copyright" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import loc from '~icons/my-icons/loc'
const { $baseURL } = useNuxtApp()
const { data } = await useAsyncData('footer', () => $fetch(`${$baseURL}/mock/footer.json`))
</script>
