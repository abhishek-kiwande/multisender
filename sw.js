importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01a6b68ebd3e53b12e20.js",
    "revision": "3471269fff86000ffd495adfe14d6005"
  },
  {
    "url": "/_nuxt/123ebe470d8b29fdf9a0.js",
    "revision": "9d4ea47aa0ed8411f25a8158848a68a9"
  },
  {
    "url": "/_nuxt/17581b075d28614d3f80.js",
    "revision": "646803182f74408de8d37f07e8b6a444"
  },
  {
    "url": "/_nuxt/18163f075ab58abf5ab9.js",
    "revision": "13789bdd7b2515be39a7cf5b2f0a66d4"
  },
  {
    "url": "/_nuxt/1f7a535e6ece4eda0dac.js",
    "revision": "e198a02a39eae09ce9361478f77de40d"
  },
  {
    "url": "/_nuxt/4e24077a69a774caaf2a.js",
    "revision": "a9f8889954028ebe82efae3a096b6fd3"
  },
  {
    "url": "/_nuxt/68fd3167420663043d2d.js",
    "revision": "f5b17cca6fb80b8c74f366adb84ef220"
  },
  {
    "url": "/_nuxt/82911b35df4a72809258.js",
    "revision": "47a0d6d7adb46c60c0a3e8cdb07cf8f3"
  },
  {
    "url": "/_nuxt/831d7fdf89842feba6ba.js",
    "revision": "fbda2d41b7db379b31ac2977197a3c71"
  },
  {
    "url": "/_nuxt/8dbd1003a6067ad13892.js",
    "revision": "aa060bf0107ced0de1b6451c9de0374b"
  },
  {
    "url": "/_nuxt/b7f1515cd116bbf53364.js",
    "revision": "7530faf88d11e1aaff08f1ed04e7b1d9"
  },
  {
    "url": "/_nuxt/c7598213f665a846766a.js",
    "revision": "b316554fb01888212521f44d82481d94"
  },
  {
    "url": "/_nuxt/d8f974325196d9e5d8f6.js",
    "revision": "92d4970b3d903c57751a282b8eb7a7e2"
  },
  {
    "url": "/_nuxt/dffc9e6debb34d71513d.js",
    "revision": "68ccadb101bf65ec109c3106d1238caa"
  },
  {
    "url": "/_nuxt/f8f4a8bec617d0270d44.js",
    "revision": "a4b51b3649d410befc80bd60338c12f0"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
