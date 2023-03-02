module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/variables.sass"'
      }
    }
  },
  pwa: {
    name: 'Valeriya-Artist',
    themeColor: '#000000'
  }
}
