# AI Design Skills — validation record

## Static validation performed
- Confirmed the target repository is `airoolsmastery2026/openrenderstudio`, public, default branch `main`, and the connected GitHub account has push permission.
- Read root `README.md` and `package.json`.
- Confirmed the documented frontend/backend stack and current provider requirements.
- Confirmed no root `AGENTS.md` was present and repository code search found no existing `.agents/skills` entries before this change.
- Parsed all 10 `SKILL.md` files from the feature branch: each has YAML frontmatter delimiters, a matching unique `name`, a non-empty `description`, and activation/invocation guidance.
- Inspected the PR changed-file list: exactly 10 skill files plus `.agents/skills/README.md` and two documentation files; no application source, package manifest, lockfile, schema, workflow, or deployment file is included.
- Confirmed the root README still documents the existing OpenRouter key requirement; this PR does not remove or alter that requirement.
- GitHub Actions query for the PR head commit returned zero workflow runs, and the combined commit status returned no status checks. CI is therefore **not demonstrated as passing**.
- Added the skill library on an isolated feature branch; no runtime files or dependency manifests are intended to change.

## Not yet verified
- The skills have not been exercised by Codex, Claude Code, Gemini CLI, or another agent in this repository.
- No application build/test has been run as part of this documentation-only change.
- No live visual reconstruction benchmark has been run.
- No third-party DESIGN.md files have been imported, so no third-party reference redistribution is claimed.

## Required before merge
1. Inspect the PR diff.
2. Run `pnpm build` in a checked-out working copy if the repository environment is available.
3. Invoke `$ai-design` on a small non-production sample task and verify that it loads only relevant child skills and does not call paid APIs.
4. Merge only after the above checks are complete and the PR has the required review/CI evidence.

## Status
Static frontmatter and scope checks passed. CI/build and live agent validation remain unverified. Draft PR remains open and unmerged.
