<template lang="pug">
router-link.product(:to="`/catalog/${paint.id}`")
  .product__img(ref="sw")
    img.noFoto(v-if="!paint.images.length" src="/img/noFoto.png")
    img(v-if="!init" :src="paint.images[0]")
    swiper(
      v-if="init"
      :loop="true"
      :slidesPerView="1"
      :slidesPerGroup="1"
      :grabCursor="true"
      :pagination="pagination"
      :modules="modules"
      class="product__galery"
    )
      swiper-slide(v-for="(slide, i) in paint.images" :key="i")
        img(:src="slide")
  .product__bottom
    .product__price {{ paint.price }} ₽
    .product__description {{ paint.name }}
    .product__buttons
      ui-button(size="L") Подробнее
      ui-button(size="L" @click.prevent="buy") Купить
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref, onMounted, inject } from 'vue'
import Paint from '@/models/Paint'
import { buyPaint } from '@/services/payment'
import PaintPurchase from '@/components/Forms/PaintPurchase'

export default {
  components: { Swiper, SwiperSlide },
  props: {
    paint: Paint
  },
  setup (props) {
    const store = inject('store')

    const init = ref(false)
    const sw = ref()
    const observer = ref()
    onMounted(() => {
      observer.value = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          init.value = true
          observer.value.disconnect(sw.value)
        }
      }, { threshold: 0.2 })
      observer.value.observe(sw.value)
    })

    const buy = async () => {
      if (store.user.isAuth) {
        const data = new FormData()
        data.append('id', props.paint.id)
        await buyPaint(data)
      } else {
        store.modalQueue.push({
          key: 'PaintPurchase',
          component: PaintPurchase,
          props: {
            id: props.paint.id
          }
        })
      }
    }

    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      modules: [Pagination],
      init,
      sw,
      buy
    }
  }
}
</script>

<style lang="sass" scoped>
.product
  display: flex
  flex-direction: column
  filter: drop-shadow(0px 9px 11px black)
  &__img
    height: 100*$u
    position: relative
    flex-shrink: 0
    @media screen and (max-width: 1400px)
      height: 80*$u
    @media screen and (max-width: $padWidth)
      height: 70*$u
    @media screen and (max-width: $XSWidth)
      height: 60*$u
    @media screen and (max-width: $XXSWidth)
      height: 50*$u
    @media screen and (max-width: 440px)
      height: 40*$u
    & > img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      object-position: center
      &.noFoto
        object-fit: contain
        filter: contrast(0.1)
  &__galery
    height: 100%
    img
      width: 100%
      height: 100%
      object-position: center
      object-fit: cover
  &__bottom
    padding: 5*$u
    background: $BGOpacity
    display: flex
    flex-direction: column
    height: 100%
    @media screen and (max-width: $XSWidth)
      padding: 3*$u
    & > *:last-child
      margin-top: auto
    button
      @media screen and (max-width: $XXSWidth)
        height: 9*$u!important
  &__price
    @include font(h2)
    color: $firstColor
    @media screen and (max-width: $XSWidth)
      @include font(h3)
  &__description
    @include font(h3)
    margin: 2*$u 0 4*$u
    line-height: 120%
    @media screen and (max-width: $XSWidth)
      @include font(t16-regular)
      line-height: 120%
  &__buttons
    display: flex
    justify-content: space-between
    > *
      width: 47%
    @media screen and (max-width: $padWidth)
      > *
        &:deep
          padding: 0!important
    @media screen and (max-width: $XXSWidth)
      > *
        &:deep .text
          font-size: 3*$u
    @media screen and (max-width: 440px)
      flex-direction: column
      > *
        width: 100%
        &:not(:last-child)
          margin-bottom: 2*$u
</style>
