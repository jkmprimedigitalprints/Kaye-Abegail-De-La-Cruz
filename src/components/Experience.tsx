import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Headset, 
  Award, 
  Building2, 
  Sparkles, 
  Star,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface ExperienceProps {
  onHireMeClick?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onHireMeClick }) => {
  const { workExperience } = PORTFOLIO_DATA;

  // Curated vector graphic design motifs for each role
  const roleDesigns = [
    {
      company: 'Accenture Inc.',
      gradient: 'from-[#C27A52] via-[#A9623D] to-[#8E4A28]',
      badge: 'Tier-1 Technical Support',
      badgeIcon: <ShieldCheck className="w-4 h-4 text-[#E6BE85]" />,
      centerIcon: <Cpu className="w-7 h-7 text-white" />,
      tagline: 'Global Technology Services',
      pills: ['Case Documentation', 'Diagnostic Flow', 'SOP Adherence'],
      circleIcon: <Star className="w-5 h-5 text-[#2D2522]" />,
      circleText: 'ENTERPRISE',
      subText: 'Tech Support',
    },
    {
      company: 'TELUS International',
      gradient: 'from-[#B86B42] via-[#A85B33] to-[#7B3C1E]',
      badge: 'Omnichannel Customer Care',
      badgeIcon: <Headset className="w-4 h-4 text-[#E6BE85]" />,
      centerIcon: <Headset className="w-7 h-7 text-white" />,
      tagline: 'Digital Customer Experience',
      pills: ['Omnichannel Support', 'Data Integrity', 'Account Research'],
      circleIcon: <CheckCircle2 className="w-5 h-5 text-[#2D2522]" />,
      circleText: 'VERIFIED',
      subText: 'Customer Care',
    },
    {
      company: 'Alorica - Fort Taguig',
      gradient: 'from-[#A85B33] via-[#984D28] to-[#6E3316]',
      badge: 'High-Volume Customer Service',
      badgeIcon: <Award className="w-4 h-4 text-[#E6BE85]" />,
      centerIcon: <Building2 className="w-7 h-7 text-white" />,
      tagline: 'High-Volume Operations',
      pills: ['Active Listening', 'High Call Volume', 'De-escalation'],
      circleIcon: <Sparkles className="w-5 h-5 text-[#2D2522]" />,
      circleText: '5 YEARS',
      subText: 'BPO Track',
    },
  ];

  const handleCtaClick = () => {
    if (onHireMeClick) {
      onHireMeClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="experience" className="pt-14 sm:pt-20 pb-0 bg-[#FAF5F0] relative overflow-hidden">
      
      {/* Organic Curved Ambient Background Elements */}
      <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-[#FFE8E3]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -left-28 w-[500px] h-[500px] bg-[#E6BE85]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-24 relative z-10">
        
        {/* Section Header */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
          <p className="mt-3 text-xs sm:text-sm text-[#5A4A42] leading-relaxed font-light">
            5 years of verified corporate customer service and technical support background across three industry-leading BPO organizations.
          </p>
        </div>

        {/* Alternating Content Boxes: White Card Overlapping Arch Design */}
        <div className="space-y-20 sm:space-y-28">
          {workExperience.map((job, index) => {
            const isFlipped = index % 2 === 1; // Even rows: Card Left / Arch Right; Odd rows: Arch Left / Card Right
            const design = roleDesigns[index % roleDesigns.length];

            return (
              <div
                key={job.id}
                className={`flex flex-col ${
                  isFlipped ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-8 lg:gap-12 relative`}
              >
                {/* Content Box: White Card Overlapping with Slide Reveal */}
                <motion.div
                  initial={{ opacity: 0, x: isFlipped ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-7/12 relative z-20"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-7 sm:p-9 md:p-10 rounded-3xl bg-white border border-[#E8D9CD] shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    
                    {/* Period & Company Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C27A52] bg-[#F7EFE9] px-3 py-1 rounded-md border border-[#E8D9CD]">
                        {job.period}
                      </span>
                      <span className="text-xs font-semibold text-[#5A4A42]">
                        {job.location || 'Metro Manila'}
                      </span>
                    </div>

                    {/* Role Title in Playfair Display Serif Italic */}
                    <h3 className="text-2xl sm:text-3xl font-serif italic text-[#2D2522] leading-tight mb-2">
                      {job.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#C27A52] tracking-wide uppercase mb-4">
                      {job.company}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#5A4A42] leading-relaxed font-light mb-5">
                      {job.summary}
                    </p>

                    {/* Bullet Accomplishments */}
                    <div className="space-y-2.5 pt-4 border-t border-[#F2E5DC] mb-6">
                      {job.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#2D2522]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C27A52] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-light">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Gained Tags */}
                    {job.skillsGained && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {job.skillsGained.map((sk, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-medium tracking-wide px-2.5 py-0.5 rounded-md bg-[#F7EFE9] text-[#2D2522] border border-[#E8D9CD]"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Small Sand Button matching reference style */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleCtaClick}
                      className="px-5 py-2 text-[10px] font-bold tracking-[0.18em] uppercase rounded-md text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire About Experience</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>

                  </motion.div>
                </motion.div>

                {/* Arch-Shaped Vector Design Frame with Overlapping Medallion */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-5/12 flex justify-center relative z-10"
                >
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                    
                    {/* Main Arch Vector Card */}
                    <div className={`rounded-t-[160px] rounded-b-2xl overflow-hidden aspect-[3/4] bg-gradient-to-b ${design.gradient} shadow-2xl border-4 border-white p-6 sm:p-7 flex flex-col justify-between text-white relative animate-gentle-float select-none`}>
                      
                      {/* Background concentric arch line pattern */}
                      <svg
                        className="absolute inset-0 w-full h-full text-white/10 pointer-events-none"
                        viewBox="0 0 200 260"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M20 260 V100 A80 80 0 0 1 180 100 V260" strokeDasharray="3 3" />
                        <path d="M40 260 V100 A60 60 0 0 1 160 100 V260" />
                        <path d="M60 260 V100 A40 40 0 0 1 140 100 V260" strokeDasharray="2 2" />
                        <circle cx="100" cy="90" r="28" strokeDasharray="4 2" />
                      </svg>

                      {/* Top Arch Badge */}
                      <div className="relative z-10 pt-4 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-[10px] font-semibold tracking-wider uppercase text-white shadow-xs">
                          {design.badgeIcon}
                          <span>{design.badge}</span>
                        </div>
                      </div>

                      {/* Center Content: Monogram Emblem & Company */}
                      <div className="relative z-10 my-auto text-center py-2">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto shadow-md mb-3">
                          {design.centerIcon}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-serif italic text-white font-bold tracking-tight">
                          {design.company}
                        </h4>
                        <p className="text-[11px] text-[#FFE8E3] tracking-widest uppercase font-light mt-0.5">
                          {design.tagline}
                        </p>

                        {/* Capability Pills */}
                        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                          {design.pills.map((pill, pIdx) => (
                            <span
                              key={pIdx}
                              className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-xs text-[9px] font-medium tracking-wide text-white border border-white/20"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer Bar */}
                      <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-[10px] text-white/90">
                        <span className="font-semibold">{job.period}</span>
                        <span className="flex items-center gap-1 text-[#E6BE85]">
                          <Sparkles className="w-3 h-3" />
                          <span>5 Yrs BPO</span>
                        </span>
                      </div>

                    </div>

                    {/* Overlapping Circular Medallion matching Nicole Marie style */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`absolute -bottom-5 ${
                        isFlipped ? '-left-5 sm:-left-7' : '-right-5 sm:-right-7'
                      } w-24 sm:w-28 h-24 sm:h-28 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-[#E6BE85] to-[#D4A968] z-30 cursor-pointer flex flex-col items-center justify-center text-center p-2 text-[#2D2522] select-none`}
                    >
                      <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center mb-0.5 shadow-2xs">
                        {design.circleIcon}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase leading-none">
                        {design.circleText}
                      </span>
                      <span className="text-[8px] text-[#4A3B32] uppercase tracking-widest font-semibold mt-0.5">
                        {design.subText}
                      </span>
                    </motion.div>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Organic Wave flowing into Light Beige Skills Section */}
      <WavyDivider fillColor="#F7EFE9" variant="deep-wave" />
    </section>
  );
};
