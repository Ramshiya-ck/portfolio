import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  const links = [
    { label: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { label: "GitHub", icon: <FaGithub />, href: "https://github.com" },
    { label: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030405] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-white/40">Ramshiya.ck</p>
          <h3 className="mt-4 text-2xl font-semibold">Designing and shipping precise digital products.</h3>
          <p className="mt-2 text-sm text-white/60">
            UI/UX + Fullstack, focused on clean interactions, measurable outcomes, and premium handover
            files.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg text-white/70 transition hover:border-white/40 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Ramshiya.ck — All rights reserved.</span>
          <span className="tracking-[0.35em] uppercase">Crafted with intent</span>
        </div>
      </div>
    </footer>
  );
};

