---
name: motion-interaction
description: Design and implement purposeful UI motion, transitions, and interaction feedback with accessible reduced-motion alternatives. Invoke only when motion or interaction polish is requested or clearly required.
---

# Motion & Interaction

## Principles
- Motion communicates cause/effect, hierarchy, continuity, and state.
- Prefer short, restrained transitions; avoid animation that delays task completion.
- Do not add motion solely for decoration.
- Respect `prefers-reduced-motion`; provide a meaningful reduced or no-motion path.

## Specify each interaction
For every animated element record: trigger, property, duration, easing, delay, interruption behavior, and reduced-motion alternative.

## Implementation
- Prefer CSS transitions/animations and existing project utilities.
- Animate transform/opacity where possible; avoid layout-thrashing properties.
- Preserve keyboard and pointer equivalence.
- Provide visible focus and state feedback.
- Avoid autoplaying audio/video and flashing effects.
- Do not add animation libraries without approval and a demonstrated need.

## Verification
Test hover, focus-visible, active, disabled, loading, open/close, keyboard operation, and reduced-motion behavior.
