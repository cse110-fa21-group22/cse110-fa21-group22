const CACHE_NAME = 'recipe-storage';

self.addEventListener('activate', (event) => {
  // eslint-disable-next-line no-undef
  event.waitUntil(clients.claim());
});

// Store fetches to reduce api calls
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Found in cache
      if (response) {
        return response;
      }
      // eslint-disable-next-line no-shadow
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          // Error check
          return response;
        }
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
