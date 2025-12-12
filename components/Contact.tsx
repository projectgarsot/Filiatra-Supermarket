import React, { useState } from 'react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left Decor Side */}
            <div className="bg-ab-blue p-8 text-white md:col-span-2 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-serif mb-4">Επικοινωνήστε μαζί μας</h3>
                <p className="text-blue-100 text-sm">Έχετε κάποιο αίτημα προϊόντος ή ερώτηση για τις υπηρεσίες μας; Στείλτε μας μήνυμα.</p>
              </div>
              <div className="relative z-10 mt-12">
                <div className="text-xs uppercase tracking-widest text-blue-200 mb-1">Email</div>
                <div className="text-sm font-medium break-words">abfoodmarket.filiatra@gmail.com</div>
              </div>
              
              {/* Abstract Circle Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Right Form Side */}
            <div className="p-8 md:col-span-3">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">✓</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Το μήνυμα εστάλη!</h4>
                  <p className="text-gray-600">Σας ευχαριστούμε που επικοινωνήσατε μαζί μας. Θα σας απαντήσουμε σύντομα.</p>
                  <Button variant="ghost" className="mt-6" onClick={() => setFormState('idle')}>Αποστολή νέου</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ονοματεπώνυμο</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ab-blue focus:border-transparent outline-none transition-all"
                      placeholder="Γιάννης Παπαδόπουλος"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Διεύθυνση Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ab-blue focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Μήνυμα</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ab-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                    ></textarea>
                  </div>
                  <Button type="submit" fullWidth disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};