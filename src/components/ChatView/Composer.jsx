import { Send, Loader2 } from 'lucide-react';

export default function Composer({ inputRef, value, onChange, onSend, disabled }) {
  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex gap-2">
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKey}
          placeholder="Ask me anything about your trip..."
          className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="1"
          style={{ minHeight: '44px', maxHeight: '120px' }}
          disabled={disabled}
        />
        <button
          onClick={onSend}
          disabled={!value.trim() || disabled}
          className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
        >
          {disabled ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
