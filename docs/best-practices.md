# Best Practices

This document outlines coding best practices and guidelines discovered during
the development of this landing pages comparison project.

## CSS & Styling Best Practices

### 1. Avoid CSS Class Names That Mirror HTML Tag Names

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

### 2. CSS Architecture: Layout + Content Pattern

See [CSS Architecture: Layout + Content Pattern](./best-practices/layout-content-pattern.md) for comprehensive guidance on implementing the two-layer styling architecture that separates layout concerns from content styling.

### 3. CSS File Organization: Separation by Concern

Following the same architectural principles, our project separates CSS into
dedicated files organized by responsibility. This extends the two-layer pattern
into a clean three-file system.

#### File Structure

```
src/
├── app/globals.css          # Theme variables, Tailwind, framework setup
├── styles/
│   ├── typography.css       # Semantic HTML typography defaults
│   └── layout.css          # Reusable layout patterns and utilities
└── app/page.module.scss     # Page-specific contextual overrides
```

#### File Responsibilities

**`globals.css` - Framework & Theme Foundation**
```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import '../styles/typography.css';
@import '../styles/layout.css';

/* CSS custom properties for theming */
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  /* ... theme variables */
}

/* Tailwind base layer */
@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}
```

**`typography.css` - Semantic HTML Typography**
```css
/* Base Typography - Global defaults for semantic HTML */
h1, h2, h3, h4, h5, h6 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  line-height: 1.3;
  color: #2c3e50;
}

h1 { font-size: 2.5rem; line-height: 1.2; }
h2 { font-size: 2rem; color: #3498db; }

p { margin-bottom: 1rem; line-height: 1.6; color: #333; }
code { font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; /* ... */ }
/* ... all semantic HTML typography */
```

**`layout.css` - Reusable Layout Patterns**
```css
/* Layout Utilities - Reusable layout patterns */
.page-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f9f9f9;
}

/* Future layout utilities would go here:
   .container, .grid-layout, .flex-center, etc. */
```

**`page.module.scss` - Contextual Overrides**
```scss
.content {
  // Override typography within this context
  h1 { font-size: 2rem; }  // Smaller than global h1
  h2 { margin-bottom: 1rem; }

  // Component spacing within content
  :global(.featuresGrid) { margin: 2rem 0; }
}
```

#### Import Pattern in Components

```tsx
// globals.css is imported once in layout.tsx
// Individual pages import their specific modules:
import contentStyles from './page.module.scss';

export default function HomePage() {
  return (
    <div className="page-layout">        {/* From layout.css */}
      <main className={contentStyles.content}> {/* Page-specific */}
        <h1>Title</h1>                   {/* From typography.css */}
        <p>Content</p>                   {/* From typography.css */}
      </main>
    </div>
  );
}
```

#### Benefits of This Organization

**1. Single Responsibility Principle**
- **globals.css**: Framework setup and theme management only
- **typography.css**: All semantic HTML typography in one place
- **layout.css**: Reusable layout patterns and utilities
- **page.module.scss**: Page-specific contextual styling

**2. Maintainability**
- Typography changes don't affect layout or theme
- Layout updates don't impact typography or page-specific styles
- Theme changes are isolated to globals.css
- Easy to locate and modify specific styling concerns

**3. Scalability**
- New layout utilities can be added to layout.css
- Typography system can grow independently
- Design system tokens can be organized by concern
- Page-specific styles remain isolated

**4. Performance**
- Shared CSS files cached across pages
- Only page-specific styles are code-split
- Smaller bundle sizes through better organization
- Reduced CSS duplication

**5. Developer Experience**
- Clear mental model: know exactly where to find/add styles
- Reduced cognitive load when making changes
- Easier code reviews with organized concerns
- Better IDE support with focused file contexts

#### Industry Alignment

This separation pattern is used by major design systems and frameworks:

- **Material-UI**: Separate theme, typography, and layout systems
- **Chakra UI**: Independent typography, layout, and component systems
- **Tailwind CSS**: Utility organization by concern (spacing, typography,
  layout)
- **Bootstrap**: Separate files for grid, typography, utilities
- **Design Systems**: Atomic design with separated token files

#### Migration Strategy

When refactoring existing CSS:

1. **Identify concerns**: Separate typography from layout from theme
2. **Extract by responsibility**: Move related styles to dedicated files
3. **Update imports**: Import separated files in the correct order
4. **Maintain functionality**: Ensure no styles are lost in translation
5. **Test thoroughly**: Verify all pages render correctly

This file organization creates a maintainable, scalable CSS architecture that
grows with your project while keeping concerns properly separated.
