<template>
  <div class="factsBlock">
    <div class="cont">
      <div class="factsBlock__cont">
        <div v-for="(item, i) in props.facts" :key="i" class="factsBlock__item">
          <span>{{ item[0] }}</span>
          <p>{{ item[1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  facts: {
    type: Object,
    required: true
  }
})
</script>
