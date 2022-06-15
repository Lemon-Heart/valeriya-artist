import { reactive, computed } from 'vue'
import { servicesBlock } from '@/store/servicesBlock' // Все анализы на сайте

export const basket = reactive({
  basketItemsID: [], // Хранит только ID анализов
  toggleBasketItem: (id) => {
    basket.basketPrice = 0
    if (basket.basketItemsID.includes(id)) {
      basket.basketItemsID.splice(basket.basketItemsID.indexOf(id), 1)
    } else {
      basket.basketItemsID.push(id)
    }
    localStorage.setItem('basket', JSON.stringify(basket.basketItemsID))
  }, // Добавляет/удаляет анализ из корзины
  formBasket: () => {
    basket.basketItemsID = JSON.parse(localStorage.getItem('basket')) || []
  }, // Парсит ID`шки из localStorage если есть (вызывается в компоненте TheHeader)
  basketPrice: 0, // Сумма корзины
  basketItems: computed(() => {
    return servicesBlock.items.filter(item => {
      if (basket.basketItemsID.includes(item.id)) {
        basket.basketPrice += Number(item.price)
      }
      return basket.basketItemsID.includes(item.id)
    })
  }), // Возвращает список анализов в корзине пользователя
  clearBasket: () => {
    basket.basketItemsID = []
    localStorage.removeItem('basket')
  } // Очистить корзину
})
