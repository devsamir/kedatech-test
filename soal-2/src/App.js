import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="mx-auto relative max-w-[1440px]">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}

export default App;
