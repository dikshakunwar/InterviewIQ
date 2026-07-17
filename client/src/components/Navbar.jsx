import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Interview<span className="text-indigo-950">IQ</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            How it Works
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Dashboard
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-5 py-2 text-sm font-medium text-blue-950 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
