import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
                Have a question?
                <br />
                <span className="text-slate-500">We're here to help.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you have a question about HireReady, need help with your
                account, or want to share feedback, send us a message.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Let's talk about your interview preparation.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Send us your question or feedback and we'll get back to you as
                soon as possible.
              </p>

              <div className="mt-10 space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <span className="text-sm font-bold text-slate-700">@</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      support@hireready.ai
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <span className="text-sm font-bold text-slate-700">?</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Support
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Get help with your account and interviews.
                    </p>
                  </div>
                </div>

                {/* Feedback */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <span className="text-sm font-bold text-slate-700">+</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Feedback
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Help us make HireReady better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below.
              </p>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                {/* Email */}
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
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                FAQ
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              <details className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  What is HireReady?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  HireReady is an AI-powered interview preparation platform that
                  helps candidates practice interviews and understand their
                  performance.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Can I practice using my own resume?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Yes. You will be able to upload your resume and use it as
                  context for personalized interview preparation.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Will the interview questions be personalized?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The goal is to generate questions based on your selected role,
                  resume, skills, projects, and interview type.
                </p>
              </details>

              <details className="group rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  Can I see my previous performance?
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Yes. Your dashboard will eventually contain interview history,
                  scores, feedback, and performance trends.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start preparing today.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Build confidence through realistic practice and meaningful
              feedback.
            </p>

            <button className="mt-8 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
