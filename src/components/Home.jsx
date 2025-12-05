import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '/images/ramsiya.jpg'
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { About } from './about'
import { Skills } from './Skills'
import Projects from './projects'

export const Home = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/about');
  };

  const handleViewWork = () => {
    navigate('/projects');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ckramshiyaa@gmail.com?subject=Project Brief&body=Hi Ramshiya,%0D%0A%0D%0AI would like to discuss a project with you.';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918714316363';
  };
  return (
    <>
    <div className='bg-black h-[93vh] flex items-center relative overflow-hidden'>
        {/* Subtle background effects */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]'></div>
        
        <div className='flex justify-between items-center w-full px-10 relative z-10'>
            <div className='flex-1 max-w-2xl'>
                {/* Greeting */}
                <div className='mb-8'>
                    <span className='text-gray-500 text-sm font-light tracking-[0.2em] uppercase'>Welcome to my world</span>
                </div>
                
                {/* Main heading */}
                <h1 className='text-gray-400 font-light text-4xl lg:text-5xl leading-tight mb-6'>
                    Hello, I'm <span className='font-Ramshiya text-6xl lg:text-7xl text-white block mt-2'>Ramshiya</span>
                </h1>
                
                {/* Description */}
                <p className='text-gray-400 font-light text-lg lg:text-xl leading-relaxed mb-10 max-w-lg'>
                    Passionate about coding, design, and innovation — I bring ideas to life through full-stack development, creating digital experiences that stand out.
                </p>
                
                {/* CTA Button */}
                <div className='flex gap-4'>
                    <button 
                        onClick={handleKnowMore}
                        className='bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    >
                        KNOW MORE
                    </button>
                    <button 
                        onClick={handleViewWork}
                        className='border border-gray-600 text-gray-300 rounded-full px-8 py-4 font-medium hover:border-white hover:text-white transition-all duration-300'
                    >
                        VIEW WORK
                    </button>
                </div>

                {/* Social Icons (Updated Stats Section) */}
                <div className='flex gap-5 mt-10 justify-start'>
                    {[ 
                        { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/ramshiya-ck", type: "link" },
                        { icon: <FaGithub />, link: "https://github.com/Ramshiya-ck", type: "link" },
                        { icon: <FaEnvelope />, action: handleEmailClick, type: "button" },
                        { icon: <FaPhoneAlt />, action: handlePhoneClick, type: "button" },
                    ].map((item, index) => (
                        item.type === "link" ? (
                          <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-14 h-14 flex items-center justify-center rounded-2xl 
                                       backdrop-blur-md bg-white/10 border border-white/20 
                                       shadow-lg text-gray-400 text-2xl
                                       hover:bg-gray-400 hover:text-black hover:scale-110 
                                       transition-all duration-500'
                          >
                            {item.icon}
                          </a>
                        ) : (
                          <button
                            key={index}
                            onClick={item.action}
                            className='w-14 h-14 flex items-center justify-center rounded-2xl 
                                       backdrop-blur-md bg-white/10 border border-white/20 
                                       shadow-lg text-gray-400 text-2xl
                                       hover:bg-gray-400 hover:text-black hover:scale-110 
                                       transition-all duration-500 cursor-pointer'
                          >
                            {item.icon}
                          </button>
                        )
                    ))}
                </div>
            </div>
            
            {/* Image section */}
            <div className='flex-1 flex justify-center items-center'>
                <div className='relative group'>
                    {/* Subtle glow effect */}
                    <div className='absolute inset-0 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700'></div>
                    <img 
                        src={img} 
                        className='relative w-[700px] max-w-none opacity-70  transition-all duration-500 ' 
                        alt="Ramshiya - Full Stack Developer" 
                    />
                </div>
            </div>
        </div>

    </div>
    <About />
    <Skills />
    <Projects />
    </>
  )
}
