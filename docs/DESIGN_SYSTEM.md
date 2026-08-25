# Design System

**Status:** Initial  
**Version:** 1.0

---

## 1. Purpose

This document defines the visual rules for the artist portfolio.

The design should feel:

- Artistic
- Elegant
- Personal
- Modern
- Calm
- Premium
- Minimal without feeling empty

The design must prioritize the artwork itself.

---

## 2. Design Principles

### Artwork First

The artwork is the primary visual element.

UI elements should support the artwork rather than compete with it.

### Minimal but Not Generic

Avoid unnecessary decoration.

The website should still have enough visual personality to feel like an artist's personal space rather than a generic portfolio template.

### Consistency

Repeated elements should use consistent:

- Spacing
- Typography
- Borders
- Radius
- Buttons
- Cards
- States

### Intentional Whitespace

Whitespace should be used deliberately to give artwork and content room to breathe.

### Responsive by Default

Every component must work across:

- Mobile
- Tablet
- Desktop
- Large screens

---

## 3. Color System

The final colors will be selected during visual design implementation.

The system should support semantic color roles rather than scattering arbitrary colors throughout components.

Conceptual roles:

```text
Background
Foreground
Muted
Border
Primary
Primary Foreground
Secondary
Secondary Foreground
Accent
Accent Foreground
Destructive
Success
Warning
```

Example semantic usage:

```text
background
foreground
muted
border
primary
accent
destructive
```

Components should use semantic design tokens where possible.

---

## 4. Color Direction

The initial visual direction should explore:

- Warm neutral backgrounds
- Dark charcoal text
- Subtle earthy tones
- Soft accent colors inspired by clay and traditional materials

Possible visual references:

```text
Paper
Clay
Ink
Stone
Wood
Natural pigments
```

The exact palette must be chosen after testing it against real artwork images.

---

## 5. Typography

Typography should combine personality with readability.

The system should generally use:

### Display Font

Used for:

- Hero headings
- Major section titles
- Artist name
- Important visual statements

### Body Font

Used for:

- Descriptions
- Navigation
- Buttons
- Metadata
- Forms

### Rules

Avoid using too many font families.

Maximum recommended:

```text
1 display family
1 body family
```

Typography must remain readable on mobile.

---

## 6. Type Scale

The exact values may evolve during implementation.

Initial conceptual scale:

```text
Display
Heading XL
Heading L
Heading M
Heading S
Body L
Body
Body S
Caption
```

Typography should use responsive sizing where appropriate.

Example:

```text
Hero title
Mobile → smaller scale
Desktop → larger scale
```

---

## 7. Spacing

Use a consistent spacing scale.

Avoid arbitrary spacing values when an existing spacing value provides the same visual result.

Conceptual scale:

```text
xs
sm
md
lg
xl
2xl
3xl
4xl
```

Large spacing should be used between major page sections.

---

## 8. Containers

Public pages should use a centered content container.

The container should:

- Prevent excessively wide content
- Maintain consistent horizontal padding
- Adapt to screen size

Artwork galleries may intentionally use wider layouts than text-heavy sections.

---

## 9. Grid System

Artwork galleries should use responsive grids.

Example:

```text
Mobile
1 column

Tablet
2 columns

Desktop
3 columns

Large desktop
3–4 columns
```

The exact number of columns depends on artwork aspect ratio and visual composition.

Do not force every artwork into identical cropping if doing so damages the artwork presentation.

---

## 10. Artwork Cards

Artwork cards are one of the most important reusable components.

A card may contain:

```text
Image
Title
Category
Price
Status
```

Possible states:

```text
Available
Sold
Reserved
Coming Soon
```

Cards should remain visually simple.

The artwork image should dominate the card.

---

## 11. Artwork Images

Images must preserve the artwork's visual integrity.

Avoid aggressive cropping unless intentionally designed.

Preferred behavior:

```text
object-fit: contain
```

or an appropriate image treatment based on the artwork.

Images should support:

- Lazy loading
- Responsive sizing
- Alt text
- Multiple resolutions when available

---

## 12. Buttons

Buttons should have clear hierarchy.

### Primary

Used for the most important action.

Examples:

```text
View Artwork
Contact Artist
Buy Artwork
Request Commission
```

### Secondary

Used for supporting actions.

Examples:

```text
View Gallery
Learn More
```

### Ghost / Text

Used for low-priority actions.

Examples:

```text
View all
Back
Cancel
```

Buttons should have:

- Clear labels
- Comfortable touch targets
- Consistent height
- Consistent radius
- Accessible contrast

---

## 13. Forms

Forms should prioritize clarity.

Every form field should have:

- Label
- Input
- Validation state
- Error message when needed

Avoid relying on placeholders as the only field label.

---

## 14. Navigation

The public navigation should remain simple.

Potential navigation:

```text
Home
Gallery
About
Contact
```

A shop link may be introduced when commerce functionality exists.

The navigation should not become crowded as features are added.

---

## 15. Header

The header should visually support the artist identity.

Possible elements:

```text
Artist Logo / Name
Navigation
Primary Action
Mobile Menu
```

The exact layout will be decided during UI implementation.

---

## 16. Footer

The footer may contain:

```text
Artist name
Short description
Navigation
Social links
Contact
Copyright
```

Avoid excessive footer content.

---

## 17. Sections

Major sections should follow a consistent structure:

```text
Section
├── Optional eyebrow
├── Heading
├── Optional description
└── Content
```

A reusable `SectionHeading` component may be used.

---

## 18. Borders

Borders should be subtle.

Use borders primarily for:

- Cards
- Inputs
- Dividers
- Navigation elements
- Admin tables

Avoid excessive borders on the public website.

---

## 19. Border Radius

The final radius system will be selected during implementation.

Use a small, consistent set rather than many unrelated values.

Conceptual:

```text
Small
Medium
Large
Full
```

Artwork presentation may intentionally use different visual treatment depending on the final design.

---

## 20. Shadows

Shadows should be subtle.

Avoid heavy default card shadows.

The artwork itself should create most of the visual depth.

---

## 21. Animation

Animations should be restrained.

Good uses:

- Page transitions
- Image reveals
- Hover transitions
- Navigation transitions
- Modal transitions
- Gallery interactions

Avoid:

- Excessive bouncing
- Constant movement
- Long animations
- Animation that delays usability

Animation should support the experience, not become the experience.

---

## 22. Motion Timing

Initial guidelines:

```text
Fast
~150ms

Normal
~250ms

Slow
~400ms
```

Longer animations should only be used for intentional visual transitions.

---

## 23. Accessibility

The design system must support:

- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Semantic HTML
- Screen-reader-friendly labels
- Accessible buttons
- Accessible forms
- Reduced-motion preferences

Accessibility must not be treated as an optional feature.

---

## 24. Responsive Behavior

Components should adapt rather than simply shrink.

Examples:

### Navigation

```text
Desktop → full navigation
Mobile → compact navigation/menu
```

### Gallery

```text
Desktop → multi-column
Mobile → single/two-column depending on artwork
```

### Typography

```text
Desktop → larger display typography
Mobile → controlled scale
```

### Spacing

```text
Desktop → generous spacing
Mobile → reduced but comfortable spacing
```

---

## 25. Dark Mode

Dark mode is not required for the initial release.

The architecture should not prevent adding it later.

If added, all semantic colors should have dark-mode equivalents.

---

## 26. Loading States

Dynamic content should have appropriate loading states.

Possible patterns:

- Skeleton
- Spinner
- Progressive image loading
- Placeholder

Avoid unnecessary loading indicators for instant interactions.

---

## 27. Empty States

Empty states should clearly explain the situation.

Examples:

```text
No artworks available.
No artworks found.
No commissions yet.
```

Where appropriate, provide a useful next action.

---

## 28. Error States

Errors should be:

- Clear
- Human-readable
- Specific enough to be useful
- Visually distinct

Avoid exposing technical implementation details.

---

## 29. Status Badges

Artwork statuses should use a reusable status component.

Example:

```text
Available
Sold
Reserved
Coming Soon
```

The visual treatment should remain consistent across the website and admin dashboard.

---

## 30. Icons

Use one consistent icon system.

Do not mix multiple unrelated icon libraries without a clear reason.

Icons should support text rather than replace important labels.

---

## 31. Images and Visual Content

Real artwork should be used as early as possible during visual development.

Placeholder images can be used temporarily, but final layout decisions should be validated using realistic artwork dimensions and aspect ratios.

---

## 32. Component Rules

A component should be extracted when:

- It is reused
- It has meaningful internal behavior
- It represents a clear UI concept
- Extraction improves readability

Avoid:

```text
One-component-per-element
```

Prefer meaningful components such as:

```text
ArtworkCard
ArtworkGrid
GalleryFilter
SectionHeading
SiteHeader
SiteFooter
```

---

## 33. Design Tokens

Repeated design decisions should eventually be represented through centralized tokens.

Examples:

```text
Colors
Typography
Spacing
Radius
Shadows
Motion
```

This allows the entire visual identity to evolve without manually changing dozens of unrelated components.

---

## 34. Design Evolution

The first visual implementation is not considered final.

The design should be tested through:

1. Real artwork
2. Mobile layout
3. Desktop layout
4. Accessibility
5. Performance
6. User flow

Changes should be documented when they affect the overall design system.

---

## 35. Core Design Rule

> The website exists to present the artist and the artwork. The interface should make the artwork more compelling, not compete with it.
