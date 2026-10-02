"use client";

import { useMemo, useState } from "react";
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
    questions: shuffleItems(exam.questions).map((question: any) => ({
      ...question,
      options: shuffleItems(question.options),
    })),
  };
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
  const isAnswered = Boolean(selectedAnswer);
  const correctCount = activeExam
    ? activeExam.questions.filter(
        (question: any) => answers[question.id] === question.correctOptionId,
      ).length
    : 0;

  function startExam(exam: any) {
    setActiveExam(prepareExam(exam));
    setAnswers({});
    setCurrentIndex(0);
    setAttemptNo((value) => value + 1);
    setScreen("exam");
  }

  function chooseAnswer(optionId: string) {
    if (!currentQuestion || answers[currentQuestion.id]) return;
    setAnswers((value: any) => ({ ...value, [currentQuestion.id]: optionId }));
  }

  function goNext() {
    if (currentIndex >= activeExam.questions.length - 1) {
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
      setCurrentIndex,
      setScreen,
      setSelectedSubjectId,
      startExam,
    },
    state: {
      activeExam,
      answers,
      attemptNo,
      correctCount,
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
