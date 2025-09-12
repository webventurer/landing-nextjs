# CSS Architecture: Layout + Content Pattern

Our project uses a proven **two-layer styling architecture** that separates
layout concerns from content styling. This is a well-established pattern in
modern web development.

## The Two-Layer System

### Layer 1: `page-layout` (Global Layout Container)
```css
/* globals.css */
.page-layout {
  max-width: 1200px;        /* Page width constraint */
  margin: 0 auto;           /* Center the page */
  padding: 2rem;            /* Outer page margins */
  font-family: system-ui...  /* Base font family */
  line-height: 1.6;         /* Base line height */
  color: #333;              /* Base text color */
  background-color: #f9f9f9; /* Page background */
  min-height: 100vh;        /* Full viewport height */
}
```

**What it handles:**
- Page-level layout (centering, max-width, padding)
- Base typography defaults
- Page background color
- Responsive breakpoints for the entire page

### Layer 2: `contentStyles.content` (Content-Specific Styling)
```scss
/* page.module.scss */
.content {
  max-width: none;  /* Inherits from page-layout */

  h1 { font-size: 2rem; color: #2c3e50; ... }
  h2 { font-size: 1.5rem; color: #3498db; ... }
  p { margin-bottom: 1rem; line-height: 1.6; ... }
  // ... contextual overrides for content area
}
```

**What it handles:**
- Content-specific typography refinements
- MDX component spacing
- Table styling within content
- Content-area responsive adjustments

## How They Work Together

```tsx
export default function HomePage() {
  return (
    <div className="page-layout">           {/* Global: layout, base styles */}
      <Header ... />                        {/* Uses own component styles */}

      <main className={contentStyles.content}> {/* Contextual: content overrides */}
        <MDXContent />                      {/* Inherits both layers */}
      </main>

      <Footer ... />                        {/* Uses own component styles */}
    </div>
  );
}
```

## Comparison of Responsibilities

| Aspect | `page-layout` | `contentStyles.content` |
|--------|---------------|-------------------------|
| **Scope** | Entire page | Main content area only |
| **Location** | Global CSS | CSS Module (page-specific) |
| **Purpose** | Layout structure | Content typography |
| **Inheritance** | Base layer | Override layer |
| **Responsiveness** | Page-level | Content-level |

## Why This Architecture Works

1. **Separation of Concerns**: Layout vs. content styling are distinct
   responsibilities
2. **Reusability**: `page-layout` can be used across all pages, while content
   styles are page-specific
3. **Maintainability**: Global changes to layout don't affect content styling
   and vice versa
4. **Flexibility**: Each page can have its own content styling while sharing the
   same layout structure

## This is a Recognized Pattern

This approach combines several well-established patterns:

### 1. Container/Wrapper Pattern
- Used by Bootstrap (`.container`), Tailwind (`.container`), Foundation
- Centers content with consistent constraints

### 2. Global + Scoped CSS Architecture
- **Global styles** for base/reset and layout utilities
- **Scoped styles** (CSS Modules) for component-specific styling
- Popularized by BEM, SMACSS, and modern component frameworks

### 3. Layout + Content Separation
- Foundational web design pattern
- **Layout concerns**: structure, positioning, constraints
- **Content concerns**: typography, spacing, visual hierarchy

## Examples in Popular Frameworks

```tsx
// Next.js + Tailwind
<div className="container mx-auto px-4"> {/* Global layout */}
  <main className="prose"> {/* Content styling */}
    <MDXContent />
  </main>
</div>

// React + Styled Components
<PageContainer> {/* Layout wrapper */}
  <ContentArea> {/* Content styling */}
    <Content />
  </ContentArea>
</PageContainer>

// Vue + CSS Modules
<div class="page-layout"> <!-- Global -->
  <main :class="$style.content"> <!-- Scoped -->
    <Content />
  </main>
</div>
```

## Pattern Names
- "Container + Content" pattern
- "Layout + Typography" separation
- "Global + Scoped" CSS architecture
- "Progressive Enhancement" approach

This architecture is particularly clean because it follows semantic HTML
principles while maintaining proven architectural separation. It's a modern,
semantic version of the classic container pattern that provides excellent
scalability and maintainability.
