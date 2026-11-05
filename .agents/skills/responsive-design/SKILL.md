---
name: responsive-design
description: Design and verify robust layouts across mobile, tablet, laptop, and wide desktop viewports. Invoke when a screen must adapt to multiple viewport sizes.
---

# Responsive Design

## Procedure
1. Inventory supported viewport sizes from the product or user brief. If none exist, propose representative widths and label them as test targets, not official breakpoints.
2. Inspect current CSS breakpoints and container conventions before adding any.
3. Design content reflow, not merely shrinkage: columns stack, navigation adapts, controls remain reachable, and hierarchy stays intact.
4. Prevent horizontal overflow, clipped controls, unreadable text, and overlapping fixed elements.
5. Preserve touch-friendly target sizes and spacing.
6. Handle long text, localization, empty data, large images, and zoom.
7. Test at narrow mobile, typical mobile, tablet, desktop, and wide desktop where tooling permits.

## Output
Responsive behavior table by viewport, issues found, files changed, and screenshot evidence.

## Guardrails
- Do not invent device-specific breakpoints without evidence.
- Do not hide essential functionality on mobile.
- Do not use fixed pixel heights for content-heavy regions unless required by the design.
