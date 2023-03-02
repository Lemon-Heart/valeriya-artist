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
    themeColor: '#000000',
    icons: [
      { src: './img/icons/android-chrome-192x192.PNG', sizes: '192x192', type: 'image/png' },
      { src: './img/icons/android-chrome-512x512.PNG', sizes: '512x512', type: 'image/png' },
      { src: './img/icons/android-chrome-maskable-192x192.PNG', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: './img/icons/android-chrome-maskable-512x512.PNG', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  }
}
