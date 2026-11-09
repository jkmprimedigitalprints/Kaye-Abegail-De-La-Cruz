import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#C27A52] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Name in Playfair Display serif matching reference footer */}
        <div>
          <h3 className="text-xl sm:text-2xl font-serif tracking-[0.2em] text-white uppercase">
            {personal.fullName}
          </h3>
          <p className="text-xs font-serif italic text-[#FFE8E3] tracking-wider mt-1">
            General Virtual Assistant • Executive & Tech Support
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Thin Gold Divider Line */}
        <div className="w-48 h-[1px] bg-white/30" />

        {/* Social Icons matching Nicole Marie footer circles */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white text-[#C27A52] hover:bg-[#E6BE85] hover:text-[#2D2522] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:rotate-6 shadow-sm"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.31a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={personal.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white text-[#C27A52] hover:bg-[#E6BE85] hover:text-[#2D2522] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:-rotate-6 shadow-sm"
            title="Facebook Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={personal.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white text-[#C27A52] hover:bg-[#E6BE85] hover:text-[#2D2522] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:rotate-6 shadow-sm"
            title="Instagram Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-full bg-white text-[#C27A52] hover:bg-[#E6BE85] hover:text-[#2D2522] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:-rotate-6 shadow-sm"
            title="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 w-full text-[11px] text-white/70">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white/20 hover:bg-white text-white hover:text-[#C27A52] border border-white/30 text-[10px] tracking-wider uppercase font-semibold transition-all cursor-pointer shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
