<template lang="pug">
.home
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup () {
    const router = useRouter()

    onMounted(() => {
      router.replace({ name: 'Course' })
    })

    return {}
  }
}
</script>

<style lang="sass" scoped>
</style>
