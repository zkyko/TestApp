// src/hooks/useChatMessages.js
import { useEffect, useRef, useState } from 'react';
import { getTodaysTrip } from '../data/tripData';
import { createComprehensiveTripContext } from '../lib/tripContext';
import { deepseekChat } from '../lib/deepseekClient';

export function useChatMessages(selectedModel) {
  const [messages, setMessages] = useState(() => {
    const today = getTodaysTrip();
    const hour = new Date().getHours();
    const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    const first = `${timeGreeting}, Aastha! 🌟 Your incredible European adventure begins today in ${today.city}! I'm your personal AI travel companion.`;
    return [{ id: 1, type: 'bot', content: first, timestamp: new Date() }];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMessage = inputMessage.trim();
    setInputMessage('');
    setError(null);

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', content: userMessage, timestamp: new Date() }]);
    setIsLoading(true);
    try {
      const system = createComprehensiveTripContext();
      const content = await deepseekChat({ model: selectedModel, system, user: userMessage });
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', content, timestamp: new Date() }]);
    } catch (e) {
      setError('Sorry, I had trouble connecting to my AI service. Please try again.');
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', isError: true, content: "I'm having trouble connecting. Check the Today/Timeline tabs meanwhile!", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, setMessages, inputMessage, setInputMessage, isLoading, error, send, messagesEndRef, inputRef };
}
