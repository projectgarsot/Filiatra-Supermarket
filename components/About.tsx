import React from 'react';
import { StoreStat } from '../types';
import { Store, ShoppingCart, Car, Users } from 'lucide-react';

export const About: React.FC = () => {
  const stats: StoreStat[] = [
    { label: "Χώρος Πώλησης", value: "410m²", iconName: "Store" },
    { label: "Ταμεία", value: "3 Σημεία", iconName: "ShoppingCart" },
    { label: "Θέσεις Στάθμευσης", value: "50+", iconName: "Car" },
    { label: "Χρόνια Λειτουργίας", value: "10+", iconName: "Users" },
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Store': return <Store className="w-8 h-8 text-ab-blue" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-ab-blue" />;
      case 'Car': return <Car className="w-8 h-8 text-ab-blue" />;
      case 'Users': return <Users className="w-8 h-8 text-ab-blue" />;
      default: return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
             <img 
               src="/images/SuperMarket2.jpg" 
               alt="Εσωτερικό καταστήματος" 
               className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
             />
             <img 
               src="/images/SuperMarket3.jpg" 
               alt="Φιλικό προσωπικό" 
               className="rounded-2xl shadow-lg w-full h-64 object-cover"
             />
          </div>

          {/* Content */}
          <div>
            <span className="text-ab-blue font-bold tracking-wider uppercase text-sm mb-2 block">Η Ιστορία μας</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Μια Παράδοση Ποιότητας στα Φιλιατρά
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Ιδρύθηκε το 2012 από τον Παναγιώτη Γ. Αλεξανδρόπουλο, το σούπερ μάρκετ μας έχει εξελιχθεί από ένα τοπικό όραμα σε ακρογωνιαίο λίθο της κοινότητας των Φιλιατρών. Ως περήφανο μέλος του δικτύου franchise της AB Food Market, συνδυάζουμε την αξιοπιστία ενός μεγάλου ονόματος με τη ζεστασιά μιας οικογενειακής επιχείρησης.
              </p>
              <p>
                Δεσμευόμαστε να υποστηρίζουμε τους τοπικούς Μεσσήνιους παραγωγούς, προσφέροντας μια προσεκτικά επιλεγμένη ποικιλία φρέσκων προϊόντων, τυριών και ειδών παντοπωλείου μαζί με τις διεθνείς μάρκες που εμπιστεύεστε.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    {getIcon(stat.iconName)}
                  </div>
                  <div className="font-bold text-xl text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};