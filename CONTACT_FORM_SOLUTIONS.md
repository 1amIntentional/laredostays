# Contact Form Implementation Solutions for LaredoStays

## Solution 1: EmailJS (Recommended - Free Tier)
**Best for:** Quick implementation without backend
**Cost:** Free up to 200 emails/month
**Setup Time:** 1-2 hours

### Implementation Steps:

1. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

2. **Update App.js with EmailJS integration:**
```javascript
import emailjs from '@emailjs/browser';

// Add to your App component
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
  phone: '', // Optional
  property: '' // Optional - which property they're interested in
});
const [formStatus, setFormStatus] = useState({
  submitting: false,
  submitted: false,
  error: null
});

// Initialize EmailJS (add to useEffect)
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY"); // Get from EmailJS dashboard
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true, submitted: false, error: null });
  
  try {
    const result = await emailjs.send(
      'service_xxxxx', // Your EmailJS service ID
      'template_xxxxx', // Your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        phone: formData.phone || 'Not provided',
        property_interest: formData.property || 'General inquiry',
        to_email: 'bebaza.america@gmail.com',
      }
    );
    
    if (result.status === 200) {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '', phone: '', property: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }
  } catch (error) {
    setFormStatus({ 
      submitting: false, 
      submitted: false, 
      error: 'Failed to send message. Please call us at (929) 268-6011' 
    });
  }
};

// Updated form JSX
<form onSubmit={handleSubmit} className="space-y-4">
  <input 
    type="text" 
    placeholder="Your Name"
    required
    value={formData.name}
    onChange={(e) => setFormData({...formData, name: e.target.value})}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={formStatus.submitting}
  />
  
  <input 
    type="email" 
    placeholder="Your Email"
    required
    value={formData.email}
    onChange={(e) => setFormData({...formData, email: e.target.value})}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={formStatus.submitting}
  />
  
  <input 
    type="tel" 
    placeholder="Phone Number (Optional)"
    value={formData.phone}
    onChange={(e) => setFormData({...formData, phone: e.target.value})}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={formStatus.submitting}
  />
  
  <select
    value={formData.property}
    onChange={(e) => setFormData({...formData, property: e.target.value})}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={formStatus.submitting}
  >
    <option value="">Select Property (Optional)</option>
    <option value="Casita Luna">Casita Luna</option>
    <option value="Casita Luz">Casita Luz</option>
    <option value="Casita Cactus">Casita Cactus</option>
    <option value="5 Bed Cozy">5 Bed | Cozy & Best Value</option>
    <option value="New Build">New Build | Cozy and Best Value</option>
    <option value="Casita Canela">Casita Canela</option>
  </select>
  
  <textarea 
    placeholder="Tell us about your needs (dates, length of stay, etc.)"
    rows={4}
    required
    value={formData.message}
    onChange={(e) => setFormData({...formData, message: e.target.value})}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    disabled={formStatus.submitting}
  />
  
  <button 
    type="submit"
    disabled={formStatus.submitting}
    className={`w-full py-3 rounded-lg font-semibold transition-all ${
      formStatus.submitting 
        ? 'bg-gray-400 cursor-not-allowed' 
        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
    }`}
  >
    {formStatus.submitting ? 'Sending...' : 'Send Message'}
  </button>
  
  {formStatus.submitted && (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
      ✓ Message sent successfully! We'll respond within 24 hours.
    </div>
  )}
  
  {formStatus.error && (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {formStatus.error}
    </div>
  )}
</form>
```

3. **EmailJS Template Example:**
```
Subject: New Inquiry from LaredoStays Website

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Property Interest: {{property_interest}}

Message:
{{message}}

---
This email was sent from the LaredoStays contact form.
```

---

## Solution 2: Netlify Forms (If using Netlify)
**Best for:** Sites deployed on Netlify
**Cost:** Free up to 100 submissions/month
**Setup Time:** 30 minutes

```javascript
// Simple implementation - just add netlify attributes
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  
  {/* Rest of your form fields */}
</form>

// Handle submission
const handleSubmit = (e) => {
  e.preventDefault();
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...formData })
  })
  .then(() => {
    setFormStatus({ submitted: true });
    setFormData({ name: '', email: '', message: '' });
  })
  .catch(error => {
    setFormStatus({ error: true });
  });
};

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
```

---

## Solution 3: Formspree (Simple & Reliable)
**Best for:** Quick setup without configuration
**Cost:** Free up to 50 submissions/month
**Setup Time:** 15 minutes

```javascript
// Super simple implementation
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true });
  
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setFormStatus({ submitted: true, submitting: false });
    setFormData({ name: '', email: '', message: '' });
  } else {
    setFormStatus({ error: true, submitting: false });
  }
};
```

---

## Solution 4: Web3Forms (Privacy-Focused)
**Best for:** GDPR compliance, no account needed
**Cost:** Free up to 250 submissions/month
**Setup Time:** 20 minutes

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true });
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      access_key: "YOUR_ACCESS_KEY",
      ...formData,
      subject: "New LaredoStays Inquiry",
    })
  });
  
  const result = await response.json();
  
  if (result.success) {
    setFormStatus({ submitted: true, submitting: false });
    setFormData({ name: '', email: '', message: '' });
  } else {
    setFormStatus({ error: result.message, submitting: false });
  }
};
```

---

## Solution 5: Custom Backend with Vercel Functions
**Best for:** Full control and customization
**Cost:** Free with Vercel hosting
**Setup Time:** 2-3 hours

1. **Create API endpoint: `/api/contact.js`**
```javascript
// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { name, email, message, phone, property } = req.body;
  
  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'bebaza.america@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Property Interest:</strong> ${property || 'General inquiry'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

2. **Frontend implementation:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ submitting: true });
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      setFormStatus({ submitted: true, submitting: false });
      setFormData({ name: '', email: '', message: '', phone: '', property: '' });
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    setFormStatus({ 
      error: 'Failed to send message. Please try again.', 
      submitting: false 
    });
  }
};
```

---

## Additional Enhancements for All Solutions

### 1. Add reCAPTCHA for Spam Protection
```javascript
import ReCAPTCHA from "react-google-recaptcha";

const [captchaValue, setCaptchaValue] = useState(null);

<ReCAPTCHA
  sitekey="YOUR_RECAPTCHA_SITE_KEY"
  onChange={setCaptchaValue}
/>

// In handleSubmit, verify captcha
if (!captchaValue) {
  setFormStatus({ error: 'Please complete the captcha' });
  return;
}
```

### 2. Add Form Analytics
```javascript
// Track form interactions
const trackFormEvent = (action) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'Contact Form',
      event_label: formData.property || 'General'
    });
  }
};

// Use in form
onFocus={() => trackFormEvent('form_start')}
onSubmit={() => trackFormEvent('form_submit')}
```

### 3. Progressive Enhancement
```javascript
// Add SMS fallback link
<a 
  href={`sms:+19292686011?body=Hi, I'm interested in LaredoStays properties.`}
  className="text-blue-600 hover:underline block text-center mt-4"
>
  Or text us at (929) 268-6011
</a>
```

### 4. Auto-save Form Data
```javascript
// Save form data to localStorage
useEffect(() => {
  const savedData = localStorage.getItem('contactFormData');
  if (savedData) {
    setFormData(JSON.parse(savedData));
  }
}, []);

useEffect(() => {
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}, [formData]);

// Clear on successful submission
const handleSubmit = async (e) => {
  // ... submission logic
  if (success) {
    localStorage.removeItem('contactFormData');
  }
};
```

---

## Quick Decision Matrix

| Solution | Setup Time | Cost | Reliability | Features |
|----------|------------|------|-------------|----------|
| EmailJS | 1-2 hours | Free (200/mo) | High | Templates, attachments |
| Netlify Forms | 30 min | Free (100/mo) | Very High | Spam filtering |
| Formspree | 15 min | Free (50/mo) | High | Simple API |
| Web3Forms | 20 min | Free (250/mo) | High | Privacy-focused |
| Custom Backend | 2-3 hours | Free | Highest | Full control |

## Recommendation
Start with **EmailJS** for immediate implementation. It's free, reliable, and requires no backend setup. You can implement it today and upgrade to a custom solution later if needed.