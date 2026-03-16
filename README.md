# MutuGuard — Fraud Detection for Health Insurance

A modern, bilingual (FR/EN) SaaS landing page for **MutuGuard**, an AI-powered fraud detection platform for health insurance companies and mutuelles.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TailwindCSS 4**
- **TypeScript**
- **Resend** for demo form email delivery (Vercel)
- **SQLite** (via better-sqlite3) for demo request storage (local dev only)

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

### Vercel (recommended)

1. Push your code to GitHub and import the repo in [Vercel](https://vercel.com).
2. Add environment variable: `RESEND_API_KEY` = your API key from [resend.com/api-keys](https://resend.com/api-keys).
3. Deploy. Demo requests will be sent to fraziafif@gmail.com via Resend.

### GitHub Pages (static)

```bash
STATIC_EXPORT=true npx next build
```

The workflow removes API routes for static export. Use Vercel for the demo form to work.

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

## Demo Form (Book your personalized demo)

Demo requests are sent to **fraziafif@gmail.com**:

- **Vercel**: Uses **Resend** — emails go directly to your inbox. Set `RESEND_API_KEY` in Vercel environment variables.
- **Local dev**: Without `RESEND_API_KEY`, submissions are stored in SQLite and viewable in the admin dashboard.

### Resend troubleshooting

- **Resend account**: Sign up at [resend.com](https://resend.com) with **fraziafif@gmail.com**. With `onboarding@resend.dev`, you can only send to the email you registered with.
- **Domain verification**: To send from your own domain, verify it at [resend.com/domains](https://resend.com/domains).
