import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LiveInterview() {
  const location = useLocation();
  const navigate = useNavigate();

  const interviewData = location.state || {
    interviewType: "technical",
    difficulty: "medium",
    questionCount: "10",
  };

  const [isRecording, setIsRecording] = useState(false);
  const [answer, setAnswer] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const totalQuestions = Number(interviewData.questionCount);

  const formatText = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleSubmit = () => {
    if (!answer.trim()) {
      return;
    }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswer("");
    } else {
      navigate("/results");
    }
  };

  const progress = Math.round(((currentQuestion - 1) / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Live Interview
            </p>

            <h1 className="mt-1 text-base font-semibold text-slate-900">
              {formatText(interviewData.interviewType)} Interview
            </h1>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Question {currentQuestion} of {totalQuestions} ·{" "}
              {formatText(interviewData.difficulty)} difficulty
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[9px] uppercase tracking-wide text-slate-400">
                Time
              </p>

              <p className="text-xs font-semibold text-slate-800">08:42</p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="rounded-md border border-slate-200 px-3 py-1.5 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              End Interview
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          {/* Question Area */}
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500">
                {formatText(interviewData.interviewType)}
              </span>

              <span className="text-[10px] text-slate-400">
                {currentQuestion} / {totalQuestions}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Interviewer asks
              </p>

              <h2 className="mt-2 text-base font-semibold leading-6 text-slate-900">
                {interviewData.interviewType === "behavioral"
                  ? "Tell me about a challenging situation you faced and how you handled it."
                  : interviewData.interviewType === "mixed"
                    ? "Explain a technical decision you made in one of your projects and why you chose that approach."
                    : "Explain the difference between a process and a thread in an operating system."}
              </h2>
            </div>

            {/* Answer */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Your Answer
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Type your response or use voice input.
                  </p>
                </div>

                <span className="text-[10px] text-slate-400">
                  {answer.length} characters
                </span>
              </div>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="mt-3 h-36 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs leading-5 text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
              />
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-[10px] font-medium transition ${
                  isRecording
                    ? "border-red-300 bg-red-50 text-red-600"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isRecording ? "bg-red-500" : "bg-slate-300"
                  }`}
                />

                {isRecording ? "Recording..." : "Start Recording"}
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!answer.trim()}
                className={`rounded-md px-4 py-2 text-[10px] font-semibold transition ${
                  answer.trim()
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                }`}
              >
                {currentQuestion === totalQuestions
                  ? "Finish Interview"
                  : "Submit Answer →"}
              </button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Progress */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Interview Progress
                  </h2>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {currentQuestion - 1} of {totalQuestions} completed
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-700">
                  {progress}%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {Array.from(
                  { length: totalQuestions },
                  (_, index) => index + 1,
                ).map((number) => (
                  <div
                    key={number}
                    className={`flex h-7 items-center justify-center rounded-md text-[9px] font-medium ${
                      number < currentQuestion
                        ? "border border-slate-900 bg-slate-900 text-white"
                        : number === currentQuestion
                          ? "border border-slate-900 bg-slate-50 text-slate-900"
                          : "border border-slate-200 text-slate-400"
                    }`}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </section>

            {/* Interview Details */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="text-xs font-semibold text-slate-900">
                Interview Details
              </h2>

              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Type</span>

                  <span className="text-[10px] font-medium text-slate-700">
                    {formatText(interviewData.interviewType)}
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Difficulty</span>

                  <span className="text-[10px] font-medium text-slate-700">
                    {formatText(interviewData.difficulty)}
                  </span>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">Questions</span>

                  <span className="text-[10px] font-medium text-slate-700">
                    {totalQuestions}
                  </span>
                </div>
              </div>
            </section>

            {/* AI Status */}
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 bg-white">
                  <span className="text-[9px] font-semibold text-slate-600">
                    AI
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-slate-800">
                    AI Interviewer
                  </p>

                  <p className="text-[9px] text-slate-400">Ready</p>
                </div>

                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default LiveInterview;
