import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication will be connected later.
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
              Welcome back
            </p>

            <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
              Sign in to HireReady AI
            </h1>

            <p className="mt-1.5 text-xs text-slate-400">
              Continue your interview preparation.
            </p>
          </div>

          {/* Login Card */}
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[10px] font-medium text-slate-600"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-[9px] font-medium text-slate-400 hover:text-slate-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative mt-1.5">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 pr-16 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-900"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-medium text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-slate-300"
                />

                <span className="text-[10px] text-slate-500">Remember me</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md bg-slate-900 py-2.5 text-[11px] font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100" />

              <span className="text-[9px] text-slate-300">OR</span>

              <div className="h-px flex-1 bg-slate-100" />
            </div>

            {/* Register */}
            <p className="text-center text-[10px] text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                Create one
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[9px] text-slate-300">
            By continuing, you agree to HireReady AI's terms and privacy policy.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
