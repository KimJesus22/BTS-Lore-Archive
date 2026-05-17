---
name: Cosmic Archive
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#ccc3d7'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d3bbff'
  primary: '#d3bbff'
  on-primary: '#3f008d'
  primary-container: '#6d28d9'
  on-primary-container: '#dac5ff'
  inverse-primary: '#7331df'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c3c6cf'
  on-tertiary: '#2d3137'
  tertiary-container: '#545860'
  on-tertiary-container: '#cccfd7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ebddff'
  primary-fixed-dim: '#d3bbff'
  on-primary-fixed: '#250059'
  on-primary-fixed-variant: '#5b00c5'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dfe2eb'
  tertiary-fixed-dim: '#c3c6cf'
  on-tertiary-fixed: '#181c22'
  on-tertiary-fixed-variant: '#43474e'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system establishes a high-end, editorial atmosphere tailored for a narrative-heavy digital archive. The aesthetic merges **Modern Editorial** layouts with a **Cosmic Glassmorphism** style, evoking the feeling of a premium museum set within a digital nebula. 

The experience is designed to feel mysterious yet organized, inviting users to explore complex lore through a lens of sophistication. We lean heavily into translucent layers, vibrant accent gradients, and deep, infinite backgrounds to create a sense of immersion and emotional weight.

**Design Principles:**
- **Atmospheric Depth:** Use layered transparency and background blurs to simulate physical glass floating in space.
- **Editorial Precision:** High-contrast typography and generous margins that prioritize readability and a "prestige" feel.
- **Symbolic Minimalim:** Replace photography with abstract geometry, celestial patterns, and radiant gradients.

## Colors

The palette is rooted in deep, infinite blacks and navies to provide a "void" for the content to inhabit. 

- **Primary Gradient:** A deep, vibrant purple used for active states, focal points, and narrative highlights.
- **Gold Accent:** Reserved for "royal" or "legendary" status items, icons, and subtle trim, providing a premium contrast to the cool-toned base.
- **Surface Strategy:** Surfaces are rarely solid. They are constructed using semi-transparent layers (`surface_glass`) to allow background gradients and abstract shapes to bleed through, maintaining the "cosmic" depth.

## Typography

This system utilizes a high-contrast typographic pairing to balance editorial beauty with technical clarity.

- **Headlines (Playfair Display):** Should be used with tight letter-spacing for a modern, fashion-magazine feel. Use for titles, chapter headers, and pull-quotes.
- **Body (Manrope):** A clean, geometric sans-serif that ensures long-form lore is accessible and legible against dark backgrounds.
- **Labels (Space Grotesk):** Provides a "technical archive" feel. Use for metadata, timestamps, and secondary navigation elements. Always use Uppercase for `label-caps` to distinguish it as an architectural element.

## Layout & Spacing

The layout philosophy is **Fixed Grid** with an emphasis on asymmetric editorial balance. 

- **Grid:** 12-column grid for desktop with wide 64px margins to create a "framed" gallery effect.
- **Rhythm:** Use large vertical stacks (`stack-lg`) between major narrative sections to allow the background effects to "breathe."
- **Reflow:** On mobile, margins collapse to 16px, and multi-column cards stack vertically. Typography scales down specifically for display sizes to maintain hierarchy without overflowing.

## Elevation & Depth

Depth is conveyed through **Backdrop-Blur (Glassmorphism)** rather than traditional shadows.

1.  **Level 0 (Background):** Deep black (#050505) with subtle, slow-moving blurred gradients (Purples/Navies) to simulate cosmic gas.
2.  **Level 1 (Cards):** Semi-transparent white (3% - 8% opacity) with a `20px` backdrop-blur. A 1px border of `white @ 10%` defines the edge.
3.  **Level 2 (Overlays/Modals):** Darker glass (Black @ 40%) with higher blur (`40px`) to focus the user's attention.

**Shadows:** Avoid heavy black shadows. Use a soft, subtle "glow" shadow (Purple @ 20% opacity) for primary interactive elements like buttons to make them appear bioluminescent.

## Shapes

The shape language is refined and "Soft Rounded."

- **Cards & Containers:** Use `rounded-lg` (16px) for most archive containers to soften the editorial look.
- **Buttons:** Use `rounded-xl` (24px) or full pill-shape for primary actions to make them feel inviting and touch-friendly.
- **Decorative Elements:** Use perfectly circular shapes for "celestial" accents or abstract symbols. Use thin 1px lines for "astrological" connections between lore nodes.

## Components

### Buttons
- **Primary:** Full gradient background (`gradient_nebula`), white text, no border. Subtle outer glow on hover.
- **Secondary:** Transparent background, 1px Gold border (`#D4AF37`), gold text.
- **Ghost:** White text, no background. Becomes `surface_glass` on hover.

### Glassmorphism Cards
The core archive component. Features a 1px top-left highlight border to simulate light hitting glass. Content should have ample padding (24px - 32px) to maintain the premium feel.

### Input Fields
Dark, recessed look. `background: rgba(0,0,0,0.3)`, 1px border `white @ 10%`. On focus, the border transitions to the purple gradient or gold accent.

### Chips & Tags
Small, pill-shaped elements using `Space Grotesk`. Use low-opacity purple fills (`rgba(109, 40, 217, 0.2)`) with a high-contrast text color for metadata like "Timeline: 2015" or "Theme: Youth."

### Progress Indicators
Used for "Lore Completion" or "Story Progress." Use a thin, 2px gold line tracked against a dark navy background.

### Timeline Nodes
Vertical or horizontal lines with small circular "stars" as points. Active points should have a radiant purple pulse effect.