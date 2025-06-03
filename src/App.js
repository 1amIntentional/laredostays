import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bed, Bath, X, Menu } from 'lucide-react';

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

// About Us Section Component
const AboutUsSection = () => {
  const reviews = [
    {
      name: "Don",
      location: "Astatula, FL",
      rating: 5,
      months: 11,
      text: "I am in the Laredo area frequently for work, and usually stay long enough to make an Airbnb make sense. Jairo's place is not the newest or the most spacious, but it was solid in every way, and well worth what I paid. Clean, amenities as advertised, Jairo was super-responsive and the area is quiet and safe. I would definitely consider staying at Jairo's location on a return trip to Laredo...definitely recommend."
    },
    {
      name: "Quentin",
      location: "New York, NY", 
      rating: 5,
      months: 7,
      text: "This was a great place to stay. A bunch of space, and a quiet street where you don't have to worry about noisy neighbors. Jairo was very responsive and helpful with any questions I had and was willing to accommodate me however I needed."
    },
    {
      name: "María",
      location: "Atlixco, Mexico",
      rating: 5,
      months: 8,
      text: "Such a friendly person that makes you feel like family, always attentive to what you need and always willing to help. Chuy is the most adorable thing that exists, if his little Bluey fans are going to love him as much as my little one; he admits pets and is friendly with them. It is a love with children. Our stay was very enjoyable, the place was excellent. Going forward it will always be our preferred place in Laredo."
    },
    {
      name: "Bea",
      location: "Houston, TX",
      rating: 5,
      months: 5,
      text: "Jairo was an exceptional host. He was very responsive to any questions and helpful. The unit felt safe, clean and was in a perfect location. If you are looking for a place in the Laredo area, I would recommend Jairo's place in the highest regard. Again, great host and great place! We would definitely book again."
    },
    {
      name: "Mayte",
      location: "Saltillo, Mexico",
      rating: 5,
      months: 1,
      text: "Our stay at Jairo's house in Laredo was simply perfect! The place was immaculately clean, with every detail very well cared for. The house is very comfortable and well-equipped; it made us feel right at home from the moment we arrived. Plus, the location is excellent – literally '100' – with stores like Target, HEB and Starbucks just around the corner. Jairo was an exceptional host. He answered all our questions very quickly and even came in person to help us with the TV. We were really impressed by their dedication and kindness."
    }
  ];

  const stats = [
    { number: "4.88", label: "Star Rating", icon: "⭐" },
    { number: "76+", label: "Guest Reviews", icon: "💬" },
    { number: "3", label: "Years Hosting", icon: "🏠" },
    { number: "10+", label: "Properties", icon: "🏘️" }
  ];

  const credentials = [
    { icon: "🎓", title: "Education", detail: "St. John's University" },
    { icon: "🏗️", title: "Profession", detail: "Interior Designer / Engineer" },
    { icon: "🏢", title: "Developer", detail: "Real Estate Developer" },
    { icon: "🏆", title: "Airbnb Status", detail: "Superhost" },
    { icon: "🗣️", title: "Languages", detail: "English & Spanish" },
    { icon: "📍", title: "Homegrown", detail: "Central Laredo Native" }
  ];

  const locations = [
    { place: "New York", icon: "🗽", experience: "Business & Design" },
    { place: "Austin", icon: "🤠", experience: "Tech & Innovation" },
    { place: "Dominican Republic", icon: "🏝️", experience: "International Projects" },
    { place: "Laredo", icon: "🏡", experience: "Community Investment" }
  ];

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Meet Your Host: Jairo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Central Laredo native, interior designer/engineer, and Airbnb Superhost investing in his community through exceptional extended stays
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Personal Story with Photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Photo Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Jairo with Chuy at SpaceX"
                className="w-full h-auto object-cover"
                style={{ minHeight: '400px' }}
              />
              {/* Note: Replace the src above with your actual uploaded photo URL */}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.88⭐</div>
                <div className="text-sm text-gray-600">Superhost</div>
              </div>
            </div>
          </div>

          {/* Story Side */}
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
              Every LaredoStays property has been <strong>personally remodeled and designed by me</strong> with meticulous attention to detail. I'm not just a property owner - I'm still very involved in every aspect of your stay, ensuring the quality and comfort that has earned me <strong>Superhost status</strong> with a 4.88-star rating.
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🐕</div>
                <div>
                  <p className="text-green-800 font-semibold">Meet Chuy, My Blue Heeler</p>
                  <p className="text-green-700 text-sm">Guest favorite and kids' best friend - you might spot us around the properties!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Journey */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            From Laredo to the World, Back to Laredo
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-3">{loc.icon}</div>
                <div className="font-bold text-gray-800 mb-1">{loc.place}</div>
                <div className="text-sm text-gray-600">{loc.experience}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {credentials.map((cred, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-center">
              <div className="text-3xl mb-3">{cred.icon}</div>
              <div className="font-semibold text-gray-800 mb-1">{cred.title}</div>
              <div className="text-sm text-gray-600">{cred.detail}</div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What Our Guests Say
            </h3>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">4.88 from 76+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.months} months ago</span>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  "{review.text.length > 150 ? review.text.substring(0, 150) + "..." : review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose LaredoStays?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-semibold text-gray-700">Personally Designed & Remodeled</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⭐</span>
              </div>
              <span className="font-semibold text-gray-700">Airbnb Superhost</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🏠</span>
              </div>
              <span className="font-semibold text-gray-700">Still Very Involved</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl">
            <p className="text-gray-600 text-lg italic mb-4">
              "I'm attentive to detail and have remodeled and designed all the units myself. I'm still very involved with LaredoStays because your comfort is my priority."
            </p>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                🏡 Investing in My Community 
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

      {currentPage === 'home' && (
        <div>
          {/* Hero Section - Mobile Optimized */}
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

          {/* About Us Section */}
          <AboutUsSection />

          {/* Comparison Section - Mobile Optimized */}
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
                      $400-800 per week
                    </li>
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

          {/* Features Section - Mobile Optimized */}
          <div className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-800">
                What You Get With Our Rentals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

          {/* Pricing Section - Mobile Optimized */}
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
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <textarea 
                    placeholder="Tell us about your needs"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <button 
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base"
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

export default App;-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">🏠</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">2 Full Bedrooms</h3>
                  <p className="text-sm sm:text-base text-gray-600">Spacious bedrooms with comfortable beds and plenty of storage space</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl sm:text-4xl mb-4">👨‍🍳</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Full Kitchen</h3>
                  <p className="text-sm sm:text-base text-gray-600">Complete kitchen with all appliances, cookware, and dining essentials</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center shadow
