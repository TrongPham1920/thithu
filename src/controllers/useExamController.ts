"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { shuffle, createAdaptiveExam, getWeakTopics, recordTopicResult } from "@/models/practice";
import {
  getPracticeProgress,
  getServerPracticeProgress,
  subscribePracticeProgress,
  subscribeReady,
  getClientReady,
  getServerReady,
  savePracticeProgress,
} from "@/services/practiceProgressService";
import { isQuestionAnswered, isQuestionCorrect, calculateExamScore } from "@/models/exam";
import {
  getCatalogStats,
  getDefaultSubjectId,
  getSubjectById,
  getSubjects,
} from "@/services/examCatalogService";

function shuffleItems(items: any[]) {
  return shuffle(items);
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
  const topicProgress = useSyncExternalStore(
    subscribePracticeProgress,
    getPracticeProgress,
    getServerPracticeProgress,
  );
  const progressReady = useSyncExternalStore(subscribeReady, getClientReady, getServerReady);
  const [storageFailed, setStorageFailed] = useState(false);

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
    setSelectedSubjectId(exam.subjectId || owner?.id || selectedSubjectId);
    setActiveExam(
      prepareExam({ ...exam, subjectId: exam.subjectId || owner?.id || selectedSubjectId }),
    );
    setAnswers({});
    setCurrentIndex(0);
    setAttemptNo((value) => value + 1);
    setScreen("exam");
  }

  function retryActiveExam() {
    if (activeExam?.mode === "adaptive") {
      const subject = getSubjectById(activeExam.subjectId);
      startExam(createAdaptiveExam(subject, topicProgress[subject.id] || {}));
      return;
    }
    if (activeExam?.mode === "wrong") {
      startExam(activeExam);
      return;
    }
    const owner = subjects.find((subject: any) =>
      subject.exams.some((exam: any) => exam.id === activeExam?.sourceExamId),
    );
    const sourceExam = owner?.exams.find((exam: any) => exam.id === activeExam?.sourceExamId);
    if (sourceExam) startExam(sourceExam);
  }

  function resumeActiveExam() {
    if (activeExam?.subjectId) {
      setSelectedSubjectId(activeExam.subjectId);
      setScreen("exam");
      return;
    }
    const owner = subjects.find((subject: any) =>
      subject.exams.some((exam: any) => exam.id === activeExam?.sourceExamId),
    );
    if (owner) setSelectedSubjectId(owner.id);
    setScreen("exam");
  }

  function startRandomExam() {
    startExam(pickRandomExam(selectedSubject.exams));
  }

  function startAdaptivePractice() {
    const subject =
      activeExam && screen !== "home" ? getSubjectById(activeExam.subjectId) : selectedSubject;
    const exam = createAdaptiveExam(subject, topicProgress[subject.id] || {});
    if (exam.questions.length) startExam(exam);
  }

  function retryWrongQuestions() {
    const questions = activeExam.questions.filter((q: any) => !isQuestionCorrect(q, answers));
    if (!questions.length) return;
    startExam({
      id: `wrong-${activeExam.sourceExamId}`,
      mode: "wrong",
      subjectId: activeExam.subjectId,
      title: "Luyện lại câu sai",
      source: activeExam.title,
      duration: null,
      questions,
    });
  }

  function chooseAnswer(optionId: string, partId?: string) {
    if (!progressReady) return;
    const part = partId
      ? currentQuestion?.parts?.find((item: any) => item.id === partId)
      : currentQuestion;
    if (!part || answers[part.id] || !part.options.some((option: any) => option.id === optionId))
      return;
    const nextAnswers = { ...answers, [part.id]: optionId };
    setAnswers(nextAnswers);
    if (
      isQuestionAnswered(currentQuestion, nextAnswers) &&
      progressReady &&
      !currentQuestion.requiresImage
    ) {
      const subjectId = activeExam.subjectId;
      const nextProgress = {
        ...topicProgress,
        [subjectId]: recordTopicResult(
          topicProgress[subjectId] || {},
          currentQuestion.topic,
          isQuestionCorrect(currentQuestion, nextAnswers),
        ),
      };
      setStorageFailed(!savePracticeProgress(nextProgress));
    }
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
      startAdaptivePractice,
      retryWrongQuestions,
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
      weakTopics: getWeakTopics(selectedSubject, topicProgress[selectedSubjectId] || {}),
      progressReady,
      storageFailed,
    },
  };
}
