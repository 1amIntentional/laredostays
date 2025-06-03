import React from 'react';

const AboutUsSection = () => {
  const reviews = [
    {
      name: "Don", location: "Astatula, FL", rating: 5, months: 11,
      text: "I am in the Laredo area frequently for work, and usually stay long enough to make an Airbnb make sense. Jairo's place is not the newest or the most spacious, but it was solid in every way, and well worth what I paid. Clean, amenities as advertised, Jairo was super-responsive and the area is quiet and safe. I would definitely consider staying at Jairo's location on a return trip to Laredo...definitely recommend."
    },
    {
      name: "Quentin", location: "New York, NY", rating: 5, months: 7,
      text: "This was a great place to stay. A bunch of space, and a quiet street where you don't have to worry about noisy neighbors. Jairo was very responsive and helpful with any questions I had and was willing to accommodate me however I needed."
    },
    {
      name: "María", location: "Atlixco, Mexico", rating: 5, months: 8,
      text: "Such a friendly person that makes you feel like family, always attentive to what you need and always willing to help. Chuy is the most adorable thing that exists, if his little Bluey fans are going to love him as much as my little one; he admits pets and is friendly with them. It is a love with children. Our stay was very enjoyable, the place was excellent. Going forward it will always be our preferred place in Laredo."
    },
    {
      name: "Bea", location: "Houston, TX", rating: 5, months: 5,
      text: "Jairo was an exceptional host. He was very responsive to any questions and helpful. The unit felt safe, clean and was in a perfect location. If you are looking for a place in the Laredo area, I would recommend Jairo's place in the highest regard. Again, great host and great place! We would definitely book again."
    },
    {
      name: "Mayte", location: "Saltillo, Mexico", rating: 5, months: 1,
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

export default AboutUsSection;
