import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="h-16 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-slate-900"
        >
          HireReady AI
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-5 sm:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-medium transition ${
                  active
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-md px-3 py-1.5 text-[10px] font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-slate-900 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-slate-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
