import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode } = useTheme();
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-start bg-transparent transition-colors duration-300 overflow-hidden pt-20">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 z-0"
                options={{
                    fullScreen: { enable: false, zIndex: 0 },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: isDarkMode ? "#ffffff" : "#0a192f" },
                        links: { color: isDarkMode ? "#ffffff" : "#0a192f", distance: 150, enable: true, opacity: 0.5, width: 1 },
                        move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
                        number: { density: { enable: true, area: 800 }, value: 60 },
                        opacity: { value: 0.3 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
            />

            <div className="container mx-auto px-6 md:px-12 z-10 text-gray-900 dark:text-white transition-colors duration-300">
                <div className="max-w-4xl relative z-10">
                    <h2 className="text-gray-800 dark:text-gray-300 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight transition-colors duration-300">
                        Hi There<br />
                        <span className="text-gray-900 dark:text-white transition-colors duration-300">I'm <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Pranav Ghaytadkar</span></span>
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8 transition-colors duration-300">
                        i am into {' '}
                        <span className="text-[#00c3ff] font-bold">
                            <Typewriter
                                words={['frontend development', 'backend development', 'software engineering']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={50}
                                deleteSpeed={25}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>

                    <a href="#about" className="mt-4 relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent overflow-hidden transition-all duration-300 border border-[#ff7b00]/30 hover:border-[#ff7b00] dark:hover:border-transparent dark:border-white/10 shadow-[0_0_20px_rgba(255,123,0,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00] to-[#00c3ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide transition-colors">About Me</span>
                        <i className="fa fa-arrow-circle-down relative z-10 text-[#ff7b00] group-hover:text-white group-hover:animate-bounce transition-colors"></i>
                    </a>

                    <div className="mt-10 flex gap-5">
                        <a href="https://www.linkedin.com/in/pranav-ghaytadkar-01b17521a/" target="_blank" rel="noreferrer" className="glass flex justify-center items-center w-14 h-14 rounded-full text-2xl text-gray-800 dark:text-gray-300 hover:text-[#00c3ff] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group">
                            <i className="fab fa-linkedin group-hover:drop-shadow-[0_0_8px_rgba(0,195,255,0.8)] transition-all duration-300"></i>
                        </a>
                        <a href="https://github.com/Pranav6715" target="_blank" rel="noreferrer" className="glass flex justify-center items-center w-14 h-14 rounded-full text-2xl text-gray-800 dark:text-gray-300 hover:text-white dark:hover:text-[#00c3ff] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group">
                            <i className="fab fa-github group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:group-hover:drop-shadow-[0_0_8px_rgba(0,195,255,0.8)] transition-all duration-300"></i>
                        </a>
                        <a href="https://instagram.com/pranavghaytadkar_" target="_blank" rel="noreferrer" className="glass flex justify-center items-center w-14 h-14 rounded-full text-2xl text-gray-800 dark:text-gray-300 hover:text-[#ff7b00] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group">
                            <i className="fab fa-instagram group-hover:drop-shadow-[0_0_8px_rgba(255,123,0,0.8)] transition-all duration-300"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
