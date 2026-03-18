import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-transparent transition-colors duration-300 relative z-10">
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#00c3ff]/10 dark:bg-[#00c3ff]/10 rounded-full blur-[100px] z-[-1] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-16 flex justify-center items-center gap-3 sm:gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-user-astronaut text-[#00c3ff]"></i>
                    <span>About <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Me</span></span>
                </h2>

                <div className="flex flex-col items-center gap-8 md:gap-16">
                    {/* Content */}
                    <div className="w-full max-w-4xl text-center space-y-6 sm:space-y-8">
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 font-light text-base sm:text-lg leading-relaxed transition-colors duration-300">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">I'm Pranav Ghaytadkar</h3>
                            <p className="max-w-2xl mx-auto">
                                I am a passionate Computer Engineering graduate. I love improving my coding skills
                                and developing innovative applications and websites. I specialize in building
                                modern web solutions using Java and React, and I'm always eager to learn new technologies.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
                            <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:shadow-[0_8px_32px_rgba(0,195,255,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-[#00c3ff]/10 flex items-center justify-center text-[#00c3ff] text-xl">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:pranavghaytadakar143@gmail.com" className="text-sm sm:text-base text-gray-800 dark:text-gray-200 hover:text-[#00c3ff] dark:hover:text-[#00c3ff] transition-colors font-medium">
                                        pranavghaytadakar143@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:shadow-[0_8px_32px_rgba(255,123,0,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-full bg-[#ff7b00]/10 flex items-center justify-center text-[#ff7b00] text-xl">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300">
                                        Pune, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-center">
                            <a
                                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b4589fbe-e63b-4c52-8d68-524de3548c08"
                                target="_blank"
                                rel="noreferrer"
                                className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-transparent overflow-hidden transition-all duration-300 border border-[#00c3ff]/30 hover:border-[#00c3ff] dark:hover:border-transparent dark:border-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide transition-colors">View Resume</span>
                                <i className="fa fa-chevron-right relative z-10 text-[#00c3ff] group-hover:text-white group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
