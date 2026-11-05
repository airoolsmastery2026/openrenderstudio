# AI Design Skills — $0-first integration

## Decision

Add a portable, on-demand Agent Skills library under `.agents/skills/`. It is not a runtime feature and is not automatically loaded on every request. The user/agent invokes `$ai-design` or a focused skill when a design task requires it.

## Why this boundary

OpenRenderStudio currently documents a React + TypeScript + Tailwind CSS v4 + Vite client, Hono/Cloudflare Worker backend, D1 and R2. Its existing README requires an OpenRouter key for image/video generation and describes fal.ai as optional. Those existing render-provider paths are outside this change. This skill integration does not make them free, remove them, or route around their billing.

AI Website Cloner remains a development-time research/reconstruction aid: evidence → design specification → implementation plan → build → visual QA. It is not embedded as a permanent runtime service.

## Included skills

1. `ai-design` — workflow orchestrator
2. `design-research` — evidence-based reference analysis
3. `design-system` — DESIGN.md and semantic tokens
4. `ui-architecture` — information architecture and state planning
5. `ui-reconstruction` — screenshot/reference reconstruction
6. `frontend-build` — implementation in the existing stack
7. `motion-interaction` — motion and interaction rules
8. `responsive-design` — responsive layout and verification
9. `accessibility-audit` — accessibility checks
10. `visual-qa` — screenshot comparison and completion gate

## $0-first policy

- No paid model/API calls, hosted inference, subscriptions, or metered image services.
- No new runtime dependencies or API keys.
- Prefer existing project dependencies, browser devtools, local screenshots, static analysis, and manual inspection.
- If a requested step requires a paid service, stop and explain; do not silently fall back to paid usage.
- This policy governs the new skills only. It does not alter the existing OpenRenderStudio image/video provider implementation.

## Reference-data governance

A public DESIGN.md file is not automatically open-licensed. Before importing any reference into the repository, record:
- Original source URL and author/maintainer
- Exact license and source file location
- Whether redistribution and modification are permitted
- Retrieval date and any attribution requirements

Do not vendor the 1,270+ GradientDeck library wholesale. Use selected references as temporary research inputs unless redistribution rights are explicit. Do not reproduce protected site copy, logos, images, or source code.

## Integration rules

- Canonical path: `.agents/skills/`.
- Explicit invocation only; no always-on root AGENTS.md instruction.
- No changes to `src/server/image.ts`, `src/server/tools.ts`, `src/server/index.ts`, `schema.sql`, provider secrets, API routes, or deployment files.
- Do not change dependencies or lockfiles.
- Preserve existing UI and backend behavior.
- If an agent uses another skill discovery path, follow its current official documentation and link/copy the specific skill only when needed.

## Acceptance criteria

- [ ] All 10 skills have valid YAML frontmatter with a unique name and actionable description.
- [ ] Each skill states its activation conditions and scope.
- [ ] No paid API, secret, runtime route, or package dependency is introduced.
- [ ] Existing app architecture and provider paths remain untouched.
- [ ] Instructions require evidence-based research and license checks.
- [ ] UI work requires build/test and visual QA evidence.
- [ ] Changes are reviewed in a pull request before merge.
