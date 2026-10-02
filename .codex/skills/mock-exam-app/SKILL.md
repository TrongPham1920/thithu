---
name: mock-exam-app
description: Build and maintain this Vietnamese mock exam practice app. Use when editing exam data models, quiz flow, review screens, retry/shuffle behavior, Next.js routes, React components, or Tailwind UI in this repository.
---

# Mock Exam App

Use this skill for project-specific product and implementation decisions in this Next.js app.

## Product Shape

The app is a Vietnamese mock exam practice tool:

- The learner answers one question at a time.
- Immediately after an answer is chosen, show whether it is correct, the correct answer, and the explanation.
- The learner can continue through the whole exam after seeing each explanation.
- After the final question, show the score and a review of every question.
- Retry should reset the attempt and rotate the exam when possible by changing the exam set, shuffling questions, or shuffling answer options.

Prefer Vietnamese UI copy. Keep wording short, natural, and encouraging without sounding like a marketing page.

## Implementation Defaults

- Use Next.js App Router, TypeScript, React, and Tailwind CSS.
- Keep route files in `src/app` focused on page assembly.
- Use an MVC-like fullstack structure: raw seed data in `src/data`, domain helpers in `src/models`, data/API/database boundaries in `src/services`, quiz state and flow in `src/controllers`, route views in `src/views`, reusable UI shells in `src/components`.
- Future backend route handlers should live under `src/app/api` and call services rather than importing raw data directly.
- This is a fast prototype phase. `any` is acceptable for data and props when it keeps implementation moving.
- Use simple exam content fields such as question id, prompt, options, correct option id, and explanation.
- Keep sample/mock questions easy to replace with user-provided content.
- Avoid backend/database work unless the user asks for persistence, import, accounts, or admin management.

## Quiz Behavior

- Store the user's selected answer per question so review can compare chosen vs correct.
- Do not allow changing an answered question unless the requested flow explicitly supports it.
- Reveal explanation only after an option is selected.
- Make next/review/retry actions obvious and reachable on mobile.
- Preserve answer identity when shuffling options; do not rely on array index as the correct answer.
- Treat unanswered questions explicitly if the user later asks for skipping.

## UI Direction

- Favor a clean study interface over a landing page.
- Use stable layouts for question cards, answer buttons, progress, and result summaries so feedback does not shift the page awkwardly.
- Use clear state colors: correct, incorrect, selected, neutral, and disabled.
- Make explanations readable with enough line height and contrast.
- Keep score/review dense enough to scan, but not cramped on mobile.

For visual polish or critique, also read `.codex/skills/frontend-ai-design/SKILL.md`.

## Verification

Run the smallest useful checks for the change:

```bash
npm run lint
npm run build
```

For UI changes, run the dev server and inspect the affected route in a browser or with Playwright when available.

Do not leave dev servers running in the background. Stop `npm run dev` or any long-running verification server before finalizing.
