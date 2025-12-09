import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const socials = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://linkedin.com" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com" },
    { icon: <FaTwitter />, label: "Twitter", link: "https://twitter.com" },
    { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/ramshy__abdul/?next=%2F" },
    { icon: <FaWhatsapp />, label: "WhatsApp", action: () => window.open('https://wa.me/918714316301?text=Hello%20I%20am%20interested%20in%20your%20service', '_blank'), type: "button" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xnnebllq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", project: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#050607] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/50">Contact</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Let’s start something remarkable</h2>
          <p className="mt-3 text-base text-white/70 max-w-2xl mx-auto">
            Tell me about your idea, and I’ll return with concepts, prototypes, or code—whatever moves
            us forward fastest.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-1 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <h3 className="text-2xl font-semibold">Project brief</h3>
              <p className="mt-2 text-sm text-white/60">
                Share the essentials: goals, timeline, and the experience you envision. I’ll respond
                with a tailored approach.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/50">Full name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/50">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-[0.35em] text-white/50">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-xs uppercase tracking-[0.35em] text-white/50">Project</label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows="4"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-4 text-sm text-white focus:border-white/40 focus:outline-none"
                    placeholder="Outline the challenge and desired outcomes"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] transition ${
                    isSubmitting 
                      ? "bg-gray-500 text-gray-300 cursor-not-allowed" 
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Brief"} <FiSend className="text-base" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-6 sm:p-8">
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
                    <a href="tel:+918714316363" className="text-base font-semibold hover:text-cyan-400 transition-colors">+91 87143 163601</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-lg text-white/80">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">Base</p>
                    <p className="text-base font-semibold">Malappuram, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b0d10] p-6 sm:p-8">
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/50">Social</h4>
              <p className="mt-3 text-sm text-white/65">
                Follow the work-in-progress, live prototypes, and weekend experiments.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                {socials.map((item, index) => (
                  item.type === "button" ? (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-xl text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      {item.icon}
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-xl text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      {item.icon}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowSuccess(false)}></div>
          <div className="relative bg-white text-black rounded-2xl p-6 sm:p-8 max-w-md w-full mx-auto">
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-700 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};