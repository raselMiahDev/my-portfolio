import React, { useState, useEffect } from 'react';
import {FaHome, FaBars, FaTimes, FaSun, FaMoon, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="mr-2" /> },
    { name: 'About', href: '#about', icon: <FaUser className="mr-2" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="mr-2" /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram className="mr-2" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              RASEL
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 mr-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;