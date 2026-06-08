import React, { useState, useEffect } from 'react';
import { MapPin, AlertCircle, ChevronRight, X, MessageSquare } from 'lucide-react';

export default function MBila() {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [routes, setRoutes] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [showIncidentForm, setShowIncidentForm] = useState(false);
  const [selectedLine, setSelectedLine] = useState('');
  const [incidentDescription, setIncidentDescription] = useState('');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [mapIncidents, setMapIncidents] = useState([]);

  // Stations de transport français (data de demo)
  const stations = [
    'Gare du Nord (Paris)',
    'Gare de Lyon (Paris)',
    'Châtelet (Paris)',
    'Saint-Lazare (Paris)',
    'Bastille (Paris)',
    'Nation (Paris)',
    'Montmartre (Paris)',
    'République (Paris)',
    'Concorde (Paris)',
    'Invalides (Paris)',
    'Défense (La Défense)',
    'Belleville (Paris)',
    'Pigalle (Paris)',
    'Odéon (Paris)',
    'Censier-Daubenton (Paris)',
  ];

  // Lignes de transport
  const transportLines = [
    { id: '1', name: 'Ligne 1', type: 'Métro', color: '#FFC72C' },
    { id: '2', name: 'Ligne 2', type: 'Métro', color: '#003CA6' },
    { id: '4', name: 'Ligne 4', type: 'Métro', color: '#CD7F32' },
    { id: 'RER-A', name: 'RER A', type: 'RER', color: '#EF3B39' },
    { id: 'RER-B', name: 'RER B', type: 'RER', color: '#4E9AD6' },
    { id: 'BUS-38', name: 'Bus 38', type: 'Bus', color: '#006837' },
    { id: 'BUS-69', name: 'Bus 69', type: 'Bus', color: '#006837' },
    { id: 'TRAM-T1', name: 'Tram T1', type: 'Tramway', color: '#FF7F00' },
  ];

  const departureMatches = stations.filter(s =>
    s.toLowerCase().includes(departure.toLowerCase())
  ).slice(0, 5);

  const arrivalMatches = stations.filter(s =>
    s.toLowerCase().includes(arrival.toLowerCase())
  ).slice(0, 5);

  // Simulation de recherche d'itinéraires
  const handleSearch = () => {
    if (!departure || !arrival) return;

    const mockRoutes = [
      {
        id: 1,
        from: departure,
        to: arrival,
        duration: '28 min',
        steps: [
          { line: 'Ligne 4', type: 'Métro', from: departure, to: 'Châtelet (Paris)', duration: '12 min' },
          { line: 'Ligne 1', type: 'Métro', from: 'Châtelet (Paris)', to: arrival, duration: '16 min' },
        ],
        cost: '2,15€',
        incidents: 0,
      },
      {
        id: 2,
        from: departure,
        to: arrival,
        duration: '35 min',
        steps: [
          { line: 'RER A', type: 'RER', from: departure, to: 'Nation (Paris)', duration: '18 min' },
          { line: 'Bus 38', type: 'Bus', from: 'Nation (Paris)', to: arrival, duration: '17 min' },
        ],
        cost: '2,15€',
        incidents: 1,
      },
      {
        id: 3,
        from: departure,
        to: arrival,
        duration: '42 min',
        steps: [
          { line: 'Bus 69', type: 'Bus', from: departure, to: 'Bastille (Paris)', duration: '22 min' },
          { line: 'Ligne 2', type: 'Métro', from: 'Bastille (Paris)', to: arrival, duration: '20 min' },
        ],
        cost: '2,15€',
        incidents: 0,
      },
    ];

    setRoutes(mockRoutes);
    setSelectedRoute(null);
  };

  const handleAddIncident = () => {
    if (!selectedLine || !incidentDescription) return;

    const newIncident = {
      id: incidents.length + 1,
      line: selectedLine,
      description: incidentDescription,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      severity: 'high',
      reports: Math.floor(Math.random() * 50) + 1,
    };

    setIncidents([newIncident, ...incidents]);
    setMapIncidents([...mapIncidents, newIncident]);
    setShowIncidentForm(false);
    setSelectedLine('');
    setIncidentDescription('');
  };

  const getLineColor = (lineName) => {
    const line = transportLines.find(l => l.name === lineName);
    return line ? line.color : '#666';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl font-bold text-indigo-600">🚇 MBila</div>
            <span className="text-gray-600 text-sm">City Transport Navigator</span>
          </div>
          <p className="text-gray-500 text-xs">Trouvez votre itinéraire • Signalez les problèmes • En temps réel</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panneau de recherche */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Rechercher un itinéraire</h2>

              {/* Départ */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Départ</label>
                <input
                  type="text"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  placeholder="Gare de..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                />
                {departure && departureMatches.length > 0 && (
                  <div className="mt-2 bg-gray-50 rounded border border-gray-200">
                    {departureMatches.map((station) => (
                      <div
                        key={station}
                        onClick={() => setDeparture(station)}
                        className="px-3 py-2 hover:bg-indigo-50 cursor-pointer text-sm text-gray-700"
                      >
                        <MapPin className="inline w-4 h-4 mr-2 text-indigo-500" />
                        {station}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrivée */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Arrivée</label>
                <input
                  type="text"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  placeholder="Destination..."
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                />
                {arrival && arrivalMatches.length > 0 && (
                  <div className="mt-2 bg-gray-50 rounded border border-gray-200">
                    {arrivalMatches.map((station) => (
                      <div
                        key={station}
                        onClick={() => setArrival(station)}
                        className="px-3 py-2 hover:bg-indigo-50 cursor-pointer text-sm text-gray-700"
                      >
                        <MapPin className="inline w-4 h-4 mr-2 text-indigo-500" />
                        {station}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleSearch}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
              >
                Rechercher
              </button>

              {/* Bouton poulet 🐔 */}
              <button
                onClick={() => setShowIncidentForm(true)}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 text-xl"
              >
                🐔 Signaler un problème
              </button>

              {/* Statistiques */}
              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between mb-2">
                    <span>Incidents actifs:</span>
                    <span className="font-bold text-red-600">{incidents.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lignes affectées:</span>
                    <span className="font-bold text-orange-600">
                      {new Set(incidents.map(i => i.line)).size}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Résultats et carte */}
          <div className="lg:col-span-2 space-y-6">
            {/* Itinéraires */}
            {routes.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Itinéraires proposés ({routes.length})
                </h3>
                <div className="space-y-3">
                  {routes.map((route) => (
                    <div
                      key={route.id}
                      onClick={() => setSelectedRoute(route.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                        selectedRoute === route.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300 bg-gray-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-2xl font-bold text-indigo-600">{route.duration}</div>
                          <div className="text-xs text-gray-500">Durée totale</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{route.cost}</div>
                          {route.incidents > 0 && (
                            <div className="text-xs text-red-600 flex items-center gap-1 justify-end mt-1">
                              <AlertCircle className="w-3 h-3" />
                              {route.incidents} incident
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Étapes */}
                      <div className="space-y-2">
                        {route.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1"
                              style={{ backgroundColor: getLineColor(step.line) }}
                            >
                              {idx + 1}
                            </div>
                            <div className="flex-1 text-sm">
                              <div className="font-semibold text-gray-800">{step.line}</div>
                              <div className="text-xs text-gray-600">{step.from} → {step.to}</div>
                              <div className="text-xs text-gray-500 mt-1">⏱️ {step.duration}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Carte des incidents */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🗺️ Incidents en temps réel</h3>

              {incidents.length === 0 ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-green-700 font-semibold">Aucun incident signalé</p>
                  <p className="text-green-600 text-sm mt-1">Le réseau fonctionne normalement</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {incidents.map((incident) => (
                    <div
                      key={incident.id}
                      className="bg-red-50 border-l-4 border-red-500 p-4 rounded"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div
                            className="inline-block px-3 py-1 rounded-full text-white text-sm font-bold"
                            style={{ backgroundColor: getLineColor(incident.line) }}
                          >
                            {incident.line}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">{incident.time}</div>
                      </div>
                      <p className="text-gray-800 text-sm font-semibold mb-2">{incident.description}</p>
                      <div className="flex gap-4 text-xs text-gray-600">
                        <span>👥 {incident.reports} signalements</span>
                        <span className="text-red-600 font-semibold">🔴 Problème grave</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Modal formulaire poulet */}
      {showIncidentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                🐔 Signaler un problème
              </h2>
              <button
                onClick={() => setShowIncidentForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quelle ligne?</label>
                <select
                  value={selectedLine}
                  onChange={(e) => setSelectedLine(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="">Choisir une ligne...</option>
                  {transportLines.map((line) => (
                    <option key={line.id} value={line.name}>
                      {line.name} ({line.type})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Décrivez le problème
                </label>
                <textarea
                  value={incidentDescription}
                  onChange={(e) => setIncidentDescription(e.target.value)}
                  placeholder="Bouchons, métro bloqué, chauffeur agressif, arrêt supprimé..."
                  maxLength="200"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 resize-none h-24"
                />
                <div className="text-xs text-gray-500 mt-1">
                  {incidentDescription.length}/200 caractères
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-xs text-blue-700">
                <MessageSquare className="inline w-3 h-3 mr-2" />
                Votre signalement aide les autres utilisateurs en temps réel
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowIncidentForm(false)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddIncident}
                  disabled={!selectedLine || !incidentDescription}
                  className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white font-bold rounded-lg transition"
                >
                  📍 Signaler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
