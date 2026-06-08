// Initialize app
let app = {
  currentTab: 'feed',
  currentLocation: null,
  isOnline: navigator.onLine,
  currentFilter: 'all',
};

// Initialize everything
async function init() {
  console.log('MBila initializing...');

  // Initialize DB
  try {
    await mbilaDB.init();
    await mbilaDB.saveLines(LINES);
    await mbilaDB.saveStations(STATIONS);
    console.log('DB initialized');
  } catch (err) {
    console.error('DB init error:', err);
  }


  // Initialize incidents
  try {
    await incidentManager.loadIncidents();
    incidentManager.subscribe(updateIncidentsList);
    console.log('Incidents loaded');
  } catch (err) {
    console.error('Incidents init error:', err);
  }

  // Register service worker
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });
      console.log('Service Worker registered:', registration);
    } catch (err) {
      console.error('Service Worker registration failed:', err);
    }
  }

  setupEventListeners();
  populateLineSelect();
  populateIncidentTypes();
  updateOnlineStatus();

  // Populate line filter
  const filterSelect = document.getElementById('lineFilter');
  if (filterSelect) {
    LINES.forEach(line => {
      const option = document.createElement('option');
      option.value = line.id;
      option.textContent = `${line.name} (${line.type})`;
      filterSelect.appendChild(option);
    });

    filterSelect.addEventListener('change', (e) => {
      app.currentFilter = e.target.value;
      updateIncidentsList(incidentManager.incidents);
    });
  }

  console.log('MBila ready!');
}

function setupEventListeners() {
  // Report button
  document.getElementById('reportBtn').addEventListener('click', openReportModal);

  // Line selection change to populate stations
  document.getElementById('incidentLine').addEventListener('change', (e) => {
    const lineId = e.target.value;
    const line = LINES.find(l => l.id === lineId);
    const stationSelect = document.getElementById('incidentStation');
    const directionSelect = document.getElementById('incidentDirection');
    
    if (line) {
      stationSelect.innerHTML = '<option value="">Choisir une station...</option>';
      const lineStations = STATIONS.filter(s => s.lines.includes(line.name));
      lineStations.forEach(station => {
        const option = document.createElement('option');
        option.value = station.id;
        option.textContent = station.name;
        stationSelect.appendChild(option);
      });
      stationSelect.disabled = false;

      // Populate directions (first and last station of the line)
      if (directionSelect) {
        directionSelect.innerHTML = '<option value="">Choisir une direction...</option>';
        if (lineStations.length >= 2) {
          const dir1 = lineStations[0].name;
          const dir2 = lineStations[lineStations.length - 1].name;
          directionSelect.innerHTML += `<option value="${dir1}">${dir1}</option>`;
          directionSelect.innerHTML += `<option value="${dir2}">${dir2}</option>`;
          directionSelect.disabled = false;
        }
      }
    } else {
      stationSelect.innerHTML = "<option value=''>Sélectionnez d'abord une ligne...</option>";
      stationSelect.disabled = true;
      if (directionSelect) {
        directionSelect.innerHTML = "<option value=''>En attente de la ligne...</option>";
        directionSelect.disabled = true;
      }
    }
  });

  // Online/offline
  window.addEventListener('online', () => {
    app.isOnline = true;
    syncPendingIncidents();
  });

  window.addEventListener('offline', () => {
    app.isOnline = false;
  });

  // Textarea character counter
  document.getElementById('incidentDesc')?.addEventListener('input', (e) => {
    const charCountEl = document.getElementById('charCount');
    if (charCountEl) charCountEl.textContent = e.target.value.length;
  });

  // Photo input
  document.getElementById('incidentPhoto')?.addEventListener('change', handlePhotoSelect);

  // Search suggestions
  document.getElementById('searchStart')?.addEventListener('input', (e) => {
    showSuggestions(e.target.value, 'startSuggestions', 'searchStart');
  });

  document.getElementById('searchEnd')?.addEventListener('input', (e) => {
    showSuggestions(e.target.value, 'endSuggestions', 'searchEnd');
  });
}

// Removed updateOnlineStatus function

function populateLineSelect() {
  const select = document.getElementById('incidentLine');
  const filterSelect = document.getElementById('lineFilter');
  
  LINES.forEach(line => {
    // Populate report form
    const option = document.createElement('option');
    option.value = line.id;
    option.textContent = `${line.name} (${line.type})`;
    select.appendChild(option);
    
    // Populate filter if it exists
    if (filterSelect) {
      const filterOption = document.createElement('option');
      filterOption.value = line.id;
      filterOption.textContent = `${line.name} (${line.type})`;
      filterSelect.appendChild(filterOption);
    }
  });
}

function populateIncidentTypes() {
  const container = document.getElementById('incidentTypes');
  INCIDENT_TYPES.forEach(type => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'p-3 border border-gray-200 bg-white rounded-xl text-center hover:border-blue-500 hover:bg-blue-50 transition flex flex-col items-center justify-center gap-2';
    btn.innerHTML = `<div class="text-gray-700">${type.svg}</div><div class="text-xs font-medium text-gray-700">${type.label}</div>`;
    btn.onclick = () => {
      document.querySelectorAll('#incidentTypes button').forEach(b => {
        b.style.borderColor = '#e5e7eb'; // border-gray-200
        b.style.backgroundColor = '#ffffff';
        b.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-1');
        delete b.dataset.selected;
      });
      btn.style.borderColor = '#3b82f6';
      btn.style.backgroundColor = '#eff6ff'; // bg-blue-50
      btn.classList.add('ring-2', 'ring-blue-500', 'ring-offset-1');
      btn.dataset.selected = type.id;
    };
    container.appendChild(btn);
  });
}

function handlePhotoSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = `
      <div style="position: relative; width: 100%; height: 200px; margin-bottom: 12px;">
        <img src="${event.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        <button type="button" onclick="clearPhoto()" style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 18px;">✕</button>
      </div>
    `;
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  document.getElementById('incidentPhoto').value = '';
  document.getElementById('photoPreview').innerHTML = '';
}

async function submitReport(e) {
  e.preventDefault();

  const lineSelect = document.getElementById('incidentLine');
  const lineId = lineSelect.value;
  const line = LINES.find(l => l.id === lineId);

  if (!line) {
    alert('Veuillez sélectionner une ligne');
    return;
  }

  const stationSelect = document.getElementById('incidentStation');
  const stationId = parseInt(stationSelect.value);
  const station = STATIONS.find(s => s.id === stationId);

  if (!station) {
    alert('Veuillez sélectionner la station où vous vous trouvez');
    return;
  }

  const description = document.getElementById('incidentDesc').value;
  const severity = document.getElementById('incidentSeverity').value;
  const typeBtn = document.querySelector('#incidentTypes button[data-selected]');
  const type = typeBtn?.dataset.selected || 'other';

  if (!description.trim()) {
    alert('Veuillez décrire le problème');
    return;
  }

  const statusDiv = document.getElementById('reportStatus');
  statusDiv.innerHTML = '<div class="text-center"><div class="loader" style="margin: 0 auto;"></div> Envoi...</div>';

  try {
    // Override location with selected station coordinates
    let location = { lat: station.lat, lng: station.lng };

    // Extract direction
    const directionSelect = document.getElementById('incidentDirection');
    const direction = directionSelect ? directionSelect.value : '';

    // Handle photo
    let photoData = null;
    const photoFile = document.getElementById('incidentPhoto').files[0];
    if (photoFile) {
      const reader = new FileReader();
      photoData = await new Promise((resolve) => {
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(photoFile);
      });
    }

    // Deduplication logic: Check if a similar incident exists within the last 2 hours
    const TWO_HOURS = 2 * 60 * 60 * 1000;
    const now = Date.now();
    const existingIncident = incidentManager.incidents.find(i => 
      i.lineId === line.id && 
      i.stationName === station.name && 
      i.description.startsWith(`[${type}]`) &&
      (now - i.timestamp) < TWO_HOURS
    );

    if (existingIncident) {
      await incidentManager.upvoteIncident(existingIncident.id);
      document.getElementById('reportForm').reset();
      clearPhoto();
      document.querySelectorAll('#incidentTypes button').forEach(b => {
          b.style.borderColor = '#e5e7eb';
          b.style.backgroundColor = '#ffffff';
          b.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-1');
          delete b.dataset.selected;
      });
      statusDiv.innerHTML = '';
      closeReportModal();
      return;
    }

    // Create incident
    const incident = await incidentManager.reportIncident({
      line: line.name,
      lineId: line.id,
      description: `[${type}] ${description}`,
      severity,
      stationName: station.name,
      direction: direction,
      photo: photoData,
    });

    // Reset form and close modal immediately
    document.getElementById('reportForm').reset();
    const charCountEl = document.getElementById('charCount');
    if (charCountEl) charCountEl.textContent = '0';
    const photoPreviewEl = document.getElementById('photoPreview');
    if (photoPreviewEl) photoPreviewEl.innerHTML = '';
    statusDiv.innerHTML = '';
    closeReportModal();
  } catch (err) {
    console.error('Report error:', err);
    statusDiv.innerHTML = `
      <div style="background: #fee2e2; color: #991b1b; padding: 12px; border-radius: 8px;">
        ✗ Erreur: ${err.message}
      </div>
    `;
  }
}



function showSuggestions(query, elementId, inputId) {
  if (!query) {
    document.getElementById(elementId).style.display = 'none';
    return;
  }

  const matches = STATIONS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  if (matches.length === 0) {
    document.getElementById(elementId).style.display = 'none';
    return;
  }

  const container = document.getElementById(elementId);
  container.innerHTML = matches.map(station => `
    <div style="padding: 12px; border-bottom: 1px solid #e5e7eb; cursor: pointer;"
         onclick="document.getElementById('${inputId}').value = '${station.name}'; document.getElementById('${elementId}').style.display = 'none';">
      📍 ${station.name}
    </div>
  `).join('');

  container.style.display = 'block';
}

function updateIncidentsList(incidents) {
  const feed = document.getElementById('incidentsFeed');
  if (!feed) return;

  let filtered = incidents;
  if (app.currentFilter !== 'all') {
    filtered = incidents.filter(i => i.lineId === app.currentFilter);
  }

  if (filtered.length === 0) {
    feed.innerHTML = `
      <div class="text-center text-gray-500 py-10 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div class="mb-3 flex justify-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="font-semibold text-lg text-gray-900">Aucune perturbation</div>
        <div class="text-sm">Tout roule sur le réseau !</div>
      </div>
    `;
    return;
  }

  feed.innerHTML = filtered.map((incident, index) => {
    const line = LINES.find(l => l.id === incident.lineId);
    const color = line?.color || '#666';
    const textColor = line?.textColor || '#FFF';
    const severityData = SEVERITY_LEVELS[incident.severity] || SEVERITY_LEVELS.medium;
    const isTram = line?.type === 'Tram';
    const isRER = line?.type === 'RER';
    const badgeShape = isTram ? 'rounded-md' : (isRER ? 'rounded-[28%]' : 'rounded-full');

    return `
      <div class="bg-white rounded-[18px] shadow-sm border border-gray-200 overflow-hidden mb-card mb-rise" style="animation-delay: ${index * 55}ms; position: relative;">
        <!-- Left severity border -->
        <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background-color: ${severityData.color};"></div>
        
        <div class="p-4 pl-5 flex gap-3">
          <!-- Line Badge -->
          <div class="w-10 h-10 ${badgeShape} flex items-center justify-center font-bold text-sm shrink-0 shadow-sm" style="background-color: ${color}; color: ${textColor};">
            ${incident.line.substring(0, 3)}
          </div>
          
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-2 mb-1.5">
              <span class="font-semibold text-gray-900 text-[15px] truncate">${incident.description}</span>
              <span class="text-[12px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style="color: ${severityData.color}; background-color: ${severityData.color}15;">
                ${severityData.label}
              </span>
            </div>
            
            <div class="text-[13px] text-gray-500 mb-2.5 font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span class="truncate">${incident.stationName || 'Station'} ${incident.direction ? `<span class="text-gray-400 font-normal mx-1">→</span><span class="text-gray-500 font-semibold truncate">Dir. ${incident.direction}</span>` : ''}</span>
            </div>
            
            ${incident.photo ? `<div class="mb-3 rounded-xl overflow-hidden border border-gray-100 bg-gray-50"><img src="${incident.photo}" class="w-full h-32 object-cover" alt="Incident"></div>` : ''}
            
            <div class="flex justify-between items-center mt-1">
              <span class="text-[12.5px] text-gray-400 font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Il y a ${timeAgo(incident.timestamp).replace('il y a ', '')} <span class="mx-0.5 opacity-50">•</span> <span class="font-bold text-[#64748B]">Réf: ${incident.refCode || 'S1000'}</span>
              </span>
              
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mr-1">Encore là ?</span>
                <button onclick="incidentManager.upvoteIncident(${incident.id})" class="mb-press flex items-center gap-1 bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-[10px] transition-colors">
                  <span class="font-semibold text-[13px]">Oui</span>
                  <span class="text-[#64748B] text-[12px] ml-0.5">${incident.reports}</span>
                </button>
                <button onclick="incidentManager.downvoteIncident(${incident.id})" class="mb-press flex items-center justify-center w-8 h-8 bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#0F172A] rounded-[10px] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}



function openReportModal() {
  document.getElementById('reportModal').classList.add('active');
}

function closeReportModal() {
  document.getElementById('reportModal').classList.remove('active');
}

// Start app
document.addEventListener('DOMContentLoaded', init);

// Periodic sync
setInterval(async () => {
  if (app.isOnline) {
    await incidentManager.loadIncidents();
  }
}, 10000); // Every 10 seconds

function timeAgo(timestamp) {
  const seconds = Math.floor((new Date() - timestamp) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) return `il y a ${Math.floor(interval)} an(s)`;
  interval = seconds / 2592000;
  if (interval > 1) return `il y a ${Math.floor(interval)} mois`;
  interval = seconds / 86400;
  if (interval > 1) return `il y a ${Math.floor(interval)} jour(s)`;
  interval = seconds / 3600;
  if (interval > 1) return `il y a ${Math.floor(interval)} heure(s)`;
  interval = seconds / 60;
  if (interval >= 1) return `il y a ${Math.floor(interval)} minute(s)`;
  return `à l'instant`;
}
