import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (install if not already: npm install lucide-react)
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-black/90 text-white shadow-md backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo / Title */}
        <div className="text-2xl font-semibold tracking-wide hover:text-gray-400 transition duration-300">
          Portfolio
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10 text-sm font-medium">
            {[
              { label: "Home", sectionId: "home" },
              { label: "About", sectionId: "about" },
              { label: "Projects", sectionId: "projects" },
              { label: "Skills", sectionId: "skills" },
            ].map((item) => (
              <li key={item.sectionId}>
                <button
                  onClick={() => handleNavClick(item.sectionId)}
                  className="transition duration-300 text-gray-300 hover:text-white cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 rounded-full bg-gray-500 hover:bg-gray-600 text-black font-semibold transition duration-300 shadow-lg hover:shadow-white-500/30"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 text-center py-6 space-y-6 transition-all duration-300">
          <ul className="space-y-4 text-lg font-medium">
            {[
              { label: "Home", sectionId: "home" },
              { label: "About", sectionId: "about" },
              { label: "Projects", sectionId: "projects" },
              { label: "Skills", sectionId: "skills" },
            ].map((item) => (
              <li key={item.sectionId} onClick={() => handleNavClick(item.sectionId)}>
                <button className="block cursor-pointer hover:text-gray-400 transition duration-300">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => handleNavClick('contact')}
            className="mt-4 inline-block px-5 py-2 rounded-full bg-gray-500 hover:bg-gray-600 text-black font-semibold transition duration-300 shadow-lg hover:shadow-white-500/30"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
