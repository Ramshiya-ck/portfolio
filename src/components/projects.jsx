import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub } from "react-icons/fi";

const projectList = [
  {
    id: "car-rental",
    title: "Car Rental",
    stack: "React | TailwindCSS | Vite",
    description: "A modern car rental platform featuring vehicle browsing, availability checking, and seamless booking experience with an elegant, responsive interface.",
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Static vehicle system",
      "Intuitive booking flow with date selection",
      "Fully responsive, mobile-first design approach",
    ],
    stats: [
      { label: "Role", value: "Fullstack Developer" },
      { label: "Platform", value: "Web" },
      { label: "Status", value: "Live" },
    ],
    codeUrl: "https://github.com/Ramshiya-ck/Car-Rental-website",
    detailsUrl: "https://car-rental-website-two-xi.vercel.app/",
  },
  {
    id: "foodzz",
    title: "Foodzz",
    stack: "HTML | TailwindCSS | JavaScript | Django | PostgreSQL",
    description: "A web application for ordering foods with curated menus, lightning-fast checkout, and realtime courier tracking that keeps hungry customers in the loop.",
    cover:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Personalized taste graph keeps the hero carousel relevant per user",
      "Order flow built around one-touch reorders & smart upsells",
      "Operations dashboard shows riders, ETAs, and kitchen load",
    ],
    stats: [
      { label: "Impact", value: "+38% repeat orders" },
      { label: "Role", value: "Product Designer" },
      { label: "Platform", value: "Responsive Web" },
    ],
    codeUrl: "https://github.com/Ramshiya-ck/FOODZ",
    detailsUrl: "https://dribbble.com/shots/foodzz",
  },

  {
    id: "stay",
    title: "StayFinder",
    stack: "Next.js | TailwindCSS | Prisma | PostgreSQL",
    description: "A luxury stay discovery experience with cinematic imagery, progressive filtering, and concierge chat baked into the hero area.",
    cover:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Tri-panel slider showcases stay, neighborhood, and host vibe",
      "Mood-based filters and saved itineraries sync across devices",
      "Concierge widget orchestrates upgrades and local perks",
    ],
    stats: [
      { label: "Impact", value: "+51% conversion" },
      { label: "Role", value: "Fullstack" },
      { label: "Platform", value: "Responsive Web" },
    ],
    codeUrl: "https://github.com/Ramshiya-ck/StayFinder-frontend",
    detailsUrl: "https://dribbble.com/shots/staysphere",
  },

];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getRelativePosition = (index) => {
    const total = projectList.length;
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const handleNavigate = (direction) => {
    setActiveIndex((prev) => {
      const next = (prev + direction + projectList.length) % projectList.length;
      return next;
    });
  };

  const activeProject = projectList[activeIndex];

  return (
    <section id="projects" className="relative overflow-hidden bg-[#03060b] py-20 px-6 md:px-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[40vh] rounded-full bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-white/50">Projects</p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">Touch-worthy experience carousel</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Tap or click a tile to bring it to the front. The info bar refreshes instantly, mirroring the
            premium micro-interactions from your reference inspiration.
          </p>
        </motion.header>

        <div className="relative">
          <div className="relative h-[360px] sm:h-[400px] md:h-[460px]">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "1600px" }}
            >
              {projectList.map((project, index) => {
                const offset = getRelativePosition(index);
                const depth = Math.abs(offset);
                const translateX = offset * 170;
                const translateZ = -depth * 160;
                const rotateY = offset * -7;
                const scale = Math.max(1 - depth * 0.08, 0.72);
                const isHidden = depth > 2;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="absolute w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-[32px] shadow-2xl shadow-black/60 ring-1 ring-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      zIndex: 30 - depth,
                      opacity: isHidden ? 0 : 1,
                      filter: `blur(${depth * 1.3}px)`,
                      transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70 z-10" />
                    <img
                      src={project.cover}
                      alt={`${project.title} showcase`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-6 left-6 z-20 text-left text-white">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-white/60">Preview</p>
                      <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-10"
              >
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.45em] text-cyan-200/70">
                      Featured Project
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                      {activeProject.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium tracking-wide text-cyan-100/80">
                      {activeProject.stack}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-white/70">{activeProject.description}</p>

                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {activeProject.stats.map((stat) => (
                        <li
                          key={stat.label}
                          className="rounded-2xl border border-white/5 bg-black/40 px-4 py-3 text-white/70"
                        >
                          <p className="text-[11px] uppercase tracking-wide text-white/50">{stat.label}</p>
                          <p className="mt-1 text-lg font-semibold text-white">{stat.value}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full md:max-w-sm">
                    <div className="rounded-[28px] border border-white/10 bg-black/40 p-6 shadow-inner shadow-white/5">
                      <h4 className="text-lg font-semibold text-white">Highlights</h4>
                      <ul className="mt-4 space-y-3 text-sm text-white/70">
                        {activeProject.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col">
                        <a
                          href={activeProject.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                        >
                          <FiGithub className="text-base" /> Get code
                        </a>
                        <a
                          href={activeProject.detailsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
                        >
                          <FiArrowUpRight className="text-base" /> More details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => handleNavigate(-1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-white hover:text-white"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                type="button"
                onClick={() => handleNavigate(1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-white transition hover:border-white hover:text-white"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3">
              {projectList.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
