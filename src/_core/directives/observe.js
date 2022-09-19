exports = module.exports = {
  beforeMount (el, binding, vnode) {
    window.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) el.classList.add('observe')
      else el.classList.remove('observe')
    }, { threshold: 0.2 })
    window.observer.observe(el)
  }
}
