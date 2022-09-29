<template lang="pug">
.tariff.middle
  .tariff__icons
    ui-svg-icon(name="diamond" :size="60")
  .tariff__title
    span Тариф
    h1 Стандарт
  .tariff__body
    .tariff__text <b>Модуль 1.</b> Введение.
    .tariff__text <b>Модуль 2.</b> Психология.
    .tariff__text <b>Модуль 3.</b> Обучение.
    .tariff__text <b>Модуль 4.</b> Продажи.
    .tariff__text <b>Модуль 5.</b> Юридическая составляющая.
    .tariff__text <b>Модуль 6.</b> Бонусный.
  .tariff__footer
    .tariff__text Домашние задания.
    .tariff__text Чек-листы.
    .tariff__text <span class="bold">Сертификат</span> о прохождении курса.
    .tariff__text Доступ к урокам на <span class="bold">12 месяцев</span>.
  .tariff__footer
    .tariff__text Чат с другими учениками курса.
    .tariff__text Возможность приобретения <span class="bold">новых знакомств и поддержки</span> от других художников.
  .tariff__priceWrapper
    .tariff__oldPrice 131 000 ₽
    h1.tariff__price 39 900 ₽
  ui-button.tariff__button(is-animated variant="dark" @click="$emit('buy', 'Стандарт')") Оформить заказ
</template>
