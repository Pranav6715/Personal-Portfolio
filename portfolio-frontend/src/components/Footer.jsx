import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#f8fafc] dark:bg-[#02000d] py-8 border-t border-black/10 dark:border-white/5 transition-colors duration-300 relative z-10">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <div className="text-gray-500 text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300 max-w-md mx-auto">
                    <p>&copy; {new Date().getFullYear()} by Pranav Ghaytadkar <br className="sm:hidden" /> | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
