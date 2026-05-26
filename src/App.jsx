// ============================================================
// App.jsx  — OCP: add sections without modifying existing ones
// selectedPlan state is lifted here so PricingCard → ContactForm
// can communicate without prop-drilling through unrelated layers.
// ============================================================

import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PricingSection from './components/sections/PricingSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  // Lifted state: plan selected from pricing cards → pre-fills contact form
  const [selectedPlan, setSelectedPlan] = useState('');

  function handleSelectPlan(planTitle) {
    setSelectedPlan(planTitle);
    // Smooth-scroll to the contact section
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection id="inicio" />
        <AboutSection id="acerca" />
        <ServicesSection id="servicios" />
        <PricingSection id="precios" onSelectPlan={handleSelectPlan} />
        <ContactSection id="contacto" selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <Footer />
    </>
  );
}
