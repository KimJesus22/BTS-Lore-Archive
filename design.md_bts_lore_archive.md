# Design System: Cosmic Archive

A high-fidelity design system for the **BTS Lore Archive**, optimized for implementation with Astro, TypeScript, and Tailwind CSS. The aesthetic is dark, elegant, and editorial, evoking a sense of cosmic mystery and archival preservation.

---

## 1. Color Palette

The system uses a dark-mode first palette with vibrant purple accents and gold highlights to create depth and hierarchy.

| Role | Hex Code | Tailwind Class (Approx) | Usage |
| :--- | :--- | :--- | :--- |
| **Surface** | `#111415` | `bg-[#111415]` | Primary background |
| **Surface Dim** | `#0c0f10` | `bg-[#0c0f10]` | Secondary backgrounds, deep sections |
| **Surface Bright** | `#373a3b` | `bg-[#373a3b]` | Elevated surfaces, hover states |
| **Primary** | `#6d28d9` | `text-[#6d28d9]` | Brand color, active links, primary buttons |
| **Secondary (Gold)** | `#fde047` | `text-yellow-300` | Accents, highlights, status indicators |
| **On Surface** | `#ffffff` | `text-white` | Primary text, titles |
| **On Surface Variant** | `#a1a1aa` | `text-zinc-400` | Body text, descriptions, labels |
| **Border** | `rgba(255,255,255,0.1)` | `border-white/10` | Dividers, card outlines |

---

## 2. Typography

**Font Family:** `Playfair Display` (Serif) for headings; `Inter` or `System Sans` (Sans-serif) for body text.

| Level | Size | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Large** | `64px` | `Bold (700)` | `-0.02em` | Hero titles |
| **Headline Large** | `48px` | `Bold (700)` | `-0.01em` | Section titles |
| **Headline Medium** | `32px` | `Semibold (600)`| `Normal` | Card titles, subsection headers |
| **Body Large** | `18px` | `Regular (400)` | `Normal` | Featured text, intro paragraphs |
| **Body Medium** | `16px` | `Regular (400)` | `Normal` | Standard content copy |
| **Label Caps** | `12px` | `Bold (700)` | `0.05em` | Overlines, tags, footer links |

---

## 3. Spacing & Grid

- **Unit:** 4px base (Tailwind default `1rem = 16px`).
- **Gutter:** `32px` (2rem).
- **Page Margin:** `64px` (4rem) on Desktop; `20px` (1.25rem) on Mobile.
- **Max Container Width:** `1280px`.
- **Stack Spacing:**
  - `py-24` (6rem) for major sections.
  - `py-12` (3rem) for component groupings.
  - `gap-6` (1.5rem) for grid items.

---

## 4. Components & Styles

### Card Styles (Glassmorphism)
- **Background:** `bg-white/5` or `bg-surface-container`.
- **Blur:** `backdrop-blur-xl`.
- **Border:** `1px solid white/10`.
- **Radius:** `rounded-2xl` (16px).
- **Hover:** `hover:bg-white/10 hover:border-primary/30 transition-all duration-300`.

### Button Styles
- **Primary:** `bg-[#6d28d9] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`.
- **Secondary:** `border border-yellow-300/50 text-yellow-300 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300/10 transition-all`.

### Interaction States
- **Links:** Underline transition or color change to `Primary`.
- **Focus:** `outline-none ring-2 ring-primary/50`.

---

## 5. Global Layout

### Header (TopNavBar)
- **Behavior:** Fixed/Sticky at top.
- **Visual:** Transparent background with heavy backdrop blur (`backdrop-blur-md`).
- **Logo:** `Playfair Display`, Headline-md, white.

### Footer
- **Layout:** Multi-column on desktop; stacked on mobile.
- **Content:** Brand logo, navigation links, legal text, and copyright.

---

## 6. Mobile Responsiveness

- **Layout Shift:** 3-column grids on Desktop → 2-column on Tablet → 1-column on Mobile.
- **Navigation:** Transition to a hamburger menu or simplified bottom bar for mobile screens.
- **Typography:** Scale down `Display Large` to `40px` and `Headline Large` to `32px` for small screens.

---

## 7. Implementation Checklist

### Pages
1. `index.astro` - Home
2. `eras/index.astro` - Eras Gallery
3. `eras/[id].astro` - Era Detail
4. `timeline.astro` - Universe Timeline
5. `members.astro` - Profiles
6. `theories.astro` - Theories Archive
7. `glossary.astro` - Terms & Symbols
8. `admin/dashboard.astro` - Management

### Components
- `TopNavBar.astro`
- `Footer.astro`
- `HeroSection.astro`
- `FeatureCard.astro`
- `EraCard.astro`
- `TimelineNode.astro`
- `TheoryCard.astro`
- `Badge.astro` (for complexity/status)

---

## 8. Accessibility Notes

- **Contrast:** Ensure all text passes WCAG AA (especially secondary gold on dark surfaces).
- **Semantics:** Use proper `h1-h6` hierarchy. Ensure buttons use `<button>` or `<a>` tags appropriately.
- **Motion:** Wrap decorative animations in `@media (prefers-reduced-motion: no-preference)`.
- **Alt Text:** Every image placeholder requires descriptive alt text for narrative context.
