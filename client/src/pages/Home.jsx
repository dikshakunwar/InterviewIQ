import Navbar from "../components/Navbar";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    fetch("http://localhost:5001/");
  }, []);
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Crack Your Next Interview with{" "}
            <span className="text-indigo-950">AI</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Upload your resume, choose your target role, and practice
            personalized mock interviews powered by AI. Get instant feedback,
            performance insights, and improve your interview skills.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-slate-900 px-8 py-3 font-medium text-white transition hover:bg-slate-800">
              Start Interview
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
