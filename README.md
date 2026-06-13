# ALI-GOLD — E-Commerce Frontend Demo

A mobile-first React (Vite) demo storefront for ALI-GOLD: groceries, drinks,
household items, food stuffs and wellbeing essentials — with a WhatsApp
checkout flow and previews of the upcoming order-tracking & rider-tracking
experiences.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production / static hosting (e.g. Netlify):

```bash
npm run build
```

The output is generated in `dist/`.

## What's included (frontend demo)

- **Home** — hero, categories, featured products, "coming soon" vision strip
- **Shop** — category filters + product grid (20+ items, priced in ₦)
- **Product Detail** — description, quantity selector, related products
- **Cart** — editable quantities, order summary
- **Checkout** — delivery details form + "Confirm & Order via WhatsApp"
  (opens WhatsApp with a pre-filled order summary)
- **Order Confirmation**
- **WhatsApp Order Status** — styled mockup of the future live order-tracking
  chat (Confirmed → Preparing → Out for Delivery → Delivered)
- **Rider Tracking** — styled mockup of the future live rider-location map
- **About / Contact**
- Floating WhatsApp button on every page

All data is static/mock (see `src/data/products.js`). The WhatsApp number used
throughout is **0813 480 8602**.

## What's NOT in this demo (Phase 2 — backend)

- Supabase database & real inventory
- Flutterwave payments + in-app payment notifications
- Live WhatsApp Business API automation (real order tracking, support)
- Real-time rider GPS tracking / location enablement
- Third-party logistics integration

## Project structure

```
src/
  components/   shared UI (Header, Footer, Logo, ProductCard, WhatsAppButton, Layout)
  pages/        one file per route
  data/         mock product & category data
  context/      cart state (React Context)
```
