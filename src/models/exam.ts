export type ExamCatalog = any;
export type SubjectModel = any;
export type ExamModel = any;
export type QuestionModel = any;
export type AnswerMap = any;

export function countQuestions(subject: any) {
  return subject.exams.reduce((total: number, exam: any) => total + exam.questions.length, 0);
}

export function countExams(subjects: any[]) {
  return subjects.reduce((total: number, subject: any) => total + subject.exams.length, 0);
}
