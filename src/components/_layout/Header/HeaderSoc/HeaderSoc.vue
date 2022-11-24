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
    @media screen and (max-width: $XXSWidth)
      height: 9*$u
      width: 9*$u
    &:not(:last-child)
      margin-right: 3*$u
      @media screen and (max-width: $XXSWidth)
        margin-right: $u
    &:hover
      background-color: $socIconHover
</style>
