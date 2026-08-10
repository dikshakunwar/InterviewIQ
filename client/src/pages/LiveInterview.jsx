import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function LiveInterview() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          {/* Interview Header */}
          <div className="flex flex-col justify-between gap-5 border-b border-slate-800 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Live Interview
              </p>

              <h1 className="mt-2 text-xl font-semibold">Frontend Developer</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Question
                </p>

                <p className="mt-1 text-sm font-semibold">04 / 10</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Time
                </p>

                <p className="mt-1 text-sm font-semibold">04:32</p>
              </div>
            </div>
          </div>

          {/* Main Interview Area */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Question */}
            <section className="rounded-3xl border border-slate-800 bg-slate-900 p-7 lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
                  Technical Question
                </span>

                <span className="text-xs text-slate-500">Question 4</span>
              </div>

              <h2 className="mt-8 max-w-3xl text-2xl font-semibold leading-9 sm:text-3xl">
                How would you improve the performance of a React application?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                Explain the techniques you would use and why they would help
                improve the application's performance.
              </p>

              {/* Answer Area */}
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-300">
                    Your Answer
                  </p>

                  <span className="text-xs text-slate-600">
                    Voice input enabled
                  </span>
                </div>

                <textarea
                  rows="7"
                  placeholder="Type your answer here..."
                  className="mt-4 w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-slate-600"
                />

                {/* Voice Controls */}
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800">
                      ●
                    </span>
                    Start Recording
                  </button>

                  <span className="text-xs text-slate-600">
                    Your response will be analyzed after submission.
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                >
                  Skip Question
                </button>

                <button
                  type="button"
                  className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Submit Answer
                </button>
              </div>
            </section>

            {/* Interview Sidebar */}
            <aside className="space-y-6">
              {/* Progress */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Interview Progress</p>

                  <span className="text-xs text-slate-500">40%</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[40%] rounded-full bg-white" />
                </div>

                <div className="mt-6 grid grid-cols-5 gap-2">
                  <span className="flex h-8 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-950">
                    1
                  </span>

                  <span className="flex h-8 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-950">
                    2
                  </span>

                  <span className="flex h-8 items-center justify-center rounded-lg bg-white text-xs font-semibold text-slate-950">
                    3
                  </span>

                  <span className="flex h-8 items-center justify-center rounded-lg border border-slate-600 text-xs font-semibold text-slate-400">
                    4
                  </span>

                  <span className="flex h-8 items-center justify-center rounded-lg border border-slate-800 text-xs font-semibold text-slate-600">
                    5
                  </span>
                </div>
              </div>

              {/* Interview Info */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold">Interview Details</p>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Type</span>

                    <span className="text-xs font-medium text-slate-300">
                      Technical
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Difficulty</span>

                    <span className="text-xs font-medium text-slate-300">
                      Intermediate
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Questions</span>

                    <span className="text-xs font-medium text-slate-300">
                      10
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Status */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800">
                    <span className="text-xs font-bold">AI</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">AI Interviewer</p>

                    <p className="mt-1 text-xs text-slate-500">Ready</p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Your responses will be evaluated for relevance, completeness,
                  technical accuracy, and communication.
                </p>
              </div>
            </aside>
          </div>

          {/* Exit */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/dashboard"
              className="text-xs font-medium text-slate-500 transition hover:text-slate-300"
            >
              Exit Interview
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default LiveInterview;
