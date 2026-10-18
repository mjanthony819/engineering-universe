# Engineering Universe

A visual, connected engineering learning platform. Milestone 01 is a complete introductory journey, not a complete engineering degree.

## Run locally (Windows, macOS or Linux)

Requires Node.js 22 LTS and npm. From a clean checkout:

```sh
npm ci
npm run dev
```

Open the localhost address printed by Next.js. No environment variables or accounts are required. To generate all lesson PDFs and export the production site:

```sh
npm test
npm run lint
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

`out/` contains the static site. For a local production preview, run `npx serve out`. Do not use `next start` with static export.

## What's implemented

- Next.js App Router, TypeScript, React, Tailwind CSS and editable shadcn-style Button.
- React Flow explorer: 24 topics, prerequisite edges, search, filters, details and list alternative.
- 24 source-checked lessons, 66 quiz questions, 3 deterministic labs, 24 canonical PDF guides..
- One beginner path, local-only progress and bookmarks, project self-assessment.
- Dark and light themes, responsive layouts, reduced-motion support.

## Honest boundaries

No accounts, sync, code execution, certification, analytics or AI service. Broader topics are marked planned. Content is source-checked, not independently expert-reviewed. Quiz answers are shipped in client code and local progress is editable, so neither is secure assessment. The project checklist is self-assessed. No load tests or user-capacity claims.

## Content and contribution

Read `docs/ARCHITECTURE.md`, `docs/CONTENT.md`, and `docs/QA.md`. Lessons live in `content/lessons.ts`, topic metadata in `content/topics.ts`. Build-time validation rejects missing prerequisites and cycles. The PDF generator imports the same lesson objects as the UI. References belong to their original publishers; no textbook content is copied wholesale.

The repository is private pending release approval. No open-source license is selected yet; public release and licensing need the owner's decision. Do not enable deployment or change visibility automatically.

## Deployment after approval

For Vercel: import the repository, use `npm run build`, and serve the static `out` output. No secrets. For GitHub Pages project hosting, set `NEXT_PUBLIC_BASE_PATH=/engineering-universe` at build time, add `out/.nojekyll`, and upload `out` as the Pages artifact. On Windows PowerShell: `$env:NEXT_PUBLIC_BASE_PATH='/engineering-universe'; npm run build`. Vercel root hosting leaves the variable unset. No deployment has been enabled for this milestone.
