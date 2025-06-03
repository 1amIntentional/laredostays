import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bed, Bath, Car, Wifi, Utensils, Tv, Star, Filter, X } from 'lucide-react';

// Mock property database
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "Downtown District",
    price: { min: 600, max: 800 },
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800"
    ],
    amenities: ["Full Kitchen", "Designer Bathroom", "High-Speed WiFi", "Parking", "Smart TV"],
    description: "Luxury downtown apartment with modern finishes, perfect for business travelers and extended stays.",
    featured: true,
    tier: "premium"
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    location: "Quiet Neighborhood", 
    price: { min: 400, max: 600 },
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800"
    ],
    amenities: ["Full Kitchen", "Bathroom", "WiFi", "Parking", "Garden"],
    description: "Comfortable suburban home ideal for families and longer stays, with peaceful surroundings.",
    featured: false,
    tier: "standard"
  },
  {
    id: 3,
    title: "Executive Loft",
    location: "Business District",
    price: { min: 700, max: 900 },
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded6dcf9bc?w=800",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800"
    ],
    amenities: ["Gourmet Kitchen", "Luxury Bathroom", "High-Speed WiFi", "Parking", "Concierge"],
    description: "High-end executive loft with premium amenities for discerning business professionals.",
    featured: true,
    tier: "luxury"
  },
  {
    id: 4,
    title: "Charming Historic Unit",
    location: "Arts District",
    price: { min: 500, max: 700 },
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800"
    ],
    amenities: ["Full Kitchen", "Historic Charm", "WiFi", "Street Parking", "Character"],
    description: "Beautiful historic property with original details and modern conveniences.",
    featured: false,
    tier: "standard"
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    bedrooms: 'all',
    tier: 'all'
  });

  // Filter properties based on current filters
  useEffect(() => {
    let filtered = properties;
    
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price.min >= min && p.price.max <= max);
    }
    
    if (filters.bedrooms !== 'all') {
      filtered = filtered.filter(p => p.bedrooms === parseInt(filters.bedrooms));
    }
    
    if (filters.tier !== 'all') {
      filtered = filtered.filter(p => p.tier === filters.tier);
    }
    
    setFilteredProperties(filtered);
  }, [filters]);

  const PropertyCard = ({ property, onClick }) => (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={onClick}
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
          {property.amenities.length > 3 && (
            <span className="text-gray-500 text-xs">+{property.amenities.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );

  const PropertyDetail = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Gallery
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setCurrentImageIndex((prev) => 
                    prev === 0 ? property.images.length - 1 : prev - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentImageIndex((prev) => 
                    (prev + 1) % property.images.length
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2">
                {property.images.map((image, i) => (
                  <img 
                    key={i}
                    src={image}
                    alt={`${property.title} ${i + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                      i === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              <p className="text-xl text-gray-600 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {property.location}
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${property.price.min} - ${property.price.max}
                </div>
                <div className="text-gray-600">per week</div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-semibold">{property.sqft}</div>
                  <div className="text-sm text-gray-500">Sq Ft</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setCurrentPage('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Book This Property
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage === 'property' && selectedProperty) {
    return <PropertyDetail property={selectedProperty} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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

      {/* Home Page */}
      {currentPage === 'home' && (
        <div>
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
            </div>
            
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

          {/* Comparison Section */}
          <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                Hotel vs. Our Extended Stay Rentals
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold mb-6 text-red-700">Extended Stay Hotels</h3>
                  <ul className="space-y-4">
                    {[
                      '$150-200+ per night',
                      'Small, cramped rooms',
                      'Basic kitchenette',
                      'No real home comfort',
                      'Limited space & storage',
                      'Noisy hallways & neighbors',
                      'No personalized service'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold mb-6 text-green-700">Our Luxury Rentals</h3>
                  <ul className="space-y-4">
                    {[
                      '$400-800 per week',
                      'Spacious 2-bedroom homes',
                      'Full gourmet kitchen',
                      'True home away from home',
                      'Plenty of space & comfort',
                      'Quiet, private living',
                      'Personalized attention'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                What You Get With Our Rentals
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: '🏠', title: '2 Full Bedrooms', desc: 'Spacious bedrooms with comfortable beds and plenty of storage space' },
                  { icon: '👨‍🍳', title: 'Full Kitchen', desc: 'Complete kitchen with all appliances, cookware, and dining essentials' },
                  { icon: '🛁', title: 'Designer Bathrooms', desc: 'Beautiful, modern bathrooms with premium fixtures and amenities' },
                  { icon: '💰', title: 'Save Money', desc: 'Up to 60% savings compared to extended stay hotels' }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
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

      {/* Gallery Page */}
      {currentPage === 'gallery' && (
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Available Properties</h1>
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            {/* Filters */}
            {filterOpen && (
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    >
                      <option value="all">All Prices</option>
                      <option value="400-600">$400 - $600</option>
                      <option value="600-800">$600 - $800</option>
                      <option value="800-1000">$800+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bedrooms</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={filters.bedrooms}
                      onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                    >
                      <option value="all">Any</option>
                      <option value="2">2 Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Property Type</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={filters.tier}
                      onChange={(e) => setFilters({...filters, tier: e.target.value})}
                    >
                      <option value="all">All Types</option>
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard 
                  key={property.id}
                  property={property}
                  onClick={() => {
                    setSelectedProperty(property);
                    setCurrentPage('property');
                  }}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No properties match your current filters.</p>
                <button 
                  onClick={() => setFilters({ priceRange: 'all', bedrooms: 'all', tier: 'all' })}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Page */}
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
                
