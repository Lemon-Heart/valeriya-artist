<template lang="pug">
.cont
  .footerComponent
    router-link(:to="{name: 'Offer'}") Публичная оферта
</template>

<style lang="sass">
.footerComponent
  @include font('t18-demibold')
  a
    margin: 2.5*$u
</style>
