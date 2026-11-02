# NXT GENZ — company website

React + Vite (JavaScript). Run:

```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, Instagram, offer % and code, stats, team | `src/data/company.js` |
| Customer reviews (**placeholders — replace**) | `src/data/reviews.js` |
| Prices, plans, FAQ, custom rates | `src/data/pricing.js` |
| Previous projects (**samples — replace**) | `src/data/projects.js` |
| Colours (the 5 brand colours) | `:root` in `src/index.css` |

Each page has its own `.jsx` + `.css` in `src/pages/`; the nav bar and footer are in `src/components/`.

## Uiverse components and where they are used

| Component | Page |
| --- | --- |
| Radial menu (dexter-st) | Fixed top nav, every page — `Navbar` |
| Stats card (naveenkumarr-onyx) | Home |
| Discount card (Javierrocadev) | Home |
| 3D review ring (musashi-13) | Home |
| Texture pattern (3pple10) | Home hero + CTA band |
| Option cards (srinivasaiml) | Services (website packages) |
| Tech orbit (Darlley) | Services |
| Isometric social card (MijailVillegas) | About |
| Brutalist links card (craig_8499) | Footer, every page |
| Plan cards (abrahamcalsin) | Pricing |
| Offer ticket (zeeshan_2112) | Pricing |
| Project card (andrew-demchenk0) | Projects |
| Feedback card (catraco) | Contact |
| Thank-you envelope (SmookyDev) | Contact (last page) |

## Notes

- The contact form validates, then opens WhatsApp with the details pre-filled (no backend needed).
  To send to a server instead, replace the `window.open(...)` call in `src/pages/Contact.jsx`.
- Hosting: it is a single-page app. `public/_redirects` handles Netlify; other hosts need a
  "rewrite all routes to /index.html" rule.
