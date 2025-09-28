import React, { useState } from 'react';
import { Calendar, MapPin, Train, Plane, Clock, ExternalLink, Phone, AlertCircle, Ticket } from 'lucide-react';
import { tripData } from '../data/tripData';
import { getAllTicketsForDay } from '../data/ticketMappings';
import EnhancedActivityDetails from './EnhancedActivityDetails.jsx';
import TicketViewer from './TicketViewer.jsx';

const TimelineView = () => {
  const [expandedDays, setExpandedDays] = useState({});
  const [ticketViewerOpen, setTicketViewerOpen] = useState(false);
  const [selectedTicketDay, setSelectedTicketDay] = useState(null);

  const openTicketViewer = (dayNumber, journeyLabel) => {
    const tickets = getAllTicketsForDay(dayNumber);
    if (tickets && tickets.length > 0) {
      setSelectedTicketDay(dayNumber);
      setTicketViewerOpen(true);
    } else {
      console.log(`No tickets available for day ${dayNumber}: ${journeyLabel}`);
    }
  };

  const toggleDayExpansion = (dayNumber) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayNumber]: !prev[dayNumber]
    }));
  };

  // Convert 24-hour time to 12-hour AM/PM format
  const formatTime = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">

      {/* Timeline List with Vertical Line */}
      <div className="relative p-4">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200" style={{ transform: 'translateX(-50%)' }}></div>
        
        {tripData.map((trip, index) => (
          <div key={trip.date} className="flex items-start gap-4 mb-8 relative">
            {/* Connector Dot */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full z-10 flex items-center justify-center ${
                index % 3 === 0 ? 'bg-purple-600' : index % 3 === 1 ? 'bg-green-600' : 'bg-red-600'
            }`}>
              <span className="text-white font-bold text-xs">{trip.dayNumber}</span>
            </div>

            {/* Trip Card */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-5 mt-2 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {trip.city}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {new Date(trip.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-blue-600">Day {trip.dayNumber}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(trip.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>

              {/* Hotel Information */}
              {trip.hotel && (
                <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold text-purple-900">{trip.hotel.name}</div>
                      <div className="text-sm text-purple-700">{trip.hotel.address}</div>
                      {trip.hotel.checkIn && trip.hotel.checkOut && (
                        <div className="text-xs text-purple-600 mt-1">
                          Check-in: {trip.hotel.checkIn} • Check-out: {trip.hotel.checkOut}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {trip.hotel.phone && (
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <Phone className="w-3 h-3" />
                        <span>{trip.hotel.phone}</span>
                      </div>
                    )}
                    {trip.hotel.reservationLink && (
                      <div className="flex items-center gap-1 text-xs text-purple-600">
                        <ExternalLink className="w-3 h-3" />
                        <span>Reservation</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Transport Information */}
              {trip.transport?.from && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-start gap-2 mb-2">
                    {trip.transport.type === 'train' ? (
                      <Train className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : trip.transport.type === 'plane' ? (
                      <Plane className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-green-900">
                        {trip.transport.from.station} → {trip.transport.to.station}
                      </div>
                      <div className="text-sm text-green-700 flex items-center gap-4">
                        <span>Depart: {formatTime(trip.transport.depart)}</span>
                        <span>Arrive: {formatTime(trip.transport.arrive)}</span>
                        <span>({trip.transport.duration})</span>
                      </div>
                      {trip.transport.platform && (
                        <div className="text-xs text-green-600 mt-1">
                          Platform {trip.transport.platform}
                        </div>
                      )}
                      {trip.transport.operator && (
                        <div className="text-xs text-green-600">
                          {trip.transport.operator}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Transport Actions */}
                  <div className="flex gap-2 mt-2">
                    {getAllTicketsForDay(trip.dayNumber).length > 0 && (
                      <button
                        onClick={() => openTicketViewer(trip.dayNumber, trip.city)}
                        className="flex items-center gap-1 bg-green-600 text-white text-xs py-1 px-2 rounded hover:bg-green-700 transition-colors"
                      >
                        <Ticket className="w-3 h-3" />
                        View Tickets
                      </button>
                    )}
                  </div>
                </div>
              )}
              
              {/* Transfer Details */}
              {trip.transport?.transfer && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-2 mb-2">
                    <Train className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 text-sm">Transfer in {trip.transport.transfer.station}</h4>
                      <div className="text-xs text-blue-700 mb-1">
                        Arrive: {formatTime(trip.transport.transfer.arriveAt)} • Depart: {formatTime(trip.transport.transfer.departAt)} ({trip.transport.transfer.layoverDuration} layover)
                      </div>
                      {trip.transport.transfer.canExplore && (
                        <div className="flex items-center gap-1 text-xs text-blue-600">
                          <AlertCircle className="w-3 h-3" />
                          <span>Explore! You have ~{trip.transport.transfer.explorationTime} to walk around the Old Town.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Activity Details */}
              <EnhancedActivityDetails 
                dayNumber={trip.dayNumber}
                isOpen={expandedDays[trip.dayNumber]}
                onToggle={() => toggleDayExpansion(trip.dayNumber)}
              />

              {/* Important Notes */}
              {trip.notes && trip.notes.length > 0 && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-yellow-900 text-sm mb-1">Important Notes</h4>
                      <ul className="space-y-1">
                        {trip.notes.map((note, idx) => (
                          <li key={idx} className="text-xs text-yellow-700">
                            • {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Viewer Modal */}
      <TicketViewer 
        dayNumber={selectedTicketDay}
        isOpen={ticketViewerOpen}
        onClose={() => {
          setTicketViewerOpen(false);
          setSelectedTicketDay(null);
        }}
      />
    </div>
  );
};

export default TimelineView;