<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Agent Instructions

## Skill Loading

This project keeps shared agent skills in these folders:

- `.agents/skills/*/SKILL.md` for cross-agent skills installed by `npx autoskills` and `npx skills`.
- `.claude/skills/*/SKILL.md` for Claude-specific skills, including Playwright CLI.
- `.codex/skills/*/SKILL.md` for local Codex project skills.

Before planning or editing, inspect the available skill names in those folders and read the full `SKILL.md` for every skill that clearly applies to the task. Prefer the most specific skill over broad style skills.

Use these defaults for this project:

- Product/quiz flow work: read `.codex/skills/mock-exam-app/SKILL.md`.
- Next.js work: read `next-best-practices`; read `next-cache-components` only when touching caching, data fetching, or server/client boundaries.
- React component work: read `react-best-practices` and `composition-patterns`.
- TypeScript modeling: read `typescript-advanced-types`.
- Tailwind styling: read `tailwind-css-patterns`.
- UI design or polish: read `frontend-design`, `design-taste-frontend`, and `web-design-guidelines`.
- Visual implementation from a screenshot/reference image: read `image-to-code`.
- SEO or metadata: read `seo`.
- Browser verification, screenshots, or interaction testing: read `.claude/skills/playwright-cli/SKILL.md`.

The `awesome-design-skills` collection is installed under `.agents/skills`. Use only the style skill that matches the requested visual direction, such as `clean`, `minimal`, `modern`, `professional`, `premium`, or `sleek`; do not load the whole collection for ordinary tasks.

If a user explicitly names a skill, read and apply that skill first. If a skill conflicts with these project instructions, follow the project instructions unless the user explicitly asks otherwise.

## Product Direction

The app is a Vietnamese mock exam practice web app. Keep the experience clear, fast, and study-focused:

- Show one question at a time.
- Reveal correctness, the correct answer, and the explanation immediately after the user chooses an option.
- After the final question, show score and review.
- On retry, reset the attempt and rotate/shuffle the exam when possible.

Use Next.js App Router, TypeScript, and Tailwind CSS. Keep the UI polished but practical.

This is a fast prototype phase. Prefer simple code and accept `any` where it speeds up iteration. Keep `npm run typecheck` available to catch basic project errors, but do not over-model data until the user asks for stricter typing.

Use an MVC-like structure as the app grows:

- Model: domain shapes/helpers under `src/models`; raw seed data can stay under `src/data`.
- Service: data access, import adapters, API clients, and future database boundaries under `src/services`.
- Controller: quiz state, answer handling, shuffle/retry, and navigation logic under `src/controllers`.
- View: route views and screen UI under `src/views`; small reusable UI wrappers under `src/components`.
- Backend: future API route handlers live under `src/app/api`, and should call services instead of importing raw data directly.

Do not leave background dev servers running. If you start `npm run dev` or another long-running command for testing, stop it before finishing the turn.
