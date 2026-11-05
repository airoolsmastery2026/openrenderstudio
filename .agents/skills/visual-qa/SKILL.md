---
name: visual-qa
description: Validate visual quality and regressions with same-viewport screenshots, functional checks, and a structured design review. Invoke before declaring a UI task complete.
---

# Visual QA & Design Review

## Baseline and comparison
1. Capture baseline and candidate screenshots at identical viewport, zoom, route, and state.
2. Compare macro layout first, then typography, color, spacing, imagery, borders, and details.
3. Check responsive sizes and relevant interaction states.
4. Inspect console/build output and run existing tests.
5. Verify no unrelated route, component, or behavior regressed.

## Review dimensions
- Visual hierarchy and clarity
- Consistency with DESIGN.md and existing product identity
- Content accuracy; no invented claims
- Responsive layout and overflow
- Accessibility and keyboard behavior
- Performance risks (oversized images, unnecessary rerenders, heavy effects)
- Maintainability and component reuse
- License/provenance of assets and references

## Severity
- Blocker: broken route, unusable primary task, security/privacy issue, severe accessibility barrier.
- High: major layout break, missing key behavior, mobile unusable.
- Medium: noticeable inconsistency or interaction defect with workaround.
- Low: cosmetic polish.

## Completion gate
A task is complete only when:
- Acceptance criteria are checked.
- Build and relevant tests actually ran and passed, or blockers are documented.
- Screenshots or a clear reason why screenshots were unavailable are recorded.
- No known blocker/high-severity issue remains.
- Changed files and residual risks are reported.

Never mark a check green without execution evidence.
