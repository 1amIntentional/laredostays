// src/components/PropertyDetail.js
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Bed, Bath, Users, Star, Wifi, Car } from 'lucide-react';

const PropertyDetail = ({ property, onBack, onContact }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const getAmenityIcon = (amenity) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return <Wifi className="w-4 h-4" />;
    if (lowerAmenity.includes('parking')) return <Car className="w-4 h-4" />;
    if (lowerAmenity.includes('kitchen')) return <span className="w-4 h-4 flex items-center justify-center">🍳</span>;
    if (lowerAmenity.includes('washer')) return <span className="w-4 h-4 flex items-center justify-center">🧺</span>;
    if (lowerAmenity.includes('tv')) return <span className="w-4 h-4 flex items-center justify-center">📺</span>;
    if (lowerAmenity.includes('gated')) return <span className="w-4 h-4 flex items-center justify-center">🔒</span>;
    if (lowerAmenity.includes('bbq')) return <span className="w-4 h-4 flex items-center justify-center">🔥</span>;
    return <span className="w-4 h-4 flex items-center justify-center">✓</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Properties
          </button>
          <button 
            onClick={onContact}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Host
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Image Gallery */}
          <div>
            <div className="relative h-96 rounded-2xl overflow-hidden mb-4 bg-gray-200">
              {property.images && property.images.length > 0 ? (
                <img 
                  src={property.images[currentImageIndex]}
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No image available
                </div>
              )}
              
              {/* Navigation Arrows */}
              {property.images && property.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {property.images && property.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {property.images && property.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {property.images.map((image, i) => (
                  <img 
                    key={i}
                    src={image}
                    alt={`${property.title} thumbnail ${i + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-all ${
                      i === currentImageIndex ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div>
            <div className="mb-4">
              {property.featured && (
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  ⭐ Featured Property
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">{property.title}</h1>
              <p className="text-xl text-gray-600 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                {property.location}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-6 border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ${property.weeklyRate || property.price.max}/week
              </div>
              <div className="text-gray-600">Weekly rate • Extended stay discounts available</div>
              {property.price.min !== property.price.max && (
                <div className="text-sm text-gray-500 mt-1">
                  Range: ${property.price.min} - ${property.price.max}/week
                </div>
              )}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{property.bedrooms}</div>
                <div className="text-sm text-gray-500">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{property.bathrooms}</div>
                <div className="text-sm text-gray-500">Bathrooms</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">{property.occupancy}</div>
                <div className="text-sm text-gray-500">Guests</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <span className="text-2xl mb-2 block">🛏️</span>
                <div className="font-semibold">{property.beds}</div>
                <div className="text-sm text-gray-500">Beds</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">About This Property</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Highlights */}
            {property.highlights && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {property.highlights.map((highlight, i) => (
                    <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                    <div className="text-blue-600 mr-3">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button 
                onClick={onContact}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Book This Property
              </button>
              <button 
                onClick={() => window.open('tel:+19292686011')}
                className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 (929) 268-6011
              </button>
            </div>

            {/* Host Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Your Host: Jairo</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">4.88 rating</span>
                <span>•</span>
                <span>76+ reviews</span>
                <span>•</span>
                <span className="text-blue-600 font-medium">Superhost</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Interior designer/engineer with 3+ years hosting experience. Personally designed and still very involved with all properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;