import React, { useState } from 'react';
import { Clock, Calendar, MessageCircle } from 'lucide-react';
import TodayView from './components/TodayView.jsx';
import TimelineView from './components/TimelineView.jsx';
import ChatView from './components/ChatView.jsx';

function App() {
  const [currentView, setCurrentView] = useState('today');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'today':
        return <TodayView />;
      case 'timeline':
        return <TimelineView />;
      case 'chat':
        return <ChatView />;
      default:
        return <TodayView />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderCurrentView()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setCurrentView('today')}
            className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ease-in-out ${
              currentView === 'today'
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
            }`}
          >
            <Clock className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Today</span>
          </button>

          <button
            onClick={() => setCurrentView('timeline')}
            className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ease-in-out ${
              currentView === 'timeline'
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Timeline</span>
          </button>

          <button
            onClick={() => setCurrentView('chat')}
            className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ease-in-out ${
              currentView === 'chat'
                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
            }`}
          >
            <MessageCircle className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;