import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology in Computer Engineering",
            institution: "D Y Patil University Ambi, Pune.",
            duration: "2022-2025 | Completed",
            score: "CGPA: 8.90",
            image: "dy-patil.jpg",
        },
        {
            degree: "Diploma In Computer Technology",
            institution: "Ekalavya Shikshan Sanstha's Polytechnic, Pune.",
            duration: "2019-2022 | Completed",
            score: "Percentage: 80.91%",
            image: "Essp.jpg",
        },
        {
            degree: "Maharashtra State Board SSC (Class X)",
            institution: "Mahesh Vidyalaya School Pune.",
            duration: "2018-2019 | Completed",
            score: "Percentage: 73.00%",
            image: "School.jpg",
        },
    ];

    return (
        <section id="education" className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-graduation-cap text-[#ff7b00]"></i>
                    <span>My <span className="text-[#ff7b00]">Education</span></span>
                </h2>

                <p className="text-center text-lg text-gray-700 dark:text-gray-300 italic mb-12 font-medium transition-colors duration-300">
                    "Education is not the learning of facts, but the training of the mind to think."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-white/10 flex flex-col group"
                        >
                            <div className="w-full h-40 sm:h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
                                <img
                                    draggable="false"
                                    src={`/assets/images/educat/${edu.image}`}
                                    alt={edu.institution}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-[#ff7b00] dark:group-hover:text-[#ff7b00] transition-colors duration-300">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-4 transition-colors duration-300">{edu.institution}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs md:text-sm font-semibold text-[#ff7b00] bg-[#ff7b001a] inline-block px-3 py-1 rounded-full mb-2 border border-[#ff7b0033]">
                                        {edu.duration}
                                    </h4>
                                    <h4 className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300">
                                        {edu.score}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
