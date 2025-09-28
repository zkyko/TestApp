import React from 'react';
import { X, LayoutDashboard, CalendarDays, MessageCircle } from 'lucide-react';

const SideNav = ({ isOpen, onClose, activeView, setActiveView }) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'today', label: 'Today', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'timeline', label: 'Timeline', icon: <CalendarDays className="w-5 h-5" /> },
    { id: 'chat', label: 'Assistant', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
        onClick={onClose}
      ></div>

      {/* Side Panel */}
      <div className={`absolute inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Travel App</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => { setActiveView(item.id); onClose(); }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-colors ${
                    activeView === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
