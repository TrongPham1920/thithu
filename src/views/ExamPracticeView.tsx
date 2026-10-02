"use client";

import { countQuestions } from "@/models/exam";

export function ExamPracticeView({ controller }: any) {
  const { actions, state } = controller;
  const {
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
    stats,
  } = state;
  const {
    chooseAnswer,
    goNext,
    resetToSubjects,
    setCurrentIndex,
    setScreen,
    setSelectedSubjectId,
    startExam,
  } = actions;

  if (screen === "result" && activeExam) {
    const percent = Math.round((correctCount / activeExam.questions.length) * 100);

    return (
      <main className="min-h-screen bg-[#f6f7f2] text-slate-950">
        <ShellHeader onHome={resetToSubjects} />
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Kết quả lần làm #{attemptNo - 1}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">
                Bạn đúng {correctCount} câu
              </h1>
              <p className="mt-2 text-slate-600">
                {activeExam.title} - {selectedSubject.name}
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <Metric label="Tổng câu" value={activeExam.questions.length} />
                <Metric label="Đúng" value={correctCount} />
                <Metric label="Tỷ lệ" value={`${percent}%`} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  onClick={() => startExam(selectedSubject.exams[0])}
                  className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Làm lại và đảo đề
                </button>
                <button
                  onClick={() => setScreen("home")}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Chọn môn khác
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold">Bảng câu hỏi</h2>
              <div className="mt-4 grid grid-cols-10 gap-2 sm:grid-cols-15">
                {activeExam.questions.map((question: any, index: number) => {
                  const correct = answers[question.id] === question.correctOptionId;
                  return (
                    <button
                      key={question.id}
                      onClick={() => {
                        setCurrentIndex(index);
                        setScreen("exam");
                      }}
                      className={`h-9 rounded-md text-sm font-bold ${
                        correct ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <ReviewList exam={activeExam} answers={answers} />
        </section>
      </main>
    );
  }

  if (screen === "exam" && activeExam && currentQuestion) {
    const progress = Math.round(((currentIndex + 1) / activeExam.questions.length) * 100);
    const correctOption = currentQuestion.options.find(
      (option: any) => option.id === currentQuestion.correctOptionId,
    );

    return (
      <main className="min-h-screen bg-[#f6f7f2] text-slate-950">
        <ShellHeader onHome={resetToSubjects} />
        <section className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              {selectedSubject.code}
            </p>
            <h2 className="mt-1 font-bold">{selectedSubject.name}</h2>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full bg-emerald-600" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Câu {currentIndex + 1} / {activeExam.questions.length}
            </p>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {activeExam.questions.map((question: any, index: number) => {
                const answered = answers[question.id];
                const correct = answered === question.correctOptionId;
                return (
                  <button
                    key={question.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-8 rounded-md text-xs font-bold ${
                      index === currentIndex
                        ? "bg-slate-950 text-white"
                        : answered
                          ? correct
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-rose-100 text-rose-800"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-emerald-700">{activeExam.title}</p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight">Câu {currentIndex + 1}</h1>
              </div>
              <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                {isAnswered ? "Đã trả lời" : "Chưa trả lời"}
              </span>
            </div>

            <p className="mt-5 whitespace-pre-line text-lg font-semibold leading-8 text-slate-900">
              {currentQuestion.prompt}
            </p>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option: any) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.correctOptionId;
                const stateClass = !isAnswered
                  ? "border-slate-200 bg-white hover:border-emerald-400 hover:bg-emerald-50"
                  : isCorrect
                    ? "border-emerald-500 bg-emerald-50 text-emerald-950"
                    : isSelected
                      ? "border-rose-500 bg-rose-50 text-rose-950"
                      : "border-slate-200 bg-slate-50 text-slate-500";

                return (
                  <button
                    key={option.id}
                    disabled={isAnswered}
                    onClick={() => chooseAnswer(option.id)}
                    className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition ${stateClass}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-base leading-7">{option.text}</span>
                  </button>
                );
              })}
            </div>

            {isAnswered ? (
              <div
                className={`mt-6 rounded-lg border p-4 ${
                  selectedAnswer === currentQuestion.correctOptionId
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-rose-200 bg-rose-50"
                }`}
              >
                <p className="font-bold">
                  {selectedAnswer === currentQuestion.correctOptionId ? "Chính xác." : "Chưa đúng."}{" "}
                  Đáp án đúng: {correctOption?.id?.toUpperCase()} - {correctOption?.text}
                </p>
                <p className="mt-2 whitespace-pre-line leading-7 text-slate-700">
                  {currentQuestion.explanation}
                </p>
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40"
                disabled={currentIndex === 0}
              >
                Câu trước
              </button>
              <button
                onClick={goNext}
                disabled={!isAnswered}
                className="rounded-md bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {currentIndex >= activeExam.questions.length - 1 ? "Xem kết quả" : "Câu tiếp"}
              </button>
            </div>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f7f2] text-slate-950">
      <ShellHeader onHome={resetToSubjects} />
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                Thi thử nhiều môn
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Luyện đề, biết đáp án ngay.
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                Chọn môn, làm từng câu, xem giải thích ngay sau khi chọn đáp án, rồi xem lại toàn bộ
                đề sau khi hoàn thành.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2">
              <Metric label="Môn" value={stats.subjectCount} />
              <Metric label="Đề" value={stats.examCount} />
              <Metric label="Câu hỏi" value={stats.questionCount} />
            </div>
          </div>

          <div className="grid gap-4">
            {subjects.map((subject: any) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubjectId(subject.id)}
                className={`rounded-lg border p-5 text-left shadow-sm transition ${
                  selectedSubjectId === subject.id
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-700">{subject.code}</p>
                    <h2 className="mt-1 text-xl font-bold">{subject.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{subject.description}</p>
                  </div>
                  <span className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-700">
                    {subject.exams.length} đề - {countQuestions(subject)} câu
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Đề trong môn
              </p>
              <h2 className="mt-1 text-2xl font-bold">{selectedSubject.name}</h2>
            </div>
            <button
              onClick={() => startExam(selectedSubject.exams[0])}
              className="rounded-md bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Làm ngẫu nhiên
            </button>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {selectedSubject.exams.map((exam: any) => (
              <article key={exam.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">{exam.source}</p>
                <h3 className="mt-1 text-lg font-bold">{exam.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {exam.questions.length} câu - thời gian mẫu {exam.duration}
                </p>
                <button
                  onClick={() => startExam(exam)}
                  className="mt-4 rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Bắt đầu làm đề
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function ShellHeader({ onHome }: any) {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={onHome} className="text-left">
          <p className="text-sm font-black uppercase tracking-wide text-slate-950">Thi thử</p>
          <p className="text-xs font-semibold text-slate-500">Nhiều môn - giải thích tức thì</p>
        </button>
        <span className="rounded-md bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
          Prototype
        </span>
      </div>
    </header>
  );
}

function Metric({ label, value }: any) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}

function ReviewList({ exam, answers }: any) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Xem lại toàn bộ đề</h2>
      <div className="mt-4 grid gap-3">
        {exam.questions.map((question: any, index: number) => {
          const selected = question.options.find(
            (option: any) => option.id === answers[question.id],
          );
          const correct = question.options.find(
            (option: any) => option.id === question.correctOptionId,
          );
          const isCorrect = selected?.id === correct?.id;
          return (
            <article
              key={question.id}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-bold">Câu {index + 1}</h3>
                <span
                  className={`rounded-md px-2 py-1 text-xs font-bold ${
                    isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {isCorrect ? "Đúng" : "Sai"}
                </span>
              </div>
              <p className="mt-2 leading-7 text-slate-800">{question.prompt}</p>
              <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                <p className="rounded-md bg-white p-3">
                  Bạn chọn: <strong>{selected ? selected.text : "Chưa chọn"}</strong>
                </p>
                <p className="rounded-md bg-white p-3">
                  Đáp án đúng: <strong>{correct?.text}</strong>
                </p>
              </div>
              <p className="mt-3 whitespace-pre-line rounded-md bg-white p-3 text-sm leading-6 text-slate-700">
                {question.explanation}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
