# Artist Portfolio

A modern full-stack portfolio and future shop for an independent artist specializing in drawings and handmade clay figures.

## Tech Stack

- Laravel 13
- React
- TypeScript
- Inertia.js
- Tailwind CSS
- Vite
- PostgreSQL

## Development

Install dependencies:

```bash
composer install
npm install
```

Start the development environment:

```bash
composer run dev
```

Build the frontend:

```bash
npm run build
```

Run tests:

```bash
php artisan test
```

Run code formatting:

```bash
composer run lint
```

## Documentation

Project documentation is located in:

```text
docs/
├── PROJECT_SPECIFICATION.md
├── ARCHITECTURE.md
├── DESIGN_SYSTEM.md
└── DEVELOPMENT_GUIDELINES.md
```

Project progress:

```text
PROJECT_STATUS.md
```

Project history:

```text
CHANGELOG.md
```

## Project Scope

The current website focuses on:

- Drawings
- Handmade clay figures
- Artist portfolio
- Artwork discovery
- Artwork details
- Contact

A future admin dashboard will allow the artist to manage website content.

Future functionality may include:

- Artwork management
- Image management
- Categories
- Collections
- Orders
- Payments
- Inventory
- Commissions

## Architecture

The frontend and backend are intentionally kept in one Laravel application.

```text
Browser
   ↓
Laravel
   ↓
Inertia.js
   ↓
React
```

Dynamic content will eventually be stored in the database and managed through the admin dashboard.

## Development Philosophy

Build the current requirements properly while keeping the architecture flexible enough for future features.

Avoid unnecessary dependencies, abstractions, and premature features.
