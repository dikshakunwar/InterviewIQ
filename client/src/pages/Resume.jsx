import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Resume() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-slate-500">Resume</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Build your interview profile
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Upload your resume so HireReady can use your skills, projects,
              education, and experience to personalize your interview.
            </p>
          </div>

          {/* Upload Card */}
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center transition hover:border-slate-400">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                <span className="text-xl font-bold text-slate-700">↑</span>
              </div>

              <h2 className="mt-6 text-lg font-semibold text-slate-900">
                Upload your resume
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Upload your latest resume in PDF or DOCX format.
              </p>

              <label className="mt-6 inline-flex cursor-pointer rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Choose File
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>

              <p className="mt-4 text-xs text-slate-400">
                Maximum file size: 5 MB
              </p>
            </div>

            {/* File Status */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-900">
                Uploaded Resume
              </h3>

              <div className="mt-4 rounded-2xl border border-slate-200 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                      <span className="text-xs font-bold text-slate-600">
                        PDF
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        No resume uploaded yet
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Your uploaded file will appear here.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-400"
                    disabled
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Resume Benefits */}
          <section className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <span className="text-sm font-bold text-slate-700">01</span>
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-900">
                Extract Your Skills
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Your technical and professional skills can be identified from
                your resume.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <span className="text-sm font-bold text-slate-700">02</span>
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-900">
                Understand Your Projects
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Your projects and experience can become part of your interview
                context.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <span className="text-sm font-bold text-slate-700">03</span>
              </div>

              <h3 className="mt-5 text-sm font-semibold text-slate-900">
                Personalize Questions
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Your resume information will later be used to generate relevant
                interview questions.
              </p>
            </div>
          </section>

          {/* Continue */}
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Ready to continue?
              </p>

              <p className="mt-1 text-xs text-slate-500">
                You can choose your interview type next.
              </p>
            </div>

            <Link
              to="/interview"
              className="rounded-xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Continue to Interview
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Resume;
