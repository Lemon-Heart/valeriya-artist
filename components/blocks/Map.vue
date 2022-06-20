<template>
  <div class="mapBlock">
    <h2 v-if="props.head">{{ props.head }}</h2>
    <div class="mapBlock__top">
      <div class="mapBlock__loc"><loc /><span v-html="props.text" /></div>
      <button class="btn primary" @click="$modal.show('CallBackForm')">{{ btnText || 'Записаться на прием' }}</button>
    </div>
    <div ref="map" class="mapBlock__map">
      <iframe v-if="showMap" :src="props.map" :width="props.width" :height="props.height" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import loc from '~icons/my-icons/loc'
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
const observer = ref(null)
const map = ref(null)

const options = {
  root: null,
  threshold: 0.1
}
const callback = (entries) => {
  if (entries[0].isIntersecting) {
    showMap.value = true
    observer.value.disconnect()
  }
}

onMounted(() => {
  observer.value = new IntersectionObserver(callback, options)
  observer.value.observe(map.value)
})

onBeforeUnmount(() => {
  observer.value.disconnect()
})
</script>
