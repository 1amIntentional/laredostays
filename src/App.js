import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ComparisonSection from './components/ComparisonSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import PropertyGallery from './components/PropertyGallery';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavigationButton = ({ page, label, isMobile = false }) => (
    <button 
      onClick={() => {
        setCurrentPage(page);
        if (isMobile) setMobileMenuOpen(false);
      }}
      className={`${
        isMobile 
          ? 'w-full text-left px-6 py-4 text-lg font-medium border-b border-gray-100 last:border-b-0' 
          : 'px-3 py-2 rounded-lg text-sm font-medium'
      } transition-colors ${
        currentPage === page 
          ? isMobile 
            ? 'bg-blue-50 text-blue-600 border-l-4 border-l-blue-600' 
            : 'bg-blue-100 text-blue-600'
          : isMobile
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LaredoStays
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              <NavigationButton page="home" label="Home" />
              <NavigationButton page="gallery" label="Properties" />
              <NavigationButton page="contact" label="Contact" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-30">
            <div className="py-2">
              <NavigationButton page="home" label="Home" isMobile />
              <NavigationButton page="gallery" label="Properties" isMobile />
              <NavigationButton page="contact" label="Contact" isMobile />
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Page Content */}
      {currentPage === 'home' && (
        <div>
          <HeroSection onNavigate={setCurrentPage} />
          <AboutUsSection />
          <ComparisonSection />
          <FeaturesSection />
          <PricingSection onNavigate={setCurrentPage} />
        </div>
      )}

      {currentPage === 'gallery' && <PropertyGallery />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;
