import React, { useState, useRef, useEffect } from 'react';
import { generateRecipeAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Button } from './ui/Button';
import { Sparkles, Send, ChefHat, Loader2 } from 'lucide-react';

export const RecipeAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await generateRecipeAdvice(userMessage.text);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Συγγνώμη, δεν μπορώ να ελέγξω το ντουλάπι αυτή τη στιγμή. Παρακαλώ ελέγξτε το κλειδί API σας.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-ab-blue text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Intro */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles size={16} className="text-yellow-300" />
              <span>Νέα AI Λειτουργία</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Δεν είστε σίγουροι τι να μαγειρέψετε σήμερα;
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Ρωτήστε τον "Σεφ Φίλο", τον έξυπνο βοηθό μαγειρικής σας! Πείτε μας τι υλικά έχετε στο ψυγείο σας και θα σας προτείνουμε νόστιμες ελληνικές συνταγές που μπορείτε να φτιάξετε με προϊόντα από το κατάστημά μας.
            </p>
            <div className="flex gap-3 flex-wrap">
               <div className="bg-white/10 px-3 py-1 rounded-full text-sm">🍅 "Τι μπορώ να φτιάξω με ντομάτες;"</div>
               <div className="bg-white/10 px-3 py-1 rounded-full text-sm">🧀 "Συνταγή για τυροκαυτερή"</div>
            </div>
          </div>

          {/* Right Side: Chat Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-gray-50 border-b p-4 flex items-center gap-3">
                <div className="bg-ab-blue/10 p-2 rounded-full">
                  <ChefHat className="text-ab-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Σεφ Φίλος</h3>
                  <p className="text-xs text-gray-500">Με την υποστήριξη του Gemini AI</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center p-4">
                    <ChefHat className="w-12 h-12 mb-3 opacity-20" />
                    <p>Γεια σας! Είμαι ο Σεφ Φίλος. Τι υλικά έχετε σήμερα;</p>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-ab-blue text-white rounded-br-none' 
                          : msg.isError 
                            ? 'bg-red-50 text-red-600 rounded-bl-none'
                            : 'bg-white text-gray-700 rounded-bl-none'
                      }`}
                    >
                      {msg.role === 'model' ? (
                        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-gray-500 text-sm">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Ο Σεφ Φίλος σκέφτεται...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 bg-white border-t flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="π.χ. Έχω ζυμαρικά και κολοκυθάκια..."
                  className="flex-1 border rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ab-blue/50"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading || !query.trim()}
                  className="rounded-full w-12 h-12 !p-0 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 ml-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};