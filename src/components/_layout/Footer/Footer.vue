<template lang="pug">
.cont
  .footerComponent
    .col
      span Шатова Валерия Сергеевна
      span ИНН 370219835613
      a(href="mailto:valeriya.artist@mail.ru", target="blank") valeriya.artist@mail.ru
    .col
      router-link.t16(:to="{ name: 'Offer'}") Публичная оферта
      router-link.t16(:to="{ name: 'Policy'}") Политика конфиденциальности
</template>

<style lang="sass">
.footerComponent
  display: flex
  justify-content: space-between
  gap: 5*$u
  color: $firstColor
  @media screen and (max-width: $padWidth)
    flex-direction: column
    align-items: center
.col
  display: flex
  flex-direction: column
  @include font('t14-regular')
  @media screen and (max-width: $padWidth)
    align-items: center
.t16
  @include font('t18-regular')
</style>
