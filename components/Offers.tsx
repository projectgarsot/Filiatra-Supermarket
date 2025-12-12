import React from 'react';
import { Button } from './ui/Button';
import { Tag, Download } from 'lucide-react';

export const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-ab-red/5 to-orange-50 rounded-3xl p-8 md:p-12 border border-ab-red/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-ab-red/10 text-ab-red px-3 py-1 rounded-full text-sm font-bold mb-4">
                <Tag size={16} />
                <span>Περιορισμένης Διάρκειας</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Εβδομαδιαίες Προσφορές
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Ανακαλύψτε μεγάλες εκπτώσεις στις αγαπημένες σας μάρκες και φρέσκα προϊόντα. Οι προσφορές μας ανανεώνονται κάθε εβδομάδα για να σας προσφέρουν την καλύτερη αξία στην πόλη.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg">
                  Προβολή Φυλλαδίου
                </Button>
                <Button variant="outline" className="border-ab-red text-ab-red hover:bg-ab-red hover:text-white focus:ring-ab-red">
                  <Download className="mr-2 w-4 h-4" /> Λήψη PDF
                </Button>
              </div>
            </div>

            {/* Visual Representation of Flyer */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-ab-red to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300">
                  <img 
                    src="/images/SuperMarket5.jpg" 
                    alt="Weekly Offers Flyer" 
                    className="w-full h-auto object-cover max-w-md"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 text-center backdrop-blur-sm">
                    <span className="font-bold">Ισχύει μέχρι την Κυριακή</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};