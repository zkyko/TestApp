import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessagesList from './MessagesList';
import SuggestedQuestions from './SuggestedQuestions';
import Composer from './Composer';
import { useChatMessages } from '../../hooks/useChatMessages';
import { getTodaysTrip } from '../../data/tripData';

const suggestedDefaults = [
  "What's my hotel info, and how do I get there?",
  "What time should I leave for my train?",
  "What should I pack for today's weather?",
  "Plan my perfect day with timing",
  "Where should I eat near my hotel?",
  "What are today's must-see attractions?",
  "Help me optimize my train connections",
  "What should I know about local customs?"
];

export default function ChatView() {
  const [selectedModel, setSelectedModel] = useState('deepseek-chat');
  const { messages, inputMessage, setInputMessage, isLoading, error, send, messagesEndRef, inputRef } =
    useChatMessages(selectedModel);
  const currentTrip = getTodaysTrip();

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <ChatHeader currentTrip={currentTrip} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
      <MessagesList messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
      {error && (
        <div className="px-4 pb-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <span className="text-sm text-red-800">{error}</span>
          </div>
        </div>
      )}
      <SuggestedQuestions
        visible={messages.length <= 1}
        isLoading={isLoading}
        suggested={suggestedDefaults}
        onPick={(q) => { setInputMessage(q); inputRef.current?.focus(); }}
      />
      <Composer
        inputRef={inputRef}
        value={inputMessage}
        onChange={setInputMessage}
        onSend={send}
        disabled={isLoading}
      />
    </div>
  );
}
