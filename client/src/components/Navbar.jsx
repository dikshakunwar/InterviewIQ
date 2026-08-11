import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-slate-950"
        >
          HireReady AI
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={`text-sm font-medium transition ${
              isActive("/")
                ? "text-slate-950"
                : "text-slate-500 hover:text-slate-950"
            }`}
          >
            Home
          </Link>

          <Link
            to="/features"
            className={`text-sm font-medium transition ${
              isActive("/features")
                ? "text-slate-950"
                : "text-slate-500 hover:text-slate-950"
            }`}
          >
            Features
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium transition ${
              isActive("/contact")
                ? "text-slate-950"
                : "text-slate-500 hover:text-slate-950"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 sm:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
