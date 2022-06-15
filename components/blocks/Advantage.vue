<template>
  <div class="advantage">
    <div class="cont">
      <div class="advantage__cont">
        <div class="advantage__left">
          <h3>{{ props.advantage.head }}</h3>
          <div v-for="(item, i) in props.advantage.items" :key="i" class="advantage__item">
            <calendar v-if="item.icon === 'calendar'" />
            <fam v-if="item.icon === 'fam'" />
            <mess v-if="item.icon === 'mess'" />
            <span>{{ item.text }}</span>
          </div>
        </div>
        <img class="advantage__right" v-lazy="{src: `/img/${props.advantage.bg}`}">
      </div>
    </div>
  </div>
</template>

<script setup>
import calendar from '~icons/my-icons/calendar'
import fam from '~icons/my-icons/fam'
import mess from '~icons/my-icons/mess'

const props = defineProps({
  advantage: {
    type: Object,
    required: true
  }
})
</script>
