<template>
<!-- .cont
  p Ниже отобразится платежная форма. Если вы еще не создавали платеж и не передавали токен для инициализации виджета, появится сообщение об ошибке.
  #payment-form
  p Данные банковской карты для оплаты в
    b.bold  тестовом магазине:
  ul
    li номер —
      b.bold  5555 5555 5555 4477
    li срок действия —
      b.bold  01/30
    li CVC —
      b.bold  123
    li код для прохождения 3-D Secure —
      b.bold  123
  p
    a(href="https://yookassa.ru/developers/payment-acceptance/testing-and-going-live/testing#test-bank-card") Другие тестовые банковские карты -->
<form target="_blank" class="yoomoney-payment-form" action="https://yookassa.ru/integration/simplepay/payment" method="post" accept-charset="utf-8" >
  <div class="ym-payment-btn-block ym-before-line ym-align-space-between">
    <div class="ym-input-icon-rub ym-display-none">
      <input name="sum" class="ym-input ym-sum-input ym-required-input" type="number" step="any" value="15000">
    </div>
    <button data-text="Заплатить" class="ym-btn-pay ym-result-price"><span class="ym-text-crop">Заплатить</span></button>
  </div>
<input name="shopId" type="hidden" value="945440"></form>
</template>

<script>
// import { onMounted } from 'vue'
// export default {
//   setup () {
//     onMounted(() => {
//       const checkout = new window.YooMoneyCheckoutWidget(945440)
//     })
//     return { }
//   }
// }
</script>

<style lang="sass" scoped>
a
  color: $firstColor
h2
  @include font('h3')
  margin-top: 10*$u
  color: $firstColor
ul li
  color: white
  line-height: 24px
p, ul
  font-size: 4.5*$u
  margin: 5*$u 0
  @media screen and (max-width: $padWidth)
    font-size: 4*$u
  @media screen and (max-width: $mobileWidth)
    font-size: 3.5*$u
</style>
