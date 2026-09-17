import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Results() {
  const location = useLocation();

  const interviewData = location.state || {
    interviewType: "technical",
    difficulty: "medium",
    questionCount: 10,
  };

  const scores = {
    overall: 78,
    technical: 84,
    relevance: 81,
    communication: 72,
    completeness: 75,
  };

  const formatText = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Results
            </p>

            <h1 className="mt-1 text-lg font-semibold">
              Interview Performance
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              {formatText(interviewData.interviewType)} ·{" "}
              {formatText(interviewData.difficulty)} ·{" "}
              {interviewData.questionCount} questions
            </p>
          </div>

          <Link
            to="/interview"
            className="w-fit rounded-md bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white hover:bg-slate-800"
          >
            Practice Again →
          </Link>
        </div>

        {/* Overall Score */}
        <section className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
          <div className="grid gap-5 md:grid-cols-[1fr_1.5fr] md:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Overall Score
              </p>

              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-slate-900">
                  {scores.overall}
                </span>

                <span className="text-xs text-slate-400">/ 100</span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Good performance. You have a solid foundation with some areas
                that can be improved.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  Overall performance
                </span>

                <span className="text-[10px] font-semibold text-slate-700">
                  {scores.overall}%
                </span>
              </div>

              <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-slate-900"
                  style={{ width: `${scores.overall}%` }}
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Questions</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {interviewData.questionCount}
                  </p>
                </div>

                <div className="rounded-md bg-slate-50 p-3">
                  <p className="text-[10px] text-slate-400">Interview Type</p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatText(interviewData.interviewType)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Score Breakdown */}
        <section className="mt-5">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Performance Breakdown
            </h2>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Your performance across key evaluation areas.
            </p>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Technical Accuracy", scores.technical],
              ["Relevance", scores.relevance],
              ["Communication", scores.communication],
              ["Completeness", scores.completeness],
            ].map(([title, score]) => (
              <div
                key={title}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <p className="text-[10px] text-slate-400">{title}</p>

                <p className="mt-2 text-xl font-semibold text-slate-900">
                  {score}%
                </p>

                <div className="mt-3 h-1 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-slate-900"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strengths + Improvements */}
        <section className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="text-sm font-semibold text-slate-900">Strengths</h2>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Areas where your responses performed well.
            </p>

            <div className="mt-4 space-y-2">
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Strong technical foundation
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  You demonstrated a good understanding of the core concepts.
                </p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Relevant answers
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Most responses stayed focused on the question being asked.
                </p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Practical examples
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  You used practical examples to support your explanations.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Areas to Improve
            </h2>

            <p className="mt-0.5 text-[10px] text-slate-400">
              Recommended areas for your next interview.
            </p>

            <div className="mt-4 space-y-2">
              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Answer structure
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Organize answers into a clear explanation, example, and
                  conclusion.
                </p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Technical depth
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Add more technical reasoning and explain important trade-offs.
                </p>
              </div>

              <div className="rounded-md bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-800">
                  Communication
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Keep explanations concise while clearly presenting the main
                  idea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Feedback */}
        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100">
              <span className="text-[9px] font-bold text-slate-600">AI</span>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                AI Feedback
              </h2>

              <p className="text-[9px] text-slate-400">
                Personalized interview feedback
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Your performance shows a good technical foundation. Focus on
            structuring your answers more clearly and providing concise
            explanations supported by practical examples. The AI layer will
            provide detailed feedback here once answer analysis is connected.
          </p>
        </section>

        {/* Actions */}
        <div className="mt-4 flex justify-end gap-2">
          <Link
            to="/history"
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-[10px] font-medium text-slate-600 hover:bg-slate-50"
          >
            View History
          </Link>

          <Link
            to="/interview"
            className="rounded-md bg-slate-900 px-4 py-2 text-[10px] font-semibold text-white hover:bg-slate-800"
          >
            Start Another →
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Results;
