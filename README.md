# Itzfizz — Scroll-Driven Hero

A premium, scroll-driven hero experience built for the Web Development Internship assignment at Itzfizz Digital. The hero is a cinematic, editorial composition where a large automotive visual travels across the viewport in direct response to scroll progress — powered entirely by GSAP ScrollTrigger.

## Overview

- Full-screen sticky hero inside a tall scroll section (~220vh)
- The car visual moves smoothly from right to left as the user scrolls, with subtle scale and rotation for a heavy, cinematic feel
- Background layers (giant outlined typography, radial glow, circular geometry, hairline grid) respond at different speeds for parallax depth
- A fast (~1.4s) initial-load timeline reveals the headline, copy, statistics, car, and scroll indicator
- A minimal second section ("BUILT TO MOVE") closes the page
- Fully responsive from 375px to 1440px+, with `prefers-reduced-motion` support

## Features

- Scroll-driven GSAP animation (ScrollTrigger, `scrub: 1`, `ease: "none"`)
- Responsive scroll distances via `gsap.matchMedia()` and function-based values
- Initial-load intro timeline (masked line reveals, staggered statistics)
- Multi-speed background parallax
- Performance-conscious motion (transform/opacity only, no layout thrash)
- Reduced-motion support (clean static hero, no forced animation)
- Tasteful SVG fallback until `public/car.png` is added — no broken images, ever

## Tech Stack

- **Next.js** — App Router, React Server Components where possible
- **React** — TypeScript, `"use client"` only where animation runs
- **TypeScript** — strict, typed throughout
- **Tailwind CSS** — v4 utility-first styling
- **GSAP + ScrollTrigger** — all scroll and intro motion
- **Geist Sans / Geist Mono** — via `next/font/google`

## Project Structure

```
app/
  globals.css      — theme tokens, grain, outline text, keyframes
  layout.tsx       — fonts, metadata, dark theme
  page.tsx         — server component composing the page
components/
  Hero.tsx         — sticky hero + all GSAP scroll/intro logic
  ScrollCar.tsx    — car visual with graceful fallback
  Stats.tsx        — experience metrics
  Header.tsx       — minimal header
  SecondSection.tsx— "BUILT TO MOVE" closing section
lib/
  gsap.ts          — gsap + ScrollTrigger registration
public/
  car.png          — drop your transparent car asset here
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Deployment

The project is a standard Next.js app and deploys to Vercel with zero configuration:

1. Push the repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com), choose **Add New → Project** and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.

Every subsequent push to the main branch triggers a production deployment; pull requests get previews automatically.

## Assignment Requirements

| Requirement | Implementation |
| --- | --- |
| Hero section | Full-viewport sticky hero, editorial asymmetric composition |
| Initial load animation | ~1.4s GSAP intro timeline: masked headline reveal, staggered stats, car fade |
| Statistics | 92% / 68% / 3× demo metrics under an "EXPERIENCE METRICS" eyebrow |
| Scroll-driven visual | Car travels right → left via ScrollTrigger `scrub: 1`, `ease: "none"` |
| GSAP | ScrollTrigger + `useGSAP` + `gsap.matchMedia`, proper cleanup via GSAP context |
| Responsive design | Breakpoint-specific timelines, `clamp()` typography, mobile-tuned layout |
| Performance | Transform/opacity-only animation, no scroll listeners, no continuous layout reads |
| Reduced motion | Media query disables intro and scroll motion; static hero remains |

## Adding the Car Asset

Place a transparent-background car image at `public/car.png`. The hero will use it automatically — no code changes required. Until then, a tasteful SVG silhouette is rendered so the page never shows a broken image.
