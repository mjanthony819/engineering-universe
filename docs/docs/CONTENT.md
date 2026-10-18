# Add and review content

1. Add a unique topic ID to `content/topics.ts`, with discipline, level, required prerequisite IDs and optional recommendations. A topic without a lesson is visibly planned.
2. Add a `Lesson` to `content/lessons.ts`. Follow `content/types.ts`: summary, estimated time, objectives, why, analogy, sections, terminology, misconception, exercise and answer, quiz with explanations, project, references, optional lab and next ID.
3. Use stable section IDs for the table of contents. Link only to published lessons. Keep authoring state draft outside the published registry until reviewed.
4. Validate sources against primary documentation. Log review in `docs/REVIEW.md`. Source-checked is not expert approval. Never invent citations or capacity figures.
5. Add pure model logic to `lib/algorithms.ts` before a new lab. Add invariant and boundary tests, then the renderer in `components/labs.tsx`.
6. `npm run build` validates IDs, missing prerequisites, cycles, quiz answers and next links, generates PDFs, and builds all static routes. Inspect at least one PDF and all altered layouts.
7. A reviewer checks explanations, examples, accessibility, all quiz distractors and project criteria. Until independent review, retain the source-checked label.

Error reports need lesson ID, exact sentence, expected correction, primary source URL, browser if relevant, and reproduction steps. Avoid personal data. During private review send to the maintainer; public issues are a later release decision.

Taxonomy: foundations; mathematics (discrete math, algebra, calculus, probability); core CS (algorithms, OS, networks, databases, architecture); frontend; backend; AI/ML; security; professional practice. Additional specializations have draft scopes and required foundations on the about page. Detailed expansion comes after this milestone, not as hundreds of shallow generated lessons.
