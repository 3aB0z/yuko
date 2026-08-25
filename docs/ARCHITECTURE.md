# Architecture

## 1. Overview

This project is a full-stack Laravel application using React and Inertia.js.

```text
Browser
   ↓
Laravel Routes
   ↓
Controllers
   ↓
Models / Services
   ↓
Database
   ↓
Inertia
   ↓
React Pages
   ↓
Reusable Components
```

The frontend and backend live in the same repository and are deployed as one application.

---

## 2. Technology Stack

### Backend

- Laravel 13
- PHP 8.4+
- Laravel Fortify
- Eloquent ORM
- PostgreSQL

### Frontend

- React
- TypeScript
- Inertia.js
- Tailwind CSS
- Vite

### Development

- Composer
- npm
- Git
- Pest
- Laravel Pint
- Larastan

---

## 3. Project Structure

```text
artist-portfolio/
│
├── app/
│   ├── Actions/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   ├── Policies/
│   └── Services/
│
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
│
├── resources/
│   ├── css/
│   ├── js/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── types/
│   │   └── app.tsx
│   └── views/
│
├── routes/
│   ├── web.php
│   └── settings.php
│
├── storage/
│
├── tests/
│   ├── Feature/
│   └── Unit/
│
├── docs/
│   ├── PROJECT_SPECIFICATION.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   └── DEVELOPMENT_GUIDELINES.md
│
├── README.md
├── PROJECT_STATUS.md
└── CHANGELOG.md
```

The exact directories may evolve as the application grows.

---

## 4. Backend Architecture

Laravel is responsible for:

- Routing
- Authentication
- Authorization
- Validation
- Business logic
- Database access
- File management
- Admin functionality

### Controllers

Controllers handle HTTP requests and coordinate application behavior.

Controllers should remain thin.

Complex business logic should not be placed directly inside controllers.

Example:

```php
public function store(StoreArtworkRequest $request)
{
    $artwork = $this->artworkService->create(
        $request->validated()
    );

    return to_route('admin.artworks.index');
}
```

---

## 5. Models

Eloquent models represent persistent application entities.

Initial important models are expected to include:

```text
User
Artwork
Category
Collection
ArtworkImage
```

Future models may include:

```text
Order
OrderItem
Commission
SiteSetting
```

Models should contain relationships and database-related behavior.

Complex business operations should be moved into services/actions when appropriate.

---

## 6. Services and Actions

Services or Actions should be introduced when an operation contains meaningful business logic.

Examples:

```text
CreateArtwork
UpdateArtwork
DeleteArtwork
UploadArtworkImage
CreateOrder
ProcessCommission
```

Do not create a service for trivial CRUD operations without a real reason.

The goal is maintainability, not maximum abstraction.

---

## 7. Validation

Request validation should use Laravel Form Request classes when validation becomes substantial or reusable.

Example:

```text
app/Http/Requests/StoreArtworkRequest.php
```

Server-side validation is authoritative.

Client-side validation may be used to improve user experience but must never replace server-side validation.

---

## 8. Authorization

Admin functionality must be protected through Laravel authentication and authorization.

Potential authorization structure:

```text
Authentication
    ↓
Authenticated User
    ↓
Admin Authorization
    ↓
Admin Resources
```

Policies should be used when authorization depends on a specific model or resource.

---

## 9. Frontend Architecture

React is responsible for presentation and client-side interaction.

Frontend code is organized into:

```text
resources/js/

├── components/
├── layouts/
├── pages/
├── lib/
└── types/
```

### Pages

Pages represent route-level screens.

Examples:

```text
pages/
├── Home.tsx
├── Gallery.tsx
├── Artwork/
│   └── Show.tsx
├── About.tsx
├── Contact.tsx
│
└── Admin/
    ├── Dashboard.tsx
    └── Artworks/
        ├── Index.tsx
        ├── Create.tsx
        └── Edit.tsx
```

Pages should compose reusable components rather than containing large amounts of repeated UI.

---

## 10. Components

Reusable UI belongs in:

```text
resources/js/components/
```

Potential component groups:

```text
components/
├── ui/
├── artwork/
├── gallery/
├── layout/
└── admin/
```

Examples:

```text
ArtworkCard
ArtworkGrid
ArtworkStatus
ArtworkImage
GalleryFilter
Button
Modal
Input
Container
SectionHeading
```

Components should be created when reuse or clarity justifies them.

Avoid creating components that only wrap one trivial element without adding value.

---

## 11. Layouts

Shared page structures belong in:

```text
resources/js/layouts/
```

Initial layouts may include:

```text
PublicLayout
AdminLayout
AuthLayout
```

The public website and admin dashboard should have separate layouts.

---

## 12. Inertia Architecture

Inertia connects Laravel routes/controllers with React pages.

Typical flow:

```text
GET /artworks
       ↓
Laravel route
       ↓
ArtworkController@index
       ↓
Query database
       ↓
Inertia::render(...)
       ↓
React Gallery page
```

The application should prefer Inertia page navigation instead of introducing a separate REST API unless an external client actually requires an API.

---

## 13. Routing

Public routes should be grouped logically.

Example:

```text
/
 /artworks
 /artworks/{artwork}
 /about
 /contact
```

Admin routes should be isolated under an appropriate namespace/prefix.

Example:

```text
/admin
/admin/artworks
/admin/artworks/create
/admin/artworks/{artwork}/edit
```

Route names should be used instead of hardcoded URLs wherever practical.

---

## 14. Database Architecture

The database is the source of truth for dynamic content.

Conceptual relationship:

```text
Category
   │
   └──< Artwork
          │
          ├──< ArtworkImage
          │
          └── Collection
```

Future commerce:

```text
User
 │
 └──< Order
        │
        └──< OrderItem
                │
                └── Artwork
```

The exact relationships will be finalized when database implementation begins.

---

## 15. Artwork Data

Artwork should be database-driven.

Conceptual structure:

```text
Artwork
├── id
├── category_id
├── collection_id
├── title
├── slug
├── description
├── price
├── status
├── dimensions
├── materials
├── featured
├── created_at
└── updated_at
```

Images should be represented separately rather than storing multiple image paths directly on the artwork record.

---

## 16. Image Management

Artwork images are important application data.

The system should support:

- Multiple images per artwork
- Image ordering
- Main/cover image
- Alt text
- Image deletion
- Future image replacement

Images should use Laravel's filesystem abstraction.

The storage implementation should remain replaceable so the application can later use:

- Local storage
- S3-compatible storage
- Cloud storage

without changing the application's core artwork logic.

---

## 17. TypeScript Types

Frontend types should represent important backend data structures.

Examples:

```text
resources/js/types/
├── artwork.ts
├── category.ts
├── collection.ts
└── user.ts
```

Types should be reused rather than repeatedly defining slightly different versions of the same entity.

---

## 18. State Management

Do not introduce a global state-management library initially.

Prefer:

- React local state
- Inertia page props
- URL/query parameters
- Server-side state

A dedicated state-management solution should only be introduced when actual application complexity requires it.

---

## 19. Styling Architecture

Tailwind CSS is the primary styling system.

Shared design decisions should be documented in:

```text
docs/DESIGN_SYSTEM.md
```

Avoid scattering arbitrary values throughout components when a reusable design token or Tailwind utility can represent the same decision.

---

## 20. Frontend Data Flow

Dynamic public content should follow:

```text
Database
   ↓
Eloquent Model
   ↓
Controller
   ↓
Inertia Props
   ↓
React Page
   ↓
Reusable Components
```

React components should not directly query the database.

---

## 21. Admin Data Flow

Admin operations should follow:

```text
Admin UI
   ↓
Inertia Request
   ↓
Laravel Route
   ↓
Controller
   ↓
Validation
   ↓
Authorization
   ↓
Service / Action
   ↓
Model
   ↓
Database
```

This keeps security-sensitive operations on the server.

---

## 22. Error Handling

The application should use Laravel's standard exception and validation handling.

User-facing errors should be understandable.

Internal implementation details, stack traces, and sensitive information must never be exposed in production.

---

## 23. Security Architecture

Security responsibilities are primarily handled by Laravel.

Important protections include:

- Authentication
- Authorization
- CSRF protection
- Request validation
- Secure password handling
- Secure file uploads
- Rate limiting where appropriate
- Protected admin routes
- Safe database queries through Eloquent/query builder

Admin operations must never rely solely on frontend restrictions.

---

## 24. Testing Architecture

Testing will use Pest.

Tests should primarily focus on application behavior.

Examples:

```text
Feature/
├── Public/
├── Admin/
├── Authentication/
└── Artwork/
```

Important behavior should be covered by feature tests.

Examples:

- Public users can view artworks.
- Hidden artworks are not publicly displayed.
- Admin users can create artworks.
- Unauthorized users cannot access admin functionality.
- Artwork validation rejects invalid data.
- Artwork deletion behaves correctly.

---

## 25. API Strategy

A separate API is not required for the initial application.

If an API becomes necessary later, it should be introduced deliberately.

Potential future API consumers:

- Mobile application
- External storefront
- Third-party integrations
- Headless frontend

The internal Laravel + Inertia architecture should remain the primary application interface unless requirements change.

---

## 26. Deployment Architecture

Initial deployment should run the Laravel application and frontend build as one application.

Conceptually:

```text
Internet
   ↓
Web Server
   ↓
Laravel
   ├── React/Inertia
   ├── Database
   └── Storage
```

The exact hosting provider and infrastructure will be decided later.

---

## 27. Architecture Evolution

The architecture is intentionally designed to evolve.

Expected evolution:

```text
Portfolio
   ↓
Dynamic Portfolio
   ↓
Admin CMS
   ↓
Commerce
   ↓
Orders / Payments
   ↓
Advanced Features
```

Each stage should extend the existing architecture rather than replace it.

---

## 28. Core Architectural Rule

Keep the application as one coherent full-stack system unless there is a concrete technical reason to split it.

Prefer simple, explicit solutions over unnecessary infrastructure.

The architecture should make future changes easier, not make the current application harder to build.
