const CACHE_NAME = "version-3"

const assets = [
  'index.html',
  'weathericons/01d.svg',
  'weathericons/01n.svg',
  'weathericons/02d.svg',
  'weathericons/02n.svg',
  'weathericons/03d.svg',
  'weathericons/03n.svg',
  'weathericons/04d.svg',
  'weathericons/04n.svg',
  'weathericons/09d.svg',
  'weathericons/09n.svg',
  'weathericons/10d.svg',
  'weathericons/10n.svg',
  'weathericons/11d.svg',
  'weathericons/11n.svg',
  'weathericons/13d.svg',
  'weathericons/13n.svg',
  'weathericons/50d.svg',
  'weathericons/50n.svg',
  'weathericons/unknown.svg',
]

const self = this
// install SW
self.addEventListener('install',  (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened Cache')
      return cache.addAll(assets)
    })
  )

})

//Listen for requests
self.addEventListener('fetch',  (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cacheRes) => {
        return cacheRes || fetch(event.request)
      })
  )
})


// Activate the SW
self.addEventListener("activate", event => {
  event.waitUntil(
      caches.keys().then(keys => {
          return Promise.all(keys
              .filter(key => key !== CACHE_NAME)
              .map(key => caches.delete(key))
              )
      })
  )
 
})