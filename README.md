# APX Labs — Website

Premium marketing site for APX Labs — growth infrastructure for local businesses.
Built to the standard of Apple / Stripe / Linear / Vercel, and **designed around real proof assets**.

## Stack

- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS 3**
- **Framer Motion** for motion (Expo.out easing language)
- Dark-primary design system with a single controlled accent
- shadcn/ui-compatible primitives (Button, Container, Section)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Design system

- **Tokens:** `src/app/globals.css` (CSS variables) + `tailwind.config.ts` (semantic colors, fluid display scale, 8px spacing).
- **Motion:** `src/lib/motion.ts` — `fadeUp`, `scaleIn`, `staggerContainer`, `EASE_EXPO`. Wrap sections in `<Reveal>` / `<RevealGroup>`.
- **Primitives:** `src/components/ui/*`. **Sections:** `src/components/sections/*`.

## Proof assets — drop-in, zero code

Real assets load automatically from `/public`. See `public/proof/README.md`.

| Folder | Renders in |
|--------|-----------|
| `public/proof` | Evidence Wall (replies, booked meetings) |
| `public/screenshots` | Case Studies showcase (campaign dashboards) |
| `public/videos` | Video testimonials |

Until real files are added, elegant "verified proof" placeholders show — nothing renders broken.
Filenames become captions (`positive-reply-solar.png` → "Positive Reply Solar"); prefix `01-`, `02-` to order.

## Pages

`/` · `/solutions` (+ `/solutions/{commercial-solar,roofing,hvac,cleaning}`) · `/case-studies` ·
`/resources` · `/about` · `/contact` · `/privacy` · `/terms` · `/refund`

## Wiring up the contact form

`src/components/sections/contact-form.tsx` currently simulates success. Point `onSubmit` at your
CRM/email endpoint (or embed a Cal.com/Calendly widget on `/contact`) to capture strategy-call requests.

## Note

`next` is pinned to a patched `14.2.x` (Dec 2025 security advisory). Keep it on the patched line.
