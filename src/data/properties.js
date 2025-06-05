// src/data/properties.js
// LaredoStays Property Database - REAL PROPERTIES

export const properties = [
  {
    id: 1,
    title: "Casita Luna",
    location: "North Laredo",
    price: { min: 650, max: 700 },
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    occupancy: 4,
    sqft: 800, // estimated
    images: [
      "https://i.imgur.com/Md9j1y5.jpeg", 
      "https://i.imgur.com/DDYjqFa.jpeg",
      "https://i.imgur.com/uRlcDqD.jpeg",
      "https://i.imgur.com/TLR3NXP.jpeg",
      "https://i.imgur.com/6zYR5Io.jpeg"
    ],
    amenities: [
      "Gated community with secure parking",
      "Modern bathroom w/ luxurious finishes", 
      "Fully equipped kitchen",
      "Smart TV",
      "Free in-unit washer and dryer"
    ],
    description: "Escape to Casita Luna—a chic retreat featuring a luxurious bathroom, fully equipped kitchen, and cozy living space with modern decor. Relax on plush bedding, enjoy community grills under a shaded palapa, and feel secure with gated access. Just steps from major shopping like Target and Sephora. Perfect for a comfortable stay in a prime location.",
    featured: true,
    tier: "premium",
    weeklyRate: 700,
    highlights: ["Gated Community", "Luxury Finishes", "Prime Location"]
  },
  {
    id: 2,
    title: "Casita Luz",
    location: "North Laredo",
    price: { min: 600, max: 650 },
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    occupancy: 4,
    sqft: 950, // estimated
    images: [
      "https://i.imgur.com/GuXfLTD.jpeg",
      "https://i.imgur.com/CPlhAFh.jpeg",
      "https://i.imgur.com/4YTBKWL.jpeg",
      "https://i.imgur.com/7UErCFW.jpeg",
      "https://i.imgur.com/O352c6C.jpeg",
      "https://i.imgur.com/uqiywBo.jpeg"
    ],
    amenities: [
      "Gated community with secure parking",
      "Modern bathroom w/ luxurious finishes",
      "Fully equipped kitchen", 
      "Smart TV",
      "Free in-unit washer and dryer"
    ],
    description: "Welcome to Casa Luz—your golden-hour escape just steps from HEB, Target, Starbucks, and more. This light-filled retreat blends warm terracotta floors, soft textures, and glowing gold finishes for a calming, elegant stay. Sip coffee at the cozy dining nook, enjoy a rain-style shower, or stream your favorite shows on the smart TV. Ideal for a peaceful getaway, work trip, or girls' weekend. Wi-Fi, full kitchen, and serene vibes included.",
    featured: false,
    tier: "premium",
    weeklyRate: 650,
    highlights: ["Golden Hour Vibes", "Rain Shower", "Shopping Nearby"]
  },
  {
    id: 3,
    title: "Casita Cactus",
    location: "North Laredo",
    price: { min: 625, max: 700 },
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    occupancy: 4,
    sqft: 950, // estimated
    images: [
      "https://i.imgur.com/AONMgX8.jpeg",
      "https://i.imgur.com/Md9j1y5.jpeg",
      "https://i.imgur.com/RSnx39B.jpeg",
      "https://i.imgur.com/7dW4RyE.jpeg",
      "https://i.imgur.com/Xf9WI1d.jpeg",
      "https://i.imgur.com/RCyWPUu.jpeg",
      "https://i.imgur.com/5YTh94o.jpeg"
    ],
    amenities: [
      "Gated community with secure parking",
      "Modern bathroom w/ luxurious finishes",
      "Fully equipped kitchen",
      "Smart TV", 
      "Free in-unit washer and dryer"
    ],
    description: "Welcome to Cactus Casa—your cozy, sunlit escape just minutes from Target, Sephora, HEB, Starbucks, and more. This thoughtfully designed stay blends warmth and style with green accents, a glowing bathroom, and comfy touches throughout. Enjoy coffee in the bright dining nook, stream shows on the smart TV, or unwind in the fenced yard under a leafy tree. Whether you're here for shopping, work, or self-care, Casita Cactus is your stylish home base.",
    featured: true,
    tier: "premium",
    weeklyRate: 675,
    highlights: ["Sunlit Design", "Fenced Yard", "Green Accents"]
  },
  {
    id: 4,
    title: "5 Bed | Cozy & Best Value",
    location: "North Laredo", 
    price: { min: 600, max: 700 },
    bedrooms: 2,
    bathrooms: 2,
    beds: 5,
    occupancy: 5,
    sqft: 1100, // estimated
    images: [
      "https://i.imgur.com/y8YDPWw.jpeg",
      "https://i.imgur.com/oEz3OW5.jpeg",
      "https://i.imgur.com/OlcKsE3.jpeg", 
      "https://i.imgur.com/CFW1NSw.jpeg"
    ],
    amenities: [
      "Washer and dryer",
      "Full Kitchen", 
      "2 parking spots",
      "Smart TV",
      "High Speed WiFi"
    ],
    description: "The apartment has two bedrooms and two full bathrooms. Designed to accommodate 5 people at full capacity. You will find all your essentials, including a full kitchen, washer, dryer, terrace, and a BBQ.",
    featured: false,
    tier: "standard",
    weeklyRate: 700,
    highlights: ["Best Value", "Sleeps 5", "BBQ & Terrace"]
  },
  {
    id: 5,
    title: "New Build | Cozy and Best Value",
    location: "Central Laredo",
    price: { min: 500, max: 625 },
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    occupancy: 4,
    sqft: 900, // estimated
    images: [
      "https://i.imgur.com/ILIBLlg.jpeg",
      "https://i.imgur.com/zkiGsvw.jpeg",
      "https://i.imgur.com/NJtO8Wt.jpeg",
      "https://i.imgur.com/bLwfvl1.jpeg",
      "https://i.imgur.com/5h5RtaY.jpeg",
      "https://i.imgur.com/1MbyWpb.jpeg",
      "https://i.imgur.com/P3pqwzl.jpeg",
      "https://i.imgur.com/9UloukV.jpeg",
      "https://i.imgur.com/1Ctxwsy.jpeg"
    ],
    amenities: [
      "On-premise parking",
      "Modern bathroom",
      "Fully equipped kitchen",
      "Smart TV"
    ],
    description: "Experience our modern home instead of a limited hotel room. This property features a full kitchen, dining area, and cozy couch. Conveniently located, just 3 minutes from I-35 and 5 minutes from Highway 59. Perfect for a centrally placed and comfortable stay! Parking on premise available first come, first serve. Free street parking available.",
    featured: false,
    tier: "standard",
    weeklyRate: 550,
    highlights: ["New Build", "Central Location", "I-35 Access"]
  },
  // Add more properties here as we collect them
];

// Helper function to calculate weekly prices from nightly rates
export const calculateWeeklyPrice = (nightly, discount = 0.15) => {
  const weekly = nightly * 7;
  const discounted = weekly * (1 - discount);
  return {
    min: Math.floor(discounted / 50) * 50, // Round to nearest $50
    max: Math.floor(weekly / 50) * 50
  };
};

// Property categories for filtering
export const propertyTiers = {
  standard: { name: "Standard", color: "blue" },
  premium: { name: "Premium", color: "purple" },
  luxury: { name: "Luxury", color: "gold" }
};

// Amenity categories for better organization
export const amenityCategories = {
  essential: ["Full Kitchen", "High Speed WiFi", "Free Parking"],
  comfort: ["Smart TV", "Washer and dryer", "AC", "BBQ"],
  luxury: ["Gated community", "Luxury finishes", "Concierge"],
  family: ["Multiple beds", "Terrace", "BBQ", "2 parking spots"],
  business: ["High Speed WiFi", "Smart TV", "Workspace"]
};

export default properties;