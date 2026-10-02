# Artifact Extraction Report

- Source: https://claude.ai/artifact/Pza4QttQ8pcwqHDxBFXwVQ
- Checked: 2026-10-02
- Method: curl with redirects, followed by inspection of response headers and HTML.
- Result: HTTP 403, `cf-mitigated: challenge`, HTML title `Just a moment...`.
- The response contains a Cloudflare challenge, not the artifact, application shell, or login page.
- No question data, embedded application JSON, or artifact API URL was found. The only script endpoint is Cloudflare's challenge platform.
- A separate public URL fetch also failed.
- Authentication and protection mechanisms were not bypassed.

Questions extracted: 0. Questions with answers: 0. Questions missing answers: 0 among extracted records. The actual artifact totals are unknown.

`raw_artifact.md` and `questions.json` were not generated because the artifact content was unavailable. No artifact questions were integrated.

## Separate Local Source

`src/data/it005-exam-02.ts` was transcribed from `/Users/phamtrong/Downloads/IT005_DE_THI_THU_SO_2.md`, not from the artifact URL. It contains 30 main questions, including matching and multipart questions. CRC question 20 was corrected from `010` to `111` after modulo-2 verification.
