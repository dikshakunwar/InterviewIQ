import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [filter, setFilter] = useState("All");

  const interviews = [
    {
      id: 1,
      role: "Frontend Developer",
      type: "Technical",
      difficulty: "Medium",
      score: 84,
      questions: 10,
      date: "2 days ago",
    },
    {
      id: 2,
      role: "Software Engineer",
      type: "Behavioral",
      difficulty: "Medium",
      score: 76,
      questions: 10,
      date: "5 days ago",
    },
    {
      id: 3,
      role: "Full Stack Developer",
      type: "Technical",
      difficulty: "Hard",
      score: 72,
      questions: 15,
      date: "1 week ago",
    },
  ];

  const filteredInterviews = useMemo(() => {
    if (filter === "All") {
      return interviews;
    }

    return interviews.filter((interview) => interview.type === filter);
  }, [filter]);

  const averageScore = Math.round(
    interviews.reduce((sum, interview) => sum + interview.score, 0) /
      interviews.length,
  );

  const bestScore = Math.max(...interviews.map((interview) => interview.score));

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Dashboard
            </p>

            <h1 className="mt-1 text-lg font-semibold text-slate-900">
              Welcome back
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Track your interview preparation and continue practicing.
            </p>
          </div>

          <Link
            to="/interview"
            className="w-fit rounded-md bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white hover:bg-slate-800"
          >
            Start Interview →
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Interviews
            </p>

            <p className="mt-2 text-xl font-semibold text-slate-900">
              {interviews.length}
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Average Score
            </p>

            <p className="mt-2 text-xl font-semibold text-slate-900">
              {averageScore}%
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Best Score
            </p>

            <p className="mt-2 text-xl font-semibold text-slate-900">
              {bestScore}%
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Resume
            </p>

            <p className="mt-2 text-sm font-semibold text-green-600">Ready</p>
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
                  Overall interview readiness
                </p>
              </div>

              <span className="text-sm font-semibold text-slate-900">72%</span>
            </div>

            <div className="mt-4 h-1.5 rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-slate-900" />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">Technical</p>

                <p className="mt-1 text-sm font-semibold text-slate-800">81%</p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">Communication</p>

                <p className="mt-1 text-sm font-semibold text-slate-800">72%</p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-[10px] text-slate-400">Problem Solving</p>

                <p className="mt-1 text-sm font-semibold text-slate-800">76%</p>
              </div>
            </div>
          </section>

          {/* Resume */}
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Resume</h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Current resume
                </p>
              </div>

              <span className="rounded-full bg-green-50 px-2 py-1 text-[9px] font-medium text-green-600">
                Ready
              </span>
            </div>

            <div className="mt-4 rounded-md bg-slate-50 p-3">
              <p className="text-xs font-medium text-slate-700">resume.pdf</p>

              <p className="mt-1 text-[10px] text-slate-400">
                Available for interview personalization
              </p>
            </div>

            <Link
              to="/resume"
              className="mt-3 block rounded-md border border-slate-200 px-3 py-2 text-center text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              Manage Resume
            </Link>
          </section>
        </div>

        {/* Recent Interviews */}
        <section className="mt-4 rounded-lg border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Recent Interviews
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Your latest practice sessions
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {["All", "Technical", "Behavioral"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilter(type)}
                  className={`rounded-md border px-2.5 py-1.5 text-[9px] font-medium transition ${
                    filter === type
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredInterviews.map((interview) => (
              <div
                key={interview.id}
                className="flex flex-col justify-between gap-3 px-4 py-3 sm:flex-row sm:items-center"
              >
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-800">
                    {interview.role}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
                      {interview.type}
                    </span>

                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
                      {interview.difficulty}
                    </span>

                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
                      {interview.questions} Questions
                    </span>

                    <span className="px-1 py-1 text-[9px] text-slate-400">
                      {interview.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-800">
                    {interview.score}%
                  </span>

                  <Link
                    to="/results"
                    className="rounded-md border border-slate-200 px-3 py-2 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
                  >
                    View Result
                  </Link>
                </div>
              </div>
            ))}

            {filteredInterviews.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p className="text-xs font-medium text-slate-700">
                  No interviews found
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Try another filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">
            Quick Actions
          </h2>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <Link
              to="/interview"
              className="rounded-md border border-slate-200 px-3 py-2.5 text-center text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              Start Interview
            </Link>

            <Link
              to="/resume"
              className="rounded-md border border-slate-200 px-3 py-2.5 text-center text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              Update Resume
            </Link>

            <Link
              to="/history"
              className="rounded-md border border-slate-200 px-3 py-2.5 text-center text-[10px] font-medium text-slate-600 hover:bg-slate-50"
            >
              View History
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
