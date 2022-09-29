<template lang="pug">
.cont
  h1 Способы оплаты
</template>

<style lang="sass" scoped>
.offerComponent
  table
    margin-top: 100px
    width: 100%
    border-collapse: collapse
    tr
      border-top: 1px solid white
      border-bottom: 1px solid white
      border-left: 1px solid white
      border-right: 1px solid white
      &.nb
        border-bottom: none
        border-top: none
      &.bt
        border-top: 1px solid white
    td
      padding: 10px
      border-right: 1px solid white
      &.th
        padding: 20px
        font-size: 4.5*$u
        color: $firstColor
  a
    color: $firstColor
  h2
    @include font('h3')
    margin-top: 10*$u
    color: $firstColor
  ul li
    color: white
    line-height: 24px
  p, ul
    font-size: 4.5*$u
    margin: 5*$u 0
    @media screen and (max-width: $padWidth)
      font-size: 4*$u
    @media screen and (max-width: $mobileWidth)
      font-size: 3.5*$u
</style>
