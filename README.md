# Eco Machinery Alignment Website

Professional website for laser alignment services showcasing expertise, services, and client success stories.

## 🚀 Project Overview

This is a professional, modern website built for **Eco Machinery Alignment** - a company providing precision laser alignment services to help industries reduce downtime, improve efficiency, and extend equipment life.

## 📁 Project Structure

```
eco-machinery-website/
├── css/
│   └── styles.css          # Main stylesheet with animations
├── js/
│   └── script.js           # Interactive elements & scroll animations
├── images/                 # Image assets folder (add your images here)
├── fonts/                  # Custom fonts folder (if needed)
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── gallery.html            # Gallery/Portfolio page
├── contact.html            # Contact page
└── README.md               # This file
```

## ✨ Features

### Design & User Experience
- ✅ Clean, professional, modern design
- ✅ Beautiful scroll animations and transitions
- ✅ Smooth parallax effects on hero sections
- ✅ Interactive hover effects on cards and buttons
- ✅ Responsive mobile-first design
- ✅ Sticky navigation with scroll effects
- ✅ Back-to-top button
- ✅ Beautiful footer with multiple sections

### Pages Included
1. **Home** - Hero section, benefits, services preview, stats, industries served, CTA
2. **About** - Company story, mission/vision, values, certifications
3. **Services** - Detailed service descriptions with benefits and applications
4. **Gallery** - Project showcase with before/after stats and testimonials
5. **Contact** - Multiple contact methods, form, location, FAQ

### Technical Features
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- CSS Grid and Flexbox for responsive layouts
- CSS custom properties (variables) for easy theming
- Intersection Observer API for scroll animations
- Optimized for performance and SEO
- Cross-browser compatible

## 🎨 Design Elements

### Color Scheme
- **Primary**: Deep blue (#0A4D68) - Trust and precision
- **Secondary**: Teal (#088395) - Professional and modern
- **Accent**: Orange (#FF6B35) - Energy and action
- **Dark Background**: (#1A1A2E) - Elegant footer
- **Light Background**: (#F8F9FA) - Clean sections

### Typography
- **Font Family**: Inter (modern, professional sans-serif)
- **Sizes**: Responsive scaling from mobile to desktop
- **Weights**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

### Animations
- Fade in up
- Slide in (left/right)
- Scale in
- Stagger effects for grid items
- Counter animations for statistics
- Smooth transitions on hover
- Parallax scrolling effects

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

All elements adapt gracefully to different screen sizes with:
- Flexible grid layouts
- Mobile-friendly navigation menu
- Touch-optimized interactions
- Readable typography at all sizes

## 🖼️ Adding Images

Currently, the website uses placeholder icons (emojis). To add your actual images:

1. Place your images in the `images/` folder
2. Update the image placeholders in the HTML files
3. Recommended image types:
   - **Hero sections**: 1920x800px (landscape, high quality)
   - **Service cards**: 800x600px (landscape)
   - **Gallery items**: 1200x900px (landscape, high quality)
   - **Logo**: SVG or PNG with transparent background

### Example HTML Update:
```html
<!-- Before (Placeholder) -->
<div class="service-image">
    <div class="service-placeholder">🎯</div>
</div>

<!-- After (Real Image) -->
<div class="service-image">
    <img src="images/laser-alignment.jpg" alt="Laser Alignment Service">
</div>
```

## 📞 Contact Information

Update the contact details in all pages:
- **Phone**: Currently set to `+250 123 456 789`
- **Email**: Currently set to `info@ecomachinery.com`
- **Location**: Currently set to `Kigali, Rwanda`
- **WhatsApp**: Update the number in WhatsApp links

Find and replace these values in all HTML files.

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #0A4D68;    /* Change to your brand color */
    --accent-color: #FF6B35;     /* Change to your accent color */
    /* ... more variables ... */
}
```

### Modifying Content
- All text content is in the HTML files
- Edit directly in the HTML to update text
- Maintain the structure for animations to work properly

### Adding New Sections
- Follow the existing HTML structure
- Add animation classes (`fade-in-up`, `slide-in-left`, etc.)
- The JavaScript will automatically animate new sections

## 🌐 Deployment

### Option 1: Simple Hosting (Netlify, Vercel, GitHub Pages)
1. Push code to GitHub
2. Connect to hosting platform
3. Deploy automatically

### Option 2: Traditional Web Hosting
1. Upload all files via FTP
2. Ensure folder structure is maintained
3. Set `index.html` as the default page

### Option 3: cPanel (as shown in your image)
1. Access cPanel File Manager
2. Upload all files to `public_html` folder
3. Maintain the folder structure

## 📧 Contact Form Setup

The contact form currently uses client-side validation. To make it fully functional:

### Option 1: Backend API
```javascript
// In js/script.js, replace the setTimeout simulation with:
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
    contactForm.reset();
})
```

### Option 2: FormSpree or Similar Service
Add FormSpree action to form:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: PHP Email Script
Create a `contact-form.php` and update form action.

## 🔍 SEO Optimization

Already included:
- ✅ Semantic HTML5 markup
- ✅ Meta descriptions on all pages
- ✅ Descriptive alt texts (add when images are inserted)
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ Fast loading times
- ✅ Mobile-friendly design

To improve further:
1. Add your actual business schema markup
2. Create and submit sitemap.xml
3. Add robots.txt file
4. Optimize images before uploading
5. Add Open Graph tags for social sharing

## 📊 Analytics

To track website performance, add Google Analytics:

```html
<!-- Add before </head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This website is created for Eco Machinery Alignment. All rights reserved.

## 🤝 Support

For questions or customization requests, contact your web developer.

---

**Built with ❤️ for Eco Machinery Alignment**
*Professional Laser Alignment Services - Reduce Downtime, Improve Efficiency, Extend Equipment Life*
