import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <div className="mx-auto max-w-6xl px-5 py-6">
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Dashboard
              </p>

              <h1 className="mt-1 text-lg font-semibold text-slate-900">
                Welcome back, Diksha
              </h1>

              <p className="mt-1 text-xs text-slate-500">
                Continue your interview preparation and track your progress.
              </p>
            </div>

            <Link
              to="/interview"
              className="w-fit rounded-md bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-slate-800"
            >
              Start Interview →
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Interviews
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">12</p>

              <p className="mt-1 text-[10px] text-slate-400">+3 this month</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Average Score
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">78%</p>

              <p className="mt-1 text-[10px] text-slate-400">
                +6% from last month
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Best Score
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">91%</p>

              <p className="mt-1 text-[10px] text-slate-400">Personal best</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Practice Time
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">4.8h</p>

              <p className="mt-1 text-[10px] text-slate-400">Total practice</p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {/* Progress */}
            <section className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Preparation Progress
                  </h2>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Your overall interview readiness
                  </p>
                </div>

                <span className="text-sm font-semibold text-slate-900">
                  72%
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[72%] rounded-full bg-slate-900" />
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Technical</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    81%
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Communication</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    72%
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Problem Solving</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    76%
                  </p>
                </div>
              </div>
            </section>

            {/* Resume */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Resume
                  </h2>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Current resume status
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
                  Uploaded
                </span>
              </div>

              <div className="mt-4 rounded-md border border-slate-100 bg-slate-50 p-3">
                <p className="truncate text-xs font-medium text-slate-700">
                  resume.pdf
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Last updated recently
                </p>
              </div>

              <Link
                to="/resume"
                className="mt-3 block rounded-md border border-slate-200 px-3 py-2 text-center text-[10px] font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Manage Resume
              </Link>
            </section>
          </div>

          {/* Bottom Grid */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* Recent Interviews */}
            <section className="rounded-lg border border-slate-200 bg-white lg:col-span-2">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Recent Interviews
                  </h2>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Your latest practice sessions
                  </p>
                </div>

                <Link
                  to="/history"
                  className="text-[10px] font-medium text-slate-500 hover:text-slate-900"
                >
                  View all →
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-slate-800">
                      Frontend Developer
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Technical · 10 questions · 2 days ago
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    84%
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-slate-800">
                      Software Engineer
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Behavioral · 10 questions · 5 days ago
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    76%
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-xs font-medium text-slate-800">
                      Full Stack Developer
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Technical · 15 questions · 1 week ago
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    72%
                  </span>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Quick Actions
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Continue your preparation
              </p>

              <div className="mt-4 space-y-2">
                <Link
                  to="/interview"
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5 transition hover:bg-slate-50"
                >
                  <span className="text-xs font-medium text-slate-700">
                    Start Interview
                  </span>

                  <span className="text-xs text-slate-400">→</span>
                </Link>

                <Link
                  to="/resume"
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5 transition hover:bg-slate-50"
                >
                  <span className="text-xs font-medium text-slate-700">
                    Update Resume
                  </span>

                  <span className="text-xs text-slate-400">→</span>
                </Link>

                <Link
                  to="/history"
                  className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2.5 transition hover:bg-slate-50"
                >
                  <span className="text-xs font-medium text-slate-700">
                    View History
                  </span>

                  <span className="text-xs text-slate-400">→</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
