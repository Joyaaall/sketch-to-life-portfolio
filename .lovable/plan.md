

# Joyal's Portfolio — "The Living Sketchbook"

A bold, playful, retro-modern personal portfolio with neo-brutalist design, GSAP animations, and expressive personality.

## Design System
- **Colors**: Sky Blue (#7DD3FC), Soft Yellow (#FDE047), Pink (#FDA4AF), Green (#86EFAC), Off-white paper background (#FDFCF0), Black for borders/text
- **Borders**: 4px solid black everywhere, 8px hard offset shadows (no blur)
- **Typography**: Space Grotesk (bold headlines 4-6rem) + Inter (body text)
- **Cards**: Rounded rectangles with thick borders, slight rotations, hard shadows
- **Accents**: SVG doodles — stars, arrows, flowers, squiggles scattered throughout

## Sections to Build

### 1. GSAP Loading Screen
- Full-screen loader with "Joyal loading..." animated text and a progress bar
- Smooth fade-out transition into the hero section

### 2. Hero Section
- **Left**: Bold headline "Hey, I'm Joyal — I build and design things people actually enjoy.", subtext, two CTA buttons (filled "View my work" + outlined "Contact me")
- **Right**: Profile image placeholder in a colored rounded card with floating doodle accents (stars, arrows) and a sticker badge
- Hand-drawn SVG arrow pointing toward profile/CTA
- Pastel blue/beige background

### 3. Floating Testimonial Cards
- 3 small colorful cards with quotes, each rotated 2-5°, different background colors, thick borders + hard shadows
- GSAP staggered entrance animation on scroll

### 4. About Me Section
- Big bold "About me" heading, casual personal paragraph, doodle accents in corners
- Clean and readable with playful touches

### 5. Projects Grid
- Grid of project cards (4-6 sample projects) with thumbnail, title, description, tech stack pills, "View project" + "GitHub" buttons
- Thick borders, bright backgrounds, hover: scale + shadow expand
- Optional "featured"/"new" sticker tags

### 6. Technical Skills Section
- Colorful pill badges/mini-cards for skills (React, Node.js, GSAP, UI/UX Design, etc.)
- Scattered but aligned layout, GSAP fade + pop-in animation

### 7. Contact Section
- Fun heading like "Let's talk!", casual message, email link, social icons, CTA button
- Big playful card with bright background + doodle elements

### 8. Navigation
- Simple sticky top nav with name/logo + section links
- Clean, minimal, stays out of the way

## Animation System (GSAP)
- Install `gsap` package
- Loading screen with animated entrance
- ScrollTrigger for section fade-in + upward motion
- Card pop-in with slight bounce on scroll
- Button hover: scale + color shift
- Floating doodle subtle animation (CSS keyframes)
- Smooth scroll behavior

## Pages & Files
- `src/pages/Index.tsx` — Main portfolio page
- `src/components/LoadingScreen.tsx`
- `src/components/Hero.tsx`
- `src/components/TestimonialCards.tsx`
- `src/components/About.tsx`
- `src/components/Projects.tsx`
- `src/components/Skills.tsx`
- `src/components/Contact.tsx`
- `src/components/Navbar.tsx`
- `src/components/Doodles.tsx` — Reusable SVG doodle elements
- Updated `src/index.css` with the neo-brutalist design system

