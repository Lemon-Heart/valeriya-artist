<template lang="pug">
.base-loader
  div
  div
  div
  div
  div
  div
  div
  div
  div
</template>

<style lang="sass" scoped>
.base-loader
  display: inline-block
  position: relative
  width: 80px
  height: 80px

.base-loader div
  position: absolute
  width: 16px
  height: 16px
  border-radius: 50%
  background: var(--green)
  animation: base-loader 1.2s linear infinite
  background: $firstColor

.base-loader div:nth-child(1)
  top: 8px
  left: 8px
  animation-delay: 0s

.base-loader div:nth-child(2)
  top: 8px
  left: 32px
  animation-delay: -0.4s

.base-loader div:nth-child(3)
  top: 8px
  left: 56px
  animation-delay: -0.8s

.base-loader div:nth-child(4)
  top: 32px
  left: 8px
  animation-delay: -0.4s

.base-loader div:nth-child(5)
  top: 32px
  left: 32px
  animation-delay: -0.8s

.base-loader div:nth-child(6)
  top: 32px
  left: 56px
  animation-delay: -1.2s

.base-loader div:nth-child(7)
  top: 56px
  left: 8px
  animation-delay: -0.8s

.base-loader div:nth-child(8)
  top: 56px
  left: 32px
  animation-delay: -1.2s

.base-loader div:nth-child(9)
  top: 56px
  left: 56px
  animation-delay: -1.6s

@keyframes base-loader
  0%, 100%
    opacity: 1

  50%
    opacity: 0.5
</style>
