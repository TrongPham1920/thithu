# Practice And Imports

## Available Subjects

- IT005: 2 exams, 30 main questions each. Exam 2 has 44 answer parts. CRC question 20 in exam 2 was corrected to `111` after modulo-2 verification.
- IT004: 150 questions imported from the literal TypeScript data block in `sources/IT004_ON_TAP_WEB_150_CAU.md`. Question text, options, answers and explanations are preserved; IDs are prefixed with `it004-`.
- IT012: 60 questions imported from `sources/IT012_TRAC_NGHIEM_FORMAT_WEB_GIONG_MAU.md`. The earlier filename was not found; the supplied replacement was imported using the TypeScript AST. Source questions and answers were preserved and IDs prefixed with `it012-`.

IT012 source questions that refer to missing images are marked with `requiresImage`. They show a warning in the full exam, are excluded from adaptive practice, and do not affect topic mastery. Original image files are needed to complete these questions; no diagrams were invented.

The source files supply the answer keys. Structural validation checks counts, unique IDs, options, and answer references; it does not certify the academic correctness of all source answers.

## Adaptive Practice

Progress is stored per subject and topic in browser localStorage under `thi-thu:topic-progress:v1`. It is specific to that browser, not an account or backend record. Corrupt or inaccessible storage is handled safely; blocked writes leave progress in memory and show a warning.

Each completed main question records one topic outcome. A multipart question is correct only when all parts are correct, while the final grade still awards each correct part separately. Returning to a previously answered question does not record it again.

Topics with previous mistakes and fewer than three consecutive correct responses are prioritized. Three consecutive correct responses remove weak priority; another mistake restores it.

Adaptive exams select up to 30 existing questions without replacement. Target allocation is 60% from weak topics and 40% from other topics, weighted by error frequency. If either pool is too small, the other pool fills the remainder. With no weak-topic data, questions are sampled from the whole subject bank. No new questions are generated.

The result screen supports practicing only the wrong questions. If any part of a multipart question is wrong, the whole parent question is included. Retry clears attempt answers, retains topic progress, and reshuffles choices.

## Sources And Verification

Raw Markdown files under `docs/sources` are excluded from formatting to preserve supplied material.

The earlier IT005 Markdown file was no longer available at its Downloads path during this documentation pass; its imported data remains in `src/data/it005-exam-02.ts`. Artifact retrieval is documented separately in `artifact-extraction-report.md`.

Run `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build`. The default production build exports `out` for Render Static Sites; see `deployment.md`.
