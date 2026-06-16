import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PricingSection from './components/sections/PricingSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  function handleSelectPlan() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
