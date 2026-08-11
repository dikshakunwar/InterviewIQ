import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    // Backend registration will be connected later.
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-5 py-8">
        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Get started
            </p>

            <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
              Create your account
            </h1>

            <p className="mt-1.5 text-xs text-slate-400">
              Start preparing for your next interview.
            </p>
          </div>

          {/* Register Card */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-900"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-900"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Password
                </label>

                <div className="relative mt-1.5">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 pr-14 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-900"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-medium text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="mt-1 text-[9px] text-slate-300">
                  Use at least 6 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-900"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-md bg-red-50 px-3 py-2 text-[10px] text-red-600">
                  {error}
                </div>
              )}

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-3 w-3 shrink-0 rounded border-slate-300"
                />

                <span className="text-[9px] leading-4 text-slate-400">
                  I agree to the terms of service and privacy policy.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-slate-900 py-2.5 text-[11px] font-semibold text-white transition hover:bg-slate-800"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100" />

              <span className="text-[9px] text-slate-300">OR</span>

              <div className="h-px flex-1 bg-slate-100" />
            </div>

            {/* Login */}
            <p className="text-center text-[10px] text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[9px] text-slate-300">
            Your information is used only to personalize your interview
            experience.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Register;
