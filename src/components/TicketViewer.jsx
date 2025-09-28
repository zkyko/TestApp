import React, { useState } from 'react';
import { X, User, Users, Train, Clock, MapPin } from 'lucide-react';
import { getPassengerTicket, getTicketsForDay } from '../data/ticketMappings';

const TicketViewer = ({ dayNumber, isOpen, onClose }) => {
  const [selectedPassenger, setSelectedPassenger] = useState('aastha');
  
  if (!isOpen) return null;

  const ticketData = getTicketsForDay(dayNumber);
  if (!ticketData) return null;

  const currentTicket = getPassengerTicket(dayNumber, selectedPassenger);
  const details = ticketData.details;

  // Format time display
  const formatTime = (time24) => {
    if (!time24) return '';
    const [hours, minutes] = time24.split(':');
    const hour12 = parseInt(hours) % 12 || 12;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Travel Tickets</h3>
            <p className="text-sm text-blue-100">Day {dayNumber} • {details.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Journey Details */}
        <div className="p-4 bg-gray-50 border-b">
          <div className="flex items-center gap-2 mb-2">
            <Train className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">{details.operator}</span>
            {details.trainNumber && (
              <span className="text-sm text-gray-600">Train {details.trainNumber}</span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{details.route}</span>
          </div>

          {details.departure && details.arrival && (
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="w-4 h-4" />
              <span>
                {formatTime(details.departure)} → {formatTime(details.arrival)}
                {details.duration && ` (${details.duration})`}
              </span>
            </div>
          )}
        </div>

        {/* Passenger Selection */}
        {dayNumber !== 15 && ( // Day 15 has combined tickets
          <div className="p-4 border-b">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Select Passenger:</h4>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedPassenger('aastha')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedPassenger === 'aastha'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                <User className="w-4 h-4" />
                Aastha
              </button>
              <button
                onClick={() => setSelectedPassenger('yubaraj')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedPassenger === 'yubaraj'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                <User className="w-4 h-4" />
                Yubaraj (Dad)
              </button>
            </div>
          </div>
        )}

        {/* Ticket Details */}
        {currentTicket && (
          <div className="p-4">
            <div className="mb-4">
              {dayNumber === 15 ? (
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{currentTicket.passengers}</span>
                </div>
              ) : (
                <>
                  {currentTicket.passenger && (
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{currentTicket.passenger}</span>
                    </div>
                  )}
                  
                  {currentTicket.seat && (
                    <div className="text-sm text-gray-600 mb-2">
                      Seat: {currentTicket.seat}
                    </div>
                  )}
                  
                  {currentTicket.reference && (
                    <div className="text-sm text-gray-600 mb-2">
                      Reference: {currentTicket.reference}
                    </div>
                  )}
                  
                  {currentTicket.ticketCode && (
                    <div className="text-sm text-gray-600 mb-2">
                      Ticket Code: {currentTicket.ticketCode}
                    </div>
                  )}
                  
                  {currentTicket.price && (
                    <div className="text-sm text-gray-600 mb-2">
                      Price: {currentTicket.price}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Ticket Image */}
            <div className="bg-gray-100 rounded-lg p-2 text-center">
              <img
                src={`${import.meta.env.BASE_URL}${currentTicket.image}`}
                alt={`Ticket for ${currentTicket.passenger || 'passengers'}`}
                className="max-w-full h-auto rounded shadow-md mx-auto"
                style={{ maxHeight: '400px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div 
                className="text-gray-500 text-sm mt-4 hidden"
                style={{ display: 'none' }}
              >
                Ticket image not available
                <br />
                <span className="text-xs">{currentTicket.image}</span>
              </div>
            </div>
          </div>
        )}

        {!currentTicket && (
          <div className="p-4 text-center text-gray-500">
            No ticket available for this selection
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketViewer;