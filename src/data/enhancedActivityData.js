
// Source of truth for detailed itinerary, based on PDF and trip data.
export const enhancedActivityData = {
  // Day 1: Zurich Arrival & Transfer to Interlaken
  1: {
    title: "Arrival in Switzerland",
    needsBooking: ["Train from Zurich Airport to Interlaken Ost"],
    schedule: [
      { time: "08:05", title: "Arrive at Zurich Airport (ZRH)", type: "travel", description: "Welcome to Switzerland! Proceed through customs and baggage claim." },
      { time: "09:30", title: "Train to Interlaken Ost", type: "travel", description: "Take the train from the airport station. Enjoy the scenic journey!" },
      { time: "12:00", title: "Arrive in Interlaken", type: "travel", description: "Check into the hotel and drop off luggage." },
      { time: "13:00", title: "Lunch in Interlaken", type: "food", description: "Find a local spot for a bite to eat." },
      { time: "14:30", title: "Explore Interlaken", type: "activity", description: "Take a walk around the town, see the Höhematte Park, and enjoy views of the Jungfrau." }
    ]
  },

  // Day 2: Lauterbrunnen & Grindelwald
  2: {
    title: "Valley & Mountain Exploration",
    needsBooking: ["Train tickets for Lauterbrunnen and Grindelwald"],
    schedule: [
      { time: "09:00", title: "Train to Lauterbrunnen", type: "travel", description: "Depart from Interlaken Ost to the stunning Lauterbrunnen Valley." },
      { time: "10:00", title: "Explore Lauterbrunnen", type: "activity", description: "Walk through the valley with its 72 waterfalls, including the famous Staubbach Falls." },
      { time: "12:30", title: "Lunch in Lauterbrunnen", type: "food", description: "Enjoy lunch with a view of the valley." },
      { time: "14:00", title: "Train to Grindelwald", type: "travel", description: "Take the scenic train journey to the mountain village of Grindelwald." },
      { time: "15:00", title: "Explore Grindelwald", type: "activity", description: "Walk through the charming village and enjoy the views of the Eiger." },
      { time: "17:00", title: "Return to Interlaken", type: "travel", description: "Head back to Interlaken for the evening." }
    ]
  },

  // Day 3: Mürren & Schilthorn
  3: {
    title: "Alpine Villages & Views",
    needsBooking: ["Train/Cable Car to Mürren/Schilthorn"],
    schedule: [
      { time: "09:00", title: "Travel to Mürren", type: "travel", description: "Take a train and cable car to the car-free village of Mürren, perched on a cliff." },
      { time: "10:30", title: "Explore Mürren", type: "activity", description: "Wander through the idyllic village." },
      { time: "12:30", title: "Optional: Schilthorn", type: "activity", description: "Continue via cable car to the Piz Gloria revolving restaurant, famous from the James Bond movie." },
      { time: "13:00", title: "Lunch with a View", type: "food", description: "Have lunch in Mürren or at the Schilthorn." },
      { time: "15:00", title: "Return Journey", type: "travel", description: "Enjoy the scenic trip back down to the valley and on to Interlaken." }
    ]
  },

  // Day 4: Interlaken to Milan
  4: {
    title: "From the Alps to Italian Fashion",
    schedule: [
      { time: "Morning", title: "Last Exploration of Interlaken", type: "activity", description: "Enjoy a final Swiss morning, perhaps with a boat trip on Lake Thun or Brienz." },
      { time: "13:29", title: "Depart for Milan", type: "travel", description: "Board the train from Interlaken Ost towards Milan." },
      { time: "16:55", title: "Arrive at Milano Centrale", type: "travel", description: "Welcome to Italy! Head to the hotel to check in." },
      { time: "18:00", title: "Piazza del Duomo", type: "activity", description: "Stroll the square and admire the magnificent cathedral in the golden-hour light." },
      { time: "18:30", title: "Galleria Vittorio Emanuele II", type: "activity", description: "Walk through the iconic shopping gallery and take photos under the glass dome." },
      { time: "19:00", title: "Dinner in Brera", type: "food", description: "Enjoy dinner and a classic aperitivo in the charming Brera district." }
    ],
    restaurants: [
        { name: "Nabucco", type: "Italian trattoria" },
        { name: "Obicà", type: "Modern mozzarella bar with Duomo views" },
        { name: "Cantina Piemontese", type: "Wine bar with Milanese classics" }
    ]
  },

  // Day 5: Milan to Florence
  5: {
    title: "Milan's Culture & Journey to Renaissance",
    schedule: [
      { time: "09:00", title: "Castello Sforzesco & Parco Sempione", type: "activity", description: "Walk through the castle courtyard (free) and enjoy a stroll in the adjacent park." },
      { time: "11:15", title: "Coffee in Brera", type: "food", description: "Grab a quick bite or an espresso at Bar Brera or Panini Durini." },
      { time: "12:00", title: "Head to Milano Centrale", type: "travel", description: "Make your way to the station for your departure to Florence." },
      { time: "14:40", title: "Train to Florence", type: "travel", description: "Depart on the Italo high-speed train." },
      { time: "16:35", title: "Arrive in Florence", type: "travel", description: "Arrive at Firenze Santa Maria Novella (SMN)." },
      { time: "17:30", title: "Check-in and Freshen Up", type: "lodging", description: "Head to the hotel, check in, and relax for a bit." },
      { time: "19:30", title: "Evening Walk", type: "activity", description: "Stroll along the famous Ponte Vecchio and then to the grand Piazza della Signoria." },
      { time: "20:30", title: "Dinner in Florence", type: "food", description: "Dine at La Giostra, Trattoria ZaZa, or another scenic spot along the Arno." }
    ]
  },

  // Day 6: Full Day in Florence
  6: {
    title: "Heart of the Renaissance",
    schedule: [
      { time: "09:00", title: "Duomo Complex", type: "activity", description: "Visit the Cathedral, climb Brunelleschi's Dome (book ahead!), and see the Baptistery and Campanile." },
      { time: "12:30", title: "Lunch Near Duomo", type: "food", description: "Try Trattoria Mario or Osteria dell'Enoteca for an authentic meal." },
      { time: "14:00", title: "Piazza della Signoria & Palazzo Vecchio", type: "activity", description: "Explore the outdoor sculpture gallery and the impressive town hall." },
      { time: "15:30", title: "Santa Croce Basilica", type: "activity", description: "Visit the final resting place of many famous Italians like Michelangelo and Galileo." },
      { time: "17:00", title: "Sunset at Piazzale Michelangelo", type: "activity", description: "Enjoy a gelato and stroll up to the Piazzale for breathtaking sunset views over the city." }
    ]
  },

  // Day 7: Rome Day Trip
  7: {
    title: "All Roads Lead to Rome",
    schedule: [
      { time: "07:43", title: "Train to Rome", type: "travel", description: "Take the early high-speed train from Florence to Rome." },
      { time: "09:19", title: "Arrive at Roma Termini", type: "travel", description: "Begin your whirlwind tour of the Eternal City." },
      { time: "10:00", title: "Colosseum, Roman Forum, Palatine Hill", type: "activity", description: "Explore the ancient heart of the Roman Empire. Allow 2-3 hours. Book skip-the-line tickets!" },
      { time: "13:00", title: "Walk to Trevi Fountain", type: "activity", description: "A 20-minute walk from the Forum. Toss a coin to ensure your return to Rome." },
      { time: "13:30", title: "Lunch Near Trevi", type: "food", description: "Grab a quick sandwich at Pane e Salame." },
      { time: "14:30", title: "Spanish Steps", type: "activity", description: "A 10-minute walk from Trevi. Famous for people-watching." },
      { time: "15:00", title: "Pantheon", type: "activity", description: "A 10-minute walk from the Spanish Steps. Marvel at the architectural wonder of the dome." },
      { time: "16:00", title: "Piazza Navona", type: "activity", description: "See Bernini's Fountain of the Four Rivers." },
      { time: "17:00", title: "Gelato Time!", type: "food", description: "Enjoy a treat from Gelateria del Teatro." },
      { time: "19:00", title: "Head to Roma Termini", type: "travel", description: "Make your way back to the station." },
      { time: "20:40", title: "Return to Florence", type: "travel", description: "Depart from Rome after a long and rewarding day." }
    ],
    needsBooking: ["Skip-the-line tickets for Colosseum/Forum/Palatine", "Pantheon entry (€5, reserve online)"]
  },

  // Day 8: Florence to Venice
  8: {
    title: "Journey to the Floating City",
    schedule: [
      { time: "Morning", title: "Last Taste of Florence", type: "activity", description: "Enjoy a final Florentine morning, perhaps visiting the Mercato Centrale." },
      { time: "13:39", title: "Train to Venice", type: "travel", description: "Depart from Florence SMN." },
      { time: "15:55", title: "Arrive at Venezia S. Lucia", type: "travel", description: "Step out of the station and directly onto the Grand Canal." },
      { time: "16:30", title: "Check-in to Hotel", type: "lodging", description: "Find your hotel and drop off your bags." },
      { time: "18:00", title: "Evening Walk", type: "activity", description: "Follow Lista di Spagna to Strada Nova, stop for a spritz, and head towards the Rialto Bridge for sunset." },
      { time: "20:00", title: "St. Mark's Square at Night", type: "activity", description: "Experience the magic of the square when it's lit up and less crowded." },
      { time: "21:00", title: "Return by Vaporetto", type: "travel", description: "Take Vaporetto Line 1 for a trip down the Grand Canal back to the hotel." }
    ]
  },

  // Day 9: Full Day Venice Adventure
  9: {
    title: "Venetian Wonders & Island Hopping",
    schedule: [
      { time: "08:30", title: "St. Mark's Square", type: "activity", description: "Walk or take a vaporetto to the square to beat the crowds." },
      { time: "09:00", title: "Visit St. Mark's Basilica & Doge's Palace", type: "activity", description: "Explore the jewels of Venetian power and history." },
      { time: "12:00", title: "Lunch in Cannaregio", type: "food", description: "Head back to the quieter Cannaregio district for lunch." },
      { time: "14:00", title: "Island Hopping", type: "activity", description: "Take a vaporetto from Fondamente Nove to Murano (glass) and then to Burano (colorful houses)." },
      { time: "18:00", title: "Return to Venice", type: "travel", description: "Head back to the main island." },
      { time: "19:30", title: "Optional Gondola Ride", type: "activity", description: "Experience the quintessential Venetian activity." },
      { time: "20:30", title: "Dinner in Cannaregio", type: "food", description: "Enjoy a quiet dinner away from the main tourist areas." }
    ]
  },

  // Day 10: Venice to Salzburg
  10: {
    title: "From Venetian Canals to Austrian Alps",
    schedule: [
      { time: "Morning", title: "Last Venetian Exploration", type: "activity", description: "Visit the Jewish Ghetto (5-10 min walk from hotel) or the unique Libreria Acqua Alta." },
      { time: "11:35", title: "Train to Innsbruck", type: "travel", description: "Begin the scenic journey towards Austria." },
      { time: "16:26", title: "Arrive in Innsbruck", type: "travel", description: "You have a 2-hour layover. Time for a quick exploration!" },
      { time: "16:45", title: "Explore Innsbruck Old Town", type: "activity", description: "The colorful Old Town is a 10-minute walk from the station. See the Golden Roof." },
      { time: "18:15", title: "Return to Innsbruck Hbf", type: "travel", description: "Be back at the platform for your connection." },
      { time: "18:26", title: "Train to Salzburg", type: "travel", description: "Depart for Salzburg." },
      { time: "20:21", title: "Arrive in Salzburg", type: "travel", description: "Welcome to the city of Mozart! Check into your hotel." }
    ]
  },

  // Day 11: Salzburg
  11: {
    title: "The Sound of Music",
    schedule: [
      { time: "09:00", title: "Hohensalzburg Fortress", type: "activity", description: "Take the funicular up to the fortress for panoramic views of the city and Alps." },
      { time: "11:30", title: "Explore the Old Town", type: "activity", description: "Wander through the UNESCO World Heritage site, visiting Mozart's Birthplace on Getreidegasse." },
      { time: "13:00", title: "Lunch in the Old Town", type: "food", description: "Find a traditional Austrian restaurant." },
      { time: "14:30", title: "Salzburg Cathedral", type: "activity", description: "Visit the impressive baroque cathedral." },
      { time: "16:00", title: "Mirabell Palace & Gardens", type: "activity", description: "Stroll through the beautiful gardens, famous from 'The Sound of Music'." }
    ]
  },

  // Day 12: Salzburg to Munich
  12: {
    title: "From Mozart to Bavarian Beer",
    schedule: [
      { time: "Morning", title: "Final Salzburg Sights", type: "activity", description: "Revisit a favorite spot or do some last-minute souvenir shopping." },
      { time: "12:39", title: "Train to Munich", type: "travel", description: "Depart from Salzburg Hbf." },
      { time: "14:14", title: "Arrive at München Hbf", type: "travel", description: "Welcome to Bavaria! Check into your hotel near the station." },
      { time: "16:00", title: "Explore Marienplatz", type: "activity", description: "Visit the central square, see the New Town Hall and its famous Glockenspiel." },
      { time: "18:00", title: "Viktualienmarkt", type: "activity", description: "Explore the bustling outdoor market." },
      { time: "19:00", title: "Dinner at a Beer Hall", type: "food", description: "Experience a traditional Bavarian beer hall for dinner." }
    ]
  },

  // Day 13 & 14: Munich & Day Trips
  13: {
    title: "Bavarian Castles & Culture",
    schedule: [
      { time: "All Day", title: "Day Trip from Munich", type: "activity", description: "Choose your adventure: the fairytale Neuschwanstein Castle, the historic city of Nuremberg, or the alpine beauty of Berchtesgaden." }
    ],
    notes: ["Day trips require a full day and advance planning. Neuschwanstein tickets must be booked far in advance."]
  },
  14: {
    title: "Munich Modern & Classic",
    schedule: [
      { time: "10:00", title: "BMW Museum or Deutsches Museum", type: "activity", description: "Choose between automotive history at the BMW Museum or science and technology at the Deutsches Museum." },
      { time: "13:00", title: "Lunch", type: "food", description: "Enjoy lunch near the museum or back in the city center." },
      { time: "15:00", title: "English Garden", type: "activity", description: "Relax in the huge urban park. Watch the surfers on the Eisbach river." },
      { time: "18:00", title: "Last Evening in Munich", type: "activity", description: "Enjoy a final Bavarian dinner or revisit a favorite spot." }
    ]
  },

  // Day 15: Departure
  15: {
    title: "Departure Day",
    needsBooking: ["Train from Munich Hbf to Munich Airport (MUC)"],
    schedule: [
      { time: "08:00", title: "Leave Hotel", type: "travel", description: "Enjoy a final breakfast and head to the main station (München Hbf)." },
      { time: "08:30", title: "S-Bahn to Airport", type: "travel", description: "Take the S-Bahn S1 or S8 line to the airport (approx. 45 mins)." },
      { time: "09:20", title: "Airport Check-in", type: "travel", description: "Check in for your flight." },
      { time: "12:20", title: "Flight Departure", type: "travel", description: "Flight back to Austin." }
    ]
  }
};

export const getEnhancedActivityData = (dayNumber) => {
  return enhancedActivityData[dayNumber] || null;
};
