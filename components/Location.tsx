import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-ab-blue font-bold tracking-wider uppercase text-sm mb-2 block">Επισκεφθείτε μας</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Τοποθεσία & Ώρες Λειτουργίας</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Στοιχεία Επικοινωνίας</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-ab-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Διεύθυνση</h4>
                  <p className="text-gray-600">
                    1ο χλμ Ε.Ο. Φιλιατρών–Κυπαρισσίας<br/>
                    24300, Φιλιατρά, Μεσσηνία
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-ab-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Τηλέφωνο</h4>
                  <p className="text-gray-600 hover:text-ab-blue transition-colors">
                    <a href="tel:+302761033835">+30 27610 33835</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-ab-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Ώρες Λειτουργίας</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between w-40"><span>Δευ - Παρ:</span> <span>08:00 - 21:00</span></li>
                    <li className="flex justify-between w-40"><span>Σάββατο:</span> <span>08:00 - 20:00</span></li>
                    <li className="flex justify-between w-40"><span>Κυριακή:</span> <span className="text-ab-red">Κλειστά</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button fullWidth onClick={() => window.open('https://maps.google.com/?q=Super+Market+Filiatron+P.G.+Alexandropoulos', '_blank')}>
                <Navigation className="w-4 h-4 mr-2" /> Λήψη Οδηγιών
              </Button>
            </div>
          </div>

          {/* Map (Simulated with an image/iframe placeholder) */}
          <div className="lg:col-span-2 h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
             {/* Using an iframe to google maps for the actual location */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.456345634563!2d21.5833!3d37.1500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA5JzAwLjAiTiAyMcKwMzUnMDAuMCJF!5e0!3m2!1sen!2sgr!4v1600000000000!5m2!1sen!2sgr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               title="Google Maps Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             
             {/* Overlay for aesthetic interaction */}
             <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs text-gray-500 pointer-events-none">
               Χρησιμοποιήστε Ctrl + Scroll για ζουμ
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};