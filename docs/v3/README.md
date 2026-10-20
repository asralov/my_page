# Portfolio v3 — design and verification

Implemented October 20, 2026 in the existing Next.js application. The uncommitted v2 work was reviewed and preserved where applicable. No reset, push, merge, deployment, or Storm repository change was performed.

## Visual direction

Midnight Indigo replaces all white page surfaces. Large Space Grotesk name typography, a lightly tilted photographic frame, generous section headings, and thin technical rules create a more personal editorial presentation. Storm uses an asymmetric split card; the collection uses image-led two-column cards and a single column below 768px. Skills use compact groups, including two columns on narrow phones. Contact closes the page with a large invitation and direct email/social links.

| Token | Color |
| --- | --- |
| Background | #0B1020 |
| Secondary surface | #101827 |
| Card | #171E30 |
| Primary text | #E2E8F0 |
| Secondary text | #9EACC2 |
| Violet | #A78BFA |
| Cyan | #7DD3FC |
| Border | #344057 |

Tokens are centralized in [global styles](../../app/globals.css). Display typography uses Space Grotesk; body uses Geist; technical labels use JetBrains Mono. All are loaded through next/font. Technical labels are intentionally smaller than body copy; important descriptions and controls remain larger.

## Review and research

Reviewed Git history through the image-rich carousel in commit 169cefd, the current HEAD presentation, the uncommitted v2 components, and all existing project image paths. Preserved the portrait, genuine project variety, filters, and game artwork. Restored the larger visual role of images without bringing back automatic carousel movement.

All four references were accessible for content/structure review: [Brittany Chiang](https://brittanychiang.com/), [Rauno Freiberg](https://rauno.me/), [Emil Kowalski](https://emilkowal.ski/), and [Bruno Simon](https://bruno-simon.com/). Their clear hierarchy, emphasis on interface details, concise presentation, and personal character informed the direction. Their designs, branding, code and assets were not copied. Bruno's full interactive 3D experience was not exercised.

## Project imagery and gallery behavior

- Storm remains first with its original repository dashboard screenshot and unchanged source/release destinations. The preview opens the full tall screenshot. Stack labels include Go only here, not in the main skills list.
- Algo Playground, Word Search, Checkers, Hasty Judgement, From Bud To Bloom, Fishing Simulator, Before The Flush and The Last Hero retain their real local images.
- Lose The Bias, GPU Sales & Value Tracker, and Trie use typography-based artwork with their real names and technologies instead of generic ChatGPT/GPU/Trie illustrations presented as evidence. These are designed fallbacks, not screenshots.
- All twelve projects remain available. Initially show 3 including Storm below 768px, and 5 including Storm at 768px and above. Each View More adds two, except the final remaining single project. Counts derive from the actual collection and active filter.
- Filters reset expansion and keep Storm visible. For a filtered category, the count explicitly includes featured Storm.
- Hidden cards are unmounted, so their links cannot receive keyboard focus. Stable project IDs preserve existing cards across expansion.
- On the final reveal, focus moves to Show Less. Collapsing restores the current breakpoint's initial count and focuses/scrolls to the collection heading. Resizing updates the baseline while retaining the number of requested extra cards.

## Motion and accessibility

Small staggered hero translations, card entry fades/lifts, image hover zoom, button movement and mobile menu entry provide feedback. Section headings use progressive CSS view-timeline reveals where supported, with visible static fallback elsewhere. No looping background animation, large blur, mouse tracking, parallax or layout animation was added.

Reduced motion disables CSS movement/transition and Framer Motion hover translation. Native anchors preserve expected navigation; section offsets account for the sticky header. Navigation exposes the current section through IntersectionObserver, cleans up the observer, and supports Escape with focus restoration. Resume and Contact remain in navigation. Copy-email failure/success announcements and timeout cleanup are retained. Safe external links, SEO metadata, generated crawler routes and tested security headers remain in place.

## Executed checks

- Production Next.js build: passed.
- ESLint and TypeScript: passed; editor diagnostics clear.
- Existing Node production smoke tests: **3 passed**, covering canonical identity, featured ordering, safe external links, headers, PDF/image signatures and metadata resources. Ordering now checks stable project markers to accommodate linked card headings.
- New Playwright tests: **8 passed**, using headless Microsoft Edge with real pointer/keyboard actions. Tests cover 375, 430, 768, 1024 and 1440px, initial counts, each reveal step, the final step, collapse focus, filters, resize behavior, mobile navigation, anchor offset and reduced motion.
- Viewed actual after screenshots at all five requested widths. Lazy images are scrolled into view and checked for successful loading before final captures.
- Separate motion-enabled initial-load check: zero layout-shift entry sum, no horizontal overflow and no console errors at all five widths. See [recorded observations](browser-metrics.json). This checks the local initial-load window, not field Core Web Vitals or a Lighthouse score.
- Resume still serves a valid PDF. Existing project destinations were preserved; the v2 HTTP validation results remain available in [link results](../link-results.json). Third-party URLs were not re-probed for this styling pass.

No npm ci was necessary: dependencies were already installed. Added only @playwright/test as a development dependency and updated its lockfile entries. No runtime dependency upgrades or new animation/UI framework. The previously documented 10 development-tool audit findings remain; this task did not perform broad dependency remediation.

## Screenshots

| Width | Before v3 | After v3 |
| --- | --- | --- |
| 375 | [Before](before-375.png) | [Full page](after-375.png) · [Hero](hero-375.png) |
| 430 | — | [Full page](after-430.png) |
| 768 | — | [Full page](after-768.png) |
| 1024 | — | [Full page](after-1024.png) |
| 1440 | [Before](before-1440.png) | [Full page](after-1440.png) · [Hero](hero-1440.png) |

Before captures were taken before edits, but below-fold lazy images had not been scrolled into view and appear as empty slots. That is a capture limitation, not evidence of broken images in v2. After captures explicitly wait for images. Full-page after captures use reduced motion for stable composition; hero captures and separate measurements use normal motion.

## Files changed in this iteration

- [Hero](../../app/components/HeroSection.tsx), [featured project](../../app/components/ProjectsSection.tsx), [gallery](../../app/components/ProjectGrid.tsx), [navigation](../../app/components/Navigation.tsx), [skills](../../app/components/SkillsSection.tsx), [contact](../../app/components/ContactSection.tsx).
- [Global styles](../../app/globals.css), [layout/fonts](../../app/layout.tsx), [page surfaces](../../app/page.tsx), [Tailwind font mapping](../../tailwind.config.ts).
- [Browser tests](../../tests/browser/gallery.spec.ts), [Playwright configuration](../../playwright.config.ts), [smoke tests](../../tests/production.test.mjs), [package scripts/development dependency](../../package.json), [lockfile](../../package-lock.json), [ignore rules](../../.gitignore), [README](../../README.md), and these screenshots/report.

## Run and review

```sh
npm run dev
```

Open http://localhost:3000. Production: `npm run build`, then `npm run start`. In a second terminal run `npm test`.

`npm run test:browser` starts the built application automatically on port 3001. It uses locally installed Microsoft Edge. On a machine without Edge, install the Playwright Edge channel or adjust the channel in the configuration. Rebuild before browser tests after source changes.

Remaining limits: no physical-device, Safari/Firefox, screen-reader or comprehensive automated contrast audit. No Lighthouse score or throttled-network performance claim. Fonts require network access during a fresh build; some original game PNGs remain large but rendered previews use Next.js optimization. The existing resume's currency still needs owner review. CSS view-timeline support varies, so unsupported browsers show static section headings.
