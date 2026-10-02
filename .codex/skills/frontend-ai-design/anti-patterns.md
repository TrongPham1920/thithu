# Mock Exam UI Anti-Patterns

Avoid these common AI-generated UI mistakes. Treat these as warning signs, not universal bans.

## Generic Product Look

Warning signs:

- the page looks like a SaaS landing page instead of a study tool
- headline says a vague promise instead of naming the practice task
- colors, cards, and icons feel unrelated to answering questions
- decoration competes with the question or explanation

Prefer:

- copy and layout tied to answering, understanding, reviewing, and retrying
- progress and feedback that help the learner know what happened
- restrained styling that keeps long Vietnamese content readable

## Equal Visual Weight

Warning signs:

- every card has the same size and intensity
- primary and secondary buttons compete
- all headings feel equally important
- spacing is identical between unrelated and related sections

Prefer:

- one obvious primary area
- muted secondary information
- spacing based on relationship
- visual hierarchy through size, position, contrast, and density

## Decoration Without Function

Warning signs:

- icons on every card without helping scan
- shadows, glass, gradients, or animations everywhere
- quiz screens are styled like marketing sections without product reason
- background effects make text harder to read

Prefer:

- decoration that supports grouping, state, affordance, or brand
- quieter UI for repeated-use workflows
- animation only for state, feedback, or transition clarity

## New Components Too Early

Warning signs:

- duplicate Button, Card, Modal, Table, Badge, or Input components appear
- a new UI library is added for a small task
- local styling ignores existing tokens/classes/components
- component APIs diverge from the rest of the project

Prefer:

- inspect existing components first
- extend established patterns carefully
- keep new primitives small and justified

## Wrong Density For The Job

Warning signs:

- quiz and review screens feel too spacious for repeated practice
- marketing or editorial spacing is applied to task-heavy areas
- important controls, status, or actions are far from the data they affect
- visuals look polished but lack useful labels, units, or decision context

Prefer:

- density that matches repeated question answering
- clear labels for selected answer, correct answer, score, and progress
- aligned review rows when users need to compare chosen vs correct answers
- enough breathing room for readability, not so much that workflow slows down

## Weak States

Warning signs:

- blank loading areas
- empty state says only "No data"
- errors expose raw technical messages
- disabled and submitting states are unclear
- correct/incorrect feedback is missing or too subtle
- explanation appears before answering in normal quiz mode

Prefer:

- skeletons or contextual loaders
- empty copy with a reason or next action
- safe error copy with retry when possible
- visible disabled, loading, success, and failure states
- unmistakable answer feedback and readable explanations

## Incomplete Output

Warning signs:

- missing imports, types, or translation keys
- UI changed but empty/loading/error states were not considered
- responsive behavior is assumed but not checked
- placeholder comments replace finished behavior

Prefer:

- complete connected changes
- final response with changed files and verification
- smallest useful implementation that actually improves clarity
