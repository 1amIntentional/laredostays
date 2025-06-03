# LaredoStays - Extended Stay Rentals

A modern, responsive website for luxury extended stay rental properties. Built with React and designed to convert hotel guests into long-term rental customers.

## 🏠 About LaredoStays

LaredoStays offers premium extended stay rentals as a smart alternative to expensive hotel stays. Our properties feature:

- **2 Full Bedrooms** with comfortable furnishings
- **Complete Kitchens** with all appliances and cookware
- **Designer Bathrooms** with modern fixtures
- **60% Savings** compared to extended stay hotels
- **Weekly Rates** from $400-$800 based on property tier

Perfect for business travelers, relocations, temporary housing, and extended vacations.

## 🌐 Live Website

**Production URL:** [Your Vercel URL Here]

## 🚀 Features

### ✨ Homepage
- Eye-catching hero section with gradient backgrounds
- Hotel vs. rental comparison charts
- Feature highlights and benefits
- Clear pricing display
- Call-to-action buttons

### 🏘️ Property Gallery
- Dynamic property listings with filtering
- Filter by price range, bedrooms, and property type
- Property cards with images, amenities, and pricing
- Responsive grid layout

### 🔍 Property Details
- Individual property pages with image carousels
- Detailed property information and amenities
- Pricing and booking options
- Mobile-optimized viewing

### 📞 Contact System
- Professional contact page with business information
- Contact form with date and duration selection
- Clickable phone number: [+1 (929) 268-6011](tel:+19292686011)
- Direct email link: [bebaza.america@gmail.com](mailto:bebaza.america@gmail.com)

## 🛠️ Technology Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** GitHub

## 📁 Project Structure

```
laredo-stays/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── App.js             # Main React component
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/extended-stay-rentals.git
   cd extended-stay-rentals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

## 🎨 Customization

### Adding New Properties

Edit the `properties` array in `src/App.js`:

```javascript
const properties = [
  {
    id: 5,
    title: "Your New Property",
    location: "Property Location",
    price: { min: 500, max: 700 },
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    images: [
      "https://your-image-url.com/image1.jpg",
      "https://your-image-url.com/image2.jpg"
    ],
    amenities: ["Full Kitchen", "WiFi", "Parking"],
    description: "Property description here...",
    featured: false,
    tier: "standard" // standard, premium, or luxury
  }
];
```

### Updating Contact Information

Update contact details in the Contact page section of `src/App.js`:

```javascript
// Phone number
<a href="tel:+19292686011">+1 (929) 268-6011</a>

// Email
<a href="mailto:bebaza.america@gmail.com">bebaza.america@gmail.com</a>
```

### Modifying Styling

The website uses Tailwind CSS classes. Update className attributes to modify styling:

```javascript
// Example: Changing button colors
className="bg-blue-600 hover:bg-blue-700" // Blue button
className="bg-green-600 hover:bg-green-700" // Green button
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (320px - 767px)

## 🔧 Deployment

### Automatic Deployment (Vercel)

This repository is connected to Vercel for automatic deployments:

1. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Update property listings"
   git push origin main
   ```

2. **Vercel automatically deploys** within 1-2 minutes

### Manual Deployment Options

- **Vercel:** Connect GitHub repo at [vercel.com](https://vercel.com)
- **Netlify:** Drag & drop build folder at [netlify.com](https://netlify.com)
- **GitHub Pages:** Enable in repository settings

## 📊 Analytics & Performance

### Performance Optimizations
- Responsive images with proper sizing
- Efficient React state management
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for images

### Recommended Analytics
- Google Analytics 4
- Hotjar for user behavior
- Google Search Console for SEO

## 🤝 Business Information

**LaredoStays Extended Stay Rentals**

📞 **Phone:** [+1 (929) 268-6011](tel:+19292686011)  
📧 **Email:** [bebaza.america@gmail.com](mailto:bebaza.america@gmail.com)  
⏰ **Hours:** Available 7 days a week  
⚡ **Response Time:** Usually within 2 hours  

## 🎯 Target Audience

- Business travelers on extended assignments
- People relocating to new cities
- Families needing temporary housing
- Anyone staying 1 week to 2+ months
- Hotel guests looking for better value and space

## 💡 Future Enhancements

### Phase 2 Features
- [ ] Online booking system with calendar
- [ ] Payment processing integration
- [ ] Property management admin panel
- [ ] Guest portal for current stays
- [ ] Email automation for inquiries

### Phase 3 Features
- [ ] Customer reviews and ratings
- [ ] Virtual property tours
- [ ] Multi-language support
- [ ] Advanced search and filters
- [ ] Mobile app development

## 📈 SEO & Marketing

### Current SEO Features
- Semantic HTML structure
- Meta descriptions and titles
- Mobile-responsive design
- Fast loading times

### Marketing Integration Ready
- Google Ads landing page optimized
- Social media sharing ready
- Email marketing compatible
- Lead capture forms included

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

**Image Loading Issues:**
- Ensure image URLs are HTTPS
- Check image URL accessibility
- Use placeholder images for testing

**Mobile Display Issues:**
- Check Tailwind responsive classes
- Test on actual devices
- Verify viewport meta tag

## 📝 License

This project is proprietary and confidential. All rights reserved to LaredoStays.

## 📞 Support

For technical support or business inquiries:

- **Technical Issues:** Create a GitHub issue
- **Business Inquiries:** [bebaza.america@gmail.com](mailto:bebaza.america@gmail.com)
- **Urgent Matters:** [+1 (929) 268-6011](tel:+19292686011)

---

**Last Updated:** June 2025  
**Version:** 1.0.0  
**Built with ❤️ for LaredoStays**
