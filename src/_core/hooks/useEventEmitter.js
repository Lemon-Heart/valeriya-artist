export default function useEventEmitter (debugMode = false) {
  const _events = []

  const $on = (name, listener) => {
    if (!_events[name]) {
      _events[name] = []
    }
    _events[name].push(listener)

    if (debugMode) {
      console.warn('Handler attached:')
      console.log('Name:', name)
      console.log('Listener:', listener)
      console.log('Listeners list:', _events[name])
    }
  }

  const $off = (name, listenerToRemove) => {
    if (!_events[name]) {
      throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`)
    }

    const filterListeners = (listener) => listener !== listenerToRemove

    _events[name] = _events[name].filter(filterListeners)

    if (!_events[name].length) delete _events[name]

    if (debugMode) {
      console.warn('Handler detached:')
      console.log('Name:', name)
      console.log('Listener:', listenerToRemove)
      console.log('Listeners list:', _events[name])
    }
  }

  const $emit = (name, data) => {
    if (debugMode) {
      console.warn('Event emitted:')
      console.log('Name:', name)
      console.log('Data:', data)
    }
    const fireCallbacks = (callback) => {
      callback(data)
    }
    if (_events[name]) _events[name].forEach(fireCallbacks)
  }

  return {
    $on,
    $off,
    $emit
  }
}
