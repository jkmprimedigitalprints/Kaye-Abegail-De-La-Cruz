import React, { useState, useEffect } from 'react';
import { Eye, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, WorkSampleItem } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

export const WorkSamples: React.FC = () => {
  const { showWorkSamples, workSamples } = PORTFOLIO_DATA;
  const [selectedSample, setSelectedSample] = useState<WorkSampleItem | null>(null);

  // Lock background scroll when modal is active, unlock on close
  useEffect(() => {
    if (selectedSample) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSample]);

  if (!showWorkSamples || !workSamples || workSamples.length === 0) {
    return null;
  }

  // Include 5 items for the seamless 5-column Instagram-style strip
  const stripItems: WorkSampleItem[] = [
    {
      id: 'customer-support-email-templates',
      title: 'Customer Support Email Templates',
      description: 'Professional replies for inquiries, complaints, and follow-ups.',
      tag: 'Writing',
      imageUrl: '/images/service_email_management.jpg',
      altText: 'Customer Support Email Templates with professional customer service drafting',
      context: 'Created structured, polite response drafts for handling three of the most common customer interactions: initial product inquiries, complaint de-escalation with escalation notice, and courteous post-resolution follow-ups.',
      deliverables: [
        '1. Reply to an inquiry (shipping options & turnaround times)',
        '2. Reply to a complaint (acknowledging frustration & clear 24-hr resolution guarantee)',
        '3. Courteous follow-up (ensuring customer satisfaction)'
      ],
      toolsUsed: ['Email Drafting', 'Customer Service Etiquette', 'De-escalation']
    },
    {
      id: 'spreadsheet-cleanup',
      title: 'Spreadsheet Cleanup',
      description: 'Messy data turned into a clean, consistent, sorted sheet.',
      tag: 'Data Entry',
      imageUrl: '/images/service_data_entry.jpg',
      altText: 'Spreadsheet Cleanup showing duplicate removal, formatting standardization, and sorted data',
      context: 'Normalized raw data containing inconsistent name casing, mixed date notations, and duplicate entries into a clean, deduplicated, and sorted spreadsheet.',
      deliverables: [
        'Removed redundant duplicate records',
        'Standardized names into Proper Title Case',
        'Converted mixed dates into uniform YYYY-MM-DD format',
        'Clean, sorted alphabetical output ready for CRM upload'
      ],
      toolsUsed: ['Google Sheets', 'Data Deduplication', 'Formatting Standards']
    },
    {
      id: 'weekly-schedule-plan',
      title: 'Weekly Schedule Plan',
      description: 'An organized weekly calendar for a busy business owner.',
      tag: 'Scheduling',
      imageUrl: '/images/service_calendar_management.jpg',
      altText: 'Weekly Schedule Plan with color-coded calendar and administrative time blocking',
      context: 'Designed an intuitive, color-coded weekly schedule balancing high-priority client meetings, deep focus time for reports, and recurring admin routines.',
      deliverables: [
        'Color-coded activity blocks (Client Meetings, Focus Work, Admin Tasks)',
        'Daily morning inbox & email triage buffer',
        'Strategic focus work sessions protected from interruption',
        'Friday weekly review and planning for the upcoming week'
      ],
      toolsUsed: ['Calendar Management', 'Time Blocking', 'Executive Planning']
    },
    {
      id: 'basic-website-creation',
      title: 'Basic Website Creation',
      description: 'A clean, modern, and mobile-responsive personal website layout.',
      tag: 'Web Creation',
      imageUrl: '/images/project_website_creation_1793783065902.jpg',
      altText: 'Modern responsive website mockup on screen with clean typography and balanced layout',
      context: 'Developed a responsive, mobile-first website structure designed for clear visual hierarchy, smooth navigation, working contact integration, and cross-device accessibility.',
      deliverables: [
        'Clean, modern layout with balanced white space',
        'Fully responsive design for mobile, tablet, and desktop',
        'Functional contact form and social link integration',
        'Fast-loading performance with modern web standards'
      ],
      toolsUsed: ['React', 'Tailwind CSS', 'Responsive Web Design'],
      liveUrl: 'https://kayeabegaildelacruz.vercel.app/'
    },
    {
      id: 'calendar-triage',
      title: 'Executive Daily Planning',
      description: 'Structured time blocking and daily meeting triage for busy founders.',
      tag: 'Scheduling',
      imageUrl: '/images/planner_notes_arch_1794202023456.jpg',
      altText: 'Daily planning notebook and schedule organization notes',
      context: 'Demonstration of daily schedule buffers, priority blocking, and routine admin workflow preparation.',
      deliverables: [
        'Time-blocked daily executive calendar',
        'Meeting buffer management to prevent burnout',
        'Weekly planning review'
      ],
      toolsUsed: ['Google Calendar', 'Time Blocking', 'Executive Support']
    }
  ];

  return (
    <section id="portfolio" className="relative bg-[#C27A52] text-white pt-10 sm:pt-16 pb-0 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        
        {/* Section Header styled as "MY INSTAGRAM" from reference */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-[#E6BE85]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E6BE85] uppercase">
              Portfolio & Deliverables
            </span>
            <div className="w-8 h-[1px] bg-[#E6BE85]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">
            Work Samples & Deliverables
          </h2>
          <p className="mt-2 text-xs text-white/85 max-w-lg mx-auto font-light">
            Real samples of administrative, customer care, and technical support deliverables. Click any image to view details.
          </p>
        </div>

        {/* Instagram-Style Image Strip with Hover Scale-Up on Light Beige Canvas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {stripItems.slice(0, 5).map((item, idx) => (
            <motion.div
              key={item.id}
              data-reveal-delay={idx * 80}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedSample(item)}
              className="reveal-card relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg border-2 border-white bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-[#C27A52]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <span className="px-2 py-0.5 rounded-md bg-[#E6BE85] text-[#2D2522] text-[9px] font-bold uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <p className="text-xs font-serif italic text-white line-clamp-2">
                  {item.title}
                </p>
                <span className="mt-2 text-[10px] uppercase tracking-widest text-[#FAF5F0] underline flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>Preview</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Deliverable Preview with Dribbble-style Spring Popup & Backdrop Blur */}
      <AnimatePresence>
        {selectedSample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedSample(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#E8D9CD] flex flex-col overflow-hidden text-[#2D2522]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#F2E5DC] bg-[#FAF5F0]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[10px] tracking-wider uppercase font-bold rounded-md bg-[#E6BE85] text-[#2D2522]">
                    {selectedSample.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif italic font-bold text-[#2D2522]">
                    {selectedSample.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSample(null)}
                  className="p-1.5 text-[#2D2522] hover:text-[#C27A52] rounded-md hover:bg-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Viewport */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#2D2522]">
                <img
                  src={selectedSample.imageUrl}
                  alt={selectedSample.altText}
                  className="max-h-[58vh] w-auto max-w-full rounded-xl shadow-lg object-contain"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-5 px-6 border-t border-[#F2E5DC] bg-white space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-serif italic font-bold text-[#2D2522]">
                      Deliverable Details
                    </h4>
                    <p className="text-xs text-[#5A4A42] mt-0.5 font-light">
                      {selectedSample.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedSample(null)}
                    className="px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase rounded-md bg-[#C27A52] text-white hover:bg-[#A9623D] transition-colors cursor-pointer shrink-0"
                  >
                    Close Preview
                  </motion.button>
                </div>

                {selectedSample.deliverables && (
                  <div className="pt-2 border-t border-[#F2E5DC]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C27A52] block mb-1">
                      Key Outcomes
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2D2522]">
                      {selectedSample.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 font-light">
                          <Check className="w-3.5 h-3.5 text-[#C27A52] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Organic Wave flowing into Light Beige Contact Section */}
      <WavyDivider fillColor="#FAF5F0" variant="hero-wave" />
    </section>
  );
};
