import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', msg: 'Submitting...' });

        try {
            const response = await fetch("http://localhost:8080/api/contact/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Form Submitted Successfully!' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus({ type: 'error', msg: 'Failed to submit the form.' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Error occurred: ' + error.message });
        }
    };

    return (
        <section id="contact" className="py-20 bg-transparent transition-colors duration-300 relative">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ff7b00]/5 rounded-t-full blur-[100px] z-[-1] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-10 sm:mb-16 flex justify-center items-center gap-3 sm:gap-4 tracking-tight transition-colors duration-300">
                    <i className="fas fa-headset text-[#00c3ff]"></i>
                    <span>Get in <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent">Touch</span></span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-2xl transition-all duration-300">
                    <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-none">
                        <img
                            draggable="false"
                            src="/assets/images/contact1.png"
                            alt="Contact"
                            className="w-2/3 sm:w-1/2 lg:w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-[#00c3ff] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base placeholder-gray-500 peer"
                                />
                                <i className="fas fa-user absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-[#00c3ff] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-[#00c3ff] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base placeholder-gray-500 peer"
                                />
                                <i className="fas fa-envelope absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-[#00c3ff] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-[#00c3ff] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base placeholder-gray-500 peer"
                                />
                                <i className="fas fa-phone-alt absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-[#00c3ff] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    rows="1"
                                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-black/10 dark:border-white/10 focus:border-[#00c3ff] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium resize-none text-sm md:text-base placeholder-gray-500 peer min-h-[100px]"
                                ></textarea>
                                <i className="fas fa-comment-dots absolute left-2 top-4 text-gray-500 peer-focus:text-[#00c3ff] transition-colors"></i>
                            </div>

                            <div className="flex flex-col items-center gap-4 pt-6">
                                <button
                                    type="submit"
                                    className="w-full relative group inline-flex items-center justify-center gap-3 py-4 rounded-full bg-transparent overflow-hidden transition-all duration-300 border border-[#00c3ff]/30 hover:border-[#00c3ff] dark:hover:border-transparent dark:border-white/10"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 font-bold text-gray-900 dark:text-white group-hover:text-white tracking-wide transition-colors">Send Message</span>
                                    <i className="fa fa-paper-plane relative z-10 text-[#00c3ff] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                </button>
                                {status.msg && (
                                    <span className={`font-bold mt-2 ${status.type === 'success' ? 'text-green-400' : status.type === 'error' ? 'text-red-400' : 'text-blue-400'}`}>
                                        {status.msg}
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
