# CSS Naming Conventions with CSS Modules

**Critical Insight**: CSS Modules requires exact name matching between CSS class names and TypeScript access patterns.

## The Core Problem

CSS Modules creates a 1:1 mapping between CSS class names and TypeScript object properties. **Any naming mismatch breaks the mapping entirely.**

### ❌ The Critical Error

**CSS Modules does NOT automatically convert between naming conventions.** If you use different naming patterns, the mapping breaks:

```scss
// CSS File - Using kebab-case
.success-box {
  background-color: green;
}

.features-grid {
  display: grid;
}
```

```tsx
// TypeScript - Using camelCase access
<div className={styles.successBox}>    // ❌ UNDEFINED! No mapping exists
<div className={styles.featuresGrid}>  // ❌ UNDEFINED! No mapping exists
```

**Result**: Components lose all styling because the CSS classes aren't found.

## The Solution: Exact Name Matching

**For CSS Modules to work, CSS class names must exactly match TypeScript access patterns:**

```scss
// ✅ Correct: Use camelCase in CSS to match TypeScript
.successBox {
  background-color: green;
  padding: 1rem;
}

.featuresGrid {
  display: grid;
  gap: 2rem;
}
```

```tsx
// ✅ Correct: camelCase access matches CSS exactly
import styles from './Component.module.scss';

<div className={styles.successBox}>     // Direct 1:1 mapping ✅
<div className={styles.featuresGrid}>   // Direct 1:1 mapping ✅
```

## Why This Matters

CSS Modules generates a mapping object like:
```js
// When CSS uses camelCase (.successBox)
const styles = {
  successBox: 'Component_successBox__abc123'
}

// When CSS uses kebab-case (.success-box)
const styles = {
  'success-box': 'Component_success-box__abc123'  // Must use bracket syntax!
}
```

## How CSS Modules Actually Work

CSS Modules creates an exact 1:1 mapping between CSS class names and JavaScript object properties:

| CSS Class Name | TypeScript Access | Mapping Result |
|---------------|-------------------|----------------|
| `.successBox` | `styles.successBox` | ✅ **Direct match** |
| `.featuresGrid` | `styles.featuresGrid` | ✅ **Direct match** |
| `.success-box` | `styles.successBox` | ❌ **No mapping** |
| `.success-box` | `styles['success-box']` | ✅ Works but awkward |

**Key Insight**: There is no automatic conversion between kebab-case and camelCase.

## Best Practices

### 1. CSS Files - Use camelCase for CSS Modules
```scss
// ✅ Good - Matches TypeScript access directly
.primaryButton { }
.featureCard { }
.navigationMenu { }
.sidebarContent { }

// ❌ Avoid - Creates mapping issues with CSS Modules
.primary-button { }
.feature-card { }
```

### 2. TypeScript Files - Use camelCase
```tsx
// ✅ Good - Direct mapping with CSS
className={styles.primaryButton}
className={styles.featureCard}
className={styles.navigationMenu}

// ❌ Avoid - Requires bracket syntax (error-prone)
className={styles['primary-button']}  // Breaks if CSS uses camelCase
```

### 3. Stay Consistent Within CSS Modules Projects
```scss
// ✅ CSS Modules approach - camelCase everywhere
.userProfileCard { }
.dropdownMenuItem { }
.searchResultsContainer { }
```

## Real-World Example: What Broke Our Components

### The Problem We Discovered
```scss
/* features.module.scss - After incorrect "kebab-case" refactoring */
.highlight-box {           // kebab-case in CSS
  background: yellow;
}

.features-grid {           // kebab-case in CSS
  display: grid;
}
```

```tsx
/* FeaturesGrid.tsx - Still using camelCase access */
<div className={styles.highlightBox}>   // ❌ UNDEFINED - no mapping!
<div className={styles.featuresGrid}>   // ❌ UNDEFINED - no mapping!
```

### The Fix: Exact Name Matching
```scss
/* features.module.scss - Corrected to match TypeScript */
.highlightBox {            // camelCase matches TypeScript
  background: yellow;
}

.featuresGrid {            // camelCase matches TypeScript
  display: grid;
}
```

```tsx
/* FeaturesGrid.tsx - Now the mapping works */
<div className={styles.highlightBox}>   // ✅ Maps to .highlightBox
<div className={styles.featuresGrid}>   // ✅ Maps to .featuresGrid
```

## Conclusion

**The Key Insight**: CSS Modules requires exact name matching between CSS classes and TypeScript access patterns. There is no automatic conversion.

**Our Solution**: Use camelCase consistently in both CSS files and TypeScript access for clean, predictable mapping:

- **CSS classes**: `.successBox`, `.featuresGrid`, `.highlightBox`
- **TypeScript access**: `styles.successBox`, `styles.featuresGrid`, `styles.highlightBox`
- **Result**: Direct 1:1 mapping with zero ambiguity

This approach ensures your CSS Modules work reliably and your components render with proper styling.

---

*Created: 12 September 2025*
*Updated: 13 September 2025 - Added critical CSS Modules mapping insights*
*Status: Production Ready - Verified with successful builds*
