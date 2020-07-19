const staticCacheName = 'site-static'
const assets = [
    '/',
    'index.html',
    'main.js',
    'app.js',
    'style.css',
    'svgicon/01d.svg',
    'svgicon/01n.svg',
    'svgicon/02d.svg',
    'svgicon/02n.svg',
    'svgicon/03d.svg',
    'svgicon/03n.svg',
    'svgicon/04d.svg',
    'svgicon/04n.svg',
    'svgicon/09d.svg',
    'svgicon/09n.svg',
    'svgicon/10d.svg',
    'svgicon/10n.svg',
    'svgicon/11d.svg',
    'svgicon/11n.svg',
    'svgicon/13d.svg',
    'svgicon/13n.svg',
    'svgicon/50d.svg',
    'svgicon/50n.svg',
    'svgicon/unknown.svg'
]


//Install service worker
self.addEventListener("install", event => {
    
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    )
    
})

// activate event
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
                )
        })
    )
   
})

//fetch event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request)
        })
    )
})