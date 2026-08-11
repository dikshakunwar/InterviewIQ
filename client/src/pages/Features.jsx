import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Features() {
  const features = [
    {
      number: "01",
      title: "AI Resume Analysis",
      description:
        "Analyze your resume and extract skills, projects, education, and experience to personalize your interview.",
      tag: "Resume",
    },
    {
      number: "02",
      title: "Personalized Questions",
      description:
        "Generate interview questions based on your resume, selected role, skills, and interview type.",
      tag: "AI",
    },
    {
      number: "03",
      title: "Live AI Interview",
      description:
        "Practice in a realistic interview environment with questions delivered one at a time.",
      tag: "Interview",
    },
    {
      number: "04",
      title: "Voice Interaction",
      description:
        "Answer questions using your voice and practice communicating naturally like a real interview.",
      tag: "Voice",
    },
    {
      number: "05",
      title: "Answer Analysis",
      description:
        "Evaluate your responses for relevance, structure, technical accuracy, and communication quality.",
      tag: "Analysis",
    },
    {
      number: "06",
      title: "Performance Score",
      description:
        "Get an overall score and understand how you performed across different interview categories.",
      tag: "Scoring",
    },
    {
      number: "07",
      title: "Personalized Feedback",
      description:
        "Identify strengths and weaknesses with actionable suggestions for improving future answers.",
      tag: "Feedback",
    },
    {
      number: "08",
      title: "Interview History",
      description:
        "Track previous interviews, scores, answers, and performance trends in one place.",
      tag: "Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        {/* Header */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Features
            </p>

            <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
              Everything you need to prepare better.
            </h1>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              HireReady AI combines resume analysis, personalized interviews,
              voice interaction, and AI feedback into one preparation platform.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-y border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-300">
                      {feature.number}
                    </span>

                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500">
                      {feature.tag}
                    </span>
                  </div>

                  <h2 className="mt-4 text-sm font-semibold text-slate-900">
                    {feature.title}
                  </h2>

                  <p className="mt-1.5 text-[10px] leading-4 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Workflow
              </p>

              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                From resume to interview feedback
              </h2>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[10px] font-semibold text-slate-300">
                01
              </span>

              <h3 className="mt-3 text-xs font-semibold text-slate-800">
                Upload
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Upload your resume and let AI analyze your profile.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[10px] font-semibold text-slate-300">
                02
              </span>

              <h3 className="mt-3 text-xs font-semibold text-slate-800">
                Configure
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Choose the interview type, difficulty, and question count.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[10px] font-semibold text-slate-300">
                03
              </span>

              <h3 className="mt-3 text-xs font-semibold text-slate-800">
                Practice
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Complete your interview using text or voice responses.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              <span className="text-[10px] font-semibold text-slate-300">
                04
              </span>

              <h3 className="mt-3 text-xs font-semibold text-slate-800">
                Improve
              </h3>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                Review AI feedback and track your progress over time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-100">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-8">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Start practicing today
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Build confidence before your next interview.
              </p>
            </div>

            <Link
              to="/register"
              className="shrink-0 rounded-md bg-slate-900 px-4 py-2.5 text-[11px] font-semibold text-white hover:bg-slate-800"
            >
              Get Started →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Features;
