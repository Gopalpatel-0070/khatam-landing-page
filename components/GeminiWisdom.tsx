
import React, { useState } from 'react';
import { Loader2, MessageSquareText } from 'lucide-react';
import { getGeminiWisdom } from '../services/geminiService';
import { GeminiResponse } from '../types';

const GeminiWisdom: React.FC = () => {
  const [wisdom, setWisdom] = useState<GeminiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWisdom = async () => {
    setLoading(true);
    const result = await getGeminiWisdom("Explain why 'Time rahte use kar lena chahiye tha' is important.");
    setWisdom(result);
    setLoading(false);
  };

  return (
    <div className="w-full">
      {!wisdom && !loading ? (
        <button
          onClick={fetchWisdom}
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-500 shadow-lg"
        >
          View Insight
        </button>
      ) : (
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl relative transition-all duration-500">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-4">
              <Loader2 className="animate-spin text-slate-500 mb-4" size={32} />
              <p className="text-slate-500 font-medium">Loading insight...</p>
            </div>
          ) : (
            <div className="text-left space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <MessageSquareText size={14} />
                  <span>Insight</span>
                </div>
                <button 
                  onClick={() => setWisdom(null)}
                  className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-bold uppercase"
                >
                  Clear
                </button>
              </div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                {wisdom?.advice}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiWisdom;
