import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Briefcase,
  Table,
  Mail,
  Calendar,
  Clock,
  FolderTree,
  Globe,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = PORTFOLIO_DATA;
  const [showAllServices, setShowAllServices] = useState(false);

  // Service vector design graphics metadata
  const serviceDesignMeta: Record<string, { icon: React.ReactNode; badge: string; motif: string; accentColor: string }> = {
    'general-va': {
      icon: <Briefcase className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Core VA • Administrative',
      motif: 'M4 6h16M4 12h10M4 18h14',
      accentColor: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
    },
    'data-entry': {
      icon: <Table className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Data Hygiene • Deduplication',
      motif: 'M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18',
      accentColor: 'from-[#FAF5F0] via-[#F2E5DC] to-[#E6BE85]/20',
    },
    'email-management': {
      icon: <Mail className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Inbox Zero • Customer Care',
      motif: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      accentColor: 'from-[#FAF5F0] via-[#FFE8E3] to-[#F7EFE9]',
    },
    'calendar-management': {
      icon: <Calendar className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Schedule Sync • Time Blocking',
      motif: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
      accentColor: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
    },
    'appointment-scheduling': {
      icon: <Clock className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Consultation • Booking Flow',
      motif: 'M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z',
      accentColor: 'from-[#FAF5F0] via-[#F2E5DC] to-[#E6BE85]/20',
    },
    'document-organization': {
      icon: <FolderTree className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Cloud Hierarchy • SOP Archive',
      motif: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      accentColor: 'from-[#FAF5F0] via-[#FFE8E3] to-[#F7EFE9]',
    },
    'website-creation': {
      icon: <Globe className="w-8 h-8 text-[#C27A52]" />,
      badge: 'Responsive Layout • Web Presence',
      motif: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20',
      accentColor: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
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
              const meta = serviceDesignMeta[service.id] || {
                icon: <Briefcase className="w-8 h-8 text-[#C27A52]" />,
                badge: 'VA Support',
                motif: 'M4 6h16M4 12h10M4 18h14',
                accentColor: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
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
                    {/* Bespoke Vector Graphic Header */}
                    <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${meta.accentColor} border-b border-[#E8D9CD] flex flex-col justify-between p-5`}>
                      {/* Decorative SVG background line art pattern */}
                      <svg
                        className="absolute -right-6 -bottom-6 w-36 h-36 text-[#C27A52]/10 pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="32" />
                        <circle cx="50" cy="50" r="18" strokeDasharray="2 2" />
                        <path d="M50 5 L50 95 M5 50 L95 50" opacity="0.4" />
                      </svg>

                      {/* Top Bar: Service ID & Category Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#2D2522] text-[9px] uppercase tracking-wider font-bold shadow-xs border border-[#E8D9CD]">
                          0{index + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#C27A52]/15 text-[#C27A52] text-[9px] uppercase tracking-wider font-semibold">
                          {meta.badge}
                        </span>
                      </div>

                      {/* Center Medallion Icon with Spring Hover */}
                      <div className="relative z-10 my-auto flex items-center justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-[#E8D9CD] flex items-center justify-center group-hover:scale-110 group-hover:border-[#C27A52] transition-all duration-300">
                          {meta.icon}
                        </div>
                      </div>

                      {/* Subtle Bottom Accent Indicator */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#5A4A42] font-medium tracking-wide">
                        <span className="flex items-center gap-1 text-[#C27A52]">
                          <Sparkles className="w-3 h-3" />
                          <span>Professional VA</span>
                        </span>
                        <span className="text-[#8A7A72]">Custom SOP</span>
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
