
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

interface NavbarProps {
  onNavItemClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavItemClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavItemClick(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="font-serif text-2xl font-bold tracking-tight text-slate-900 group"
        >
          <span className="text-blue-600">.</span>{PORTFOLIO_DATA.name.split(' ').pop()}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => handleLinkClick(e, 'resume')}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 border-t border-slate-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-left text-lg font-bold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={(e) => handleLinkClick(e, 'resume')}
            className="w-full py-4 bg-slate-900 text-white text-center rounded-xl font-bold shadow-lg mt-2"
          >
            Resume & CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
