<template lang="pug">
.headerSocComponent
  a.headerIconWrapper(target="blank" href="https://vk.com/valeriya.artist")
    ui-svg-icon(name="vk" :size="18")
  a.headerIconWrapper(target="blank" href="https://instagram.com/valeriya.artist")
    ui-svg-icon(name="inst" :size="18")
  a.headerIconWrapper(target="blank" href="https://t.me/valeriya_artist")
    ui-svg-icon(name="tg" :size="18")
</template>

<style lang="sass">
.headerSocComponent
  display: flex
  justify-content: space-between
  align-items: center
  .headerIconWrapper
    display: flex
    justify-content: center
    align-items: center
    height: 10*$u
    width: 10*$u
    border-radius: 50%
    background-color: $socIcon
    transition: .2s
    &:not(:last-child)
      margin-right: 5*$u
    &:hover
      background-color: $socIconHover
</style>
