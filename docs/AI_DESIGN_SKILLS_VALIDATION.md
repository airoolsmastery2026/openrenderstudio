# AI Design Skills — validation record

## Static validation performed
- Confirmed the target repository is `airoolsmastery2026/openrenderstudio`, public, default branch `main`, and the connected GitHub account has push permission.
- Read root `README.md` and `package.json`.
- Confirmed the documented frontend/backend stack and current provider requirements.
- Confirmed no root `AGENTS.md` was present and repository code search found no existing `.agents/skills` entries before this change.
- Added the skill library on an isolated feature branch; no runtime files or dependency manifests are intended to change.

## Not yet verified
- The skills have not been exercised by Codex, Claude Code, Gemini CLI, or another agent in this repository.
- No application build/test has been run as part of this documentation-only change.
- No live visual reconstruction benchmark has been run.
- No third-party DESIGN.md files have been imported, so no third-party reference redistribution is claimed.

## Required before merge
1. Inspect the pull request diff.
2. Validate each SKILL.md frontmatter and relative path.
3. Confirm only `.agents/skills/**` and `docs/AI_DESIGN_SKILLS*.md` changed.
4. Run `pnpm build` in a checked-out working copy if the repository environment is available.
5. Invoke `$ai-design` on a small non-production sample task and verify that it loads only relevant child skills and does not call paid APIs.
6. Merge only after the above checks are complete.

## Status
Documentation/skill package staged for review. Not declared production-tested or merged.
