# TSB Landing (Next.js + Tailwind + Spline)

Dark-mode landing page with a floating Spline scene and email opt-in. Exports as a static site for Netlify.

## Setup

```bash
npm install
npm run dev
# http://localhost:5173
```

## Build and export

```bash
npm run build
npm run export
# Outputs to ./out
```

## Deploy to Netlify

- Connect repo → use defaults. The included `netlify.toml` runs build+export and publishes `out/`.

## Where things live

- `app/page.tsx`: page layout and sections; uses `@splinetool/react-spline` with the scene `https://prod.spline.design/UOwS6OgTZFp1-aMG/scene.splinecode`.
- `app/globals.css`: Tailwind base and small utilities (glassmorphism, float/shadow).
- `tailwind.config.ts`: design tokens and dark mode.
