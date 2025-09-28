import React, { useState, useEffect } from 'react';
import { MapPin, Train, Clock, Phone, ExternalLink, ChevronLeft, ChevronRight, Ticket } from 'lucide-react';
import { getTodaysTrip, getTripByDay, tripData } from '../data/tripData';
import { getAllTicketsForDay } from '../data/ticketMappings';
import EnhancedActivityDetails from './EnhancedActivityDetails.jsx';
import TicketViewer from './TicketViewer.jsx';
import { formatInTimeZone } from 'date-fns-tz';

const TodayView = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [currentTrip, setCurrentTrip] = useState(getTripByDay(1));
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activityDetailsOpen, setActivityDetailsOpen] = useState(false);
  const [ticketViewerOpen, setTicketViewerOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevDay = () => {
    const newDay = Math.max(1, currentDay - 1);
    setCurrentDay(newDay);
    setCurrentTrip(getTripByDay(newDay));
  };

  const handleNextDay = () => {
    const newDay = Math.min(tripData.length, currentDay + 1);
    setCurrentDay(newDay);
    setCurrentTrip(getTripByDay(newDay));
  };

  // Update trip when day changes
  useEffect(() => {
    setCurrentTrip(getTripByDay(currentDay));
  }, [currentDay]);

  const navigateDay = (direction) => {
    if (direction === 'prev' && currentDay > 1) {
      setCurrentDay(currentDay - 1);
    } else if (direction === 'next' && currentDay < tripData.length) {
      setCurrentDay(currentDay + 1);
    }
  };

  // Convert 24-hour time to 12-hour AM/PM format
  const formatTime = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Get current time in Austin, TX
  const getAustinTime = () => {
    const now = new Date();
    const austinTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Chicago"}));
    return austinTime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const calculateTimeUntilDeparture = () => {
    if (!currentTrip.transport?.depart) return null;
    
    const [hours, minutes] = currentTrip.transport.depart.split(':');
    const departureTime = new Date();
    departureTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const timeDiff = departureTime - currentTime;
    
    if (timeDiff <= 0) return 'Departed';
    
    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hoursLeft > 0) {
      return `${hoursLeft}h ${minutesLeft}m`;
    } else {
      return `${minutesLeft}m`;
    }
  };

  const openTicketViewer = () => {
    const tickets = getAllTicketsForDay(currentDay);
    if (tickets && tickets.length > 0) {
      setTicketViewerOpen(true);
    } else {
      console.log('No tickets available for this day');
    }
  };

  const openInMaps = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const timeUntilDeparture = calculateTimeUntilDeparture();

  return (
    <div className="h-full bg-gray-100">
      {/* Day Navigation Header */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <button 
            onClick={handlePrevDay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">Day {currentDay}</h1>
            <p className="text-sm text-gray-600">{currentTrip.city}</p>
            <p className="text-xs text-gray-500 mt-1">Austin, TX: {formatInTimeZone(currentTime, 'America/Chicago', 'hh:mm:ss a')}</p>
          </div>
          <button 
            onClick={handleNextDay}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Next Train Card */}
        {currentTrip.transport ? (
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Train className="w-5 h-5 text-green-600" />
                <h2 className="font-semibold text-gray-900">Next Train</h2>
              </div>
              {timeUntilDeparture && (
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  timeUntilDeparture === 'Departed' 
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {timeUntilDeparture === 'Departed' ? 'Departed' : `Leaves in ${timeUntilDeparture}`}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{currentTrip.transport.from.station}</p>
                  <p className="text-sm text-gray-600">Platform {currentTrip.transport.from.platform || 'TBD'}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">{formatTime(currentTrip.transport.depart)}</p>
                  <p className="text-sm text-gray-600">{currentTrip.transport.duration}</p>
                </div>
              </div>
              
              <div className="border-l-2 border-gray-200 ml-2 pl-4 py-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Arrives {formatTime(currentTrip.transport.arrive)} at {currentTrip.transport.to.station}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => openInMaps(currentTrip.transport.from.address)}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get to Station
                </button>
                {getAllTicketsForDay(currentDay).length > 0 && (
                  <button
                    onClick={openTicketViewer}
                    className="flex items-center gap-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <Ticket className="w-4 h-4" />
                    View Tickets
                  </button>
                )}
                {currentTrip.transport.ticketLink && (
                  <button
                    onClick={() => window.open(currentTrip.transport.ticketLink, '_blank')}
                    className="flex items-center gap-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Book
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-300">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-gray-600" />
              <h2 className="font-semibold text-gray-900">No Train Today</h2>
            </div>
            <p className="text-sm text-gray-600">Exploring the city today - no scheduled trains.</p>
          </div>
        )}

        {/* Hotel Card */}
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-purple-600" />
            <h2 className="font-semibold text-gray-900">Today's Hotel</h2>
          </div>

          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-900">{currentTrip.hotel.name}</p>
              <p className="text-sm text-gray-600">{currentTrip.hotel.address}</p>
            </div>
            
            <div className="flex gap-2 text-sm text-gray-600">
              <span>Check-in: {currentTrip.hotel.checkIn}</span>
              <span>•</span>
              <span>Check-out: {currentTrip.hotel.checkOut}</span>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => openInMaps(currentTrip.hotel.address)}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Get Directions
              </button>
              {currentTrip.hotel.phone && (
                <button
                  onClick={() => window.open(`tel:${currentTrip.hotel.phone}`, '_self')}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </button>
              )}
              {currentTrip.hotel.reservationLink && (
                <button
                  onClick={() => window.open(currentTrip.hotel.reservationLink, '_blank')}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Booking
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Transfer Details (if applicable) */}
        {currentTrip.transport?.transfer && (
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-3">
              <Train className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-gray-900">Transfer Opportunity</h2>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>{currentTrip.transport.transfer.station}</strong>
              </p>
              <p className="text-xs text-gray-600">
                Arrive: {formatTime(currentTrip.transport.transfer.arriveAt)} • 
                Depart: {formatTime(currentTrip.transport.transfer.departAt)} • 
                {currentTrip.transport.transfer.layoverDuration} layover
              </p>
              {currentTrip.transport.transfer.canExplore && (
                <div className="bg-blue-50 p-2 rounded text-xs text-blue-700">
                  ✨ Explore! You have ~{currentTrip.transport.transfer.explorationTime} to walk around the Old Town.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Notes Card */}
        {currentTrip.notes && currentTrip.notes.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
            <h2 className="font-semibold text-gray-900 mb-3">Important Notes</h2>
            <ul className="space-y-2">
              {currentTrip.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enhanced Activity Details */}
        <EnhancedActivityDetails 
          dayNumber={currentDay}
          isOpen={activityDetailsOpen}
          onToggle={() => setActivityDetailsOpen(!activityDetailsOpen)}
        />
      </div>

      {/* Ticket Viewer Modal */}
      <TicketViewer 
        dayNumber={currentDay}
        isOpen={ticketViewerOpen}
        onClose={() => setTicketViewerOpen(false)}
      />
    </div>
  );
};

export default TodayView;