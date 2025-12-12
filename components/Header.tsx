
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Σχετικά', href: '#about' },
    { name: 'Προϊόντα', href: '#products' },
    { name: 'Ισολογισμοί', href: '#legal' },
    { name: 'Τοποθεσία', href: '#location' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/images/ablogo.jpg" 
            alt="Λογότυπο ΑΒ" 
            className="h-10 w-auto rounded shadow-sm"
          />
          <div className={`p-2 rounded bg-white transition-transform group-hover:scale-105 shadow-sm`}>
             <span className="font-serif font-bold text-xl text-ab-blue leading-none block">
               ΦΙΛΙΑΤΡΩΝ
             </span>
             <span className="text-[0.6rem] uppercase tracking-wider text-gray-600 block text-center">
               Σούπερ Μάρκετ
             </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wide transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-ab-blue' : 'text-white hover:text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
               <a 
                 href="tel:+302761033835" 
                 className="flex items-center justify-center gap-2 text-gray-600 py-2"
               >
                 <Phone size={18} />
                 <span>+30 27610 33835</span>
               </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
