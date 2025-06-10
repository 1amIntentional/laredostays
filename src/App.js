import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bed, Bath, X, Menu, Users } from 'lucide-react';
import { properties } from './data/properties';
import PropertyDetail from './components/PropertyDetail';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      const response = await fetch("https://formspree.io/f/xrbkpwey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please call us at (929) 268-6011' 
      });
    }
  };

  const PropertyCard = ({ property }) => (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => {
        setSelectedProperty(property);
        setCurrentPage('property');
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          ${property.weeklyRate || property.price.max}/week
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </p>
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <span className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            {property.bedrooms} bed
          </span>
          <span className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            {property.bathrooms} bath
          </span>
          <span className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {property.occupancy} guests
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {property.amenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-gray-500 text-xs">+{property.amenities.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );

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

  // Show PropertyDetail if property is selected
  if (currentPage === 'property' && selectedProperty) {
    return (
      <PropertyDetail 
        property={selectedProperty}
        onBack={() => setCurrentPage('gallery')}
        onContact={() => setCurrentPage('contact')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LaredoStays
            </div>
            
            <div className="hidden md:flex gap-2">
              <NavigationButton page="home" label="Home" />
              <NavigationButton page="gallery" label="Properties" />
              <NavigationButton page="contact" label="Contact" />
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

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

      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {currentPage === 'home' && (
        <div>
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stop Paying<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Hotel Prices
                </span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Discover luxury extended stay rentals with full kitchens, designer bathrooms, and spacious 2-bedroom layouts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  View Properties
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Meet Your Host: Jairo
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Central Laredo native, interior designer/engineer, and Airbnb Superhost investing in his community
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">4.88</div>
                  <div className="text-sm sm:text-base text-gray-600">Star Rating</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">76+</div>
                  <div className="text-sm sm:text-base text-gray-600">Guest Reviews</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl mb-2">🏠</div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">3</div>
                  <div className="text-sm sm:text-base text-gray-600">Years Hosting</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl mb-2">🏘️</div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm sm:text-base text-gray-600">Properties</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://i.imgur.com/GtyfKfL.jpeg"
                      alt="Jairo with Chuy"
                      className="w-full h-auto object-cover"
                      style={{ minHeight: '400px' }}
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">4.88⭐</div>
                      <div className="text-sm text-gray-600">Superhost</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Homegrown Excellence, World-Class Experience
                  </h3>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-800 font-semibold italic">
                      "Building businesses and enjoying the journey. Always up for a challenge and thinking big."
                    </p>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm a <strong>Central Laredo native</strong> who spent years in New York, Austin, and the Dominican Republic before returning home to invest in my community. As an <strong>interior designer, engineer, and real estate developer</strong>, I bring a unique perspective to hospitality.
                  </p>

                  <p className="text-base text-gray-600 leading-relaxed">
                    Every LaredoStays property has been <strong>personally remodeled and designed by me</strong> with meticulous attention to detail. I'm still very involved in every aspect of your stay.
                  </p>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🐕</div>
                      <div>
                        <p className="text-green-800 font-semibold">Meet Chuy, My Blue Heeler</p>
                        <p className="text-green-700 text-sm">Guest favorite and kids' best friend!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="py-12 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-800">
                Hotel vs. Our Extended Stay Rentals
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 sm:p-8 rounded-3xl border-l-4 border-red-500">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-red-700">Extended Stay Hotels</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-3 flex-shrink-0" />
                      $150-200+ per night
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-3 flex-shrink-0" />
                      Small, cramped rooms
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-3 flex-shrink-0" />
                      Basic kitchenette
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-3 flex-shrink-0" />
                      No real home comfort
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-3xl border-l-4 border-green-500">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-700">Our Luxury Rentals</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      Spacious 2-bedroom homes
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      Full gourmet kitchen
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      True home away from home
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-800">
                What You Get With Our Rentals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">🏠</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">2 Full Bedrooms</h3>
                  <p className="text-sm sm:text-base text-gray-600">Spacious bedrooms with comfortable beds and plenty of storage space</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">👨‍🍳</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Full Kitchen</h3>
                  <p className="text-sm sm:text-base text-gray-600">Complete kitchen with all appliances, cookware, and dining essentials</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">🛁</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Designer Bathrooms</h3>
                  <p className="text-sm sm:text-base text-gray-600">Beautiful, modern bathrooms with premium fixtures and amenities</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">💰</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Save Money</h3>
                  <p className="text-sm sm:text-base text-gray-600">Up to 60% savings compared to extended stay hotels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Unbeatable Weekly Rates</h2>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">$400 - $800</div>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">Per Week • Based on Property & Finishes</p>
              <p className="text-base sm:text-lg opacity-80 mb-6 sm:mb-8">Perfect for business travelers, relocations, temporary housing, and extended vacations</p>
              <button 
                onClick={() => setCurrentPage('gallery')}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                View Available Properties
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'gallery' && (
        <div className="py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Available Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="py-8 sm:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Experience Real Comfort?</h1>
              <p className="text-lg sm:text-xl text-gray-600">Contact LaredoStays today to book your extended stay</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Call or Text</div>
                      <a href="tel:+19292686011" className="text-blue-600 text-lg sm:text-xl font-bold hover:text-blue-800 break-all">
                        +1 (929) 268-6011
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Email</div>
                      <a href="mailto:bebaza.america@gmail.com" className="text-gray-600 hover:text-blue-600 text-sm sm:text-base break-all">
                        bebaza.america@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6">Quick Contact</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    disabled={formStatus.submitting}
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    disabled={formStatus.submitting}
                  />
                  <textarea 
                    placeholder="Tell us about your needs (dates, length of stay, etc.)"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    disabled={formStatus.submitting}
                  />
                  <button 
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                      formStatus.submitting 
                        ? 'bg-gray-400 cursor-not-allowed text-gray-200' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {formStatus.submitted && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                      <span className="block sm:inline">✓ Message sent successfully! We'll respond within 24 hours.</span>
                    </div>
                  )}
                  
                  {formStatus.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                      <span className="block sm:inline">{formStatus.error}</span>
                    </div>
                  )}
                </form>
                
                <div className="mt-4 text-center">
                  <a 
                    href="sms:+19292686011?body=Hi, I'm interested in LaredoStays properties."
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Or text us at (929) 268-6011
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App;