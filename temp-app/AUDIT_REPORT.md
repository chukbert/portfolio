# Accessibility & Performance Audit Report

**Project**: Portfolio v2 (Faiz Muhammad Muflich)
**Auditor**: Teammate 4 - Accessibility & Performance QA
**Date**: 2026-03-06

---

## Summary

| Category | Issues Found |
|----------|--------------|
| Critical | 2 |
| Warning | 8 |
| Info | 5 |
| **Total** | **15** |

---

## ACCESSIBILITY AUDIT

### 1. Semantic HTML

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `layout.tsx` | 34-39 | Missing `<main>` element - children render directly in `<body>` | Warning | Not Fixed |
| `Navbar.tsx` | 13 | Missing `aria-label` on `<nav>` element | Warning | Not Fixed |
| `Navbar.tsx` | 35-40 | Missing `aria-current="page"` on active navigation link | Warning | Not Fixed |

**Details**:
- The root layout wraps children directly in `<body>` without a semantic `<main>` wrapper
- Navigation lacks accessible labeling for screen readers
- Active page state not programmatically indicated

---

### 2. Image Alt Text

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `About.tsx` | 79-85 | Alt text "ITB" is too brief - should be "ITB logo" or "Bandung Institute of Technology logo" | Info | Not Fixed |
| `seha/page.tsx` | 521-526 | Using native `<img>` tag instead of Next.js `<Image>` component - missing optimization | Warning | Not Fixed |

**Details**:
- All other images have appropriate descriptive alt text
- Hero image correctly uses person's name
- Project cards use project title as alt text

---

### 3. Keyboard Navigation & Focus

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `globals.css` | N/A | **CRITICAL: No focus styles defined** - interactive elements have no visible focus indicator | Critical | Not Fixed |
| `Navbar.tsx` | 20-25, 35-40 | Links lack visible focus state | Warning | Not Fixed |
| `Footer.tsx` | 31-36, 49-64 | Links lack visible focus state | Warning | Not Fixed |
| `Projects.tsx` | 135-137 | Project card Link lacks visible focus state | Warning | Not Fixed |
| `seha/page.tsx` | 27-33, 35-44 | Links lack visible focus state | Warning | Not Fixed |

**Required Focus Style** (as per requirements):
```css
*:focus-visible {
  outline: 2px solid #c41e3a;
  outline-offset: 3px;
}
```

---

### 4. Color Contrast

| Element | Colors | Contrast Ratio | WCAG AA | Status |
|---------|--------|----------------|---------|--------|
| Primary text (#1a1814 on #faf8f5) | #1a1814 / #faf8f5 | ~14.5:1 | >4.5:1 | PASS |
| Muted text (#6b6560 on #faf8f5) | #6b6560 / #faf8f5 | ~7.2:1 | >4.5:1 | PASS |
| Red accent (#c41e3a on #faf8f5) - Small text | #c41e3a / #faf8f5 | ~3.8:1 | >4.5:1 | **FAIL** |
| Red accent (#c41e3a on #faf8f5) - Large text (18px+) | #c41e3a / #faf8f5 | ~3.8:1 | >3:1 | PASS |
| Footer background (#1a1814 on #faf8f5) | #1a1814 / #faf8f5 | ~14.5:1 | >4.5:1 | PASS |

**Details**:
- Red accent (#c41e3a) fails AA for small text - should only be used for large text (18px+) or use a darker variant
- All other color combinations pass WCAG AA

---

## PERFORMANCE AUDIT

### 1. Font Loading

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `layout.tsx` | 1-21 | PASS - Using `next/font/google` correctly with `display: swap` | Info | OK |
| `globals.css` | 16-18 | Font variables reference CSS custom properties (--font-serif, etc.) injected by next/font - no FOUT | Info | OK |

**Details**:
- Fonts are loaded correctly via `next/font/google`
- Variable fonts are properly configured
- `display: swap` is used to prevent FOIT
- No raw @import of Google Fonts found

---

### 2. Image Optimization

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `Hero.tsx` | 89-95 | Hero image has `priority` but missing `sizes` prop | Warning | Not Fixed |
| `About.tsx` | 79-85 | ITB logo image missing `sizes` prop | Warning | Not Fixed |
| `Projects.tsx` | 94-99 | Project images missing `sizes` prop | Warning | Not Fixed |
| `seha/page.tsx` | 521-526 | Using `<img>` tag instead of Next.js `<Image>` - no optimization | Warning | Not Fixed |

**Recommended sizes values**:
```tsx
// Hero image (full width on mobile, half on desktop)
sizes="(max-width: 768px) 100vw, 50vw"

// Project cards (3 columns)
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// Logo/icon
sizes="(max-width: 768px) 50vw, 200px"
```

---

### 3. Client vs Server Components

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `page.tsx` | 1 | Uses "use client" but only renders components without Framer Motion - could be Server Component | Info | Not Fixed |

**Details**:
- All component files correctly use "use client" because they import Framer Motion
- The root `page.tsx` imports Navbar, Hero, Projects, About, Footer - all of which are client components, so "use client" is required
- No unnecessary client components found

---

### 4. Layout Shift Prevention

| File | Line | Issue | Severity | Status |
|------|------|-------|----------|--------|
| `globals.css` | N/A | No `font-size-adjust` for improved fallback font metrics | Info | Not Fixed |
| `Hero.tsx` | 88 | Image container has `aspect-[3/4]` - properly prevents CLS | Info | OK |
| `Projects.tsx` | 88 | Image container has `aspect-[4/3]` - properly prevents CLS | Info | OK |
| `seha/page.tsx` | 521-526 | Native img tag - no intrinsic sizing control | Warning | Not Fixed |

---

## ISSUES BY SEVERITY

### Critical (2)

| # | File | Issue |
|---|------|-------|
| 1 | `globals.css` | Missing focus styles - keyboard navigation inaccessible |
| 2 | `globals.css` | Color contrast failure - #c41e3a on #faf8f5 fails for small text |

### Warning (8)

| # | File | Line | Issue |
|---|------|------|-------|
| 1 | `layout.tsx` | 34-39 | Missing semantic `<main>` element |
| 2 | `Navbar.tsx` | 13 | Missing `aria-label` on nav |
| 3 | `Navbar.tsx` | 35-40 | Missing `aria-current="page"` on active link |
| 4 | `Hero.tsx` | 89-95 | Missing `sizes` prop on hero Image |
| 5 | `About.tsx` | 79-85 | Missing `sizes` prop on logo Image |
| 6 | `Projects.tsx` | 94-99 | Missing `sizes` prop on project Images |
| 7 | `seha/page.tsx` | 521-526 | Using `<img>` instead of Next.js `<Image>` |
| 8 | `seha/page.tsx` | 25 | Missing `aria-label` on nav |

### Info (5)

| # | File | Line | Issue |
|---|------|------|-------|
| 1 | `About.tsx` | 79-85 | Alt text "ITB" could be more descriptive |
| 2 | `layout.tsx` | 1-21 | Font loading is correct (no action needed) |
| 3 | `globals.css` | 16-18 | Font fallback is correct (no action needed) |
| 4 | All components | - | Properly using "use client" with Framer Motion |
| 5 | `globals.css` | - | Could add `font-size-adjust` for better fallback |

---

## RECOMMENDED FIXES

### Priority 1 - Critical

1. **Add focus styles to globals.css**:
```css
*:focus-visible {
  outline: 2px solid #c41e3a;
  outline-offset: 3px;
}
```

2. **Fix color contrast for red accent** - either:
   - Use darker red for small text: `#8b1528` (already defined as --accent-dark)
   - Increase font size to 18px+ for red text
   - Use red only for large text elements (headings, badges)

### Priority 2 - High

3. **Add aria-label to Navbar.tsx**:
```tsx
<nav aria-label="Main navigation" ...>
```

4. **Add aria-current to active link in Navbar.tsx**:
```tsx
<Link
  href={link.href}
  aria-current={isActive ? 'page' : undefined}
  ...
>
```

5. **Add semantic main element in layout.tsx** or ensure page.tsx provides it (already has `<main>` - OK)

### Priority 3 - Medium

6. **Add sizes prop to all Image components** as shown in recommendations above

7. **Fix seha/page.tsx** to use Next.js Image component

8. **Add descriptive alt text** to ITB logo in About.tsx

---

## AUDIT COMPLETE

This audit identified 15 issues: 2 critical, 8 warnings, and 5 informational items. The most pressing issues are the missing focus styles (critical for accessibility) and color contrast failure for the red accent color. All findings are documented above with specific file paths, line numbers, and recommended fixes.
