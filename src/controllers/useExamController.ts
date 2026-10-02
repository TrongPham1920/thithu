"use client";

import { useMemo, useState } from "react";
import { isQuestionAnswered, isQuestionCorrect, calculateExamScore } from "@/models/exam";
import {
  getCatalogStats,
  getDefaultSubjectId,
  getSubjectById,
  getSubjects,
} from "@/services/examCatalogService";

function shuffleItems(items: any[]) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function prepareExam(exam: any) {
  return {
    ...exam,
    sourceExamId: exam.id,
    questions: shuffleItems(exam.questions).map((question: any) => ({
      ...question,
      ...(question.parts
        ? {
            parts: question.parts.map((part: any) => ({
              ...part,
              options: shuffleItems(part.options),
            })),
          }
        : { options: shuffleItems(question.options) }),
    })),
  };
}

function pickRandomExam(exams: any[]) {
  return exams[Math.floor(Math.random() * exams.length)];
}

export function useExamController() {
  const subjects = getSubjects();
  const [screen, setScreen] = useState("home");
  const [selectedSubjectId, setSelectedSubjectId] = useState(getDefaultSubjectId());
  const [activeExam, setActiveExam] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [attemptNo, setAttemptNo] = useState(1);

  const selectedSubject = useMemo(() => getSubjectById(selectedSubjectId), [selectedSubjectId]);

  const currentQuestion = activeExam?.questions[currentIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isAnswered = currentQuestion ? isQuestionAnswered(currentQuestion, answers) : false;
  const correctCount = activeExam
    ? activeExam.questions.filter((question: any) => isQuestionCorrect(question, answers)).length
    : 0;

  function startExam(exam: any) {
    const owner = subjects.find((subject: any) =>
      subject.exams.some((item: any) => item.id === exam.id),
    );
    if (owner) setSelectedSubjectId(owner.id);
    setActiveExam(prepareExam(exam));
    setAnswers({});
    setCurrentIndex(0);
    setAttemptNo((value) => value + 1);
    setScreen("exam");
  }

  function retryActiveExam() {
    const owner = subjects.find((subject: any) =>
      subject.exams.some((exam: any) => exam.id === activeExam?.sourceExamId),
    );
    const sourceExam = owner?.exams.find((exam: any) => exam.id === activeExam?.sourceExamId);
    if (sourceExam) startExam(sourceExam);
  }

  function resumeActiveExam() {
    const owner = subjects.find((subject: any) =>
      subject.exams.some((exam: any) => exam.id === activeExam?.sourceExamId),
    );
    if (owner) setSelectedSubjectId(owner.id);
    setScreen("exam");
  }

  function startRandomExam() {
    startExam(pickRandomExam(selectedSubject.exams));
  }

  function chooseAnswer(optionId: string, partId?: string) {
    const part = partId
      ? currentQuestion?.parts?.find((item: any) => item.id === partId)
      : currentQuestion;
    if (!part || answers[part.id] || !part.options.some((option: any) => option.id === optionId))
      return;
    setAnswers((value: any) => ({ ...value, [part.id]: optionId }));
  }

  function goNext() {
    if (currentIndex >= activeExam.questions.length - 1) {
      const unanswered = activeExam.questions.findIndex(
        (question: any) => !isQuestionAnswered(question, answers),
      );
      if (unanswered >= 0) {
        setCurrentIndex(unanswered);
        return;
      }
      setScreen("result");
      return;
    }
    setCurrentIndex((value) => value + 1);
  }

  function resetToSubjects() {
    setScreen("home");
    setActiveExam(null);
    setAnswers({});
    setCurrentIndex(0);
  }

  return {
    actions: {
      chooseAnswer,
      goNext,
      resetToSubjects,
      retryActiveExam,
      resumeActiveExam,
      setCurrentIndex,
      setScreen,
      setSelectedSubjectId,
      startExam,
      startRandomExam,
    },
    state: {
      activeExam,
      answers,
      attemptNo,
      correctCount,
      grading: activeExam ? calculateExamScore(activeExam, answers) : null,
      currentIndex,
      currentQuestion,
      isAnswered,
      screen,
      selectedAnswer,
      selectedSubject,
      selectedSubjectId,
      subjects,
      stats: getCatalogStats(),
    },
  };
}
