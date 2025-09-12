# Semantic HTML Best Practices

**Semantic HTML** refers to using HTML elements according to their intended
meaning and purpose, rather than just for their appearance. Each HTML element
has semantic meaning that conveys information about the content structure to
browsers, screen readers, search engines, and other tools.

## Examples of Semantic Elements

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

## Why Semantic HTML Matters

- **Accessibility**: Screen readers can navigate content structure properly
- **SEO**: Search engines understand content hierarchy and importance
- **Maintainability**: Code is self-documenting and easier to understand
- **Future-proof**: Works better with new technologies and standards
- **Performance**: Browsers can optimize rendering for known content types

## Common Semantic Elements

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

## Best Practices

1. **Use headings hierarchically** - Don't skip heading levels (h1 → h2 → h3)
2. **One `<main>` per page** - Identifies the primary content area
3. **Logical document structure** - Use elements based on meaning, not
   appearance
4. **Avoid generic `<div>` when semantic options exist** - Choose `<section>`,
   `<article>`, etc.
5. **Use `<strong>` vs `<b>`** - `<strong>` indicates importance, `<b>` is just
   bold styling

## When to Use `<article>` vs `<div>` for Feature Cards

### ✅ Why `<article>` is correct for feature cards:

- Each card represents a feature block that could stand alone (e.g., reused in
  docs, marketing emails, or as part of a features page)
- Using `<article>` instead of a generic `<div>` makes it clearer to search
  engines, screen readers, and future developers that this is a discrete,
  meaningful unit
- When placed inside `<section>`, it creates proper hierarchy: a `<section>`
  groups related articles

### Example of correct usage:
```html
<section class="features">
  <article class="feature-card">
    <h3>🚀 Fast Loading</h3>
    <p>Static HTML loads instantly without any JavaScript frameworks...</p>
  </article>

  <article class="feature-card">
    <h3>📱 Responsive Design</h3>
    <p>CSS Grid and Flexbox ensure this page looks great...</p>
  </article>
</section>
```

### 🔎 When NOT to use `<article>`:

- If the content is purely decorative or layout-only, use `<div>`
- If the content isn't independently meaningful (e.g., part of a bigger story),
  `<section>` or `<div>` may be better
- For wrapper/container elements that only provide styling or layout structure

## Integration with CSS

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
