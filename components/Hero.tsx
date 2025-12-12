
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/SuperMarket1.jpg" 
          alt="Τμήμα μαναβικής του Σούπερ Μάρκετ Φιλιατρών" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 bg-ab-blue/90 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <ShoppingBag size={16} />
            <span>Περήφανο μέλος της οικογένειας AB Food Market</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Ποιότητα & Φρεσκάδα <br/>
            <span className="text-blue-200">Για την Κοινότητά μας</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Εξυπηρετούμε τα Φιλιατρά από το 2012. Σας προσφέρουμε τα εκλεκτότερα τοπικά Μεσσηνιακά προϊόντα και διεθνείς μάρκες με τη φιλική εξυπηρέτηση που σας αξίζει.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={() => document.getElementById('legal')?.scrollIntoView({ behavior: 'smooth' })}>
              Εταιρικά Στοιχεία
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ab-blue" onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
              Βρείτε το Κατάστημα <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
