import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-custom-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/autoflow ai logo.png"
              alt="AutoFlow AI"
              className="logo-size  object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Book a Call
            </button>
          </nav>

          <button
            className="md:hidden text-white menu-dropdown-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#services"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 w-fit">
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
