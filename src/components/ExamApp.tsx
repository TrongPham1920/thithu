"use client";

import { useExamController } from "@/controllers/useExamController";
import { ExamPracticeView } from "@/views/ExamPracticeView";

export default function ExamApp() {
  return <ExamPracticeView controller={useExamController()} />;
}
