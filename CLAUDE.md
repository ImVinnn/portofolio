# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site built with **React 19 + Vite + Tailwind CSS v4** (JavaScript, no TypeScript). Two routes — Home (`/`) and About (`/about`) — via `react-router-dom`.

## Commands

- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build

## Architecture & Conventions

- **Entry**: `index.html` → `src/main.jsx` (BrowserRouter) → `src/App.jsx` (Navbar + Routes + Footer, plus a `ScrollToHash` helper that scrolls to `#work`/`#contact` anchors after route navigation, since react-router doesn't do this automatically).
- **Pages**: `src/pages/Home.jsx` (hero, featured projects, about preview, contact) and `src/pages/About.jsx` (bio, capabilities, experience, contact). Project and skill data live as plain arrays at the top of each page file.
- **Shared components** in `src/components/`: `Navbar` (sticky; mobile hamburger via `useState`, with `aria-expanded`/`aria-label`), `Footer`, `SocialRow` (GitHub/LinkedIn/Instagram inline SVGs), `ProjectCard` (props: badge, image, title, desc, meta, links, `flip` to mirror the layout), `ContactSection` (the "Let's Connect" section — form has no backend: preventDefault, `checkValidity`/`reportValidity`, reset, success message in state).
- **Styling**: Tailwind v4 via `@tailwindcss/vite` — no `tailwind.config.js`. All design tokens live in the `@theme` block of `src/index.css`: colors (`bg` #0D0D0D, `bg-alt` #1A1A1A, `accent` #D4FF4F, `fg` #F5F5F5, `muted` #A0A0A0, `line` #2A2A2A), fonts (`font-display` = Anton, `font-body` = Inter), fluid type scale (`text-h1/h2/h3` via clamp), `spacing-section`, `radius-card`. Change values there, not inline.
- **Custom classes** in `@layer components` of `src/index.css` (BEM-ish names kept from the old site): `.wrap` (container), `.display-title`, `.eyebrow`, `.btn` + `.btn__icon`, `.social-icon`, `.link-underline` (+ `--accent`, `--plain` modifiers), `.skill-pill`, `.form-field`. Everything else is Tailwind utilities inline in JSX.
- **Dark theme only**; `prefers-reduced-motion` handled globally in `src/index.css`; focus-visible outlines for keyboard users.
- **Responsive**: single mobile breakpoint = Tailwind `md` (768px). Mobile overrides use `max-md:` variants; 2-column grids collapse to 1 column and the nav becomes a hamburger.
- **Icons via CDN** (kept deliberately, no icon packages): Font Awesome 6.5.2 loaded in `index.html` head; language icons from `cdn.simpleicons.org` (slugs: `html5`, `css` — not css3, `javascript`, `python`, `c`) and Devicon for the colorful Java logo.
- **Images** in `public/images/`, referenced as `/images/<file>`.
- **Placeholder content**: `#` links (LinkedIn, resume) and bracketed tokens like `[Bulan Tahun]` are intentional placeholders the owner fills in manually. The "Download Resume" button is intentionally inert (`aria-disabled`).
- Content language is Indonesian (id); section headings are stylistically in English.
