import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Resume() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setError("");

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only PDF and DOCX files are allowed.");
      setFile(null);
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5 MB.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50">
      <Navbar />

      <main className="h-[calc(100vh-5rem)] overflow-hidden">
        <div className="mx-auto flex h-full max-w-6xl flex-col px-5 py-4">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Resume
              </p>

              <h1 className="mt-0.5 text-base font-semibold text-slate-900">
                Resume Setup
              </h1>

              <p className="mt-0.5 text-[11px] text-slate-500">
                Upload your resume to personalize your AI interview.
              </p>
            </div>

            <Link
              to="/dashboard"
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
            >
              Dashboard
            </Link>
          </div>

          {/* Main */}
          <div className="mt-4 grid min-h-0 flex-1 grid-cols-[minmax(0,2fr)_minmax(240px,1fr)] gap-3">
            {/* Upload Card */}
            <section className="flex min-h-0 flex-col rounded-lg border border-slate-200 bg-white p-4">
              <div className="shrink-0">
                <h2 className="text-xs font-semibold text-slate-900">
                  Upload Resume
                </h2>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  PDF or DOCX · Maximum 5 MB
                </p>
              </div>

              {/* Upload Area */}
              <div className="mt-3 min-h-0 flex-1">
                {!file ? (
                  <label
                    htmlFor="resume-upload"
                    className="flex h-full min-h-0 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-400 hover:bg-slate-100"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-sm">
                      <span className="text-xs text-slate-500">↑</span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-slate-700">
                      Drop your resume here
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      or click to browse
                    </p>

                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex h-full items-center justify-center rounded-md border border-slate-200 bg-slate-50">
                    <div className="w-full max-w-sm rounded-md border border-slate-200 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100">
                            <span className="text-[9px] font-bold text-slate-500">
                              {file.name.toLowerCase().endsWith(".pdf")
                                ? "PDF"
                                : "DOC"}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs font-medium text-slate-800">
                              {file.name}
                            </p>

                            <p className="text-[10px] text-slate-400">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={removeFile}
                          className="ml-3 text-[10px] text-slate-400 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-2 text-[10px] text-green-600">
                        ✓ Resume ready for analysis
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="mt-2 shrink-0 rounded-md bg-red-50 px-2.5 py-2 text-[10px] text-red-600">
                  {error}
                </div>
              )}

              {/* Bottom */}
              <div className="mt-3 flex shrink-0 items-center justify-between border-t border-slate-100 pt-3">
                <p className="text-[9px] text-slate-400">
                  Used for interview personalization only.
                </p>

                <Link
                  to={file ? "/interview" : "#"}
                  onClick={(e) => {
                    if (!file) {
                      e.preventDefault();
                      setError("Please upload your resume first.");
                    }
                  }}
                  className={`rounded-md px-3 py-1.5 text-[10px] font-semibold ${
                    file
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "cursor-not-allowed bg-slate-200 text-slate-400"
                  }`}
                >
                  Continue →
                </Link>
              </div>
            </section>

            {/* Right Column */}
            <aside className="flex min-h-0 flex-col gap-3">
              {/* Analysis */}
              <div className="shrink-0 rounded-lg border border-slate-200 bg-white p-4">
                <h2 className="text-xs font-semibold text-slate-900">
                  What we'll analyze
                </h2>

                <div className="mt-3 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-600">Skills</span>

                    <span className="text-[9px] text-slate-400">
                      Technical stack
                    </span>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-600">
                      Experience
                    </span>

                    <span className="text-[9px] text-slate-400">
                      Work history
                    </span>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-600">Projects</span>

                    <span className="text-[9px] text-slate-400">
                      Project details
                    </span>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-600">
                      Education
                    </span>

                    <span className="text-[9px] text-slate-400">
                      Academic profile
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Card */}
              <div className="min-h-0 flex-1 rounded-lg bg-slate-900 p-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-800">
                    <span className="text-[9px] font-bold">AI</span>
                  </div>

                  <span className="text-xs font-medium">
                    AI Personalization
                  </span>
                </div>

                <p className="mt-3 text-[10px] leading-4 text-slate-400">
                  Your resume information will be used to generate relevant
                  interview questions and personalized feedback.
                </p>

                <div className="mt-4 space-y-2">
                  <div className="text-[10px] text-slate-400">
                    <span className="mr-1 text-slate-300">✓</span>
                    Resume-based questions
                  </div>

                  <div className="text-[10px] text-slate-400">
                    <span className="mr-1 text-slate-300">✓</span>
                    Skill-specific evaluation
                  </div>

                  <div className="text-[10px] text-slate-400">
                    <span className="mr-1 text-slate-300">✓</span>
                    Personalized feedback
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
