import React, { useEffect } from 'react';
import { FaArrowLeft, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectsPage = () => {
    const projects = projectsData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-slate-50 dark:bg-[#0a192f] min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-4 mb-12">
                    <Link to="/" className="p-3 rounded-full bg-white dark:bg-white/10 text-gray-800 dark:text-[#ff7b00] shadow-md hover:shadow-lg transition-all transform hover:-translate-x-1 border border-gray-200 dark:border-white/10">
                        <FaArrowLeft className="text-xl" />
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3 transition-colors duration-300">
                        <FaCode className="text-[#ff7b00]" />
                        <span>All <span className="text-[#ff7b00]">Projects</span></span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-white/10 group">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    draggable="false"
                                    src={`/assets/images/projects/${project.image}.png`}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 dark:from-[#0a192f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                                        <p className="text-sm text-gray-200 dark:text-gray-300 capitalize">{project.category} Project</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#ff7b00] dark:group-hover:text-[#ff7b00] transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 mb-6 flex-grow transition-colors duration-300">
                                    {project.desc}
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 bg-gray-200 dark:bg-white/10 hover:bg-[#ff7b00] dark:hover:bg-[#ff7b00] text-gray-900 dark:text-white hover:text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 border border-gray-300 dark:border-white/10 shadow-md transform hover:scale-105"
                                    >
                                        Code <FaCode />
                                    </a>
                                    {project.links.view && (
                                        <a
                                            href={project.links.view}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-[#ff7b00] font-bold hover:underline"
                                        >
                                            Live <FaExternalLinkAlt className="text-sm" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
