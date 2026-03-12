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
        <section id="experience" className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-briefcase text-[#ff7b00]"></i>
                    <span>Work <span className="text-[#ff7b00]">Experience</span></span>
                </h2>

                <div className="relative border-l-4 border-[#ff7b00] ml-4 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-10 group">
                            {/* Dot */}
                            <div className="absolute top-0 -left-[14px] w-6 h-6 bg-slate-50 dark:bg-[#0a192f] border-4 border-[#ff7b00] rounded-full group-hover:scale-125 transition-all duration-300 z-10"></div>

                            <div className="bg-white dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:border-[#ff7b00] dark:hover:border-[#ff7b00] transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{exp.company}</h3>
                                <h4 className="text-xl font-semibold text-[#ff7b00] mb-2">{exp.role}</h4>
                                <p className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300">{exp.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/experience" className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66f00] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <span>View All Experience</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Experience;
