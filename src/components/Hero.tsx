import React, { useState } from 'react';
import { ArrowDown, Download, Eye, MapPin, Sparkles, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface HeroProps {
  onHireMeClick: () => void;
  onViewResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMeClick, onViewResumeClick }) => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const heroImage = '/images/kaye-photo.jpg';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="hero" className="relative bg-[#C27A52] text-white pt-16 sm:pt-24 lg:pt-28 pb-0 overflow-hidden">
      
      {/* Background Soft Organic Floating Accents */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#E6BE85]/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Arch-Shaped Image Mask with Dribbble-style reveal and continuous float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] animate-gentle-float">
              
              {/* Outer arch decorative border with hover tilt */}
              <motion.div
                whileHover={{ y: -4, rotate: -0.5 }}
                transition={{ duration: 0.3 }}
                className="p-2 sm:p-2.5 rounded-t-[160px] rounded-b-2xl bg-white shadow-2xl border-2 border-white/60"
              >
                
                {/* Arch container */}
                <div className="relative rounded-t-[150px] rounded-b-xl overflow-hidden aspect-[3/4] bg-[#FFE8E3] shadow-inner">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    src={heroImage}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Available badge with pulsing dot */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white text-[#2D2522] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap border border-[#E8D9CD]"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for Work</span>
                  </motion.div>
                </div>

              </motion.div>

            </div>
          </motion.div>

          {/* Right: The Introduction Goes Here & Content matching Nicole Marie lifestyle theme */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-5 text-center md:text-left text-white"
          >
            
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E6BE85]" />
              <span>General Virtual Assistant</span>
            </motion.div>

            {/* Elegant Serif Italic Headline */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-white tracking-tight leading-[1.2]"
              >
                The Introduction Goes Here
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs sm:text-sm font-serif italic text-[#FFE8E3] tracking-wide"
              >
                “{personal.tagline || 'Reliable, detail-oriented, and calm under pressure'}”
              </motion.p>
            </div>

            {/* Bio and Background Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0 font-light"
            >
              Dedicated and detail-oriented professional with 5 years of verified customer service and technical support experience in BPO (<strong className="font-semibold text-white">Alorica</strong>, <strong className="font-semibold text-white">TELUS International</strong>, and <strong className="font-semibold text-white">Accenture</strong>), now offering virtual assistant and administrative support. Highly organized, computer literate, and adaptable to US, UK, and Australian time zones.
            </motion.p>

            {/* Location & Languages Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-white/80"
            >
              <span className="flex items-center gap-1.5 font-medium text-white">
                <MapPin className="w-3.5 h-3.5 text-[#E6BE85]" />
                <span>{personal.location}</span>
              </span>
              <span>•</span>
              <span className="font-medium text-white">Fluent English & Native Tagalog</span>
            </motion.div>

            {/* Small Rounded-Rectangle Buttons matching reference image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-3"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onHireMeClick}
                className="px-6 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase rounded-md text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Let’s Work Together</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onViewResumeClick}
                className="px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase rounded-md text-[#2D2522] bg-white hover:bg-[#FAF5F0] shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#C27A52]" />
                <span>View CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={personal.resumeUrl}
                download="Kaye_Abegail_De_La_Cruz_CV.pdf"
                className="px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase rounded-md text-white bg-white/20 hover:bg-white/30 border border-white/40 shadow-xs transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download CV</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-white/90 hover:text-white border border-white/30 hover:border-white rounded-md transition-colors flex items-center gap-1.5 cursor-pointer bg-white/10"
                title="Copy direct email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-300" />
                    <span className="text-emerald-200 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Sweeping S-Curve Wavy Divider into the White Services Section */}
      <WavyDivider fillColor="#FFFFFF" variant="hero-wave" />

    </section>
  );
};
