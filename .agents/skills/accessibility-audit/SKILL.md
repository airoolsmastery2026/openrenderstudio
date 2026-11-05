---
name: accessibility-audit
description: Audit and improve frontend accessibility, including semantics, keyboard operation, focus, contrast, forms, and reduced motion. Invoke for UI changes or explicit accessibility review.
---

# Accessibility Audit

## Audit checklist
- Semantic landmarks and heading order
- Correct accessible names for controls and icon-only buttons
- Keyboard reachability and logical tab order
- Visible focus indicator and no keyboard traps
- Native elements where practical; ARIA only when needed
- Form labels, instructions, errors and status announcements
- Contrast for text, controls, borders and focus states
- Non-color cues for status and validation
- Alt text appropriate to image purpose; decorative images ignored by assistive tech
- Dialog/menu focus management and Escape behavior
- Reduced-motion support
- Zoom/reflow and touch target usability

## Procedure
1. Inspect changed screens and shared components.
2. Run available automated checks only if already installed.
3. Perform manual keyboard walkthrough.
4. Record severity, affected element, reproduction steps, and recommended fix.
5. Re-test after fixes.

## Reporting
Separate confirmed defects from potential risks. Do not claim WCAG conformance based on an automated scan alone. State the WCAG version/level only when a complete, appropriate evaluation supports it.
