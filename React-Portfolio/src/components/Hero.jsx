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
        <section id="home" className="relative min-h-screen flex items-center justify-start bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300 overflow-hidden pt-20">
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
                <div className="max-w-3xl">
                    <h2 className="text-gray-800 dark:text-gray-300 text-4xl md:text-6xl font-extrabold mb-4 leading-tight transition-colors duration-300">
                        Hi There<br />
                        <span className="text-gray-900 dark:text-white transition-colors duration-300">I'm Pranav </span>
                        <span className="text-[#ff7b00]">Ghaytadkar</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-8 transition-colors duration-300">
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

                    <a href="#about" className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66f00] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,123,0,0.4)] transition-all duration-300 transform hover:scale-105">
                        <span>About Me</span>
                        <i className="fas fa-arrow-circle-down"></i>
                    </a>

                    <div className="mt-8 flex gap-4">
                        <a href="https://www.linkedin.com/in/pranav-ghaytadkar-01b17521a/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex justify-center items-center text-2xl hover:text-white hover:bg-[#007bb5] dark:hover:bg-[#007bb5] hover:scale-110 transition-all duration-300 border border-gray-300 dark:border-white/20">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Pranav6715" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex justify-center items-center text-2xl hover:text-white hover:bg-gray-800 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-300 border border-gray-300 dark:border-white/20">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://instagram.com/pranavghaytadkar_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white flex justify-center items-center text-2xl hover:text-white hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110 transition-all duration-300 border border-gray-300 dark:border-white/20">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
