'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md py-4 transition-all duration-300 ${scrolled ? 'glass border-b border-white/20 py-3' : 'glass border-b border-white/20 py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold tracking-wider futura-font text-gray-800 hover:text-teal-600 transition-colors"
            >
              Anas
            </button>
          </div>
          
          {/* Navigation links and theme toggle on the right */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 relative py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-link text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 relative py-2"
            >
              Project
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="nav-link text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 relative py-2"
            >
              Certificate
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 relative py-2"
            >
              Contact
            </button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={toggleMenu}
              className="outline-none mobile-menu-button p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <svg 
                className="w-6 h-6 text-gray-700"
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-6 space-y-4">
          <button 
            onClick={() => scrollToSection('skills')}
            className="block text-gray-700 hover:text-teal-600 font-medium transition duration-300 py-2 border-b border-gray-200/30 w-full text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="block text-gray-700 hover:text-teal-600 font-medium transition duration-300 py-2 border-b border-gray-200/30 w-full text-left"
          >
            Project
          </button>
          <button 
            onClick={() => scrollToSection('certificates')}
            className="block text-gray-700 hover:text-teal-600 font-medium transition duration-300 py-2 border-b border-gray-200/30 w-full text-left"
          >
            Certificate
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block text-gray-700 hover:text-teal-600 font-medium transition duration-300 py-2 w-full text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;