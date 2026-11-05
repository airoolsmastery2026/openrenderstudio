---
name: design-system
description: Define, document, and maintain a portable DESIGN.md and implementation-ready design tokens for a product. Invoke when a UI needs a coherent visual system or an existing system needs extension.
---

# Design System

## Inspect first
Read existing theme files, CSS variables, Tailwind configuration, component primitives, typography setup, and any existing DESIGN.md. Preserve established conventions unless the user approves a redesign.

## Define
1. Design intent: product personality, audience, primary tasks, density, and tone.
2. Color roles: canvas, surface, elevated surface, text, muted text, border, primary, secondary, success, warning, danger, focus. Define light/dark only when required.
3. Typography: font stack, scale, line heights, weights, letter spacing, long-form readability.
4. Spacing: a consistent scale and layout/container rules.
5. Shape/elevation: radii, borders, shadows, layering.
6. Components: buttons, links, inputs, selects, cards, navigation, dialogs, tables, alerts, empty/loading/error states.
7. Interaction: focus, hover, pressed, disabled, loading, validation, reduced-motion behavior.
8. Responsive rules: container changes, navigation collapse, content reflow, touch target sizing.

## Output contract
- `DESIGN.md`: human/agent-readable rationale and rules.
- Token mapping to the project's existing CSS variables/theme system.
- Component usage and anti-patterns.
- Explicitly label any estimated values as proposed, not measured.
- Keep tokens semantic; avoid scattering raw hex values through components.

## Quality rules
- Meet readable contrast; verify text and interactive states.
- Do not use color as the only signal.
- Avoid arbitrary one-off spacing and inconsistent radii.
- Do not add fonts or icon packages without checking existing dependencies and license/size implications.
- Do not invent brand guidelines. Mark recommendations as proposals.
