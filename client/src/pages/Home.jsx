import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-5 py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

              <span className="text-[10px] font-medium text-slate-500">
                AI-powered interview preparation
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Practice interviews.
              <br />
              <span className="text-slate-400">Improve with every answer.</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
              HireReady AI helps you prepare for technical and behavioral
              interviews with personalized questions, live practice, and
              detailed AI-powered feedback.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Link
                to="/register"
                className="rounded-md bg-slate-900 px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-slate-800"
              >
                Get Started →
              </Link>

              <Link
                to="/login"
                className="rounded-md border border-slate-200 px-4 py-2.5 text-[11px] font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
                  <span className="text-xs font-semibold text-slate-600">
                    AI
                  </span>
                </div>

                <h2 className="mt-3 text-sm font-semibold text-slate-900">
                  Personalized Questions
                </h2>

                <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
                  Generate interview questions based on your resume, skills, and
                  selected role.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
                  <span className="text-xs font-semibold text-slate-600">
                    ▶
                  </span>
                </div>

                <h2 className="mt-3 text-sm font-semibold text-slate-900">
                  Live Interviews
                </h2>

                <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
                  Practice in a realistic interview environment and answer
                  questions under time pressure.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
                  <span className="text-xs font-semibold text-slate-600">
                    %
                  </span>
                </div>

                <h2 className="mt-3 text-sm font-semibold text-slate-900">
                  AI Feedback
                </h2>

                <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
                  Understand your strengths, weaknesses, communication, and
                  technical performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              How it works
            </p>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              Prepare in three simple steps
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="text-sm font-semibold text-slate-300">01</span>

              <div>
                <h3 className="text-xs font-semibold text-slate-800">
                  Upload Resume
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Let AI understand your skills, projects, and experience.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="text-sm font-semibold text-slate-300">02</span>

              <div>
                <h3 className="text-xs font-semibold text-slate-800">
                  Start Interview
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Choose your interview type and practice with AI.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="text-sm font-semibold text-slate-300">03</span>

              <div>
                <h3 className="text-xs font-semibold text-slate-800">
                  Improve
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-slate-400">
                  Review your performance and improve with personalized
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-8">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Ready to practice?
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Start your first AI-powered mock interview.
              </p>
            </div>

            <Link
              to="/register"
              className="shrink-0 rounded-md bg-slate-900 px-4 py-2.5 text-[11px] font-semibold text-white hover:bg-slate-800"
            >
              Start Preparing →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
