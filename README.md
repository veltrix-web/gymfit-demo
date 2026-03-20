# FitKit — Premium Package Website (Red + Black Theme)

**₹40,000–₹60,000 Demo** — Full-featured gym website with Red/Black aggressive theme matching the reference design.

## Stack
React 18 · Tailwind CSS v3 · Vite · Barlow + DM Sans fonts

## Pages (8 total)
| Page | Features |
|------|----------|
| Home | Hero, BMI Calculator, About, Work Process, Classes Grid, Progress Bars, Testimonials |
| About | Story, Stats Counter |
| Classes | 9 classes with category filter |
| Schedule | 7-day timetable with day tabs, Book Now buttons |
| Trainers | 6 trainer cards with certifications |
| Membership | 3-step online form + Razorpay payment gateway |
| Blog | 6 posts with category filter + full article view |
| Contact | Inquiry form + Google Maps placeholder |

## Premium Features
- **BMI Calculator** — live calculation with activity factor
- **Class Schedule/Timetable** — 7-day tab view with spots tracking
- **Online Membership Form** — 4-step (plan → details → payment → confirmation)
- **Razorpay Payment** — pre-configured, just add your key
- **Blog Section** — category filter + full article reading
- **WhatsApp Chatbot** — floating widget with message input

## Quick Start
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build
```

## Setup Razorpay
1. Create account at razorpay.com
2. Get your Key ID from Dashboard → Settings → API Keys
3. In `Membership.jsx`, replace `rzp_test_YOUR_KEY_HERE` with your key
4. For production: create orders from backend, pass `order_id` to options

## Customise
- Brand: find/replace `FitKit` / `FITKIT`
- Red color: `#E8001D` → your brand color
- Phone: `+91 98765 43210`
- WhatsApp: in `WhatsAppChat.jsx` → replace `919876543210` with your number
- Google Maps: in `AllPages.jsx` → Contact → replace `.map-ph` with iframe
- Form: replace `submit` handler with Formspree/EmailJS/API

## Design Tokens
| Token | Value |
|-------|-------|
| Red accent | `#E8001D` |
| Black bg | `#0A0A0A` |
| Dark card | `#181818` |
| Section alt | `#111111` |

*Premium Package Demo — ₹40,000–₹60,000*
