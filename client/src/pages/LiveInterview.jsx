import { useState } from "react";
import Navbar from "../components/Navbar";

function LiveInterview() {
  const [isRecording, setIsRecording] = useState(false);

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
              Technical Interview
            </h1>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Question 1 of 10 · Medium difficulty
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
              className="rounded-md border border-slate-200 px-3 py-1.5 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              End Interview
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          {/* Question */}
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500">
                Technical
              </span>

              <span className="text-[10px] text-slate-400">
                Question 1 / 10
              </span>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Interviewer asks
              </p>

              <h2 className="mt-2 text-base font-semibold leading-6 text-slate-900">
                Explain the difference between a process and a thread in an
                operating system.
              </h2>
            </div>

            {/* Answer Area */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Your Answer
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Speak naturally and explain your answer clearly.
                  </p>
                </div>

                <span className="text-[10px] text-slate-400">
                  0 / 500 words
                </span>
              </div>

              <textarea
                placeholder="Type your answer here..."
                className="mt-3 h-36 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
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
                className="rounded-md bg-slate-900 px-4 py-2 text-[10px] font-semibold text-white hover:bg-slate-800"
              >
                Submit Answer →
              </button>
            </div>
          </section>

          {/* Right Panel */}
          <aside className="space-y-4">
            {/* Interview Progress */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xs font-semibold text-slate-900">
                    Interview Progress
                  </h2>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    1 of 10 questions completed
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-700">
                  10%
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[10%] rounded-full bg-slate-900" />
              </div>

              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <div
                    key={number}
                    className={`flex h-7 items-center justify-center rounded-md text-[9px] font-medium ${
                      number === 1
                        ? "border border-slate-900 bg-slate-900 text-white"
                        : "border border-slate-200 text-slate-400"
                    }`}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </section>

            {/* Interview Tips */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="text-xs font-semibold text-slate-900">
                Interview Tips
              </h2>

              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-[10px] font-medium text-slate-700">
                    Be structured
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                    Start with the main concept, then explain details.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-700">
                    Give examples
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                    Use a simple example whenever it helps clarify your answer.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-700">
                    Think before answering
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                    Take a few seconds to organize your thoughts.
                  </p>
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

                  <p className="text-[9px] text-slate-400">
                    Listening and analyzing
                  </p>
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
