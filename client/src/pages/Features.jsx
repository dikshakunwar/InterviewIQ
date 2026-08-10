import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Features() {
  const features = [
    {
      number: "01",
      title: "AI-Powered Mock Interviews",
      description:
        "Practice realistic interviews with dynamically generated questions based on your selected role and preparation goals.",
    },
    {
      number: "02",
      title: "Resume-Based Questions",
      description:
        "Your resume becomes part of the interview context, allowing questions to focus on your actual skills, projects, and experience.",
    },
    {
      number: "03",
      title: "Technical Interviews",
      description:
        "Prepare for technical discussions covering programming, data structures, databases, web development, and role-specific concepts.",
    },
    {
      number: "04",
      title: "Behavioral & HR Interviews",
      description:
        "Practice common behavioral questions and learn how to structure clear, relevant, and confident responses.",
    },
    {
      number: "05",
      title: "Live Interview Experience",
      description:
        "Experience an interactive interview environment where questions appear one at a time and your responses are evaluated throughout the session.",
    },
    {
      number: "06",
      title: "Answer Analysis",
      description:
        "Receive detailed feedback on relevance, completeness, technical quality, and communication after answering interview questions.",
    },
    {
      number: "07",
      title: "Follow-Up Questions",
      description:
        "The interview can adapt to your responses and generate relevant follow-up questions instead of following only a fixed question list.",
    },
    {
      number: "08",
      title: "Performance Analytics",
      description:
        "Review your scores, identify weak areas, and track your interview performance across multiple practice sessions.",
    },
    {
      number: "09",
      title: "Personalized Improvement",
      description:
        "Get actionable recommendations based on your interview performance so you know exactly what to practice next.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Features
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Everything you need to prepare for your next interview.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                HireReady combines personalized practice, interactive
                interviews, and intelligent feedback into one preparation
                platform.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <span className="text-sm font-bold text-slate-700">
                      {feature.number}
                    </span>
                  </div>

                  <h2 className="mt-7 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-7 h-px w-12 bg-slate-300 transition-all duration-300 group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Flow */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Interview Experience
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Practice like you're in the real interview.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  The platform is designed to move beyond simple question banks.
                  Your interview session will guide you through questions,
                  answers, evaluation, and follow-up questions.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                      01
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Question
                      </p>

                      <p className="text-xs text-slate-500">
                        AI presents the next question
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                      02
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Answer
                      </p>

                      <p className="text-xs text-slate-500">
                        Respond using text or voice
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                      03
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Analysis
                      </p>

                      <p className="text-xs text-slate-500">
                        AI evaluates your response
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                      04
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Follow-Up
                      </p>

                      <p className="text-xs text-slate-500">
                        Interview adapts to your answer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Turn preparation into confidence.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Practice consistently, understand your weaknesses, and improve
              before your next real interview.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Start Practicing
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Features;
