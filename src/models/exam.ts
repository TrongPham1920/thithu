export type ExamCatalog = any;
export type SubjectModel = any;
export type ExamModel = any;
export type QuestionModel = any;
export type AnswerMap = any;

export function isQuestionAnswered(question: any, answers: any) {
  return (question.parts || [question]).every((part: any) => Boolean(answers[part.id]));
}

export function isQuestionCorrect(question: any, answers: any) {
  return (question.parts || [question]).every(
    (part: any) => answers[part.id] === part.correctOptionId,
  );
}

export function answeredQuestionCount(exam: any, answers: any) {
  return (
    exam?.questions.filter((question: any) => isQuestionAnswered(question, answers)).length || 0
  );
}

export function calculateExamScore(exam: any, answers: any) {
  const parts = exam.questions.flatMap((question: any) => question.parts || [question]);
  const earnedPoints = parts.filter(
    (part: any) => answers[part.id] === part.correctOptionId,
  ).length;
  return {
    earnedPoints,
    totalPoints: parts.length,
    score: parts.length ? (earnedPoints / parts.length) * 10 : 0,
  };
}

export function countQuestions(subject: any) {
  return subject.exams.reduce((total: number, exam: any) => total + exam.questions.length, 0);
}

export function countExams(subjects: any[]) {
  return subjects.reduce((total: number, subject: any) => total + subject.exams.length, 0);
}
