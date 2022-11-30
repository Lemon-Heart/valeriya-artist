<template lang="pug">
section.section10
  p Все твои мечты ближе, чем ты думаешь! Я потратила годы на самостоятельное обучение от рисования до продаж, прошла множество курсов, протестировала десятки направлений и гипотез прежде, чем найти свой стиль и понять, что же на самом деле работает. Со мной ты сможешь прийти к цели всего за 1,5 месяца. Я постаралась сделать этот курс максимально подробным, интересным и эффективным. Собрала весь свой многолетний опыт, чтобы буквально «за ручку» довести тебя до результата
  p Пойдем, со мной не страшно. С любовью и максимальной заботой @valeriya.artist
</template>

<style lang="sass" scoped>
.section10
  display: flex
  flex-direction: column
  margin-top: 50*$u
  @media screen and (max-width: $XXLWidth)
    margin-top: 20*$u
  p
    @include font('t18-demibold')
    @media screen and (max-width: $XXSWidth)
      text-align: justify
    &:not(:first-child)
      text-align: center
      margin-top: 7.5*$u
</style>
