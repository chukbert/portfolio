# AGENTS.md

This file provides guidance to AI agents (Antigravity, Gemini, Copilot, etc.) when working with code in this repository.

## Project Overview

Personal portfolio website for **Faiz Muhammad Muflich** — Fullstack AI Engineer.
Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS v4**.

The app lives in the `temp-app/` subdirectory. All development work happens there.

---

## Commands

```bash
# Navigate to app directory first
cd temp-app

# Install dependencies (pnpm is required)
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

---

## Project Structure

```
portfolio/
├── AGENTS.md               # This file
├── CLAUDE.md               # Claude-specific guidance (mirrors this file)
├── images/                 # Source/reference images
└── temp-app/               # The Next.js application
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx      # Root layout (fonts, metadata)
    │   │   ├── page.tsx        # Home page — assembles all sections
    │   │   ├── globals.css     # Global styles + Tailwind v4 config
    │   │   └── seha/           # Project detail page (Seha project)
    │   └── components/
    │       ├── Navbar.tsx      # Fixed top navigation bar
    │       ├── Hero.tsx        # Hero section with portrait photo
    │       ├── Projects.tsx    # Portfolio projects grid/cards
    │       ├── About.tsx       # About + skills + education
    │       └── Footer.tsx      # Contact & social links
    ├── public/
    │   └── images/             # Static images served by Next.js
    ├── package.json
    └── next.config.ts
```

---

## Architecture & Key Patterns

### Framework
- **Next.js App Router** (file-based routing in `src/app/`)
- **TypeScript** throughout
- Static Site Generation (SSG) for performance

### Styling
- **Tailwind CSS v4** — use `@import "tailwindcss"` syntax (NOT `@tailwind base/components/utilities`)
- Custom tokens and overrides live in `globals.css`
- Avoid inline styles; use Tailwind utility classes

### Design System
| Token | Value |
|---|---|
| Background | `#faf8f5` (warm paper) |
| Accent | `#c41e3a` (editorial red) |
| Font – Display | Playfair Display (serif) |
| Font – Body | DM Sans (sans-serif) |
| Font – Code | JetBrains Mono (monospace) |

### Animations
- **Framer Motion** for scroll-triggered reveals
- Use `"use client"` directive on any component that uses Framer Motion or browser APIs

### Images
- Use `next/image` with `fill` for responsive images
- Always wrap `fill` images in a `position: relative` container with an explicit height
- Project images stored in `public/images/`

### Component Conventions
- Components are **client components** (use `"use client"`) when animation or interactivity is needed
- Component data (project list, skills, etc.) is defined **inline** inside each component file — no separate data files
- One component per file; named exports preferred

---

## Design Aesthetic

The portfolio follows an **editorial/magazine aesthetic**:
- Large serif display typography (Playfair Display) for section headings
- Clean, structured layouts with clear visual hierarchy
- Warm, muted background tones with editorial red as the sole accent
- Subtle micro-animations via Framer Motion (fade-in, slide-up on scroll)
- Professional and refined — avoid heavy drop shadows, neon colors, or overly decorative elements

When making UI changes, preserve this aesthetic direction.

---

## Sections & Their Purpose

| Section | Component | Notes |
|---|---|---|
| Navigation | `Navbar.tsx` | Fixed; links to page anchors |
| Hero | `Hero.tsx` | Intro, tagline, CTA, portrait image |
| Projects | `Projects.tsx` | Showcases selected work with images |
| About | `About.tsx` | Bio, tech stack, education history |
| Footer | `Footer.tsx` | Email, GitHub, LinkedIn |

---

## Common Pitfalls

- **`next/image` with `fill`**: The parent container MUST have `position: relative` and an explicit height, or the image will overflow and cover other content.
- **Tailwind v4 syntax**: Do NOT use `@tailwind base` / `@tailwind components` / `@tailwind utilities`. Use `@import "tailwindcss"`.
- **Framer Motion + SSR**: Always add `"use client"` to components using `motion.*` or hooks like `useInView`.
- **pnpm only**: Do not use `npm` or `yarn`; this project uses `pnpm` and has a `pnpm-lock.yaml`.

---

## Verification

After making changes:
1. Run `pnpm dev` and check `http://localhost:3000` in a browser
2. Visually inspect the affected section(s) at multiple viewport widths
3. Run `pnpm build` to ensure no TypeScript or build errors
4. Run `pnpm lint` and resolve any lint warnings
