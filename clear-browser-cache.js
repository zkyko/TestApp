// Browser console script to clear all caches and service workers
// Copy and paste this into your browser's developer console

console.log('🧹 Starting comprehensive cache clearing...');

// 1. Unregister all service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    registrations.forEach(function(registration) {
      console.log('Unregistering service worker:', registration);
      registration.unregister();
    });
    console.log('✅ All service workers unregistered');
  });
}

// 2. Clear all caches
if ('caches' in window) {
  caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
      console.log('Deleting cache:', cacheName);
      caches.delete(cacheName);
    });
    console.log('✅ All caches cleared');
  });
}

// 3. Clear localStorage and sessionStorage
localStorage.clear();
sessionStorage.clear();
console.log('✅ Storage cleared');

// 4. Clear IndexedDB
if ('indexedDB' in window) {
  indexedDB.databases().then(databases => {
    databases.forEach(db => {
      console.log('Deleting IndexedDB:', db.name);
      indexedDB.deleteDatabase(db.name);
    });
  });
}

console.log('✅ Cache clearing completed!');
console.log('🔄 Please hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)');

// Automatically reload after 2 seconds
setTimeout(() => {
  window.location.reload(true);
}, 2000);