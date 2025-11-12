# Rick and Morty POC

> A modern Angular 20 application showcasing enterprise-grade architecture with signals, SSR, and clean design patterns.

[![Angular](https://img.shields.io/badge/Angular-20.2-red)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC)](https://tailwindcss.com/)

## Overview

Enterprise-grade Angular application demonstrating clean architecture, signal-based state management, and server-side rendering using the [Rick and Morty API](https://rickandmortyapi.com/).

## Features

- **Browse Characters**: Paginated character list with detailed profiles
- **Episode Guide**: Complete episode catalog with metadata
- **Favorites System**: Persistent favorites using localStorage with signal-based reactivity
- **Character Details**: Comprehensive profiles with origin, location, and episode appearances
- **Server-Side Rendering**: Optimized for SEO and performance

## Tech Stack

- **Angular 20.2** - Zoneless change detection, standalone components, signals
- **TypeScript 5.9** - Strict mode enabled
- **TailwindCSS 4.x** - Utility-first CSS with custom design system
- **Express** - SSR backend
- **lucide-angular** - Icon system

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm run test

# Run SSR server
npm run serve:ssr:rickandmortypoc
```

Navigate to `http://localhost:4200/`

## Architecture

### Project Structure

```
src/app/
├── characters/               # Characters feature
│   ├── character-list/      # List view with pagination
│   ├── character-detail/    # Detail view with resolver
│   └── services/            # Data layer (client, mapper, service)
├── episodes/                # Episodes feature
│   ├── episode-list/        # List view
│   └── services/            # Data layer
├── favorites/               # Favorites feature
│   ├── favorites-store.ts   # Signal-based state management
│   └── components/          # Empty state component
├── shared/                  # Shared utilities and components
│   ├── layouts/             # Layout wrappers
│   ├── components/          # Reusable UI (button, cards)
│   ├── models/              # Shared interfaces
│   └── utils/               # Utility functions
└── app.routes.ts            # Route configuration
```

### Architectural Patterns

#### Three-Layer Data Architecture

Clean separation between API contracts and domain models:

```
Component → Service → DataClient → HTTP → Mapper → Entity
```

**Example:**

```typescript
// DTO from API
interface CharacterDTO {
  id: number;
  name: string;
  status: string;
}

// Domain Entity
interface CharacterEntity {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
}

// Mapper transforms DTO → Entity
```

**Benefits:**

- Clean separation of concerns
- Easy API version migrations
- Testable business logic layer

## Routes

| Route             | Description           | Lazy Loaded |
| ----------------- | --------------------- | ----------- |
| `/`               | Redirects to `/home`  | No          |
| `/home`           | Landing page          | No          |
| `/characters`     | Browse all characters | Yes         |
| `/characters/:id` | Character detail      | Yes         |
| `/episodes`       | All episodes          | Yes         |
| `/favorites`      | Favorited characters  | Yes         |
| `/about`          | About page            | Yes         |

## Key Conventions

### Path Aliases

```typescript
import { CharacterCard } from '@shared/components/cards';
import { CharacterService } from '@app/characters/services';
```

### File Naming

- No `.component` suffix: `character-list.ts` (not `character-list.component.ts`)
- Co-located templates: `character-list.html`

### Code Style

- Prettier: 100 character line width
- Single quotes for TypeScript
- Strict TypeScript mode

## Performance

- **Lazy Loading**: Routes loaded on-demand
- **OnPush Detection**: Minimal change detection cycles
- **Signals**: Fine-grained reactivity
- **SSR**: Server-side rendering
- **Code Splitting**: Automatic chunk optimization

## TODO

### High Priority

#### Migration to Vitest

- [ ] Replace Karma with Vitest for faster test execution
- [ ] Add component testing with Testing Library
- [ ] Implement code coverage thresholds (80%+)
- [ ] Add integration tests for API calls

**Why:** Vitest is significantly faster than Karma, has better DX, and works seamlessly with modern tooling.

#### Infinite Scroll

- [ ] Implement virtual scrolling for character list
- [ ] Use Angular CDK Virtual Scroll
- [ ] Add intersection observer for pagination
- [ ] Optimize rendering for large datasets

**Why:** Better UX for browsing hundreds of characters, reduced memory footprint.

#### Design System

- [ ] Create comprehensive component library
- [ ] Establish design tokens (colors, spacing, typography)
- [ ] Create component usage guidelines

**Why:** Ensures consistency, improves maintainability, and provides clear documentation for team.

### Medium Priority

#### Testing Improvements

- [ ] Increase unit test coverage to 80%+
- [ ] Add E2E tests with Playwright
- [ ] Implement visual regression testing
- [ ] Mock services for isolated testing

#### Performance Optimizations

- [ ] Implement image lazy loading
- [ ] Add route preloading strategy
- [ ] Add performance budgets in angular.json

#### Error Handling

- [ ] Global error handler service
- [ ] User-friendly error messages
- [ ] Retry logic for failed API calls
- [ ] Error boundary components

#### Accessibility

- [ ] ARIA labels for all interactive elements
- [ ] Keyboard navigation support
- [ ] Screen reader testing
- [ ] Focus management

### Low Priority

#### Features

- [ ] Search functionality for characters
- [ ] Filter by species, status, gender
- [ ] Sort characters by name, episodes
- [ ] Character comparison tool
- [ ] Share favorites via URL (query params)

#### Documentation

- [ ] Expand Architecture Decision Records

#### Developer Experience

- [ ] Add pre-commit hooks (Husky + lint-staged)
- [ ] Implement commitlint
- [ ] Setup CI/CD pipeline (GitHub Actions)
- [ ] Setup ESLint with Angular rules

## Architecture Decision Records (ADR)

### ADR-001: Zoneless Change Detection

**Date**: 2025-01-11 | **Status**: Accepted

**Context**: Angular 20 introduced stable zoneless change detection. Traditional zone.js has performance overhead.

**Decision**: Use zoneless change detection with signals for all reactive state.

**Consequences**:

- ✅ Better performance, reduced bundle size, predictable change detection
- ❌ Cannot use zone.js-dependent libraries
- 📋 All components must use OnPush and signals

---

### ADR-002: Three-Layer Data Architecture

**Date**: 2025-01-11 | **Status**: Accepted

**Context**: Need clean separation between API contracts and domain models.

**Decision**: Implement DataClient → Mapper → Service → Component pattern.

**Consequences**:

- ✅ Clear separation, easy API migrations, testable logic
- ❌ More boilerplate code
- 📋 All features follow this pattern consistently

---

### ADR-003: LocalStorage for Favorites

**Date**: 2025-01-11 | **Status**: Accepted

**Context**: Need persistent favorites without backend authentication.

**Decision**: Use localStorage with signal-based FavoritesStore.

**Consequences**:

- ✅ Simple implementation, no backend required, instant persistence
- ❌ Not synchronized across devices, limited storage
- 📋 Future: migrate to backend API when adding user auth

### ADR-005: Standalone Components Only

**Date**: 2025-01-11 | **Status**: Accepted

**Context**: NgModules add complexity. Angular 20 supports standalone as default.

**Decision**: Use standalone components throughout. No NgModules.

**Consequences**:

- ✅ Simpler registration, better tree-shaking, easier lazy loading
- ❌ Cannot use NgModule-only features
- 📋 All new components are standalone by default

## API Integration

Uses the [Rick and Morty API](https://rickandmortyapi.com/):

- **Characters**: `https://rickandmortyapi.com/api/character`
- **Episodes**: `https://rickandmortyapi.com/api/episode`
- Automatic pagination handling
- Graceful error handling

### Commit Convention

Follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Resources

- [Angular Documentation](https://angular.dev)
- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
