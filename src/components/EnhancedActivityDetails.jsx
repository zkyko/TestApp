import React from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin, AlertCircle, Utensils, Train, Plane, ShoppingBag, Bed } from 'lucide-react';
import { getEnhancedActivityData } from '../data/enhancedActivityData';

const iconMapping = {
  travel: <Train className="w-5 h-5 text-blue-500" />,
  activity: <MapPin className="w-5 h-5 text-green-500" />,
  food: <Utensils className="w-5 h-5 text-orange-500" />,
  lodging: <Bed className="w-5 h-5 text-purple-500" />,
  default: <Clock className="w-5 h-5 text-gray-500" />
};

const EnhancedActivityDetails = ({ dayNumber, isOpen, onToggle }) => {
  const data = getEnhancedActivityData(dayNumber);

  const renderSchedule = (schedule) => (
    <div className="mt-4 space-y-4">
      {schedule.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4 pl-2 border-l-2 border-gray-200">
          <div className="flex-shrink-0 w-12 text-right">
            <div className="text-sm font-semibold text-gray-800">{item.time}</div>
          </div>
          <div className="flex-shrink-0 mt-1">
            {iconMapping[item.type] || iconMapping.default}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{item.title}</p>
            {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-800">Detailed Itinerary</h3>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
      </button>

      {isOpen && data && (
        <div className="mt-2 p-4 bg-white rounded-b-lg shadow-lg">
          <h4 className="text-xl font-bold text-gray-900 mb-4">{data.title}</h4>

          {data.needsBooking && data.needsBooking.length > 0 && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <h5 className="font-semibold text-red-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Action Required: Book Now
              </h5>
              <ul className="mt-2 ml-1 space-y-1 list-disc list-inside text-red-700">
                {data.needsBooking.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {data.schedule && renderSchedule(data.schedule)}

          {data.restaurants && (
            <div className="mt-6">
              <h5 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-orange-500" />
                Dining Suggestions
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.restaurants.map((r, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-800">{r.name}</p>
                    <p className="text-sm text-gray-600">{r.type}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.notes && (
             <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
              <h5 className="font-semibold text-yellow-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Important Notes
              </h5>
              <ul className="mt-2 ml-1 space-y-1 list-disc list-inside text-yellow-700">
                {data.notes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EnhancedActivityDetails;
