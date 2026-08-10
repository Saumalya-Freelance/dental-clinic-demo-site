---
name: Clinical Serenity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d9e3f9'
  on-surface: '#121c2c'
  on-surface-variant: '#3e494a'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f797a'
  outline-variant: '#bec8ca'
  surface-tint: '#006972'
  primary: '#00535b'
  on-primary: '#ffffff'
  primary-container: '#006d77'
  on-primary-container: '#9becf7'
  inverse-primary: '#82d3de'
  secondary: '#236863'
  on-secondary: '#ffffff'
  secondary-container: '#a9ece5'
  on-secondary-container: '#286d67'
  tertiary: '#3f4d4d'
  on-tertiary: '#ffffff'
  tertiary-container: '#576565'
  on-tertiary-container: '#d3e2e2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9ff0fb'
  primary-fixed-dim: '#82d3de'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f56'
  secondary-fixed: '#acefe7'
  secondary-fixed-dim: '#90d3cb'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504b'
  tertiary-fixed: '#d6e5e5'
  tertiary-fixed-dim: '#bbc9c9'
  on-tertiary-fixed: '#101e1e'
  on-tertiary-fixed-variant: '#3c494a'
  background: '#f9f9ff'
  on-background: '#121c2c'
  surface-variant: '#d9e3f9'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style
This design system is built for a premium dental environment, emphasizing precision, hygiene, and calm. The aesthetic direction follows a **Corporate / Modern** style with a focus on high-end medical professionalism. It utilizes a spacious layout to reduce cognitive load and anxiety, common in dental patients. 

The visual language relies on clarity and trust, achieved through a "Soft-Tech" approach: clean lines and a systematic grid balanced by soft edges and high-quality photography. The interface should evoke a sense of clinical excellence without feeling cold or sterile.

## Colors
The palette is rooted in a spectrum of therapeutic greens and teals. 
- **Primary Deep Teal (#006D77):** Used for primary actions, navigation headers, and authoritative text elements to convey trust.
- **Secondary Soft Aqua (#83C5BE):** Used for supporting elements, icon backgrounds, and secondary buttons.
- **Accent Subtle Mint (#E2F1F1):** Utilized for large surface areas, background sections, and soft highlights to maintain a fresh feel.
- **Text & UI:** Dark Charcoal (#2D3748) is used for all body text to ensure WCAG AA compliance against the light background.

## Typography
The typography strategy pairs **Outfit** for structural headings and **Inter** for functional body copy. 

**Outfit** provides a geometric, modern friendliness that feels premium and approachable. It should be used for all marketing headers and clinical service titles. **Inter** is chosen for its exceptional legibility in health-related forms and informational content. Line heights are kept generous (1.5x+) to ensure a comfortable reading experience for patients of all ages.

## Layout & Spacing
The design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile. 
- **Desktop:** A 12-column grid with a 1200px max-width container. 
- **Spacing Rhythm:** Based on an 8px base unit. Section vertical spacing should be aggressive (80px to 120px) to maintain the "premium clinic" feel.
- **Mobile:** A 4-column fluid grid with 16px side margins. Key clinical actions (Call, Book) should be pinned to a bottom sticky bar for immediate access.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and **Tonal Layers**. 
- **Surface Elevation:** Cards and containers use a very soft, diffused shadow (Blur: 20px, Spread: 0, Opacity: 4% of #006D77) to appear "lifted" from the light grey background.
- **Interactive Depth:** Buttons use a subtle inner-glow on hover rather than heavy dropshadows to maintain a clean, clinical look.
- **Sticky Elements:** The header and mobile action bar use a `backdrop-filter: blur(10px)` with a 90% opaque white background to provide context of depth without obscuring content.

## Shapes
In line with the healthcare focus, shapes are purposefully **Rounded**. 
- **Standard Radius:** 8px for small components (inputs, small buttons).
- **Large Radius (16px+):** Used for service cards and testimonial blocks to create a soft, welcoming feel. 
- **Pill-shapes:** Used exclusively for status indicators (e.g., "Available") and the floating WhatsApp button to differentiate them from standard structural elements.

## Components
- **Primary Buttons:** High-contrast Teal (#006D77) with white text. Height: 48px or 56px for "Book Appointment" CTA. 16px corner radius.
- **Appointment Forms:** Fields use the "Soft" 8px radius with a subtle Aqua border on focus. Labels should always be visible (Top-aligned).
- **Sticky Header:** Compact design containing the logo, emergency contact, and a "Book Now" primary button. 
- **Service Cards:** White background, 24px padding, 16px radius, with a subtle Teal-tinted shadow. Top-aligned icon in Soft Aqua.
- **Mobile Action Bar:** Fixed to the bottom of the viewport on mobile, containing "Call Clinic" and "Book Online" as primary actions.
- **Floating WhatsApp:** Situated at the bottom right (above the action bar on mobile). Brand green #25D366 should be slightly adjusted toward the system Teal for harmony.