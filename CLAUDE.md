# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Faiz Muhammad Muflich (Fullstack AI Engineer), built with Next.js 16 and Tailwind CSS v4.

## Commands

```bash
# Install dependencies (uses pnpm)
cd temp-app && pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

The project uses the **Next.js App Router** with the following structure:

```
temp-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── page.tsx        # Home page (assembles components)
│   │   ├── globals.css     # Global styles + Tailwind v4
│   │   └── seha/           # Project detail page
│   └── components/
│       ├── Navbar.tsx      # Fixed navigation
│       ├── Hero.tsx        # Hero section with photo
│       ├── Projects.tsx    # Portfolio projects grid
│       ├── About.tsx       # About section + education
│       └── Footer.tsx      # Contact footer
├── public/images/          # Static images
└── package.json
```

## Key Patterns

- **Styling**: Tailwind CSS v4 with `@import "tailwindcss"` syntax
- **Animations**: Framer Motion for scroll-triggered reveals
- **Fonts**: Playfair Display (serif), DM Sans (sans), JetBrains Mono (mono)
- **Colors**: Editorial theme with warm paper tones (#faf8f5), editorial red accent (#c41e3a)
- **Images**: next/image with fill layout for responsive images
- **Components**: Client components use "use client" directive with framer-motion

## Development Notes

- The portfolio uses an editorial/magazine aesthetic with serif typography
- Project images are in `/public/images/`
- Component data (projects, skills) is defined inline in each component file
- The site is statically generated (SSG) for performance
