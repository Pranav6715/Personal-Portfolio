import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
    // Filter out android and limit to 6
    const projects = projectsData.filter(p => p.category !== "android").slice(0, 6);

    return (
        <section id="work" className="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-laptop-code text-[#ff7b00]"></i>
                    <span>Projects <span className="text-[#ff7b00]">Made</span></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-white/10 group">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    draggable="false"
                                    src={`/assets/images/projects/${project.image}.png`}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                                        <p className="text-sm text-[#ff7b00]/80">Professional Project</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#ff7b00] dark:group-hover:text-[#ff7b00] transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 mb-6 line-clamp-3 transition-colors duration-300">
                                    {project.desc}
                                </p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-200 dark:bg-white/10 hover:bg-[#ff7b00] dark:hover:bg-[#ff7b00] text-gray-900 dark:text-white hover:text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 border border-gray-300 dark:border-white/10 shadow-md transform hover:scale-105"
                                    >
                                        Code <i className="fas fa-code"></i>
                                    </a>
                                    {project.links.view && (
                                        <a
                                            href={project.links.view}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[#ff7b00] font-bold hover:underline"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/projects" className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66f00] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <span>View All Projects</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
