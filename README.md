# Instagram Reels Analyzer — Frontend Recreation

A React 19 + TypeScript + Vite recreation of [2mv's Instagram Reels Analyzer](https://www.2mv.ai/ai-video-analyzer/instagram-reels), with self-hosted Plus Jakarta Sans and plain CSS.

## Run and verify

```sh
npm install
npm run dev
```

With the dev server running, use a second terminal:

```sh
npm run build
npm run lint
npm test
```

The browser test uses installed Microsoft Edge. Override `BROWSER_CHANNEL` for another installed Playwright browser channel and `TEST_URL` when serving on a different address (default: `http://127.0.0.1:5173`).

## Recreated behavior

- Layout, section spacing, balanced hero headline, SVG wordmark, preview frame, typography, table and card breakpoints, mobile CTA and footer.
- The same four public Instagram Reel embeds as the reference, loaded near the viewport. Selecting a card with click, Enter or Space fills its URL into the analyzer.
- The analyzer opens `https://app.2mv.ai/` with the same source and URL parameters as the reference. Selecting or dropping a video shows its filename; the app completes the upload after handoff. No fabricated local analysis result is displayed.
- FAQ accordion, adaptive floating navigation, mobile menu, reveal transitions and button hover states.
- Newsletter submission includes pending, success and retryable error states. It uses the public subscription endpoint exposed by the reference site, only when the visitor submits. Set `VITE_NEWSLETTER_ENDPOINT` to override that service. The request is a JSON envelope with `resource: Newsletter`, `action: Subscribe` and a JSON-encoded `payload` containing `email` and `source: footer`.
- Links to pages outside this recreation point to the original site; the Instagram Reels page stays local.

## Validation

Visual measurements were compared at 1440, 1280, 768 and 390px. Automated browser tests cover 12 widths around responsive breakpoints, card selection, analyzer handoff, file state, FAQ, newsletter validation/failure/retry and mobile navigation.

Tests intercept external media and subscription requests and capture analyzer handoffs. No test email is submitted and no test video is uploaded. Instagram media and the original app/subscription service remain externally hosted; their availability and live content can change. This repository does not implement the 2mv analysis backend.

Local reference screenshots and measurements are stored under the git-ignored `reference/fixed-audit/` directory.
