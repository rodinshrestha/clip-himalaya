# Content Audit & Plan — Clip Himalaya

Audit date: 2026-04-20

---

## 1. Site map & content state (pre-work)

| Route | Type | Content state | Data source | Notes |
|---|---|---|---|---|
| `/` | Home | Decent | Sanity | Hero video, features, popular treks, testimonials, team CTA |
| `/treks` | Listing | Decent | Sanity | Banner, info section, region grid, trek cards |
| `/treks/[id]` | Detail / Region | Thin | Sanity | Had itinerary + costs but no quick facts, no FAQ, no packing, no fitness guidance |
| `/annapurna-circuit` | Marketing | Decent | Sanity | Standalone itinerary page — not part of the trek system |
| `/other-activities` | Listing | Thin | Sanity | Banner + card grid, generic framing |
| `/other-activities/[slug]` | Detail | Decent | Sanity | Description + highlights |
| `/our-story` | About | Decent | Sanity | Banner, text, photo gallery |
| `/our-team` | Team | Decent | Sanity | Landing, journey, members, FAQ |
| `/contact-us` | Contact | Decent | Sanity | Info cards, working form |
| `/privacy-policy` | Legal | Decent | Sanity | Structured sections |
| `/terms-and-conditions` | Legal | Decent | Sanity | Structured sections |

## 2. Information architecture

```
Home
├── Treks (/treks)
│   ├── Everest Region (/treks/everest-region)
│   │   └── Everest Base Camp Trek (/treks/everest-base-camp-trek)
│   ├── Annapurna Region (/treks/annapurna-region)
│   │   └── Annapurna Base Camp Trek (/treks/annapurna-base-camp-trek)
│   └── Manaslu Region (/treks/manaslu-region)
│       └── Manaslu Circuit Trek (/treks/manaslu-circuit-trek)
├── Annapurna Circuit (/annapurna-circuit) — standalone marketing page
├── Custom Treks & Other Adventures (/other-activities)
│   └── Activity detail pages (/other-activities/[slug])
├── Our Story (/our-story)
├── Our Team (/our-team)
├── Contact Us (/contact-us)
├── Privacy Policy (/privacy-policy)
└── Terms & Conditions (/terms-and-conditions)
```

**Missing (not built):** Blog, dedicated booking/inquiry flow, search.

## 3. What was done

### Schema extensions

**trekkingRegion** — added: `tagline`, `description` (rich text), `culture`,
`bestSeasons`, `whoItSuits`, `elevation`, SEO fields.

**trekDetails** — added: Quick Facts (`duration`, `maxElevation`, `bestSeasons`,
`startPoint`, `endPoint`, `groupSize`, `permits`), `fitnessGuidance`,
`accommodationNotes`, `permitDetails`, `packingEssentials`, `faqList`,
`elevation`/`walkingHours` per itinerary day. SEO fields.

**ourStoryPage** — added: `valuesList`, `sustainabilityStatement`.

**activityDetails** — added SEO fields.

### New components

| Component | Location | Purpose |
|---|---|---|
| FlagshipRegions | `Home/components/FlagshipRegions` | Three-region cards on homepage |
| QuickFacts | `TrekDetails/components/QuickFacts` | Icon bar: duration, elevation, seasons, etc. |
| TrekExtras | `TrekDetails/components/TrekExtras` | Fitness, accommodation, permits, packing, FAQ, CTA |

### Page changes

- **Homepage**: Added FlagshipRegions between Hero and WhyChooseUs. Removed TopTrekSection (redundant non-clickable cards).
- **Region pages**: Now render description, culture, seasons, who-it-suits info cards.
- **Trek detail pages**: QuickFacts bar, enhanced itinerary (elevation + hours per day), TrekExtras section with CTA.
- **Our Story**: Renders values and sustainability sections when data exists.
- **Other Activities**: Reframed metadata as "Custom Treks & Other Adventures."

### SEO

- Unique `title` + `description` on all 11 pages
- `generateMetadata` on dynamic pages pulling from Sanity
- `metadataBase`, canonical URLs, OpenGraph + Twitter cards on every page
- `sitemap.ts` with static + dynamic routes
- `robots.ts` disallowing `/admin/`
- JSON-LD: Organization, BreadcrumbList, TouristTrip, FAQPage
- Header site title changed from `h1` to `p` (one H1 per page)

### Images

- All banner/card alt text updated to descriptive, keyword-relevant text
- `urlFor()` optimization (width/quality) added to 7 components
- 18 Pexels images uploaded to Sanity for 3 regions + 3 treks
- 9 orphaned static images removed (~10MB saved)
- Placeholder.png created for ImageWithFallback fallback
- Large PNGs compressed to JPG (annapurna-img: 2.9MB -> 376KB)

### Content seeded

3 regions and 3 flagship treks with:
- Full day-by-day itineraries with elevation and walking hours
- Included/excluded cost lists
- Fitness guidance, accommodation notes, permit details
- Packing essentials (10 items each)
- 4 tailored FAQs per trek

## 4. Figures that need verification

The seed script contains specific numbers that should be confirmed:

- Permit costs (Sagarmatha NP, TIMS, Manaslu restricted area)
- Teahouse WiFi/charging/shower costs
- Itinerary elevations per day
- Walking hour ranges

Search the codebase for `{{TODO: confirm}}` or review `scripts/seed-content.mjs`
directly. These figures are in Sanity and can be edited via Studio.

## 5. Business decisions still open

1. **Organization JSON-LD** needs real address, phone, social URLs
2. **Our Story values + sustainability** fields are empty in CMS
3. **"Other Activities" nav label** — still says "OTHER ACTIVITIES", metadata says "Custom Treks"
4. **Annapurna Circuit** page is standalone — should it become a normal Sanity trek?
5. **Blog** — not built, no schema exists
6. **Default OG image** — using a generic mountain photo, could be branded
