import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { LegalInfo } from './components/LegalInfo';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-ab-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <LegalInfo />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;