const CACHE_NAME = 'mbila-v1';
const RUNTIME_CACHE = 'mbila-runtime-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/db.js',
  '/maps.js',
  '/incidents.js',
  '/app.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css',
];

// Installation
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache opened');
      return cache.addAll(urlsToCache).catch(err => {
        console.log('Some resources failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activation
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch strategy: Network first, fall back to cache
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests for now
  if (url.origin !== location.origin) {
    return;
  }

  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(RUNTIME_CACHE).then(cache => {
          cache.put(request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        return caches.match(request).then(response => {
          return response || caches.match('/offline.html');
        });
      })
  );
});

// Background sync for incident reports
self.addEventListener('sync', event => {
  if (event.tag === 'sync-incidents') {
    event.waitUntil(
      (async () => {
        try {
          const db = await openDB();
          const pendingIncidents = await db.getAll('pendingIncidents');

          for (const incident of pendingIncidents) {
            try {
              const response = await fetch('/api/incidents', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(incident),
              });

              if (response.ok) {
                await db.delete('pendingIncidents', incident.id);
              }
            } catch (err) {
              console.error('Failed to sync incident:', err);
            }
          }
        } catch (err) {
          console.error('Sync failed:', err);
        }
      })()
    );
  }
});

// Push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Nouvel incident signalé',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    tag: 'incident-notification',
    requireInteraction: false,
    actions: [
      { action: 'open', title: 'Voir' },
      { action: 'close', title: 'Fermer' }
    ],
    data: {
      lineId: data.lineId,
      incidentId: data.incidentId,
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || '🚇 MBila', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

// Helper function to open IndexedDB
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('mbilaDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}
