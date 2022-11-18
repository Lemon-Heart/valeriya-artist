import { ref, computed, markRaw } from 'vue'
export default function ModalQueueController (debugMode = false) {
  // Очередь модалок
  const queue = ref([])

  // Активная модалка (первый элемент из очереди, либо null)
  const activeModal = computed(() => {
    if (debugMode) console.log('Modal queue: Active', queue.value?.length ? queue.value[0] : null)
    return queue.value.length ? queue.value[0] : null
  })

  // Добавление модалки в очередь, если модалки с переданным ключом еще нет в очереди
  const addModal = (options) => {
    const data = new ModalData(options)
    if (!queue.value.find(o => o.key === data.key)) {
      queue.value.push(data)
      document.querySelector('body').classList.add('fixed')
      if (debugMode) console.log('Modal queue: Push', data)
    }
  }

  // Удалание модалки из очереди по ключу
  const removeModal = key => {
    const index = queue.value.findIndex(o => o.key === key)
    if (index > -1) {
      queue.value.splice(index, 1)
      document.querySelector('body').classList.remove('fixed')
      if (debugMode) console.log('Modal queue: Remove', key)
    }
  }

  // Удалание всех модалок из очереди
  const removeAllModals = () => {
    queue.value = []
    document.querySelector('body').classList.remove('fixed')
  }

  // Возвращаемый объект
  return {
    activeModal,
    push: addModal,
    remove: removeModal,
    removeAll: removeAllModals
  }
}

class ModalData {
  constructor (data) {
    if (!data) throw new Error('Modal options is empty!')
    if (!data.key || typeof data.key !== 'string') throw new Error('Modal options has no valid key property!')
    if (!data.component || typeof data.component.render !== 'function') throw new Error('Modal options has no valid component property!')

    this.key = data.key
    this.component = markRaw(data.component)

    this.props = data.props ?? {} // innner conmponent's props
    this.on = data.on ?? {} // innner conmponent's event handlers

    this.params = {}
    this.params.isClosable = data.params?.isClosable ?? true
    this.params.isResponsive = data.params?.isResponsive ?? false
    this.params.isFullscreen = data.params?.isFullscreen ?? false
  }
}
