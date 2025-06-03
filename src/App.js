import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bed, Bath, X } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "Downtown District",
    price: { min: 600, max: 800 },
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
    amenities: ["Full Kitchen", "Designer Bathroom", "High-Speed WiFi", "Parking", "Smart TV"],
    description: "Luxury downtown apartment with modern finishes, perfect for business travelers and extended stays.",
    featured: true
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    location: "Quiet Neighborhood", 
    price: { min: 400, max: 600 },
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
    amenities: ["Full Kitchen", "Bathroom", "WiFi", "Parking", "Garden"],
    description: "Comfortable suburban home ideal for families and longer stays, with peaceful surroundings.",
    featured: false
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
          ${property.price.min}-${property.price.max}/week
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
          <span>{property.sqft} sqft</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {property.amenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LaredoStays
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'home' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('gallery')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'gallery' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                Properties
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'contact' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Stop Paying<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Hotel Prices
                </span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover luxury extended stay rentals with full kitchens, designer bathrooms, and spacious 2-bedroom layouts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  View Properties
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Hotel vs. Our Extended Stay Rentals
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-6 text-red-700">Extended Stay Hotels</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      $150-200+ per night
                    </li>
                    <li className="flex items-center text-gray-700">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      Small, cramped rooms
                    </li>
                    <li className="flex items-center text-gray-700">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      Basic kitchenette
                    </li>
                    <li className="flex items-center text-gray-700">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      No real home comfort
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold mb-6 text-green-700">Our Luxury Rentals</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      $400-800 per week
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      Spacious 2-bedroom homes
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      Full gourmet kitchen
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      True home away from home
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                What You Get With Our Rentals
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">2 Full Bedrooms</h3>
                  <p className="text-gray-600">Spacious bedrooms with comfortable beds and plenty of storage space</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">👨‍🍳</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Full Kitchen</h3>
                  <p className="text-gray-600">Complete kitchen with all appliances, cookware, and dining essentials</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">🛁</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Designer Bathrooms</h3>
                  <p className="text-gray-600">Beautiful, modern bathrooms with premium fixtures and amenities</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Save Money</h3>
                  <p className="text-gray-600">Up to 60% savings compared to extended stay hotels</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">Unbeatable Weekly Rates</h2>
              <div className="text-6xl font-bold mb-4">$400 - $800</div>
              <p className="text-xl mb-8 opacity-90">Per Week • Based on Property & Finishes</p>
              <p className="text-lg opacity-80">Perfect for business travelers, relocations, temporary housing, and extended vacations</p>
              <button 
                onClick={() => setCurrentPage('gallery')}
                className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                View Available Properties
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'gallery' && (
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Ready to Experience Real Comfort?</h1>
              <p className="text-xl text-gray-600">Contact LaredoStays today to book your extended stay</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Call or Text</div>
                      <a href="tel:+19292686011" className="text-blue-600 text-xl font-bold hover:text-blue-800">
                        +1 (929) 268-6011
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:bebaza.america@gmail.com" className="text-gray-600 hover:text-blue-600">
                        bebaza.america@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea 
                    placeholder="Tell us about your needs"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                    onClick={() => window.open('mailto:bebaza.america@gmail.com?subject=LaredoStays Inquiry')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
