import MessageBubble from './MessageBubble';
import { Bot, Loader2 } from 'lucide-react';

export default function MessagesList({ messages, isLoading, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(m => <MessageBubble key={m.id} message={m} />)}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
