export const tripData = [
  {
    date: "2025-10-04",
    dayNumber: 1,
    city: "Zurich → Interlaken",
    hotel: {
      name: "Interlaken Base HQ",
      address: "Centralstrasse 11, Interlaken",
      coords: [46.68467, 7.85519],
      checkIn: "15:00",
      checkOut: "11:00",
      phone: "+41 33 822 2051",
      reservationLink: "https://booking.com/reservation/interlaken-base"
    },
    transport: {
      type: "train",
      from: {
        station: "Zurich Hauptbahnhof",
        address: "Bahnhofplatz, 8001 Zürich",
        coords: [47.3781, 8.5397]
      },
      to: {
        station: "Interlaken Ost",
        address: "Untere Bönigstrasse, 3800 Interlaken",
        coords: [46.69, 7.87]
      },
      depart: "14:04",
      arrive: "16:00",
      duration: "2h",
      operator: "SBB",
      ticketLink: "https://sbb.ch/tickets/need-to-book"
    },
    notes: [
      "NEED TO BOOK - 2hr train journey",
      "Airport to Zurich HB: Take train from Airport",
      "Hotel is 5-minute level walk from Interlaken Ost station"
    ],
    attractions: [
      {
        name: "Old Town (Altstadt)",
        address: "Zürich, Switzerland",
        coords: [47.37, 8.54]
      },
      {
        name: "Bahnhofstrasse",
        address: "Bahnhofstrasse, 8001 Zürich",
        coords: [47.3706, 8.5393]
      }
    ]
  },
  {
    date: "2025-10-05",
    dayNumber: 2,
    city: "Interlaken Day Trips",
    hotel: {
      name: "Interlaken Base HQ",
      address: "Centralstrasse 11, Interlaken",
      coords: [46.68467, 7.85519]
    },
    transport: null,
    notes: [
      "Lauterbrunnen & Isenfluh Cable Car Adventure",
      "Lauterbrunnen to Grindelwald (35 min train)",
      "Explore Grindelwald village"
    ],
    attractions: [
      {
        name: "Lauterbrunnen Station",
        address: "3822 Lauterbrunnen, Switzerland",
        coords: [46.5947, 7.9069]
      },
      {
        name: "Isenfluh",
        address: "3822 Lauterbrunnen, Switzerland",
        coords: [46.6214, 7.8929]
      },
      {
        name: "Grindelwald",
        address: "3818 Grindelwald, Switzerland",
        coords: [46.6253, 8.0339]
      }
    ]
  },
  {
    date: "2025-10-06",
    dayNumber: 3,
    city: "Interlaken Day Trips",
    hotel: {
      name: "Interlaken Base HQ",
      address: "Centralstrasse 11, Interlaken",
      coords: [46.68467, 7.85519]
    },
    transport: null,
    notes: [
      "Jungfraujoch - Top of Europe",
      "Bring warm clothes & sunglasses!",
      "Book tickets online in advance"
    ],
    attractions: [
      {
        name: "Jungfraujoch",
        address: "Jungfraujoch, 3801 Fieschertal, Switzerland",
        coords: [46.5467, 7.9756]
      },
      {
        name: "Mürren Village",
        address: "3825 Mürren, Switzerland",
        coords: [46.5654, 7.8929]
      }
    ]
  },
  {
    date: "2025-10-07",
    dayNumber: 4,
    city: "Interlaken → Milan",
    hotel: {
      name: "Milan Accommodation",
      address: "Viale Zara 108, 20159 Milano",
      coords: [45.4864, 9.2051],
      checkIn: "14:00",
      checkOut: "12:00",
      phone: "+39 02 1234 5678"
    },
    transport: {
      type: "train",
      from: {
        station: "Interlaken Ost",
        address: "Untere Bönigstrasse, 3800 Interlaken",
        coords: [46.69, 7.87]
      },
      to: {
        station: "Milano Centrale",
        address: "Piazza Duca d'Aosta, 1, 20124 Milano",
        coords: [45.48, 9.21]
      },
      depart: "13:29",
      arrive: "16:55",
      duration: "3h 26m",
      operator: "RE 4223 + EuroCity 65",
      ticketLink: "https://trenitalia.com/booking/booked-ec65"
    },
    notes: [
      "BOOKED — RE 4223 + EuroCity 65",
      "2nd class + reserved seats",
      "Change at Spiez (13:48)",
      "Transport to hotel: M3 Yellow: Centrale → Zara (2 stops) + 5 min walk"
    ],
    attractions: [
      {
        name: "Duomo di Milano",
        address: "Piazza del Duomo, 20122 Milano",
        coords: [45.46, 9.19]
      },
      {
        name: "Galleria Vittorio Emanuele II",
        address: "Piazza del Duomo, 20123 Milano",
        coords: [45.4658, 9.1916]
      }
    ]
  },
  {
    date: "2025-10-08",
    dayNumber: 5,
    city: "Milan → Florence",
    hotel: {
      name: "Florence Accommodation",
      address: "Via Generale Dalla Chiesa 1-3, 50132 Firenze",
      coords: [43.765575, 11.31562],
      checkIn: "14:00",
      checkOut: "12:00"
    },
    transport: {
      type: "train",
      from: {
        station: "Milano Centrale",
        address: "Piazza Duca d'Aosta, 1, 20124 Milano",
        coords: [45.48, 9.21]
      },
      to: {
        station: "Firenze S.M.N.",
        address: "Piazza della Stazione, 50123 Firenze",
        coords: [43.78, 11.25]
      },
      depart: "14:40",
      arrive: "16:35",
      duration: "1h 55m",
      operator: "Italo 8143",
      ticketLink: "https://italotreno.it/booking/8143"
    },
    notes: [
      "BOOKED — Italo 8143",
      "Smart class, Car 5, Seats 11,12",
      "Transport to hotel: 15 min taxi OR Bus #14/23 from station"
    ],
    attractions: [
      {
        name: "Brunelleschi Dome",
        address: "Piazza del Duomo, 50122 Firenze",
        coords: [43.7733, 11.2562]
      },
      {
        name: "Campanile di Giotto",
        address: "Piazza del Duomo, 50122 Firenze",
        coords: [43.7732, 11.2559]
      }
    ]
  },
  {
    date: "2025-10-09",
    dayNumber: 6,
    city: "Florence",
    hotel: {
      name: "Florence Accommodation",
      address: "Via Generale Dalla Chiesa 1-3, 50132 Firenze",
      coords: [43.765575, 11.31562]
    },
    transport: null,
    notes: [
      "Bus tickets via ATAF mobile app or at tobacco shops (tabacchi)"
    ],
    attractions: [
      {
        name: "Palazzo Vecchio",
        address: "Piazza della Signoria, 50122 Firenze",
        coords: [43.7693, 11.2559]
      },
      {
        name: "Piazza della Signoria",
        address: "Piazza della Signoria, 50122 Firenze",
        coords: [43.7694, 11.2562]
      },
      {
        name: "Basilica di Santa Croce",
        address: "Piazza di Santa Croce, 50122 Firenze",
        coords: [43.768, 11.2618]
      }
    ]
  },
  {
    date: "2025-10-10",
    dayNumber: 7,
    city: "Rome Day Trip",
    hotel: {
      name: "Florence Accommodation",
      address: "Via Generale Dalla Chiesa 1-3, 50132 Firenze",
      coords: [43.765575, 11.31562]
    },
    transport: {
      type: "train",
      from: {
        station: "Firenze S.M.N.",
        address: "Piazza della Stazione, 50123 Firenze",
        coords: [43.78, 11.25]
      },
      to: {
        station: "Roma Termini",
        address: "Piazza dei Cinquecento, 1, 00185 Roma",
        coords: [41.9, 12.5]
      },
      depart: "07:43",
      arrive: "09:19",
      duration: "1h 36m",
      operator: "Italo 9907",
      ticketLink: "https://italotreno.it/booking/9907"
    },
    notes: [
      "BOOKED — Italo 9907 + 9962, Prima class",
      "Return trip in the evening",
      "Rome day trip optimized route"
    ],
    attractions: [
      {
        name: "Trevi Fountain",
        address: "Piazza di Trevi, 00187 Roma",
        coords: [41.9009, 12.4833]
      },
      {
        name: "Colosseum",
        address: "Piazza del Colosseo, 1, 00184 Roma",
        coords: [41.8902, 12.4922]
      },
      {
        name: "Roman Forum",
        address: "Via della Salara Vecchia, 5/6, 00186 Roma",
        coords: [41.8923, 12.4851]
      },
      {
        name: "Piazza Navona",
        address: "Piazza Navona, 00186 Roma",
        coords: [41.8992, 12.4731]
      }
    ]
  },
  {
    date: "2025-10-11",
    dayNumber: 8,
    city: "Florence → Venice",
    hotel: {
      name: "Hotel Rossi Venice",
      address: "Lista di Spagna 262, 30121 Cannaregio, Venezia",
      coords: [45.4420, 12.3219],
      checkIn: "14:00",
      checkOut: "12:00",
      reservationLink: "https://booking.com/reservation/venezia-spagna",
      phone: "+39041715164"
    },
    transport: {
      type: "train",
      from: {
        station: "Firenze S.M.N.",
        address: "Piazza della Stazione, 50123 Firenze",
        coords: [43.78, 11.25]
      },
      to: {
        station: "Venezia S. Lucia",
        address: "Fondamenta di Santa Lucia, 30121 Venezia",
        coords: [45.4420, 12.3219]
      },
      depart: "13:39",
      arrive: "15:55",
      duration: "2h 16m",
      operator: "Italo 8914",
      ticketLink: "https://italotreno.it/booking/8914"
    },
    notes: [
      "BOOKED — Italo 8914, Smart class",
      "Car 6, Seats 27,28",
      "Hotel is 2–3 min walk from Venezia S. Lucia station"
    ],
    attractions: [
      {
        name: "St. Mark's Square",
        address: "Piazza San Marco, 30124 Venezia",
        coords: [45.43, 12.34]
      },
      {
        name: "Doge's Palace",
        address: "Piazza San Marco, 1, 30124 Venezia",
        coords: [45.4340, 12.3402]
      },
      {
        name: "Gondola Ride",
        address: "Various locations, Venezia",
        coords: [45.43, 12.34]
      }
    ]
  },
  {
    date: "2025-10-12",
    dayNumber: 9,
    city: "Venice",
    hotel: {
      name: "Hotel Rossi Venice",
      address: "Lista di Spagna 262, 30121 Cannaregio, Venezia",
      coords: [45.4420, 12.3219]
    },
    transport: null,
    notes: [
      "Gondola Ride is a must-do!",
      "Arrive at St. Mark's Square early to avoid crowds",
      "Murano & Burano Islands (half-day boat trip)"
    ],
    attractions: [
      {
        name: "Rialto Bridge",
        address: "Ponte di Rialto, 30124 Venezia",
        coords: [45.4408, 12.335]
      },
      {
        name: "Murano & Burano Islands",
        address: "Murano & Burano, Venezia, Italy",
        coords: [45.4593, 12.3551]
      }
    ]
  },
  {
    date: "2025-10-13",
    dayNumber: 10,
    city: "Venice → Salzburg",
    hotel: {
      name: "Hotel Neutor Express",
      address: "Neutorstraße 9, 5020 Salzburg",
      coords: [47.8015, 13.0371],
      checkIn: "14:00",
      checkOut: "12:00"
    },
    transport: {
      type: "train",
      from: {
        station: "Venezia S.L.",
        address: "Fondamenta di Santa Lucia, 30121 Venezia",
        coords: [45.4420, 12.3219]
      },
      to: {
        station: "Salzburg Hbf",
        address: "Südtiroler Platz 1, 5020 Salzburg",
        coords: [47.81, 13.05]
      },
      depart: "11:35",
      arrive: "20:21",
      duration: "8h 46m",
      operator: "ÖBB Railjet + WESTbahn",
      ticketLink: "https://oebb.at/booking/84",
      transfer: {
        station: "Innsbruck Hbf",
        address: "Südtiroler Platz 7, 6020 Innsbruck",
        coords: [47.2631, 11.4008],
        arriveAt: "16:26",
        departAt: "18:26",
        layoverDuration: "2h",
        canExplore: true,
        explorationTime: "1h 45m"
      }
    },
    notes: [
      "BOOKED — ÖBB Railjet + WESTbahn",
      "🚂 TRANSFER OPPORTUNITY: 2h layover in Innsbruck (16:26-18:26)",
      "✨ Explore Innsbruck! You have ~1h 45m to see the colorful Old Town",
      "📍 Innsbruck Old Town is 10-min walk from station - perfect for a quick explore!",
      "🏔️ Amazing Alpine views from the station area",
      "⚠️ Be back at platform by 18:15 for your 18:26 connection to Salzburg",
      "Hotel is 15-20 min flat walk from Salzburg station, or 7 min taxi"
    ],
    attractions: [
      {
        name: "Innsbruck Old Town (During Transfer)",
        address: "Altstadt, 6020 Innsbruck",
        coords: [47.2692, 11.3933],
        transferOpportunity: true,
        walkFromStation: "10 minutes",
        explorationTime: "1h 45m available"
      },
      {
        name: "Mozart's Birthplace (Evening Arrival)",
        address: "Getreidegasse 9, 5020 Salzburg",
        coords: [47.8009, 13.0456]
      },
      {
        name: "Hohensalzburg Fortress (Next Day)",
        address: "Mönchsberg 34, 5020 Salzburg",
        coords: [47.7946, 13.047]
      }
    ]
  },
  {
    date: "2025-10-14",
    dayNumber: 11,
    city: "Salzburg",
    hotel: {
      name: "Hotel Neutor Express",
      address: "Neutorstraße 9, 5020 Salzburg",
      coords: [47.8015, 13.0371]
    },
    transport: null,
    notes: [
      "Old Town is a UNESCO World Heritage Site",
      "Explore Hohensalzburg Fortress (take funicular up)"
    ],
    attractions: [
      {
        name: "Salzburg Cathedral (Dom)",
        address: "Domplatz 1A, 5020 Salzburg",
        coords: [47.798, 13.0473]
      },
      {
        name: "Mirabell Palace & Gardens",
        address: "Mirabellplatz 4, 5020 Salzburg",
        coords: [47.8078, 13.0453]
      }
    ]
  },
  {
    date: "2025-10-15",
    dayNumber: 12,
    city: "Salzburg → Munich",
    hotel: {
      name: "Hotel S16",
      address: "Schillerstraße 16, 80336 München",
      coords: [48.1351, 11.5820],
      checkIn: "14:00",
      checkOut: "12:00",
      phone: "+49891893790"
    },
    transport: {
      type: "train",
      from: {
        station: "Salzburg Hbf",
        address: "Südtiroler Platz 1, 5020 Salzburg",
        coords: [47.81, 13.05]
      },
      to: {
        station: "München Hbf",
        address: "Bayerstraße 10A, 80335 München",
        coords: [48.14, 11.56]
      },
      depart: "12:39",
      arrive: "14:14",
      duration: "1h 35m",
      operator: "WESTbahn 964",
      ticketLink: "https://westbahn.at/booking/964"
    },
    notes: [
      "BOOKED — WESTbahn 964",
      "WestSuperpreis ticket",
      "Hotel is 2–3 min walk from München Hbf (south exit)"
    ],
    attractions: [
      {
        name: "Marienplatz",
        address: "Marienplatz, 80331 München",
        coords: [48.1372, 11.5755]
      },
      {
        name: "Viktualienmarkt",
        address: "Viktualienmarkt, 80331 München",
        coords: [48.135, 11.574]
      }
    ]
  },
  {
    date: "2025-10-16",
    dayNumber: 13,
    city: "Munich Day Trips",
    hotel: {
      name: "Hotel S16",
      address: "Schillerstraße 16, 80336 München",
      coords: [48.1351, 11.5820]
    },
    transport: null,
    notes: [
      "Neuschwanstein Castle (2 hrs by train+bus). Book castle tickets online!",
      "Berchtesgaden (3 hrs away Alpine paradise)",
      "Romantic Road: Rothenburg ob der Tauber (1 hr, medieval perfection)",
      "Harburg Castle (combine with Romantic Road)"
    ],
    attractions: [
      {
        name: "Neuschwanstein Castle",
        address: "Neuschwansteinstraße 20, 87645 Schwangau",
        coords: [47.5574, 10.7497]
      },
      {
        name: "Berchtesgaden",
        address: "Berchtesgaden, Germany",
        coords: [47.6306, 13.0015]
      }
    ]
  },
  {
    date: "2025-10-17",
    dayNumber: 14,
    city: "Munich",
    hotel: {
      name: "Hotel S16",
      address: "Schillerstraße 16, 80336 München",
      coords: [48.1351, 11.5820]
    },
    transport: null,
    notes: [
      "Explore city at own pace."
    ],
    attractions: [
      {
        name: "English Garden",
        address: "Englischer Garten, 80538 München",
        coords: [48.1491, 11.5866]
      },
      {
        name: "BMW Museum",
        address: "Am Olympiapark 2, 80809 München",
        coords: [48.1764, 11.5583]
      }
    ]
  },
  {
    date: "2025-10-18",
    dayNumber: 15,
    city: "Munich → Airport Departure",
    hotel: {
      name: "Hotel S16",
      address: "Schillerstraße 16, 80336 München",
      coords: [48.1351, 11.5820]
    },
    transport: {
      type: "train",
      from: {
        station: "München Hbf",
        address: "Bayerstraße 10A, 80335 München",
        coords: [48.14, 11.56]
      },
      to: {
        station: "Munich Airport (MUC)",
        address: "Nordallee 25, 85356 München",
        coords: [48.35, 11.78]
      },
      depart: "TBD",
      arrive: "TBD",
      duration: "45m",
      operator: "S-Bahn S8/S1",
      ticketLink: "https://mvv-muenchen.de/tickets"
    },
    notes: [
      "NEED TO BOOK — S8/S1 line for 12:20 flight",
      "S-Bahn S8/S1 every 10 min",
      "Leave hotel 08:00, airport check-in 09:20",
      "FLIGHT 12:20"
    ],
    attractions: []
  }
];

export const getTodaysTrip = () => {
  const today = new Date().toISOString().split('T')[0];
  const foundTrip = tripData.find(trip => trip.date === today);
  return foundTrip || tripData[0];
};

export const getTripByDay = (dayNumber) => {
  return tripData.find(trip => trip.dayNumber === dayNumber) || tripData[0];
};

export const getUpcomingTrip = () => {
  const today = new Date().toISOString().split('T')[0];
  return tripData.find(trip => trip.date >= today) || tripData[0];
};