<template lang="pug">
.tariff.base
  .tariff__title
    span Тариф
    h1 Базовый
  .tariff__body
    .tariff__text <b>Модуль 1.</b> Введение.
    .tariff__text <b>Модуль 2.</b> Психология.
    .tariff__text <b>Модуль 3.</b> Обучение.
    .tariff__text <b>Модуль 4.</b> Продажи.
    .tariff__text <b>Модуль 5.</b> Юридическая составляющая.
  .tariff__footer
    .tariff__text Домашние задания.
    .tariff__text Чек-листы.
    .tariff__text <span class="bold">Сертификат</span> о прохождении курса.
    .tariff__text Доступ к урокам на <span class="bold">12 месяцев</span>.
  .tariff__priceWrapper
    .tariff__oldPrice 102 000 ₽
    h1.tariff__price 29 900 ₽
  ui-button.tariff__button(is-animated @click="$emit('buy', 'Базовый')") Оформить заказ
</template>
