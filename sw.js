// You have to supply a name for your cache, this will
// allow us to remove an old one to avoid hitting disk
// space limits and displaying old resources
var cacheName = 'v1';

// Assesto catche
var assetsToCache = [
  '/css/main.min.css',
  '/js/scripts.js',
  '/images/unicorncode.svg',
  '/images/unicorn-single.svg',
  'https://fonts.gstatic.com/s/alegreyasanssc/v3/AjAmkoP1y0Vaad0UPPR46zqXxEMZsh1tOw6O6jsjRmU.woff2'
];

self.addEventListener('install', function(event) {
  // waitUntil() ensures that the Service Worker will not
  // install until the code inside has successfully occurred
  event.waitUntil(
    // Create cache with the name supplied above and
    // return a promise for it
    caches.open(cacheName).then(function(cache) {
      // Add assets supplied above
      cache.addAll(assetsToCache);
      // Get your blog's pages and add them to cache
      cachePages(cache);
    })
  );
});

function cachePages(cache) {
 // Get pages that people voluntarily cache
}

self.addEventListener('fetch', function(event) {
  // Ignore non-get request like when accessing the admin panel
  if (event.request.method !== 'GET') { return; }
  // Don't try to handle non-secure assets because fetch will fail
  if (/http:/.test(event.request.url)) { return; }
  event.respondWith(
    // Open the cache created when install
    caches.open(CACHE_NAME).then(function(cache) {
      // Go to the network to ask for that resource
      return fetch(event.request).then(function(networkResponse) {
        // Add a copy of the response to the cache (updating the old version)
        cache.put(event.request, networkResponse.clone());
        // Respond with it
        return networkResponse;
      }).catch(function() {
        // If there is no internet connection, try to match the request
        // to some of our cached resources
        return cache.match(event.request);
      })
    })
  );
});