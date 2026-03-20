# ForgeFit v2 — Standard Package (Lime Green Theme)

Multi-page gym website matching the dark + lime green (#AAFF00) design reference.

## Stack
React 18 · Tailwind CSS v3 · Vite · Barlow + DM Sans fonts

## Pages
Home · About · Classes · Trainers · Gallery · Pricing · Contact

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
```

## Customise
- Brand name: find/replace `ForgeFit` / `FORGEFIT`
- Accent color: find/replace `#AAFF00` and `rgba(170,255,0,...)`
- Images: replace placeholder divs with `<img src="/images/...">` (put photos in `public/images/`)
- Google Maps: in `AllPages.jsx` → Contact → replace `.map-ph` div with `<iframe src="https://maps.google.com/maps?q=...&output=embed" />`
- Form: in `AllPages.jsx` → Contact → replace `submit` handler with Formspree/EmailJS
- Pricing: edit `PLANS` object in `AllPages.jsx`

## Design tokens
| Token | Value |
|-------|-------|
| Lime accent | `#AAFF00` |
| Background | `#0C0C0C` |
| Card bg | `#1A1A1A` |
| Section alt | `#141414` |

*Standard Package Demo — ₹20,000–₹35,000*
# gymfit-demo
