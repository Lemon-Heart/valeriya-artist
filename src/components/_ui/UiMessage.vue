<template lang="pug">
.mess {{ message }}
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.mess
  @include font('t18-demibold')
  color: $white
</style>
