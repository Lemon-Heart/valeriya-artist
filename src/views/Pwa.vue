<template lang="pug">
.cont
  ui-button(@click="arigamiStartWidget('c6eedd21-3077-4ecb-8533-2bdb0d659bb3')") 3D просмотр
</template>

<script>
export default {
  setup () {
    let arigamiController

    const arigamiStartWidget = async function (productCardToken) {
      if (!arigamiController) {
        arigamiController = window.arigami.init('modal', {})
      }
      arigamiController.updateOptions({ productCardToken })
      arigamiController.start()
    }

    return { arigamiStartWidget }
  }
}
</script>

<style lang="sass" scoped></style>
