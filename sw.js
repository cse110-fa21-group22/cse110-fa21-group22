const CACHE_NAME = 'recipe-storage';

// self.addEventListener('activate', (event) => {
// 	event.waitUntil(clients.claim());
// });

// Store fetches to reduce api calls
window.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Found in cache
      if (response) {
        return response;
      }
      return fetch(event.request).then((res) => {
        if (!res || res.status !== 200 || res.type !== 'basic') {
          // Error check
          return res;
        }
        const responseToCache = res.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return res;
      });
    })
  );
});
