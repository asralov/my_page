# Abror Asralov — Software Engineer

Personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion. Production URL: https://asralov.vercel.app.

## Local development

Use Node.js 22 LTS and npm. Stop an existing Next.js server before reinstalling dependencies on Windows to avoid native compiler file locks.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production preview and checks

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

With the production server running, in another terminal:

```sh
npm test
npm audit
npm audit --omit=dev
```

The tests use Node's built-in test runner and require the server at http://localhost:3000. Set TEST_BASE_URL to test another local address.

## Editing content

- [Project data](app/data/projects.ts): typed records for the eleven additional projects.
- [Featured Storm section](app/components/ProjectsSection.tsx): project copy, stack, screenshot and release links.
- [Project grid](app/components/ProjectGrid.tsx): shared card presentation, ordering and category filters.
- [Hero](app/components/HeroSection.tsx), [skills](app/components/SkillsSection.tsx), and [contact](app/components/ContactSection.tsx): personal content.
- [Styles](app/globals.css) and [Tailwind configuration](tailwind.config.ts): shared spacing, fonts, motion and focus treatment.
- [Layout metadata](app/layout.tsx) and [social image](app/opengraph-image.tsx): canonical URL and previews.

The Storm screenshot is the original [dashboard image](https://github.com/asralov/storm/blob/main/docs/images/dashboard.png) from the owner's repository. Its card crops the tall screenshot visually; selecting it opens the complete image. Existing illustrative thumbnails are identified as illustrations in alt text.

The existing resume is preserved at [resume_updated.pdf](public/resume_updated.pdf). Confirm its contents are current before sharing it with employers.

## Deployment

Use the existing Vercel Next.js project and the committed lockfile. No new secrets or services are required. Vercel Analytics is enabled only when VERCEL=1 during the build; local preview omits its unavailable endpoint. Canonical metadata assumes the production domain above. Security headers are defined in [next.config.ts](next.config.ts).

Review the [validation report](docs/validation.md) before deploying. This change was not pushed, merged, or deployed.

## Portfolio v3

See the [v3 design and verification report](docs/v3/README.md) for the Midnight Indigo palette, typography, project gallery behavior, before/after screenshots, and current browser checks. The previous v2 report remains historical.

The gallery initially shows 3 projects on mobile and 5 at widths of 768px or more, including Storm. View More reveals two at a time. All twelve projects and category filters remain available.

After building, run `npm run test:browser` for the progressive-gallery and responsive tests. The test runner starts a production server on port 3001 and uses Microsoft Edge.
