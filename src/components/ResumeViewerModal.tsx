import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Printer, MapPin, Mail, Phone, ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(0.65);
  const containerRef = useRef<HTMLDivElement>(null);

  // Target A4 canvas dimensions
  const docW = 750;
  const docH = 1050;

  // Fallback image path for direct download
  const cvImagePath = '/assets/aistudio/image_a02f68c0.png';

  // Calculate dynamic scale to ensure the CV fits 100% in 1 full page without scrolling or cropping
  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      return;
    }

    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      if (clientWidth <= 0 || clientHeight <= 0) return;

      // Available area with comfortable breathing room padding
      const padX = 20;
      const padY = 20;
      const availW = Math.max(260, clientWidth - padX);
      const availH = Math.max(340, clientHeight - padY);

      // Fit strictly within both width and height
      const scaleW = availW / docW;
      const scaleH = availH / docH;
      const fitted = Math.min(scaleW, scaleH);

      setScale(Math.max(0.3, Math.min(fitted, 1.15)));
    };

    updateScale();

    // Use ResizeObserver for instant responsive auto-fit without lag or cropping
    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    // Lock body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      ro.disconnect();
      document.body.style.overflow = '';
    };
  }, [isOpen, docW, docH]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const activeScale = isZoomed ? 1.05 : scale;
  const scaledWidth = isZoomed ? docW * 1.05 : docW * scale;
  const scaledHeight = isZoomed ? docH * 1.05 : docH * scale;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-3 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-5xl h-[96vh] sm:h-[97vh] bg-[#1A1412] rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-white/10 bg-[#251D18] shrink-0 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-xs shadow-emerald-400/50" />
                <span id="resume-title" className="text-xs sm:text-sm font-serif italic font-bold text-white truncate">
                  Kaye Abegail De La Cruz — Curriculum Vitae
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Zoom / Fit Toggle */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title={isZoomed ? "Fit to Screen" : "Zoom In"}
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5 text-[#E6BE85]" />
                      <span className="hidden sm:inline">Fit Screen</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5 text-[#E6BE85]" />
                      <span className="hidden sm:inline">Zoom</span>
                    </>
                  )}
                </button>

                {/* Print Button */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Print official CV"
                >
                  <Printer className="w-3.5 h-3.5 text-[#E6BE85]" />
                  <span>Print</span>
                </button>

                {/* Download CV */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={cvImagePath}
                  download="Kaye_Abegail_De_La_Cruz_CV.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#2D2522] bg-[#E6BE85] hover:bg-[#D4A968] rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </motion.a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1 text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer ml-1"
                  aria-label="Close CV viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Middle Preview Area: Perfectly Fitted, No Cropping, Razor-Sharp Vector Typography */}
            <div
              ref={containerRef}
              className={`flex-1 min-h-0 w-full flex p-2 sm:p-3 bg-[#110D0B] ${
                isZoomed
                  ? 'overflow-auto justify-center items-start'
                  : 'overflow-hidden justify-center items-center'
              }`}
            >
              {/* Scaled Wrapper Box with exact calculated dimensions: Prevents cropping and centers cleanly */}
              <div
                style={{
                  width: `${scaledWidth}px`,
                  height: `${scaledHeight}px`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className={`shadow-2xl rounded-sm bg-white shrink-0 ${isZoomed ? 'my-4' : 'm-auto'}`}
              >
                {/* 1-Page Official Document Canvas: Pure White Background, Perfect A4 Layout */}
                <div
                  id="official-cv-printable-page"
                  style={{
                    width: `${docW}px`,
                    height: `${docH}px`,
                    transform: `scale(${activeScale})`,
                    transformOrigin: '0 0',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                  }}
                  className="bg-white text-black px-9 py-8 flex flex-col justify-between selection:bg-[#E6BE85] select-text"
                >
                  {/* Top Sections Flow */}
                  <div>
                    {/* Header: Clean, centered, matching uploaded reference */}
                    <div className="text-center">
                      <h1 className="text-[27px] font-black uppercase tracking-tight text-black leading-none mb-1.5">
                        KAYE ABEGAIL DE LA CRUZ
                      </h1>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black mb-2.5">
                        GENERAL VIRTUAL ASSISTANT / GENERAL ADMINISTRATIVE ASSISTANT
                      </p>
                      <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-black">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                          <span>Taguig, Metro Manila, Philippines</span>
                        </span>
                        <span className="text-black/40">|</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-black shrink-0" />
                          <span>jobaye2024@gmail.com</span>
                        </span>
                        <span className="text-black/40">|</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                          <span>+63 9687605420</span>
                        </span>
                      </div>

                      {/* Thick Solid Header Separator Line */}
                      <div className="w-full h-[2.5px] bg-black mt-2.5" />
                    </div>

                    {/* Section 1: Professional Summary */}
                    <div className="mt-3.5">
                      <h2 className="text-[11.5px] font-extrabold uppercase tracking-wider text-black border-b-[1.5px] border-black pb-0.5 mb-1.5">
                        PROFESSIONAL SUMMARY
                      </h2>
                      <p className="text-[10px] leading-[1.6] text-black text-justify font-normal">
                        Dedicated and detail-oriented professional with over 4 years of solid customer service and technical support experience transitioning into a General Virtual Assistant and Administrative Support role. Highly organized, computer literate, and adaptable, with a strong background in written and verbal customer communication, accurate documentation, and methodical problem-solving. Proven ability to multitask effectively under pressure, manage administrative tasks with high attention to detail, and work independently or collaboratively in remote environments. Eager to apply transferable administrative and client support skills to maintain organized, efficient business operations.
                      </p>
                    </div>

                    {/* Section 2: Core & Transferable Skills (2-Column Grid) */}
                    <div className="mt-3.5">
                      <h2 className="text-[11.5px] font-extrabold uppercase tracking-wider text-black border-b-[1.5px] border-black pb-0.5 mb-2">
                        CORE & TRANSFERABLE SKILLS
                      </h2>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[9.5px] leading-relaxed text-black">
                        {/* Left Column */}
                        <div className="space-y-2">
                          <div>
                            <strong className="font-extrabold text-black block mb-0.5">
                              ADMINISTRATIVE & ORGANIZATION:
                            </strong>
                            <span>
                              Administrative Support • Data Entry & Cleanup • File & Document Organization • Google Drive Management • Calendar Coordination • Task Follow-up • Internet Research • Document Formatting
                            </span>
                          </div>
                          <div>
                            <strong className="font-extrabold text-black block mb-0.5">
                              COMMUNICATION & CUSTOMER CARE:
                            </strong>
                            <span>
                              Customer Service & Client Communication • Written & Verbal Communication • Inquiry & Concern Resolution • Accurate Ticket & Call Documentation • Professional Email Etiquette
                            </span>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-2">
                          <div>
                            <strong className="font-extrabold text-black block mb-0.5">
                              COMPUTER & SOFTWARE TOOLS:
                            </strong>
                            <span>
                              Basic Google Docs • Basic Google Sheets (Spreadsheet Cleanup) • Basic Email Communication & Drafting • Computer Literacy • Technical Troubleshooting • Digital File Filing
                            </span>
                          </div>
                          <div>
                            <strong className="font-extrabold text-black block mb-0.5">
                              CORE COMPETENCIES:
                            </strong>
                            <span>
                              Attention to Detail • Multitasking • Time Management • Working Under Pressure • Working Independently • Teamwork & Collaboration • Following Procedures
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Professional Work Experience */}
                    <div className="mt-3.5">
                      <h2 className="text-[11.5px] font-extrabold uppercase tracking-wider text-black border-b-[1.5px] border-black pb-0.5 mb-2">
                        PROFESSIONAL WORK EXPERIENCE
                      </h2>
                      <div className="space-y-2.5">
                        {/* Role 1: Accenture */}
                        <div className="text-[9.5px]">
                          <div className="flex items-center justify-between mb-0.5">
                            <div>
                              <span className="font-extrabold text-black">Technical Support Representative</span>
                              <span className="text-black font-medium"> | Accenture Inc.</span>
                            </div>
                            <span className="font-bold text-black text-right shrink-0">
                              Apr 2023 – Present
                            </span>
                          </div>
                          <ul className="list-disc list-outside pl-4 space-y-0.5 text-black leading-relaxed">
                            <li>Provide prompt technical support and customer guidance via digital channels, troubleshooting inquiries accurately while adhering to standard operating procedures.</li>
                            <li>Maintain thorough, error-free documentation of customer interactions, case histories, and troubleshooting steps in the internal database for quick reference.</li>
                            <li>Multitask efficiently between active customer interactions, diagnostic tools, and multiple support applications in a fast-paced environment.</li>
                            <li>Demonstrate strong computer literacy and problem-solving skills to resolve technical issues and escalate complex matters with detailed context.</li>
                          </ul>
                        </div>

                        {/* Role 2: TELUS International */}
                        <div className="text-[9.5px]">
                          <div className="flex items-center justify-between mb-0.5">
                            <div>
                              <span className="font-extrabold text-black">Customer Service Representative</span>
                              <span className="text-black font-medium"> | TELUS International Philippines</span>
                            </div>
                            <span className="font-bold text-black text-right shrink-0">
                              Sept 2021 – Apr 2023
                            </span>
                          </div>
                          <ul className="list-disc list-outside pl-4 space-y-0.5 text-black leading-relaxed">
                            <li>Handled diverse customer inquiries and account requests with professional written and verbal communication, ensuring positive client experiences.</li>
                            <li>Entered, updated, and validated customer account information and transaction records with high attention to detail and data integrity.</li>
                            <li>Researched guidelines and account policies to resolve concerns under pressure while meeting strict quality and attendance standards.</li>
                            <li>Collaborated with team leaders and colleagues to adapt to updated account procedures, workflow enhancements, and service targets.</li>
                          </ul>
                        </div>

                        {/* Role 3: Alorica */}
                        <div className="text-[9.5px]">
                          <div className="flex items-center justify-between mb-0.5">
                            <div>
                              <span className="font-extrabold text-black">Customer Service Associate</span>
                              <span className="text-black font-medium"> | Alorica – Fort Taguig</span>
                            </div>
                            <span className="font-bold text-black text-right shrink-0">
                              Oct 2019 – Apr 2020
                            </span>
                          </div>
                          <ul className="list-disc list-outside pl-4 space-y-0.5 text-black leading-relaxed">
                            <li>Addressed customer inquiries and service requests in a structured, high-volume environment while strictly observing company protocols.</li>
                            <li>Logged routine customer data accurately and routed unresolved account issues to appropriate support teams for timely follow-up.</li>
                            <li>Demonstrated composure, patience, and active listening while resolving customer concerns and maintaining professional communication.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Education */}
                    <div className="mt-3.5">
                      <h2 className="text-[11.5px] font-extrabold uppercase tracking-wider text-black border-b-[1.5px] border-black pb-0.5 mb-1.5">
                        EDUCATION
                      </h2>
                      <div className="space-y-1 text-[9.5px]">
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="truncate">
                            <strong className="font-extrabold text-black">Central Bicol State University of Agriculture</strong>
                            <span className="text-black font-medium"> — Bachelor of Elementary Education, Major in Content Area (Sta. Cruz, Ratay, Calabanga, Camarines Sur)</span>
                          </div>
                          <span className="font-bold text-black text-right shrink-0">
                            2015–2019
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="truncate">
                            <strong className="font-extrabold text-black">Central Bicol State University of Agriculture</strong>
                            <span className="text-black font-medium"> — Secondary Education High School Diploma (Sta. Cruz Poblacion, Calabanga, Camarines Sur)</span>
                          </div>
                          <span className="font-bold text-black text-right shrink-0">
                            2015
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Bottom 3-Column Meta (Pinned cleanly to bottom of the A4 page) */}
                  <div className="grid grid-cols-3 gap-4 pt-2.5 border-t-[1.5px] border-black text-[9.5px] mt-4">
                    <div>
                      <strong className="font-extrabold text-black block mb-0.5">LANGUAGES</strong>
                      <span className="text-black">English (Fluent) • Tagalog (Native)</span>
                    </div>
                    <div>
                      <strong className="font-extrabold text-black block mb-0.5">PERSONAL DETAILS</strong>
                      <span className="text-black">Filipino • Born June 02, 1998</span>
                    </div>
                    <div>
                      <strong className="font-extrabold text-black block mb-0.5">REFERENCES</strong>
                      <span className="text-black">Available upon request.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
