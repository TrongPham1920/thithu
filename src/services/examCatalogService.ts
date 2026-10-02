import { subjects } from "@/data/exams";
import { countExams, countQuestions } from "@/models/exam";

export function getSubjects() {
  return subjects;
}

export function getDefaultSubjectId() {
  return subjects[0]?.id;
}

export function getSubjectById(subjectId: string) {
  return subjects.find((subject: any) => subject.id === subjectId) || subjects[0];
}

export function getCatalogStats() {
  return {
    subjectCount: subjects.length,
    examCount: countExams(subjects),
    questionCount: subjects.reduce((sum: number, subject: any) => sum + countQuestions(subject), 0),
  };
}
