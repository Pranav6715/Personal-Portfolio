import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-[#0a192f] transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-user-alt text-[#ff7b00]"></i>
                    <span>About <span className="text-[#ff7b00]">Me</span></span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    {/* Image */}
                    <div className="w-full md:w-2/5 flex justify-center order-first">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/assets/images/pranav.jpg"
                                alt="Pranav"
                                className="relative rounded-2xl shadow-2xl w-48 sm:w-56 md:w-full max-w-sm h-auto transform group-hover:scale-[1.02] transition-transform duration-500 border border-white/10"
                                draggable="false"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">I'm Pranav Ghaytadkar</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
                            I am a passionate Computer Engineering graduate. I love improving my coding skills
                            and developing innovative applications and websites. I specialize in building
                            modern web solutions using Java and React, and I'm always eager to learn new technologies.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/10 border-l-4 border-l-[#ff7b00] flex-1 min-w-[250px] transform hover:-translate-y-1 transition-all duration-300">
                                <p className="text-gray-700 dark:text-gray-300 text-lg mb-2 transition-colors duration-300">
                                    <span className="font-bold text-[#ff7b00]">Email : </span>
                                    pranavghaytadakar143@gmail.com
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 text-lg transition-colors duration-300">
                                    <span className="font-bold text-[#ff7b00]">Place : </span>
                                    Pune, India
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b4589fbe-e63b-4c52-8d68-524de3548c08"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66f00] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-[0_0_20px_rgba(255,123,0,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span>View Resume</span>
                            <i className="fas fa-chevron-right text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
