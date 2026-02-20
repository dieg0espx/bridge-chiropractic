# FeatureSection Component - Quick Start Guide

## Location
`/Users/diego/Desktop/Bridge-chiropractic/src/components/FeatureSection.astro`

## Overview
A production-ready, premium three-column feature section component that replicates the lifetime.life "Love Your Life" pattern. Includes generous whitespace, premium typography, glassmorphism effects, staggered animations, and full responsive design.

## Quick Import

```astro
---
import FeatureSection from '../components/FeatureSection.astro';
---
```

## Minimal Example

```astro
<FeatureSection
  eyebrow="Why Choose Us"
  title="Love Your Life"
  subtitle="Experience wellness that transforms your daily routine"
  features={[
    {
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600",
      title: "Personalized Care",
      description: "Every treatment plan is tailored to your unique needs and goals.",
      link: "/services",
      linkText: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600",
      title: "Expert Guidance",
      description: "Learn from experienced professionals dedicated to your wellness.",
      link: "/about"
    },
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600",
      title: "Lasting Results",
      description: "Transform your health with proven techniques that last.",
      link: "/testimonials"
    }
  ]}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `eyebrow` | string | Yes | - | Small label above title |
| `title` | string | Yes | - | Main heading |
| `subtitle` | string | Yes | - | Supporting text |
| `features` | Feature[] | Yes | - | Array of features (see below) |
| `background` | 'white' \| 'gray' \| 'dark' | No | 'white' | Background variant |
| `centered` | boolean | No | true | Center-align header |

### Feature Object

```typescript
{
  image?: string;        // Image URL (use image OR icon)
  icon?: string;         // SVG markup (use image OR icon)
  title: string;         // Feature title (required)
  description: string;   // Feature description (required)
  link?: string;         // Optional CTA link
  linkText?: string;     // CTA text (default: "Learn More")
}
```

## Icon Example

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
      description: "All treatments grounded in the latest research.",
      link: "/services"
    }
  ]}
/>
```

## Background Variants

```astro
<!-- White background (default) -->
<FeatureSection background="white" ... />

<!-- Gray background -->
<FeatureSection background="gray" ... />

<!-- Dark background with glassmorphism -->
<FeatureSection background="dark" ... />
```

## Features

### Styling
- Premium typography (Playfair Display + Source Sans 3)
- Generous whitespace (96px section padding)
- Glassmorphism effects on dark backgrounds
- Subtle shadows and hover effects
- Premium card styling with smooth transitions

### Animations
- Staggered fade-up reveal animations
- Automatic delays (100ms, 200ms, 300ms)
- Image scale on hover
- Icon color change on hover
- Link arrow slide effect
- Respects `prefers-reduced-motion`

### Responsive Design
- **Desktop (>1024px)**: 3 columns, large gaps (48px)
- **Tablet (768-1024px)**: 2 columns, medium gaps (32px)
- **Mobile (<768px)**: 1 column, reduced gaps (24px)
- Responsive typography scaling
- Touch-friendly tap targets on mobile

### Accessibility
- Semantic HTML (`<article>`, `<h3>`)
- Proper heading hierarchy
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- ARIA labels where needed
- High contrast mode support
- Reduced motion support

### Performance
- Lazy loading images (`loading="lazy"`)
- Inline SVG icons (no HTTP requests)
- GPU-accelerated animations
- Optimized grid layout
- Efficient hover states

## Demo Page

Visit `/feature-demo` to see the component with 5 different configurations:
1. Image-based features (white background)
2. Icon-based features (gray background)
3. Dark background with icons (no links)
4. Six features showing 2-row layout
5. Left-aligned header variant

## Files Created

1. **Component**: `/src/components/FeatureSection.astro` (12KB)
   - Main component with TypeScript interfaces
   - Complete styling with responsive design
   - Accessibility features built-in

2. **Examples**: `/src/components/FeatureSection.example.md` (11KB)
   - Comprehensive usage examples
   - Props reference
   - Best practices guide
   - Real-world scenarios

3. **Demo Page**: `/src/pages/feature-demo.astro` (7KB)
   - Live examples with 5 configurations
   - Shows all features and variants
   - Copy-paste ready code

4. **This Guide**: `/FEATURE_SECTION_README.md`
   - Quick reference
   - Getting started info

## Integration with Existing Design System

The component uses your existing design system from `/src/styles/global.css`:

- CSS custom properties (variables)
- Animation system (`data-animate` attributes)
- Typography scale
- Color palette
- Spacing scale
- Shadow system
- Container classes

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari (latest 2 versions)
- Chrome Android (latest)

## Next Steps

1. **Test the Component**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321/feature-demo`

2. **Use in Your Pages**
   Import the component and add your content:
   ```astro
   ---
   import FeatureSection from '../components/FeatureSection.astro';
   ---

   <FeatureSection ... />
   ```

3. **Customize as Needed**
   The component is designed to be production-ready but can be customized by:
   - Adjusting CSS variables in `global.css`
   - Modifying the component's `<style>` section
   - Extending the TypeScript interfaces for new props

## Support

For detailed examples and advanced usage, see:
- `FeatureSection.example.md` - Comprehensive documentation
- `feature-demo.astro` - Live working examples
- `global.css` - Design system reference

## Notes

- Images should be 800x600px (4:3 ratio) for best results
- Icons should be 80x80px for consistency
- Keep descriptions to 2-3 sentences for optimal display
- Use 3, 6, or 9 features for best grid alignment
- Test on mobile devices for optimal experience
