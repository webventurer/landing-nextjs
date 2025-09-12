# Frontend Architecture Requirements (Document)

This document is designed to fit into a **Product Requirements Document**.

- **Product Requirements Document** → What to build
- **Frontend Architecture Requirements** → How to build the frontend
- **API Requirements** → How to build the backend (if needed)

## Core Principles

> _"Create beautiful, maintainable landing pages and apps where content writers think in pure markdown and developers think in encapsulated components—each varying independently without interference."_

> **Core philosophy**: Build a clean, understandable visual language using React components + SCSS + CSS Modules within markdown files that reduces long-term maintenance costs. Each component is a self-contained unit that encapsulates its styling, state, and behavior—keeping internal implementation details private while exposing only a clean, simple interface to the outside world. This separation ensures that content files remain clean, readable markdown that both humans and AI can easily parse and understand, with styling complexity hidden within the components themselves.

### 1. Clean & Readable Code

- **Principle**: Code should be self-documenting and easily understood by future developers
- **Implementation**: Use semantic naming, clear component structure, and consistent formatting
- **Benefit**: Reduces cognitive load and debugging time

### 2. Separation of Concerns

- **Principle**: Each piece of code should have one reason to change
- **Implementation**: Keep content, styling, and behavior in separate, well-defined layers
- **Anti-pattern**: Avoid mixing design logic with content (like Tailwind CSS in JSX)

### 3. Namespaces & Encapsulation

- **Principle**: Each component should have its own isolated styling namespace
- **Implementation**: Use CSS Modules for automatic scoping
- **Quote**: _"Namespaces are one honking great idea -- let's do more of those!"_ — Tim Peters, The Zen of Python

### 4. Reusability & DRY

- **Principle**: Write code once, use everywhere
- **Implementation**: Create reusable React components and SCSS mixins
- **Benefit**: Reduces maintenance burden and ensures consistency

### 5. Maintainability

- **Principle**: Code should be easy to modify, extend, and debug
- **Implementation**: Use variables, mixins, and modular architecture
- **Goal**: Make future developer's life easier (especially if future developer is YOU!)

---

## Technology Stack

### Required Technologies

#### 1. React Components (TypeScript)

```tsx
// Example: Typed component with proper props
const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
```

**Requirements**:

- Use TypeScript for type safety
- Prefer `ComponentProps<'element'>` over `any` types
- Create reusable, composable components
- Follow single responsibility principle

#### 2. CSS Modules + SCSS (.module.scss)

```scss
// Variables for consistency
$color-primary: #3498db;
$spacing-md: 1rem;
$radius-md: 8px;

// Mixins for reusability
@mixin card-base {
  background: white;
  border-radius: $radius-md;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: $spacing-md;
}

// Nested selectors for organization
.card {
  @include card-base;

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }

  .title {
    color: $color-primary;
    margin-bottom: $spacing-md;
  }
}
```

**Requirements**:

- Use `.module.scss` extension for CSS Modules + SCSS
- Define variables at the top of each stylesheet
- Create mixins for reusable style patterns
- Use nesting with `&` for pseudo-selectors and states
- Import as: `import styles from './Component.module.scss'`

#### 3. Content Integration

**For content-heavy pages**, use one of these approaches:

**Option A: MDX Integration** (React/JSX components in Markdown)
```tsx
import { MDXProvider } from "@mdx-js/react";
import MDXContent from "./content.mdx";

const components = {
  h1: (props) => <h1 className={styles.h1} {...props} />,
  p: (props) => <p className={styles.paragraph} {...props} />,
  FeatureCard,
  CTA,
};

export default function Page() {
  return (
    <MDXProvider components={components}>
      <div className={styles.content}>
        <MDXContent />
      </div>
    </MDXProvider>
  );
}
```

**Option B: Standard Markdown** (with external component rendering)
```tsx
import { marked } from 'marked';
import fs from 'fs';

export default function Page() {
  const markdownContent = fs.readFileSync('content.md', 'utf-8');
  const htmlContent = marked(markdownContent);

  return (
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <FeatureCard title="Example" description="Rendered separately" />
    </div>
  );
}
```

**Requirements**:

- Maintain separation between content and presentation
- Allow structured content authoring
- Enable component reusability across content

---

## File Structure Requirements

```
src/
├── app/
│   └── [page]/
│       ├── page.tsx           # Main page component
│       ├── page.module.scss   # Page-specific SCSS with CSS Modules
│       └── content.md         # Content in Markdown format
└── components/
    ├── ComponentName/
    │   ├── index.tsx          # Component logic
    │   └── ComponentName.module.scss  # Component styles
    └── shared/
        └── variables.scss     # Global SCSS variables
```

---

## Implementation Guidelines

### CSS Modules + SCSS Setup

1. **File Naming**: Use `.module.scss` extension
2. **Import Pattern**: `import styles from './Component.module.scss'`
3. **Class Usage**: `<div className={styles.className}>`
4. **Scoping**: Automatic class name hashing prevents conflicts

### SCSS Features to Use

#### Variables

```scss
// Design tokens
$color-primary: #3498db;
$color-secondary: #2c3e50;
$spacing-md: 1rem;
$border-radius: 8px;
$font-family-primary: "Poppins", sans-serif;
```

#### Mixins

```scss
@mixin button-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  font-family: $font-family-primary;
}

@mixin responsive-text {
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
}
```

#### Nesting

```scss
.navigation {
  background: white;

  .nav-list {
    display: flex;
    list-style: none;

    .nav-item {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: $color-primary;
      }
    }
  }
}
```

### Component Architecture

#### Reusable Components

- Create small, focused components
- Use TypeScript interfaces for props
- Include default props when appropriate
- Make components composable

#### Page Components

- Use Markdown for content (with MDX when React components needed)
- Import reusable components
- Handle layout and data fetching
- Keep business logic separate from presentation

---

## Quality Checklist

### Code Quality

- [ ] TypeScript types are properly defined
- [ ] No `any` types (use `ComponentProps<'element'>` instead)
- [ ] Components have single responsibility
- [ ] SCSS variables are used consistently
- [ ] Mixins are created for repeated patterns

### Styling Quality

- [ ] CSS Modules provide namespace isolation
- [ ] SCSS nesting is used appropriately (max 3 levels deep)
- [ ] Variables are defined for colors, spacing, and fonts
- [ ] Responsive design is implemented with mixins
- [ ] Hover states and animations are smooth

### Architecture Quality

- [ ] Content is separated from presentation (Markdown files)
- [ ] Components are reusable and composable
- [ ] File structure follows conventions
- [ ] Dependencies are properly managed
- [ ] Build process works without errors

### Maintainability Quality

- [ ] Code is self-documenting
- [ ] Consistent naming conventions
- [ ] Clear separation of concerns
- [ ] Easy to add new components
- [ ] Simple to modify existing styles

---

## Anti-Patterns to Avoid

### ❌ Tailwind CSS in JSX

```jsx
// DON'T: Mixing design with content
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
  This violates separation of concerns
</div>
```

### ❌ Global CSS Pollution

```css
/* DON'T: Global styles that can conflict */
.card {
  /* affects all elements with class="card" */
}
.title {
  /* affects all titles globally */
}
```

### ❌ Inline Styles

```jsx
// DON'T: Inline styles are not maintainable
<div style={{ backgroundColor: "#3498db", padding: "1rem" }}>
  Hard to maintain and reuse
</div>
```

### ❌ Any Types

```tsx
// DON'T: Any types defeat TypeScript's purpose
const Button = (props: any) => {
  /* ... */
};

// DO: Use proper typing
const Button = (props: ComponentProps<"button">) => {
  /* ... */
};
```

---

## Success Metrics

A display implementation is successful when:

1. **Developer Experience**: New developers can understand and modify the code quickly
2. **Maintainability**: Changes are isolated and don't break other parts
3. **Consistency**: Design patterns are reused across components
4. **Performance**: CSS Modules provide optimal bundle sizes
5. **Scalability**: New components and pages follow established patterns
6. **Type Safety**: TypeScript catches errors at compile time

---

## Conclusion

This technology stack (React + TypeScript + CSS Modules + SCSS + Markdown) provides:

- **Clean separation** between content, styling, and behavior
- **Namespace isolation** preventing style conflicts
- **Enhanced CSS** with variables, mixins, and nesting
- **Type safety** catching errors early
- **Maintainable architecture** that scales with the project

> The goal is creating a visual language with its own encapsulation and programming ability, where all display code gets shorter and is cleanly separated from content.

Each React component has its namespace with its own styling. **Namespaces & encapsulation for the win!**
