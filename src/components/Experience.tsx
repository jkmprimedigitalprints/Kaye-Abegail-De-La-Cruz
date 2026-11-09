import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface ExperienceProps {
  onHireMeClick?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onHireMeClick }) => {
  const { workExperience } = PORTFOLIO_DATA;

  // Custom curated visual assets for each alternating arch & circular photo
  const visuals = [
    {
      arch: '/src/assets/images/lifestyle_workspace_arch_1794201987416.jpg',
      circle: '/src/assets/images/coffee_latte_detail_1794202050074.jpg',
      altArch: 'Organized modern workstation setup with laptop and plants',
      altCircle: 'Cozy artisan morning coffee cup with latte art',
    },
    {
      arch: '/src/assets/images/planner_notes_arch_1794202023456.jpg',
      circle: '/src/assets/images/project_website_creation_1793783065902.jpg',
      altArch: 'Hands writing in a daily schedule planner',
      altCircle: 'Responsive digital website layout',
    },
    {
      arch: '/src/assets/images/hero_portrait_arch_1794201967070.jpg',
      circle: '/src/assets/images/coffee_latte_detail_1794202050074.jpg',
      altArch: 'Warm professional portrait',
      altCircle: 'Artisan coffee detail',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
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
        </motion.div>

        {/* Alternating Content Boxes: White Card Overlapping Arch Image */}
        <div className="space-y-20 sm:space-y-28">
          {workExperience.map((job, index) => {
            const isFlipped = index % 2 === 1; // Even rows: Card Left / Arch Right; Odd rows: Arch Left / Card Right
            const visual = visuals[index % visuals.length];

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

                {/* Arch-Shaped Image Mask with Overlapping Circular Detail */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-5/12 flex justify-center relative z-10"
                >
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                    
                    {/* Main Arch Frame */}
                    <div className="rounded-t-[160px] rounded-b-2xl overflow-hidden aspect-[3/4] bg-[#F7EFE9] shadow-xl border-4 border-white animate-gentle-float">
                      <motion.img
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6 }}
                        src={visual.arch}
                        alt={visual.altArch}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlapping Circular Accent Image matching Nicole Marie style */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`absolute -bottom-5 ${
                        isFlipped ? '-left-5 sm:-left-7' : '-right-5 sm:-right-7'
                      } w-24 sm:w-28 h-24 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white z-30 cursor-pointer`}
                    >
                      <img
                        src={visual.circle}
                        alt={visual.altCircle}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
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
