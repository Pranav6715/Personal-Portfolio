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
        <section id="skills" className="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300 border-t border-gray-200 dark:border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-laptop-code text-[#ff7b00]"></i>
                    <span>Skills & <span className="text-[#ff7b00]">Abilities</span></span>
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${activeCategory === cat.id
                                ? 'bg-[#ff7b00] text-white border-transparent shadow-lg transform scale-105'
                                : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-[#ff7b00] dark:hover:border-[#ff7b00] hover:text-[#ff7b00] dark:hover:text-[#ff7b00]'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6">
                        {filteredSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 min-w-[160px] shadow-lg border border-gray-200 dark:border-white/10 transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#ff7b00] dark:hover:border-[#ff7b00] transition-all duration-300 group"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-gray-900 dark:text-white font-medium text-lg transition-colors duration-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
