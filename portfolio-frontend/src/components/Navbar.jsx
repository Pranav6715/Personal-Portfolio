import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: isHomePage ? '#home' : '/#home' },
        { name: 'About', href: isHomePage ? '#about' : '/#about' },
        { name: 'Skills', href: isHomePage ? '#skills' : '/#skills' },
        { name: 'Education', href: isHomePage ? '#education' : '/#education' },
        { name: 'Projects', href: isHomePage ? '#work' : '/#work' },
        { name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
        { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
    ];

    const handleLinkClick = (e, href) => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[999] transition-all duration-300">
            <div className={`glass rounded-full px-6 md:px-10 py-3 sm:py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,195,255,0.1)] bg-white/70 dark:bg-[#030014]/80' : 'bg-black/5 dark:bg-white/5'}`}>
                <Link to="/" className="text-xl md:text-2xl font-black tracking-tight text-gray-900 dark:text-white flex items-center gap-2 group">
                    <span className="bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">Pranav's</span> 
                    Portfolio
                </Link>

                <div className="flex items-center gap-6">
                    {/* Mobile Menu Icon */}
                    <div
                        className="text-gray-900 dark:text-white md:hidden text-2xl cursor-pointer transition-colors duration-300 z-[1000] hover:text-[#ff7b00] dark:hover:text-[#ff7b00]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Links */}
                    <nav className={`fixed md:static top-0 right-0 w-[250px] sm:w-[280px] md:w-auto h-screen md:h-auto glass-panel md:bg-transparent md:border-none md:shadow-none md:backdrop-blur-none transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center justify-center md:items-center py-6 md:py-0 ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} md:flex rounded-l-3xl md:rounded-none z-[990]`}>
                        <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-4 items-center w-full md:w-auto px-6 md:px-0 bg-transparent">
                            {navLinks.map((link) => (
                                <li key={link.name} className="my-3 md:my-0 w-full md:w-auto text-center">
                                    <a
                                        href={link.href}
                                        className="text-[16px] sm:text-[18px] md:text-[15px] font-medium tracking-wide transition-all px-4 py-2 text-gray-700 hover:text-[#ff7b00] dark:text-gray-300 dark:hover:text-white block md:inline-block relative group"
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 w-0 h-[2px] bg-gradient-to-r from-[#00c3ff] to-[#ff7b00] transition-all duration-300 group-hover:w-1/2 md:group-hover:w-[calc(100%-32px)] shadow-[0_0_10px_#ff7b00]"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Theme Toggle in Mobile Menu (or Desktop) */}
                        <div className="md:ml-4 mt-6 md:mt-0 pb-6 md:pb-0 border-b border-white/10 md:border-none w-full md:w-auto flex justify-center">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>

                {/* Overlay for mobile menu */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
