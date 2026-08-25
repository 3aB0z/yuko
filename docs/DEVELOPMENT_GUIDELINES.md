# Development Guidelines

## 1. General Principles

- Keep the code simple and readable.
- Prefer existing Laravel, React, Inertia, and Tailwind features before adding dependencies.
- Do not add abstractions without a clear benefit.
- Do not duplicate logic unnecessarily.
- Keep frontend and backend responsibilities clearly separated.
- Preserve existing functionality when adding features.
- Avoid solving future problems before they actually exist.

---

## 2. Project Structure

Follow the existing Laravel structure.

### Backend

```text
app/
├── Actions/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   └── Requests/
├── Models/
├── Policies/
└── Services/
```

### Frontend

```text
resources/js/
├── components/
├── layouts/
├── lib/
├── pages/
└── types/
```

Keep files close to the responsibility they belong to.

---

## 3. Naming

### PHP

Use Laravel conventions.

Examples:

```text
ArtworkController
StoreArtworkRequest
ArtworkPolicy
ArtworkService
CreateArtwork
```

Classes use PascalCase.

Methods and variables use camelCase.

---

## 4. React / TypeScript

Components use PascalCase:

```text
ArtworkCard.tsx
ArtworkGrid.tsx
SectionHeading.tsx
```

Variables and functions use camelCase:

```ts
const artworkList = ...
const handleSubmit = ...
```

Type names use PascalCase:

```ts
type Artwork = ...
interface ArtworkImage ...
```

---

## 5. Components

Create reusable components when there is a meaningful reason.

Good:

```text
ArtworkCard
ArtworkGrid
ArtworkStatus
GalleryFilter
SectionHeading
```

Avoid unnecessary components such as:

```text
SmallText
SmallDiv
GenericWrapper
```

unless they provide real reusable behavior or design-system value.

---

## 6. Pages

Pages represent complete route-level screens.

Pages should compose smaller components.

Avoid putting large amounts of repeated UI directly inside page components.

Example:

```tsx
export default function Gallery() {
  return (
    <PublicLayout>
      <SectionHeading />
      <GalleryFilter />
      <ArtworkGrid />
    </PublicLayout>
  );
}
```

---

## 7. Backend Controllers

Controllers should remain thin.

Prefer:

```text
Request
↓
Validation
↓
Controller
↓
Service / Action when needed
↓
Model
```

Avoid putting large business operations directly inside controllers.

---

## 8. Validation

Server-side validation is mandatory for user-controlled data.

Use Form Requests when validation is substantial.

Example:

```text
StoreArtworkRequest
UpdateArtworkRequest
```

Never trust client-side validation alone.

---

## 9. Authorization

Never rely on frontend restrictions for security.

Every protected backend operation must independently verify authorization.

Use Laravel policies when authorization is resource-specific.

---

## 10. Database

Use migrations for schema changes.

Never manually modify the production database schema.

When changing database structure:

```text
Create migration
↓
Run migration locally
↓
Test
↓
Commit migration
```

Avoid destructive migrations unless the consequences are understood.

---

## 11. Eloquent

Prefer Eloquent relationships and query builder features over raw SQL when practical.

Avoid unnecessary database queries.

Watch for N+1 query problems.

Use eager loading when appropriate.

Example:

```php
Artwork::with(['images', 'category'])->get();
```

---

## 12. React State

Do not introduce global state management by default.

Prefer:

- React state
- Inertia props
- URL parameters
- Server state

Only introduce a state-management library when the application genuinely requires it.

---

## 13. Inertia

Use Inertia for normal application navigation.

Prefer:

```text
Laravel route
↓
Controller
↓
Inertia response
↓
React page
```

Do not create a separate API for functionality that can be handled naturally through Inertia.

---

## 14. TypeScript

Avoid `any` unless there is a legitimate technical reason.

Prefer explicit types.

Bad:

```ts
const artwork: any = data;
```

Better:

```ts
const artwork: Artwork = data;
```

Keep shared types organized in:

```text
resources/js/types/
```

---

## 15. Styling

Use Tailwind CSS for normal UI styling.

Prefer existing design-system values over arbitrary values.

Keep repeated visual decisions consistent.

Do not introduce another CSS framework.

Custom CSS should be used only when Tailwind cannot reasonably provide the required behavior.

---

## 16. Responsive Design

Every new public component must be considered at:

- Mobile
- Tablet
- Desktop
- Large desktop

Do not build desktop-only interfaces and fix mobile afterward.

---

## 17. Accessibility

Every interactive element must be accessible.

Consider:

- Keyboard navigation
- Focus states
- Semantic HTML
- Labels
- Alt text
- Contrast
- Screen readers
- Reduced motion

Do not remove focus indicators without providing an accessible alternative.

---

## 18. Images

Artwork images are important application assets.

Always consider:

- Aspect ratio
- Resolution
- File size
- Loading behavior
- Alt text
- Mobile performance

Avoid unnecessarily loading full-resolution artwork when a smaller version is sufficient.

---

## 19. Performance

Before adding a dependency, ask whether the feature can be implemented with existing tools.

Avoid:

- Unnecessary JavaScript
- Duplicate requests
- Large unnecessary packages
- Unoptimized images
- Excessive animations

Performance should be considered during implementation, not only after the site becomes slow.

---

## 20. Error Handling

User-facing errors should be understandable.

Do not expose:

- Stack traces
- SQL errors
- Internal paths
- Sensitive application details

Development environments may show detailed errors; production must not.

---

## 21. Security

Never commit:

```text
.env
```

or secrets into Git.

Do not hardcode:

- Passwords
- API keys
- Tokens
- Database credentials
- Private keys

Use environment variables for secrets.

---

## 22. Dependencies

Before installing a package:

1. Check whether the framework already provides the functionality.
2. Check whether the package is actively maintained.
3. Check whether it is compatible with the current stack.
4. Consider whether the dependency is actually necessary.

Avoid dependency accumulation.

---

## 23. Git

Use small, meaningful commits.

Examples:

```text
feat: add artwork gallery
feat: add artwork detail page
fix: correct mobile gallery layout
refactor: extract artwork card component
docs: update architecture
chore: update dependencies
```

Avoid vague commits such as:

```text
update
changes
stuff
fix
```

---

## 24. Branches

For larger features, use a dedicated branch.

Example:

```text
main
└── feature/admin-artworks
```

Small changes can be committed directly when appropriate.

---

## 25. Testing

New backend behavior should have appropriate tests.

Prioritize tests for:

- Authentication
- Authorization
- Artwork CRUD
- Validation
- Orders
- Payments
- Commissions
- Important business rules

Do not test trivial implementation details unnecessarily.

---

## 26. Code Quality

Before considering a feature complete:

```text
Implementation
↓
Manual verification
↓
Tests
↓
Lint
↓
Build
↓
Review
```

Use the project's existing tools:

```bash
composer run lint
npm run build
```

and the appropriate test commands when relevant.

---

## 27. Documentation

Update documentation when a change affects:

- Architecture
- Design system
- Development workflow
- Project scope
- Important technical decisions

Update:

```text
PROJECT_STATUS.md
```

when completing meaningful milestones.

Update:

```text
CHANGELOG.md
```

when recording important project changes.

---

## 28. Feature Development Process

Every significant feature should follow:

### 1. Understand

Define exactly what the feature needs to do.

### 2. Plan

Identify:

- UI
- Backend
- Database
- Validation
- Authorization
- Components
- Tests

### 3. Implement

Build the smallest complete version.

### 4. Verify

Check:

- Functionality
- Mobile
- Desktop
- Accessibility
- Errors
- Performance

### 5. Document

Update relevant documentation.

### 6. Commit

Create a meaningful Git commit.

---

## 29. Avoid Scope Creep

Do not implement unrelated features while working on another feature.

Example:

If implementing the gallery, do not simultaneously implement:

- Payments
- Orders
- Customer accounts
- Newsletter
- Blog

unless there is a clear dependency.

---

## 30. Preserve Existing Work

Before modifying an existing feature:

- Understand how it currently works.
- Avoid unnecessary rewrites.
- Keep existing behavior working.
- Test affected areas.

Do not replace working code simply because a different implementation looks cleaner.

---

## 31. Future Admin Dashboard

The public website and admin dashboard share the same application but should remain visually and structurally distinct.

Public:

```text
Artist
↓
Artwork
↓
Visitor
```

Admin:

```text
Artist/Admin
↓
Dashboard
↓
Content Management
↓
Database
```

Admin functionality must always be protected server-side.

---

## 32. Future Commerce

Commerce functionality should be introduced incrementally.

Recommended order:

```text
Artwork
↓
Availability
↓
Cart
↓
Checkout
↓
Order
↓
Payment
↓
Shipping
```

Do not implement payment processing before the underlying artwork and order models are stable.

---

## 33. Future API

Do not create an API just because the application has a backend.

Introduce an API only when there is an actual consumer that requires one.

Possible consumers:

- Mobile application
- External website
- Third-party integration

---

## 34. Decision Making

When multiple technical solutions are possible, prioritize:

1. Correctness
2. Security
3. Maintainability
4. Simplicity
5. Performance
6. Developer experience

Do not choose technology purely because it is popular.

---

## 35. Core Rule

> Build what is needed now, design the foundation for what is likely to come, and avoid unnecessary complexity.
