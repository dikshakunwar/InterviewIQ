import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function History() {
  const interviews = [
    {
      role: "Frontend Developer",
      type: "Technical",
      difficulty: "Intermediate",
      score: 84,
      questions: 10,
      date: "2 days ago",
    },
    {
      role: "Software Engineer",
      type: "HR / Behavioral",
      difficulty: "Intermediate",
      score: 76,
      questions: 10,
      date: "5 days ago",
    },
    {
      role: "Full Stack Developer",
      type: "Technical",
      difficulty: "Advanced",
      score: 72,
      questions: 15,
      date: "1 week ago",
    },
    {
      role: "Backend Developer",
      type: "Technical",
      difficulty: "Beginner",
      score: 81,
      questions: 5,
      date: "2 weeks ago",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Interview History
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                Your previous interviews
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Review your previous practice sessions and track how your
                performance changes over time.
              </p>
            </div>

            <Link
              to="/interview"
              className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start New Interview
            </Link>
          </div>

          {/* Summary */}
          <section className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Total Interviews</p>

              <p className="mt-3 text-3xl font-bold text-slate-950">12</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Average Score</p>

              <p className="mt-3 text-3xl font-bold text-slate-950">78%</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Best Score</p>

              <p className="mt-3 text-3xl font-bold text-slate-950">91%</p>
            </div>
          </section>

          {/* Interview List */}
          <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-6 py-5">
              <h2 className="font-semibold text-slate-900">All Interviews</h2>

              <p className="mt-1 text-xs text-slate-500">
                Your most recent practice sessions
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {interviews.map((interview, index) => (
                <div key={index} className="p-6 transition hover:bg-slate-50">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Interview Info */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <span className="text-xs font-bold text-slate-600">
                          {interview.score}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {interview.role}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {interview.type}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {interview.difficulty}
                          </span>

                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                            {interview.questions} Questions
                          </span>
                        </div>

                        <p className="mt-2 text-xs text-slate-400">
                          {interview.date}
                        </p>
                      </div>
                    </div>

                    {/* Score + Action */}
                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                      <div>
                        <p className="text-xs text-slate-500">Score</p>

                        <p className="mt-1 text-xl font-bold text-slate-900">
                          {interview.score}%
                        </p>
                      </div>

                      <Link
                        to="/results"
                        className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        View Results
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default History;
