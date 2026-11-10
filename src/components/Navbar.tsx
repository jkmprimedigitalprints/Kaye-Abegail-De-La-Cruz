import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onViewResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onViewResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT ME', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ['hero', 'about', 'services', 'experience', 'skills', 'education', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 border-b border-[#E8D9CD] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/98 backdrop-blur-xs shadow-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Centered Logo Mark, Name & Subtitle */}
        <div className={`transition-all duration-300 text-center relative ${
          isScrolled ? 'py-2.5 sm:py-3.5' : 'py-3.5 sm:py-4.5'
        }`}>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="inline-flex flex-col items-center group focus:outline-none"
          >
            <motion.h1
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold tracking-[0.12em] sm:tracking-[0.16em] text-[#2D2522] uppercase transition-colors group-hover:text-[#C27A52] leading-tight"
            >
              KAYE ABEGAIL BUEN DE LA CRUZ
            </motion.h1>
            <p className="text-[11px] sm:text-xs font-serif italic text-[#C27A52] tracking-wider mt-0.5 sm:mt-1">
              Virtual Assistant • Customer Care • Technical Support
            </p>
          </a>

          {/* Quick Right Buttons (Resume + Mobile Toggle) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={onViewResumeClick}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-[#2D2522] bg-[#F7EFE9] hover:bg-[#EBD9CC] rounded-md transition-all cursor-pointer border border-[#E8D9CD]"
              title="View Kaye's Official Curriculum Vitae"
            >
              <FileText className="w-3 h-3 text-[#C27A52]" />
              <span>View CV</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] tracking-[0.15em] uppercase font-bold text-white bg-[#C27A52] hover:bg-[#A9623D] rounded-md shadow-xs transition-all cursor-pointer"
            >
              <span>Hire Kaye</span>
              <ArrowRight className="w-3 h-3" />
            </motion.a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-[#2D2522] hover:text-[#C27A52] rounded-md hover:bg-[#F7EFE9] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Thin Divider Line Below Name */}
        <div className="w-full h-[1px] bg-[#E8D9CD]" />

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-5 lg:gap-8 py-3.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-medium tracking-[0.2em] transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#C27A52] font-semibold'
                    : 'text-[#5A4A42] hover:text-[#C27A52]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C27A52] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden py-4 border-t border-[#E8D9CD] overflow-hidden bg-white"
            >
              <div className="flex flex-col space-y-2 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`py-2 text-xs tracking-[0.2em] font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-[#F7EFE9] text-[#C27A52] font-semibold'
                          : 'text-[#5A4A42] hover:bg-[#FAF5F0]'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}

                <div className="pt-3 flex gap-2 justify-center">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onViewResumeClick();
                    }}
                    className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#2D2522] bg-[#F7EFE9] rounded-md border border-[#E8D9CD]"
                  >
                    View CV
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#C27A52] rounded-md"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
};
