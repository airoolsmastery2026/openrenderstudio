---
name: ai-design
description: On-demand design workflow orchestrator for researching references, defining a coherent design system, planning UI, implementing it, and validating responsive accessible interfaces. Invoke only when the user explicitly requests design work, a UI build, redesign, or visual audit.
---

# AI Design — On-demand orchestrator

## Activation
Use this skill only when the user asks for design/UI work or explicitly invokes `$ai-design`. Do not load it for unrelated code tasks. Do not run automatically at every prompt.

## Non-negotiable constraints
- $0-first: no paid API, hosted inference endpoint, subscription, or metered service. Do not add API keys or billing paths.
- Prefer local tools, browser devtools, static analysis, screenshots, and existing project dependencies.
- Do not add dependencies unless necessary and approved. Prefer the existing stack.
- Preserve the repository's current architecture, routes, components, naming, and data contracts. Inspect before editing.
- Do not silently replace a working design system. Extend it.
- Never fabricate brand facts, product claims, customer logos, metrics, testimonials, ratings, or source measurements.
- Treat reference sites as inspiration/evidence, not permission to copy protected assets, text, source code, or distinctive branding.
- Do not fetch or redistribute third-party DESIGN.md collections wholesale. Record source, author, license, date, and permitted use for each imported reference.
- No runtime integration into OpenRenderStudio. These are development-time agent instructions only.

## Workflow
1. **Scope** — identify target route/screen, user goal, acceptance criteria, and whether this is new UI or modification.
2. **Inspect** — read project instructions, package scripts, existing routes/components/tokens, and relevant tests. Capture a baseline before changing code.
3. **Research** — invoke `design-research` only if references or an existing site must be analyzed.
4. **System** — invoke `design-system` to define or extend tokens and component rules.
5. **Plan** — invoke `ui-architecture` and `ui-reconstruction` as relevant. Write a short implementation plan before editing.
6. **Build** — invoke `frontend-build`; use `motion-interaction` and `responsive-design` only when needed.
7. **Verify** — invoke `accessibility-audit` and `visual-qa`. Run existing tests/build and compare before/after screenshots when possible.
8. **Report** — list changed files, checks actually run, results, known gaps, and any license/provenance caveats.

## Invocation map
- `design-research`: inspect a live website or screenshot.
- `design-system`: create/update DESIGN.md, tokens, typography, color, spacing and component rules.
- `ui-architecture`: plan page hierarchy, navigation, components and states.
- `ui-reconstruction`: rebuild a reference-informed screen without copying protected content/assets.
- `frontend-build`: implement approved UI changes in the existing stack.
- `motion-interaction`: define purposeful transitions and interaction states.
- `responsive-design`: implement/test viewport behavior.
- `accessibility-audit`: keyboard, semantics, contrast, focus, reduced motion.
- `visual-qa`: screenshot comparison, regression and design review.

## Stop conditions
Stop and ask before proceeding if requirements conflict, the reference's reuse rights are unclear for redistribution, a change would alter data/API contracts, a paid service is required, or the task cannot be verified safely. Never claim a check passed unless it was run.
