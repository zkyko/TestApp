console.log('Clearing all service workers and cache...');

// Unregister all service workers
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  registrations.forEach(function(registration) {
    console.log('Unregistering:', registration);
    registration.unregister();
  });
});

// Clear all caches
caches.keys().then(function(cacheNames) {
  cacheNames.forEach(function(cacheName) {
    console.log('Deleting cache:', cacheName);
    caches.delete(cacheName);
  });
});

console.log('Service workers and caches cleared. Please refresh the page.');