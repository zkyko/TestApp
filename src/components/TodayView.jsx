import React, { useState, useEffect } from 'react';
import { MapPin, Train, Clock, Phone, ExternalLink } from 'lucide-react';
import { getTodaysTrip } from '../data/tripData';

const TodayView = () => {
  const [currentTrip, setCurrentTrip] = useState(getTodaysTrip());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

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

  const openInMaps = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const timeUntilDeparture = calculateTimeUntilDeparture();

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white overflow-y-auto">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-1">Today's Journey</h1>
          <p className="text-blue-100 text-sm">
            Day {currentTrip.dayNumber} • {new Date(currentTrip.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-lg font-semibold mt-2">{currentTrip.city}</p>
          <div className="mt-2 text-xs text-blue-200">
            Austin, TX: {getAustinTime()}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Next Train Card */}
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
                <p className="text-sm text-gray-600">Platform {currentTrip.transport.from.platform}</p>
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
              {currentTrip.transport.ticketLink && (
                <button
                  onClick={() => window.open(currentTrip.transport.ticketLink, '_blank')}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ticket
                </button>
              )}
            </div>
          </div>
        </div>

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

        {/* Last Train Warning (if applicable) */}
        {currentTrip.lastTrain && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Train className="w-5 h-5 text-red-600" />
              <h2 className="font-semibold text-red-900">Last Train Warning</h2>
            </div>
            <p className="text-sm text-red-700">
              Last train from {currentTrip.lastTrain.from} to {currentTrip.lastTrain.to}: 
              <span className="font-bold"> {formatTime(currentTrip.lastTrain.depart)}</span>
              {currentTrip.lastTrain.platform && ` (Platform ${currentTrip.lastTrain.platform})`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayView;