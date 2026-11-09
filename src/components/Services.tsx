import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = PORTFOLIO_DATA;
  const [showAllServices, setShowAllServices] = useState(false);

  // Dedicated high-resolution royalty-free service images matching warm terracotta aesthetic
  const serviceVisuals: Record<string, { image: string; alt: string }> = {
    'general-va': {
      image: '/images/service-general-va.jpg',
      alt: 'Minimalist organized workstation with notepad, laptop and coffee for virtual assistant tasks',
    },
    'data-entry': {
      image: '/images/service-data-entry.jpg',
      alt: 'Structured spreadsheet records, data deduplication, and cleanup tables on screen',
    },
    'email-management': {
      image: '/images/service-email-management.jpg',
      alt: 'Organized email inbox triage, labeling, and customer drafting workspace',
    },
    'calendar-management': {
      image: '/images/service-calendar-management.jpg',
      alt: 'Time blocking scheduler and conflict-free calendar management planner',
    },
    'appointment-scheduling': {
      image: '/images/service-appointment-scheduling.jpg',
      alt: 'Consultation scheduling, meeting booking, and intake confirmation setup',
    },
    'document-organization': {
      image: '/images/service-document-organization.jpg',
      alt: 'Structured Google Drive folders, document filing, and SOP repository',
    },
    'website-creation': {
      image: '/images/service-website-creation.jpg',
      alt: 'Clean and modern mobile-responsive website layout and portfolio page',
    },
  };

  const displayedServices = showAllServices ? services : services.slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="services" className="pt-14 sm:pt-20 pb-0 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        
        {/* Section Header matching "FAVORITES THIS MONTH" style from reference */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Favorites This Month
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            Services & Support
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
          <p className="mt-3 text-xs sm:text-sm text-[#5A4A42] leading-relaxed font-light">
            Reliable, organized virtual assistance designed to keep your business running smoothly, from daily schedule planning to accurate record keeping.
          </p>
        </div>

        {/* 3 "Favorites This Month" Light Beige Cards Row with Dribbble-style Spring Lift */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => {
              const visual = serviceVisuals[service.id] || {
                image: '/images/service-general-va.jpg',
                alt: service.title,
              };

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  layout
                  data-reveal-delay={(index % 3) * 120}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 25px -5px rgba(194, 122, 82, 0.12), 0 8px 10px -6px rgba(194, 122, 82, 0.08)' 
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="reveal-card rounded-2xl bg-white overflow-hidden shadow-sm flex flex-col justify-between border border-[#E8D9CD] group"
                >
                  <div>
                    {/* Image Top */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#F7EFE9]">
                      <img
                        src={visual.image}
                        alt={visual.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-[#C27A52]/10 group-hover:bg-transparent transition-colors duration-300" />
                      
                      {/* Small badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 text-[#2D2522] text-[9px] uppercase tracking-wider font-semibold shadow-xs border border-[#E8D9CD]">
                        VA Service
                      </div>
                    </div>

                    {/* Card Content in Light Beige Style */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#C27A52] font-semibold block">
                        Support Package
                      </span>
                      <h3 className="text-lg font-serif italic text-[#2D2522] leading-snug group-hover:text-[#C27A52] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#5A4A42] leading-relaxed font-light">
                        {service.shortDesc}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="pt-2 border-t border-[#F2E5DC] space-y-1.5">
                        {service.deliverables.slice(0, 2).map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#2D2522]">
                            <Check className="w-3 h-3 text-[#C27A52] shrink-0 mt-0.5" />
                            <span className="leading-tight font-light">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Small Sand Button matching reference style with Spring Micro-interaction */}
                  <div className="px-5 sm:px-6 pb-6 pt-1">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-2.5 px-3 text-[10px] font-bold tracking-[0.18em] uppercase rounded-md text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Toggle to view all 7 services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#2D2522] bg-white hover:bg-[#F7EFE9] rounded-md border border-[#E8D9CD] shadow-xs transition-colors cursor-pointer"
          >
            <span>{showAllServices ? 'Show Top 3 Services' : `Explore All 7 Services Offered`}</span>
            {showAllServices ? <ChevronUp className="w-3.5 h-3.5 text-[#C27A52]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#C27A52]" />}
          </motion.button>
        </motion.div>

      </div>

      {/* Organic Wave flowing into Light Beige About Section */}
      <WavyDivider fillColor="#F7EFE9" variant="organic-swell" />
    </section>
  );
};
