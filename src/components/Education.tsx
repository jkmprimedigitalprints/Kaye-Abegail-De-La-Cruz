import React from 'react';
import { GraduationCap, Languages, Download, Eye, CheckCircle2, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface EducationProps {
  onViewResumeClick: () => void;
}

export const Education: React.FC<EducationProps> = ({ onViewResumeClick }) => {
  const { education, personal } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Resume
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Educational foundation and official curriculum vitae for Kaye Abegail De La Cruz.
          </p>
        </div>

        {/* Education & Language Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-12">
          
          {/* Left Column: Education History */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Formal Education
                </h3>
                <span className="text-xs text-slate-400">Verified Academic Record</span>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Language Proficiency */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Languages
                  </h3>
                  <span className="text-xs text-slate-400">Communication Fluency</span>
                </div>
              </div>

              <div className="space-y-4">
                {personal.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {lang.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {lang.level}
                      </p>
                    </div>
                    <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 block leading-relaxed">
                Strong background in written and verbal communication, accurate documentation, and professional email correspondence.
              </span>
            </div>
          </div>

        </div>

        {/* View & Download Resume Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-7 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Official Curriculum Vitae
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Preview Kaye's verified CV on-screen or download the official printable PDF document.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            {/* View Resume Button */}
            <button
              onClick={onViewResumeClick}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-teal-400" />
              <span>View CV Online</span>
            </button>

            {/* Download Resume Button */}
            <a
              href={personal.resumeUrl}
              download="Kaye_Abegail_De_La_Cruz_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 dark:bg-teal-400 dark:hover:bg-teal-300 rounded-xl shadow-md transition-all"
            >
              <Download className="w-4 h-4 text-teal-700 dark:text-slate-950" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
