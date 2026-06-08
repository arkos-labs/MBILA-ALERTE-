
const LINES = [
  {
    "id": "1",
    "name": "Ligne 1",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "2",
    "name": "Ligne 2",
    "type": "Métro",
    "color": "#003CA6",
    "textColor": "#fff"
  },
  {
    "id": "3",
    "name": "Ligne 3",
    "type": "Métro",
    "color": "#9D5B25",
    "textColor": "#fff"
  },
  {
    "id": "3bis",
    "name": "Ligne 3bis",
    "type": "Métro",
    "color": "#6B63B5",
    "textColor": "#fff"
  },
  {
    "id": "4",
    "name": "Ligne 4",
    "type": "Métro",
    "color": "#CD7F32",
    "textColor": "#fff"
  },
  {
    "id": "5",
    "name": "Ligne 5",
    "type": "Métro",
    "color": "#FF9500",
    "textColor": "#fff"
  },
  {
    "id": "6",
    "name": "Ligne 6",
    "type": "Métro",
    "color": "#99C4DC",
    "textColor": "#fff"
  },
  {
    "id": "7",
    "name": "Ligne 7",
    "type": "Métro",
    "color": "#F3A4BA",
    "textColor": "#fff"
  },
  {
    "id": "7bis",
    "name": "Ligne 7bis",
    "type": "Métro",
    "color": "#C1121F",
    "textColor": "#fff"
  },
  {
    "id": "8",
    "name": "Ligne 8",
    "type": "Métro",
    "color": "#E0A0D4",
    "textColor": "#fff"
  },
  {
    "id": "9",
    "name": "Ligne 9",
    "type": "Métro",
    "color": "#D4AF37",
    "textColor": "#fff"
  },
  {
    "id": "10",
    "name": "Ligne 10",
    "type": "Métro",
    "color": "#C1121F",
    "textColor": "#fff"
  },
  {
    "id": "11",
    "name": "Ligne 11",
    "type": "Métro",
    "color": "#00814F",
    "textColor": "#fff"
  },
  {
    "id": "12",
    "name": "Ligne 12",
    "type": "Métro",
    "color": "#6B63B5",
    "textColor": "#fff"
  },
  {
    "id": "13",
    "name": "Ligne 13",
    "type": "Métro",
    "color": "#6EC4E8",
    "textColor": "#fff"
  },
  {
    "id": "14",
    "name": "Ligne 14",
    "type": "Métro",
    "color": "#51309C",
    "textColor": "#fff"
  },
  {
    "id": "RER-A",
    "name": "RER A",
    "type": "RER",
    "color": "#EF3B39",
    "textColor": "#fff"
  },
  {
    "id": "RER-B",
    "name": "RER B",
    "type": "RER",
    "color": "#EF3B39",
    "textColor": "#fff"
  },
  {
    "id": "RER-C",
    "name": "RER C",
    "type": "RER",
    "color": "#EF3B39",
    "textColor": "#fff"
  },
  {
    "id": "RER-D",
    "name": "RER D",
    "type": "RER",
    "color": "#EF3B39",
    "textColor": "#fff"
  },
  {
    "id": "RER-E",
    "name": "RER E",
    "type": "RER",
    "color": "#EF3B39",
    "textColor": "#fff"
  },
  {
    "id": "H",
    "name": "Ligne H",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "J",
    "name": "Ligne J",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "K",
    "name": "Ligne K",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "L",
    "name": "Ligne L",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "N",
    "name": "Ligne N",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "P",
    "name": "Ligne P",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "R",
    "name": "Ligne R",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "U",
    "name": "Ligne U",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  },
  {
    "id": "V",
    "name": "Ligne V",
    "type": "Métro",
    "color": "#FFC72C",
    "textColor": "#fff"
  }
];

const STATIONS = [
  {
    "id": 1,
    "name": "La Défense",
    "lat": 48.86265856986885,
    "lng": 2.330267319377778,
    "lines": [
      "Ligne 1",
      "RER A",
      "Ligne L"
    ]
  },
  {
    "id": 2,
    "name": "Esplanade de La Défense",
    "lat": 48.880124441773845,
    "lng": 2.3607199735209834,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 3,
    "name": "Pont de Neuilly",
    "lat": 48.83565119823585,
    "lng": 2.3467998779377175,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 4,
    "name": "Les Sablons",
    "lat": 48.83760828188827,
    "lng": 2.3470358781422633,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 5,
    "name": "Porte Maillot",
    "lat": 48.8432888716952,
    "lng": 2.3459361956045015,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 6,
    "name": "Argentine",
    "lat": 48.85136128819156,
    "lng": 2.3416678559346398,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 7,
    "name": "Charles de Gaulle-Étoile",
    "lat": 48.8417528889679,
    "lng": 2.3572662390910026,
    "lines": [
      "Ligne 1",
      "Ligne 2",
      "Ligne 6",
      "RER A"
    ]
  },
  {
    "id": 8,
    "name": "George V",
    "lat": 48.85077560566567,
    "lng": 2.3347421444431795,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 9,
    "name": "Franklin D. Roosevelt",
    "lat": 48.856832987234014,
    "lng": 2.344869564435644,
    "lines": [
      "Ligne 1",
      "Ligne 9"
    ]
  },
  {
    "id": 10,
    "name": "Champs-Élysées-Clemenceau",
    "lat": 48.87693113956848,
    "lng": 2.3671970680161554,
    "lines": [
      "Ligne 1",
      "Ligne 13"
    ]
  },
  {
    "id": 11,
    "name": "Concorde",
    "lat": 48.880965257287045,
    "lng": 2.363874413359745,
    "lines": [
      "Ligne 1",
      "Ligne 8",
      "Ligne 12"
    ]
  },
  {
    "id": 12,
    "name": "Tuileries",
    "lat": 48.83435630525079,
    "lng": 2.3397419495147056,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 13,
    "name": "Palais Royal-Musée du Louvre",
    "lat": 48.87392971422753,
    "lng": 2.3550116469949596,
    "lines": [
      "Ligne 1",
      "Ligne 7"
    ]
  },
  {
    "id": 14,
    "name": "Louvre-Rivoli",
    "lat": 48.858591378444395,
    "lng": 2.37101825262809,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 15,
    "name": "Châtelet",
    "lat": 48.87318280339434,
    "lng": 2.327402591477823,
    "lines": [
      "Ligne 1",
      "Ligne 4",
      "Ligne 7",
      "Ligne 11",
      "Ligne 14"
    ]
  },
  {
    "id": 16,
    "name": "Hôtel de Ville",
    "lat": 48.8798965656245,
    "lng": 2.3316193797030085,
    "lines": [
      "Ligne 1",
      "Ligne 11"
    ]
  },
  {
    "id": 17,
    "name": "Saint-Paul",
    "lat": 48.866498187669244,
    "lng": 2.337376781194597,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 18,
    "name": "Bastille",
    "lat": 48.86309284812472,
    "lng": 2.340261999337919,
    "lines": [
      "Ligne 1",
      "Ligne 5",
      "Ligne 8"
    ]
  },
  {
    "id": 19,
    "name": "Gare de Lyon",
    "lat": 48.858556662019986,
    "lng": 2.3636450183345468,
    "lines": [
      "Ligne 1",
      "Ligne 14",
      "RER A"
    ]
  },
  {
    "id": 20,
    "name": "Reuilly-Diderot",
    "lat": 48.835265406311656,
    "lng": 2.3476797074320683,
    "lines": [
      "Ligne 1",
      "Ligne 8"
    ]
  },
  {
    "id": 21,
    "name": "Nation",
    "lat": 48.83221612411454,
    "lng": 2.3289569147751026,
    "lines": [
      "Ligne 1",
      "Ligne 2",
      "Ligne 6",
      "Ligne 9",
      "RER A"
    ]
  },
  {
    "id": 22,
    "name": "Porte de Vincennes",
    "lat": 48.863474189733516,
    "lng": 2.3763279978368455,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 23,
    "name": "Saint-Mandé",
    "lat": 48.838840900342895,
    "lng": 2.3709012374717364,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 24,
    "name": "Bérault",
    "lat": 48.8619876780271,
    "lng": 2.343095218151095,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 25,
    "name": "Château de Vincennes",
    "lat": 48.869571043787424,
    "lng": 2.359383052408615,
    "lines": [
      "Ligne 1"
    ]
  },
  {
    "id": 26,
    "name": "Porte Dauphine",
    "lat": 48.847906365789456,
    "lng": 2.3630972743256176,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 27,
    "name": "Victor Hugo",
    "lat": 48.85146487212156,
    "lng": 2.3737035392996897,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 28,
    "name": "Ternes",
    "lat": 48.853191966718654,
    "lng": 2.3547924089788275,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 29,
    "name": "Courcelles",
    "lat": 48.863698771807805,
    "lng": 2.373667243250386,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 30,
    "name": "Monceau",
    "lat": 48.84228958339839,
    "lng": 2.341477407952911,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 31,
    "name": "Villiers",
    "lat": 48.870317298060606,
    "lng": 2.3424948305343087,
    "lines": [
      "Ligne 2",
      "Ligne 3"
    ]
  },
  {
    "id": 32,
    "name": "Rome",
    "lat": 48.86666062170403,
    "lng": 2.3483570416023385,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 33,
    "name": "Place de Clichy",
    "lat": 48.833110545583274,
    "lng": 2.3713823002623147,
    "lines": [
      "Ligne 2",
      "Ligne 13"
    ]
  },
  {
    "id": 34,
    "name": "Blanche",
    "lat": 48.85013207190136,
    "lng": 2.3624458598239473,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 35,
    "name": "Pigalle",
    "lat": 48.86776031007144,
    "lng": 2.354093076414144,
    "lines": [
      "Ligne 2",
      "Ligne 12"
    ]
  },
  {
    "id": 36,
    "name": "Anvers",
    "lat": 48.85041819555531,
    "lng": 2.365221780067693,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 37,
    "name": "Barbès-Rochechouart",
    "lat": 48.836578392914895,
    "lng": 2.3622898290167784,
    "lines": [
      "Ligne 2",
      "Ligne 4"
    ]
  },
  {
    "id": 38,
    "name": "La Chapelle",
    "lat": 48.85716966040859,
    "lng": 2.371154985223439,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 39,
    "name": "Stalingrad",
    "lat": 48.84944384978768,
    "lng": 2.3497064145731383,
    "lines": [
      "Ligne 2",
      "Ligne 5",
      "Ligne 7"
    ]
  },
  {
    "id": 40,
    "name": "Jaurès",
    "lat": 48.85609329097291,
    "lng": 2.3631420818824465,
    "lines": [
      "Ligne 2",
      "Ligne 5",
      "Ligne 7bis"
    ]
  },
  {
    "id": 41,
    "name": "Colonel Fabien",
    "lat": 48.85411507467948,
    "lng": 2.347369768762251,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 42,
    "name": "Belleville",
    "lat": 48.846494457726074,
    "lng": 2.3451273631612235,
    "lines": [
      "Ligne 2",
      "Ligne 11"
    ]
  },
  {
    "id": 43,
    "name": "Couronnes",
    "lat": 48.86216053845102,
    "lng": 2.32844577735125,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 44,
    "name": "Ménilmontant",
    "lat": 48.84239664634015,
    "lng": 2.3397492778002076,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 45,
    "name": "Père Lachaise",
    "lat": 48.84710548207929,
    "lng": 2.3506617261037817,
    "lines": [
      "Ligne 2",
      "Ligne 3"
    ]
  },
  {
    "id": 46,
    "name": "Philippe Auguste",
    "lat": 48.86491044087974,
    "lng": 2.3367187061043686,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 47,
    "name": "Alexandre Dumas",
    "lat": 48.83505096317137,
    "lng": 2.3612058300421714,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 48,
    "name": "Avron",
    "lat": 48.84699643372845,
    "lng": 2.376269083387787,
    "lines": [
      "Ligne 2"
    ]
  },
  {
    "id": 49,
    "name": "Pont de Levallois-Bécon",
    "lat": 48.8645457230227,
    "lng": 2.337391061527508,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 50,
    "name": "Anatole France",
    "lat": 48.87668366869626,
    "lng": 2.3282985603416195,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 51,
    "name": "Louise Michel",
    "lat": 48.85363453526841,
    "lng": 2.330219174799151,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 52,
    "name": "Porte de Champerret",
    "lat": 48.83378207511429,
    "lng": 2.328280238862662,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 53,
    "name": "Pereire",
    "lat": 48.84309608018967,
    "lng": 2.349005198886374,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 54,
    "name": "Wagram",
    "lat": 48.86918491028782,
    "lng": 2.3718046668028103,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 55,
    "name": "Malesherbes",
    "lat": 48.87853767922847,
    "lng": 2.367145190230254,
    "lines": [
      "Ligne 3",
      "RER D"
    ]
  },
  {
    "id": 56,
    "name": "Europe",
    "lat": 48.84204341348303,
    "lng": 2.3428072599366163,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 57,
    "name": "Saint-Lazare",
    "lat": 48.842204675413484,
    "lng": 2.3618208738367765,
    "lines": [
      "Ligne 3",
      "Ligne 12",
      "Ligne 13",
      "Ligne 14"
    ]
  },
  {
    "id": 58,
    "name": "Havre-Caumartin",
    "lat": 48.86054631669017,
    "lng": 2.3692055803471193,
    "lines": [
      "Ligne 3",
      "Ligne 9"
    ]
  },
  {
    "id": 59,
    "name": "Opéra",
    "lat": 48.84229421446629,
    "lng": 2.3528811701383585,
    "lines": [
      "Ligne 3",
      "Ligne 7",
      "Ligne 8"
    ]
  },
  {
    "id": 60,
    "name": "Quatre-Septembre",
    "lat": 48.841361044482404,
    "lng": 2.3324487948991965,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 61,
    "name": "Bourse",
    "lat": 48.84603038812762,
    "lng": 2.335855562983465,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 62,
    "name": "Sentier",
    "lat": 48.86011036163721,
    "lng": 2.3712423271814704,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 63,
    "name": "Réaumur-Sébastopol",
    "lat": 48.834222654985645,
    "lng": 2.353808743615936,
    "lines": [
      "Ligne 3",
      "Ligne 4"
    ]
  },
  {
    "id": 64,
    "name": "Arts et Métiers",
    "lat": 48.86166532259155,
    "lng": 2.3452806177960266,
    "lines": [
      "Ligne 3",
      "Ligne 11"
    ]
  },
  {
    "id": 65,
    "name": "Temple",
    "lat": 48.862248059940974,
    "lng": 2.3508521539931353,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 66,
    "name": "République",
    "lat": 48.83988502661547,
    "lng": 2.351886063385768,
    "lines": [
      "Ligne 3",
      "Ligne 5",
      "Ligne 8",
      "Ligne 9",
      "Ligne 11"
    ]
  },
  {
    "id": 67,
    "name": "Parmentier",
    "lat": 48.875465231904144,
    "lng": 2.37674217903616,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 68,
    "name": "Rue Saint-Maur",
    "lat": 48.84522077203939,
    "lng": 2.336747087759277,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 69,
    "name": "Gambetta",
    "lat": 48.842021241820575,
    "lng": 2.360277995033922,
    "lines": [
      "Ligne 3",
      "Ligne 3bis"
    ]
  },
  {
    "id": 70,
    "name": "Porte de Bagnolet",
    "lat": 48.83164397994428,
    "lng": 2.3733770371780536,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 71,
    "name": "Gallieni",
    "lat": 48.868419889042855,
    "lng": 2.365491988263473,
    "lines": [
      "Ligne 3"
    ]
  },
  {
    "id": 72,
    "name": "Porte des Lilas",
    "lat": 48.83782857453794,
    "lng": 2.3545929377943136,
    "lines": [
      "Ligne 3bis",
      "Ligne 11"
    ]
  },
  {
    "id": 73,
    "name": "Saint-Fargeau",
    "lat": 48.85575946070265,
    "lng": 2.342358925820953,
    "lines": [
      "Ligne 3bis",
      "RER D"
    ]
  },
  {
    "id": 74,
    "name": "Pelleport",
    "lat": 48.85682240111255,
    "lng": 2.3662133264243046,
    "lines": [
      "Ligne 3bis"
    ]
  },
  {
    "id": 75,
    "name": "Porte de Clignancourt",
    "lat": 48.83913604993311,
    "lng": 2.3587076962225813,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 76,
    "name": "Simplon",
    "lat": 48.848841805035434,
    "lng": 2.3695950500792327,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 77,
    "name": "Marcadet-Poissonniers",
    "lat": 48.837895529786145,
    "lng": 2.371961169609276,
    "lines": [
      "Ligne 4",
      "Ligne 12"
    ]
  },
  {
    "id": 78,
    "name": "Château Rouge",
    "lat": 48.84326346069959,
    "lng": 2.3749456758482284,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 79,
    "name": "Gare du Nord",
    "lat": 48.856374346898896,
    "lng": 2.339324059832282,
    "lines": [
      "Ligne 4",
      "Ligne 5",
      "RER B"
    ]
  },
  {
    "id": 80,
    "name": "Gare de l'Est",
    "lat": 48.8655164789166,
    "lng": 2.3349604931793424,
    "lines": [
      "Ligne 4",
      "Ligne 5",
      "Ligne 7"
    ]
  },
  {
    "id": 81,
    "name": "Château d'Eau",
    "lat": 48.85088616111712,
    "lng": 2.3278167070515754,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 82,
    "name": "Strasbourg-Saint-Denis",
    "lat": 48.84865262788688,
    "lng": 2.3725816874940375,
    "lines": [
      "Ligne 4",
      "Ligne 8",
      "Ligne 9"
    ]
  },
  {
    "id": 83,
    "name": "Étienne Marcel",
    "lat": 48.86268425215351,
    "lng": 2.361793217223511,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 84,
    "name": "Les Halles",
    "lat": 48.85602051365949,
    "lng": 2.3520782199682375,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 85,
    "name": "Cité",
    "lat": 48.833777769162374,
    "lng": 2.332469154504303,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 86,
    "name": "Saint-Michel",
    "lat": 48.8561984579478,
    "lng": 2.373166586757522,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 87,
    "name": "Odéon",
    "lat": 48.832303391926196,
    "lng": 2.3388650332574192,
    "lines": [
      "Ligne 4",
      "Ligne 10"
    ]
  },
  {
    "id": 88,
    "name": "Saint-Germain-des-Prés",
    "lat": 48.85571973037218,
    "lng": 2.370168837096815,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 89,
    "name": "Saint-Sulpice",
    "lat": 48.86724921659348,
    "lng": 2.361919722607938,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 90,
    "name": "Saint-Placide",
    "lat": 48.87004913103621,
    "lng": 2.341698634616417,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 91,
    "name": "Montparnasse-Bienvenüe",
    "lat": 48.83548413437221,
    "lng": 2.35419044244149,
    "lines": [
      "Ligne 4",
      "Ligne 6",
      "Ligne 12",
      "Ligne 13"
    ]
  },
  {
    "id": 92,
    "name": "Vavin",
    "lat": 48.84033997037815,
    "lng": 2.3643970420934264,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 93,
    "name": "Raspail",
    "lat": 48.83653310418796,
    "lng": 2.3372027893674945,
    "lines": [
      "Ligne 4",
      "Ligne 6"
    ]
  },
  {
    "id": 94,
    "name": "Denfert-Rochereau",
    "lat": 48.85024384089167,
    "lng": 2.3569717270481663,
    "lines": [
      "Ligne 4",
      "Ligne 6",
      "RER B"
    ]
  },
  {
    "id": 95,
    "name": "Mouton-Duvernet",
    "lat": 48.83613231223349,
    "lng": 2.3579800476150714,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 96,
    "name": "Alésia",
    "lat": 48.85310826986649,
    "lng": 2.331776491678865,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 97,
    "name": "Porte d'Orléans",
    "lat": 48.86050721470826,
    "lng": 2.3305576713334752,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 98,
    "name": "Mairie de Montrouge",
    "lat": 48.86199083552213,
    "lng": 2.3650164487708616,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 99,
    "name": "Barbara",
    "lat": 48.85680501527576,
    "lng": 2.352873668176812,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 100,
    "name": "Bagneux-Lucie Aubrac",
    "lat": 48.880227138010376,
    "lng": 2.3491595554259836,
    "lines": [
      "Ligne 4"
    ]
  },
  {
    "id": 101,
    "name": "Bobigny-Pablo Picasso",
    "lat": 48.83385197978013,
    "lng": 2.332316184843858,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 102,
    "name": "Bobigny-Pantin Raymond Queneau",
    "lat": 48.880914653449615,
    "lng": 2.354862106881088,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 103,
    "name": "Église de Pantin",
    "lat": 48.87512922251003,
    "lng": 2.3617127754796883,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 104,
    "name": "Hoche",
    "lat": 48.84621408223774,
    "lng": 2.3658247768914773,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 105,
    "name": "Porte de Pantin",
    "lat": 48.85133972865396,
    "lng": 2.3462428898128347,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 106,
    "name": "Ourcq",
    "lat": 48.8525593262321,
    "lng": 2.3421674193600923,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 107,
    "name": "Laumière",
    "lat": 48.86197296972322,
    "lng": 2.3671321502849345,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 108,
    "name": "Jacques Bonsergent",
    "lat": 48.83768154108802,
    "lng": 2.3459027308291867,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 109,
    "name": "Oberkampf",
    "lat": 48.88079023353682,
    "lng": 2.3524899476651506,
    "lines": [
      "Ligne 5",
      "Ligne 9"
    ]
  },
  {
    "id": 110,
    "name": "Richard-Lenoir",
    "lat": 48.84569030078238,
    "lng": 2.358546037451839,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 111,
    "name": "Bréguet-Sabin",
    "lat": 48.88088708719094,
    "lng": 2.3567769321567886,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 112,
    "name": "Quai de la Rapée",
    "lat": 48.868613195983976,
    "lng": 2.3479247510773136,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 113,
    "name": "Gare d'Austerlitz",
    "lat": 48.83630982677076,
    "lng": 2.3294439090880656,
    "lines": [
      "Ligne 5",
      "Ligne 10"
    ]
  },
  {
    "id": 114,
    "name": "Saint-Marcel",
    "lat": 48.854879681157264,
    "lng": 2.352154271398761,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 115,
    "name": "Campo-Formio",
    "lat": 48.83434657027283,
    "lng": 2.328372604965825,
    "lines": [
      "Ligne 5"
    ]
  },
  {
    "id": 116,
    "name": "Place d'Italie",
    "lat": 48.877385736348195,
    "lng": 2.347318853716023,
    "lines": [
      "Ligne 5",
      "Ligne 6",
      "Ligne 7"
    ]
  },
  {
    "id": 117,
    "name": "Kléber",
    "lat": 48.847823590785985,
    "lng": 2.338575469299372,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 118,
    "name": "Boissière",
    "lat": 48.85938145612857,
    "lng": 2.339435734114665,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 119,
    "name": "Trocadéro",
    "lat": 48.83704930499736,
    "lng": 2.3487020435705945,
    "lines": [
      "Ligne 6",
      "Ligne 9"
    ]
  },
  {
    "id": 120,
    "name": "Passy",
    "lat": 48.87226899804823,
    "lng": 2.3623148906606874,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 121,
    "name": "Bir-Hakeim",
    "lat": 48.84840671102337,
    "lng": 2.3285225667877913,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 122,
    "name": "Dupleix",
    "lat": 48.84452068406311,
    "lng": 2.37550226124436,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 123,
    "name": "La Motte-Picquet-Grenelle",
    "lat": 48.85347878949166,
    "lng": 2.356744490949641,
    "lines": [
      "Ligne 6",
      "Ligne 8",
      "Ligne 10"
    ]
  },
  {
    "id": 124,
    "name": "Cambronne",
    "lat": 48.852371125263964,
    "lng": 2.368108391318102,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 125,
    "name": "Sèvres-Lecourbe",
    "lat": 48.880083707082655,
    "lng": 2.3357281611163727,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 126,
    "name": "Pasteur",
    "lat": 48.865931706080566,
    "lng": 2.3280566528573168,
    "lines": [
      "Ligne 6",
      "Ligne 12"
    ]
  },
  {
    "id": 127,
    "name": "Edgar Quinet",
    "lat": 48.865172191006394,
    "lng": 2.352527731253917,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 128,
    "name": "Saint-Jacques",
    "lat": 48.867639391597635,
    "lng": 2.330956792332943,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 129,
    "name": "Glacière",
    "lat": 48.86648568946294,
    "lng": 2.329511702535991,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 130,
    "name": "Corvisart",
    "lat": 48.8682599560477,
    "lng": 2.3406572860902997,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 131,
    "name": "Nationale",
    "lat": 48.84423091415164,
    "lng": 2.331225441799702,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 132,
    "name": "Chevaleret",
    "lat": 48.860833859516795,
    "lng": 2.363487696496049,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 133,
    "name": "Quai de la Gare",
    "lat": 48.874446941738945,
    "lng": 2.3412147515901895,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 134,
    "name": "Bercy",
    "lat": 48.838456577092046,
    "lng": 2.3281365580992173,
    "lines": [
      "Ligne 6",
      "Ligne 14"
    ]
  },
  {
    "id": 135,
    "name": "Dugommier",
    "lat": 48.84445539506947,
    "lng": 2.3539445791036857,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 136,
    "name": "Daumesnil",
    "lat": 48.87046004723115,
    "lng": 2.331504828310185,
    "lines": [
      "Ligne 6",
      "Ligne 8"
    ]
  },
  {
    "id": 137,
    "name": "Bel-Air",
    "lat": 48.8322716896675,
    "lng": 2.351253695387344,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 138,
    "name": "Picpus",
    "lat": 48.85703047057441,
    "lng": 2.3459949454682,
    "lines": [
      "Ligne 6"
    ]
  },
  {
    "id": 139,
    "name": "La Courneuve-8 Mai 1945",
    "lat": 48.86289198109324,
    "lng": 2.354959297522165,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 140,
    "name": "Fort d'Aubervilliers",
    "lat": 48.843512823163756,
    "lng": 2.3481002247513825,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 141,
    "name": "Aubervilliers-Pantin Quatre Chemins",
    "lat": 48.88139483282796,
    "lng": 2.359433185716327,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 142,
    "name": "Porte de la Villette",
    "lat": 48.85996691613252,
    "lng": 2.3426070525160894,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 143,
    "name": "Corentin Cariou",
    "lat": 48.85542065444627,
    "lng": 2.3625878766818422,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 144,
    "name": "Crimée",
    "lat": 48.83588734927357,
    "lng": 2.3309274581331008,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 145,
    "name": "Riquet",
    "lat": 48.87597456070052,
    "lng": 2.3421108155732986,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 146,
    "name": "Louis Blanc",
    "lat": 48.86983244824645,
    "lng": 2.3468739191929138,
    "lines": [
      "Ligne 7",
      "Ligne 7bis"
    ]
  },
  {
    "id": 147,
    "name": "Château-Landon",
    "lat": 48.844394976843724,
    "lng": 2.3761726535864187,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 148,
    "name": "Poissonnière",
    "lat": 48.88113893587483,
    "lng": 2.3745900136943288,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 149,
    "name": "Cadet",
    "lat": 48.8660364270408,
    "lng": 2.374266603275792,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 150,
    "name": "Le Peletier",
    "lat": 48.86415734979412,
    "lng": 2.354912904560872,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 151,
    "name": "Chaussée d'Antin-La Fayette",
    "lat": 48.861480366932646,
    "lng": 2.373096565911477,
    "lines": [
      "Ligne 7",
      "Ligne 9"
    ]
  },
  {
    "id": 152,
    "name": "Pyramides",
    "lat": 48.87062427381368,
    "lng": 2.349186981426266,
    "lines": [
      "Ligne 7",
      "Ligne 14"
    ]
  },
  {
    "id": 153,
    "name": "Pont Neuf",
    "lat": 48.86328609788162,
    "lng": 2.3433021262604052,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 154,
    "name": "Pont Marie",
    "lat": 48.852552127013595,
    "lng": 2.335857300970338,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 155,
    "name": "Sully-Morland",
    "lat": 48.842713205550965,
    "lng": 2.369108220996718,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 156,
    "name": "Jussieu",
    "lat": 48.86963514942507,
    "lng": 2.377171276055184,
    "lines": [
      "Ligne 7",
      "Ligne 10"
    ]
  },
  {
    "id": 157,
    "name": "Place Monge",
    "lat": 48.85076163786051,
    "lng": 2.3328681841791012,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 158,
    "name": "Censier-Daubenton",
    "lat": 48.85224164333731,
    "lng": 2.343139141185842,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 159,
    "name": "Les Gobelins",
    "lat": 48.86720036156438,
    "lng": 2.3542613338172993,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 160,
    "name": "Tolbiac",
    "lat": 48.83423202902152,
    "lng": 2.3398219319044693,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 161,
    "name": "Maison Blanche",
    "lat": 48.860768272703915,
    "lng": 2.366392580711077,
    "lines": [
      "Ligne 7",
      "Ligne 14"
    ]
  },
  {
    "id": 162,
    "name": "Le Kremlin-Bicêtre",
    "lat": 48.83489882086071,
    "lng": 2.334354166626502,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 163,
    "name": "Villejuif Léo Lagrange",
    "lat": 48.87153381839726,
    "lng": 2.335458210183641,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 164,
    "name": "Villejuif Paul Vaillant-Couturier",
    "lat": 48.87019794818867,
    "lng": 2.3351379962629117,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 165,
    "name": "Villejuif Louis Aragon",
    "lat": 48.83209228034315,
    "lng": 2.37382298421799,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 166,
    "name": "Porte d'Italie",
    "lat": 48.862062726759376,
    "lng": 2.368162562825734,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 167,
    "name": "Porte de Choisy",
    "lat": 48.84940198853004,
    "lng": 2.328449233190378,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 168,
    "name": "Porte d'Ivry",
    "lat": 48.84619270175463,
    "lng": 2.3354920754014734,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 169,
    "name": "Pierre et Marie Curie",
    "lat": 48.85361201357982,
    "lng": 2.334979595187817,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 170,
    "name": "Mairie d'Ivry",
    "lat": 48.880130821109056,
    "lng": 2.3728723941134753,
    "lines": [
      "Ligne 7"
    ]
  },
  {
    "id": 171,
    "name": "Bolivar",
    "lat": 48.86878493990154,
    "lng": 2.3284214500912146,
    "lines": [
      "Ligne 7bis"
    ]
  },
  {
    "id": 172,
    "name": "Buttes Chaumont",
    "lat": 48.83477249689523,
    "lng": 2.332485466030314,
    "lines": [
      "Ligne 7bis"
    ]
  },
  {
    "id": 173,
    "name": "Botzaris",
    "lat": 48.85905405751348,
    "lng": 2.3330867188575097,
    "lines": [
      "Ligne 7bis"
    ]
  },
  {
    "id": 174,
    "name": "Danube",
    "lat": 48.837208538119505,
    "lng": 2.361005010828658,
    "lines": [
      "Ligne 7bis"
    ]
  },
  {
    "id": 175,
    "name": "Place des Fêtes",
    "lat": 48.858330389741674,
    "lng": 2.3355360675582966,
    "lines": [
      "Ligne 7bis",
      "Ligne 11"
    ]
  },
  {
    "id": 176,
    "name": "Pré-Saint-Gervais",
    "lat": 48.85066295874871,
    "lng": 2.3526726456798235,
    "lines": [
      "Ligne 7bis"
    ]
  },
  {
    "id": 177,
    "name": "Balard",
    "lat": 48.835917462209586,
    "lng": 2.343125078233011,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 178,
    "name": "Lourmel",
    "lat": 48.870132319731404,
    "lng": 2.374624622766303,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 179,
    "name": "Boucicaut",
    "lat": 48.83798322288214,
    "lng": 2.35178908966764,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 180,
    "name": "Félix Faure",
    "lat": 48.8366985591327,
    "lng": 2.3286741204784267,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 181,
    "name": "Commerce",
    "lat": 48.86274824599873,
    "lng": 2.364798427209721,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 182,
    "name": "École Militaire",
    "lat": 48.83287161353532,
    "lng": 2.3443346579148483,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 183,
    "name": "La Tour-Maubourg",
    "lat": 48.85455164551424,
    "lng": 2.3396607868017023,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 184,
    "name": "Invalides",
    "lat": 48.859912342491164,
    "lng": 2.374233669798722,
    "lines": [
      "Ligne 8",
      "Ligne 13",
      "RER C"
    ]
  },
  {
    "id": 185,
    "name": "Madeleine",
    "lat": 48.843338648175404,
    "lng": 2.3503881900323695,
    "lines": [
      "Ligne 8",
      "Ligne 12",
      "Ligne 14"
    ]
  },
  {
    "id": 186,
    "name": "Richelieu-Drouot",
    "lat": 48.87094473106227,
    "lng": 2.3446684816673797,
    "lines": [
      "Ligne 8",
      "Ligne 9"
    ]
  },
  {
    "id": 187,
    "name": "Grands Boulevards",
    "lat": 48.8368116068705,
    "lng": 2.346662645809884,
    "lines": [
      "Ligne 8",
      "Ligne 9"
    ]
  },
  {
    "id": 188,
    "name": "Bonne Nouvelle",
    "lat": 48.86296462479878,
    "lng": 2.365845714682752,
    "lines": [
      "Ligne 8",
      "Ligne 9"
    ]
  },
  {
    "id": 189,
    "name": "Filles du Calvaire",
    "lat": 48.86969345751673,
    "lng": 2.3707413828173185,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 190,
    "name": "Saint-Sébastien-Froissart",
    "lat": 48.831782742556435,
    "lng": 2.349435898297407,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 191,
    "name": "Chemin Vert",
    "lat": 48.86592950300511,
    "lng": 2.365574913353618,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 192,
    "name": "Ledru-Rollin",
    "lat": 48.83811376421802,
    "lng": 2.3730361510083084,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 193,
    "name": "Faidherbe-Chaligny",
    "lat": 48.85248036926051,
    "lng": 2.3412597516387916,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 194,
    "name": "Montgallet",
    "lat": 48.85820216477597,
    "lng": 2.361974205036661,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 195,
    "name": "Michel Bizot",
    "lat": 48.87020800265289,
    "lng": 2.3689800285459324,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 196,
    "name": "Porte Dorée",
    "lat": 48.83783875296923,
    "lng": 2.341022171391457,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 197,
    "name": "Porte de Charenton",
    "lat": 48.83904779405835,
    "lng": 2.360804209425585,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 198,
    "name": "Liberté",
    "lat": 48.836767970442,
    "lng": 2.353601127533274,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 199,
    "name": "Charenton-Écoles",
    "lat": 48.83559844369687,
    "lng": 2.3715490769777645,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 200,
    "name": "École Vétérinaire de Maisons-Alfort",
    "lat": 48.87842736454197,
    "lng": 2.3383603809044526,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 201,
    "name": "Maisons-Alfort-Stade",
    "lat": 48.87921151161806,
    "lng": 2.364862607668992,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 202,
    "name": "Maisons-Alfort-Les Juilliottes",
    "lat": 48.84064066034942,
    "lng": 2.329196927816615,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 203,
    "name": "Créteil-L'Échat",
    "lat": 48.87029245579502,
    "lng": 2.361012417863866,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 204,
    "name": "Créteil-Université",
    "lat": 48.855382939155405,
    "lng": 2.345259876763187,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 205,
    "name": "Créteil-Préfecture",
    "lat": 48.834134396417674,
    "lng": 2.331383770853477,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 206,
    "name": "Créteil-Pointe du Lac",
    "lat": 48.86512408228006,
    "lng": 2.33926032939813,
    "lines": [
      "Ligne 8"
    ]
  },
  {
    "id": 207,
    "name": "Pont de Sèvres",
    "lat": 48.84209726986436,
    "lng": 2.3693681754269127,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 208,
    "name": "Billancourt",
    "lat": 48.85327665689814,
    "lng": 2.345456931854129,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 209,
    "name": "Marcel Sembat",
    "lat": 48.84043788537998,
    "lng": 2.3595844184524744,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 210,
    "name": "Porte de Saint-Cloud",
    "lat": 48.844360500834355,
    "lng": 2.3462440387722,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 211,
    "name": "Exelmans",
    "lat": 48.87450466298116,
    "lng": 2.351355972933608,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 212,
    "name": "Michel-Ange-Molitor",
    "lat": 48.84686107746512,
    "lng": 2.331334733244806,
    "lines": [
      "Ligne 9",
      "Ligne 10"
    ]
  },
  {
    "id": 213,
    "name": "Michel-Ange-Auteuil",
    "lat": 48.87486462462872,
    "lng": 2.360133177803988,
    "lines": [
      "Ligne 9",
      "Ligne 10"
    ]
  },
  {
    "id": 214,
    "name": "Jasmin",
    "lat": 48.845047655406326,
    "lng": 2.33002199909476,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 215,
    "name": "Ranelagh",
    "lat": 48.85668992429041,
    "lng": 2.3638325569695864,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 216,
    "name": "La Muette",
    "lat": 48.8724184702282,
    "lng": 2.3430802463262106,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 217,
    "name": "Rue de la Pompe",
    "lat": 48.881547866751696,
    "lng": 2.3607368515283444,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 218,
    "name": "Iéna",
    "lat": 48.86644886229016,
    "lng": 2.3620388234975147,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 219,
    "name": "Alma-Marceau",
    "lat": 48.83866520164662,
    "lng": 2.3354767530362373,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 220,
    "name": "Saint-Philippe-du-Roule",
    "lat": 48.850219926671954,
    "lng": 2.373213555644081,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 221,
    "name": "Miromesnil",
    "lat": 48.859499958055984,
    "lng": 2.342171644662044,
    "lines": [
      "Ligne 9",
      "Ligne 13"
    ]
  },
  {
    "id": 222,
    "name": "Saint-Augustin",
    "lat": 48.83177754292553,
    "lng": 2.34269653418121,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 223,
    "name": "Saint-Ambroise",
    "lat": 48.87481498020997,
    "lng": 2.3655330484465256,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 224,
    "name": "Voltaire",
    "lat": 48.84373767619668,
    "lng": 2.362749040427244,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 225,
    "name": "Charonne",
    "lat": 48.85088184362088,
    "lng": 2.3521605210670447,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 226,
    "name": "Rue des Boulets",
    "lat": 48.8712508326396,
    "lng": 2.3647587013669957,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 227,
    "name": "Buzenval",
    "lat": 48.865907292963115,
    "lng": 2.344099056579714,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 228,
    "name": "Maraîchers",
    "lat": 48.87900580943375,
    "lng": 2.363981979174783,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 229,
    "name": "Porte de Montreuil",
    "lat": 48.84811760401333,
    "lng": 2.332540903708843,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 230,
    "name": "Robespierre",
    "lat": 48.87515621078941,
    "lng": 2.3601534198362364,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 231,
    "name": "Croix de Chavaux",
    "lat": 48.85343694896442,
    "lng": 2.341471512962933,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 232,
    "name": "Mairie de Montreuil",
    "lat": 48.84928703154098,
    "lng": 2.336829345750921,
    "lines": [
      "Ligne 9"
    ]
  },
  {
    "id": 233,
    "name": "Boulogne Pont de Saint-Cloud",
    "lat": 48.86816504640725,
    "lng": 2.3658022586345844,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 234,
    "name": "Boulogne Jean Jaurès",
    "lat": 48.8738820606947,
    "lng": 2.339894480203376,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 235,
    "name": "Porte d'Auteuil",
    "lat": 48.84334903299278,
    "lng": 2.3321658024150294,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 236,
    "name": "Église d'Auteuil",
    "lat": 48.84296527134766,
    "lng": 2.3295899566237526,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 237,
    "name": "Chardon Lagache",
    "lat": 48.84087816092855,
    "lng": 2.3733666155579285,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 238,
    "name": "Mirabeau",
    "lat": 48.84584247946607,
    "lng": 2.3334877626279527,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 239,
    "name": "Javel-André Citroën",
    "lat": 48.86619759862103,
    "lng": 2.3452118072118244,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 240,
    "name": "Charles Michels",
    "lat": 48.83230977170777,
    "lng": 2.342010878511243,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 241,
    "name": "Avenue Émile Zola",
    "lat": 48.8772099369086,
    "lng": 2.3524015896921284,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 242,
    "name": "Ségur",
    "lat": 48.84778483798376,
    "lng": 2.354478777037219,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 243,
    "name": "Duroc",
    "lat": 48.83328184530731,
    "lng": 2.330968369939438,
    "lines": [
      "Ligne 10",
      "Ligne 13"
    ]
  },
  {
    "id": 244,
    "name": "Vaneau",
    "lat": 48.8550891557037,
    "lng": 2.3610844345523994,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 245,
    "name": "Sèvres-Babylone",
    "lat": 48.87560335672424,
    "lng": 2.340368371081451,
    "lines": [
      "Ligne 10",
      "Ligne 12"
    ]
  },
  {
    "id": 246,
    "name": "Mabillon",
    "lat": 48.83983164302903,
    "lng": 2.346900271207405,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 247,
    "name": "Cluny-La Sorbonne",
    "lat": 48.880169004012515,
    "lng": 2.3526623777742,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 248,
    "name": "Maubert-Mutualité",
    "lat": 48.86609433917249,
    "lng": 2.333927862746643,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 249,
    "name": "Cardinal Lemoine",
    "lat": 48.86186800770518,
    "lng": 2.3740019982605904,
    "lines": [
      "Ligne 10"
    ]
  },
  {
    "id": 250,
    "name": "Rambuteau",
    "lat": 48.84462387248635,
    "lng": 2.350236175058164,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 251,
    "name": "Goncourt",
    "lat": 48.8728964575967,
    "lng": 2.366470755266015,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 252,
    "name": "Pyrénées",
    "lat": 48.87847209105148,
    "lng": 2.365237758417711,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 253,
    "name": "Jourdain",
    "lat": 48.85123255577067,
    "lng": 2.36742043001987,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 254,
    "name": "Télégraphe",
    "lat": 48.85200496322007,
    "lng": 2.3343200937469852,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 255,
    "name": "Mairie des Lilas",
    "lat": 48.834975019815104,
    "lng": 2.3351253024800007,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 256,
    "name": "Serge Gainsbourg",
    "lat": 48.83280946913714,
    "lng": 2.367016730597351,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 257,
    "name": "Romainville-Carnot",
    "lat": 48.859468865024716,
    "lng": 2.36132559595804,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 258,
    "name": "Montreuil-Hôpital",
    "lat": 48.87730534103656,
    "lng": 2.345305447851934,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 259,
    "name": "La Dhuys",
    "lat": 48.878213188649035,
    "lng": 2.3749648811085375,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 260,
    "name": "Coteaux Beauclair",
    "lat": 48.85187985746859,
    "lng": 2.3339640465213884,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 261,
    "name": "Rosny-Bois-Perrier",
    "lat": 48.855142942060056,
    "lng": 2.3562764916445365,
    "lines": [
      "Ligne 11"
    ]
  },
  {
    "id": 262,
    "name": "Mairie d'Aubervilliers",
    "lat": 48.85594245685502,
    "lng": 2.371992682239117,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 263,
    "name": "Aimé Césaire",
    "lat": 48.87894245789154,
    "lng": 2.334741627848594,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 264,
    "name": "Front Populaire",
    "lat": 48.88041444678378,
    "lng": 2.3342611952649146,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 265,
    "name": "Porte de la Chapelle",
    "lat": 48.87190264065516,
    "lng": 2.3305921419439213,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 266,
    "name": "Marx Dormoy",
    "lat": 48.848871843725185,
    "lng": 2.340285294044835,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 267,
    "name": "Jules Joffrin",
    "lat": 48.832202734683314,
    "lng": 2.350921076375908,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 268,
    "name": "Lamarck-Caulaincourt",
    "lat": 48.85495182460758,
    "lng": 2.327570759123503,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 269,
    "name": "Abbesses",
    "lat": 48.86494160961385,
    "lng": 2.373178040998349,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 270,
    "name": "Saint-Georges",
    "lat": 48.85444872655598,
    "lng": 2.362032466714197,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 271,
    "name": "Notre-Dame-de-Lorette",
    "lat": 48.87037364993521,
    "lng": 2.3461551835383267,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 272,
    "name": "Trinité-d'Estienne d'Orves",
    "lat": 48.83290197780993,
    "lng": 2.3488131450854435,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 273,
    "name": "Assemblée Nationale",
    "lat": 48.83705673044273,
    "lng": 2.3699267711516923,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 274,
    "name": "Solférino",
    "lat": 48.865459470031055,
    "lng": 2.368118485217666,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 275,
    "name": "Rue du Bac",
    "lat": 48.87592865749502,
    "lng": 2.3274625179053974,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 276,
    "name": "Rennes",
    "lat": 48.86170123655407,
    "lng": 2.3331622378496677,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 277,
    "name": "Notre-Dame-des-Champs",
    "lat": 48.843049597730094,
    "lng": 2.363221146840752,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 278,
    "name": "Falguière",
    "lat": 48.8588286298128,
    "lng": 2.376338055941386,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 279,
    "name": "Volontaires",
    "lat": 48.8460782914518,
    "lng": 2.3330009783742742,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 280,
    "name": "Vaugirard",
    "lat": 48.87914103806293,
    "lng": 2.3488571956925215,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 281,
    "name": "Convention",
    "lat": 48.86123897609828,
    "lng": 2.334029886786959,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 282,
    "name": "Porte de Versailles",
    "lat": 48.85944155746233,
    "lng": 2.3272702778845287,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 283,
    "name": "Corentin Celton",
    "lat": 48.85654755949405,
    "lng": 2.35919872887219,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 284,
    "name": "Mairie d'Issy",
    "lat": 48.83455740261883,
    "lng": 2.355418145588043,
    "lines": [
      "Ligne 12"
    ]
  },
  {
    "id": 285,
    "name": "Asnières Gennevilliers Les Courtilles",
    "lat": 48.86872878304718,
    "lng": 2.3289624864214047,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 286,
    "name": "Les Agnettes",
    "lat": 48.88112203208982,
    "lng": 2.377002661185688,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 287,
    "name": "Gabriel Péri",
    "lat": 48.8352376897696,
    "lng": 2.3569998753596044,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 288,
    "name": "Mairie de Clichy",
    "lat": 48.855602730494994,
    "lng": 2.356454534648442,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 289,
    "name": "Porte de Clichy",
    "lat": 48.861569724097365,
    "lng": 2.3384399082676093,
    "lines": [
      "Ligne 13",
      "Ligne 14",
      "RER C"
    ]
  },
  {
    "id": 290,
    "name": "Brochant",
    "lat": 48.833564847253356,
    "lng": 2.357606800847944,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 291,
    "name": "Saint-Denis Université",
    "lat": 48.85095335366789,
    "lng": 2.3455857718157906,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 292,
    "name": "Basilique de Saint-Denis",
    "lat": 48.84744548605794,
    "lng": 2.342571270517158,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 293,
    "name": "Saint-Denis-Porte de Paris",
    "lat": 48.84045064124042,
    "lng": 2.3617337857306695,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 294,
    "name": "Carrefour Pleyel",
    "lat": 48.865138008998414,
    "lng": 2.3636179887127797,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 295,
    "name": "Mairie de Saint-Ouen",
    "lat": 48.85455249934027,
    "lng": 2.367785631137721,
    "lines": [
      "Ligne 13",
      "Ligne 14"
    ]
  },
  {
    "id": 296,
    "name": "Garibaldi",
    "lat": 48.853707474772996,
    "lng": 2.3331685744450397,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 297,
    "name": "Porte de Saint-Ouen",
    "lat": 48.87198404006237,
    "lng": 2.3303488642173047,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 298,
    "name": "Guy Môquet",
    "lat": 48.876133671318655,
    "lng": 2.3625762105395043,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 299,
    "name": "La Fourche",
    "lat": 48.86737585755988,
    "lng": 2.3765919610729256,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 300,
    "name": "Liège",
    "lat": 48.8753924246297,
    "lng": 2.3419639712147777,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 301,
    "name": "Varenne",
    "lat": 48.847416426168955,
    "lng": 2.3548083861993674,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 302,
    "name": "Saint-François-Xavier",
    "lat": 48.838348473625075,
    "lng": 2.359975402257602,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 303,
    "name": "Gaîté",
    "lat": 48.86144080979464,
    "lng": 2.3396395668673313,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 304,
    "name": "Pernety",
    "lat": 48.862646952157135,
    "lng": 2.36670133573912,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 305,
    "name": "Plaisance",
    "lat": 48.85920152131333,
    "lng": 2.3480579193251505,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 306,
    "name": "Porte de Vanves",
    "lat": 48.863904312358486,
    "lng": 2.3687936178377695,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 307,
    "name": "Malakoff-Plateau de Vanves",
    "lat": 48.83964727283867,
    "lng": 2.3474608084883135,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 308,
    "name": "Malakoff-Rue Étienne Dolet",
    "lat": 48.85410309134187,
    "lng": 2.3637738611618673,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 309,
    "name": "Châtillon-Montrouge",
    "lat": 48.84494590642087,
    "lng": 2.3470014056881956,
    "lines": [
      "Ligne 13"
    ]
  },
  {
    "id": 310,
    "name": "Saint-Denis-Pleyel",
    "lat": 48.84738511264883,
    "lng": 2.3513146284799786,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 311,
    "name": "Saint-Ouen",
    "lat": 48.83338442081712,
    "lng": 2.3635308237944543,
    "lines": [
      "Ligne 14",
      "RER C"
    ]
  },
  {
    "id": 312,
    "name": "Pont Cardinet",
    "lat": 48.863495739222756,
    "lng": 2.351391763311799,
    "lines": [
      "Ligne 14",
      "Ligne L"
    ]
  },
  {
    "id": 313,
    "name": "Cour Saint-Émilion",
    "lat": 48.8375419737895,
    "lng": 2.3305207622517035,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 314,
    "name": "Bibliothèque F. Mitterrand",
    "lat": 48.88098154192001,
    "lng": 2.3597671451962845,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 315,
    "name": "Olympiades",
    "lat": 48.85258586077568,
    "lng": 2.3272202763321834,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 316,
    "name": "Hôpital Bicêtre",
    "lat": 48.83356930993089,
    "lng": 2.3408958020754707,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 317,
    "name": "Villejuif-Gustave Roussy",
    "lat": 48.845730634170124,
    "lng": 2.3420570374199605,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 318,
    "name": "L'Haÿ-les-Roses",
    "lat": 48.83853843457398,
    "lng": 2.354884824963947,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 319,
    "name": "Chevilly-Larue",
    "lat": 48.86605031713597,
    "lng": 2.340483541655862,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 320,
    "name": "Thiais-Orly",
    "lat": 48.87883837389006,
    "lng": 2.3682155796475817,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 321,
    "name": "Aéroport d'Orly",
    "lat": 48.860382889138045,
    "lng": 2.3307947578223502,
    "lines": [
      "Ligne 14"
    ]
  },
  {
    "id": 322,
    "name": "Cergy-Le Haut",
    "lat": 48.86291613213182,
    "lng": 2.3321708227454248,
    "lines": [
      "RER A",
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 323,
    "name": "Cergy-St-Christophe",
    "lat": 48.87262625500311,
    "lng": 2.362671716497311,
    "lines": [
      "RER A",
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 324,
    "name": "Cergy-Préfecture",
    "lat": 48.846282073442666,
    "lng": 2.3278234883680127,
    "lines": [
      "RER A",
      "Ligne L"
    ]
  },
  {
    "id": 325,
    "name": "Neuville-Université",
    "lat": 48.864085669439355,
    "lng": 2.3762256271878157,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 326,
    "name": "Conflans-Fin d'Oise",
    "lat": 48.86624466883307,
    "lng": 2.3323565188919364,
    "lines": [
      "RER A",
      "Ligne L"
    ]
  },
  {
    "id": 327,
    "name": "Achères-Ville",
    "lat": 48.832446723823836,
    "lng": 2.327802251969984,
    "lines": [
      "RER A",
      "Ligne L"
    ]
  },
  {
    "id": 328,
    "name": "Poissy",
    "lat": 48.85494375644037,
    "lng": 2.3526120466892726,
    "lines": [
      "RER A",
      "Ligne J"
    ]
  },
  {
    "id": 329,
    "name": "Achères Grand Cormier",
    "lat": 48.85941889727262,
    "lng": 2.338429844136501,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 330,
    "name": "Maisons-Laffitte",
    "lat": 48.858966389218885,
    "lng": 2.3763336244844844,
    "lines": [
      "RER A",
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 331,
    "name": "Sartrouville",
    "lat": 48.87931334835743,
    "lng": 2.333003049039656,
    "lines": [
      "RER A",
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 332,
    "name": "Houilles Carrières-sur-Seine",
    "lat": 48.866834262738486,
    "lng": 2.3439821704465045,
    "lines": [
      "RER A",
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 333,
    "name": "Saint-Germain-en-Laye",
    "lat": 48.86758000020113,
    "lng": 2.3376643454841295,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 334,
    "name": "Le Vésinet-Le Pecq",
    "lat": 48.84548032908336,
    "lng": 2.3653394189262924,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 335,
    "name": "Le Vésinet-Centre",
    "lat": 48.88068583459971,
    "lng": 2.3505951527595945,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 336,
    "name": "Chatou-Croissy",
    "lat": 48.88013146944396,
    "lng": 2.3341045881954394,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 337,
    "name": "Rueil-Malmaison",
    "lat": 48.844454752571934,
    "lng": 2.3639464534630465,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 338,
    "name": "Nanterre-Ville",
    "lat": 48.85005430516484,
    "lng": 2.3347904593923623,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 339,
    "name": "Nanterre-Université",
    "lat": 48.83733396324136,
    "lng": 2.3452156553100507,
    "lines": [
      "RER A",
      "Ligne L"
    ]
  },
  {
    "id": 340,
    "name": "Nanterre-Préfecture",
    "lat": 48.86494709955038,
    "lng": 2.3449759210931034,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 341,
    "name": "Auber",
    "lat": 48.850226932401206,
    "lng": 2.3732356827809,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 342,
    "name": "Châtelet-Les Halles",
    "lat": 48.84972986080169,
    "lng": 2.36366959694688,
    "lines": [
      "RER A",
      "RER B"
    ]
  },
  {
    "id": 343,
    "name": "Vincennes",
    "lat": 48.842158848464784,
    "lng": 2.3630304454891564,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 344,
    "name": "Fontenay-sous-Bois",
    "lat": 48.83928950968364,
    "lng": 2.3736903801253013,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 345,
    "name": "Nogent-sur-Marne",
    "lat": 48.867570988530844,
    "lng": 2.3435118423348644,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 346,
    "name": "Joinville-le-Pont",
    "lat": 48.856198762913756,
    "lng": 2.3643594164571278,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 347,
    "name": "Saint-Maur-Créteil",
    "lat": 48.85827845662546,
    "lng": 2.3398947192047084,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 348,
    "name": "Le Parc de Saint-Maur",
    "lat": 48.8364738647395,
    "lng": 2.3546720420278264,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 349,
    "name": "Champigny",
    "lat": 48.8707046485961,
    "lng": 2.3623704832295225,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 350,
    "name": "La Varenne Chennevières",
    "lat": 48.85235090459794,
    "lng": 2.3485625651620756,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 351,
    "name": "Sucy-Bonneuil",
    "lat": 48.86468370519058,
    "lng": 2.3506379454519375,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 352,
    "name": "Boissy-Saint-Léger",
    "lat": 48.87243490372729,
    "lng": 2.330480858552867,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 353,
    "name": "Val de Fontenay",
    "lat": 48.86695184258809,
    "lng": 2.3340659597813067,
    "lines": [
      "RER A",
      "RER E"
    ]
  },
  {
    "id": 354,
    "name": "Neuilly-Plaisance",
    "lat": 48.86624650603169,
    "lng": 2.3341550615234157,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 355,
    "name": "Bry-sur-Marne",
    "lat": 48.85967377048916,
    "lng": 2.3361511305549203,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 356,
    "name": "Noisy-le-Grand Mont d'Est",
    "lat": 48.867678090099965,
    "lng": 2.3659772579653984,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 357,
    "name": "Noisy-Champs",
    "lat": 48.85198942031418,
    "lng": 2.3751622266138592,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 358,
    "name": "Noisiel",
    "lat": 48.86381246137037,
    "lng": 2.3749588453791075,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 359,
    "name": "Lognes",
    "lat": 48.87658261041338,
    "lng": 2.3710519057421653,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 360,
    "name": "Torcy",
    "lat": 48.84044359580354,
    "lng": 2.35073820030707,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 361,
    "name": "Bussy-Saint-Georges",
    "lat": 48.85789766956382,
    "lng": 2.376062826918241,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 362,
    "name": "Val d'Europe",
    "lat": 48.83457673614005,
    "lng": 2.356776369433105,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 363,
    "name": "Marne-la-Vallée Chessy",
    "lat": 48.873961839132285,
    "lng": 2.346322714884221,
    "lines": [
      "RER A"
    ]
  },
  {
    "id": 364,
    "name": "Aéroport Ch. de Gaulle 2-TGV",
    "lat": 48.8380150786453,
    "lng": 2.371823945031483,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 365,
    "name": "Aéroport Ch. de Gaulle 1",
    "lat": 48.871089865642226,
    "lng": 2.3711225960213183,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 366,
    "name": "Parc des Expositions",
    "lat": 48.83683597114051,
    "lng": 2.367367899232301,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 367,
    "name": "Villepinte",
    "lat": 48.83192899283773,
    "lng": 2.333587716082377,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 368,
    "name": "Sevran Beaudottes",
    "lat": 48.85503836634195,
    "lng": 2.3388105400905914,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 369,
    "name": "Mitry-Claye",
    "lat": 48.857703203157875,
    "lng": 2.3592518678705914,
    "lines": [
      "RER B",
      "Ligne K"
    ]
  },
  {
    "id": 370,
    "name": "Villeparisis Mitry-le-Neuf",
    "lat": 48.834745034276956,
    "lng": 2.351452049815071,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 371,
    "name": "Vert-Galant",
    "lat": 48.839226565062454,
    "lng": 2.3485875187246963,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 372,
    "name": "Sevran-Livry",
    "lat": 48.84608916794346,
    "lng": 2.3542065288506766,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 373,
    "name": "Aulnay-sous-Bois",
    "lat": 48.86047444095076,
    "lng": 2.366212723373661,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 374,
    "name": "Le Blanc-Mesnil",
    "lat": 48.86614239900928,
    "lng": 2.3450285251413083,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 375,
    "name": "Drancy",
    "lat": 48.87930819618927,
    "lng": 2.3444638712313,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 376,
    "name": "Le Bourget",
    "lat": 48.83510093091373,
    "lng": 2.3439272872331784,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 377,
    "name": "La Courneuve-Aubervilliers",
    "lat": 48.85311679495311,
    "lng": 2.360602380732469,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 378,
    "name": "La Plaine-Stade de France",
    "lat": 48.84913886111289,
    "lng": 2.3611131735130164,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 379,
    "name": "Saint-Michel-Notre-Dame",
    "lat": 48.83357574492668,
    "lng": 2.3547509009764274,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 380,
    "name": "Luxembourg",
    "lat": 48.877656338699104,
    "lng": 2.3384280867933467,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 381,
    "name": "Port-Royal",
    "lat": 48.865208517018836,
    "lng": 2.370931047458354,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 382,
    "name": "Cité Universitaire",
    "lat": 48.84918173205753,
    "lng": 2.370536411379479,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 383,
    "name": "Gentilly",
    "lat": 48.83440260168333,
    "lng": 2.3767642315243647,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 384,
    "name": "Laplace",
    "lat": 48.83821807550348,
    "lng": 2.366640137655055,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 385,
    "name": "Arcueil-Cachan",
    "lat": 48.86811019426507,
    "lng": 2.3461838761982383,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 386,
    "name": "Bagneux",
    "lat": 48.86054016094362,
    "lng": 2.3467869241221297,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 387,
    "name": "Bourg-la-Reine",
    "lat": 48.85456162559548,
    "lng": 2.3485083475073245,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 388,
    "name": "Sceaux",
    "lat": 48.84622273193386,
    "lng": 2.329761027809481,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 389,
    "name": "Fontenay-aux-Roses",
    "lat": 48.85406011619539,
    "lng": 2.3458749763902933,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 390,
    "name": "Robinson",
    "lat": 48.83861331530101,
    "lng": 2.3692373062442,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 391,
    "name": "Parc de Sceaux",
    "lat": 48.85129194747522,
    "lng": 2.3529586669187497,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 392,
    "name": "La Croix de Berny",
    "lat": 48.834330172378756,
    "lng": 2.339569183853737,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 393,
    "name": "Antony",
    "lat": 48.87458809726531,
    "lng": 2.3758195570704705,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 394,
    "name": "Fontaine-Michalon",
    "lat": 48.861557495573585,
    "lng": 2.3692604152334016,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 395,
    "name": "Les Baconnets",
    "lat": 48.87794427808787,
    "lng": 2.3302884099601413,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 396,
    "name": "Massy-Verrières",
    "lat": 48.8629758329078,
    "lng": 2.3526691074851893,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 397,
    "name": "Massy-Palaiseau",
    "lat": 48.835241874725085,
    "lng": 2.3529664744552408,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 398,
    "name": "Palaiseau",
    "lat": 48.84515677144899,
    "lng": 2.3549136224177567,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 399,
    "name": "Palaiseau-Villebon",
    "lat": 48.849447142087435,
    "lng": 2.362766832884622,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 400,
    "name": "Lozère",
    "lat": 48.84218109913339,
    "lng": 2.3681252006967823,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 401,
    "name": "Le Guichet",
    "lat": 48.87503783393879,
    "lng": 2.344247288097781,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 402,
    "name": "Orsay-Ville",
    "lat": 48.86818402679446,
    "lng": 2.373530368546569,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 403,
    "name": "Bures-sur-Yvette",
    "lat": 48.87578218555648,
    "lng": 2.3651959035091497,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 404,
    "name": "La Hacquinière",
    "lat": 48.8588609452525,
    "lng": 2.3310746735732453,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 405,
    "name": "Gif-sur-Yvette",
    "lat": 48.857379593636296,
    "lng": 2.372629488846488,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 406,
    "name": "Courcelle-sur-Yvette",
    "lat": 48.86680749730884,
    "lng": 2.3696852342661705,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 407,
    "name": "Saint-Rémy-lès-Chevreuse",
    "lat": 48.87364143720032,
    "lng": 2.3714380364221297,
    "lines": [
      "RER B"
    ]
  },
  {
    "id": 408,
    "name": "Pontoise",
    "lat": 48.85362642722925,
    "lng": 2.3406005000383536,
    "lines": [
      "RER C",
      "Ligne H",
      "Ligne J"
    ]
  },
  {
    "id": 409,
    "name": "Saint-Ouen l'Aumône",
    "lat": 48.85915408718454,
    "lng": 2.346356215610198,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 410,
    "name": "Saint-Ouen l'Aumône Liesse",
    "lat": 48.86159429978859,
    "lng": 2.335320440367718,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 411,
    "name": "Pierrelaye",
    "lat": 48.87166586366184,
    "lng": 2.3758147350712155,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 412,
    "name": "Montigny Beauchamp",
    "lat": 48.86567706980816,
    "lng": 2.332421481904572,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 413,
    "name": "Franconville Le Plessis-Bouchard",
    "lat": 48.87137602420837,
    "lng": 2.3629426667145843,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 414,
    "name": "Cernay",
    "lat": 48.849225469868074,
    "lng": 2.3325507981439673,
    "lines": [
      "RER C",
      "Ligne H"
    ]
  },
  {
    "id": 415,
    "name": "Ermont Eaubonne",
    "lat": 48.84238239359048,
    "lng": 2.3384580125676555,
    "lines": [
      "RER C",
      "Ligne H",
      "Ligne J"
    ]
  },
  {
    "id": 416,
    "name": "Saint-Gratien",
    "lat": 48.842879244515686,
    "lng": 2.349281383715473,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 417,
    "name": "Épinay sur Seine",
    "lat": 48.867489836938525,
    "lng": 2.3330476541948557,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 418,
    "name": "Gennevilliers",
    "lat": 48.838090275520955,
    "lng": 2.3770160050196503,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 419,
    "name": "Les Grésillons",
    "lat": 48.87516783035086,
    "lng": 2.3693736715348854,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 420,
    "name": "Pereire Levallois",
    "lat": 48.83543890930928,
    "lng": 2.329792818649687,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 421,
    "name": "Neuilly Porte Maillot",
    "lat": 48.84151426809078,
    "lng": 2.3577753805455868,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 422,
    "name": "Avenue Foch",
    "lat": 48.87095170413918,
    "lng": 2.351362216071738,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 423,
    "name": "Avenue Henri Martin",
    "lat": 48.86570045570549,
    "lng": 2.356510460464002,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 424,
    "name": "Boulainvilliers",
    "lat": 48.85897548175795,
    "lng": 2.3747126916887806,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 425,
    "name": "Avenue du Pdt Kennedy",
    "lat": 48.86487553768655,
    "lng": 2.3742057944234665,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 426,
    "name": "Versailles Château Rive Gauche",
    "lat": 48.83248692527489,
    "lng": 2.3603735096399574,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 427,
    "name": "Porchefontaine",
    "lat": 48.86742529486731,
    "lng": 2.37356231036473,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 428,
    "name": "Saint-Quentin en Yvelines",
    "lat": 48.86781321849983,
    "lng": 2.353351304364271,
    "lines": [
      "RER C",
      "Ligne N"
    ]
  },
  {
    "id": 429,
    "name": "Saint-Cyr",
    "lat": 48.86553036465179,
    "lng": 2.371952072111921,
    "lines": [
      "RER C",
      "Ligne N",
      "Ligne U"
    ]
  },
  {
    "id": 430,
    "name": "Versailles Chantiers",
    "lat": 48.85428535636234,
    "lng": 2.3390429343599712,
    "lines": [
      "RER C",
      "Ligne N",
      "Ligne U",
      "Ligne V"
    ]
  },
  {
    "id": 431,
    "name": "Viroflay Rive Gauche",
    "lat": 48.83402164295367,
    "lng": 2.3770914290151746,
    "lines": [
      "RER C",
      "Ligne N"
    ]
  },
  {
    "id": 432,
    "name": "Chaville Vélizy",
    "lat": 48.8342997744751,
    "lng": 2.353942330060447,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 433,
    "name": "Meudon Val Fleury",
    "lat": 48.86546889789999,
    "lng": 2.3543697383047384,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 434,
    "name": "Issy",
    "lat": 48.843707259676705,
    "lng": 2.3407565993272783,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 435,
    "name": "Issy Val de Seine",
    "lat": 48.8499798441328,
    "lng": 2.368863544209133,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 436,
    "name": "Pont du Garigliano",
    "lat": 48.85153898705966,
    "lng": 2.330093619183277,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 437,
    "name": "Javel",
    "lat": 48.84323403585871,
    "lng": 2.377031347409294,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 438,
    "name": "Champ de Mars Tour Eiffel",
    "lat": 48.86400040767284,
    "lng": 2.3682403283517894,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 439,
    "name": "Pont de l'Alma",
    "lat": 48.87782312550001,
    "lng": 2.3599308571225386,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 440,
    "name": "Musée d'Orsay",
    "lat": 48.861497682792056,
    "lng": 2.3455783851708953,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 441,
    "name": "Saint-Michel Notre-Dame",
    "lat": 48.850715517447505,
    "lng": 2.3691170731993663,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 442,
    "name": "Paris Austerlitz",
    "lat": 48.880661771026844,
    "lng": 2.3474673810166284,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 443,
    "name": "Bibliothèque François Mitterrand",
    "lat": 48.87586358636334,
    "lng": 2.3662650290390923,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 444,
    "name": "Ivry sur Seine",
    "lat": 48.85629074327462,
    "lng": 2.3633254278250266,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 445,
    "name": "Vitry sur Seine",
    "lat": 48.86965302987532,
    "lng": 2.3718054972304294,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 446,
    "name": "Les Ardoines",
    "lat": 48.83413756740818,
    "lng": 2.3423093044728662,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 447,
    "name": "Choisy le Roi",
    "lat": 48.83920852935115,
    "lng": 2.355256060617121,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 448,
    "name": "Villeneuve le Roi",
    "lat": 48.86527670190618,
    "lng": 2.3369460452975943,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 449,
    "name": "Ablon",
    "lat": 48.85673811884186,
    "lng": 2.3651327531784005,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 450,
    "name": "Athis Mons",
    "lat": 48.855367526335954,
    "lng": 2.366311086440274,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 451,
    "name": "Juvisy",
    "lat": 48.863245638205555,
    "lng": 2.344066893982188,
    "lines": [
      "RER C",
      "RER D"
    ]
  },
  {
    "id": 452,
    "name": "Les Saules",
    "lat": 48.874715777722926,
    "lng": 2.374075288956956,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 453,
    "name": "Orly Ville",
    "lat": 48.86204261762675,
    "lng": 2.367313745041529,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 454,
    "name": "Pont de Rungis Aéroport d'Orly",
    "lat": 48.84513582786268,
    "lng": 2.3457317745153947,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 455,
    "name": "Rungis La Fraternelle",
    "lat": 48.87789564263494,
    "lng": 2.3695482562236605,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 456,
    "name": "Chemin d'Antony",
    "lat": 48.87945314055263,
    "lng": 2.337170057729086,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 457,
    "name": "Massy Verrières",
    "lat": 48.86604324411257,
    "lng": 2.3506592913488342,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 458,
    "name": "Massy Palaiseau",
    "lat": 48.83309115808089,
    "lng": 2.3545288843296817,
    "lines": [
      "RER C",
      "Ligne V"
    ]
  },
  {
    "id": 459,
    "name": "Savigny sur Orge",
    "lat": 48.86305379529502,
    "lng": 2.362582632161708,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 460,
    "name": "Épinay sur Orge",
    "lat": 48.87634123681872,
    "lng": 2.32907574833701,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 461,
    "name": "Sainte-Geneviève des Bois",
    "lat": 48.8631709310858,
    "lng": 2.3719278636798564,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 462,
    "name": "Saint-Michel sur Orge",
    "lat": 48.86982894410971,
    "lng": 2.3527041756709046,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 463,
    "name": "Brétigny",
    "lat": 48.8394103089431,
    "lng": 2.3728958132941327,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 464,
    "name": "Marolles en Hurepoix",
    "lat": 48.85400892491982,
    "lng": 2.332171632413219,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 465,
    "name": "Bouray",
    "lat": 48.8384069653838,
    "lng": 2.346899069099945,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 466,
    "name": "Lardy",
    "lat": 48.87696184478216,
    "lng": 2.3463609080533026,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 467,
    "name": "Chamarande",
    "lat": 48.86169048738261,
    "lng": 2.3500009614328983,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 468,
    "name": "Étréchy",
    "lat": 48.87763385341148,
    "lng": 2.3540377070871923,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 469,
    "name": "Étampes",
    "lat": 48.83857025809004,
    "lng": 2.3404095748903275,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 470,
    "name": "Saint-Martin d'Étampes",
    "lat": 48.87423894395822,
    "lng": 2.329540659920266,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 471,
    "name": "La Norville Saint-Germain lès Arpajon",
    "lat": 48.83620010036417,
    "lng": 2.3623037006779346,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 472,
    "name": "Arpajon",
    "lat": 48.87033360386122,
    "lng": 2.340954464395565,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 473,
    "name": "Égly",
    "lat": 48.87410150531657,
    "lng": 2.3566215144899463,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 474,
    "name": "Breuillet Bruyères le Châtel",
    "lat": 48.86584987719364,
    "lng": 2.33074257924154,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 475,
    "name": "Breuillet Village",
    "lat": 48.849351627592554,
    "lng": 2.339068080217722,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 476,
    "name": "Saint-Chéron",
    "lat": 48.839762613583595,
    "lng": 2.3744496562843187,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 477,
    "name": "Sermaise",
    "lat": 48.87664711177485,
    "lng": 2.3337059912857305,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 478,
    "name": "Dourdan",
    "lat": 48.85664734564188,
    "lng": 2.355142652590096,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 479,
    "name": "Dourdan la Forêt",
    "lat": 48.831904299933505,
    "lng": 2.3702971105166797,
    "lines": [
      "RER C"
    ]
  },
  {
    "id": 480,
    "name": "Creil",
    "lat": 48.88036173223733,
    "lng": 2.338419740576157,
    "lines": [
      "RER D",
      "Ligne H"
    ]
  },
  {
    "id": 481,
    "name": "Chantilly Gouvieux",
    "lat": 48.88027483969019,
    "lng": 2.330626433906971,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 482,
    "name": "Orry la Ville Coye la Forêt",
    "lat": 48.8715802871993,
    "lng": 2.348260393539463,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 483,
    "name": "La Borne Blanche",
    "lat": 48.840563397389964,
    "lng": 2.3596449889404316,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 484,
    "name": "Survilliers Fosses",
    "lat": 48.83734134342894,
    "lng": 2.330972197108909,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 485,
    "name": "Louvres",
    "lat": 48.85520612430857,
    "lng": 2.3496211400671876,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 486,
    "name": "Les Noues",
    "lat": 48.85372100316143,
    "lng": 2.3589429699250632,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 487,
    "name": "Goussainville",
    "lat": 48.870970734112184,
    "lng": 2.358226166439602,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 488,
    "name": "Villiers le Bel Gonesse Arnouville",
    "lat": 48.877658468442014,
    "lng": 2.366493049186134,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 489,
    "name": "Garges Sarcelles",
    "lat": 48.8727509212178,
    "lng": 2.34918288093951,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 490,
    "name": "Pierrefitte Stains",
    "lat": 48.87157934121998,
    "lng": 2.3409847601129994,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 491,
    "name": "Saint-Denis",
    "lat": 48.84428087501659,
    "lng": 2.345754099474738,
    "lines": [
      "RER D",
      "Ligne H"
    ]
  },
  {
    "id": 492,
    "name": "Stade de France Saint-Denis",
    "lat": 48.87218326375338,
    "lng": 2.355101685981256,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 493,
    "name": "Paris Gare du Nord",
    "lat": 48.871962057455555,
    "lng": 2.3305818204229336,
    "lines": [
      "RER D",
      "Ligne H",
      "Ligne K"
    ]
  },
  {
    "id": 494,
    "name": "Châtelet Les Halles",
    "lat": 48.86004447079888,
    "lng": 2.3594390147923385,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 495,
    "name": "Paris Gare de Lyon",
    "lat": 48.87273536416971,
    "lng": 2.3455930823958426,
    "lines": [
      "RER D",
      "Ligne R"
    ]
  },
  {
    "id": 496,
    "name": "Maisons Alfort Alfortville",
    "lat": 48.843348014031655,
    "lng": 2.3543896058984286,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 497,
    "name": "Le Vert de Maisons",
    "lat": 48.87051906403733,
    "lng": 2.3373905075915777,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 498,
    "name": "Créteil Pompadour",
    "lat": 48.83253562583545,
    "lng": 2.354789051370812,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 499,
    "name": "Villeneuve Triage",
    "lat": 48.862267591573655,
    "lng": 2.3489366903801674,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 500,
    "name": "Villeneuve Saint-Georges",
    "lat": 48.87804865467265,
    "lng": 2.34969835696228,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 501,
    "name": "Montgeron Crosne",
    "lat": 48.86495014703051,
    "lng": 2.34526611729683,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 502,
    "name": "Yerres",
    "lat": 48.840169704680044,
    "lng": 2.3274450315018864,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 503,
    "name": "Brunoy",
    "lat": 48.85612621066948,
    "lng": 2.364254799530198,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 504,
    "name": "Boussy Saint-Antoine",
    "lat": 48.85211736510242,
    "lng": 2.334028588020541,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 505,
    "name": "Combs la Ville Quincy",
    "lat": 48.8717367576439,
    "lng": 2.3315367682318087,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 506,
    "name": "Lieusaint Moissy",
    "lat": 48.858116505248546,
    "lng": 2.3638222987524578,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 507,
    "name": "Savigny le Temple Nandy",
    "lat": 48.84908832105154,
    "lng": 2.3724217580171008,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 508,
    "name": "Cesson",
    "lat": 48.85889191905228,
    "lng": 2.3422947817015767,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 509,
    "name": "Le Mée sur Seine",
    "lat": 48.84007673969291,
    "lng": 2.370999242527081,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 510,
    "name": "Melun",
    "lat": 48.87337268219119,
    "lng": 2.3553329729982333,
    "lines": [
      "RER D",
      "Ligne R"
    ]
  },
  {
    "id": 511,
    "name": "Vigneux sur Seine",
    "lat": 48.86741433861296,
    "lng": 2.3743584667953246,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 512,
    "name": "Viry Châtillon",
    "lat": 48.847686674212426,
    "lng": 2.361183028279979,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 513,
    "name": "Ris Orangis",
    "lat": 48.84040259573254,
    "lng": 2.3733820113019943,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 514,
    "name": "Grand Bourg",
    "lat": 48.87740984217842,
    "lng": 2.3700831211632822,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 515,
    "name": "Évry Val de Seine",
    "lat": 48.874331695897006,
    "lng": 2.3351792986067483,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 516,
    "name": "Corbeil Essonnes",
    "lat": 48.84682559374352,
    "lng": 2.3679352847453132,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 517,
    "name": "Essonnes Robinson",
    "lat": 48.87030908234571,
    "lng": 2.3770391563434266,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 518,
    "name": "Villabé",
    "lat": 48.84324355283841,
    "lng": 2.3411710278068507,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 519,
    "name": "Le Plessis Chenet",
    "lat": 48.877864222655205,
    "lng": 2.3687954500350163,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 520,
    "name": "Le Coudray Montceaux",
    "lat": 48.845031712913524,
    "lng": 2.327725674654955,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 521,
    "name": "Ponthierry Pringy",
    "lat": 48.87510369332326,
    "lng": 2.3523217565633687,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 522,
    "name": "Boissise le Roi",
    "lat": 48.88003359388983,
    "lng": 2.343297004084431,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 523,
    "name": "Vosves",
    "lat": 48.86409276289252,
    "lng": 2.35160504154093,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 524,
    "name": "Grigny Centre",
    "lat": 48.87488907744598,
    "lng": 2.345077662062458,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 525,
    "name": "Orangis Bois de l'Épine",
    "lat": 48.84702293300992,
    "lng": 2.360712668286317,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 526,
    "name": "Évry Courcouronnes",
    "lat": 48.8739611893669,
    "lng": 2.3308809586380157,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 527,
    "name": "Le Bras de Fer Évry Génopole",
    "lat": 48.849984448162,
    "lng": 2.3346795151758517,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 528,
    "name": "Moulin Galant",
    "lat": 48.86079830039806,
    "lng": 2.3713675622269315,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 529,
    "name": "Mennecy",
    "lat": 48.83876083841293,
    "lng": 2.369202803495335,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 530,
    "name": "Ballancourt",
    "lat": 48.83504435502837,
    "lng": 2.363718391881554,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 531,
    "name": "La Ferté Alais",
    "lat": 48.84866277122786,
    "lng": 2.3404699291764532,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 532,
    "name": "Boutigny",
    "lat": 48.847061452945965,
    "lng": 2.3301904366375537,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 533,
    "name": "Maisse",
    "lat": 48.88154514435222,
    "lng": 2.345358994150745,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 534,
    "name": "Buno Gironville",
    "lat": 48.835113137687486,
    "lng": 2.374364575673951,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 535,
    "name": "Boigneville",
    "lat": 48.87264197739269,
    "lng": 2.3559732165314733,
    "lines": [
      "RER D"
    ]
  },
  {
    "id": 536,
    "name": "Nanterre-la-Folie",
    "lat": 48.85256549370662,
    "lng": 2.3547894847993356,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 537,
    "name": "La Défense Grande Arche",
    "lat": 48.865292665644425,
    "lng": 2.369886039100119,
    "lines": [
      "RER E",
      "Ligne U"
    ]
  },
  {
    "id": 538,
    "name": "Neuilly-Porte Maillot Palais des Congrès",
    "lat": 48.833965401249024,
    "lng": 2.336531494414756,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 539,
    "name": "Haussmann Gare Saint-Lazare",
    "lat": 48.845250228973086,
    "lng": 2.3307032181952203,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 540,
    "name": "Magenta Gare du Nord",
    "lat": 48.86991898905894,
    "lng": 2.3765670353925143,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 541,
    "name": "Rosa Parks",
    "lat": 48.87448467698234,
    "lng": 2.343056739657123,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 542,
    "name": "Pantin",
    "lat": 48.85424032348368,
    "lng": 2.341652263229253,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 543,
    "name": "Noisy le Sec",
    "lat": 48.87262806989154,
    "lng": 2.332661004378869,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 544,
    "name": "Bondy",
    "lat": 48.873812552245944,
    "lng": 2.3707586280378874,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 545,
    "name": "Le Raincy Villemomble Montfermeil",
    "lat": 48.84386502139739,
    "lng": 2.364654006366223,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 546,
    "name": "Gagny",
    "lat": 48.876177720137306,
    "lng": 2.338391090259223,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 547,
    "name": "Le Chenay Gagny",
    "lat": 48.85614627530803,
    "lng": 2.375630560228728,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 548,
    "name": "Chelles Gournay",
    "lat": 48.84068239867673,
    "lng": 2.3623098264267273,
    "lines": [
      "RER E",
      "Ligne P"
    ]
  },
  {
    "id": 549,
    "name": "Rosny Bois Perrier",
    "lat": 48.84849355250543,
    "lng": 2.336927780997084,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 550,
    "name": "Rosny sous Bois",
    "lat": 48.87070500219857,
    "lng": 2.3702410572712767,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 551,
    "name": "Nogent Le Perreux",
    "lat": 48.851465688352654,
    "lng": 2.3415780347066537,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 552,
    "name": "Les Boullereaux Champigny",
    "lat": 48.83851746508828,
    "lng": 2.331074263007438,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 553,
    "name": "Villiers sur Marne Le Plessis Trévise",
    "lat": 48.84370866601357,
    "lng": 2.376027665109133,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 554,
    "name": "Les Yvris Noisy le Grand",
    "lat": 48.84580435041018,
    "lng": 2.3755222202905575,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 555,
    "name": "Émerainville Pontault Combault",
    "lat": 48.87852351408146,
    "lng": 2.327281694294604,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 556,
    "name": "Roissy en Brie",
    "lat": 48.84408689777514,
    "lng": 2.376494363053083,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 557,
    "name": "Ozoir la Ferrière",
    "lat": 48.874232938031824,
    "lng": 2.376770839756932,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 558,
    "name": "Gretz Armainvilliers",
    "lat": 48.85444096077716,
    "lng": 2.3468354086910694,
    "lines": [
      "RER E"
    ]
  },
  {
    "id": 559,
    "name": "Tournan-en-Brie",
    "lat": 48.86128433814834,
    "lng": 2.372629337674615,
    "lines": [
      "RER E",
      "Ligne P"
    ]
  },
  {
    "id": 560,
    "name": "Épinay Villetaneuse",
    "lat": 48.857252146251014,
    "lng": 2.3323342275348695,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 561,
    "name": "Deuil Montmagny",
    "lat": 48.84425568644331,
    "lng": 2.3545704340367952,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 562,
    "name": "Groslay",
    "lat": 48.87554779908306,
    "lng": 2.376176860006541,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 563,
    "name": "Sarcelles Saint-Brice",
    "lat": 48.83201590989282,
    "lng": 2.3682213063213493,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 564,
    "name": "Écouen Ézanville",
    "lat": 48.8425243446911,
    "lng": 2.3513355158034956,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 565,
    "name": "Domont",
    "lat": 48.8719869182508,
    "lng": 2.3340676387538974,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 566,
    "name": "Bouffémont Moisselles",
    "lat": 48.86624488602619,
    "lng": 2.3504375138600806,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 567,
    "name": "Montsoult Maffliers",
    "lat": 48.87189560111887,
    "lng": 2.3343855641060665,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 568,
    "name": "Villaines",
    "lat": 48.83764565116649,
    "lng": 2.3371293651271094,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 569,
    "name": "Belloy Saint-Martin",
    "lat": 48.859294473460096,
    "lng": 2.362151401081248,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 570,
    "name": "Viarmes",
    "lat": 48.856583240683115,
    "lng": 2.33534722712815,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 571,
    "name": "Seugy",
    "lat": 48.86038295641885,
    "lng": 2.3274902134224202,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 572,
    "name": "Luzarches",
    "lat": 48.83648063420338,
    "lng": 2.3689927193567972,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 573,
    "name": "Presles Courcelles",
    "lat": 48.86010665070473,
    "lng": 2.3563937876833294,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 574,
    "name": "Nointel Mours",
    "lat": 48.86686639156303,
    "lng": 2.36833946527459,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 575,
    "name": "Persan Beaumont",
    "lat": 48.84336271648252,
    "lng": 2.3563189818538737,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 576,
    "name": "La Barre Ormesson",
    "lat": 48.849096144416116,
    "lng": 2.329431030350819,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 577,
    "name": "Enghien les Bains",
    "lat": 48.84935958371364,
    "lng": 2.3398689910559454,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 578,
    "name": "Champ de Courses d'Enghien",
    "lat": 48.84993149362172,
    "lng": 2.3316790449531104,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 579,
    "name": "Ermont Halte",
    "lat": 48.84306954562398,
    "lng": 2.36238913743288,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 580,
    "name": "Gros Noyer Saint-Prix",
    "lat": 48.86162267533787,
    "lng": 2.356552037511496,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 581,
    "name": "Saint-Leu la Forêt",
    "lat": 48.87742305488604,
    "lng": 2.345892887653051,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 582,
    "name": "Taverny",
    "lat": 48.856234097773395,
    "lng": 2.3516310877405053,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 583,
    "name": "Bessancourt",
    "lat": 48.86412295641453,
    "lng": 2.3499115731652487,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 584,
    "name": "Frépillon",
    "lat": 48.879914155022924,
    "lng": 2.3716883011471697,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 585,
    "name": "Méry sur Oise",
    "lat": 48.84803791945393,
    "lng": 2.333332123818231,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 586,
    "name": "Mériel",
    "lat": 48.88019300077724,
    "lng": 2.328063110361896,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 587,
    "name": "Valmondois",
    "lat": 48.85711073725895,
    "lng": 2.3457831537895104,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 588,
    "name": "L'Isle-Adam Parmain",
    "lat": 48.85929423910533,
    "lng": 2.3339611631111272,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 589,
    "name": "Champagne sur Oise",
    "lat": 48.842742245455504,
    "lng": 2.3335476814671634,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 590,
    "name": "Bruyères sur Oise",
    "lat": 48.86250804535201,
    "lng": 2.3705502756826378,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 591,
    "name": "Boran sur Oise",
    "lat": 48.83824949644709,
    "lng": 2.341891219962685,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 592,
    "name": "Précy sur Oise",
    "lat": 48.872029530474315,
    "lng": 2.3764266087281527,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 593,
    "name": "Saint-Leu d'Esserent",
    "lat": 48.859189569979286,
    "lng": 2.3495003149823166,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 594,
    "name": "Auvers sur Oise",
    "lat": 48.83261165162075,
    "lng": 2.373915102162746,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 595,
    "name": "Chaponval",
    "lat": 48.845790141173154,
    "lng": 2.3363232748992733,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 596,
    "name": "Pont Petit",
    "lat": 48.86839118664727,
    "lng": 2.3729787899427426,
    "lines": [
      "Ligne H"
    ]
  },
  {
    "id": 597,
    "name": "Paris Saint-Lazare",
    "lat": 48.85086522377459,
    "lng": 2.3490638175910594,
    "lines": [
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 598,
    "name": "Asnières sur Seine",
    "lat": 48.874588132343035,
    "lng": 2.3354192635626876,
    "lines": [
      "Ligne J",
      "Ligne L"
    ]
  },
  {
    "id": 599,
    "name": "Bois Colombes",
    "lat": 48.875514652402956,
    "lng": 2.3575810973025573,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 600,
    "name": "Colombes",
    "lat": 48.834674428180776,
    "lng": 2.3427212751423205,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 601,
    "name": "Le Stade",
    "lat": 48.863023746797936,
    "lng": 2.3519845445176033,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 602,
    "name": "Argenteuil",
    "lat": 48.8490194128989,
    "lng": 2.352927895750641,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 603,
    "name": "Val d'Argenteuil",
    "lat": 48.88003986710972,
    "lng": 2.364271477027293,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 604,
    "name": "Cormeilles en Parisis",
    "lat": 48.880178153491435,
    "lng": 2.333471674610094,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 605,
    "name": "La Frette Montigny",
    "lat": 48.85704029566682,
    "lng": 2.3462274105224235,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 606,
    "name": "Herblay sur Seine",
    "lat": 48.831784493601695,
    "lng": 2.347497986419473,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 607,
    "name": "Conflans Sainte-Honorine",
    "lat": 48.85988193287866,
    "lng": 2.359834909828452,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 608,
    "name": "Neuville Université",
    "lat": 48.835193988105075,
    "lng": 2.3298300234726415,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 609,
    "name": "Cergy Préfecture",
    "lat": 48.84183475651032,
    "lng": 2.3295024463934104,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 610,
    "name": "Éragny Neuville",
    "lat": 48.839896061070625,
    "lng": 2.351894069471945,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 611,
    "name": "Saint-Ouen l'Aumône Quartier de l'Église",
    "lat": 48.87101274652879,
    "lng": 2.359433822780636,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 612,
    "name": "Osny",
    "lat": 48.864141947308326,
    "lng": 2.3374114273203106,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 613,
    "name": "Boissy l'Aillerie",
    "lat": 48.834858040605134,
    "lng": 2.3723057658086164,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 614,
    "name": "Montgeroult Courcelles",
    "lat": 48.83632747642593,
    "lng": 2.3700478249731245,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 615,
    "name": "Us",
    "lat": 48.84020677918578,
    "lng": 2.3457236255092266,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 616,
    "name": "Santeuil Le Perchey",
    "lat": 48.85101071193763,
    "lng": 2.370946166730095,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 617,
    "name": "Chars",
    "lat": 48.86751446903242,
    "lng": 2.3360253096958052,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 618,
    "name": "Lavilletertre",
    "lat": 48.83951280684765,
    "lng": 2.3602807785724895,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 619,
    "name": "Liancourt Saint-Pierre",
    "lat": 48.86200326895341,
    "lng": 2.3582596089333463,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 620,
    "name": "Chaumont en Vexin",
    "lat": 48.86625978926625,
    "lng": 2.3754286384472096,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 621,
    "name": "Trie-Château",
    "lat": 48.83997350146067,
    "lng": 2.373984497511579,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 622,
    "name": "Gisors",
    "lat": 48.83252325066037,
    "lng": 2.3751463345908874,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 623,
    "name": "Sannois",
    "lat": 48.835390282519334,
    "lng": 2.3294467787751625,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 624,
    "name": "Villennes sur Seine",
    "lat": 48.84854956007843,
    "lng": 2.3565773340790375,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 625,
    "name": "Vernouillet Verneuil",
    "lat": 48.85897726151343,
    "lng": 2.3625307168616287,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 626,
    "name": "Les Clairières de Verneuil",
    "lat": 48.864522396445004,
    "lng": 2.3693799587903213,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 627,
    "name": "Les Mureaux",
    "lat": 48.86883108028004,
    "lng": 2.333929813178871,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 628,
    "name": "Aubergenville Élisabethville",
    "lat": 48.83398021949234,
    "lng": 2.364009376305424,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 629,
    "name": "Épône Mézières",
    "lat": 48.83609529083829,
    "lng": 2.3714707138565365,
    "lines": [
      "Ligne J",
      "Ligne N"
    ]
  },
  {
    "id": 630,
    "name": "Mantes Station",
    "lat": 48.83666513072761,
    "lng": 2.3676968154634803,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 631,
    "name": "Mantes-la-Jolie",
    "lat": 48.866180048353165,
    "lng": 2.3326469311079086,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 632,
    "name": "Rosny sur Seine",
    "lat": 48.85054780872214,
    "lng": 2.346485321802973,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 633,
    "name": "Bonnières",
    "lat": 48.87316247282973,
    "lng": 2.3457402566709074,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 634,
    "name": "Vernon-Giverny",
    "lat": 48.84272167059482,
    "lng": 2.368875810224576,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 635,
    "name": "Conflans Fin d'Oise",
    "lat": 48.83922516135821,
    "lng": 2.328075299937626,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 636,
    "name": "Maurecourt",
    "lat": 48.83992028412048,
    "lng": 2.33099560137046,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 637,
    "name": "Andrésy",
    "lat": 48.86104050839389,
    "lng": 2.374882782680226,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 638,
    "name": "Chanteloup les Vignes",
    "lat": 48.87816645983825,
    "lng": 2.3679507288020125,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 639,
    "name": "Triel sur Seine",
    "lat": 48.87152698757523,
    "lng": 2.3696785481231677,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 640,
    "name": "Vaux sur Seine",
    "lat": 48.832798810786,
    "lng": 2.3718586205617367,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 641,
    "name": "Thun le Paradis",
    "lat": 48.88114572826808,
    "lng": 2.3651753267164928,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 642,
    "name": "Meulan Hardricourt",
    "lat": 48.835917976018514,
    "lng": 2.374647586958358,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 643,
    "name": "Juziers",
    "lat": 48.873456176842055,
    "lng": 2.362711145401871,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 644,
    "name": "Gargenville",
    "lat": 48.868406534974284,
    "lng": 2.3584173520788823,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 645,
    "name": "Issou Porcheville",
    "lat": 48.83529486327516,
    "lng": 2.328104193744529,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 646,
    "name": "Limay",
    "lat": 48.83822082563338,
    "lng": 2.3534018062960125,
    "lines": [
      "Ligne J"
    ]
  },
  {
    "id": 647,
    "name": "Aulnay sous Bois",
    "lat": 48.83907372213542,
    "lng": 2.3618606675785494,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 648,
    "name": "Compans",
    "lat": 48.836228255975655,
    "lng": 2.3489687832585067,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 649,
    "name": "Thieux Nantouillet",
    "lat": 48.83321450767214,
    "lng": 2.3428872106571728,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 650,
    "name": "Dammartin Juilly Saint-Mard",
    "lat": 48.872687928654024,
    "lng": 2.345727298346734,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 651,
    "name": "Le Plessis Belleville",
    "lat": 48.8396243864467,
    "lng": 2.3673192648947943,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 652,
    "name": "Nanteuil le Haudouin",
    "lat": 48.8592793385342,
    "lng": 2.346954929234823,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 653,
    "name": "Ormoy Villers",
    "lat": 48.870191254805654,
    "lng": 2.3463233679967166,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 654,
    "name": "Crépy en Valois",
    "lat": 48.83659338353834,
    "lng": 2.3294189047920546,
    "lines": [
      "Ligne K"
    ]
  },
  {
    "id": 655,
    "name": "Clichy Levallois",
    "lat": 48.87286657102064,
    "lng": 2.332963767789763,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 656,
    "name": "Bécon les Bruyères",
    "lat": 48.83718761251904,
    "lng": 2.346974558491876,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 657,
    "name": "Courbevoie",
    "lat": 48.86020302878176,
    "lng": 2.3718767513628096,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 658,
    "name": "Puteaux",
    "lat": 48.87117196912595,
    "lng": 2.332556164027129,
    "lines": [
      "Ligne L",
      "Ligne U"
    ]
  },
  {
    "id": 659,
    "name": "Suresnes Mont Valérien",
    "lat": 48.86933210087747,
    "lng": 2.3628997276791286,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 660,
    "name": "Le Val d'Or",
    "lat": 48.852027519814854,
    "lng": 2.3296317849934582,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 661,
    "name": "Saint-Cloud",
    "lat": 48.85384562813066,
    "lng": 2.353270570781087,
    "lines": [
      "Ligne L",
      "Ligne U"
    ]
  },
  {
    "id": 662,
    "name": "Sèvres Rive Gauche",
    "lat": 48.84982220482451,
    "lng": 2.3362630111823424,
    "lines": [
      "Ligne L",
      "Ligne N"
    ]
  },
  {
    "id": 663,
    "name": "Chaville Rive Droite",
    "lat": 48.834161363536204,
    "lng": 2.340970052184789,
    "lines": [
      "Ligne L",
      "Ligne U"
    ]
  },
  {
    "id": 664,
    "name": "Viroflay Rive Droite",
    "lat": 48.860393089672954,
    "lng": 2.3607182159782187,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 665,
    "name": "Montreuil",
    "lat": 48.848426143460735,
    "lng": 2.338689992016773,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 666,
    "name": "Versailles Rive Droite",
    "lat": 48.86447041645323,
    "lng": 2.3305919901531116,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 667,
    "name": "Garches Marnes-la-Coquette",
    "lat": 48.87493985086852,
    "lng": 2.3445643504353266,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 668,
    "name": "Vaucresson",
    "lat": 48.84333237993064,
    "lng": 2.336923546105577,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 669,
    "name": "La Celle Saint-Cloud",
    "lat": 48.84689376068109,
    "lng": 2.377121688440046,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 670,
    "name": "Bougival",
    "lat": 48.84934432014327,
    "lng": 2.373194820032368,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 671,
    "name": "Louveciennes",
    "lat": 48.856454050923695,
    "lng": 2.348070476935484,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 672,
    "name": "Marly-le-Roi",
    "lat": 48.84891164635215,
    "lng": 2.3444285581542523,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 673,
    "name": "L'Étang-la-Ville",
    "lat": 48.869337511395855,
    "lng": 2.3576719782227777,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 674,
    "name": "Saint-Nom-la-Bretèche Forêt de Marly",
    "lat": 48.87585540416607,
    "lng": 2.3497059929690796,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 675,
    "name": "Les Vallées",
    "lat": 48.845758766572935,
    "lng": 2.351790386604735,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 676,
    "name": "La Garenne-Colombes",
    "lat": 48.87816947767277,
    "lng": 2.353373294091951,
    "lines": [
      "Ligne L"
    ]
  },
  {
    "id": 677,
    "name": "Paris Montparnasse",
    "lat": 48.85590465268253,
    "lng": 2.3696467869833175,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 678,
    "name": "Vanves Malakoff",
    "lat": 48.84122944376357,
    "lng": 2.362785185097816,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 679,
    "name": "Clamart",
    "lat": 48.83976553641792,
    "lng": 2.36483830287585,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 680,
    "name": "Meudon",
    "lat": 48.83443637586965,
    "lng": 2.3620447828633027,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 681,
    "name": "Bellevue",
    "lat": 48.844968528908204,
    "lng": 2.373177628916632,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 682,
    "name": "Chaville Rive Gauche",
    "lat": 48.85439625450342,
    "lng": 2.345068809510857,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 683,
    "name": "Trappes",
    "lat": 48.85629003390608,
    "lng": 2.3657201446753584,
    "lines": [
      "Ligne N",
      "Ligne U"
    ]
  },
  {
    "id": 684,
    "name": "La Verrière",
    "lat": 48.87986792656543,
    "lng": 2.3717717980661015,
    "lines": [
      "Ligne N",
      "Ligne U"
    ]
  },
  {
    "id": 685,
    "name": "Coignières",
    "lat": 48.83909954109645,
    "lng": 2.330307296249824,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 686,
    "name": "Les Essarts Le Roi",
    "lat": 48.85015247298809,
    "lng": 2.3465087887900733,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 687,
    "name": "Le Perray",
    "lat": 48.8749691852302,
    "lng": 2.332705124502748,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 688,
    "name": "Rambouillet",
    "lat": 48.84554248915036,
    "lng": 2.3272694176902298,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 689,
    "name": "Gazeran",
    "lat": 48.85118718382386,
    "lng": 2.3530447639702925,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 690,
    "name": "Chartres",
    "lat": 48.83889203087538,
    "lng": 2.363704817658099,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 691,
    "name": "Fontenay le Fleury",
    "lat": 48.83455968392359,
    "lng": 2.339396699057213,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 692,
    "name": "Villepreux les Clayes",
    "lat": 48.85754240134404,
    "lng": 2.3579469079225053,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 693,
    "name": "Plaisir les Clayes",
    "lat": 48.84682714095855,
    "lng": 2.375027638044952,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 694,
    "name": "Plaisir Grignon",
    "lat": 48.873798195333954,
    "lng": 2.3405307540947797,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 695,
    "name": "Villiers Neauphle Pontchartrain",
    "lat": 48.844399888052514,
    "lng": 2.369836566597994,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 696,
    "name": "Montfort l'Amaury Méré",
    "lat": 48.8396449682418,
    "lng": 2.372703426238981,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 697,
    "name": "Garancières La Queue",
    "lat": 48.84410809733174,
    "lng": 2.35926162482596,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 698,
    "name": "Orgerus Béhoust",
    "lat": 48.83897923239113,
    "lng": 2.37101746281214,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 699,
    "name": "Tacoignières Richebourg",
    "lat": 48.84531304699332,
    "lng": 2.3409146346349035,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 700,
    "name": "Houdan",
    "lat": 48.8339928883556,
    "lng": 2.3611829618000644,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 701,
    "name": "Marchezais Broué",
    "lat": 48.87542431064437,
    "lng": 2.3707714696194375,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 702,
    "name": "Dreux",
    "lat": 48.83827482086795,
    "lng": 2.3358823631381287,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 703,
    "name": "Beynes",
    "lat": 48.8812986206661,
    "lng": 2.3727421759555742,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 704,
    "name": "Mareil sur Mauldre",
    "lat": 48.85909571566518,
    "lng": 2.3601639422980476,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 705,
    "name": "Maule",
    "lat": 48.87608047473435,
    "lng": 2.371136519278851,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 706,
    "name": "Nézel Aulnay",
    "lat": 48.868583661308676,
    "lng": 2.354791537333106,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 707,
    "name": "Mantes La Jolie",
    "lat": 48.839547421648646,
    "lng": 2.341723774004995,
    "lines": [
      "Ligne N"
    ]
  },
  {
    "id": 708,
    "name": "Paris Est",
    "lat": 48.87255567286396,
    "lng": 2.3433630736937685,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 709,
    "name": "Vaires Torcy",
    "lat": 48.861297943373856,
    "lng": 2.371989303457825,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 710,
    "name": "Lagny Thorigny",
    "lat": 48.870039158945524,
    "lng": 2.36079403343898,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 711,
    "name": "Esbly",
    "lat": 48.86344781548926,
    "lng": 2.341630792791013,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 712,
    "name": "Meaux",
    "lat": 48.863303491712614,
    "lng": 2.3445475903314725,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 713,
    "name": "Trilport",
    "lat": 48.869788244239956,
    "lng": 2.3543368328866894,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 714,
    "name": "Changis Saint-Jean",
    "lat": 48.86288643579196,
    "lng": 2.350742185554666,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 715,
    "name": "La Ferté sous Jouarre",
    "lat": 48.8700974844228,
    "lng": 2.3379253524354673,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 716,
    "name": "Nanteuil Saâcy",
    "lat": 48.85658373119382,
    "lng": 2.3571041140846885,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 717,
    "name": "Nogent l'Artaud Charly",
    "lat": 48.83409742218806,
    "lng": 2.334281280312864,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 718,
    "name": "Chézy sur Marne",
    "lat": 48.86957523926242,
    "lng": 2.32812024138659,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 719,
    "name": "Château Thierry",
    "lat": 48.864650974828095,
    "lng": 2.3509875689814463,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 720,
    "name": "Isles Armentières Congis",
    "lat": 48.87406346376854,
    "lng": 2.3299788798929932,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 721,
    "name": "Lizy sur Ourcq",
    "lat": 48.867621437850794,
    "lng": 2.330184438675393,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 722,
    "name": "Crouy sur Ourcq",
    "lat": 48.83519263208934,
    "lng": 2.34197636896348,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 723,
    "name": "Mareuil sur Ourcq",
    "lat": 48.83635207123889,
    "lng": 2.3484082102753936,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 724,
    "name": "La Ferté Milon",
    "lat": 48.86857420231877,
    "lng": 2.375936006961553,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 725,
    "name": "Marles-en-Brie",
    "lat": 48.86828904302328,
    "lng": 2.354823288687031,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 726,
    "name": "Mortcerf",
    "lat": 48.849629638635264,
    "lng": 2.3350298567146233,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 727,
    "name": "Guérard La Celle sur Morin",
    "lat": 48.8733435624145,
    "lng": 2.3419475285031073,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 728,
    "name": "Faremoutiers Pommeuse",
    "lat": 48.86640123980163,
    "lng": 2.337530169212536,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 729,
    "name": "Mouroux",
    "lat": 48.84365946643491,
    "lng": 2.32906609627713,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 730,
    "name": "Coulommiers",
    "lat": 48.842765428466635,
    "lng": 2.341078693982418,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 731,
    "name": "Verneuil l'Étang",
    "lat": 48.87818810833081,
    "lng": 2.340024808995451,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 732,
    "name": "Mormant",
    "lat": 48.856303126059196,
    "lng": 2.3474780207620474,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 733,
    "name": "Nangis",
    "lat": 48.83256930333806,
    "lng": 2.351524125789154,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 734,
    "name": "Longueville",
    "lat": 48.85460669582828,
    "lng": 2.3562011084926935,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 735,
    "name": "Sainte-Colombe Septveilles",
    "lat": 48.85144662721317,
    "lng": 2.3601434236812544,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 736,
    "name": "Champbenoist Poigny",
    "lat": 48.87141806651945,
    "lng": 2.3659082317227718,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 737,
    "name": "Provins",
    "lat": 48.86212617478457,
    "lng": 2.3571727970193304,
    "lines": [
      "Ligne P"
    ]
  },
  {
    "id": 738,
    "name": "Bois le Roi",
    "lat": 48.86231904537416,
    "lng": 2.328874109992715,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 739,
    "name": "Fontainebleau Avon",
    "lat": 48.83463318263884,
    "lng": 2.3609409417105858,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 740,
    "name": "Thomery",
    "lat": 48.85479453259757,
    "lng": 2.345158501026769,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 741,
    "name": "Moret Veneux les Sablons",
    "lat": 48.85925760199766,
    "lng": 2.373069691593176,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 742,
    "name": "Saint-Mammès",
    "lat": 48.85491216968837,
    "lng": 2.3335291653501797,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 743,
    "name": "Montereau",
    "lat": 48.83191030379859,
    "lng": 2.3386562756227836,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 744,
    "name": "Montigny sur Loing",
    "lat": 48.84359443355072,
    "lng": 2.3334571832859052,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 745,
    "name": "Bourron Marlotte Grez",
    "lat": 48.87810088519462,
    "lng": 2.347671892664161,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 746,
    "name": "Nemours Saint-Pierre",
    "lat": 48.87022474120753,
    "lng": 2.3604598926347533,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 747,
    "name": "Bagneaux sur Loing",
    "lat": 48.858908791232125,
    "lng": 2.3576284973611545,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 748,
    "name": "Souppes Château Landon",
    "lat": 48.84265268095997,
    "lng": 2.3529308073545994,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 749,
    "name": "Dordives",
    "lat": 48.8813045652322,
    "lng": 2.3406971155053706,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 750,
    "name": "Ferrières Fontenay",
    "lat": 48.861467012136416,
    "lng": 2.364655024621599,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 751,
    "name": "Montargis",
    "lat": 48.86178475020413,
    "lng": 2.340878469585146,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 752,
    "name": "Livry sur Seine",
    "lat": 48.832048452653,
    "lng": 2.365422196883164,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 753,
    "name": "Chartrettes",
    "lat": 48.865242133646056,
    "lng": 2.3566062970441415,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 754,
    "name": "Fontaine le Port",
    "lat": 48.86207472030665,
    "lng": 2.339622038360221,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 755,
    "name": "Héricy",
    "lat": 48.85369125651326,
    "lng": 2.327598262136925,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 756,
    "name": "Vulaines sur Seine Samoreau",
    "lat": 48.838624009919386,
    "lng": 2.3613505024383135,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 757,
    "name": "Champagne sur Seine",
    "lat": 48.853110248702414,
    "lng": 2.3493016686832795,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 758,
    "name": "Vernou sur Seine",
    "lat": 48.8398713556783,
    "lng": 2.36839865618702,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 759,
    "name": "La Grande Paroisse",
    "lat": 48.86731214858515,
    "lng": 2.358044044542443,
    "lines": [
      "Ligne R"
    ]
  },
  {
    "id": 760,
    "name": "Suresnes Mont-Valérien",
    "lat": 48.87739762670406,
    "lng": 2.3561268725445275,
    "lines": [
      "Ligne U"
    ]
  },
  {
    "id": 761,
    "name": "Sèvres Ville d'Avray",
    "lat": 48.84405486889131,
    "lng": 2.337955739286677,
    "lines": [
      "Ligne U"
    ]
  },
  {
    "id": 762,
    "name": "Saint-Quentin en Yvelines Montigny le Bretonneux",
    "lat": 48.84435283269629,
    "lng": 2.373003377704031,
    "lines": [
      "Ligne U"
    ]
  },
  {
    "id": 763,
    "name": "Petit Jouy Les Loges",
    "lat": 48.835233998179014,
    "lng": 2.355139995915744,
    "lines": [
      "Ligne V"
    ]
  },
  {
    "id": 764,
    "name": "Jouy-en-Josas",
    "lat": 48.84948561805205,
    "lng": 2.3548884636227987,
    "lines": [
      "Ligne V"
    ]
  },
  {
    "id": 765,
    "name": "Vauboyen",
    "lat": 48.87769457986241,
    "lng": 2.3461079404122764,
    "lines": [
      "Ligne V"
    ]
  },
  {
    "id": 766,
    "name": "Bièvres",
    "lat": 48.87294760125284,
    "lng": 2.361856190919934,
    "lines": [
      "Ligne V"
    ]
  },
  {
    "id": 767,
    "name": "Igny",
    "lat": 48.86684854087113,
    "lng": 2.3404067696793476,
    "lines": [
      "Ligne V"
    ]
  }
];
