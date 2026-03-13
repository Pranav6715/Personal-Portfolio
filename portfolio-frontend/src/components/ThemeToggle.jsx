import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-full glass text-gray-800 dark:text-[#ff7b00] hover:text-[#ff7b00] dark:hover:text-white hover:border-[#ff7b00] dark:hover:border-[#00c3ff] hover:shadow-[0_0_15px_rgba(255,123,0,0.3)] dark:hover:shadow-[0_0_15px_rgba(0,195,255,0.3)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]/50 ml-2 shadow-sm dark:shadow-none"
            aria-label="Toggle Theme"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDarkMode ? (
                <FaSun className="text-lg sm:text-xl drop-shadow-md" />
            ) : (
                <FaMoon className="text-lg sm:text-xl drop-shadow-md" />
            )}
        </button>
    );
};

export default ThemeToggle;
