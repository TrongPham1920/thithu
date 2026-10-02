---
name: frontend-ai-design
description: Plan and review UI design quality for this Vietnamese mock exam app. Use for visual direction, quiz screen polish, answer feedback states, review/result screens, responsive layout, spacing, typography, and final UI critique.
---

# Frontend AI Design

Use this as the design-quality layer for the mock exam app. It helps the agent make UI decisions deliberately before coding and review the result after coding.

## Skill Routing

- Use this skill for design direction, UX hierarchy, visual taste, critique, and final review.
- Use `.codex/skills/mock-exam-app/SKILL.md` when actual quiz behavior, data shape, route, component, or Tailwind code must be edited.
- Read `checklist.md` before finalizing UI work.
- Read `anti-patterns.md` when the UI feels generic, over-decorated, unclear, low-density, or unfinished.
- Read `references.md` only when improving this skill or explaining where its rules come from.

## Required Process

Before proposing or editing frontend UI:

1. Inspect the existing route, feature, layout, shared components, theme, and data shape.
2. Identify the page purpose and the main learner action.
3. Identify the current quiz state: not answered, answered correct, answered incorrect, complete, review, or retry.
4. Decide the information hierarchy before coding.
5. Note the intended visual improvement in one or two sentences when the change is substantial.
6. If code changes are needed, switch to `mock-exam-app` or local agent rules.
7. Avoid unrelated refactors.

## Design Decision Order

Use this order when the best UI direction is unclear:

1. Learning task: answer, understand the explanation, continue, review, or retry.
2. Primary action: choose an option, go next, view results, or start again.
3. Feedback clarity: selected answer, correct answer, correctness, and explanation must be unmistakable.
4. Existing system: reuse current components, tokens, layout patterns, and Tailwind conventions.
5. Responsive behavior: mobile should be comfortable for long question text and answer options.
6. Polish: simplify, align, tighten, and improve legibility before adding decoration.

Before finalizing:

1. Read `checklist.md`.
2. Check visual hierarchy, spacing, typography, responsive behavior, UI states, and component consistency.
3. Run the closest useful verification command.
4. In the final response, mention changed files, visual changes, UX improvements, assumptions, and verification.

## Design Rules

- Make the UI feel intentional, readable, consistent, and product-ready.
- Avoid generic AI frontend patterns: vague hero sections, random purple/blue gradients, weak headings, equal spacing everywhere, too many shadows, unclear primary actions, and decorative UI that does not improve studying.
- Match density, spacing, and visual emphasis to a repeated study workflow rather than a marketing page.
- Let project components and the current quiz state decide exact screen conventions.
- Keep primary actions, state, and content hierarchy clear before adding decorative styling.
- Use motion only when it clarifies state changes, loading, transitions, or focus.
- Prefer calm neutral surfaces with strong state contrast for correct and incorrect answers.
- Do not let explanation panels, progress text, or result cards push controls into awkward positions on mobile.

## References

Use the files named in Skill Routing as needed.
