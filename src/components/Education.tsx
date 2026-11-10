import React from 'react';
import { GraduationCap, Languages, Download, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface EducationProps {
  onViewResumeClick: () => void;
}

export const Education: React.FC<EducationProps> = ({ onViewResumeClick }) => {
  const { education, personal } = PORTFOLIO_DATA;

  return (
    <section id="education" className="pt-14 sm:pt-20 pb-0 bg-[#FAF5F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        
        {/* Section Header */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            Education & Language Fluency
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
          <p className="mt-3 text-xs sm:text-sm text-[#5A4A42] leading-relaxed font-light">
            Educational foundation and verified language credentials for Kaye Abegail De La Cruz.
          </p>
        </div>

        {/* 2-Column Grid: Formal Education Left, Languages & Terms Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-12">
          
          {/* Left: Formal Education */}
          <div
            data-reveal-delay="0"
            className="reveal-card lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white border border-[#E8D9CD] shadow-sm space-y-6 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2E5DC]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] flex items-center justify-center text-[#C27A52] border border-[#E8D9CD]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#2D2522]">
                    Formal Education
                  </h3>
                  <span className="text-[11px] tracking-wider uppercase text-[#C27A52] font-semibold">
                    Academic Degree Record
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-5 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-[10px] tracking-wider uppercase font-bold rounded-md bg-[#E6BE85] text-[#2D2522]">
                        {edu.period}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif italic font-bold text-[#2D2522] pt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-[#C27A52]">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#5A4A42] pt-1 leading-relaxed font-light">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Languages & Availability */}
          <div
            data-reveal-delay="150"
            className="reveal-card lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white border border-[#E8D9CD] shadow-sm flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2E5DC]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5F0] flex items-center justify-center text-[#C27A52] border border-[#E8D9CD]">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#2D2522]">
                    Languages
                  </h3>
                  <span className="text-[11px] tracking-wider uppercase text-[#C27A52] font-semibold">
                    Communication Fluency
                  </span>
                </div>
              </div>

              {/* Professional Teaching Licensure Card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-[#FAF5F0] to-[#F7EFE9] border border-[#E8D9CD] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif italic font-bold text-[#2D2522]">
                      Licensed Professional Teacher (LPT)
                    </h4>
                    <p className="text-[11px] text-[#C27A52] font-semibold">
                      Professional Regulation Commission (PRC)
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 text-[9px] tracking-wider uppercase font-bold rounded-md bg-emerald-600 text-white shrink-0">
                  Board Certified
                </span>
              </motion.div>

              <div className="space-y-3.5">
                {personal.languages.map((lang, lIdx) => (
                  <motion.div
                    key={lIdx}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-serif italic font-bold text-[#2D2522]">
                        {lang.name}
                      </h4>
                      <p className="text-xs text-[#5A4A42] font-light">
                        {lang.level}
                      </p>
                    </div>
                    <div className="p-1 rounded-full bg-white text-emerald-700 shadow-2xs border border-[#E8D9CD]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick CV Action Banner with Spring Buttons */}
            <div className="pt-6 mt-6 border-t border-[#F2E5DC]">
              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onViewResumeClick}
                  className="px-4 py-2 text-[10px] tracking-wider uppercase font-bold text-[#2D2522] bg-[#FAF5F0] hover:bg-[#EBD9CC] rounded-md border border-[#E8D9CD] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C27A52]" />
                  <span>View CV</span>
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={personal.resumeUrl}
                  download="Kaye_Abegail_De_La_Cruz_CV.pdf"
                  className="px-4 py-2 text-[10px] tracking-wider uppercase font-bold text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] rounded-md shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Deep Organic Wave flowing into Terracotta Work Samples Section */}
      <WavyDivider fillColor="#C27A52" variant="deep-wave" />
    </section>
  );
};
