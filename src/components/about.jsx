import React from "react";

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
            {/* Left: Circular Image */}
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/80 group">
                    <img
                        src="/images/profile.JPG"
                        alt="Profile"
                        className="w-full h-full object-cover object-[center_17%] scale-110 group-hover:scale-120 transition-transform duration-750 ease-out"
                    />
                    {/* Light black blend overlay */}
                    <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
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
