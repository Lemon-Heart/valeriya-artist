module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/variables.sass"'
      }
    }
  },
  pwa: {
    name: 'Валерия',
    themeColor: '#000000'
  }
}
