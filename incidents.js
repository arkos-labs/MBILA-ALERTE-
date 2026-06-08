// Incident management
class IncidentManager {
  constructor() {
    this.incidents = [];
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.incidents));
  }

  async loadIncidents() {
    try {
      this.incidents = await mbilaDB.getRecentIncidents(24);
      this.notifyListeners();
      return this.incidents;
    } catch (err) {
      console.error('Erreur lors du chargement des incidents:', err);
      return [];
    }
  }

  async reportIncident(data) {
    try {
      // Generate sequential reference code
      let nextRefNum = 1001;
      if (this.incidents.length > 0) {
        const refs = this.incidents
          .map(i => i.refCode)
          .filter(r => r && r.startsWith('S'))
          .map(r => parseInt(r.substring(1), 10))
          .filter(n => !isNaN(n));
        if (refs.length > 0) {
          nextRefNum = Math.max(...refs) + 1;
        }
      }

      const incident = {
        id: Date.now(),
        refCode: `S${nextRefNum}`,
        line: data.line,
        lineId: data.lineId,
        description: data.description,
        severity: data.severity || 'high',
        stationName: data.stationName || '',
        direction: data.direction || '',
        photo: data.photo || null,
        reports: 1,
        downvotes: 0,
        timestamp: Date.now(),
        synced: false,
      };

      // Save to local DB
      await mbilaDB.addIncident(incident);

      // Try to sync with server
      if (navigator.onLine) {
        await this.syncIncident(incident);
      } else {
        // Save for later sync
        await mbilaDB.addPendingIncident(incident);
      }

      // Add to local list
      this.incidents.unshift(incident);
      this.notifyListeners();

      return incident;
    } catch (err) {
      console.error('Erreur lors du signalement:', err);
      throw err;
    }
  }

  async syncIncident(incident) {
    try {
      const response = await fetch('/api/incidents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(incident),
      });

      if (response.ok) {
        incident.synced = true;
        return await response.json();
      }
    } catch (err) {
      console.error('Sync échoué:', err);
    }
  }

  async upvoteIncident(id) {
    try {
      const incident = this.incidents.find(i => i.id === id);
      if (incident) {
        incident.reports = (incident.reports || 1) + 1;
        this.notifyListeners();

        if (navigator.onLine) {
          await fetch(`/api/incidents/${id}/upvote`, { method: 'POST' });
        }
      }
    } catch (err) {
      console.error('Erreur upvote:', err);
    }
  }

  async downvoteIncident(id) {
    try {
      const incident = this.incidents.find(i => i.id === id);
      if (incident) {
        incident.downvotes = (incident.downvotes || 0) + 1;
        
        if (incident.downvotes >= 10) {
          await this.deleteIncident(id);
          return;
        }

        this.notifyListeners();

        if (navigator.onLine) {
          await fetch(`/api/incidents/${id}/downvote`, { method: 'POST' });
        }
      }
    } catch (err) {
      console.error('Erreur downvote:', err);
    }
  }

  async deleteIncident(id) {
    try {
      await mbilaDB.deleteIncident(id);
      this.incidents = this.incidents.filter(i => i.id !== id);
      this.notifyListeners();

      if (navigator.onLine) {
        await fetch(`/api/incidents/${id}`, { method: 'DELETE' });
      }
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  }


  getIncidentsByLine(lineId) {
    return this.incidents.filter(i => i.lineId === lineId);
  }

  getIncidentsBySeverity(severity) {
    return this.incidents.filter(i => i.severity === severity);
  }
}

// Global instance
const incidentManager = new IncidentManager();

// Listen for online/offline changes
window.addEventListener('online', () => {
  console.log('App est en ligne - synchronisation...');
  syncPendingIncidents();
});

window.addEventListener('offline', () => {
  console.log('App est hors ligne');
});

async function syncPendingIncidents() {
  try {
    // Get pending incidents from DB
    const tx = mbilaDB.db.transaction(['pendingIncidents'], 'readonly');
    const store = tx.objectStore('pendingIncidents');
    const request = store.getAll();

    request.onsuccess = async () => {
      const pending = request.result;
      for (const incident of pending) {
        try {
          const response = await fetch('/api/incidents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(incident),
          });

          if (response.ok) {
            // Remove from pending
            const txDelete = mbilaDB.db.transaction(['pendingIncidents'], 'readwrite');
            const storeDelete = txDelete.objectStore('pendingIncidents');
            storeDelete.delete(incident.id);
          }
        } catch (err) {
          console.error('Sync échoué pour incident:', err);
        }
      }
    };
  } catch (err) {
    console.error('Erreur sync:', err);
  }
}

// Severity levels
const SEVERITY_LEVELS = {
  low: { label: 'Mineur', color: '#EAB308', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>' },
  medium: { label: 'Modéré', color: '#F97316', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>' },
  high: { label: 'Grave', color: '#EF4444', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' }, // We use custom icons but let's stick to generic alerts
  critical: { label: 'Critique', color: '#991B1B', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
};

// Incident types
const INCIDENT_TYPES = [
  { id: 'delay', label: 'Retard', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { id: 'canceled', label: 'Supprimé', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' },
  { id: 'breakdown', label: 'Panne technique', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' },
  { id: 'passenger', label: 'Incident voyageur', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a8 8 0 0 0-12 0"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>' },
  { id: 'package', label: 'Colis suspect', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>' },
  { id: 'signal', label: 'Panne signalisation', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="16" x="8" y="4" rx="4"/><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="16" r="1.5"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>' },
  { id: 'crowded', label: 'Surcharge', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { id: 'other', label: 'Autre', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>' },
];
