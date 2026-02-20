# FeatureSection Component Usage Examples

## Overview
The `FeatureSection` component replicates the lifetime.life "Love Your Life" three-column feature section pattern with premium aesthetics, generous whitespace, and staggered reveal animations.

## Basic Usage

### Example 1: Image-Based Features
```astro
---
import FeatureSection from '../components/FeatureSection.astro';
---

<FeatureSection
  eyebrow="Why Choose Us"
  title="Love Your Life"
  subtitle="Experience wellness that transforms your daily routine"
  features={[
    {
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
      title: "Personalized Care",
      description: "Every treatment plan is tailored to your unique needs, goals, and lifestyle.",
      link: "/services",
      linkText: "Explore Services"
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
      title: "Expert Guidance",
      description: "Learn from experienced professionals dedicated to your long-term wellness.",
      link: "/about",
      linkText: "Meet Our Team"
    },
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      title: "Lasting Results",
      description: "Transform your health with proven techniques that create sustainable change.",
      link: "/testimonials",
      linkText: "Read Success Stories"
    }
  ]}
/>
```

### Example 2: Icon-Based Features
```astro
<FeatureSection
  eyebrow="Our Approach"
  title="Comprehensive Wellness"
  subtitle="A holistic path to optimal health"
  features={[
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>`,
      title: "Evidence-Based",
      description: "All treatments grounded in the latest research and proven methodologies.",
      link: "/services#research"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`,
      title: "Safe & Gentle",
      description: "Comfortable techniques suitable for all ages and fitness levels.",
      link: "/services#safety"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>`,
      title: "Patient-Centered",
      description: "Your comfort, concerns, and goals are at the heart of everything we do.",
      link: "/about#philosophy"
    }
  ]}
/>
```

### Example 3: Mixed Features (No Links)
```astro
<FeatureSection
  eyebrow="What to Expect"
  title="Your Journey to Wellness"
  subtitle="A seamless experience from consultation to lasting health"
  features={[
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`,
      title: "Initial Consultation",
      description: "We begin with a thorough evaluation and discussion of your health goals."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`,
      title: "Customized Treatment",
      description: "Receive care tailored specifically to your body's needs and your lifestyle."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>`,
      title: "Ongoing Support",
      description: "Continue your progress with regular care and personalized wellness guidance."
    }
  ]}
/>
```

## Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `eyebrow` | `string` | Yes | - | Small text above title (e.g., "Our Services") |
| `title` | `string` | Yes | - | Main section heading |
| `subtitle` | `string` | Yes | - | Supporting text below title |
| `features` | `Feature[]` | Yes | - | Array of feature objects (see below) |
| `background` | `'white' \| 'gray' \| 'dark'` | No | `'white'` | Background style variant |
| `centered` | `boolean` | No | `true` | Center-align section header |

### Feature Object Structure

```typescript
{
  image?: string;        // Feature image URL (use image OR icon, not both)
  icon?: string;         // SVG icon markup (use image OR icon, not both)
  title: string;         // Feature heading (required)
  description: string;   // Feature description text (required)
  link?: string;         // Optional CTA link URL
  linkText?: string;     // Optional CTA link text (default: "Learn More")
}
```

## Background Variants

### White Background (Default)
```astro
<FeatureSection
  background="white"
  eyebrow="Features"
  title="Premium Care"
  subtitle="Excellence in every detail"
  features={...}
/>
```

### Gray Background
```astro
<FeatureSection
  background="gray"
  eyebrow="Features"
  title="Premium Care"
  subtitle="Excellence in every detail"
  features={...}
/>
```

### Dark Background
```astro
<FeatureSection
  background="dark"
  eyebrow="Features"
  title="Premium Care"
  subtitle="Excellence in every detail"
  features={...}
/>
```

## Layout Variants

### Left-Aligned Header
```astro
<FeatureSection
  centered={false}
  eyebrow="Our Services"
  title="What We Offer"
  subtitle="Comprehensive care for your wellbeing"
  features={...}
/>
```

## Real-World Examples

### Example: Services Overview
```astro
<FeatureSection
  eyebrow="Our Services"
  title="Comprehensive Wellness Solutions"
  subtitle="From prevention to recovery, we support your health journey at every stage"
  features={[
    {
      image: "/images/chiropractic.jpg",
      title: "Chiropractic Care",
      description: "Gentle spinal adjustments that restore alignment and relieve discomfort naturally.",
      link: "/services#chiropractic",
      linkText: "Learn More"
    },
    {
      image: "/images/massage.jpg",
      title: "Therapeutic Massage",
      description: "Targeted soft tissue work to release tension and enhance your body's natural healing.",
      link: "/services#massage",
      linkText: "Learn More"
    },
    {
      image: "/images/rehabilitation.jpg",
      title: "Rehabilitation",
      description: "Personalized exercise programs designed to strengthen and prevent future injuries.",
      link: "/services#rehabilitation",
      linkText: "Learn More"
    }
  ]}
/>
```

### Example: Benefits Section
```astro
<FeatureSection
  background="gray"
  eyebrow="Why Choose Bridge Chiropractic"
  title="The Bridge Difference"
  subtitle="Experience care that goes beyond symptom relief"
  features={[
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>`,
      title: "15+ Years Experience",
      description: "Dr. Beyerl brings over a decade of expertise in chiropractic care and rehabilitation."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>`,
      title: "Insurance Accepted",
      description: "We work with most major insurance providers to make care accessible and affordable."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>`,
      title: "San Diego Local",
      description: "Proudly serving the San Diego community with convenient location and flexible hours."
    }
  ]}
/>
```

## Accessibility Features

- **Semantic HTML**: Uses proper `<article>`, `<h3>`, and ARIA labels
- **Keyboard Navigation**: Fully keyboard accessible with visible focus states
- **Screen Reader Support**: Meaningful alt text and aria-labels
- **Motion Reduction**: Respects `prefers-reduced-motion` media query
- **High Contrast**: Adjusts styling for `prefers-contrast: high`
- **Focus Indicators**: Clear focus outlines for keyboard navigation

## Responsive Behavior

- **Desktop (>1024px)**: 3-column grid with large gaps
- **Tablet (768px-1024px)**: 2-column grid with medium gaps
- **Mobile (<768px)**: 1-column stacked layout with reduced spacing
- **Hover effects**: Reduced transform on mobile for better performance

## Animation System

The component uses the existing scroll-triggered animation system from `global.css`:

- Features animate in with a fade-up effect
- Staggered delays (100ms, 200ms, 300ms) create a cascading reveal
- Animations trigger when elements enter viewport
- Respects user motion preferences

## Best Practices

1. **Image Optimization**: Use properly sized images (800x600 recommended)
2. **Alt Text**: Provide meaningful alt text for images
3. **Icon Sizing**: Use 80x80 icons for consistency
4. **Feature Count**: 3, 6, or 9 features work best for the 3-column grid
5. **Description Length**: Keep descriptions concise (2-3 sentences max)
6. **Link Usage**: Include links for actionable features, omit for informational ones
7. **Background Contrast**: Choose background that provides good readability

## Performance Considerations

- Images use `loading="lazy"` for performance
- SVG icons are inlined for immediate rendering
- CSS animations use `transform` and `opacity` (GPU-accelerated)
- Hover effects use hardware-accelerated properties
- Grid layout collapses efficiently on mobile

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid layout
- CSS Custom Properties (CSS Variables)
- Intersection Observer API (for animations)
- Backdrop filter (for dark mode effects)
