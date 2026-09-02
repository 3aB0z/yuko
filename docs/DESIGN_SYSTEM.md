# Design System

## 1. Design Direction

### Concept

**"Gallery at Home"**

The website combines intimate studio warmth with the quality and restraint of a contemporary art gallery.

The design should feel:

- Artistic
- Elegant
- Warm
- Personal
- Sophisticated
- Calm
- Contemporary
- Handmade
- Editorial
- Gallery-like

The artwork must always remain the primary visual focus. UI elements should be minimal and recede into the background.

The website should feel like an artist's personal gallery rather than a generic portfolio template or traditional e-commerce store.

---

## 2. Design Principles

### Artwork First

Artwork is the most important element on every page.

Avoid UI treatments that compete with artwork:

- Excessive decorations
- Large colorful UI elements
- Heavy shadows
- Unnecessary gradients
- Excessive animations
- Overly complex layouts

### Generous Whitespace

Artwork should have enough surrounding space to breathe.

Use generous:

- Section padding
- Grid gaps
- Margins
- Line spacing

### Sharp and Intentional

The visual language uses sharp edges rather than modern SaaS-style rounded cards.

Border radius should generally be:

- `0px` for buttons, tags, images
- `2px` for cards

### Quiet Interaction

Interactions should be subtle and refined.

Animations should communicate interaction without becoming distracting.

---

# 3. Color System

## Primary Colors

| Token         | Hex       | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| Charcoal Ink  | `#1a1a1a` | Primary text, strong borders, navigation |
| Warm Ivory    | `#faf8f5` | Main page background                     |
| Terracotta    | `#c4705a` | Primary accent, CTAs, active states      |
| Sage          | `#8a9a7b` | Secondary accent, availability states    |
| Clay          | `#d4a574` | Tertiary accent, warm highlights         |
| Stone         | `#e8e4df` | Borders, dividers, subtle backgrounds    |
| Deep Charcoal | `#2d2d2d` | Footer and dark sections                 |
| Muted         | `#b8b0a8` | Captions and secondary metadata          |

## Semantic Colors

### Backgrounds

```text
background-primary: #faf8f5
background-secondary: #f5f1ec
background-surface: #ffffff
background-dark: #2d2d2d
```

### Text

```text
text-primary: #1a1a1a
text-secondary: #2d2d2d
text-muted: #b8b0a8
text-inverse: #faf8f5
```

### Accents

```text
accent-primary: #c4705a
accent-primary-hover: #a85d48

accent-secondary: #8a9a7b
accent-tertiary: #d4a574
```

### Borders

```text
border-default: #e8e4df
border-strong: #1a1a1a
```

---

# 4. Typography

## Font Families

### Display / Headings

**Cormorant Garamond**

Used for:

- Page titles

- Hero headings

- Section headings

- Artwork titles

- Large editorial text

- Mobile navigation links

### Body / UI

**Inter**

Used for:

- Body text

- Navigation

- Buttons

- Labels

- Metadata

- Tags

- Form fields

## Typography Hierarchy

### H1

```text
Font: Cormorant Garamond
Size: 64px
Weight: 300
Line-height: 1.05
```

Mobile:

```text
Size: 40px
```

### H2

```text
Font: Cormorant Garamond
Size: 48px
Weight: 400
Line-height: 1.1
```

Mobile:

```text
Size: 32px
```

### H3

```text
Font: Cormorant Garamond
Size: 32px
Weight: 400
Line-height: 1.2
```

### Body

```text
Font: Inter
Size: 16px
Weight: 400
Line-height: 1.7
```

### Small Text

```text
Font: Inter
Size: 14px
Weight: 400
Line-height: 1.5
```

### Navigation

```text
Font: Inter
Size: 13px
Weight: 500
Text-transform: uppercase
Letter-spacing: 0.12em
```

### Buttons

```text
Font: Inter
Size: 13px
Weight: 500
Text-transform: uppercase
Letter-spacing: 0.1em
```

---

# 5. Spacing System

Use a consistent spacing scale.

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
```

## Section Spacing

Desktop:

```text
120px vertical padding
```

Tablet:

```text
80px vertical padding
```

Mobile:

```text
60px vertical padding
```

## Content Width

Maximum content width:

```text
1200px
```

Content should be centered horizontally.

## Common Spacing

Heading → content:

```text
48px
```

Paragraph → paragraph:

```text
24px
```

Gallery grid gap:

```text
40px
```

---

# 6. Border Radius

The website intentionally uses sharp edges.

```text
cards: 2px
buttons: 0px
images: 0px
tags: 0px
inputs: 0px
```

Avoid large rounded corners.

Do not use:

```text
rounded-xl
rounded-2xl
rounded-full
```

unless there is a specific design reason.

---

# 7. Borders

Default border:

```text
1px solid #e8e4df
```

Strong border:

```text
1px solid #1a1a1a
```

Borders should be subtle and primarily used for:

- Cards

- Dividers

- Form fields

- Secondary buttons

- Navigation separators

---

# 8. Shadows

The default design is intentionally flat.

## Default

```text
box-shadow: none;
```

## Card Hover

```text
0 4px 24px rgba(26, 26, 26, 0.06)
```

## Image Hover

```text
0 8px 32px rgba(26, 26, 26, 0.08)
```

## Navigation on Scroll

Use an extremely subtle separation:

```text
0 1px 0 rgba(26, 26, 26, 0.05)
```

Do not use heavy shadows.

---

# 9. Background

Primary page background:

```text
#faf8f5
```

The background should resemble warm, high-quality art paper.

## Paper Grain

A very subtle paper grain/noise texture may be applied over the main background.

Target opacity:

```text
2.5%
```

The texture must remain subtle enough that users barely notice it.

It must never interfere with:

- Text readability

- Artwork

- Accessibility

- Performance

No background gradients.

---

# 10. Navigation

## Desktop

The header is fixed at the top.

Height:

```text
80px
```

Initially:

```text
background: transparent;
```

After scrolling:

```text
background: rgba(250, 248, 245, 0.95);
backdrop-filter: blur(12px);
```

Navigation should gain only a very subtle bottom separation when scrolling.

## Logo

```text
Font: Cormorant Garamond
Size: 22px
Letter-spacing: 0.15em
Text-transform: uppercase
```

## Navigation Links

```text
Font: Inter
Size: 13px
Weight: 500
Letter-spacing: 0.12em
Text-transform: uppercase
```

Navigation links use an animated underline.

The underline should:

- Start from the left

- Animate using transform

- Use the Terracotta accent

- Remain subtle

## Mobile

Desktop navigation collapses into a hamburger button.

Opening the menu displays a full-screen navigation overlay.

Mobile navigation links use:

```text
Cormorant Garamond
Large editorial typography
```

Touch targets must be at least:

```text
48px
```

---

# 11. Buttons

## Primary Button

```text
Background: #c4705a
Text: #ffffff
Border-radius: 0px
Font: Inter
Size: 13px
Weight: 500
Letter-spacing: 0.1em
Text-transform: uppercase
```

Hover:

```text
Background: #a85d48
Transform: translateY(-1px)
```

## Secondary Button

```text
Background: transparent
Text: #1a1a1a
Border: 1px solid #1a1a1a
Border-radius: 0px
```

Hover:

```text
Background: #1a1a1a
Text: #ffffff
```

## Text Links

Text links should use an underline.

Underline offset:

```text
6px
```

Hover:

```text
color: #c4705a
```

---

# 12. Cards

Artwork cards should feel like gallery frames.

## Default

```text
Background: #f5f1ec
Border: 1px solid #e8e4df
Border-radius: 2px
Shadow: none
```

## Hover

```text
Shadow: 0 4px 24px rgba(26, 26, 26, 0.06)
```

Artwork image should scale slightly.

```text
scale: 1.03
```

The transition must remain subtle.

---

# 13. Gallery

## Desktop

Use a 3-column CSS grid.

```text
columns: 3
gap: 40px
```

## Tablet

```text
columns: 2
gap: 32px
```

## Mobile

```text
columns: 1
gap: 24px
```

## Gallery Style

The gallery should have an editorial, masonry-inspired appearance.

Prefer a standard CSS grid with controlled offsets rather than a complex masonry implementation.

Selected cards may have small vertical offsets to create visual rhythm.

Do not sacrifice:

- Accessibility

- Responsive behavior

- Performance

- Maintainability

for decorative masonry effects.

## Artwork Card

Each card may contain:

1. Artwork image

2. Artwork title

3. Category

4. Optional availability/status

Artwork remains visually dominant.

---

# 14. Artwork Images

## General

Artwork must be shown as naturally as possible.

Do not apply artistic filters to the artwork.

Avoid:

- Color filters

- Heavy overlays

- Excessive blur

- Artificial effects

## Gallery Images

Gallery cards may use:

```text
object-fit: cover
```

when the composition allows it.

Mixed aspect ratios are encouraged:

```text
4:5
3:4
1:1
```

## Artwork Detail Images

The artwork detail page should prioritize showing the complete artwork.

Use:

```text
object-fit: contain
```

when cropping would remove important parts of the artwork.

The image presentation should always respect the artwork itself.

---

# 15. Image Animation

Images may use a subtle entrance animation:

```text
opacity: 0 → 1
scale: 1.02 → 1
```

Gallery hover:

```text
scale: 1.03
```

Duration:

```text
600ms
```

Do not over-animate artwork.

---

# 16. Homepage

The homepage should establish the artist's identity immediately.

Recommended structure:

1. Hero

2. Featured Works

3. About Preview

4. Contact CTA

5. Footer

## Hero

The hero should be visually strong but restrained.

Use a prominent artwork image or carefully selected artwork composition.

The artist's name and short positioning statement should be immediately understandable.

The hero should not feel like a generic marketing landing page.

---

# 17. Gallery Page

The Gallery page is the primary artwork browsing experience.

Recommended structure:

1. Page introduction

2. Category filters

3. Artwork grid

Possible categories:

```text
All
Drawings
Clay Figures
```

The categories should remain easy to expand later.

Active filter:

```text
Terracotta
```

Filtering should feel instant and unobtrusive.

---

# 18. Artwork Detail Page

The artwork detail page should provide a focused viewing experience.

## Hero Image

Target height:

```text
approximately 70vh
```

However, the artwork should never be cropped merely to satisfy the height.

If necessary, use a contained image presentation.

Avoid gradients because the global design language does not use background gradients.

If text must appear over an image, use a minimal solid/semi-transparent overlay only where required for readability.

## Information Layout

Desktop:

```text
Left: 60%
Right: 40%
```

Left side:

- Artwork title

- Description

- Materials

- Dimensions

- Year

- Additional information

Right side:

- Price

- Availability

- CTA

- Optional inquiry information

The sidebar may be sticky on desktop.

Mobile:

```text
Single column
```

## Related Works

Use a 3-column grid on desktop.

Mobile:

```text
1 column
```

## Previous / Next

Provide navigation between artworks.

Where appropriate, include artwork thumbnails.

---

# 19. About Page

The About page should feel personal and editorial.

Avoid the standard corporate "About Us" layout.

Use:

- Artist photography

- Studio imagery

- Editorial typography

- Short personal story

- Artistic philosophy

- Selected process details

The artist's personality should be visible without overwhelming the artwork.

---

# 20. Contact Page

The Contact page should remain simple.

Possible content:

- Short invitation to get in touch

- Contact form

- Email

- Social links

- Commission/inquiry information

Forms should use the same sharp-edged visual language.

Inputs:

```text
border: 1px solid #e8e4df
border-radius: 0px
background: #ffffff
```

Focus states should remain accessible without introducing excessive visual effects.

---

# 21. Footer

Footer background:

```text
#2d2d2d
```

Footer text:

Keep the footer simple.

Possible sections:

- Artist name

- Navigation

- Contact

- Social links

- Copyright

Do not overcrowd the footer.

---

# 22. Motion

Motion should support the feeling of calm contemplation.

## Global Transition

```text
400ms cubic-bezier(0.25, 0.1, 0.25, 1)
```

## Page Entrance

Use subtle:

```text
opacity: 0 → 1
transform: translateY(24px) → translateY(0)
```

Staggered animation may be used sparingly.

## Scroll Reveal

Sections may fade in when entering the viewport.

Do not animate every element independently.

## No Parallax

Do not use parallax effects.

## No Excessive Motion

Avoid:

- Large transforms

- Fast bouncing

- Continuous animations

- Decorative motion

- Excessive stagger delays

## Reduced Motion

Respect:

```text
prefers-reduced-motion
```

Users who request reduced motion should receive minimal or no non-essential animation.

---

# 23. Responsive Design

The website must work well across:

- Desktop

- Laptop

- Tablet

- Mobile

## Breakpoint Strategy

Use Tailwind's standard responsive breakpoints unless a specific design requirement requires otherwise.

The layout should adapt naturally rather than relying on excessive breakpoint-specific overrides.

## Mobile

Navigation:

```text
Hamburger
→
Full-screen navigation
```

Gallery:

```text
1 column
```

Artwork detail:

```text
Single column
```

Typography:

```text
H1: 40px
H2: 32px
```

Section padding:

```text
60px
```

Minimum interactive touch target:

```text
48px
```

---

# 24. Accessibility

The visual design must not compromise accessibility.

Requirements:

- Maintain readable text contrast

- Provide visible keyboard focus states

- Use semantic HTML

- Provide meaningful image alt text

- Ensure interactive elements have adequate touch targets

- Respect reduced-motion preferences

- Do not rely only on color to communicate information

- Forms must have accessible labels

Artwork descriptions and metadata should remain readable even with the decorative paper texture.

---

# 25. Performance

The artwork-heavy nature of the site makes image performance important.

Use:

- Responsive image sizes

- Lazy loading for below-the-fold images

- Optimized image formats where appropriate

- Proper image dimensions

- Minimal JavaScript for visual effects

- CSS transitions where possible

Do not load unnecessarily large artwork images when a smaller version is sufficient.

The visual quality of artwork must remain high while keeping page performance reasonable.

---

# 26. SEO

Each artwork should eventually have its own indexable page.

Artwork pages should support:

- Unique title

- Description

- Artwork metadata

- Descriptive URLs

- Image alt text

- Open Graph metadata

The artist's name and artistic identity should be clear to search engines.

---

# 27. Component Design Rules

Components should be reusable and focused.

Examples:

```text
Header
Footer
Button
SectionHeading
ArtworkCard
ArtworkGrid
ArtworkFilter
ArtworkMeta
ArtworkImage
PageHero
ContactForm
```

Avoid creating abstractions before they are actually needed.

Prefer simple, reusable components over deeply nested or overly generic component systems.

---

# 28. Future Content Management

The current public website should be designed so that artwork content can later become database-driven.

Artwork data should eventually support:

```text
title
slug
description
category
images
year
materials
dimensions
price
availability
featured
created_at
updated_at
```

The visual design must not depend on hardcoded artwork names or fixed artwork counts.

The gallery should support additional artworks without requiring layout redesign.

---

# 29. Future Commerce

Commerce is planned for a later phase.

Potential future functionality:

- Cart

- Checkout

- Orders

- Payments

- Inventory

- Shipping

- Commission requests

The current design should leave room for these features without turning the website into a generic e-commerce store.

Artwork presentation remains the priority.

---

# 30. Design Anti-Patterns

Avoid the following:

### Generic SaaS Design

Do not use:

- Large rounded cards

- Dashboard-like layouts

- Excessive pills

- Generic SaaS gradients

- Floating glass panels

### Excessive Feminine Styling

Do not rely on:

- Pink palettes

- Decorative hearts

- Overly soft rounded UI

- Cliché "feminine" visual language

The design should feel artistic and sophisticated rather than stereotypically feminine.

### Excessive Decoration

Avoid:

- Unnecessary icons

- Decorative blobs

- Excessive borders

- Large background graphics

- Random illustrations

### Excessive Animation

Avoid:

- Parallax

- Constant movement

- Overly long transitions

- Bouncy UI

- Large entrance animations

### E-commerce-first Presentation

The website should not resemble:

- Shopify templates

- Product catalogs

- Marketplace listings

Selling should eventually be possible, but the artist and artwork remain the focus.

---

# 31. Design Tokens Summary

```text
PRIMARY BACKGROUND
#faf8f5

SECONDARY BACKGROUND
#f5f1ec

SURFACE
#ffffff

PRIMARY TEXT
#1a1a1a

SECONDARY TEXT
#2d2d2d

MUTED TEXT
#b8b0a8

PRIMARY ACCENT
#c4705a

PRIMARY ACCENT HOVER
#a85d48

SECONDARY ACCENT
#8a9a7b

TERTIARY ACCENT
#d4a574

BORDER
#e8e4df

DARK BACKGROUND
#2d2d2d

DISPLAY FONT
Cormorant Garamond

BODY FONT
Inter

MAX CONTENT WIDTH
1200px

DESKTOP SECTION PADDING
120px

TABLET SECTION PADDING
80px

MOBILE SECTION PADDING
60px

DESKTOP GALLERY GAP
40px

CARD RADIUS
2px

BUTTON RADIUS
0px

IMAGE RADIUS
0px

DEFAULT SHADOW
none

HOVER SHADOW
0 4px 24px rgba(26, 26, 26, 0.06)

TRANSITION
400ms cubic-bezier(0.25, 0.1, 0.25, 1)
```

---

# 32. Current Design Status

**Phase 1 — Foundation:** Complete

**Phase 2 — Design Direction:** Complete

The visual direction is based on the Kimi AI Design prototype and has been reviewed and refined.

The approved direction is:

> **Gallery at Home — intimate museum quality combined with personal studio warmth.**

Next implementation step:

1. Install/configure the selected fonts.

2. Configure the design tokens in Tailwind/CSS.

3. Create the foundational UI components.

4. Build the homepage according to this design system.
