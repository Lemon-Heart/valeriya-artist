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
    themeColor: '#000000',
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/valeriya-artist\.art\/api\/.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 5
            },
            networkTimeoutSeconds: 3
          }
        },
        {
          urlPattern: /\.(png|jpg|jpeg|svg|gif|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 7
            }
          }
        },
        {
          urlPattern: /\.(js|css|woff|woff2)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        }
      ]
    },
    manifestOptions: {
      icons: [
        { src: './img/icons/icon-48x48.png', sizes: '48x48', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-72x72.png', sizes: '72x72', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-96x96.png', sizes: '96x96', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-128x128.png', sizes: '128x128', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-144x144.png', sizes: '144x144', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-152x152.png', sizes: '152x152', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-384x384.png', sizes: '384x384', type: 'image/png', purpose: 'maskable any' },
        { src: './img/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' }
      ]
    }
  }
}
