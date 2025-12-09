import React from "react";
import img from "/images/About1.png"; // your image path

export const About = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
            <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[40vh] rounded-full bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
      </div><div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[40vh] rounded-full bg-gradient-to-br from-purple-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
      </div>
            {/* Left: Image */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt="Profile"
                    className="rounded-2xl shadow-lg  opacity-65 shadow-gray-800 w-120 h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-gray-400">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                    I’m a passionate <span className="text-gray-400">Full Stack Developer</span> and
                    <span className="text-gray-400"> Creative Freelancer</span> who loves building elegant digital experiences.
                    My goal is to combine design and technology to create seamless and
                    user-focused interfaces that make an impact.
                </p>

                <div className="flex flex-wrap gap-3">
                    {["React", "Tailwind", "Django", "UI/UX", "API"].map((skill) => (
                        <span
                            key={skill}
                            className="border border-gray-400 text-gray-400  px-4 py-2 rounded-full text-sm hover:bg-gray-400 hover:text-black transition-colors duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
