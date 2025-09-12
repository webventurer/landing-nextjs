# Best Practices

This document outlines coding best practices and guidelines discovered during the development of this landing pages comparison project.

## CSS & Styling Best Practices

### 1. Avoid CSS Class Names That Mirror HTML Tag Names

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

<div className={styles.page}>
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
.page {
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

- **Semantic HTML**: Elements retain their semantic meaning without unnecessary className clutter
- **Cleaner JSX**: No need to manually assign classes to every HTML element
- **Contextual Styling**: Styles are applied based on container context, which is more maintainable
- **Global + Local Pattern**: Establish base typography globally, then override contextually
- **Better CSS Cascading**: Takes advantage of CSS's natural cascading behavior
- **Reduced Bundle Size**: Fewer class name strings in your JavaScript bundle

**Implementation Strategy:**

1. Define base typography in global styles
2. Create contextual container classes (`.page`, `.article`, `.sidebar`)
3. Use nested SCSS selectors to style elements within those contexts
4. Reserve explicit classes for truly unique styling needs

This approach makes your styles more maintainable and your HTML more semantic.
