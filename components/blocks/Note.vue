<template>
  <div class="cont">
    <div class="note">
      <div class="note__left">
        <exc />
        <span class="note__text">
          {{ props.label.split('&')[0] }}
          <nuxt-link :to="props.link" v-if="props.link">{{ props.label.split('&')[1] }}</nuxt-link>
          {{ props.label.split('&')[2] }}
        </span>
      </div>
      <div v-if="props.numbers" class="note__phone">
        <ui-kit-link-tel v-for="(phone, i) in props.numbers" :key="i" :tel="phone" />
      </div>
    </div>
  </div>
</template>

<script setup>
import exc from '~icons/my-icons/exc'
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: null
  },
  numbers: {
    type: Array,
    default: null
  }
})
</script>
