import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900">
            <span className="text-lg font-bold text-white">H</span>
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            HireReady
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Home
          </Link>

          <Link
            to="/features"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Features
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Contact
          </Link>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
