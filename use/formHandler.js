import { shallowRef, reactive, defineAsyncComponent } from 'vue'

export const validate = (form) => { // Возвращает результат валидации (true/false) и сформированный объект данных для отправки
  const info = {}
  let valid = true
  form.map(i => {
    if (i.required) {
      if (i.type === 'checkbox') {
        if (!i.checked) {
          i.error = true
          valid = false
        } else {
          info[i.name] = i.value
        }
      } else {
        if (i.value === null || i.value === '' || i.value === false) {
          i.error = true
          valid = false
        } else {
          info[i.name] = i.value
        }
      }
    } else {
      if (i.value) {
        info[i.name] = i.value
      }
    }
    return i
  })
  return { valid, info }
}

export const getForm = (form) => { // Добавит в форму поля, необходимые для дальнейшей обработки
  form.map(i => {
    i.value = null
    if (i.required) i.error = false
    if (i.type === 'checkbox') {
      i.checked = false
      i.component = shallowRef(defineAsyncComponent(() => import('@/components/ui-kit/Checkbox.vue')))
    }
    if (i.type === 'input') {
      i.component = shallowRef(defineAsyncComponent(() => import('@/components/ui-kit/Input.vue')))
    }
    return i
  })
  return reactive(form)
}
