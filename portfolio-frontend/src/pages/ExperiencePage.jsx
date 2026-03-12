import React, { useEffect } from 'react';
import { FaArrowLeft, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExperiencePage = () => {
    const experiences = [
        {
            company: "Technogrowth Software Solutions Pvt. Ltd.",
            role: "Web Development | Intern",
            duration: "Jul 2021 - Sep 2021",
            desc: "Worked on frontend development and UI/UX design components."
        },
        {
            company: "Intern Pe.",
            role: "Java Programming | Intern",
            duration: "Jul 2023 - Jul 2023",
            desc: "Developed Java based applications and core logic."
        },
        {
            company: "Logipool Infotech",
            role: "Web Development | Intern",
            duration: "Oct 2021 - Dec 2021",
            desc: "Assisted in building responsive web applications using modern technologies."
        },
    ];

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
                        <FaBriefcase className="text-[#ff7b00]" />
                        <span>Work <span className="text-[#ff7b00]">Experience</span></span>
                    </h1>
                </div>

                <div className="relative border-l-4 border-[#ff7b00] ml-4 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-10 group">
                            {/* Dot */}
                            <div className="absolute top-0 -left-[14px] w-6 h-6 bg-slate-50 dark:bg-[#0a192f] border-4 border-[#ff7b00] rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="bg-white dark:bg-white/5 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:border-[#ff7b00] dark:hover:border-[#ff7b00] transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{exp.company}</h3>
                                <h4 className="text-xl font-semibold text-[#ff7b00] mb-2">{exp.role}</h4>
                                <p className="text-gray-600 dark:text-gray-400 font-bold mb-4 transition-colors duration-300">{exp.duration}</p>
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;
