import { Bot, User, AlertCircle } from 'lucide-react';
import { formatTime } from '../../utils/time';

export default function MessageBubble({ message }) {
  const isUser = message.type === 'user';
  const isError = message.isError;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
        isUser ? 'bg-blue-600 text-white'
        : isError ? 'bg-red-50 border border-red-200 text-red-800'
        : 'bg-white border border-gray-200 text-gray-800'
      }`}>
        <div className="flex items-start gap-2">
          {!isUser && (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${isError ? 'bg-red-200' : 'bg-blue-100'}`}>
              {isError ? <AlertCircle className="w-4 h-4 text-red-600" /> : <Bot className="w-4 h-4 text-blue-600" />}
            </div>
          )}
          <div className="flex-1">
            <div className={`whitespace-pre-wrap text-sm leading-relaxed ${isUser ? 'text-white' : isError ? 'text-red-800' : 'text-gray-800'}`}>
              {message.content}
            </div>
            <div className={`text-xs mt-2 opacity-75 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
              {formatTime(message.timestamp)}
            </div>
          </div>
          {isUser && (
            <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <User className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
