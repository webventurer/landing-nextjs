# Best Practices

This document outlines coding best practices and guidelines discovered during
the development of this landing pages comparison project.

## CSS & Styling Best Practices

### 1. Understanding Semantic HTML

**Semantic HTML** refers to using HTML elements according to their intended
meaning and purpose, rather than just for their appearance. Each HTML element
has semantic meaning that conveys information about the content structure to
browsers, screen readers, search engines, and other tools.

**Examples of Semantic Elements:**

```html
<!-- ❌ Non-semantic - tells us nothing about content -->
<div class="title">My Blog Post</div>
<div class="content">This is the main content...</div>
<div class="sidebar">Related links...</div>

<!-- ✅ Semantic - clearly describes content structure -->
<h1>My Blog Post</h1>
<main>This is the main content...</main>
<aside>Related links...</aside>
```

**Why Semantic HTML Matters:**

- **Accessibility**: Screen readers can navigate content structure properly
- **SEO**: Search engines understand content hierarchy and importance
- **Maintainability**: Code is self-documenting and easier to understand
- **Future-proof**: Works better with new technologies and standards
- **Performance**: Browsers can optimize rendering for known content types

**Common Semantic Elements:**

| Element | Purpose | When to Use |
|---------|---------|-------------|
| `<header>` | Page/section header | Site navigation, page titles, intro content |
| `<nav>` | Navigation links | Main menus, breadcrumbs, pagination |
| `<main>` | Primary content | The main content area (only one per page) |
| `<article>` | Standalone content | Blog posts, news articles, forum posts |
| `<section>` | Thematic groupings | Chapters, tabs, content sections |
| `<aside>` | Sidebar content | Related links, ads, supplementary info |
| `<footer>` | Page/section footer | Copyright, contact info, related links |
| `<h1>`-`<h6>` | Headings | Content hierarchy (h1 = most important) |
| `<p>` | Paragraphs | Body text, descriptions |
| `<ul>`/`<ol>`/`<li>` | Lists | Unordered/ordered lists and items |

**Best Practices:**

1. **Use headings hierarchically** - Don't skip heading levels (h1 → h2 → h3)
2. **One `<main>` per page** - Identifies the primary content area
3. **Logical document structure** - Use elements based on meaning, not
   appearance
4. **Avoid generic `<div>` when semantic options exist** - Choose `<section>`,
   `<article>`, etc.
5. **Use `<strong>` vs `<b>`** - `<strong>` indicates importance, `<b>` is just
   bold styling

**Integration with CSS:**

Semantic HTML works perfectly with our contextual styling approach:

```scss
// Target semantic elements directly
article {
  h1 { font-size: 2rem; }
  p { line-height: 1.6; }
}

// Contextual styling based on semantic containers
main {
  section {
    margin-bottom: 2rem;

    h2 { color: var(--primary-color); }
  }
}

aside {
  h3 { font-size: 1rem; }
  ul { list-style: none; }
}
```

This combination of semantic HTML + contextual CSS styling creates clean,
accessible, and maintainable code.

### 2. Avoid CSS Class Names That Mirror HTML Tag Names

Don't create class names that are the same as the tag name. Just target the tag.

**❌ Code Smell - Don't do this:**

```tsx
// page.tsx
<h1 className={pageStyles.h1} {...props} />
<h2 className={pageStyles.h2} {...props} />
<p className={pageStyles.paragraph} {...props} />
```


**✅ Better approach - Use contextual styling:**

```tsx
// page.tsx
import { styles } from './page.module.scss'

<div className={styles.content}>
  <h1>Hello</h1>
  <h2>Subtitle</h2>
  <p>Content paragraph</p>
</div>
```

```scss
// typography.scss (global styles)
h1 {
  font-size: 3rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

p {
  line-height: 1.6;
}
```

```scss
// page.module.scss (contextual overrides)
.content {
  h1 {
    font-size: 2rem; // Override global h1 in this context
    color: var(--primary-color);
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
}
```

**Why this is better:**

- **Semantic HTML**: Elements retain their semantic meaning without unnecessary
  className clutter
- **Cleaner JSX**: No need to manually assign classes to every HTML element
- **Contextual Styling**: Styles are applied based on container context, which
  is more maintainable
- **Global + Local Pattern**: Establish base typography globally, then override
  contextually
- **Better CSS Cascading**: Takes advantage of CSS's natural cascading behavior
- **Reduced Bundle Size**: Fewer class name strings in your JavaScript bundle

**Implementation Strategy:**

1. Define base typography in global styles
2. Create contextual container classes (`.content`, `.article`, `.sidebar`)
3. Use nested SCSS selectors to style elements within those contexts
4. Reserve explicit classes for truly unique styling needs

This approach makes your styles more maintainable and your HTML more semantic.

### 3. CSS Architecture: Layout + Content Pattern

Our project uses a proven **two-layer styling architecture** that separates
layout concerns from content styling. This is a well-established pattern in
modern web development.

#### The Two-Layer System

**Layer 1: `page-layout` (Global Layout Container)**
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

**Layer 2: `contentStyles.content` (Content-Specific Styling)**
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

#### How They Work Together

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

#### Comparison of Responsibilities

| Aspect | `page-layout` | `contentStyles.content` |
|--------|---------------|-------------------------|
| **Scope** | Entire page | Main content area only |
| **Location** | Global CSS | CSS Module (page-specific) |
| **Purpose** | Layout structure | Content typography |
| **Inheritance** | Base layer | Override layer |
| **Responsiveness** | Page-level | Content-level |

#### Why This Architecture Works

1. **Separation of Concerns**: Layout vs. content styling are distinct
   responsibilities
2. **Reusability**: `page-layout` can be used across all pages, while content
   styles are page-specific
3. **Maintainability**: Global changes to layout don't affect content styling
   and vice versa
4. **Flexibility**: Each page can have its own content styling while sharing the
   same layout structure

#### This is a Recognized Pattern

This approach combines several well-established patterns:

**1. Container/Wrapper Pattern**
- Used by Bootstrap (`.container`), Tailwind (`.container`), Foundation
- Centers content with consistent constraints

**2. Global + Scoped CSS Architecture**
- **Global styles** for base/reset and layout utilities
- **Scoped styles** (CSS Modules) for component-specific styling
- Popularized by BEM, SMACSS, and modern component frameworks

**3. Layout + Content Separation**
- Foundational web design pattern
- **Layout concerns**: structure, positioning, constraints
- **Content concerns**: typography, spacing, visual hierarchy

**Examples in Popular Frameworks:**

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

**Pattern Names:**
- "Container + Content" pattern
- "Layout + Typography" separation
- "Global + Scoped" CSS architecture
- "Progressive Enhancement" approach

This architecture is particularly clean because it follows semantic HTML
principles while maintaining proven architectural separation. It's a modern,
semantic version of the classic container pattern that provides excellent
scalability and maintainability.
