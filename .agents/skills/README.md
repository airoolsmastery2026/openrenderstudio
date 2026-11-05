# On-demand AI Design Skills

This directory contains portable, provider-neutral Agent Skills for design research and frontend UI work.

## How to invoke
Ask your coding agent to use a named skill, for example:
- `$ai-design` — orchestrate the full workflow
- `$design-research` — analyze a reference
- `$design-system` — define DESIGN.md and tokens
- `$ui-reconstruction` — rebuild a reference-informed screen
- `$frontend-build` — implement an approved plan
- `$visual-qa` — inspect screenshots and regressions

Only load the relevant skill(s) for the current task. Do not inject all instructions into every prompt.

## Portability
The canonical files live under `.agents/skills/`. Agents differ in discovery conventions. If an agent requires a different directory, expose/copy the specific skill there using that agent's documented mechanism; keep this canonical copy as the source of truth. Do not install an npm package or add a runtime dependency merely to read Markdown instructions.

## Cost and network policy
The skill files themselves make no network calls and require no API keys. The workflow forbids paid API calls. Browser access or local screenshot tooling is optional and must not be treated as a hidden paid dependency.

## Scope
Development-time instructions only. No changes to the OpenRenderStudio runtime, provider architecture, API, database, or deployment configuration.
