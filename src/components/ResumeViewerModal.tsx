import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Building, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const { personal, workExperience, education, skillGroups } = PORTFOLIO_DATA;

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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span id="resume-title" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              Curriculum Vitae • {personal.fullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Print document directly"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={personal.resumeUrl}
              download="Kaye_Abegail_De_La_Cruz_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 flex-1 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
          <div id="printable-resume" className="max-w-3xl mx-auto space-y-6">
            
            {/* CV Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {personal.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-400 mt-1">
                    {personal.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                    “{personal.valueStatement}”
                  </p>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{personal.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{personal.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Professional Profile
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {personal.bio}
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Work Experience (BPO History)
              </h2>
              <div className="space-y-5">
                {workExperience.map((job) => (
                  <div key={job.id} className="text-xs sm:text-sm space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        {job.role}
                      </span>
                      <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {job.company}
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 pt-1">
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

            {/* Skills & Tools Summary */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Key Skills & Software
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white block mb-1">
                      {group.category}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {group.skills.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Education
                </h2>
                {education.map((edu, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <p className="font-semibold text-slate-900 dark:text-white">{edu.degree}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution} ({edu.period})</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Languages & Availability
                </h2>
                <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <p>
                    <span className="font-semibold">Languages:</span> English (Fluent), Tagalog (Native)
                  </p>
                  <p>
                    <span className="font-semibold">Shift:</span> Any (Day, Mid, or Night) • Flexible
                  </p>
                  <p>
                    <span className="font-semibold">Availability:</span> Ready to start immediately
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Official CV • Ready to Download or Print
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href={personal.resumeUrl}
              download="Kaye_Abegail_De_La_Cruz_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
