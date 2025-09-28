// Complete ticket mappings for all train journeys based on actual tickets

export const ticketMappings = {
  // Day 3: Zurich → Interlaken (Oct 6, 2025)
  "day-3-zurich-interlaken": {
    aastha: {
      image: "/assets/tickets/IMG_0708.PNG",
      passenger: "Aastha Acharya"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0707.PNG", 
      passenger: "Yubaraj Acharya"
    },
    details: {
      operator: "SBB",
      route: "Zurich HB → Interlaken Ost",
      date: "October 6, 2025",
      departure: "Morning departure",
      type: "Swiss train"
    }
  },

  // Day 4: Interlaken → Lauterbrunnen (Oct 7, 2025)
  "day-4-interlaken-lauterbrunnen": {
    aastha: {
      image: "/assets/tickets/IMG_0710.PNG",
      passenger: "Aastha Acharya"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0709.PNG",
      passenger: "Yubaraj Acharya"
    },
    details: {
      operator: "SBB",
      route: "Interlaken Ost → Lauterbrunnen",
      date: "October 7, 2025",
      type: "Local train"
    }
  },

  // Day 5: Milan → Florence (Oct 8, 2025) - Italo Train 8143
  "day-5-milan-florence": {
    aastha: {
      image: "/assets/tickets/IMG_0714.PNG",
      passenger: "Aastha Acharya",
      seat: "Coach 5, Seat 12",
      reference: "AHD53K"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0715.PNG",
      passenger: "Yubaraj Acharya", 
      seat: "Coach 5, Seat 11",
      reference: "AHD53K"
    },
    details: {
      operator: "Italo",
      route: "Milan Centrale → Florence SMN",
      date: "October 8, 2025",
      departure: "14:40",
      arrival: "16:35",
      trainNumber: "8143",
      duration: "1h 55m"
    }
  },

  // Day 6: Florence → Rome (Oct 9, 2025) - Italo Train 9907
  "day-6-florence-rome": {
    aastha: {
      image: "/assets/tickets/IMG_0719.PNG",
      passenger: "Aastha Acharya",
      seat: "Coach 4, Seat 24", 
      reference: "CBSGPP"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0718.PNG",
      passenger: "Yubaraj Acharya",
      seat: "Coach 4, Seat 23",
      reference: "CBSGPP"
    },
    details: {
      operator: "Italo",
      route: "Florence SMN → Rome Termini",
      date: "October 9, 2025", 
      departure: "08:43",
      arrival: "10:19",
      trainNumber: "9907",
      duration: "1h 36m"
    }
  },

  // Day 7: Rome → Florence (Oct 10, 2025) - Italo Train 9962
  "day-7-rome-florence": {
    aastha: {
      image: "/assets/tickets/IMG_0717.PNG",
      passenger: "Aastha Acharya",
      seat: "Coach 9, Seat 20",
      reference: "MC1Z9P"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0716.PNG", 
      passenger: "Yubaraj Acharya",
      seat: "Coach 9, Seat 19",
      reference: "MC1Z9P"
    },
    details: {
      operator: "Italo",
      route: "Rome Termini → Florence SMN",
      date: "October 10, 2025",
      departure: "20:40", 
      arrival: "22:17",
      trainNumber: "9962",
      duration: "1h 37m"
    }
  },

  // Day 8: Florence → Venice (Oct 11, 2025) - Italo Train 8914
  "day-8-florence-venice": {
    aastha: {
      image: "/assets/tickets/IMG_0721.PNG",
      passenger: "Aastha Acharya",
      seat: "Coach 6, Seat 28",
      reference: "OITY4S"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0720.PNG",
      passenger: "Yubaraj Acharya", 
      seat: "Coach 6, Seat 27",
      reference: "OITY4S"
    },
    details: {
      operator: "Italo",
      route: "Florence SMN → Venice S. Lucia",
      date: "October 11, 2025",
      departure: "13:39",
      arrival: "15:55", 
      trainNumber: "8914",
      duration: "2h 16m"
    }
  },

  // Day 10: Venice → Innsbruck (Oct 12, 2025) - EuroCity
  "day-10-venice-innsbruck": {
    aastha: {
      image: "/assets/tickets/IMG_0713.PNG",
      passenger: "Aastha Acharya"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0711.PNG",
      passenger: "Yubaraj Acharya"
    },
    details: {
      operator: "EuroCity",
      route: "Venice S. Lucia → Innsbruck Hbf",
      date: "October 12, 2025",
      departure: "11:35",
      arrival: "16:36",
      trainNumber: "EC",
      duration: "5h 1m"
    }
  },

  // Day 11: Innsbruck → Salzburg (Oct 13, 2025) - Westbahn Train 979
  "day-11-innsbruck-salzburg": {
    aastha: {
      image: "/assets/tickets/IMG_0723.PNG",
      ticketCode: "PZ7-6WT",
      price: "€13.99"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0722.PNG",
      ticketCode: "WBA-UH8", 
      price: "€13.99"
    },
    details: {
      operator: "Westbahn",
      route: "Innsbruck Hbf → Salzburg Hbf",
      date: "October 13, 2025",
      departure: "18:26",
      arrival: "20:21",
      trainNumber: "979",
      duration: "1h 55m"
    }
  },

  // Day 12: Salzburg → Munich (Oct 14, 2025)
  "day-12-salzburg-munich": {
    aastha: {
      image: "/assets/tickets/IMG_1879.PNG",
      passenger: "Aastha Acharya"
    },
    yubaraj: {
      image: "/assets/tickets/IMG_0724.PNG", 
      passenger: "Yubaraj Acharya"
    },
    details: {
      operator: "German Railways",
      route: "Salzburg Hbf → Munich Hbf", 
      date: "October 14, 2025",
      type: "Regional/Express train"
    }
  },

  // Day 15: Munich → Zurich (Oct 18, 2025) - Final return leg
  "day-15-munich-zurich": {
    both: {
      image: "/assets/tickets/IMG_1880.PNG",
      passengers: "Both tickets shown separately (return)"
    },
    details: {
      operator: "DB/SBB",
      route: "Munich Hbf → Zurich HB",
      date: "October 18, 2025",
      type: "Final return leg"
    }
  }
};

// Day to ticket mapping based on actual trip itinerary
export const dayToTicketMapping = {
  3: "day-3-zurich-interlaken",
  4: "day-4-interlaken-lauterbrunnen", 
  5: "day-5-milan-florence",
  6: "day-6-florence-rome",
  7: "day-7-rome-florence",
  8: "day-8-florence-venice", 
  10: "day-10-venice-innsbruck",
  11: "day-11-innsbruck-salzburg",
  12: "day-12-salzburg-munich",
  15: "day-15-munich-zurich"
};

// Helper function to get tickets for a specific day
export const getTicketsForDay = (dayNumber) => {
  const key = dayToTicketMapping[dayNumber];
  return key ? ticketMappings[key] : null;
};

// Helper function to get all ticket images for a day
export const getAllTicketsForDay = (dayNumber) => {
  const ticketData = getTicketsForDay(dayNumber);
  if (!ticketData) return [];
  
  const tickets = [];
  
  // Handle special case for day 15 with combined ticket
  if (dayNumber === 15) {
    tickets.push({
      ...ticketData,
      label: ticketData.details.route,
      type: "return"
    });
  } else {
    // Standard case with separate tickets for each passenger
    tickets.push({
      ...ticketData,
      label: ticketData.details.route,
      type: "outbound"
    });
  }
  
  return tickets;
};

// Helper to get specific passenger ticket
export const getPassengerTicket = (dayNumber, passenger) => {
  const ticketData = getTicketsForDay(dayNumber);
  if (!ticketData) return null;
  
  // For day 15, return the combined ticket
  if (dayNumber === 15) {
    return ticketData.both;
  }
  
  // Return specific passenger ticket
  return ticketData[passenger.toLowerCase()];
};