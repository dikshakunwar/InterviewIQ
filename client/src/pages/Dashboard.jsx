import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-slate-500">Dashboard</p>

              <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                Welcome back!
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Continue your interview preparation and track your progress.
              </p>
            </div>

            <Link
              to="/interview"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Interview
            </Link>
          </div>

          {/* Stats */}
          <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Interviews Completed</p>

              <p className="mt-3 text-3xl font-bold text-slate-900">12</p>

              <p className="mt-2 text-xs text-slate-500">+3 this month</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Average Score</p>

              <p className="mt-3 text-3xl font-bold text-slate-900">78%</p>

              <p className="mt-2 text-xs text-slate-500">+6% from last month</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Practice Time</p>

              <p className="mt-3 text-3xl font-bold text-slate-900">4.5h</p>

              <p className="mt-2 text-xs text-slate-500">This month</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Current Streak</p>

              <p className="mt-3 text-3xl font-bold text-slate-900">5 days</p>

              <p className="mt-2 text-xs text-slate-500">Keep going</p>
            </div>
          </section>

          {/* Main Grid */}
          <section className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Start Interview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 lg:col-span-2">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Quick Start
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-slate-950">
                    Ready for your next interview?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                    Choose an interview type and practice questions tailored to
                    your target role and experience.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-slate-100 sm:flex">
                  <span className="text-lg font-bold text-slate-700">AI</span>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Link
                  to="/interview"
                  className="rounded-xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
                >
                  <p className="font-semibold text-slate-900">
                    Technical Interview
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    DSA, programming, databases, systems, and technical
                    concepts.
                  </p>
                </Link>

                <Link
                  to="/interview"
                  className="rounded-xl border border-slate-200 p-5 transition hover:border-slate-400 hover:shadow-sm"
                >
                  <p className="font-semibold text-slate-900">HR Interview</p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Behavioral, communication, strengths, weaknesses, and
                    situational questions.
                  </p>
                </Link>
              </div>
            </div>

            {/* Resume */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Resume
              </p>

              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Your resume
              </h2>

              <div className="mt-6 rounded-xl bg-slate-50 p-5">
                <p className="text-sm font-medium text-slate-900">
                  No resume uploaded
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Upload your resume to get personalized interview questions.
                </p>
              </div>

              <Link
                to="/resume"
                className="mt-5 block w-full rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Upload Resume
              </Link>
            </div>
          </section>

          {/* Recent Interviews */}
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Recent Interviews
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your latest practice sessions
                </p>
              </div>

              <Link
                to="/history"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                View all
              </Link>
            </div>

            <div className="divide-y divide-slate-200">
              <div className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Frontend Developer
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Technical Interview · 2 days ago
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <span className="text-sm font-semibold text-slate-900">
                    84%
                  </span>

                  <Link
                    to="/results"
                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    View Results
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Software Engineer
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    HR Interview · 5 days ago
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <span className="text-sm font-semibold text-slate-900">
                    76%
                  </span>

                  <Link
                    to="/results"
                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    View Results
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Full Stack Developer
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Technical Interview · 1 week ago
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <span className="text-sm font-semibold text-slate-900">
                    72%
                  </span>

                  <Link
                    to="/results"
                    className="text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    View Results
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Progress */}
          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Interview Progress
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Overall preparation score
                  </p>
                </div>

                <span className="text-2xl font-bold text-slate-900">78%</span>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-slate-900" />
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                You're making good progress. Focus on improving your
                communication and technical explanation skills.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold text-slate-900">
                Recommended Practice
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Based on your recent performance
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-700">
                    Data Structures
                  </span>

                  <span className="text-xs font-semibold text-slate-500">
                    Practice
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-700">Communication</span>

                  <span className="text-xs font-semibold text-slate-500">
                    Improve
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;
