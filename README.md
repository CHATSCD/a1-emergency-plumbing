# A-1 Emergency Plumbing Repair — website

Mobile-first, conversion-focused single-page site for a 24/7 emergency plumber serving
**Gulfport, Biloxi, Long Beach & Harrison County, MS**.

Built to out-convert directory listings (Angi / BBB / YellowPages / Facebook) by making it
possible to call within one tap of landing — no scrolling, no menus, no forms required.

- **Stack:** Next.js 14 (App Router) + Tailwind CSS 3
- **Deploy:** Vercel
- **Everything on one page** — anchor links only, no multi-page maze

---

## Conversion architecture

| Element | Where | Purpose |
|---|---|---|
| Sticky call bar (fixed bottom, always visible) | Global | One tap to call from anywhere on the page |
| Large tap-to-call block | Hero, above the fold | Call without scrolling (target: < 3 seconds) |
| `tel:` links everywhere the number appears | Header, hero, every CTA, form, footer, sticky bar | Number is always tappable |
| Request-service form (secondary CTA) | `#request` | Catches visitors who won't call yet |
| Trust bar | Directly under hero | Licensed/insured, 15+ years, 4.9★ / 180+ reviews, 15–30 min response |
| Urgency messaging | Throughout | "Avg response 15–30 min", "nights, weekends & holidays" |
| FAQ (native `<details>`, zero JS) | `#faq` | Kills the top objections: price, speed, is it really 24/7, estimate fees |

Performance choices that keep mobile load fast:

- **No raster images at all** — every icon is inline SVG (zero image requests, no layout shift).
- **System font stack** — no webfont download.
- **No carousels, no autoplay video, no client-side animation libraries.**
- Favicon ships as a tiny `app/icon.svg`.
- Only one client component on the page (the form). Everything else is a server component.

---

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run build && npm start   # production build check
```

---

## Environment variables

Create `.env.local` locally, and add the same values in
**Vercel → Project → Settings → Environment Variables**:

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical domain, e.g. `https://a1emergencyplumbingrepair.com`. Used for canonical URLs, sitemap, robots, and `LocalBusiness.url`. Defaults to a placeholder if unset. |
| `SUPABASE_URL` | Optional | Enables storing form leads. |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Server-side insert key. `SUPABASE_ANON_KEY` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` also work. |

### Where form submissions go

`POST /api/request` validates the lead (name + 10-digit phone), silently drops honeypot
submissions, then inserts into the Supabase table `public.service_requests` (insert-only policy).
Columns: `name, phone, service, urgency, notes, source, user_agent, created_at`.

**If the Supabase env vars are not set, the form still succeeds** and the lead is written to the
Vercel function logs instead — visitors never hit a dead end. Set the env vars to persist leads
properly, and point dispatch at the table (or add an email/SMS notification in
`app/api/request/route.js`).

Useful query for dispatch:

```sql
select created_at, name, phone, service, urgency, notes
from public.service_requests
order by created_at desc
limit 50;
```

---

## SEO

- **Title:** `Emergency Plumber Gulfport, MS | 24/7 A-1 Emergency Plumbing Repair`
- **Description:** targets "24/7 emergency plumbers in Gulfport, Biloxi & Long Beach, MS"
- **Structured data (JSON-LD), emitted in `app/layout.js`:**
  - `LocalBusiness` + `Plumber`: name, `tel:+12288609008`, `priceRange: "$$"`, address
    (Gulfport, MS, US), `areaServed` (Gulfport / Biloxi / Long Beach / Harrison County),
    24/7 `openingHoursSpecification`, `aggregateRating` (4.9 / 180), the three real `review`
    entries, and an `OfferCatalog` of all six services.
  - `FAQPage` built from the FAQ section.
- `app/robots.js` + `app/sitemap.js` are generated at build time.
- Service-area section lists the covered cities in plain text for local relevance.

> Next step for local SEO: add the Google Business Profile URL + social links to `sameAs` in
> the schema (in `app/layout.js`) once available, and create the GBP/BBB citations pointing at
> this domain instead of just the directories.

---

## Editing content

**All business info lives in one file: [`lib/site.js`](lib/site.js).** Change the phone number,
services, cities, reviews, FAQs, rating, or hours there and it updates the page, the metadata,
the schema, and the form dropdowns in one edit. Then update `siteUrl` for a domain change.

`lib/site.js` locations to review before launch:

1. `phoneDisplay` / `phoneE164` / `phoneHref` — must stay in sync (E.164 format for `phoneE164`).
2. `siteUrl` default — replace the placeholder domain with the real one.
3. `services`, `testimonials`, `faqs` — keep quotes and copy exactly as approved by the business.
4. `license` — add the actual Master Plumber license number if they want it public.

---

## Deploying to Vercel

1. Push this repo to GitHub (already done).
2. In Vercel: **Add New → Project → Import** `a1-emergency-plumbing`.
3. Framework preset auto-detects **Next.js** — no build settings needed.
4. Add environment variables (see above), then deploy.
5. Point the real domain at the project, set `NEXT_PUBLIC_SITE_URL` to it, and redeploy so
   canonical URLs and the sitemap match.

No `vercel.json` is required.

---

## Pre-launch checklist

- [ ] Real domain set in `NEXT_PUBLIC_SITE_URL`
- [ ] Test the sticky bar, hero button, and header button from a real phone (all should open the dialer)
- [ ] Submit a test form and confirm the row appears in `service_requests`
- [ ] Validate schema at [validator.schema.org](https://validator.schema.org/) and
      [Google Rich Results Test](https://search.google.com/test/rich-results) (expect FAQ + LocalBusiness)
- [ ] Confirm the GBP/BBB/Angi listings all show this site's URL
- [ ] Verify `tel:` works as a click-to-call conversion in GA4 (mark it as a key event)
