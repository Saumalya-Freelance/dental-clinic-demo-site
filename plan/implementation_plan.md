# Implementation Plan: Lumina Dental Studio

This plan outlines the implementation of the Lumina Dental Studio demo website based on the provided Stitch designs and the `lap-of-nature-site-main` reference project.

## 1. Project Audit

**Target Project:** `/home/icpl-8/Music/Projects/dental-clinic-demo-site`
- **Current State:** The repository currently does **not** contain an initialized React/Vite project. It only contains the `/assets` and `/design` directories.
- **Current framework/Vite/React:** None installed.
- **package.json:** Missing.
- **Existing dependencies:** None.
- **Existing code:** None.

## 2. Reference Project Findings

**Reference Project:** `/home/icpl-8/Music/Projects/lap-of-nature-site-main`
- **Architecture:** React + Vite, predominantly utilizing a single-page scrolling structure (`<section id="...">`) despite having `react-router-dom` in its dependencies.
- **Component Organization:** Components are grouped functionally within `src/components/` (e.g., `layout`, `hero`, `destinations`, `gallery`).
- **Styling:** Tailwind CSS.
- **Layout Patterns:** A standard fixed header, hero section, sequential content sections, and a footer. It also includes global components like a Promo Modal and a Logo Loader.

*Useful Patterns to Adopt:* Functional component grouping, single-page scroll sections, and Tailwind for styling. We will **not** copy the travel-specific components or visual styles.

## 3. Stitch Design Findings

**Design Location:** `/home/icpl-8/Music/Projects/dental-clinic-demo-site/design/`
- **Design Structure:** High-fidelity HTML/CSS mockups utilizing Tailwind CSS via CDN.
- **Key UI Elements:**
  - Fixed, backdrop-blur desktop header.
  - Sticky bottom action bar for mobile devices.
  - Floating WhatsApp action button.
  - Generous spacing (80px section gaps) and rounded corners (16px for cards).
  - Ambient, subtle teal-tinted shadows for elevation.
- **Navigation:** The navigation links in the design use anchor tags (`#home`, `#about`, `#treatments`, etc.), strongly suggesting a continuous single-page scrolling layout.

## 4. Page/Screen Inventory

Based on the `design/` folder, the following functional sections are required:
1. **Landing Page (Hero & Trust Highlights)**
2. **About Us**
3. **Treatments**
4. **Why Choose Us**
5. **Patient Reviews (Testimonials)**
6. **Contact Us**

## 5. Proposed Folder Structure

```text
src/
├── assets/          # Migrated from dental-clinic-demo-site/assets
├── components/
│   ├── layout/      # Header, Footer, MobileBottomNav, WhatsAppFAB
│   ├── home/        # HeroSection, TrustHighlights
│   ├── about/       # AboutSection
│   ├── treatments/  # TreatmentsSection, ServiceCard
│   ├── why-us/      # WhyChooseUsSection
│   ├── reviews/     # ReviewsSection, ReviewCard
│   ├── contact/     # ContactSection, AppointmentForm
│   └── ui/          # Reusable Buttons, SectionHeadings
├── data/            # Mock data (treatments list, reviews)
├── hooks/           # Any custom hooks (e.g., active section intersection observer)
├── styles/          # index.css (Tailwind directives and global styles)
├── App.tsx          # Main assembly of sections
└── main.tsx         # Entry point
```

## 6. Routing Strategy

**Recommendation: Single-Page Application (Scrolling Sections)**
*Reasoning:* The Stitch designs explicitly use hash links (`#home`, `#about`, etc.) in the navigation header. Furthermore, the reference project effectively utilizes a single-page scrolling architecture. Given this is a demo site for a local business, a single long-scrolling page provides a cohesive, uninterrupted user experience and translates perfectly to mobile. No multi-page routing (`react-router-dom`) is required at this stage unless specifically requested for a complex sub-page later.

## 7. Design System

Extracted from `/assets/clinical_serenity/DESIGN.md`:

**Colors:**
- **Primary:** `#00535b` (Deep Teal) / Primary Container: `#006d77`
- **Secondary:** `#236863` (Soft Aqua)
- **Background / Surface:** `#f9f9ff` (Soft Mint tint)
- **Text (On Surface):** `#121c2c` (Dark Charcoal)
- **WhatsApp Green:** `#25D366`

**Typography:**
- **Headings (Display/Headline):** `Outfit` (Geometric, modern)
- **Body/Labels:** `Inter` (Highly legible)

**UI Elements:**
- **Border Radius:** `0.25rem` (sm), `0.5rem` (default), `1rem` (lg), `1.5rem` (xl). 16px (xl) is standard for service cards.
- **Shadows:** Ambient shadow `0 4px 20px 0px rgba(0, 109, 119, 0.04)`.
- **Spacing:** 1200px max-width container, 80px section vertical gaps.

## 8. Asset Mapping

Images from `/assets/` will be used as follows:
- `dental_clinic_logo/`: Header and Footer logo.
- `premium_dental_clinic_hero_image.../`: Hero section background.
- `modern_dental_clinic_interior.../`: About Us / Clinic showcase section.
- `professional_portrait_of_a_dentist.../`: Doctor / About section.

## 9. Placeholder / Content Requirements

The following dynamic data will use placeholders until provided by the client:
- `[Clinic Name]` (Defaulting to "Lumina Dental Studio" based on design)
- `[Doctor Name]`, `[Doctor Qualification]`
- `[Phone Number]`, `[WhatsApp Number]`
- `[Clinic Address]`, `[Google Maps Embed Link]`
- `[Opening Hours]`
- `[Email Address]`

## 10. Responsive Strategy

- **Desktop (md+):** Fixed top header, 12-column grid max 1200px, 48px side margins. Floating WhatsApp button on bottom right.
- **Mobile (< md):**
  - Header simplifies to Logo + Name (no links).
  - Navigation moves to a **Sticky Bottom Action Bar** (Call, WhatsApp, Book).
  - Sections collapse to a single-column fluid grid with 16px margins.
  - Floating WhatsApp button sits slightly above the bottom action bar.

## 11. Step-by-step Implementation Roadmap

### PHASE 0: Project Audit + Setup
- Initialize Vite React + TypeScript project in the current directory.
- Install Tailwind CSS, configure `tailwind.config.js` with the Stitch design tokens.
- Copy assets into the `src/assets` folder.

### PHASE 1: Global Design System (Task List below)
- Configure fonts (Outfit, Inter) in `index.html`.
- Setup Tailwind color palette, typography, and shadow utilities.
- Create global CSS for smooth scrolling and scrollbar hiding.

### PHASE 2: Global Layout
- Implement Desktop `Header` component.
- Implement Mobile `BottomActionBar` component.
- Implement `FloatingWhatsApp` button.
- Implement `Footer` component.

### PHASE 3: Home Page (Hero & Trust Highlights)
- Build `HeroSection` with background image overlay and typography.
- Build `TrustHighlights` grid.

### PHASE 4: About & Why Choose Us Sections
- Implement `AboutSection`.
- Implement `WhyChooseUsSection`.

### PHASE 5: Treatments Section
- Build reusable `ServiceCard` component.
- Implement `TreatmentsSection` grid.

### PHASE 6: Patient Reviews Section
- Build reusable `ReviewCard`.
- Implement horizontally scrollable or grid-based `ReviewsSection`.

### PHASE 7: Contact / Appointment Section
- Implement `ContactSection` (Address, Hours, basic HTML form placeholder).

### PHASE 8: Assembly & Final Visual QA
- Assemble all sections in `App.tsx`.
- Perform full QA against the Stitch HTML/PNG designs.

## 12. Detailed Phase 1 Task List (Design System)

1. **`tailwind.config.js` Updates:**
   - Add custom colors (`primary`, `surface`, `on-surface`, etc.) matching `DESIGN.md`.
   - Add custom font families (`Outfit`, `Inter`).
   - Add custom shadows (`ambient`, `ambient-hover`).
   - Add custom spacing (`margin-desktop`, `margin-mobile`, `container-max`, `section-gap`).
2. **`index.css` Updates:**
   - Add Google Fonts imports.
   - Add `html { scroll-behavior: smooth; }`.
   - Add base body styles (`bg-background text-on-background font-body-md`).
3. **`index.html` Updates:**
   - Import Material Symbols Outlined font.

## 13. Acceptance Criteria (Per Phase)

- **Phase 0-1:** Tailwind config exactly matches Stitch tokens. Fonts load correctly.
- **Phase 2:** Header is sticky and blurred. Mobile nav appears only on small screens. Navigation links correctly anchor to IDs.
- **Phase 3-7:** Components visually match the Stitch HTML mockups (padding, margins, colors, border radii, shadows). No generic placeholders (use actual design assets).
- **Phase 8:** The entire assembled page is responsive. No horizontal overflow. Mobile action bar functions correctly.

## 14. Potential Risks/Issues Found

- **Missing Initialization:** The `dental-clinic-demo-site` is completely empty. We will need to run the Vite initialization command inside this directory before any React code can be written.
- **Asset Migration:** The `assets` directory sits outside `src`. We will need to either reference it from `public/` or move it inside `src/assets/` post-initialization. Moving it to `public/assets/` is generally preferred for Vite.

> [!IMPORTANT]
> **User Review Required:**
> 1. Do you approve the **Single-Page Scrolling** architecture instead of separate routes?
> 2. Do you approve initializing a brand new Vite/React project inside `/home/icpl-8/Music/Projects/dental-clinic-demo-site`?

---
*Planning complete. No implementation has been started.*
