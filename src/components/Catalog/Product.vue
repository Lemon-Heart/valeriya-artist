<template lang="pug">
router-link.product(:to="`/catalog/${id}`")
  .product__img(ref="sw")
    img.noFoto(v-if="!slides.length" src="/img/noFoto.png")
    img(v-if="!init" :src="slides[0]")
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
      swiper-slide(v-for="(slide, i) in slides" :key="i")
        img(:src="slide")
  .product__bottom
    .product__price 30 000 ₽
    .product__description Картина для спальни. Обнаженная девушка.
    ui-button Купить
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref, onMounted } from 'vue'

export default {
  components: { Swiper, SwiperSlide },
  props: {
    id: Number
  },
  setup () {
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

    const slides = ref([
      '/img/catalog/1.jpg',
      '/img/catalog/2.jpg'
    ])
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'
        }
      },
      modules: [Pagination],
      slides,
      init,
      sw
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
    height: 80*$u
    position: relative
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
  &__price
    @include font(h2)
    color: $firstColor
  &__description
    @include font(h3)
    margin: 2*$u 0 4*$u
    line-height: 120%
</style>
