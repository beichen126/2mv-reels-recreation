# Instagram Reels Analyzer — Frontend Recreation

A frontend recreation exercise: a single-page recreation of the 2mv **Instagram Reels Analyzer** landing page, built to match the original's visual system (layout, type, spacing, components, responsive behavior, interactions).

## Implementation

- **React 19** + **TypeScript**
- **Vite** (build tool & dev server)
- Plain **CSS** with a design-token system (`src/styles/tokens.css`) — semantic tokens (`--bg`, `--surface`, `--text-*`, `--border-*`, glass/surface tints) and BEM-style component classes
- **Plus Jakarta Sans** self-hosted via `@fontsource/plus-jakarta-sans` (no CDN dependency; loads offline)

## Key Focus

- **Visual fidelity** — pixel-driven reconstruction validated against original screenshots (overlay / side-by-side diff)
- **Responsive recreation** — 1440 / 1280 / 768 / 390 with grid degradation, table stacking, and an adaptive fixed navbar
- **Component decomposition** — sections split into `src/sections/*`, UI atoms (cards, pills, buttons, accordion) under `src/components/*`, content in `src/data/content.ts`
- **Interaction recreation** — FAQ accordion (grid-rows transition), scroll-reveal, call-to-action hover states, adaptive navbar (dark/light/green background awareness)

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Implementation Decisions

- **Static mock analyzer data** — the frame-by-frame analyzer preview is a designed static mock (no real video analysis backend), since the scope is a visual/behavioral recreation.
- **No real Instagram / AI API** — trending reels and the analyzer never call Instagram or any AI backend; behavior is reproduced client-side.
- **Responsive tables** — data tables collapse to stacked cards below 1024px and hide the header row, preserving information without horizontal scroll.
- **Media embed fallback** — the original uses genuine Instagram video embeds (cross-origin, unstable). This recreation uses designed placeholder cards with Instagram-style chrome (avatar, handle, follow button, play, captions, watch bar) instead of real embeds.
- **Design tokens** — colors/surfaces are centralized in `tokens.css`, letting components reference semantic tokens rather than hard-coded values.

## Known Differences

- **Trending reel media** — the original shows real Instagram video embeds; this recreation uses designed poster placeholders (Instagram-style chrome + gradient/video-texture). Not real videos.
- **Animations** — reveal and hover transitions are recreated; some original decorative animations (e.g., tagline clip-path reveals) are simplified or omitted.
- **Imagery** — none of the original raster/media assets are copied; all visuals are CSS/SVG or placeholder.
- **Content copy** — page copy mirrors the public page; subtle line-break/wrap differences may remain due to font-metric nuance.

Back-end, auth, analytics, and any real data-fetching are intentionally out of scope for this frontend recreation.
