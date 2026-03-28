# Prompta — AI Prompt Intelligence Platform

> A futuristic, full-screen AI prompt intelligence platform built with a **mission-control aesthetic**. Dark-first, GPU-smooth, and built to impress.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EE6CBF?style=flat-square)

---

## ✨ Overview

**Prompta** is a high-performance marketing/landing page for an AI prompt engineering platform. It features a scroll-hijacked, full-screen snap layout where each "panel" is an immersive screen — complete with kinetic typography, parallax effects, glassmorphism, and a dynamic theme switcher.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| 3D Tilt | react-parallax-tilt |
| Utilities | clsx, tailwind-merge |
| Fonts | Geist Sans + Geist Mono (via `next/font`) |

---

## 🎨 Themes

Prompta ships with **three switchable visual identities**, toggled from the Navbar. The theme is persisted to `localStorage` and applied via a `data-theme` attribute on `<html>`.

| Theme | Personality |
|---|---|
| **Void** *(default)* | Deep space black, electric violet accent |
| **Aurora** | Dark teal with green/cyan bioluminescence |
| **Solaris** | Warm dark amber, solar orange glow |

Theme state is managed globally via `src/context/ThemeContext.tsx`.

---

## 📐 Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, ThemeProvider, Navbar
│   ├── page.tsx            # Entry point — composes all sections
│   └── globals.css         # Design tokens, CSS variables, base styles
│
├── components/
│   ├── layout/
│   │   ├── HorizontalScrollLayout.tsx  # Scroll-snap container + progress bar
│   │   └── Navbar.tsx                  # Fixed nav with theme switcher
│   │
│   ├── sections/           # Each file = one full-screen panel
│   │   ├── EntryScreen.tsx     # Hero / landing screen
│   │   ├── ProductDemo.tsx     # Split-screen AI terminal demo
│   │   ├── FeaturesSection.tsx # 3D-tilted feature cards
│   │   ├── SocialStats.tsx     # Social proof / stats panel
│   │   ├── Pricing.tsx         # Deployment tiers with billing toggle
│   │   └── FinalCTA.tsx        # Call-to-action with parallax background
│   │
│   └── ui/
│       └── MagneticButton.tsx  # Cursor-following magnetic button
│
└── context/
    └── ThemeContext.tsx    # Global theme state + localStorage persistence
```

---

## 🖥️ Sections

### 1 · Entry Screen
Hero panel with animated kinetic typography and a full-bleed atmospheric background. First impression — designed to stop scrolling.

### 2 · Product Demo
Split-screen layout: a simulated AI terminal on one side and live prompt output on the other. Demonstrates the core product interaction in real-time.

### 3 · Features Section
Three 3D-tilting feature cards (powered by `react-parallax-tilt`) — each card highlights a core platform capability with icon, title, and description.

### 4 · Social Stats
Animated counters and social proof metrics. Numbers animate in on scroll entry using Framer Motion.

### 5 · Pricing (Deployment Tiers)
Three pricing plans — **Neural Node**, **Synapse Pro**, and **Core Enterprise** — with a smooth animated billing toggle (Monthly / Annual) using Framer Motion `layoutId`.

### 6 · Final CTA
Full-screen call-to-action. Features a parallax two-line `NEURAL / NETWORK` ghost watermark that tracks mouse position, with primary and secondary action buttons.

---

## 🧩 Key Components

### `HorizontalScrollLayout`
Wraps all sections in a vertical **scroll-snap** container (`snap-y mandatory`). A spring-smoothed progress bar is pinned at the top of the viewport, driven by `useScroll` + `useSpring` from Framer Motion.

### `MagneticButton`
A custom button that follows the cursor with a spring animation on hover — the button element physically moves toward the mouse, creating a tactile magnetic feel.

### `ThemeContext`
Provides `theme` and `setTheme` globally. On mount, it reads from `localStorage` to restore the user's last selected theme. Changes are applied immediately by setting `data-theme` on `<html>`.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/prompta.git
cd prompta
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 📁 Design Tokens

All colors, spacing, and animation variables are defined as CSS custom properties in `src/app/globals.css`. Theme palettes are defined per `data-theme` attribute:

```css
[data-theme="void"]    { --accent-primary: ...; --accent-glow: ...; }
[data-theme="aurora"]  { --accent-primary: ...; --accent-glow: ...; }
[data-theme="solaris"] { --accent-primary: ...; --accent-glow: ...; }
```

---

## ⚡ Performance Notes

- All six section components are **dynamically imported** (`next/dynamic`) with `ssr: false` to defer heavy animation code from the initial server render.
- Framer Motion's `useSpring` and `useTransform` keep animations on the compositor thread.
- Fonts are loaded via `next/font/google` for zero CLS and automatic subsetting.

---

## 📄 License

[MIT](./LICENSE)
