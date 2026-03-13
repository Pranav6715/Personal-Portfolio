import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    const experiences = [
        {
            company: "Technogrowth Software Solutions Pvt. Ltd.",
            role: "Web Development | Intern",
            duration: "Jul 2021 - Sep 2021",
        },
        {
            company: "Intern Pe.",
            role: "Java Programming | Intern",
            duration: "Jul 2023 - Jul 2023",
        },
        {
            company: "Logipool Infotech",
            role: "Web Development | Intern",
            duration: "Oct 2021 - Dec 2021",
        },
    ];

    return (
        <section id="experience" className="py-20 bg-transparent transition-colors duration-300 relative">
             {/* Background Glow */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff7b00]/10 dark:bg-[#ff7b00]/5 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-10 sm:mb-16 flex justify-center items-center gap-3 sm:gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-briefcase text-[#00c3ff]"></i>
                    <span>Work <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Experience</span></span>
                </h2>

                <div className="relative border-l-2 border-[#00c3ff]/30 ml-3 sm:ml-4 md:ml-12 space-y-8 md:space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 sm:pl-10 group">
                            {/* Dot */}
                            <div className="absolute top-2 -left-[9px] w-4 h-4 bg-[#f8fafc] dark:bg-[#030014] border-2 border-[#00c3ff] rounded-full group-hover:bg-[#00c3ff] group-hover:shadow-[0_0_15px_rgba(0,195,255,0.8)] transition-all duration-300 z-10"></div>

                            <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(0,195,255,0.15)] group-hover:border-[#00c3ff]/50">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide group-hover:text-[#00c3ff] transition-colors duration-300">{exp.company}</h3>
                                <h4 className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wider transition-colors duration-300">{exp.role}</h4>
                                <p className="text-xs md:text-sm text-[#ff7b00] font-bold tracking-widest">{exp.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/experience" className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent overflow-hidden transition-all duration-300 border border-[#00c3ff]/30 hover:border-[#00c3ff] dark:hover:border-transparent dark:border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <span className="relative z-10 font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide transition-colors">View All Experience</span>
                        <i className="fas fa-arrow-right relative z-10 text-[#00c3ff] group-hover:text-white group-hover:translate-x-1 transition-all"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Experience;
