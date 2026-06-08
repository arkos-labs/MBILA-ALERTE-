// IndexedDB Management
class MbilaDB {
  constructor() {
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('mbilaDB', 1);

      request.onerror = () => reject(request.error);

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // Incidents store
        if (!db.objectStoreNames.contains('incidents')) {
          const incidentsStore = db.createObjectStore('incidents', { keyPath: 'id', autoIncrement: true });
          incidentsStore.createIndex('lineId', 'lineId', { unique: false });
          incidentsStore.createIndex('timestamp', 'timestamp', { unique: false });
          incidentsStore.createIndex('status', 'status', { unique: false });
        }

        // Pending incidents (to sync when online)
        if (!db.objectStoreNames.contains('pendingIncidents')) {
          db.createObjectStore('pendingIncidents', { keyPath: 'id', autoIncrement: true });
        }

        // Favorite routes
        if (!db.objectStoreNames.contains('favorites')) {
          const favStore = db.createObjectStore('favorites', { keyPath: 'id', autoIncrement: true });
          favStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // Search history
        if (!db.objectStoreNames.contains('history')) {
          const histStore = db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
          histStore.createIndex('timestamp', 'timestamp', { unique: false });
        }

        // Lines data
        if (!db.objectStoreNames.contains('lines')) {
          db.createObjectStore('lines', { keyPath: 'id' });
        }

        // Stations data
        if (!db.objectStoreNames.contains('stations')) {
          db.createObjectStore('stations', { keyPath: 'id' });
        }
      };
    });
  }

  async addIncident(incident) {
    const tx = this.db.transaction(['incidents'], 'readwrite');
    const store = tx.objectStore('incidents');
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...incident,
        timestamp: Date.now(),
        synced: false,
      });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async addPendingIncident(incident) {
    const tx = this.db.transaction(['pendingIncidents'], 'readwrite');
    const store = tx.objectStore('pendingIncidents');
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...incident,
        timestamp: Date.now(),
      });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async getIncidents(lineId = null) {
    const tx = this.db.transaction(['incidents'], 'readonly');
    const store = tx.objectStore('incidents');

    return new Promise((resolve, reject) => {
      const request = lineId
        ? store.index('lineId').getAll(lineId)
        : store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const results = request.result.sort((a, b) => b.timestamp - a.timestamp);
        resolve(results);
      };
    });
  }

  async getRecentIncidents(hours = 24) {
    const cutoff = Date.now() - (hours * 60 * 60 * 1000);
    const tx = this.db.transaction(['incidents'], 'readonly');
    const store = tx.objectStore('incidents');

    return new Promise((resolve, reject) => {
      const request = store.index('timestamp').getAll(IDBKeyRange.lowerBound(cutoff));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const results = request.result.sort((a, b) => b.timestamp - a.timestamp);
        resolve(results);
      };
    });
  }

  async deleteIncident(id) {
    const tx = this.db.transaction(['incidents'], 'readwrite');
    const store = tx.objectStore('incidents');
    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async addFavorite(route) {
    const tx = this.db.transaction(['favorites'], 'readwrite');
    const store = tx.objectStore('favorites');
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...route,
        timestamp: Date.now(),
      });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async getFavorites() {
    const tx = this.db.transaction(['favorites'], 'readonly');
    const store = tx.objectStore('favorites');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async addToHistory(search) {
    const tx = this.db.transaction(['history'], 'readwrite');
    const store = tx.objectStore('history');
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...search,
        timestamp: Date.now(),
      });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async getHistory(limit = 10) {
    const tx = this.db.transaction(['history'], 'readonly');
    const store = tx.objectStore('history');

    return new Promise((resolve, reject) => {
      const request = store.index('timestamp').openCursor(null, 'prev');
      const results = [];

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor && results.length < limit) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }

  async saveLines(lines) {
    const tx = this.db.transaction(['lines'], 'readwrite');
    const store = tx.objectStore('lines');

    return Promise.all(
      lines.map(line => new Promise((resolve, reject) => {
        const request = store.put(line);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
      }))
    );
  }

  async getLines() {
    const tx = this.db.transaction(['lines'], 'readonly');
    const store = tx.objectStore('lines');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async saveStations(stations) {
    const tx = this.db.transaction(['stations'], 'readwrite');
    const store = tx.objectStore('stations');

    return Promise.all(
      stations.map(station => new Promise((resolve, reject) => {
        const request = store.put(station);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
      }))
    );
  }

  async getStations() {
    const tx = this.db.transaction(['stations'], 'readonly');
    const store = tx.objectStore('stations');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async clearAll() {
    const stores = ['incidents', 'pendingIncidents', 'favorites', 'history', 'lines', 'stations'];
    return Promise.all(
      stores.map(storeName =>
        new Promise((resolve, reject) => {
          const tx = this.db.transaction([storeName], 'readwrite');
          const store = tx.objectStore(storeName);
          const request = store.clear();
          request.onerror = () => reject(request.error);
          request.onsuccess = () => resolve();
        })
      )
    );
  }
}

// Global instance
const mbilaDB = new MbilaDB();
