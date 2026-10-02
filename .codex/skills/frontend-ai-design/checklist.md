# Frontend Review Checklist

Use this checklist before finalizing UI work for the mock exam app.

Use `anti-patterns.md` when the UI still feels generic, over-decorated, low-density, or unfinished.

## Visual Hierarchy

- Is the main learner action obvious?
- Is the current exam state clear?
- Are question, answers, feedback, and explanation easy to scan?
- Are important elements visually stronger than secondary elements?
- Does the page avoid feeling flat or randomly decorated?

## Layout And Spacing

- Are gaps consistent within each component?
- Are section gaps larger than internal component gaps?
- Is the page compact enough for product work?
- Is the page not cramped on mobile?
- Are alignment and grid boundaries consistent?

## Typography

- Are heading sizes consistent with their container?
- Is body text readable?
- Are descriptions useful and not excessive?
- Is localized text clean, natural, and not too thin or cramped?
- Are labels, values, and metadata visually distinct?

## Components

- Are existing components reused before creating new ones?
- Are buttons, icons, inputs, cards, and panels consistent?
- Are badges and status labels consistent?
- Are answer options sized and spaced for long Vietnamese text?
- Are review lists readable enough to compare chosen vs correct answers?

## States

- Not answered state is clear.
- Selected answer state is clear.
- Correct and incorrect answer states are visually distinct.
- Explanation state appears only after answering unless review mode is active.
- Complete/result state shows score and a clear review path.
- Disabled state is clear.
- Active, hover, focus, and selected states are visible.

## Responsive Behavior

- Mobile layout is usable.
- Desktop layout uses space efficiently.
- Text does not overflow buttons, cards, nav items, or controls.
- Progress, answer feedback, explanation, and navigation controls do not collide.

## Code Quality

- No unrelated refactor.
- No unused imports.
- No broken TypeScript types.
- No new library unless requested.
- No duplicated component when an existing component can be extended.
- Sample data stays easy to replace with user-provided questions.

## Final Response

Include:

- Changed files.
- Visual improvements.
- UX improvements.
- Verification command and result.
- Any assumptions or tradeoffs.
