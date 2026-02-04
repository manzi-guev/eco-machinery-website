# Image Guidelines for Eco Machinery Alignment Website

## 📸 Image Placement Guide

This document provides guidance on where and what type of images to add to make your website look professional and engaging.

## 🖼️ Required Images

### 1. Logo
**Location**: Navigation bar (all pages)
**File**: `images/logo.png` or `logo.svg`
**Dimensions**: 200x60px (or similar aspect ratio)
**Format**: PNG with transparent background, or SVG
**Usage**: Replace the text logo in the navigation

```html
<!-- Replace in all HTML files -->
<div class="nav-brand">
    <img src="images/logo.png" alt="Eco Machinery Alignment Logo">
</div>
```

---

### 2. Hero Section Background Images

#### Home Page Hero
**File**: `images/hero-home.jpg`
**Dimensions**: 1920x800px
**Content**: Laser alignment equipment in action, industrial machinery, or technician working
**Style**: Professional, high-quality, slightly darkened for text overlay

#### About Page Hero
**File**: `images/hero-about.jpg`
**Dimensions**: 1920x600px
**Content**: Team photo, office, or professional work environment

#### Services Page Hero
**File**: `images/hero-services.jpg`
**Dimensions**: 1920x600px
**Content**: Close-up of laser alignment tool or precision equipment

#### Gallery Page Hero
**File**: `images/hero-gallery.jpg`
**Dimensions**: 1920x600px
**Content**: Montage of successful projects

#### Contact Page Hero
**File**: `images/hero-contact.jpg`
**Dimensions**: 1920x600px
**Content**: Friendly team member or welcoming office environment

**How to Add**:
```css
/* In css/styles.css, update .hero class */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url('../images/hero-home.jpg') center/cover no-repeat;
}

/* Create specific classes for each page */
.about-hero {
    background-image: url('../images/hero-about.jpg');
}
```

---

### 3. Service Card Images

**Location**: Home page service preview section, Services page
**Files Needed**:
- `images/service-laser-alignment.jpg` (800x600px)
- `images/service-vibration-analysis.jpg` (800x600px)
- `images/service-belt-alignment.jpg` (800x600px)
- `images/service-geometric-alignment.jpg` (800x600px)
- `images/service-balancing.jpg` (800x600px)

**Content Ideas**:
- Laser alignment tool in use
- Vibration analyzer with readings
- Belt and pulley system
- Geometric measurement equipment
- Balancing equipment

**How to Add**:
```html
<!-- Replace placeholder in service cards -->
<div class="service-image">
    <img src="images/service-laser-alignment.jpg" alt="Laser Shaft Alignment Service">
</div>
```

---

### 4. About Page Images

#### Main About Image
**File**: `images/about-main.jpg`
**Dimensions**: 800x800px (square)
**Content**: Team photo, technician at work, or company facility

#### Values/Certifications Icons (Optional)
**Files**: Individual icons or use emoji placeholders
**Dimensions**: 100x100px each

**How to Add**:
```html
<!-- Replace placeholder in about.html -->
<div class="about-image">
    <img src="images/about-main.jpg" alt="Eco Machinery Alignment Team">
</div>
```

---

### 5. Gallery Images

**Location**: Gallery page
**Files Needed** (at least 12 images):
- `images/gallery-01.jpg` through `images/gallery-12.jpg`
**Dimensions**: 1200x900px (4:3 aspect ratio)
**Content**: 
- Before/after alignment comparisons
- Technicians performing alignments
- Equipment being serviced
- Laser alignment tools in action
- Completed projects
- Different industry applications

**How to Add**:
```html
<!-- Replace placeholder in gallery items -->
<div class="gallery-item">
    <img src="images/gallery-01.jpg" alt="Motor-Pump Alignment Project">
    <div class="gallery-caption">
        <h3>Motor-Pump Alignment</h3>
        <p>Manufacturing facility - Precision laser alignment</p>
    </div>
</div>
```

---

### 6. Industry/Client Logos (Optional)

**Location**: Home page or About page
**Files**: `images/client-01.png` through `images/client-06.png`
**Dimensions**: 200x100px
**Format**: PNG with transparent background
**Content**: Logos of industries served or client testimonials

---

## 📐 Image Specifications

### General Guidelines

1. **Format**:
   - Photos: JPG (for photos with many colors)
   - Graphics/Logos: PNG (for transparency) or SVG (for scalability)
   - Icons: SVG preferred

2. **Compression**:
   - Compress all images before upload
   - Tools: TinyPNG, ImageOptim, or similar
   - Target: Under 200KB for most images

3. **Resolution**:
   - Use 72 DPI for web
   - 2x resolution for Retina displays (optional)

4. **Aspect Ratios**:
   - Hero sections: 16:9 or 2.4:1
   - Service cards: 4:3
   - Gallery items: 4:3
   - Square images: 1:1

### Image Style Guide

**Consistency is Key**:
- Use similar color grading across all images
- Maintain professional look (no overly casual shots)
- Good lighting and sharp focus
- Industrial/professional environment
- Show equipment and people in action

**What to Avoid**:
- Low resolution/blurry images
- Stock photos that look too generic
- Inconsistent styling between images
- Cluttered or messy backgrounds
- Poor lighting

---

## 🎨 Alternative: Using Stock Images

If you don't have professional photos yet, you can use stock images from:

### Free Stock Photo Sites
1. **Unsplash** (unsplash.com)
   - Search terms: "industrial machinery", "factory worker", "precision tool", "mechanical engineering"

2. **Pexels** (pexels.com)
   - High-quality industrial photos

3. **Pixabay** (pixabay.com)
   - Free commercial use

### Paid Stock Photo Sites (Higher Quality)
1. **Shutterstock** (shutterstock.com)
2. **iStock** (istockphoto.com)
3. **Adobe Stock** (stock.adobe.com)

**Recommended Search Terms**:
- "laser alignment"
- "industrial alignment"
- "machinery maintenance"
- "precision engineering"
- "factory equipment"
- "industrial technician"
- "mechanical precision"
- "rotating machinery"

---

## 🔧 Image Optimization Tools

Before uploading images to your website:

1. **TinyPNG** (tinypng.com)
   - Compress JPG and PNG files
   - Maintain quality while reducing file size

2. **Squoosh** (squoosh.app)
   - Google's image compression tool
   - Compare before/after

3. **ImageOptim** (imageoptim.com/mac)
   - Mac app for batch optimization

4. **GIMP** (gimp.org)
   - Free alternative to Photoshop
   - Resize and optimize images

---

## 📱 Responsive Images

For optimal performance, consider using responsive images:

```html
<img 
    src="images/gallery-01.jpg" 
    srcset="images/gallery-01-small.jpg 600w,
            images/gallery-01-medium.jpg 1200w,
            images/gallery-01-large.jpg 1800w"
    sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
    alt="Description">
```

---

## ✅ Image Checklist

Before publishing your website, ensure:

- [ ] All hero section backgrounds are added
- [ ] Logo is in navigation (all pages)
- [ ] Service card images are professional and relevant
- [ ] Gallery has at least 12 high-quality images
- [ ] All images have descriptive alt text
- [ ] Images are compressed and optimized
- [ ] Images load quickly on mobile devices
- [ ] Image file names are descriptive (e.g., `laser-alignment-service.jpg` not `IMG_001.jpg`)

---

## 🎯 Priority Order

If you're adding images gradually, prioritize in this order:

1. **Logo** - Establishes brand identity
2. **Home page hero** - First impression
3. **Service card images** - Show what you do
4. **Gallery images** - Prove your expertise
5. **About page images** - Build trust
6. **Other hero sections** - Enhance pages

---

## 💡 Pro Tips

1. **Consistency**: Use images with similar color tones and styles
2. **People**: Images with people are more engaging than just equipment
3. **Action shots**: Show work being done, not just static equipment
4. **Before/After**: Very powerful for alignment services
5. **Variety**: Mix close-ups, wide shots, and detail shots

---

**Need Help?**
If you need assistance selecting or editing images, consider hiring a professional photographer for a photo shoot, or work with a graphic designer to source and optimize stock images.

---

*Last Updated: January 2025*
