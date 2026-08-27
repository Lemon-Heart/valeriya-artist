<template lang="pug">
section.why-section
  h1
    ui-text-anim Почему я создала именно этот марафон?
  .why-section__block
    img.why-section__img(v-observe src="/img/marathon/why-section/bg.PNG")
    .why-section__content
      p Наша жизнь превратилась в бесконечную спешку, гонку за результатом и стремление все успеть. Мы почти разучились делать что-то просто ради удовольствия. Как в детстве, помнишь?
      h2 А что если вернуться в те счастливые воспоминания?
      p Где время тянулось дольше, еда была вкуснее и эмоции были ярче. Где можно было часами кататься на велосипеде, рисовать мелками на асфальте, строить шалаши и не думать ни о чем, кроме этого момента.
      h2 Именно поэтому я выбрала тему детства.
      p У каждого были свои дворы, друзья, любимые игрушки, свои летние вечера и  маленькие истории. Когда начинаешь их вспоминать, внутри становится тепло. И ты будто ненадолго возвращаешься туда, где было спокойно, безопасно и можно просто быть счастливым.
</template>

<script>
export default {
  setup () {
    return { }
  }
}
</script>

<style lang="sass" scoped>
.why-section
  &__block
    display: grid
    gap: 10*$u
    grid-template-columns: 3fr 4fr
    margin-top: 10*$u
    @media screen and (max-width: $XXLWidth)
      grid-template-columns: 1fr 1fr
    @media screen and (max-width: $padWidth)
      grid-template-columns: 1fr
  &__img
    width: 100%
    height: 100%
    object-fit: contain
    opacity: 0
    transform: scale(.5)
    transition: .3s
    &.observe
      opacity: 1
      transform: scale(1)
  &__content
    display: grid
    gap: 2*$u
    h2
      color: $firstColor
      @include font('t16-regular')
</style>
