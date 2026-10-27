import React, { useState } from 'react';
import { ArrowDown, Check, Copy, Download, MapPin, Globe, ShieldCheck, Mail, Sparkles, FileText, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onHireMeClick: () => void;
  onViewResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMeClick, onViewResumeClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden">
      {/* Subtle Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[380px] h-[280px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Name, Title, Value Statement, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small "Available for work" Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                {personal.availability.badge} • Ready to start immediately
              </span>
            </div>

            {/* Headline with Name and Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                {personal.fullName}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-700 dark:text-teal-400">
                {personal.title}
              </p>
            </div>

            {/* Value Statement */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 font-semibold italic">
                “{personal.valueStatement}”
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personal.experienceSummary}
              </p>
            </div>

            {/* Action Buttons: Hire Me + View Resume + Download Resume */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2">
              {/* Hire Me Button (Scrolls to Contact) */}
              <button
                onClick={onHireMeClick}
                className="px-5 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* View Resume Button (Opens interactive viewer modal) */}
              <button
                onClick={onViewResumeClick}
                className="px-5 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
                title="View full resume on screen"
              >
                <Eye className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>View Resume</span>
              </button>

              {/* Download Resume Button (Downloads /Kaye_Abegail_De_La_Cruz_CV.pdf) */}
              <a
                href={personal.resumeUrl}
                download="Kaye_Abegail_De_La_Cruz_CV.pdf"
                className="px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                title="Download CV as PDF"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Download CV</span>
              </a>

              {/* Fast Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-3 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Languages */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                {personal.location}
              </span>
              <span>•</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">
                Languages: {personal.languages.map(l => `${l.name} (${l.level})`).join(', ')}
              </span>
            </div>

          </div>

          {/* Right Column: Profile Photo Placeholder & Real Highlights */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Profile Card Container */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl">
                
                {/* Profile Photo Placeholder with Monogram */}
                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 via-teal-900 to-slate-800 dark:from-slate-950 dark:via-teal-950 dark:to-slate-900 p-1 shadow-inner border border-teal-500/30">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-white relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-3xl font-black tracking-wider text-slate-950 shadow-md">
                      KD
                    </div>
                    <span className="mt-3 text-xs font-bold uppercase tracking-widest text-teal-300">
                      {personal.shortName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      General VA • Tech Support
                    </span>

                    {/* Available for work badge on photo */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 border border-emerald-500/40 text-[10px] text-emerald-400 font-semibold backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Available</span>
                    </div>
                  </div>
                </div>

                {/* Profile Info Summary */}
                <div className="mt-5 text-center space-y-1">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {personal.fullName}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-4">
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.31a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                    </svg>
                  </a>
                  <a
                    href={personal.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Facebook Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.2 22 12Z" />
                    </svg>
                  </a>
                  <a
                    href={personal.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Instagram Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Send direct email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                {/* Floating Real Pill: 4+ Years Experience */}
                <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">4+ Years BPO</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400">Customer & Tech Support</span>
                  </div>
                </div>

                {/* Floating Real Pill: 3 Leading BPO Companies */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">3 BPO Companies</span>
                    <span className="block text-[10px] text-slate-500 dark:text-slate-400">Alorica • TELUS • Accenture</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
