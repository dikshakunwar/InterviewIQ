import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="border-b border-slate-200">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <span className="mr-2 h-2 w-2 rounded-full bg-slate-700"></span>
                <span className="text-sm font-medium text-slate-600">
                  AI-powered interview preparation
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Prepare smarter.
                <br />
                <span className="text-slate-500">Interview better.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Practice personalized mock interviews, receive intelligent
                feedback, and understand exactly where you can improve before
                your next real interview.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Start Practicing
                </button>

                <button className="rounded-xl border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Explore Features
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                <span>✓ Personalized questions</span>
                <span>✓ Instant feedback</span>
                <span>✓ Performance tracking</span>
              </div>
            </div>

            {/* Interview Preview */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                {/* Window Header */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Mock Interview
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Frontend Developer
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    04:32
                  </div>
                </div>

                {/* Question */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Question 04
                  </p>

                  <h2 className="mt-4 text-xl font-semibold leading-8 text-slate-900">
                    How would you improve the performance of a React
                    application?
                  </h2>

                  <div className="mt-7 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        Your answer
                      </span>

                      <span className="text-xs text-slate-400">Recording</span>
                    </div>

                    <div className="mt-5 flex items-end gap-1">
                      <span className="h-4 w-1 rounded-full bg-slate-300"></span>
                      <span className="h-7 w-1 rounded-full bg-slate-400"></span>
                      <span className="h-5 w-1 rounded-full bg-slate-300"></span>
                      <span className="h-9 w-1 rounded-full bg-slate-500"></span>
                      <span className="h-6 w-1 rounded-full bg-slate-400"></span>
                      <span className="h-3 w-1 rounded-full bg-slate-300"></span>
                      <span className="h-8 w-1 rounded-full bg-slate-500"></span>
                      <span className="h-5 w-1 rounded-full bg-slate-400"></span>
                      <span className="h-10 w-1 rounded-full bg-slate-500"></span>
                      <span className="h-6 w-1 rounded-full bg-slate-300"></span>
                      <span className="h-4 w-1 rounded-full bg-slate-400"></span>
                      <span className="h-8 w-1 rounded-full bg-slate-500"></span>
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white">
                    Submit Answer
                  </button>
                </div>

                {/* AI Feedback */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      AI Feedback
                    </p>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      8.4 / 10
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Strong understanding of React optimization. Consider
                    explaining memoization and code splitting in more detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 sm:grid-cols-4 lg:px-8">
            <div className="border-r border-slate-200 px-6 text-center">
              <p className="text-3xl font-bold text-slate-900">24/7</p>
              <p className="mt-2 text-sm text-slate-500">Practice anytime</p>
            </div>

            <div className="border-r-0 px-6 text-center sm:border-r sm:border-slate-200">
              <p className="text-3xl font-bold text-slate-900">AI</p>
              <p className="mt-2 text-sm text-slate-500">
                Personalized feedback
              </p>
            </div>

            <div className="border-r border-slate-200 px-6 text-center">
              <p className="text-3xl font-bold text-slate-900">Live</p>
              <p className="mt-2 text-sm text-slate-500">
                Interview experience
              </p>
            </div>

            <div className="px-6 text-center">
              <p className="text-3xl font-bold text-slate-900">1</p>
              <p className="mt-2 text-sm text-slate-500">Complete platform</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Why HireReady
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Everything you need to prepare with confidence.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A focused interview preparation experience built around
                realistic practice and actionable feedback.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">01</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Resume-Based Questions
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practice questions tailored to your resume, skills, projects,
                  and target role.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">02</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Live Mock Interviews
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Experience a realistic interview flow with timed questions and
                  interactive responses.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">03</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Intelligent Feedback
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Understand what went well and where your answers need
                  improvement.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">04</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Performance Analytics
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Track your scores and identify strengths and weak areas across
                  multiple interviews.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">05</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Multiple Interview Types
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Prepare for technical, behavioral, HR, and role-specific
                  interview questions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <span className="text-lg font-bold text-slate-700">06</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Progress Tracking
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Monitor your improvement over time and build consistent
                  interview confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                How It Works
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From preparation to performance.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  01
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Build Your Profile
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Upload your resume and select the role you're preparing for.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  02
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Practice
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Complete realistic mock interviews with personalized
                  questions.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  03
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  Improve
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Review AI feedback and use your performance insights to
                  improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to become interview-ready?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Practice smarter, understand your weaknesses, and walk into your
              next interview with confidence.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Start Your First Interview
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
