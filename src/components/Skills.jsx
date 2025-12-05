import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiFastapi,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango size={40} className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-sky-600" /> },
  { name: "REST API", icon: <SiFastapi size={40} className="text-emerald-500" /> },
  { name: "Postman", icon: <SiPostman size={40} className="text-orange-500" /> },
  { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub size={40} className="text-gray-300" /> },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-black py-16 px-6 md:px-20 overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl text-gray-400 mb-2">My Skills</h2>
        <h1 className="text-3xl lg:text-6xl text-white font-bold">
          Technologies & Tools
        </h1>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <h3 className="mt-3 text-sm sm:text-base text-gray-300 font-medium">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
