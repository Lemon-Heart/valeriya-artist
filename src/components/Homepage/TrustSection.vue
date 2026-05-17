<template lang="pug">
section.trust-section
  p Твои мечты ближе, чем кажется. Я уже прошла путь от поисков и сомнений до собственного стиля и стабильного результата, и теперь беру тебя за руку, чтобы ты прошёл его быстрее и спокойнее. В этом курсе собран мой многолетний опыт: без лишнего, а только то, что действительно работает. Шаг за шагом, с поддержкой и вниманием к деталям.
  p Пойдём, со мной не страшно. С любовью и максимальной заботой @valeriya.artist 🤍
</template>

<style lang="sass" scoped>
.trust-section
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
