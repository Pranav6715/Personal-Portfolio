import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
    // Filter out android and limit to 6
    const projects = projectsData.filter(p => p.category !== "android").slice(0, 6);

    return (
        <section id="work" className="py-20 bg-transparent transition-colors duration-300 relative">
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#2506ad]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-10 sm:mb-16 flex justify-center items-center gap-3 sm:gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-laptop-code text-[#00c3ff]"></i>
                    <span>Projects <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Made</span></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel overflow-hidden transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,195,255,0.15)] hover:border-[#00c3ff]/30 transition-all duration-500 group flex flex-col h-full rounded-3xl relative">
                            {/* Glow behind card */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#00c3ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                                <img
                                    draggable="false"
                                    src={`/assets/images/projects/${project.image}.png`}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-[#ff7b00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Professional</span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#00c3ff] dark:group-hover:text-[#00c3ff] transition-colors duration-300 tracking-wide">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 font-light leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center mt-auto border-t border-black/10 dark:border-white/10 pt-5">
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#00c3ff] dark:hover:text-white transition-colors group/link"
                                    >
                                        <span className="font-medium tracking-wide">Code</span>
                                        <i className="fas fa-code text-[#00c3ff] group-hover/link:rotate-12 transition-transform"></i>
                                    </a>
                                    {project.links.view && (
                                        <a
                                            href={project.links.view}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[#ff7b00] font-bold hover:text-[#e66f00] dark:hover:text-white text-sm md:text-base whitespace-nowrap transition-colors flex items-center gap-2 group/demo tracking-wide"
                                        >
                                            Live Demo
                                            <i className="fas fa-external-link-alt text-xs group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1 transition-transform"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/projects" className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent overflow-hidden transition-all duration-300 border border-[#00c3ff]/30 hover:border-[#00c3ff] dark:hover:border-transparent dark:border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <span className="relative z-10 font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide transition-colors">View All Projects</span>
                        <i className="fas fa-arrow-right relative z-10 text-[#00c3ff] group-hover:text-white group-hover:translate-x-1 transition-all"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
