import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Interview() {
  const [interviewType, setInterviewType] = useState("technical");
  const [difficulty, setDifficulty] = useState("medium");
  const [questionCount, setQuestionCount] = useState("10");

  const OptionCard = ({ value, selected, onClick, title, description }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border p-3 text-left transition ${
        selected
          ? "border-slate-900 bg-slate-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-800">{title}</p>

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-slate-900" : "border-slate-300"
          }`}
        >
          {selected && (
            <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
          )}
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <div className="mx-auto max-w-5xl px-5 py-6">
          {/* Header */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Interview
            </p>

            <h1 className="mt-1 text-lg font-semibold text-slate-900">
              Interview Setup
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Configure your mock interview before you begin.
            </p>
          </div>

          {/* Content */}
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {/* Interview Type */}
            <section className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Interview Type
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Choose the type of questions you want to practice.
                </p>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <OptionCard
                  value="technical"
                  selected={interviewType === "technical"}
                  onClick={() => setInterviewType("technical")}
                  title="Technical"
                  description="DSA, programming, CS fundamentals and technical concepts."
                />

                <OptionCard
                  value="behavioral"
                  selected={interviewType === "behavioral"}
                  onClick={() => setInterviewType("behavioral")}
                  title="Behavioral"
                  description="HR, teamwork, communication and situational questions."
                />

                <OptionCard
                  value="mixed"
                  selected={interviewType === "mixed"}
                  onClick={() => setInterviewType("mixed")}
                  title="Mixed"
                  description="A combination of technical and behavioral questions."
                />
              </div>

              {/* Difficulty */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Difficulty
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Select the difficulty level for your interview.
                </p>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <OptionCard
                    value="easy"
                    selected={difficulty === "easy"}
                    onClick={() => setDifficulty("easy")}
                    title="Easy"
                    description="Fundamental concepts"
                  />

                  <OptionCard
                    value="medium"
                    selected={difficulty === "medium"}
                    onClick={() => setDifficulty("medium")}
                    title="Medium"
                    description="Interview-level questions"
                  />

                  <OptionCard
                    value="hard"
                    selected={difficulty === "hard"}
                    onClick={() => setDifficulty("hard")}
                    title="Hard"
                    description="Advanced problem solving"
                  />
                </div>
              </div>

              {/* Question Count */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Number of Questions
                </h2>

                <div className="mt-3 flex gap-2">
                  {["5", "10", "15", "20"].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`rounded-md border px-4 py-2 text-[11px] font-medium transition ${
                        questionCount === count
                          ? "border-slate-900 bg-slate-50 text-slate-900"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Summary */}
            <aside className="flex flex-col gap-3">
              <section className="rounded-lg border border-slate-200 bg-white p-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  Interview Summary
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Your current configuration
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Type</span>

                    <span className="text-[11px] font-medium capitalize text-slate-700">
                      {interviewType}
                    </span>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Difficulty
                    </span>

                    <span className="text-[11px] font-medium capitalize text-slate-700">
                      {difficulty}
                    </span>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Questions
                    </span>

                    <span className="text-[11px] font-medium text-slate-700">
                      {questionCount}
                    </span>
                  </div>
                </div>
              </section>

              <section className="flex flex-1 flex-col justify-between rounded-lg bg-slate-900 p-4 text-white">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800">
                      <span className="text-[9px] font-bold">AI</span>
                    </div>

                    <span className="text-xs font-medium">AI Interview</span>
                  </div>

                  <p className="mt-3 text-[10px] leading-4 text-slate-400">
                    Your interview will use your selected configuration and
                    resume information to personalize the experience.
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  <div className="text-[10px] text-slate-400">
                    ✓ Personalized questions
                  </div>

                  <div className="text-[10px] text-slate-400">
                    ✓ Answer evaluation
                  </div>

                  <div className="text-[10px] text-slate-400">
                    ✓ Performance feedback
                  </div>
                </div>
              </section>

              <div className="flex gap-2">
                <Link
                  to="/resume"
                  className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-center text-[11px] font-medium text-slate-600 hover:bg-slate-50"
                >
                  Back
                </Link>

                <Link
                  to="/live-interview"
                  className="flex-[1.5] rounded-md bg-slate-900 px-3 py-2.5 text-center text-[11px] font-semibold text-white hover:bg-slate-800"
                >
                  Start Interview →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Interview;
