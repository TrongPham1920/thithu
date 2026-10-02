import test from "node:test";
import assert from "node:assert/strict";
import { createAdaptiveExam, getWeakTopics, recordTopicResult } from "../src/models/practice.ts";
import { calculateExamScore, isQuestionAnswered } from "../src/models/exam.ts";
import { it004ReviewExam } from "../src/data/it004-review.ts";
import { it012Exam01 } from "../src/data/it012-exam-01.ts";
import {
  readPracticeProgress,
  savePracticeProgress,
} from "../src/services/practiceProgressService.ts";

const question = (id, topic) => ({
  id,
  topic,
  options: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
  ],
  correctOptionId: "a",
});
const subject = (weakCount, otherCount) => ({
  id: "test",
  exams: [
    {
      questions: [
        ...Array.from({ length: weakCount }, (_, i) => question(`weak-${i}`, "SUBNET")),
        ...Array.from({ length: otherCount }, (_, i) => question(`other-${i}`, "CRC")),
      ],
    },
  ],
});
const weak = { SUBNET: { attempts: 5, wrongCount: 4, correctStreak: 0 } };

test("adaptive exam uses 18 weak / 12 other without duplicates when available", () => {
  const exam = createAdaptiveExam(subject(30, 30), weak);
  assert.equal(exam.questions.length, 30);
  assert.equal(exam.weakQuestionCount, 18);
  assert.equal(new Set(exam.questions.map((q) => q.id)).size, 30);
});

test("small weak pool is filled with other real questions", () => {
  const exam = createAdaptiveExam(subject(4, 40), weak);
  assert.equal(exam.questions.length, 30);
  assert.equal(exam.weakQuestionCount, 4);
});

test("all-weak and empty banks remain valid", () => {
  assert.equal(createAdaptiveExam(subject(30, 0), weak).questions.length, 30);
  assert.equal(createAdaptiveExam(subject(0, 0), {}).questions.length, 0);
  assert.equal(createAdaptiveExam(subject(4, 3), {}).questions.length, 7);
});

test("three consecutive correct responses remove weak priority; error restores it", () => {
  let topics = weak;
  for (let i = 0; i < 3; i++) topics = recordTopicResult(topics, "SUBNET", true);
  assert.equal(getWeakTopics(subject(20, 20), topics).length, 0);
  topics = recordTopicResult(topics, "SUBNET", false);
  assert.equal(topics.SUBNET.correctStreak, 0);
  assert.equal(topics.SUBNET.wrongCount, 5);
  assert.equal(getWeakTopics(subject(20, 20), topics).length, 1);
  assert.equal(weak.SUBNET.correctStreak, 0);
});

test("multipart grading grants partial credit but requires every part to complete", () => {
  const q = { id: "group", parts: [question("a", "SUBNET"), question("b", "SUBNET")] };
  assert.equal(isQuestionAnswered(q, { a: "a" }), false);
  assert.equal(calculateExamScore({ questions: [q] }, { a: "a", b: "b" }).score, 5);
});

test("database source contains 150 unique questions with existing answer options", () => {
  const questions = it004ReviewExam.questions;
  assert.equal(questions.length, 150);
  assert.equal(new Set(questions.map((q) => q.id)).size, 150);
  for (const q of questions) {
    assert.ok(q.prompt);
    assert.equal(q.options.length, 4);
    assert.ok(
      q.options.some((o) => o.id === q.correctOptionId),
      q.id,
    );
    assert.ok(q.explanation);
  }
});

test("computer architecture source contains 60 complete answer keys", () => {
  assert.equal(it012Exam01.questions.length, 60);
  assert.equal(new Set(it012Exam01.questions.map((q) => q.id)).size, 60);
  for (const q of it012Exam01.questions)
    assert.ok(q.options.some((o) => o.id === q.correctOptionId));
  const exam = createAdaptiveExam({ id: "IT012", exams: [it012Exam01] }, {});
  assert.ok(exam.questions.every((q) => !q.requiresImage));
});

test("invalid localStorage data and blocked storage do not crash practice", () => {
  const original = globalThis.localStorage;
  try {
    globalThis.localStorage = {
      getItem: () => "{broken",
      setItem: () => {
        throw Error("blocked");
      },
    };
    assert.deepEqual(readPracticeProgress(), {});
    assert.equal(savePracticeProgress({}), false);
    globalThis.localStorage.getItem = () =>
      JSON.stringify({
        test: {
          bad: { attempts: -1, wrongCount: 10, correctStreak: 2 },
          good: { attempts: 4, wrongCount: 1, correctStreak: 2 },
        },
      });
    assert.deepEqual(readPracticeProgress(), {
      test: { good: { attempts: 4, wrongCount: 1, correctStreak: 2 } },
    });
  } finally {
    if (original === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = original;
  }
});
