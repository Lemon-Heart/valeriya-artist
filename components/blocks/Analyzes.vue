<template>
  <div class="cont">
    <h2>{{ props.head }}</h2>
    <div class="analyzesBlock">
      <div v-for="(item, i) in props.items" :key="i" class="analyzesBlock__item">
        <h4>{{ item.head }}</h4>
        <ul v-if="item.ul">
          <li v-for="(li, j) in item.ul" :key="j">{{ li }}</li>
        </ul>
        <button class="btn primary" @click="$modal.show('CallBackForm')">{{ item.btnText ? item.btnText : 'Записаться' }}</button>
        <img v-lazy="{src: `/img/${item.bg}`}">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  head: {
    type: String,
    default: null
  },
  items: {
    type: Array,
    default: null
  }
})
</script>
