import React, { useState } from 'react';
import TodayView from './components/TodayView';
import TimelineView from './components/TimelineView';
import ChatView from './components/ChatView/ChatView';
import SideNav from './components/SideNav';
import { Menu, Bot, CalendarDays, LayoutDashboard } from 'lucide-react';

const App = () => {
  const [activeView, setActiveView] = useState('today'); // today, timeline, chat
  const [isNavOpen, setIsNavOpen] = useState(false);

  const viewConfig = {
    today: {
      component: <TodayView />,
      title: "Today's Itinerary",
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    timeline: {
      component: <TimelineView />,
      title: 'Trip Timeline',
      icon: <CalendarDays className="w-5 h-5" />
    },
    chat: {
      component: <ChatView />,
      title: 'Travel Assistant',
      icon: <Bot className="w-5 h-5" />
    }
  };

  return (
    <div className="h-screen bg-gray-100 font-sans flex flex-col">
      <SideNav 
        isOpen={isNavOpen} 
        onClose={() => setIsNavOpen(false)} 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <header className="bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <button 
              onClick={() => setIsNavOpen(true)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 mr-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {viewConfig[activeView].icon}
              <h1 className="text-lg font-semibold text-gray-800">{viewConfig[activeView].title}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {viewConfig[activeView].component}
      </main>
    </div>
  );
};

export default App;