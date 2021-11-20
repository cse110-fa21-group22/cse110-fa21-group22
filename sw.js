const CACHE_NAME = 'recipe-storage';

self.addEventListener('activate', function (event) {
	event.waitUntil(clients.claim());
});

// Store fetches to reduce api calls
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Found in cache
			if (response) {
				return response;
			}
			return fetch(event.request).then((response) => {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					// Error check
					return response;
				}
				let responseToCache = response.clone();

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});
