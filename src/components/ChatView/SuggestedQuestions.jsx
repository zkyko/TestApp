export default function SuggestedQuestions({ visible, isLoading, suggested, onPick }) {
  if (!visible || isLoading) return null;
  return (
    <div className="px-4 pb-2">
      <p className="text-sm text-gray-600 mb-3 font-medium">I can help you with:</p>
      <div className="grid grid-cols-2 gap-2">
        {suggested.slice(0, 6).map((q, i) => (
          <button
            key={i}
            onClick={() => onPick(q)}
            className="text-left text-xs p-3 bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-500 text-center">
        💡 I know Aastha's complete itinerary, hotel details, train times, and can provide specific local advice!
      </div>
    </div>
  );
}
