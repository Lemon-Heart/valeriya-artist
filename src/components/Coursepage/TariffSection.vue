<template lang="pug">
ui-base-loader(v-if="loading")
section.tariff-section(v-else id="tariffs")
  h1
    ui-text-anim Тарифы
  .tariff-section__body
    Tariff(
      v-for="tariff in tariffs"
      :key="tariff.id"
      :alt="tariff.altDisplay"
      :name="tariff.name"
      :code="tariff.code"
      :text-top="tariff.textTop"
      :text-middle="tariff.textMiddle"
      :text-bottom="tariff.textBottom"
      :text-more="tariff.textMore"
      :price="tariff.price"
      :new-price="tariff.newPrice"
      @buy="buy(tariff.code)"
      @buy-parts="openModal"
    )

teleport(to="body")
  transition(name="modal-expand")
    .modal-overlay(v-if="isModalOpen" @click.self="closeModal")
      .modal-content
        button.modal-close(
          type="button"
          aria-label="Закрыть"
          @click="closeModal"
        )
          span.modal-close__line
          span.modal-close__line
        picture
          source(
            media="(max-width: 825px)"
            srcset="/img/coursepage/modal-mobile.png"
          )
          img.modal-image(
            src="/img/coursepage/modal.png"
            alt="Детали тарифа"
          )
        .modal-content__soc
          a(
            v-for="item in soc"
            :key="item.img"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
          )
            img(:src="item.img" :alt="item.link")
</template>

<script>
import { inject, ref, onBeforeUnmount, onMounted } from 'vue'
import LoginAndAuthComponent from '@/components/Forms/LoginAndAuthComponent'
import { buyCourse } from '@/services/payment'
import { useRouter } from 'vue-router'
import TariffsController from '@/controllers/TariffsController'
import { useLoading } from '@/composables/useLoading'
import Tariff from '@/components/Tariff'

export default {
  components: { Tariff },
  setup () {
    const { loading, loadingOn, loadingOff } = useLoading()
    const { tariffs, getTariffs } = TariffsController()
    loadingOn()
    getTariffs().then(() => loadingOff())

    const router = useRouter()
    const store = inject('store')
    const buy = async (code) => {
      if (store.auth.isAuth) {
        const data = new FormData()
        data.append('tariff', code)
        await buyCourse(data)
      } else {
        router.push({ query: { checkout: code } })
        store.modalQueue.push({
          key: 'LoginAndAuthComponent',
          component: LoginAndAuthComponent
        })
      }
    }

    const isModalOpen = ref(false)

    const openModal = () => {
      isModalOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
      isModalOpen.value = false
      document.body.style.overflow = ''
    }

    const onKeydown = (e) => {
      if (e.key === 'Escape' && isModalOpen.value) {
        closeModal()
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', onKeydown)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    })

    const soc = ref([
      {
        link: 'https://t.me/shatova_art',
        img: '/img/coursepage/soc/tg.png'
      },
      {
        link: 'https://vk.ru/shatova_art',
        img: '/img/coursepage/soc/vk.png'
      },
      {
        link: 'https://max.ru/u/f9LHodD0cOL2NxYHPFy0NR5-2GqU2GC8tKh5LpVvUEctc_fsiCEGj1ElJXA',
        img: '/img/coursepage/soc/max.png'
      },
      {
        link: 'https://wa.me/79997303403',
        img: '/img/coursepage/soc/wa.png'
      },
      {
        link: 'https://www.instagram.com/valeriya.shatova',
        img: '/img/coursepage/soc/inst.png'
      }
    ])

    return { buy, loading, tariffs, openModal, closeModal, isModalOpen, soc }
  }
}
</script>

<style lang="sass" scoped>
.tariff-section
  margin-top: 50*$u
  @media screen and (max-width: $XXSWidth)
    margin-top: 25*$u
  h1
    margin-bottom: 20*$u
  &__body
    display: flex
    flex-direction: row
    flex-wrap: wrap
    grid-gap: 5*$u
    gap: 5*$u
    justify-content: center
    @media screen and (max-width: $XXLWidth)
      flex-direction: column
      align-items: center

.modal-overlay
  position: fixed
  inset: 0
  z-index: 1000
  display: flex
  align-items: center
  justify-content: center
  background: rgba(0, 0, 0, 0.7)

.modal-content
  position: relative
  max-width: 90vw
  max-height: 90vh
  clip-path: inset(0 0 0 0)

  &__soc
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%)
    display: flex
    justify-content: center
    flex-wrap: nowrap
    gap: 5*$u 0
    width: 70%
    @media screen and (max-width: $padWidth)
      gap: 5*$u 0
      top: 37%
      flex-wrap: wrap

    a
      display: inline-flex

    img
      display: block
      width: 12vw
      height: 12vw
      max-width: 40*$u
      max-height: 40*$u
      object-fit: contain
      transition: .2s
      @media screen and (max-width: $padWidth)
        width: 20vw
        height: 20vw
      &:hover
        filter: drop-shadow(0 4*$u 8*$u rgba(0, 0, 0, 0.45))

.modal-image
  display: block
  max-width: 100%
  max-height: 90vh
  object-fit: contain

.modal-close
  position: absolute
  top: 10%
  right: 5%
  z-index: 3
  display: flex
  align-items: center
  justify-content: center
  width: 4vw
  height: 4vw
  max-width: 48*$u
  max-height: 48*$u
  padding: 0
  border: none
  background: transparent
  cursor: pointer
  transition: 0.2s
  @media screen and (max-width: $padWidth)
    top: 6%
    right: 8%

  &:hover
    transform: scale(1.1)

  &__line
    position: absolute
    width: 100%
    height: .5vw
    max-width: 14*$u
    max-height: 2*$u
    background: #5c3d2e //7a5230
    border-radius: .5vw
    transition: background 0.2s

    &:first-child
      transform: rotate(45deg)

    &:last-child
      transform: rotate(-45deg)

.modal-expand-enter-active,
.modal-expand-leave-active
  transition: opacity 0.25s ease

.modal-expand-enter-active .modal-content,
.modal-expand-leave-active .modal-content
  transition: clip-path 0.4s ease-out, opacity 0.25s ease

.modal-expand-enter-from,
.modal-expand-leave-to
  opacity: 0

.modal-expand-enter-from .modal-content,
.modal-expand-leave-to .modal-content
  clip-path: inset(0 50% 0 50%)
  opacity: 0
</style>
