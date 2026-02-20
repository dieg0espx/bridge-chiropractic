# Component Usage Examples

## Quick Start Guide

This document provides practical examples of how to use the three new essential components in your Astro pages.

---

## Example 1: Simple Services Page

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';
---

<Layout title="Our Services">
  <!-- Services Section -->
  <SectionWrapper background="white" spacing="normal">
    <div class="section__header">
      <span class="section__eyebrow">What We Offer</span>
      <h2 class="section__title">Our Services</h2>
      <p class="section__subtitle">
        Comprehensive chiropractic care tailored to your needs
      </p>
    </div>

    <ContentGrid columns={3} gap="xl">
      <OfferingCard
        image="/images/chiropractic-adjustment.jpg"
        title="Chiropractic Adjustments"
        description="Gentle, precise adjustments to restore proper alignment and improve nervous system function."
        link="/services/chiropractic"
        badge="Popular"
      />

      <OfferingCard
        image="/images/soft-tissue-therapy.jpg"
        title="Soft Tissue Therapy"
        description="Advanced myofascial release techniques to reduce pain and improve mobility."
        link="/services/soft-tissue"
      />

      <OfferingCard
        image="/images/movement-training.jpg"
        title="Movement Training"
        description="Personalized exercise programs to build strength and prevent future injuries."
        link="/services/movement"
        badge="New"
      />
    </ContentGrid>
  </SectionWrapper>
</Layout>
```

---

## Example 2: Conditions We Treat Page

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';

const conditions = [
  {
    image: '/images/conditions/back-pain.jpg',
    title: 'Back Pain',
    description: 'Relief from chronic and acute back pain through targeted adjustments and therapy.',
    link: '/conditions/back-pain',
  },
  {
    image: '/images/conditions/neck-pain.jpg',
    title: 'Neck Pain',
    description: 'Gentle treatment for neck stiffness, tension, and cervical dysfunction.',
    link: '/conditions/neck-pain',
  },
  {
    image: '/images/conditions/headaches.jpg',
    title: 'Headaches & Migraines',
    description: 'Natural relief from tension headaches and migraine symptoms.',
    link: '/conditions/headaches',
  },
  {
    image: '/images/conditions/sciatica.jpg',
    title: 'Sciatica',
    description: 'Effective treatment for radiating leg pain and nerve compression.',
    link: '/conditions/sciatica',
  },
];
---

<Layout title="Conditions We Treat">
  <!-- Hero -->
  <SectionWrapper background="dark" spacing="hero" containerWidth="narrow">
    <div class="text-center">
      <h1>Conditions We Treat</h1>
      <p class="text-large">
        From chronic pain to sports injuries, we provide evidence-based care
        for a wide range of conditions.
      </p>
    </div>
  </SectionWrapper>

  <!-- Conditions Grid -->
  <SectionWrapper background="white" spacing="normal">
    <ContentGrid columns={4} gap="lg">
      {conditions.map(condition => (
        <OfferingCard {...condition} />
      ))}
    </ContentGrid>
  </SectionWrapper>

  <!-- CTA -->
  <SectionWrapper background="gray" spacing="compact">
    <div class="text-center">
      <h3>Not Sure If We Can Help?</h3>
      <p>Contact us for a free consultation to discuss your specific condition.</p>
      <a href="/contact" class="btn btn--primary">Get In Touch</a>
    </div>
  </SectionWrapper>
</Layout>
```

---

## Example 3: About Page with Mixed Layouts

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';
---

<Layout title="About Us">
  <!-- Hero -->
  <SectionWrapper background="white" spacing="hero" containerWidth="narrow">
    <div class="text-center">
      <span class="section__eyebrow">About The Bridge</span>
      <h1>Connecting You to Better Health</h1>
      <p class="text-large">
        We're more than a chiropractic office—we're your partners in
        achieving lasting wellness.
      </p>
    </div>
  </SectionWrapper>

  <!-- Our Approach - 2 Column Layout -->
  <SectionWrapper background="gray" spacing="normal">
    <div class="section__header">
      <h2>Our Approach</h2>
    </div>

    <ContentGrid columns={2} gap="xl">
      <OfferingCard
        image="/images/approach-evidence.jpg"
        title="Evidence-Based Care"
        description="Every treatment is grounded in the latest research and proven techniques."
        link="/approach/evidence"
      />

      <OfferingCard
        image="/images/approach-personalized.jpg"
        title="Personalized Treatment"
        description="No two bodies are the same. Your care plan is uniquely yours."
        link="/approach/personalized"
      />
    </ContentGrid>
  </SectionWrapper>

  <!-- Values - 4 Column Layout -->
  <SectionWrapper background="white" spacing="normal" containerWidth="wide">
    <div class="section__header">
      <h2>Our Values</h2>
    </div>

    <ContentGrid columns={4} gap="md">
      <OfferingCard
        image="/images/values/integrity.jpg"
        title="Integrity"
        description="Honest, transparent care you can trust."
        link="/values#integrity"
      />

      <OfferingCard
        image="/images/values/excellence.jpg"
        title="Excellence"
        description="Committed to the highest standards of care."
        link="/values#excellence"
      />

      <OfferingCard
        image="/images/values/compassion.jpg"
        title="Compassion"
        description="We genuinely care about your wellbeing."
        link="/values#compassion"
      />

      <OfferingCard
        image="/images/values/innovation.jpg"
        title="Innovation"
        description="Always learning, always improving."
        link="/values#innovation"
      />
    </ContentGrid>
  </SectionWrapper>
</Layout>
```

---

## Example 4: Using Glass Effect (Overlay on Images)

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';
---

<Layout title="Featured Services">
  <!-- Section with background image -->
  <SectionWrapper background="white" spacing="normal">
    <div style="position: relative;">
      <!-- Background image container -->
      <div style="position: absolute; inset: 0; z-index: 0;">
        <img
          src="/images/clinic-background.jpg"
          alt=""
          style="width: 100%; height: 100%; object-fit: cover; opacity: 0.1;"
        />
      </div>

      <!-- Content with glass cards -->
      <div style="position: relative; z-index: 1;">
        <div class="section__header">
          <h2>Featured Services</h2>
        </div>

        <ContentGrid columns={3} gap="xl">
          <OfferingCard
            image="/images/featured-1.jpg"
            title="Sports Rehabilitation"
            description="Get back in the game with specialized care for athletes."
            link="/services/sports"
            badge="Featured"
            glass={true}
          />

          <OfferingCard
            image="/images/featured-2.jpg"
            title="Prenatal Care"
            description="Safe, gentle care throughout your pregnancy journey."
            link="/services/prenatal"
            glass={true}
          />

          <OfferingCard
            image="/images/featured-3.jpg"
            title="Pediatric Care"
            description="Specialized chiropractic care for children and infants."
            link="/services/pediatric"
            glass={true}
          />
        </ContentGrid>
      </div>
    </div>
  </SectionWrapper>
</Layout>
```

---

## Example 5: Compact Spacing for Multiple Sections

```astro
---
import Layout from '../layouts/Layout.astro';
import SectionWrapper from '../components/SectionWrapper.astro';
import ContentGrid from '../components/ContentGrid.astro';
import OfferingCard from '../components/OfferingCard.astro';
---

<Layout title="Resources">
  <!-- Section 1 -->
  <SectionWrapper background="white" spacing="compact">
    <h2>Latest Blog Posts</h2>
    <ContentGrid columns={3} gap="lg">
      <!-- Blog cards here -->
    </ContentGrid>
  </SectionWrapper>

  <!-- Section 2 -->
  <SectionWrapper background="gray" spacing="compact">
    <h2>Patient Resources</h2>
    <ContentGrid columns={4} gap="md">
      <!-- Resource cards here -->
    </ContentGrid>
  </SectionWrapper>

  <!-- Section 3 -->
  <SectionWrapper background="white" spacing="compact">
    <h2>FAQ</h2>
    <!-- FAQ content -->
  </SectionWrapper>
</Layout>
```

---

## Example 6: Using Utility Classes

```astro
---
import Layout from '../layouts/Layout.astro';
import ContentGrid from '../components/ContentGrid.astro';
---

<Layout title="Team">
  <!-- Auto-fit grid (responsive without breakpoints) -->
  <ContentGrid columns={3} gap="xl" class="content-grid--auto-fit">
    <div>Team Member 1</div>
    <div>Team Member 2</div>
    <div>Team Member 3</div>
  </ContentGrid>

  <!-- Equal height cards -->
  <ContentGrid columns={2} gap="lg" class="content-grid--equal-height">
    <article style="background: white; padding: 2rem;">
      <h3>Short content</h3>
      <p>Lorem ipsum...</p>
    </article>
    <article style="background: white; padding: 2rem;">
      <h3>Longer content</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <p>More content here...</p>
    </article>
  </ContentGrid>

  <!-- Centered items -->
  <ContentGrid columns={3} gap="md" class="content-grid--align-center content-grid--justify-center">
    <img src="/logo1.png" alt="Partner 1" />
    <img src="/logo2.png" alt="Partner 2" />
    <img src="/logo3.png" alt="Partner 3" />
  </ContentGrid>
</Layout>
```

---

## Pro Tips

### 1. Combining Components Effectively

```astro
<!-- Use narrow container for hero text, then full width for cards -->
<SectionWrapper background="dark" spacing="hero" containerWidth="narrow">
  <h1>Welcome</h1>
  <p>Hero text centered and narrow</p>
</SectionWrapper>

<SectionWrapper background="white" spacing="normal" containerWidth="wide">
  <ContentGrid columns={4} gap="xl">
    <!-- Cards spread across wider container -->
  </ContentGrid>
</SectionWrapper>
```

### 2. Mixing Card Styles

```astro
<ContentGrid columns={3} gap="xl">
  <OfferingCard {...props} />  <!-- Standard card -->
  <OfferingCard {...props} badge="New" />  <!-- With badge -->
  <OfferingCard {...props} glass={true} />  <!-- Glass effect -->
</ContentGrid>
```

### 3. Responsive Considerations

- Use 4 columns for small items (icons, logos, simple cards)
- Use 3 columns for standard cards with images
- Use 2 columns for content-heavy cards with lots of text
- All automatically become single column on mobile

### 4. Accessibility

```astro
<!-- Always include descriptive alt text -->
<OfferingCard
  image="/images/service.jpg"
  title="Service Name"  <!-- This becomes the heading -->
  description="Clear description"  <!-- This provides context -->
  link="/service"
/>

<!-- Use section IDs for anchor navigation -->
<SectionWrapper id="services">
  <!-- Content -->
</SectionWrapper>
```

---

## Common Patterns

### Full Page Template

```astro
<Layout title="Page Title">
  <!-- Hero -->
  <SectionWrapper background="dark" spacing="hero" containerWidth="narrow">
    <div class="text-center">
      <h1>Page Title</h1>
      <p class="text-large">Subtitle</p>
    </div>
  </SectionWrapper>

  <!-- Main Content -->
  <SectionWrapper background="white" spacing="normal">
    <ContentGrid columns={3} gap="xl">
      <!-- Cards -->
    </ContentGrid>
  </SectionWrapper>

  <!-- Secondary Content -->
  <SectionWrapper background="gray" spacing="normal">
    <!-- More content -->
  </SectionWrapper>

  <!-- CTA -->
  <SectionWrapper background="dark" spacing="compact">
    <div class="text-center">
      <h2>Call to Action</h2>
      <a href="/contact" class="btn btn--white">Get Started</a>
    </div>
  </SectionWrapper>
</Layout>
```
