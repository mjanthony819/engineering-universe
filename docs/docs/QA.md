# QA contract

Run `npm test`, `npm run lint`, `npm run build`, `npm run typecheck`, then `npm run test:e2e` after installing Playwright Chromium. E2E serves `out/`, not development output.

Unit coverage: every unsigned byte round-trip, invalid values, complete Boolean gate truth tables, insertion-sort prefix/multiset invariants, content IDs, prerequisite cycles and beginner order.

Browser coverage: landing -> search -> lesson -> lab -> quiz -> saved completion -> reload -> PDF bytes; explorer list/filter/planned states; sort steps/back/input errors; responsive page width at 320/390/768/1440; axe checks against WCAG A/AA tags on main learning pages. Automated checks do not prove full accessibility. Manual pixel inspection is required for landing/map/mobile lesson and generated PDFs.

No claim of Safari/Firefox or assistive-device user testing. The repository contains no production telemetry or load-test result. Deployment remains disabled pending approval.
