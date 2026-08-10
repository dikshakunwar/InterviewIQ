function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900">
                <span className="text-lg font-bold text-white">H</span>
              </div>

              <span className="text-xl font-bold tracking-tight text-slate-900">
                HireReady
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              AI-powered interview preparation designed to help you practice,
              improve, and become interview-ready.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Product</h3>

            <div className="mt-4 space-y-3">
              <a
                href="#features"
                className="block text-sm text-slate-600 transition hover:text-slate-900"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-slate-600 transition hover:text-slate-900"
              >
                How It Works
              </a>

              <a
                href="#contact"
                className="block text-sm text-slate-600 transition hover:text-slate-900"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Account</h3>

            <div className="mt-4 space-y-3">
              <a
                href="/login"
                className="block text-sm text-slate-600 transition hover:text-slate-900"
              >
                Login
              </a>

              <a
                href="/register"
                className="block text-sm text-slate-600 transition hover:text-slate-900"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HireReady. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
