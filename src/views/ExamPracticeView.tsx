"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { isQuestionAnswered, isQuestionCorrect, answeredQuestionCount } from "@/models/exam";
import { ThemeToggle } from "@/components/ThemeControls";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  RotateCcw,
  Shuffle,
  CircleCheck,
  CircleX,
  ListChecks,
  Library,
  Play,
  Eye,
  ChevronDown,
} from "lucide-react";

export function ExamPracticeView({ controller }: any) {
  const { actions, state } = controller;
  const {
    activeExam,
    answers,
    attemptNo,
    correctCount,
    grading,
    currentIndex,
    currentQuestion,
    isAnswered,
    screen,
    selectedAnswer,
    selectedSubject,
    selectedSubjectId,
    subjects,
    stats,
    weakTopics,
    progressReady,
    storageFailed,
  } = state;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [screen, currentIndex]);
  const {
    chooseAnswer,
    goNext,
    retryActiveExam,
    resumeActiveExam,
    setCurrentIndex,
    setScreen,
    setSelectedSubjectId,
    startExam,
    startAdaptivePractice,
    retryWrongQuestions,
  } = actions;

  if (screen === "result" && activeExam) {
    const percent = Math.round(grading.score * 10);

    return (
      <AppFrame onHome={() => setScreen("home")}>
        <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
          <Card className="border-emerald-400/20 bg-card shadow-none">
            <CardHeader>
              <Badge
                className="bg-emerald-400/15 text-emerald-700 dark:text-emerald-300"
                variant="outline"
              >
                Kết quả lần #{attemptNo - 1}
              </Badge>
              <CardTitle className="text-3xl font-black tracking-normal text-foreground">
                {grading.score.toFixed(2)}{" "}
                <span className="text-lg font-medium text-muted-foreground">/ 10 điểm</span>
              </CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">
                {activeExam.title} · {selectedSubject.name}
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <Progress value={percent} className="[&_[data-slot=progress-indicator]]:bg-primary" />
              <div className="grid grid-cols-3 gap-2">
                <Metric label="Tỉ lệ đúng" value={`${percent}%`} />
                <Metric label="Đúng" value={correctCount} />
                <Metric label="Sai" value={activeExam.questions.length - correctCount} />
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {grading.earnedPoints}/{grading.totalPoints} ý đúng. Mỗi ý đúng tính 1 điểm, quy đổi
                về thang 10.
              </p>
              <div className="grid gap-2">
                <Button
                  onClick={retryWrongQuestions}
                  disabled={correctCount === activeExam.questions.length}
                  className="h-11"
                >
                  <RotateCcw size={16} /> Luyện lại {activeExam.questions.length - correctCount} câu
                  sai
                </Button>
                <Button
                  variant="outline"
                  onClick={startAdaptivePractice}
                  disabled={!progressReady}
                  className="h-11"
                >
                  <Shuffle size={16} /> Luyện chủ đề yếu
                </Button>
                <Button onClick={retryActiveExam} className="h-10">
                  <RotateCcw size={16} /> Làm lại và đảo đề
                </Button>
                <Button
                  onClick={() => setScreen("home")}
                  variant="outline"
                  className="h-10 border-border bg-muted/40 text-foreground hover:bg-muted"
                >
                  Chọn môn hoặc đề khác
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Bảng câu hỏi</CardTitle>
              <p className="text-sm text-muted-foreground">Bấm vào số câu để xem lại chi tiết.</p>
            </CardHeader>
            <CardContent>
              <QuestionGrid
                questions={activeExam.questions}
                answers={answers}
                currentIndex={currentIndex}
                onPick={(index: number) => {
                  setCurrentIndex(index);
                  setScreen("exam");
                }}
              />
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <ReviewList exam={activeExam} answers={answers} />
        </section>
      </AppFrame>
    );
  }

  if (screen === "exam" && activeExam && currentQuestion) {
    const answeredCount = answeredQuestionCount(activeExam, answers);
    const progress = Math.round((answeredCount / activeExam.questions.length) * 100);

    return (
      <AppFrame onHome={() => setScreen("home")}>
        <div className="exam-toolbar mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 pt-6 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => setScreen("home")}>
            <ArrowLeft size={16} /> Chọn đề khác
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Lần {attemptNo - 1}</span>
            <RestartExam onRestart={retryActiveExam} answeredCount={Object.keys(answers).length} />
          </div>
        </div>
        <div className="mobile-attempt-progress px-4 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span>{selectedSubject.name}</span>
            <span>
              {answeredCount}/{activeExam.questions.length} câu
            </span>
          </div>
          <Progress
            value={progress}
            className="mt-2 [&_[data-slot=progress-indicator]]:bg-primary"
          />
        </div>
        <section className="practice-layout mx-auto grid w-full max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_260px] lg:px-8">
          <aside className="practice-navigation space-y-4 lg:sticky lg:top-24 lg:h-fit lg:col-start-2 lg:row-start-1">
            <Card className="border-border bg-card">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                  {selectedSubject.code}
                </Badge>
                <CardTitle className="text-xl text-foreground">{selectedSubject.name}</CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">{activeExam.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress
                  value={progress}
                  className="[&_[data-slot=progress-indicator]]:bg-primary"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tiến độ</span>
                  <span className="font-bold tabular-nums text-foreground">
                    {answeredCount}/{activeExam.questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                    <CircleCheck size={16} />
                    {correctCount} đúng
                  </span>
                  <span className="flex items-center gap-1.5 text-rose-700 dark:text-rose-300">
                    <CircleX size={16} />
                    {answeredCount - correctCount} sai
                  </span>
                </div>
                <details className="question-map">
                  <summary className="mb-3 cursor-pointer text-sm font-semibold">
                    <ListChecks className="mr-1 inline" size={16} /> Bảng câu hỏi
                  </summary>
                  <QuestionGrid
                    compact
                    questions={activeExam.questions}
                    answers={answers}
                    currentIndex={currentIndex}
                    onPick={setCurrentIndex}
                  />
                </details>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>✓ Đúng</span>
                  <span>× Sai</span>
                  <span>— Chưa làm</span>
                </div>
                {answeredCount === activeExam.questions.length && (
                  <Button className="w-full" onClick={() => setScreen("result")}>
                    Xem kết quả <ArrowRight size={16} />
                  </Button>
                )}
              </CardContent>
            </Card>
          </aside>

          <Card
            data-question-id={currentQuestion.id}
            className="question-panel border-border bg-card shadow-none"
          >
            <CardHeader className="gap-3">
              <div className="question-heading flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Badge className="bg-muted text-foreground" variant="secondary">
                    Câu {currentIndex + 1} / {activeExam.questions.length}
                  </Badge>
                  {currentQuestion.requiresImage && (
                    <p
                      role="note"
                      className="mt-3 text-sm leading-6 text-amber-700 dark:text-amber-300"
                    >
                      Câu này cần hình từ đề gốc, nhưng tài liệu nhập chưa kèm ảnh. Đáp án và giải
                      thích được giữ theo tài liệu nguồn.
                    </p>
                  )}
                </div>
                <Badge
                  variant="outline"
                  className={
                    isAnswered
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                      : "border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-300"
                  }
                >
                  {isAnswered ? "Đã trả lời" : "Chọn 1 đáp án"}
                </Badge>
              </div>
              <CardTitle className="whitespace-pre-line text-xl font-semibold leading-8 text-foreground">
                {currentQuestion.prompt}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {currentQuestion.parts ? (
                currentQuestion.parts.map((part: any, index: any) => (
                  <div className="question-part" data-part-id={part.id} key={part.id}>
                    <h3 className="mb-3 font-semibold">
                      {index + 1}. {part.prompt}
                    </h3>
                    <AnswerBlock
                      question={part}
                      selectedAnswer={answers[part.id]}
                      compact={currentQuestion.kind === "matching"}
                      onChoose={(optionId: any) => chooseAnswer(optionId, part.id)}
                    />
                  </div>
                ))
              ) : (
                <AnswerBlock
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  onChoose={chooseAnswer}
                />
              )}

              <div className="question-actions flex items-center justify-between gap-3 border-t border-border pt-5">
                <Button
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  variant="outline"
                  disabled={currentIndex === 0}
                  className="h-10 border-border bg-muted/40 text-foreground hover:bg-muted"
                >
                  <ArrowLeft size={16} /> Câu trước
                </Button>
                <Button
                  onClick={() => {
                    if (
                      currentIndex === activeExam.questions.length - 1 &&
                      answeredCount < activeExam.questions.length
                    )
                      setCurrentIndex(
                        activeExam.questions.findIndex((q: any) => !isQuestionAnswered(q, answers)),
                      );
                    else goNext();
                  }}
                  disabled={!isAnswered}
                  className="h-10 px-5"
                >
                  {currentIndex >= activeExam.questions.length - 1
                    ? answeredCount === activeExam.questions.length
                      ? "Xem kết quả"
                      : "Câu chưa làm"
                    : "Câu tiếp theo"}{" "}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </AppFrame>
    );
  }

  return (
    <AppFrame onHome={() => setScreen("home")}>
      <div className="library-shell">
        <aside className="library-sidebar">
          <div className="sidebar-current">
            <Library size={19} /> Thư viện đề thi
          </div>
          <div className="sidebar-section-title">
            <span>Môn học</span>
            <span>{subjects.length}</span>
          </div>
          {subjects.map((subject: any) => (
            <button
              key={subject.id}
              className={`sidebar-subject ${subject.id === selectedSubjectId ? "selected" : ""}`}
              aria-pressed={subject.id === selectedSubjectId}
              onClick={() => setSelectedSubjectId(subject.id)}
            >
              <span>
                {subject.name}
                <small>{subject.code}</small>
              </span>
            </button>
          ))}
          {activeExam && (
            <button className="sidebar-resume" onClick={resumeActiveExam}>
              <RotateCcw size={18} />
              <span>
                Bài đang làm
                <small>
                  {answeredQuestionCount(activeExam, answers)}/{activeExam.questions.length} câu đã
                  trả lời
                </small>
              </span>
              <ArrowRight size={16} />
            </button>
          )}

          <div className="sidebar-total">
            <BookOpen size={18} />
            <span>
              <strong>{stats.questionCount}</strong> câu hỏi trong thư viện
            </span>
          </div>
        </aside>
        <section className="library-body">
          {storageFailed && (
            <p role="status" className="mb-4 text-sm text-rose-700 dark:text-rose-300">
              Không lưu được tiến độ trên trình duyệt. Tiến độ hiện chỉ giữ trong phiên này.
            </p>
          )}
          {activeExam && (
            <section className="continue-band">
              <span className="continue-icon">
                <Play size={23} />
              </span>
              <div className="continue-copy">
                <p>Bài luyện tập đang chờ bạn</p>
                <h2>{activeExam.title}</h2>
                <div className="continue-progress">
                  <span
                    style={{
                      width: `${(answeredQuestionCount(activeExam, answers) / activeExam.questions.length) * 100}%`,
                    }}
                  />
                </div>
                <small>
                  {answeredQuestionCount(activeExam, answers)}/{activeExam.questions.length} câu đã
                  trả lời
                </small>
              </div>
              <div className="continue-actions">
                <Button onClick={resumeActiveExam}>
                  Tiếp tục làm bài <ArrowRight size={16} />
                </Button>
                <RestartExam
                  onRestart={retryActiveExam}
                  answeredCount={Object.keys(answers).length}
                />
              </div>
            </section>
          )}

          <div className="library-section-title">
            <h2>Chọn môn học</h2>
            <span>{subjects.length} môn học</span>
          </div>
          <div className="subject-tabs" aria-label="Chọn môn học">
            {subjects.map((subject: any) => (
              <button
                key={subject.id}
                aria-pressed={subject.id === selectedSubjectId}
                className={subject.id === selectedSubjectId ? "selected" : ""}
                onClick={() => setSelectedSubjectId(subject.id)}
              >
                <span>{subject.name}</span>
                <small>{subject.code}</small>
              </button>
            ))}
          </div>
          <section className="exam-section">
            <div className="library-section-title">
              <div>
                <p className="library-kicker">{selectedSubject.code}</p>
                <h2>Đề luyện tập</h2>
                <p className="exam-subject-name">
                  {selectedSubject.name}
                  {weakTopics.length > 0 ? ` · ${weakTopics.length} chủ đề cần ôn` : ""}
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={startAdaptivePractice}
                disabled={!progressReady || !selectedSubject.exams.length}
              >
                <Shuffle size={16} /> Luyện 30 câu
              </Button>
            </div>
            {selectedSubject.exams.map((exam: any, index: number) => (
              <article key={exam.id} className="exam-entry">
                <div className="exam-entry-main">
                  <span className="exam-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="exam-entry-copy">
                    <span className="exam-category">ĐỀ THI THỬ</span>
                    <h3>{exam.title}</h3>
                    <div className="exam-metadata">
                      <span>{exam.questions.length} câu hỏi</span>
                      <span>Thời gian tham khảo: {exam.duration || "Không giới hạn"}</span>
                    </div>
                  </div>
                  <Button className="exam-start-button" onClick={() => startExam(exam)}>
                    Bắt đầu làm bài <ArrowRight size={16} />
                  </Button>
                </div>
                <details className="exam-preview">
                  <summary>
                    <Eye size={18} /> <span>Xem trước câu hỏi</span>
                    <small>{Math.min(3, exam.questions.length)} câu mẫu</small>{" "}
                    <ChevronDown size={16} />
                  </summary>
                  <ol>
                    {exam.questions.slice(0, 3).map((q: any, i: number) => (
                      <li key={q.id}>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <p>{q.prompt}</p>
                      </li>
                    ))}
                  </ol>
                </details>
              </article>
            ))}
            {!selectedSubject.exams.length && (
              <p className="empty-library">Môn học này chưa có đề luyện tập.</p>
            )}
          </section>
          <footer className="library-footer">
            <GraduationCap size={18} />
            <span>Thi thử</span>
            <span>
              {stats.subjectCount} môn học / {stats.examCount} đề luyện tập
            </span>
          </footer>
        </section>
      </div>
    </AppFrame>
  );
}

function AppFrame({ children, onHome }: any) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="app-header-inner mx-auto flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={onHome}
            className="flex items-center gap-3 rounded-lg text-left focus-visible:ring-3 focus-visible:ring-primary/50 focus-visible:outline-none"
          >
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap size={20} />
            </span>
            <span>
              <span className="block text-base font-semibold text-foreground">Thi thử</span>
            </span>
          </button>
          <ThemeToggle />
        </div>
      </header>
      {children}
    </main>
  );
}

function RestartExam({ onRestart, answeredCount }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => (answeredCount ? setOpen(true) : onRestart())}>
        <RotateCcw size={16} /> Làm lại đề
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showCloseButton={false}>
          <DialogTitle>Làm lại đề này?</DialogTitle>
          <DialogDescription>
            {answeredCount} đáp án đã chọn sẽ được xóa. Câu hỏi và lựa chọn đáp án sẽ được đảo lại
            cho lần làm mới.
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Tiếp tục bài hiện tại
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                onRestart();
              }}
            >
              <RotateCcw size={16} /> Làm lại
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Metric({ label, value }: any) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-2xl font-black tabular-nums text-foreground">{value}</p>
    </div>
  );
}

function QuestionGrid({ compact = false, questions, answers, currentIndex, onPick }: any) {
  return (
    <div className={`grid gap-2 ${compact ? "grid-cols-5" : "grid-cols-5 sm:grid-cols-10"}`}>
      {questions.map((question: any, index: number) => {
        const answered = isQuestionAnswered(question, answers);
        const correct = isQuestionCorrect(question, answers);
        const isCurrent = index === currentIndex;
        const className = isCurrent
          ? "border-primary bg-primary text-primary-foreground"
          : answered
            ? correct
              ? "border-emerald-400/40 bg-emerald-400/15 text-emerald-700 dark:text-emerald-200"
              : "border-rose-400/40 bg-rose-400/15 text-rose-700 dark:text-rose-200"
            : "border-border bg-muted/40 text-muted-foreground";

        return (
          <button
            key={question.id}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Câu ${index + 1}, ${
              answered ? (correct ? "đúng" : "sai") : "chưa trả lời"
            }`}
            onClick={() => onPick(index)}
            className={`h-9 rounded-lg border text-sm font-black tabular-nums transition-colors focus-visible:ring-3 focus-visible:ring-primary/50 focus-visible:outline-none ${className}`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

function ReviewList({ exam, answers }: any) {
  return (
    <section className="rounded-lg border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-black text-foreground">Xem lại toàn bộ đề</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            So sánh đáp án đã chọn với đáp án đúng.
          </p>
        </div>
        <Badge variant="outline" className="border-border text-muted-foreground">
          {exam.questions.length} câu
        </Badge>
      </div>

      <div className="mt-4 grid gap-3">
        {exam.questions.map((question: any, index: number) => {
          const selected = question.options?.find(
            (option: any) => option.id === answers[question.id],
          );
          const correct = question.options?.find(
            (option: any) => option.id === question.correctOptionId,
          );
          const isCorrect = isQuestionCorrect(question, answers);
          return (
            <article key={question.id} className="rounded-lg border border-border bg-muted/40 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-black text-foreground">Câu {index + 1}</h3>
                <Badge
                  variant="outline"
                  className={
                    isCorrect
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                      : "border-rose-400/40 bg-rose-400/10 text-rose-700 dark:text-rose-300"
                  }
                >
                  {isCorrect ? "Đúng" : "Sai"}
                </Badge>
              </div>
              <p className="mt-2 leading-7 text-foreground">{question.prompt}</p>
              {question.parts ? (
                <div className="mt-4 space-y-4">
                  {question.parts.map((part: any) => (
                    <div className="border-t border-border pt-3" key={part.id}>
                      <h4 className="font-semibold">{part.prompt}</h4>
                      <p className="mt-2 text-sm">
                        Bạn chọn:{" "}
                        {part.options.find((option: any) => option.id === answers[part.id])?.text ||
                          "Chưa chọn"}
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        Đáp án đúng:{" "}
                        {
                          part.options.find((option: any) => option.id === part.correctOptionId)
                            ?.text
                        }
                      </p>
                      <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                        {part.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                    <p className="rounded-lg border border-border bg-card p-3 text-muted-foreground">
                      Bạn chọn:{" "}
                      <strong className="text-foreground">
                        {selected ? selected.text : "Chưa chọn"}
                      </strong>
                    </p>
                    <p className="rounded-lg border border-border bg-card p-3 text-muted-foreground">
                      Đáp án đúng: <strong className="text-foreground">{correct?.text}</strong>
                    </p>
                  </div>
                  <p className="mt-3 whitespace-pre-line rounded-lg border border-border bg-card p-3 text-sm leading-6 text-muted-foreground">
                    {question.explanation}
                  </p>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AnswerBlock({ question, selectedAnswer, onChoose, compact = false }: any) {
  const isAnswered = Boolean(selectedAnswer);
  const correctOption = question.options.find(
    (option: any) => option.id === question.correctOptionId,
  );
  if (compact)
    return (
      <div className="matching-answer">
        <select
          aria-label={`Đáp án cho ${question.prompt}`}
          disabled={isAnswered}
          value={selectedAnswer || ""}
          onChange={(event) => onChoose(event.target.value)}
        >
          <option value="" disabled>
            Chọn đáp án
          </option>
          {question.options.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.text}
            </option>
          ))}
        </select>
        {isAnswered && (
          <p
            role="status"
            aria-live="polite"
            className={
              selectedAnswer === question.correctOptionId
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-rose-700 dark:text-rose-300"
            }
          >
            {selectedAnswer === question.correctOptionId
              ? "✓ Chính xác"
              : `✕ Chưa đúng · Đáp án: ${correctOption.text}`}
          </p>
        )}
        {isAnswered && <p className="text-sm text-muted-foreground">{question.explanation}</p>}
      </div>
    );
  return (
    <>
      {" "}
      <div className="grid gap-3">
        {question.options.map((option: any, optionIndex: number) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.id === question.correctOptionId;
          const stateClass = !isAnswered
            ? "border-border bg-muted/40 text-foreground hover:border-primary/70 hover:bg-primary/10"
            : isCorrect
              ? "border-emerald-400 bg-emerald-400/15 text-emerald-800 dark:text-emerald-100"
              : isSelected
                ? "border-rose-400 bg-rose-400/15 text-rose-800 dark:text-rose-100"
                : "border-border bg-muted/30 text-muted-foreground";

          return (
            <button
              key={option.id}
              disabled={isAnswered}
              onClick={() => onChoose(option.id)}
              className={`answer-choice flex min-h-14 w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors focus-visible:ring-3 focus-visible:ring-primary/50 focus-visible:outline-none disabled:cursor-default ${stateClass}`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black ${
                  isAnswered && isCorrect
                    ? "bg-emerald-300 text-emerald-950"
                    : isAnswered && isSelected
                      ? "bg-rose-300 text-rose-950"
                      : "bg-muted text-foreground"
                }`}
              >
                {String.fromCharCode(65 + optionIndex)}
              </span>
              <span className="flex-1 text-base leading-7">{option.text}</span>
              {isAnswered && isCorrect ? (
                <CircleCheck className="mt-1 shrink-0" size={20} />
              ) : isAnswered && isSelected ? (
                <CircleX className="mt-1 shrink-0" size={20} />
              ) : null}
            </button>
          );
        })}
      </div>
      {isAnswered ? (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-lg border p-4 ${
            selectedAnswer === question.correctOptionId
              ? "border-emerald-400/40 bg-emerald-400/10"
              : "border-rose-400/40 bg-rose-400/10"
          }`}
        >
          <p className="font-bold text-foreground">
            {selectedAnswer === question.correctOptionId ? "Chính xác" : "Chưa đúng"} · Đáp án đúng
            là{" "}
            {String.fromCharCode(
              65 +
                question.options.findIndex((option: any) => option.id === question.correctOptionId),
            )}
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{correctOption?.text}</p>
          <Separator className="my-3 bg-border" />
          <p className="mb-2 text-sm font-semibold text-muted-foreground">Giải thích</p>
          <p className="whitespace-pre-line leading-7 text-foreground">{question.explanation}</p>
        </div>
      ) : null}
    </>
  );
}
