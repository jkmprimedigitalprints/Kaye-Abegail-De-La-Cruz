import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const { personal, workExperience, education, skillCategories } = PORTFOLIO_DATA;

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#E8D9CD] flex flex-col overflow-hidden text-[#2D2522]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#F2E5DC] bg-[#FAF5F0]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C27A52] animate-pulse"></span>
                <span id="resume-title" className="text-xs sm:text-sm font-serif italic font-bold text-[#2D2522]">
                  Official Curriculum Vitae • {personal.fullName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-wider uppercase font-semibold rounded-md border border-[#E8D9CD] bg-white text-[#2D2522] hover:bg-[#F7EFE9] transition-colors cursor-pointer"
                  title="Print document directly"
                >
                  <Printer className="w-3.5 h-3.5 text-[#C27A52]" />
                  <span>Print</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={personal.resumeUrl}
                  download="Kaye_Abegail_De_La_Cruz_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] tracking-wider uppercase font-bold text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </motion.a>

                <button
                  onClick={onClose}
                  className="p-1.5 text-[#2D2522] hover:text-[#C27A52] rounded-md hover:bg-white transition-colors ml-1 cursor-pointer"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Document Body */}
            <div className="overflow-y-auto p-6 sm:p-10 flex-1 bg-white text-[#2D2522]">
              <div id="printable-resume" className="max-w-3xl mx-auto space-y-6">
                
                {/* CV Header */}
                <div className="border-b border-[#F2E5DC] pb-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#2D2522]">
                        {personal.fullName}
                      </h1>
                      <p className="text-sm font-serif italic text-[#C27A52] mt-1">
                        {personal.title}
                      </p>
                      <p className="text-xs text-[#5A4A42] mt-1 font-light italic">
                        “{personal.tagline || 'Reliable, detail-oriented, and calm under pressure'}”
                      </p>
                    </div>
                    <div className="text-xs text-[#5A4A42] space-y-1 sm:text-right font-light">
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#C27A52]" />
                        <span>{personal.email}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C27A52]" />
                        <span>{personal.phone}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C27A52]" />
                        <span>{personal.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                  <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#C27A52]">
                    Professional Profile
                  </h2>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#5A4A42] font-light">
                    {personal.bio}
                  </p>
                </div>

                {/* Work Experience */}
                <div className="space-y-4 pt-2">
                  <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#C27A52]">
                    Work Experience (5 Years BPO History)
                  </h2>
                  <div className="space-y-5">
                    {workExperience.map((job) => (
                      <div key={job.id} className="text-xs sm:text-sm space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <span className="font-serif italic font-bold text-[#2D2522] text-sm">
                            {job.role}
                          </span>
                          <span className="text-xs font-semibold text-[#C27A52]">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#5A4A42]">
                          {job.company} {job.location ? `• ${job.location}` : ''}
                        </p>
                        <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#5A4A42] pt-1 font-light">
                          {job.bullets.map((b, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Tools Summary - Exactly 4 Categories */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#C27A52]">
                    Key Skills & Competencies
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {skillCategories.map((group, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#FAF5F0] border border-[#E8D9CD]">
                        <span className="font-bold text-[#2D2522] block mb-1">
                          {group.categoryName} ({group.count})
                        </span>
                        <p className="text-[#5A4A42] leading-relaxed font-light">
                          {group.skills.join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Languages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-[#F2E5DC]">
                  <div className="space-y-2">
                    <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#C27A52]">
                      Education
                    </h2>
                    {education.map((edu, idx) => (
                      <div key={idx} className="text-xs space-y-0.5">
                        <p className="font-serif italic font-semibold text-[#2D2522]">{edu.degree}</p>
                        <p className="text-[#5A4A42] font-light">{edu.institution} ({edu.period})</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-[11px] font-bold uppercase tracking-widest text-[#C27A52]">
                      Languages & Availability
                    </h2>
                    <div className="text-xs space-y-1 text-[#5A4A42] font-light">
                      <p>
                        <span className="font-semibold text-[#2D2522]">Languages:</span> English (Fluent), Tagalog (Native)
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D2522]">Shift:</span> Any (Day, Mid, or Night) • Flexible
                      </p>
                      <p>
                        <span className="font-semibold text-[#2D2522]">Availability:</span> Ready to start immediately
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#F2E5DC] bg-[#FAF5F0]">
              <span className="text-xs text-[#5A4A42] font-light">
                Verified Curriculum Vitae • Ready to Download or Print
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#2D2522] hover:bg-white rounded-md transition-colors cursor-pointer"
                >
                  Close
                </button>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={personal.resumeUrl}
                  download="Kaye_Abegail_De_La_Cruz_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
