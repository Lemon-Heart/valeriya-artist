<template lang="pug">
.cont
  UiFullScreenLoader.loader(v-if="loading")
  template(v-else)
    router-link.back(:to="{ name: 'Catalog' }")
      ui-svg-icon(name="back" :size="20")
      | Назад в каталог
    h1 {{ paint.name }}
    .product
      .product__img
        swiper(
          @swiper="setThumbsSwiper"
          :direction="'vertical'"
          :spaceBetween="20"
          :slidesPerView="paint.images.length"
          :grabCursor="true"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="product__galeryThumbs"
        )
          swiper-slide(v-for="(slide, i) in paint.images" :key="i")
            img(:src="slide")
        swiper(
          :thumbs="{ swiper: thumbsSwiper }"
          :loop="true"
          :slidesPerView="1"
          :spaceBetween="1"
          :grabCursor="true"
          :modules="modules"
          class="product__galery"
        )
          swiper-slide(v-for="(slide, i) in paint.images" :key="i")
            img(:src="slide")
      .product__card
        .product__price {{ paint.price }} ₽
        ui-button Купить
        .product__description
          .p
            .bold Материалы:
            |  {{ paint.materials }}
          .p
            .bold Размер:
            |  {{ paint.size }}
          .p
            .bold Рекомендации по уходу:
            |  {{ paint.recomendation }}
          .p
            .bold Доставка:
            ul
              li
                span Самовывоз (Иваново)
              li
                span Boxberry (Россия)
              li
                span Почтовые службы по миру
          ui-dropdown(
            variant="text"
            title="Описание"
            :text="paint.description"
          )
</template>

<script>
import { useLoading } from '@/composables/useLoading'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { ref, inject, computed } from 'vue'

export default {
  components: { Swiper, SwiperSlide },
  props: {
    productId: Number
  },
  setup (props) {
    const { loading, loadingOn, loadingOff } = useLoading()
    loadingOn()

    const store = inject('store')
    store.catalog.getProduct(props.productId).then(() => loadingOff())
    const paint = computed(() => store.catalog.currentPaint)

    const thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper
    }

    return { thumbsSwiper, setThumbsSwiper, modules: [FreeMode, Thumbs], paint, loading }
  }
}
</script>

<style lang="sass" scoped>
.cont
  margin-top: 5*$u
.back
  display: flex
  align-items: center
  transition: .1s
  margin-bottom: 5*$u
  &:hover
    color: $firstColor
    &:deep
      path
        fill: $firstColor!important
  &:deep
    .svgIconComponent
      margin-right: 2*$u
    path
      fill: $white!important
.product
  display: flex
  @media screen and (max-width: $XXLWidth)
    flex-direction: column
  & > *
    flex-shrink: 0
  &__img
    max-height: 200*$u
    display: flex
    width: 60%
    @media screen and (max-width: $XXLWidth)
      width: 100%
  &__galery
    height: 100%
    max-height: 200*$u
    img
      width: 100%
      height: 100%
      object-position: top center
      object-fit: contain
  &__galeryThumbs
    width: 20*$u
    flex-shrink: 0
    margin-right: 5*$u
    .swiper-slide
      height: 20*$u!important
      cursor: pointer
    .swiper-slide-thumb-active
      filter: contrast(.5)
    img
      width: 20*$u
      height: 20*$u
      object-position: center
      object-fit: cover
  &__card
    padding-left: 10*$u
    width: 40%
    @media screen and (max-width: $XXLWidth)
      padding-left: 0
      width: 100%
      margin-top: 10*$u
  &__price
    @include font(h1)
    margin-bottom: 5*$u
  &__description
    display: flex
    flex-direction: column
    margin: 5*$u 0
    font-size: 4.5*$u
    .bold
      display: inline-block
      color: $firstColor
    & > *
      line-height: 130%
      ul
        margin-top: 2*$u
        font-size: 4*$u
        span
          color: $white
    & > *:not(:last-child)
      margin-bottom: 3*$u
</style>
