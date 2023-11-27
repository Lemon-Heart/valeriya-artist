<template lang="pug">
.cont
  .footerComponent
    span Шатова Валерия Сергеевна
    span ИНН 370219835613
    a(href="mailto:valeriya.artist@mail.ru", target="blank") valeriya.artist@mail.ru
</template>

<style lang="sass">
.footerComponent
  display: flex
  justify-content: space-between
  @include font('t14-regular')
  color: $firstColor
  @media screen and (max-width: $padWidth)
    display: grid
    grid-gap: 3*$u
    width: fit-content
    margin: auto
    text-align: center
</style>
