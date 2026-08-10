import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Interview() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-slate-500">
              Interview Setup
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Configure your interview
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Choose the interview type and difficulty that best matches the
              role you're preparing for.
            </p>
          </div>

          {/* Setup Card */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Interview Type */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Interview Type
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                What kind of interview do you want to practice?
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-slate-900 bg-slate-50 p-6 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900">
                      <span className="text-xs font-bold text-white">TECH</span>
                    </div>

                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                      Selected
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    Technical Interview
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Practice programming, DSA, databases, web development,
                    system concepts, and role-specific technical questions.
                  </p>
                </button>

                <button
                  type="button"
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-left transition hover:border-slate-400"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <span className="text-xs font-bold text-slate-700">HR</span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    HR / Behavioral
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Practice behavioral, situational, communication, and common
                    HR interview questions.
                  </p>
                </button>
              </div>
            </div>

            {/* Role */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <label
                htmlFor="role"
                className="text-lg font-semibold text-slate-900"
              >
                Target Role
              </label>

              <p className="mt-1 text-sm text-slate-500">
                What position are you preparing for?
              </p>

              <select
                id="role"
                className="mt-5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option>Software Engineer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Data Analyst</option>
                <option>Data Scientist</option>
                <option>Machine Learning Engineer</option>
              </select>
            </div>

            {/* Difficulty */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Difficulty
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Select the level of difficulty.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-slate-400"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    Beginner
                  </p>

                  <p className="mt-1 text-xs text-slate-500">Fundamentals</p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border-2 border-slate-900 bg-slate-50 p-4 text-left"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    Intermediate
                  </p>

                  <p className="mt-1 text-xs text-slate-500">Interview level</p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-slate-400"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    Advanced
                  </p>

                  <p className="mt-1 text-xs text-slate-500">Challenging</p>
                </button>
              </div>
            </div>

            {/* Number of Questions */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <label
                htmlFor="questions"
                className="text-lg font-semibold text-slate-900"
              >
                Number of Questions
              </label>

              <p className="mt-1 text-sm text-slate-500">
                Choose how long you want your interview to be.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-center transition hover:border-slate-400"
                >
                  <p className="text-lg font-bold text-slate-900">5</p>

                  <p className="mt-1 text-xs text-slate-500">Quick</p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border-2 border-slate-900 bg-slate-50 p-4 text-center"
                >
                  <p className="text-lg font-bold text-slate-900">10</p>

                  <p className="mt-1 text-xs text-slate-500">Standard</p>
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-slate-200 p-4 text-center transition hover:border-slate-400"
                >
                  <p className="text-lg font-bold text-slate-900">15</p>

                  <p className="mt-1 text-xs text-slate-500">Full</p>
                </button>
              </div>
            </div>

            {/* Resume Status */}
            <div className="mt-10 rounded-2xl bg-slate-50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                  <span className="text-xs font-bold text-slate-600">PDF</span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Resume context enabled
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Your uploaded resume will be used later to personalize
                    interview questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Start */}
            <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Ready to begin?
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  You can change these settings before starting.
                </p>
              </div>

              <Link
                to="/live-interview"
                className="rounded-xl bg-slate-900 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start Interview
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Interview;
