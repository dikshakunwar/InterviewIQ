import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function History() {
  const interviews = [
    {
      id: 1,
      role: "Frontend Developer",
      type: "Technical",
      difficulty: "Medium",
      questions: 10,
      score: 84,
      date: "2 days ago",
    },
    {
      id: 2,
      role: "Software Engineer",
      type: "Behavioral",
      difficulty: "Medium",
      questions: 10,
      score: 76,
      date: "5 days ago",
    },
    {
      id: 3,
      role: "Full Stack Developer",
      type: "Technical",
      difficulty: "Hard",
      questions: 15,
      score: 72,
      date: "1 week ago",
    },
    {
      id: 4,
      role: "Backend Developer",
      type: "Technical",
      difficulty: "Easy",
      questions: 5,
      score: 81,
      date: "2 weeks ago",
    },
  ];

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
              History
            </p>

            <h1 className="mt-1 text-lg font-semibold text-slate-900">
              Interview History
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Review your previous interview sessions and performance.
            </p>
          </div>

          <Link
            to="/interview"
            className="w-fit rounded-md bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-slate-800"
          >
            New Interview →
          </Link>
        </div>

        {/* Summary */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Total Interviews
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
        </div>

        {/* Interview List */}
        <section className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 className="text-sm font-semibold text-slate-900">
              Previous Interviews
            </h2>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Select an interview to review its result.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="px-4 py-3.5 transition hover:bg-slate-50"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  {/* Left */}
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-100">
                      <span className="text-[10px] font-semibold text-slate-600">
                        {interview.score}
                      </span>
                    </div>

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
                  </div>

                  {/* Right */}
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <div>
                      <p className="text-[9px] uppercase tracking-wide text-slate-400">
                        Score
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-800">
                        {interview.score}%
                      </p>
                    </div>

                    <Link
                      to="/results"
                      className="rounded-md border border-slate-200 px-3 py-2 text-[10px] font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                      View Result
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progress */}
        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Performance Trend
              </h2>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Score across your available interview sessions
              </p>
            </div>

            <span className="text-[10px] text-slate-400">
              {interviews.length} sessions
            </span>
          </div>

          <div className="mt-5 flex h-32 items-end gap-4 border-b border-l border-slate-100 px-4">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="flex h-full flex-1 items-end justify-center"
              >
                <div className="flex h-full flex-col items-center justify-end">
                  <span className="mb-1 text-[9px] font-medium text-slate-500">
                    {interview.score}%
                  </span>

                  <div
                    className="w-7 rounded-t-md bg-slate-800"
                    style={{
                      height: `${interview.score}%`,
                    }}
                  />

                  <span className="mt-2 text-[9px] text-slate-400">
                    {interview.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[10px] text-slate-400">
            This chart will use real interview records once the backend and
            MongoDB integration are connected.
          </p>
        </section>
      </main>
    </div>
  );
}

export default History;
