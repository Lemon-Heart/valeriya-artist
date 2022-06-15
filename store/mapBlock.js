import { reactive } from 'vue'

export const mapBlock = reactive({
  head: 'Наш адрес',
  text: 'Центр города Иваново,<br>площадь Пушкина 12 (остановка общественного транспорта пл. Пушкина)',
  map: 'https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=49161490600',
  height: '400',
  width: '100%',
  btnText: 'Записаться на прием'
})
