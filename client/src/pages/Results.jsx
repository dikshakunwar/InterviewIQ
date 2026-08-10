import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Results() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Interview Results
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Your interview performance
              </h1>

              <p className="mt-3 text-sm text-slate-600">
                Frontend Developer · Technical Interview · Intermediate
              </p>
            </div>

            <Link
              to="/interview"
              className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Practice Again
            </Link>
          </div>

          {/* Overall Score */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Overall Score
                </p>

                <div className="mt-4 flex items-end gap-3">
                  <span className="text-6xl font-bold tracking-tight text-slate-950">
                    78
                  </span>

                  <span className="pb-2 text-xl font-medium text-slate-400">
                    / 100
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">
                  Good performance. You demonstrated a solid understanding of
                  the concepts, but there are a few areas that can be improved
                  before your next interview.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Performance</span>

                  <span className="text-sm font-semibold text-slate-900">
                    78%
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[78%] rounded-full bg-slate-900" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs text-slate-500">Questions</p>

                    <p className="mt-2 text-xl font-bold text-slate-900">10</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs text-slate-500">Completed</p>

                    <p className="mt-2 text-xl font-bold text-slate-900">
                      10 / 10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Category Scores */}
          <section className="mt-8">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Performance Breakdown
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                See how you performed across different areas.
              </p>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">Technical Accuracy</p>

                <p className="mt-3 text-3xl font-bold text-slate-900">84%</p>

                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[84%] rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">Relevance</p>

                <p className="mt-3 text-3xl font-bold text-slate-900">81%</p>

                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[81%] rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">Communication</p>

                <p className="mt-3 text-3xl font-bold text-slate-900">72%</p>

                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-500">Completeness</p>

                <p className="mt-3 text-3xl font-bold text-slate-900">75%</p>

                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[75%] rounded-full bg-slate-900" />
                </div>
              </div>
            </div>
          </section>

          {/* Strengths & Improvements */}
          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Strengths */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-sm font-bold text-slate-700">+</span>
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Your Strengths
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Areas where you performed well
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Strong technical understanding
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Your answers demonstrated a good understanding of the
                    underlying technical concepts.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Relevant examples
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    You supported several answers with practical examples from
                    your experience.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Good problem-solving approach
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Your reasoning was generally structured and easy to follow.
                  </p>
                </div>
              </div>
            </div>

            {/* Improvements */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-sm font-bold text-slate-700">↑</span>
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Areas to Improve
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Focus areas for your next interview
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Be more concise
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Some answers could be shorter and more directly focused on
                    the question.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Explain trade-offs
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    When discussing technical decisions, explain why one
                    approach is better than another.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Improve communication
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Organize your answers with a clear beginning, explanation,
                    and conclusion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Feedback */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                <span className="text-xs font-bold">AI</span>
              </div>

              <div>
                <h2 className="font-semibold">AI Feedback</h2>

                <p className="mt-1 text-xs text-slate-500">
                  Personalized feedback from your interview
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300">
              Your overall performance indicates that you have a solid technical
              foundation. Your strongest answers were the ones where you
              explained the concept first and then supported it with a practical
              example. For your next interview, focus on keeping answers
              structured and concise while explaining your reasoning clearly.
            </p>
          </section>

          {/* Next Steps */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8">
            <h2 className="text-xl font-bold text-slate-950">
              Recommended Next Steps
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Keep improving with targeted practice.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                to="/interview"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  Practice Again
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Take another interview and compare your performance.
                </p>
              </Link>

              <Link
                to="/dashboard"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  View Dashboard
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Track your overall interview preparation progress.
                </p>
              </Link>

              <Link
                to="/history"
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  Interview History
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Review your previous interview sessions.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Results;
