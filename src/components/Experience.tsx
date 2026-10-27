import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { workExperience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Over 4 years of verified customer service and technical support experience in structured, high-standard BPO environments.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Guide Line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-10 sm:space-y-12">
            {workExperience.map((job, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-500 items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm z-10">
                    <Building className="w-4 h-4" />
                  </div>

                  {/* Period Badge on Opposite Desktop Side */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <div className="inline-block p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                      <span className="text-xs font-bold text-teal-700 dark:text-teal-400 block">
                        {job.period}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {job.company}
                      </span>
                    </div>
                  </div>

                  {/* Main Job Card */}
                  <div className="w-full md:w-1/2">
                    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                      
                      {/* Mobile Period Header */}
                      <div className="md:hidden flex items-center justify-between mb-3 text-xs">
                        <span className="px-2.5 py-1 rounded-full font-bold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                          {job.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-4">
                        {job.company}
                      </p>

                      {/* Achievement Bullets */}
                      <div className="space-y-2.5">
                        {job.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                            <div className="p-0.5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="leading-relaxed">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
