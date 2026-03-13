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
        <section id="education" className="py-20 bg-transparent transition-colors duration-300 relative">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#00c3ff]/5 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-6 flex justify-center items-center gap-3 sm:gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-graduation-cap text-[#00c3ff]"></i>
                    <span>My <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Education</span></span>
                </h2>

                <p className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 italic mb-12 sm:mb-16 font-light tracking-wide max-w-2xl mx-auto transition-colors duration-300">
                    "Education is not the learning of facts, but the training of the mind to think."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="glass-panel rounded-2xl overflow-hidden transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,195,255,0.1)] hover:border-[#00c3ff]/30 transition-all duration-500 flex flex-col group relative"
                        >
                             {/* Glow behind card */}
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00c3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-full h-40 sm:h-52 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500 z-10"></div>
                                <img
                                    draggable="false"
                                    src={`/assets/images/educat/${edu.image}`}
                                    alt={edu.institution}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
                                <div className="glass rounded-xl p-5 border-[#00c3ff]/20 bg-white/90 dark:bg-[#030014]/80 mb-4 shadow-lg group-hover:border-[#00c3ff]/50 transition-colors duration-300">
                                    <h3 className="text-sm md:text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug tracking-wide group-hover:text-[#00c3ff] dark:group-hover:text-[#00c3ff] transition-colors duration-300">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-light tracking-wide transition-colors duration-300">{edu.institution}</p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-2">
                                    <h4 className="text-xs font-bold text-[#ff7b00] bg-[#ff7b00]/10 px-4 py-2 rounded-full border border-[#ff7b00]/30 tracking-wider">
                                        {edu.duration}
                                    </h4>
                                    <h4 className="text-xs md:text-sm text-[#00c3ff] font-bold tracking-wider">
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
