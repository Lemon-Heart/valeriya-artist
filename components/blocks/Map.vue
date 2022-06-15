<template>
  <div class="cont">
    <div class="mapBlock">
      <h2>{{ props.head }}</h2>
      <div class="mapBlock__top">
        <div class="mapBlock__loc"><loc /><span v-html="props.text" /></div>
        <button class="btn primary" @click="$modal.show('CallBackForm')">{{ btnText || 'Записаться на прием' }}</button>
      </div>
      <div class="mapBlock__map">
        <iframe v-if="showMap" :src="props.map" :width="props.width" :height="props.height" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import loc from '~icons/my-icons/loc'
import { ref, onMounted } from 'vue'

const props = defineProps({
  head: {
    type: String,
    default: null
  },
  text: {
    type: String,
    default: null
  },
  map: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: '400'
  },
  width: {
    type: String,
    default: '100%'
  },
  btnText: {
    type: String,
    default: 'Записаться на прием'
  }
})

const showMap = ref(false)
onMounted(() => {
  showMap.value = true
})
</script>
