import React, { useState } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const skills = skillsData;

    const categories = [
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'tools', name: 'Tools' }
    ];

    const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 bg-transparent transition-colors duration-300 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c3ff]/5 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-12 flex justify-center items-center gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-laptop-code text-[#ff7b00]"></i>
                    <span>Skills & <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Abilities</span></span>
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-300 border backdrop-blur-md ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-[#00c3ff]/80 to-[#ff7b00]/80 text-white border-transparent shadow-[0_0_20px_rgba(0,195,255,0.4)] transform scale-105'
                                : 'bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-black/10 dark:border-white/10 hover:border-[#00c3ff]/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-center">
                        {filteredSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="glass-panel p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transform hover:-translate-y-3 transition-all duration-300 group hover:border-[#00c3ff]/50 hover:shadow-[0_10px_40px_rgba(0,195,255,0.2)]"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 sm:w-16 h-12 sm:h-16 object-contain group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 drop-shadow-md dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                                />
                                <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm tracking-wide text-center group-hover:text-[#00c3ff] dark:group-hover:text-white transition-colors duration-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
