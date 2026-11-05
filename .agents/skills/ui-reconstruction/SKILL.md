---
name: ui-reconstruction
description: Reconstruct a UI from a permitted screenshot or website reference using measured evidence and the target project's own components and assets. Invoke for reference-based UI cloning or visual matching.
---

# UI Reconstruction

## Required inputs
Reference screenshot/URL, target route, viewport dimensions, available assets, and required behaviors. Ask for missing essential inputs rather than guessing.

## Procedure
1. Capture the target project's current screen at the same viewport as the reference.
2. Analyze geometry: page frame, content width, columns, section heights, alignment, spacing and image aspect ratios.
3. Analyze typography, colors, surfaces, borders, radii, shadows and iconography.
4. Build a semantic layout/component map before coding.
5. Recreate structure and visual hierarchy with the project's existing stack.
6. Use original, licensed, or user-provided assets. If none are available, use neutral placeholders and label them.
7. Implement responsive behavior and all visible states relevant to the task.
8. Compare screenshots at matching viewport sizes; fix the largest perceptual differences first.

## Fidelity priorities
1. Overall geometry and hierarchy
2. Typography and line wrapping
3. Color and surface relationships
4. Spacing and alignment
5. Image crop/aspect ratio
6. Borders, shadows, radii and micro-details

## Legal and technical boundaries
- Recreate general layout patterns and interaction concepts; do not reproduce protected copy, logos, proprietary images, or source code without permission.
- Never claim pixel-perfect parity without a same-viewport comparison.
- Preserve target project architecture and existing behavior.
