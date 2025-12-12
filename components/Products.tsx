import React from 'react';
import { Department } from '../types';
import { Leaf, Milk, Beef, Croissant, Coffee, Wine, Home, Sparkles } from 'lucide-react';

export const Products: React.FC = () => {
  const departments: Department[] = [
    { id: '1', name: 'Μαναβική', iconName: 'Leaf', description: 'Φρέσκα φρούτα & λαχανικά', image: '/images/SuperMarket13.jpg' },
    { id: '2', name: 'Γαλακτοκομικά', iconName: 'Milk', description: 'Τοπική Φέτα & γιαούρτια', image: '/images/SuperMarket7.jpg' },
    { id: '3', name: 'Κρεοπωλείο & Αλλαντικά', iconName: 'Beef', description: 'Εκλεκτά κρέατα & αλλαντικά', image: '/images/SuperMarket1.jpg' },
    { id: '4', name: 'Αρτοποιείο', iconName: 'Croissant', description: 'Φρέσκο ψωμί καθημερινά', image: '/images/SuperMarket6.jpg' },
    { id: '5', name: 'Τρόφιμα', iconName: 'Coffee', description: 'Ζυμαρικά, λάδι & βασικά είδη', image: '/images/SuperMarket10.jpg' },
    { id: '6', name: 'Κάβα', iconName: 'Wine', description: 'Ελληνικές & διεθνείς ετικέτες', image: '/images/SuperMarket9.jpg' },
    { id: '7', name: 'Είδη Σπιτιού', iconName: 'Home', description: 'Καθαριστικά & χαρτικά', image: '/images/SuperMarket11.jpg' },
    { id: '8', name: 'Προσωπική Φροντίδα', iconName: 'Sparkles', description: 'Υγιεινή & καλλυντικά', image: '/images/SuperMarket12.jpg' },
  ];

  const getIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch(name) {
      case 'Leaf': return <Leaf {...props} />;
      case 'Milk': return <Milk {...props} />;
      case 'Beef': return <Beef {...props} />;
      case 'Croissant': return <Croissant {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Wine': return <Wine {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return null;
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-ab-blue font-bold tracking-wider uppercase text-sm mb-2 block">Τμήματα</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Όλα όσα Χρειάζεστε</h2>
          <p className="text-gray-600">Από τα πιο φρέσκα τοπικά προϊόντα μέχρι τις αγαπημένες σας διεθνείς μάρκες, ανακαλύψτε την ποιότητα σε κάθε διάδρομο.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer h-64">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="bg-ab-blue w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:bg-ab-red transition-colors">
                  {getIcon(dept.iconName)}
                </div>
                <h3 className="text-xl font-bold mb-1">{dept.name}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                  {dept.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};