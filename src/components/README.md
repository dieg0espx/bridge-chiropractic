# Component Library - Usage Guide

## Overview

This directory contains reusable components for The Bridge Chiropractic website, built with the lifetime.life premium aesthetic in mind.

## Components

### 1. OfferingCard.astro

A premium card component for showcasing services, treatments, or offerings with full-bleed images and elegant hover effects.

**Props:**
- `image` (string, required): Path to the card image
- `title` (string, required): Card title
- `description` (string, required): Card description text
- `link` (string, required): URL to link to
- `badge` (string, optional): Optional badge text (e.g., "New", "Popular")
- `glass` (boolean, optional): Enable glassmorphism effect (default: false)

**Example Usage:**
```astro
---
import OfferingCard from '../components/OfferingCard.astro';
---

<OfferingCard
  image="/images/chiropractic-care.jpg"
  title="Chiropractic Care"
  description="Gentle, evidence-based adjustments to restore proper alignment and movement."
  link="/services/chiropractic"
  badge="Popular"
/>

<!-- With glass effect -->
<OfferingCard
  image="/images/neuro-rehab.jpg"
  title="Neuro Rehabilitation"
  description="Specialized care for neurological conditions and recovery."
  link="/services/neuro"
  glass={true}
/>
```

**Features:**
- Full-bleed image with 4:3 aspect ratio
- Image zoom on hover
- Card lift animation on hover
- Elegant underlined link with arrow indicator
- Optional badge overlay
- Optional glassmorphism effect
- Fully accessible with focus states
- Respects reduced motion preferences

---

### 2. SectionWrapper.astro

A consistent section wrapper component that provides standardized padding, backgrounds, and container widths across the site.

**Props:**
- `background` ('white' | 'gray' | 'dark', optional): Section background color (default: 'white')
- `spacing` ('compact' | 'normal' | 'hero', optional): Vertical padding size (default: 'normal')
- `containerWidth` ('narrow' | 'normal' | 'wide', optional): Maximum content width (default: 'normal')
- `id` (string, optional): HTML id attribute for section
- `class` (string, optional): Additional CSS classes

**Example Usage:**
```astro
---
import SectionWrapper from '../components/SectionWrapper.astro';
---

<!-- Basic white section with normal spacing -->
<SectionWrapper>
  <h2>Our Services</h2>
  <p>Content goes here...</p>
</SectionWrapper>

<!-- Gray background with compact spacing -->
<SectionWrapper background="gray" spacing="compact">
  <h2>Testimonials</h2>
  <p>Patient reviews...</p>
</SectionWrapper>

<!-- Dark hero section with narrow container -->
<SectionWrapper background="dark" spacing="hero" containerWidth="narrow">
  <h1>Transform Your Health</h1>
  <p>Start your journey today...</p>
</SectionWrapper>

<!-- With ID for anchor links -->
<SectionWrapper id="services" background="white" spacing="normal">
  <h2>What We Offer</h2>
</SectionWrapper>
```

**Features:**
- Three background variants (white, gray, dark)
- Three spacing presets (compact, normal, hero)
- Three container widths (narrow: 900px, normal: 1400px, wide: 1600px)
- Responsive padding adjustments for all screen sizes
- Subtle texture overlay on gray/dark backgrounds
- Automatic text color adjustments for dark backgrounds
- Design system variable integration

---

### 3. ContentGrid.astro

A responsive grid system component that automatically adjusts column count based on screen size.

**Props:**
- `columns` (2 | 3 | 4, optional): Number of columns on desktop (default: 3)
- `gap` ('sm' | 'md' | 'lg' | 'xl', optional): Space between grid items (default: 'xl')
- `class` (string, optional): Additional CSS classes

**Example Usage:**
```astro
---
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';
---

<!-- 3-column grid with extra-large gaps -->
<ContentGrid columns={3} gap="xl">
  <OfferingCard {...card1Props} />
  <OfferingCard {...card2Props} />
  <OfferingCard {...card3Props} />
</ContentGrid>

<!-- 4-column grid with medium gaps -->
<ContentGrid columns={4} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</ContentGrid>

<!-- 2-column grid with utility classes -->
<ContentGrid columns={2} gap="lg" class="content-grid--equal-height">
  <article>Content A</article>
  <article>Content B</article>
</ContentGrid>
```

**Responsive Behavior:**
- **Desktop (>1200px)**: Uses specified column count
- **Large Tablet (1024px-1200px)**: 4-col becomes 3-col
- **Tablet (768px-1024px)**: 3-col and 4-col become 2-col
- **Mobile (<768px)**: All grids become single column

**Features:**
- Automatic responsive breakpoints
- Staggered fade-in animations for children
- Built-in animation delays (100ms per item)
- Support for custom utility classes
- Respects reduced motion preferences

**Utility Classes:**
- `.content-grid--auto-fit`: Auto-fit columns (min 280px)
- `.content-grid--auto-fill`: Auto-fill columns (min 280px)
- `.content-grid--equal-height`: Force all items to equal height
- `.content-grid--align-center`: Vertically center items
- `.content-grid--justify-center`: Horizontally center items
- `.content-grid--masonry`: Masonry layout (when browser supports it)

---

## Complete Example

Here's a full example combining all three components:

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';

const services = [
  {
    image: '/images/chiropractic.jpg',
    title: 'Chiropractic Care',
    description: 'Gentle adjustments to restore proper alignment and movement.',
    link: '/services/chiropractic',
    badge: 'Most Popular'
  },
  {
    image: '/images/soft-tissue.jpg',
    title: 'Soft Tissue Therapy',
    description: 'Advanced techniques to release tension and improve mobility.',
    link: '/services/soft-tissue',
  },
  {
    image: '/images/movement.jpg',
    title: 'Movement Training',
    description: 'Personalized exercises to build strength and prevent injury.',
    link: '/services/movement',
    badge: 'New'
  }
];
---

<Layout title="Our Services">
  <!-- Hero Section -->
  <SectionWrapper background="dark" spacing="hero" containerWidth="narrow">
    <div class="text-center">
      <span class="section__eyebrow">What We Offer</span>
      <h1 class="section__title">Comprehensive Chiropractic Care</h1>
      <p class="section__subtitle">Evidence-based treatments designed to help you move better and live fuller.</p>
    </div>
  </SectionWrapper>

  <!-- Services Grid -->
  <SectionWrapper background="white" spacing="normal">
    <ContentGrid columns={3} gap="xl">
      {services.map(service => (
        <OfferingCard {...service} />
      ))}
    </ContentGrid>
  </SectionWrapper>

  <!-- CTA Section -->
  <SectionWrapper background="gray" spacing="compact">
    <div class="text-center">
      <h2>Ready to Get Started?</h2>
      <p>Schedule your consultation today and take the first step toward better health.</p>
      <a href="/contact" class="btn btn--primary btn--lg">Book Appointment</a>
    </div>
  </SectionWrapper>
</Layout>
```

---

## Design System Integration

All components use the design system variables defined in `/src/styles/global.css`:

- **Colors**: `--color-primary`, `--color-white`, `--color-charcoal`, etc.
- **Typography**: `--font-heading`, `--font-body`
- **Spacing**: `--space-xs` through `--space-5xl`
- **Radius**: `--radius-sm` through `--radius-xl`
- **Shadows**: `--shadow-sm` through `--shadow-xl`
- **Transitions**: `--transition-fast`, `--transition-normal`, `--transition-slow`
- **Containers**: `--container-narrow`, `--container-max`, `--container-wide`

---

## Accessibility Features

All components include:
- Semantic HTML elements
- Proper ARIA attributes where needed
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Sufficient color contrast
- Responsive text sizing

---

## Browser Support

Components are tested and working in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Notes

- All animations respect `prefers-reduced-motion: reduce`
- Images should be optimized before use (WebP recommended)
- Components work seamlessly with Astro's built-in optimization
- TypeScript interfaces ensure type safety in development
