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
        <header className="fixed top-0 left-0 w-full z-[999] transition-all duration-300 bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md shadow-lg py-3">
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-xl md:text-2xl font-bold transition-colors duration-300 text-[#ff7b00]">
                    Pranav's Portfolio
                </Link>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {/* Mobile Menu Icon */}
                    <div
                        className="text-gray-900 dark:text-white md:hidden text-2xl cursor-pointer transition-colors duration-300 z-[1000]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Links */}
                    <nav className={`fixed md:static top-0 right-0 w-[280px] md:w-auto h-screen md:h-auto bg-white dark:bg-[#0a192f] md:bg-transparent md:dark:bg-transparent shadow-2xl md:shadow-none transition-transform duration-300 ease-in-out flex flex-col md:flex-row items-center justify-center md:items-center py-6 md:py-0 ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} md:flex`}>
                        <ul className="flex flex-col md:flex-row md:space-x-1 items-center w-full md:w-auto px-6 md:px-0">
                            {navLinks.map((link) => (
                                <li key={link.name} className="my-3 md:my-0 w-full md:w-auto text-center">
                                    <a
                                        href={link.href}
                                        className="text-[18px] md:text-[16px] font-semibold transition-all px-4 py-2 text-gray-800 dark:text-gray-200 hover:text-[#ff7b00] dark:hover:text-[#ff7b00] block md:inline-block relative group"
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 w-0 h-0.5 bg-[#ff7b00] transition-all duration-300 group-hover:w-1/2 md:group-hover:w-[calc(100%-32px)]"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
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
