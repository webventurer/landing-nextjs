# Best Practices Documentation

This directory contains comprehensive best practices and guidelines discovered
during the development of this landing pages comparison project.

## Table of Contents

### HTML & Semantics
- [**Semantic HTML**](./semantic-html.md) - Comprehensive guide on using
  semantic HTML elements effectively, including when to use `<article>` vs
  `<div>`, proper element hierarchy, and integration with CSS.

### CSS & Architecture
- [**Layout + Content Pattern**](./layout-content-pattern.md) - Two-layer CSS
  architecture that separates layout concerns from content styling, following
  proven patterns from Bootstrap, Tailwind, and modern frameworks.
- [**CSS File Organization**](./css-file-organization.md) - Separation by
  concern and file structure patterns for maintainable CSS architecture.
- [**CSS Naming Conventions**](./css-naming-conventions.md) - Kebab-case in CSS files with camelCase access in TypeScript, leveraging CSS Modules auto-conversion.
- [**Joining CSS Class Names**](./join-css-class-names.md) - Using clsx for clean, conditional class name construction in React components.

### Code Quality
See the [Code Smells](../code-smells/) directory for:
- CSS Anti-patterns and Better Alternatives

## Contributing

When adding new best practices:

1. **Create focused documents** - Each practice should have its own file when it becomes substantial
2. **Include examples** - Always provide both ❌ wrong and ✅ correct examples
3. **Explain the why** - Document the reasoning behind each recommendation
4. **Update this index** - Add links to new documents in the appropriate section

## Organization Principles

- **Single Responsibility** - Each document focuses on one specific area
- **Actionable Guidance** - Practical examples developers can immediately apply
- **Context-Aware** - Examples relevant to this project's architecture
- **Evolution-Ready** - Structure that can grow as the project scales
