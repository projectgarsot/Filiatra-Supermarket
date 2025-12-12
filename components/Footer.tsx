import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h5 className="text-white font-serif text-xl font-bold mb-4">Σούπερ Μάρκετ Φιλιατρών</h5>
            <p className="text-sm text-gray-400 mb-4 max-w-xs">
              Π.Γ. Αλεξανδρόπουλος Μονοπρόσωπη Ι.Κ.Ε.
              Παρέχουμε ποιοτικά προϊόντα και εξυπηρετούμε την κοινότητα από το 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-4">Γρήγοροι Σύνδεσμοι</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-ab-blue transition-colors">Σχετικά με εμάς</a></li>
              <li><a href="#products" className="hover:text-ab-blue transition-colors">Προϊόντα</a></li>
              <li><a href="#offers" className="hover:text-ab-blue transition-colors">Εβδομαδιαίες Προσφορές</a></li>
              <li><a href="#" className="hover:text-ab-blue transition-colors">Πρόγραμμα Πιστότητας ΑΒ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h5 className="text-white font-bold mb-4">Πληροφορίες Εταιρείας</h5>
             <ul className="space-y-2 text-sm text-gray-400">
               <li>Ιδιοκτήτης: Παναγιώτης Γ. Αλεξανδρόπουλος</li>
               <li>ΑΦΜ: 800458766</li>
               <li>ΓΕΜΗ: 123667045000</li>
               <li>Διεύθυνση: 1ο χλμ Ε.Ο. Φιλιατρών–Κυπαρισσίας</li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Σούπερ Μάρκετ Φιλιατρών Π.Γ. Αλεξανδρόπουλος. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-white">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-white">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
};