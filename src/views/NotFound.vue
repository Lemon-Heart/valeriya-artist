<template lang="pug">
.cont
  .notFoundPage
    h1 Страница не найдена
    .error 404
    ui-button.button(is-animated @click="$router.back()") Назад
</template>

<style lang="sass" scoped>
.notFoundPage
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.error
  font-family: GolosTextWebDemiBold, serif
  color: $firstColor
  font-size: 30*$u
  margin-bottom: 10*$u
</style>
