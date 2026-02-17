# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start dev server (port 3000)
- `pnpm build` - Build static site (outputs to `/out`)
- `pnpm lint` - Run ESLint
- `pnpm start` - Start production server

No test framework is configured.

## Architecture

Single-page portfolio website built with **Next.js 16** (static export), **React 19**, **TypeScript**, and **Tailwind CSS 4**. Uses **shadcn/ui** (new-york style) with Radix UI primitives. Package manager is **pnpm**.

### Key Structure

- `app/page.tsx` - Single page that composes all section components
- `app/globals.css` - OKLCH color system (light/dark), custom animation utilities (`anim-fade-up`, `anim-fade-down`, etc.), stagger delays
- `data/portfolio-data.ts` - **Single source of truth** for all portfolio content (personal info, experiences, skills, projects, education, certifications)
- `components/` - Section components (`hero-section.tsx`, `experience-section.tsx`, `skills-section.tsx`, `projects-section.tsx`, `education-section.tsx`, `contact-section.tsx`, `navigation.tsx`)
- `components/ui/` - shadcn/ui components (59 total)
- `hooks/` - Custom hooks: `useFadeIn` (scroll fade), `useParallax`, `useScrollOpacity`, `useMobile`
- `lib/utils.ts` - `cn()` utility (clsx + tailwind-merge)

### Patterns

- All section components are client components (`"use client"`)
- Scroll animations use intersection observer via `useFadeIn()` hook returning `{ ref, isVisible }`
- Staggered animations use inline `transitionDelay: \`${index * 150}ms\``
- Import alias: `@/` maps to project root
- Static export mode: no API routes or server-side features
- React Compiler enabled via `babel-plugin-react-compiler`
- Dark mode via `next-themes` with `ThemeProvider`
