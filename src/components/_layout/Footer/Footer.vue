<template lang="pug">
.cont
  .footerComponent
    router-link(:to="{name: 'offer'}") Публичная оферта
    router-link(:to="{name: 'payment'}") Способы оплаты
</template>

<style lang="sass">
.footerComponent
  @include font('t18-demibold')
  a
    margin: 2.5*$u
</style>
