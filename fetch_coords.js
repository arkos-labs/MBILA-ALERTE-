const fs = require('fs');
const https = require('https');

const rawData = fs.readFileSync('raw_stations.txt', 'utf8');

const lines = [];
const stations = new Map();

// Parse lines
const blocks = rawData.split(/\n\s*\n/);
let idCounter = 1;

for (const block of blocks) {
  const match = block.match(/^(LIGNE [\dA-Z]+|RER [A-E])(?: \((.*?)\))?:\n(.*)/i);
  if (match) {
    const lineId = match[1].replace('LIGNE ', '');
    const colorDesc = match[2] || '';
    const stationNames = match[3].split(' - ').map(s => s.trim()).filter(s => s);
    
    // Attempt to map color descriptions to hex
    const colorMap = {
      'Jaune': '#FFC72C',
      'Bleu': '#003CA6',
      'Marron clair': '#9D5B25',
      'Bleu marine': '#CD7F32', // Used hex from original maps.js
      'Orange': '#FF9500',
      'Bleu ciel': '#99C4DC',
      'Rose': '#F3A4BA',
      'Mauve': '#E0A0D4',
      'Bleu violet': '#D4AF37',
      'Vert clair': '#C1121F',
      'Vert foncé': '#00814F',
      'Bleu clair': '#6B63B5',
      'Bleu marine clair': '#6EC4E8',
      'Violet': '#51309C'
    };
    
    const isRER = lineId.startsWith('RER');
    const color = isRER ? '#EF3B39' : (colorMap[colorDesc] || '#FFC72C');
    
    const lineName = isRER ? lineId : `Ligne ${lineId}`;
    
    lines.push({
      id: lineId.replace(' ', '-'),
      name: lineName,
      type: isRER ? 'RER' : 'Métro',
      color: color,
      textColor: '#fff'
    });
    
    for (const name of stationNames) {
      if (!stations.has(name)) {
        stations.set(name, { id: idCounter++, name, lines: new Set([lineName]) });
      } else {
        stations.get(name).lines.add(lineName);
      }
    }
  }
}

const uniqueStations = Array.from(stations.values()).map(s => ({
  ...s,
  lines: Array.from(s.lines)
}));

console.log(`Found ${lines.length} lines and ${uniqueStations.length} unique stations.`);

// Geocode function
function geocode(name) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(`${name} station, Paris, France`);
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
    
    https.get(url, { headers: { 'User-Agent': 'MBilaApp/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const results = JSON.parse(data);
          if (results.length > 0) {
            resolve({ lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon) });
          } else {
            // Fallback: try without "station"
            const fallbackQuery = encodeURIComponent(`${name}, Paris, France`);
            const fallbackUrl = `https://nominatim.openstreetmap.org/search?q=${fallbackQuery}&format=json&limit=1`;
            https.get(fallbackUrl, { headers: { 'User-Agent': 'MBilaApp/1.0' } }, (res2) => {
              let data2 = '';
              res2.on('data', chunk => data2 += chunk);
              res2.on('end', () => {
                const results2 = JSON.parse(data2);
                if (results2.length > 0) {
                  resolve({ lat: parseFloat(results2[0].lat), lng: parseFloat(results2[0].lon) });
                } else {
                  console.log(`Could not geocode: ${name}`);
                  resolve({ lat: 48.8566, lng: 2.3522 }); // Center of Paris
                }
              });
            }).on('error', () => resolve({ lat: 48.8566, lng: 2.3522 }));
          }
        } catch (e) {
          resolve({ lat: 48.8566, lng: 2.3522 });
        }
      });
    }).on('error', () => resolve({ lat: 48.8566, lng: 2.3522 }));
  });
}

async function processAll() {
  const finalStations = [];
  let count = 0;
  for (const s of uniqueStations) {
    count++;
    console.log(`Geocoding ${count}/${uniqueStations.length}: ${s.name}`);
    const coords = await geocode(s.name);
    finalStations.push({
      id: s.id,
      name: s.name,
      lat: coords.lat,
      lng: coords.lng,
      lines: s.lines
    });
    // Add small delay to respect Nominatim limits
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  const output = `
const LINES = ${JSON.stringify(lines, null, 2)};

const STATIONS = ${JSON.stringify(finalStations, null, 2)};
`;

  fs.writeFileSync('stationsData.js', output);
  console.log('Finished writing stationsData.js');
}

processAll();
