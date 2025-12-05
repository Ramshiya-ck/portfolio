import React from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  const socials = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://linkedin.com" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com" },
    { icon: <FaTwitter />, label: "Twitter", link: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="bg-[#050607] py-20 px-6 lg:px-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/50">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold">Let’s start something remarkable</h2>
          <p className="mt-3 text-base text-white/70">
            Tell me about your idea, and I’ll return with concepts, prototypes, or code—whatever moves
            us forward fastest.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <h3 className="text-2xl font-semibold">Project brief</h3>
              <p className="mt-2 text-sm text-white/60">
                Share the essentials: goals, timeline, and the experience you envision. I’ll respond
                with a tailored approach.
              </p>

              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Full name</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/50">Project</label>
                  <textarea
                    rows="4"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="Outline the challenge and desired outcomes"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => window.location.href = 'mailto:ckramshiyaa@gmail.com?subject=Project Brief&body=Hi Ramshiya,%0D%0A%0D%0AI would like to discuss a project with you.'}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
                >
                  Send Brief <FiSend className="text-base" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-8">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/50">Direct line</h4>
              <div className="mt-6 space-y-5 text-white">
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:ckramshiyaa@gmail.com"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg text-white/80 hover:border-white/40 hover:text-white transition-all"
                  >
                    <FiMail />
                  </a>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">Email</p>
                    <a href="mailto:ckramshiyaa@gmail.com" className="text-base font-semibold hover:text-cyan-400 transition-colors">ckramshiyaa@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="tel:+918714316301"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg text-white/80 hover:border-white/40 hover:text-white transition-all"
                  >
                    <FiPhone />
                  </a>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">Phone</p>
                    <a href="tel:+918714316363" className="text-base font-semibold hover:text-cyan-400 transition-colors">+91 87143 16363</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg text-white/80">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">Base</p>
                    <p className="text-base font-semibold">Calicut, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-8">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/50">Social</h4>
              <p className="mt-3 text-sm text-white/65">
                Follow the work-in-progress, live prototypes, and weekend experiments.
              </p>
              <div className="mt-6 flex gap-4">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-xl text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

