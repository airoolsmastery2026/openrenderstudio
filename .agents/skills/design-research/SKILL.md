---
name: design-research
description: Analyze supplied URLs, screenshots, and permitted website references to extract evidence-based layout, visual, interaction, and responsive patterns. Invoke when the user requests design research or reference analysis.
---

# Design Research

## Inputs
Target URL(s), screenshots, target product/route, research depth, and constraints. If a URL is supplied, inspect it only when browsing is available and allowed. If not, state the limitation and work from supplied evidence.

## Procedure
1. Record source URL/name, access date, page type, viewport, and whether evidence is live, screenshot-only, or inferred.
2. Inspect page structure: header, navigation, hero, content hierarchy, forms, cards, footer, overlays, and key states.
3. Extract visual evidence: color roles (not just hex values), typography families/scale/weights, spacing rhythm, grid/container widths, borders, radii, shadows, icon style, imagery treatment.
4. Inspect interaction evidence: hover/focus/active/disabled/loading/error states, menus, dialogs, tabs, forms, transitions and sticky behavior.
5. Inspect responsive behavior at available widths. Mark unobserved breakpoints as unknown rather than guessing.
6. Separate **observed facts**, **reasonable inferences**, and **unknowns**. Attach screenshot/URL evidence to observations.
7. Summarize reusable patterns and explain why they serve the page's user goal.

## Output
Create a concise research note with:
- Source/provenance and reuse caveats
- Page anatomy and content hierarchy
- Visual language and token candidates
- Interaction/state inventory
- Responsive observations
- Evidence / inference / unknown table
- Recommendations for the target product

## Constraints
- Do not claim pixel measurements unless measured.
- Do not copy source HTML/CSS, text, illustrations, logos, photos, or proprietary assets.
- Do not treat a website's public availability as a license to redistribute its design file or assets.
- Do not download a bulk reference corpus by default.
