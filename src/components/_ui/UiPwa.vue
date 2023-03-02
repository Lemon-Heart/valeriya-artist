<!-- PWAPrompt.vue -->
<template>
  <div class="pwa">
    Add app to home screen?

    <button @click="install">
      Install!
    </button>

    <button @click="dismissPrompt">
      No, thanks
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deferredPrompt: null
    }
  },
  created () {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e
    })
  },
  methods: {
    async install () {
      this.deferredPrompt.prompt()
    }
  }
}
</script>

<style lang="sass">
.pwa
  background: white
  padding: 10px
  z-index: 1000
  display: flex
  max-width: 400px
</style>
