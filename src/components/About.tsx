import React from 'react';
import { Clock, Building2, Languages, CalendarCheck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface AboutProps {
  onHireMeClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireMeClick }) => {
  const { personal, stats, strengths } = PORTFOLIO_DATA;

  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-5 h-5 text-[#C27A52]" />;
      case 1:
        return <Building2 className="w-5 h-5 text-[#C27A52]" />;
      case 2:
        return <Languages className="w-5 h-5 text-[#C27A52]" />;
      case 3:
        return <CalendarCheck className="w-5 h-5 text-[#C27A52]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C27A52]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="about" className="pt-14 sm:pt-20 pb-0 bg-[#F7EFE9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Professional Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            About Kaye Abegail
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
        </motion.div>

        {/* 4 Quick Stat Cards with Spring Hover */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 12px 20px -4px rgba(194, 122, 82, 0.15)' 
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8D9CD] shadow-xs text-center cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF5F0] flex items-center justify-center mx-auto mb-3 border border-[#E8D9CD]">
                {getStatIcon(idx)}
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2522] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#C27A52] mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#5A4A42] mt-2 leading-relaxed font-light">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4 Personal Strengths Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8D9CD] shadow-sm mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif italic text-[#2D2522]">
              Core Professional Strengths
            </h3>
            <p className="text-xs text-[#5A4A42] mt-1 font-light">
              Demonstrated capabilities refined through 5 years of fast-paced BPO support and administrative execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] hover:border-[#C27A52] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#C27A52] flex items-center justify-center mb-3 shadow-2xs border border-[#E8D9CD]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif italic font-bold text-[#2D2522] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5A4A42] leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real Work Terms & Shift Availability Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6BE85] shadow-xs"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#E8D9CD]">
            <div className="space-y-1 pb-4 md:pb-0 md:pr-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C27A52]">Shift Flexibility</span>
              <p className="text-xs sm:text-sm font-semibold text-[#2D2522]">{personal.availability.shift}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:px-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C27A52]">Engagement</span>
              <p className="text-xs sm:text-sm font-semibold text-[#2D2522]">{personal.availability.type}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:px-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C27A52]">Timezone Coverage</span>
              <p className="text-xs sm:text-sm font-semibold text-[#C27A52]">{personal.availability.timezones}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:pl-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C27A52]">Notice Period</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-800">Ready to Start Immediately</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Organic Wave flowing into Light Beige Experience Section */}
      <WavyDivider fillColor="#FAF5F0" variant="gentle-wave" />
    </section>
  );
};
