import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
import { getTodaysTrip, tripData } from '../data/tripData';

const ChatView = () => {
  const [messages, setMessages] = useState(() => {
    const today = getTodaysTrip();
    const isFirstDay = today.dayNumber === 1;
    const isLastDay = today.dayNumber === 15;
    const currentTime = new Date();
    const hour = currentTime.getHours();
    
    // Generate unique welcome messages for Aastha
    const generatePersonalizedWelcome = () => {
      const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
      const welcomeVariations = {
        first: [
          `${timeGreeting}, Aastha! 🌟 Your incredible European adventure begins today in ${today.city}! I'm your personal AI travel companion, and I've got all your trip details memorized. Ready to make some amazing memories?`,
          `Hey Aastha! ✈️ ${timeGreeting} and welcome to Europe! Your 15-day journey starts right here in ${today.city}. I know every detail of your itinerary and I'm excited to help you navigate this adventure!`,
          `${timeGreeting}, Aastha! 🎒 Today marks the beginning of your epic European odyssey! From ${today.city} to Munich, I'll be your AI guide every step of the way. What's your first question?`,
          `Aastha! 🌍 ${timeGreeting} from ${today.city}! Your European dream trip officially starts today. I've studied your entire itinerary and I'm here to make sure everything goes perfectly. How can I help you kick things off?`
        ],
        middle: [
          `${timeGreeting}, Aastha! 🚂 Day ${today.dayNumber} in ${today.city} - you're really getting into the rhythm of European travel now! ${today.transport?.to?.station ? `I see you're heading to ${today.transport.to.station} today.` : ''} What's on your mind?`,
          `Hey Aastha! ☀️ ${timeGreeting} from ${today.city}! You're ${Math.floor((today.dayNumber / 15) * 100)}% through your amazing journey. ${today.transport ? `Your ${today.transport.type} to ${today.transport.to?.station} leaves at ${today.transport.depart}.` : 'Perfect day for exploring!'} How can I assist?`,
          `${timeGreeting}, Aastha! 🏰 Another beautiful day in ${today.city} awaits! Day ${today.dayNumber} of your European adventure. ${today.attractions?.length ? `I see you have ${today.attractions.length} attractions planned.` : 'A flexible exploration day ahead!'} What would you like to know?`,
          `Aastha! 🎨 ${timeGreeting} from gorgeous ${today.city}! You're halfway through your incredible journey and doing amazing. ${today.hotel ? `You're staying at ${today.hotel.name} tonight.` : ''} Ready for today's adventures?`,
          `${timeGreeting}, Aastha! 🌈 Day ${today.dayNumber} in ${today.city} - every day brings new discoveries! ${today.notes?.length ? 'I have some important notes for today too.' : ''} What questions can I answer for you?`
        ],
        last: [
          `${timeGreeting}, Aastha! 🥺 I can't believe it's your final day in Europe! You've had such an incredible journey from Zurich to ${today.city}. Let's make sure your departure goes smoothly. How can I help?`,
          `Aastha! ✈️ ${timeGreeting} on your last European morning! What an amazing 15-day adventure you've had. ${today.transport ? `Your departure journey starts at ${today.transport.depart}.` : ''} I'm here to help wrap everything up perfectly.`,
          `${timeGreeting}, Aastha! 🌅 Your final European sunrise in ${today.city}. You've explored Switzerland, Italy, Austria, and Germany - what incredible memories you've made! Ready to head home with all these amazing experiences?`
        ]
      };
      
      let variations;
      if (isFirstDay) variations = welcomeVariations.first;
      else if (isLastDay) variations = welcomeVariations.last;
      else variations = welcomeVariations.middle;
      
      // Pick a random variation
      return variations[Math.floor(Math.random() * variations.length)];
    };
    
    return [
      {
        id: 1,
        type: 'bot',
        content: generatePersonalizedWelcome(),
        timestamp: new Date()
      }
    ];
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState('deepseek-chat'); // 'deepseek-chat' or 'deepseek-reasoner'
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const currentTrip = getTodaysTrip();

  // Scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Create comprehensive context about the user's trip for DeepSeek
  const createComprehensiveTripContext = () => {
    const today = currentTrip;
    const currentDay = today.dayNumber;
    const totalDays = tripData.length;
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    // Determine time of day context
    let timeContext = "";
    if (currentHour < 6) timeContext = "very early morning";
    else if (currentHour < 12) timeContext = "morning";
    else if (currentHour < 17) timeContext = "afternoon";
    else if (currentHour < 21) timeContext = "evening";
    else timeContext = "late evening";
    
    // Get previous, current, and next days for better context
    const previousDay = tripData.find(day => day.dayNumber === currentDay - 1);
    const nextDay = tripData.find(day => day.dayNumber === currentDay + 1);
    
    // Calculate days remaining
    const daysRemaining = totalDays - currentDay;
    
    // Determine current season and likely weather
    const isOctober = true; // Since trip is October 4-18
    const weatherContext = isOctober ? "Autumn weather - pack layers, expect 10-20°C, possible rain" : "";
    
    // Get current location coordinates for better context
    const currentCoords = today.hotel?.coords || today.transport?.from?.coords || [0, 0];
    const [latitude] = currentCoords;
    const isNorthern = latitude > 47; // Rough indication if in Switzerland/Germany vs Italy
    
    const context = `You are Aastha's personal AI travel assistant for her 15-day Europe trip (October 4-18, 2025). You know Aastha by name and have complete knowledge of her detailed itinerary. You should provide personalized, contextual advice specifically for Aastha's journey.

=== CURRENT SITUATION ===
Time: ${timeContext} (${currentTime.toLocaleTimeString()})
Date: ${today.date} (Day ${currentDay} of ${totalDays})
Location: ${today.city}
Days Remaining: ${daysRemaining}
Weather Season: ${weatherContext}
Region: ${isNorthern ? 'Northern Europe (cooler)' : 'Southern Europe (milder)'}

=== TRIP OVERVIEW ===
Route: Zurich → Interlaken → Milan → Florence → Rome → Venice → Salzburg → Munich
Countries: Switzerland → Italy → Austria → Germany
Total Duration: 15 days
Travel Style: Train-focused, cultural exploration, mix of cities and alpine experiences
Trip Phase: ${currentDay <= 3 ? 'Swiss Alps exploration' : currentDay <= 8 ? 'Italian art cities tour' : currentDay <= 11 ? 'Austrian/German culture' : 'Trip conclusion'}

=== TODAY'S CONTEXT (Day ${currentDay}/${totalDays}) ===
Current Location: ${today.city}
Date: ${today.date}

Hotel: ${today.hotel?.name || 'N/A'}
Address: ${today.hotel?.address || 'N/A'}
Check-in: ${today.hotel?.checkIn || 'N/A'} | Check-out: ${today.hotel?.checkOut || 'N/A'}
${today.hotel?.phone ? `Phone: ${today.hotel.phone}` : ''}
${today.hotel?.reservationLink ? 'Reservation: Confirmed online' : ''}

${today.transport ? `Transport Today:
Type: ${today.transport.type.toUpperCase()}
From: ${today.transport.from?.station} (${today.transport.depart})
To: ${today.transport.to?.station} (${today.transport.arrive})
Duration: ${today.transport.duration}
Operator: ${today.transport.operator}
${today.transport.platform ? `Platform: ${today.transport.platform}` : ''}
${today.transport.ticketLink ? 'Ticket: BOOKED' : 'Ticket: NEED TO BOOK'}
${today.transport.transfer ? `\n🚂 TRANSFER: ${today.transport.transfer.station} (${today.transport.transfer.arriveAt}-${today.transport.transfer.departAt})\nLayover: ${today.transport.transfer.layoverDuration}${today.transport.transfer.canExplore ? ` - CAN EXPLORE! (~${today.transport.transfer.explorationTime})` : ''}` : ''}` : 'No transport scheduled today'}

Planned Attractions:
${today.attractions?.map(a => `- ${a.name} (${a.address})`).join('\n') || 'None specifically listed - flexible exploration day'}

Important Notes:
${today.notes?.map(note => `- ${note}`).join('\n') || 'No special notes'}

=== CONTEXTUAL INFORMATION ===
${previousDay ? `Yesterday (Day ${previousDay.dayNumber}): ${previousDay.city}` : 'Trip start'}
${nextDay ? `Tomorrow (Day ${nextDay.dayNumber}): ${nextDay.city}` : 'Trip end - departure day'}

=== COMPLETE ITINERARY ===
${tripData.map(day => {
  const status = day.dayNumber < currentDay ? '[COMPLETED]' : day.dayNumber === currentDay ? '[TODAY]' : '[UPCOMING]';
  return `${status} Day ${day.dayNumber} (${day.date}): ${day.city}
  Hotel: ${day.hotel?.name || 'N/A'}
  Transport: ${day.transport ? `${day.transport.from?.station} → ${day.transport.to?.station} (${day.transport.depart})` : 'None'}
  Key attractions: ${day.attractions?.map(a => a.name).slice(0, 2).join(', ') || 'Flexible'}`;
}).join('\n\n')}

=== YOUR EXPERTISE ===
You understand:
• European train systems (SBB, Trenitalia, Italo, ÖBB, DB) - schedules, platforms, tickets
• Swiss Alps tourism (Interlaken, Lauterbrunnen, Jungfraujoch) - cable cars, weather, timing
• Italian art cities (Milan, Florence, Rome, Venice) - museums, restaurants, navigation
• Austrian/German culture (Salzburg, Munich) - customs, food, attractions
• Practical travel logistics (luggage storage, connections, timing, backup plans)
• Local customs, food recommendations, budgeting, seasonal weather
• Emergency situations and problem-solving
• Current time context for activity suggestions

=== COMMON QUESTION TYPES TO EXPECT ===
1. **Logistics**: "How do I get from X to Y?", "Where do I store luggage?", "What time should I leave?"
2. **Recommendations**: "What should I see today?", "Where should I eat?", "What's worth visiting?"
3. **Planning**: "How should I organize my day?", "What's the best route?", "How much time do I need?"
4. **Cultural**: "What are local customs?", "How much should I tip?", "What should I wear?"
5. **Practical**: "Where can I buy tickets?", "How much should I budget?", "What's the weather like?"
6. **Problem-solving**: "My train is delayed", "I lost my ticket", "How do I handle X situation?"
7. **Food**: "Where should I eat?", "What's the local specialty?", "Any dietary restrictions help?"
8. **Shopping**: "What should I buy?", "Where are the best shops?", "What are good souvenirs?"
9. **Timing**: "Is it too late for X?", "When should I start heading to the station?", "What's open now?"
10. **Transfers**: "Can I explore during my layover?", "How much time do I have?", "What's near the station?"

=== RESPONSE GUIDELINES ===
- Always address Aastha by name when appropriate
- Reference specific details from her itinerary (hotel names, train times, etc.)
- Consider the current time when making suggestions
- Factor in her location and upcoming transport when planning
- Provide backup options and contingency plans
- Be conversational but precise with directions and timing
- Consider the season (October) for weather-appropriate advice
- Reference her specific bookings and confirmations
- Anticipate potential issues and provide proactive solutions
- Use a friendly, supportive tone - you're her travel companion

You are not just a travel guide - you are Aastha's personal travel companion who knows her exact situation and can provide incredibly specific, actionable advice tailored just for her.`;
    
    return context;
  };

  const callDeepSeekAPI = async (userMessage) => {
    try {
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            {
              role: 'system',
              content: createComprehensiveTripContext()
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content;
      } else {
        throw new Error('Unexpected response format from DeepSeek API');
      }
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setError(null);

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Call DeepSeek API
      const botResponse = await callDeepSeekAPI(userMessage);

      // Add bot response
      const newBotMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newBotMessage]);
    } catch (error) {
      setError('Sorry, I had trouble connecting to my AI service. Please try again.');
      
      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. In the meantime, you can check your itinerary in the Today and Timeline tabs!",
        timestamp: new Date(),
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const suggestedQuestions = [
    "What's my hotel info, and how do I get there?",
    "What time should I leave for my train?",
    "What should I pack for today's weather?",
    "Plan my perfect day with timing",
    "Where should I eat near my hotel?",
    "What are today's must-see attractions?",
    "Help me optimize my train connections",
    "What should I know about local customs?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Bot className="w-6 h-6" />
            <h1 className="text-lg font-semibold">Travel Assistant</h1>
          </div>
          <p className="text-blue-100 text-sm">Powered by DeepSeek AI ({selectedModel === 'deepseek-chat' ? 'Fast Mode' : 'Thinking Mode'}) • Day {currentTrip.dayNumber}: {currentTrip.city}</p>
          
          {/* Model Selector */}
          <div className="mt-2 flex justify-center">
            <div className="bg-blue-700 rounded-lg p-1 flex">
              <button
                onClick={() => setSelectedModel('deepseek-chat')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  selectedModel === 'deepseek-chat'
                    ? 'bg-white text-blue-600 font-medium'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Fast Mode
              </button>
              <button
                onClick={() => setSelectedModel('deepseek-reasoner')}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  selectedModel === 'deepseek-reasoner'
                    ? 'bg-white text-blue-600 font-medium'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Thinking Mode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : message.isError
                  ? 'bg-red-50 border border-red-200 text-red-800'
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              <div className="flex items-start gap-2">
                {message.type === 'bot' && (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    message.isError ? 'bg-red-200' : 'bg-blue-100'
                  }`}>
                    {message.isError ? (
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    ) : (
                      <Bot className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                )}
                <div className="flex-1">
                  <div className={`whitespace-pre-wrap text-sm leading-relaxed ${
                    message.type === 'user' ? 'text-white' : message.isError ? 'text-red-800' : 'text-gray-800'
                  }`}>
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 opacity-75 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
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

      {/* Suggested Questions */}
      {messages.length <= 1 && !isLoading && (
        <div className="px-4 pb-2">
          <p className="text-sm text-gray-600 mb-3 font-medium">I can help you with:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedQuestions.slice(0, 6).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-left text-xs p-3 bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-500 text-center">
            💡 I know Aastha's complete itinerary, hotel details, train times, and can provide specific local advice!
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="px-4 pb-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span className="text-sm text-red-800">{error}</span>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about your trip..."
            className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="1"
            style={{ minHeight: '44px', maxHeight: '120px' }}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;