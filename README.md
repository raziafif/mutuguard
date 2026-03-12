# MutuGuard — Fraud Detection for Health Insurance

A modern, bilingual (FR/EN) SaaS landing page for **MutuGuard**, an AI-powered fraud detection platform for health insurance companies and mutuelles.

**Live site:** [https://raziafif.github.io/mutuguard](https://raziafif.github.io/mutuguard)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TailwindCSS 4**
- **TypeScript**
- **SQLite** (via better-sqlite3) for demo request storage (local dev)
- **GitHub Pages** for static deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm

### Installation

```bash
cd mutuguard
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production (server mode)

```bash
npm run build
npm start
```

### Build for Static Export (GitHub Pages)

```bash
STATIC_EXPORT=true npx next build
```

Output goes to the `out/` directory. The API routes and admin page are excluded from the static build.

## Deployment

This project uses **GitHub Actions** to automatically deploy to **GitHub Pages** on every push to `main`.

The workflow (`.github/workflows/deploy.yml`):
1. Installs dependencies
2. Removes server-only code (API routes, admin page, SQLite)
3. Builds with `STATIC_EXPORT=true`
4. Deploys the `out/` directory to GitHub Pages

## Project Structure

```
mutuguard/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Main landing page
│   │   ├── globals.css         # Global styles & animations
│   │   ├── admin/
│   │   │   └── page.tsx        # Admin dashboard (local dev only)
│   │   └── api/
│   │       └── demo/
│   │           └── route.ts    # REST API for demo requests (local dev only)
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation bar with language switcher
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Problem.tsx         # Fraud problem explanation
│   │   ├── Solution.tsx        # Platform solution features
│   │   ├── HowItWorks.tsx      # 4-step process timeline
│   │   ├── Features.tsx        # Feature cards
│   │   ├── Mission.tsx         # Mission & vision section
│   │   ├── Trust.tsx           # Target audience section
│   │   ├── DemoForm.tsx        # Demo booking form
│   │   └── Footer.tsx          # Site footer
│   └── lib/
│       ├── db.ts               # SQLite database helper (local dev only)
│       └── i18n.tsx            # Internationalization (FR/EN)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Features

- Bilingual support (French default, English toggle)
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Subtle CSS animations
- Form validation with loading/success states
- SQLite-backed demo request storage (local dev)
- Admin dashboard with data table (local dev)
- Modern SaaS UI inspired by Stripe/Linear/Vercel
- AI-powered fraud detection with user behavior profiling
- Automatic deployment via GitHub Actions
