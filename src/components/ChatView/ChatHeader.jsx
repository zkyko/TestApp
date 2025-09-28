import { Bot } from 'lucide-react';

export default function ChatHeader({ currentTrip, selectedModel, setSelectedModel }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Bot className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Travel Assistant</h1>
        </div>
        <p className="text-blue-100 text-sm">
          Powered by DeepSeek AI ({selectedModel === 'deepseek-chat' ? 'Fast Mode' : 'Thinking Mode'})
          • Day {currentTrip.dayNumber}: {currentTrip.city}
        </p>
        <div className="mt-2 flex justify-center">
          <div className="bg-blue-700 rounded-lg p-1 flex">
            <button
              onClick={() => setSelectedModel('deepseek-chat')}
              className={`px-3 py-1 text-xs rounded transition-colors ${selectedModel === 'deepseek-chat' ? 'bg-white text-blue-600 font-medium' : 'text-blue-100 hover:text-white'}`}
            >
              Fast Mode
            </button>
            <button
              onClick={() => setSelectedModel('deepseek-reasoner')}
              className={`px-3 py-1 text-xs rounded transition-colors ${selectedModel === 'deepseek-reasoner' ? 'bg-white text-blue-600 font-medium' : 'text-blue-100 hover:text-white'}`}
            >
              Thinking Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
