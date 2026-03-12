import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 mx-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
            aria-label="Toggle Theme"
        >
            {isDarkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
        </button>
    );
};

export default ThemeToggle;
