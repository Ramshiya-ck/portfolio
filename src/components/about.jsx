import React from "react";
import img from "/images/About1.png"; // your image path

export const About = () => {
    return (
        <section id="about" className="bg-black text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">

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

                <a
                    href="/Ramshiya_CV.pdf"
                    download="Ramshiya_FullStack_CV.pdf"
                    className="mt-6 bg-orange-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-500 transition-all duration-300 inline-block"
                >
                    Download CV
                </a>

            </div>
        </section>
    );
};
