import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-slate-50">
        <div className="mx-auto flex max-w-md flex-col justify-center px-6 py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                Create your account
              </h1>

              <p className="mt-3 text-sm text-slate-500">
                Start preparing for your next interview.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />

                <span className="text-xs leading-5 text-slate-500">
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Create Account
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-slate-900 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
