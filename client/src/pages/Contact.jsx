import { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-5 py-10">
        {/* Header */}
        <div className="max-w-xl">
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
            Contact
          </p>

          <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
            How can we help?
          </h1>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Have a question, feedback, or something you'd like to discuss? Send
            us a message and we'll get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Send us a message
            </h2>

            <p className="mt-1 text-[10px] text-slate-400">
              Fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Name + Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[10px] font-medium text-slate-600"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-[10px] font-medium text-slate-600"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="mt-1.5 h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-medium text-slate-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows={5}
                  className="mt-1.5 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2.5 text-xs leading-5 text-slate-700 outline-none placeholder:text-slate-300 focus:border-slate-400"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="rounded-md bg-slate-900 px-4 py-2 text-[11px] font-semibold text-white transition hover:bg-slate-800"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </section>

          {/* Contact Information */}
          <aside className="space-y-3">
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Get in touch
              </h2>

              <p className="mt-1 text-[10px] leading-4 text-slate-400">
                We're always happy to hear your feedback and suggestions.
              </p>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-700">
                    support@hireready.ai
                  </p>
                </div>

                <div className="h-px bg-slate-100" />

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Support
                  </p>

                  <p className="mt-1 text-xs text-slate-600">Monday – Friday</p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    We usually respond within 24–48 hours.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Common questions
              </h2>

              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-[10px] font-medium text-slate-700">
                    Need help with your resume?
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                    Upload your resume from the Resume page and continue to
                    interview setup.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium text-slate-700">
                    Having an interview issue?
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                    Make sure your microphone permissions are enabled before
                    starting a live interview.
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Contact;
