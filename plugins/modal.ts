export default defineNuxtPlugin(() => {
  return {
    provide: {
      modal: { 
        visible: ref(false),
        componentName: ref(null),
        show(componentName) { 
          this.visible.value = true
          this.componentName.value = componentName
        },
        hide() { 
          this.visible.value = false
        }
      }
    }
  }
})