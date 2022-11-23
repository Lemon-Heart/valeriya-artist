<template lang="pug">
transition(name="modal")
  .appModalComponent(
    v-if="activeModal"
    :class="[{_fullscreen: isFullscreen}]"
    @click="onOverlayClick"
    ref="wrapperRef"
  )
    .inner(
      :class="[{_responsive: isResponsive}]"
      @click.stop
    )
      ui-close(v-if="isClosable" @onClick="onCloseButtonClick")
      component(
        :is="activeModal.component"
        @close="onClose"
        @scroll-to-top="onScrollToTop"
        ref="componentRef"
        v-bind="activeModal.props"
        v-on="activeModal.on"
      )
</template>

<script>
import { inject, computed, ref } from 'vue'
export default {
  setup () {
    // Стор
    const store = inject('store')
    // Контроллер очереди модалок
    const controller = store.modalQueue
    // Активная модалка из очереди
    const activeModal = computed(() => controller.activeModal)
    // Референс враппера модалки
    const wrapperRef = ref(null)
    // Референс инстанса компонента активной модалки
    const componentRef = ref(null)

    // Флаг, отвечающий за отображение крестика и закрытие модалки по клику на фон или при нажатии ESC
    const isClosable = computed(() => activeModal.value?.params.isClosable)

    // Флаг, отвечающий за отображение ширины модалки
    const isResponsive = computed(() => activeModal.value?.params.isResponsive)

    // Флаг, отвечающий за отображение модалки во весь экран
    const isFullscreen = computed(() => activeModal.value?.params.isFullscreen)

    // Функция, закрывающщая активную модалку
    const closeActiveModal = async () => {
      // Флаг, должна ли модалка быть закрыта
      let closeSuccess = true

      //  Смотрим, есть ли в инстансе компонента модалки метод onBeforeClose
      if (typeof componentRef.value?.onBeforeClose === 'function') {
        // Вызываем метод onBeforeClose
        const result = await componentRef.value.onBeforeClose()
        // Если onBeforeClose не вернул true, модалка не должна быть закрыта
        if (!result) closeSuccess = false
      }
      // Если модалка должна быть закрыта
      if (closeSuccess) {
        // Удаляем модалка из очереди
        controller.remove(activeModal.value.key)
        // Если в инстансе компонента модалки есть метод onAfterClose, вызываем его
        if (typeof componentRef.value?.onAfterClose === 'function') componentRef.value.onAfterClose()
      }
    }

    // Хендлер, вызываемый по нажатию на задний фон
    const onOverlayClick = () => {
      if (isClosable.value) closeActiveModal()
    }

    // Хендлер, вызываемый по нажатию ESC
    const onEscapeKeyPress = e => {
      if (e.keyCode === 27 && isClosable.value) closeActiveModal()
    }

    // Хендлер, вызываемый по клику на крестик
    const onCloseButtonClick = () => {
      if (isClosable.value) closeActiveModal()
    }

    // Хендлер, вызываемый, когда в инстансе компонента модалки сработал ивент 'close'
    const onClose = () => closeActiveModal()

    // Хендлер скролла враппера в начало
    const onScrollToTop = () => {
      wrapperRef.value.scrollTop = 0
    }

    // подписываемся на нажатие клавиш
    document.addEventListener('keyup', onEscapeKeyPress)

    return {
      activeModal,
      isClosable,
      isResponsive,
      isFullscreen,
      onOverlayClick,
      onCloseButtonClick,
      onClose,
      onScrollToTop,
      wrapperRef,
      componentRef
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-enter-active, .modal-leave-active
  transition-property: opacity, top
  transition-duration: .3s
  transition-timing-function: ease-out
.modal-enter-from, .modal-leave-to
  opacity: 0
  top: -25vh !important
.modal-enter-to, .modal-leave-from
  opacity: 1
  top: 0 !important

.appModalComponent
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: rgba(#000, .7)
  display: flex
  overflow: auto
  z-index: 100
  padding: 7*$u
  @media screen and (max-width: $XXSWidth)
    padding: 2*$u

  > .inner
    max-width: min(calc(100% - #{2*12.5*$u}), #{$XXXLWidth})
    min-width: 120*$u
    position: relative
    z-index: 100
    background: black
    border-radius: $BR
    padding: 10*$u
    margin: auto
    color: $gray
    border: 1px solid white

    @media screen and (max-width: 765px)
      max-width: calc(100% - #{2*7.5*$u})
    @media screen and (max-width: 500px)
      max-width: calc(100% - #{2*2.5*$u})
      padding: 10*$u 5*$u
      width: 100%
      min-width: auto

    &._responsive
      width: 100%
</style>
