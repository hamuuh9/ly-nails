# Ly Nails — Birmingham Nail Salon Website

A modern, responsive website for Ly Nails, a 4.9-star rated nail salon in Birmingham, UK.

Built with **Next.js 14** + **TypeScript** + **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, services, testimonials, CTA |
| `/about` | Our story, team, timeline |
| `/services` | Service listings with prices & details |
| `/gallery` | Nail art portfolio grid |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts |
| `/contact` | Contact form, location, hours |
| `/booking` | Appointment booking form |

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Option 1: Vercel (Recommended)

The fastest way to deploy a Next.js site.

**One-click deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/ly-nails)

**Manual deploy:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Vercel Settings (already configured in `vercel.json`):**
- Framework: Next.js
- Region: London (lhr1) — closest to Birmingham
- Build command: `next build`
- Output directory: `.next`

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Add a `netlify.toml` (included) for configuration.

### Option 3: Self-hosted (Docker)

```bash
# Build
docker build -t ly-nails .

# Run
docker run -p 3000:3000 ly-nails
```

## CI/CD with GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/ci-cd.yml`) that:

1. **Runs on every PR:** Lints, type-checks, and builds
2. **Deploys previews:** PRs get a preview deployment on Vercel
3. **Deploys to production:** Pushes to `main` go live automatically

### Setup GitHub Actions

1. Push this repo to GitHub
2. Create a Vercel account at [vercel.com](https://vercel.com)
3. Link your project: `vercel link`
4. Add these secrets to your GitHub repo (`Settings → Secrets`):

| Secret | How to get it |
|--------|---------------|
| `VERCEL_TOKEN` | Vercel → Settings → Tokens → Create |
| `VERCEL_ORG_ID` | Run `vercel link`, check `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Run `vercel link`, check `.vercel/project.json` |

5. Push to `main` — the workflow handles the rest

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Site URL for SEO |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | For embedded map |
| `CONTACT_EMAIL` | No | For form submissions |

## Customization

### Update Business Info

Edit these files to update Ly Nails details:

- **Contact info:** `src/components/Footer.tsx`, `src/app/contact/page.tsx`
- **Services & prices:** `src/app/services/page.tsx`, `src/app/booking/page.tsx`
- **About/timeline:** `src/app/about/page.tsx`
- **Testimonials:** `src/app/page.tsx`
- **Blog posts:** `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`

### Replace Placeholder Images

The site uses emoji placeholders. Replace with real images:

1. Add images to `public/images/`
2. Update components to use `<Image>` from `next/image`
3. Update `next.config.js` for external image domains

### Change Branding

- **Colours:** Edit `tailwind.config.js` (rose/pink theme)
- **Logo:** Update the "L" logo in `Header.tsx` and `Footer.tsx`
- **Fonts:** Edit `globals.css` font imports

## Tech Stack

- [Next.js 14](https://nextjs.org) — React framework with App Router
- [TypeScript](https://typescriptlang.org) — Type safety
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Vercel](https://vercel.com) — Deployment platform

## License

This project is created for Ly Nails Birmingham.
