<template lang="pug">
.cont
  .footerComponent
    router-link(:to="{name: 'offer'}") Публичная оферта
</template>

<style lang="sass">
.footerComponent
  @include font('t18-demibold')
</style>
