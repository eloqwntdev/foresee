// Foresee service worker: when a page can't load because the visitor is offline,
// show offline.html instead. The 404 game is cached too, so it's playable offline.
const CACHE = 'foresee-offline-v1';
const PRECACHE = ['offline.html', '404.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.mode !== 'navigate') return;   // only page loads
  e.respondWith((async () => {
    try {
      return await fetch(req);
    } catch (_) {
      const cache = await caches.open(CACHE);
      if (new URL(req.url).pathname.endsWith('404.html')) return (await cache.match('404.html')) || Response.error();
      return (await cache.match('offline.html')) || Response.error();
    }
  })());
});
