---
name: frontend-build
description: Implement an approved UI plan using the repository's existing frontend stack, conventions, and dependencies. Invoke only after inspection and a scoped plan.
---

# Frontend Build

## Before editing
- Read repository instructions, package scripts, routes, components, tokens, and tests.
- Identify the smallest safe set of files to change.
- Record current behavior and baseline build/test status.
- Confirm whether the task is visual-only or requires behavior/data changes.

## Implementation
1. Reuse existing components and styles; extend rather than replace.
2. Keep components cohesive and props typed.
3. Use semantic HTML and accessible labels.
4. Keep state close to where it is used; avoid unnecessary global state.
5. Implement all relevant states (loading, empty, error, disabled, success).
6. Avoid hard-coded content claims and fake metrics.
7. Avoid new dependencies unless approved and demonstrably necessary.
8. Keep changes incremental and reviewable.

## Repository-specific constraints
- OpenRenderStudio is a React + TypeScript + Tailwind CSS v4 + Vite frontend with Hono/Cloudflare Worker backend, D1 and R2.
- This skill package is development-time only. Do not add design-skill runtime endpoints, database tables, provider calls, API keys, or billing dependencies.
- The current repository README documents OpenRouter as a required AI provider and fal.ai as optional. This design-skills change must not modify that provider architecture or imply that existing render/video features are $0.
- Do not change `src/server/image.ts`, provider configuration, secrets, `schema.sql`, or API contracts for a UI-only task.

## Verification
Run the repository's existing relevant scripts. At baseline, package.json exposes `pnpm build`; do not claim tests exist unless discovered. Report commands and actual exit status.
