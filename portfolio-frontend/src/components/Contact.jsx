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
        <section id="contact" className="py-20 bg-white dark:bg-[#0a192f] transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16 flex justify-center items-center gap-3 transition-colors duration-300">
                    <i className="fas fa-headset text-[#ff7b00]"></i>
                    <span>Get in <span className="text-[#ff7b00]">Touch</span></span>
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-gray-50 dark:bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 transition-colors duration-300">
                    <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-none">
                        <img
                            draggable="false"
                            src="/assets/images/contact1.png"
                            alt="Contact"
                            className="w-2/3 sm:w-1/2 lg:w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-500 opacity-90"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-white/10 focus:border-[#ff7b00] dark:focus:border-[#ff7b00] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base"
                                />
                                <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ff7b00] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-white/10 focus:border-[#ff7b00] dark:focus:border-[#ff7b00] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base"
                                />
                                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ff7b00] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-white/10 focus:border-[#ff7b00] dark:focus:border-[#ff7b00] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium text-sm md:text-base"
                                />
                                <i className="fas fa-phone-alt absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ff7b00] transition-colors"></i>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    required
                                    rows="4"
                                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-white dark:bg-[#0a192f] border border-gray-300 dark:border-white/10 focus:border-[#ff7b00] dark:focus:border-[#ff7b00] outline-none transition-all duration-300 text-gray-900 dark:text-white font-medium resize-none text-sm md:text-base"
                                ></textarea>
                                <i className="fas fa-comment-dots absolute left-4 top-5 text-gray-500 group-focus-within:text-[#ff7b00] transition-colors"></i>
                            </div>

                            <div className="flex flex-col items-center gap-4 pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-[#ff7b00] hover:bg-[#e66f00] text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2 group"
                                >
                                    Send Message <i className="fa fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
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
