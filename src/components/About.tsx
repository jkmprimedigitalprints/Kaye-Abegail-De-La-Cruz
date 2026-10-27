import React from 'react';
import { Clock, Building2, Languages, CalendarCheck, CheckCircle2, ShieldCheck, ArrowRight, UserCheck, Sparkles, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  onHireMeClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireMeClick }) => {
  const { personal, stats } = PORTFOLIO_DATA;

  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 1:
        return <Building2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      case 2:
        return <Languages className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 3:
        return <CalendarCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Kaye Abegail
          </h2>
        </div>

        {/* 2-COLUMN BIO LAYOUT (Not centered, modern split view) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Role Focus & Value Proposition */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive & Technical VA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Customer Support & Tech Background Transitioning into Virtual Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                4+ years of customer service and technical support at <strong className="text-white">Alorica</strong>, <strong className="text-white">TELUS International</strong>, and <strong className="text-white">Accenture</strong>, now offering comprehensive virtual assistant and administrative support.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-teal-300 font-medium">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{personal.availability.badge} • Flexible Shifts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Official Bio & Core Operational Strengths */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                Professional Bio
              </span>
              
              {/* Full Bio Paragraph as requested */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {personal.bio}
              </p>

              {/* Two Column Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Accuracy & Organization
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Meticulous documentation, spreadsheet cleanup, and digital filing systems.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Problem-Solving Under Pressure
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Calm, patient communication and methodical issue resolution in remote setups.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Looking for dependable administrative execution?
              </span>
              <button
                onClick={onHireMeClick}
                className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 inline-flex items-center gap-1"
              >
                <span>Hire Kaye</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 Quick Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700/60">
                {getStatIcon(idx)}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-teal-700 dark:text-teal-400 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Real Work Terms & Availability Card */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            <div className="space-y-1 pb-4 md:pb-0 md:pr-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Shift Flexibility</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{personal.availability.shift}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:px-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Engagement</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{personal.availability.type}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:px-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Timezone Coverage</span>
              <p className="text-sm font-bold text-teal-700 dark:text-teal-400">{personal.availability.timezones}</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0 md:pl-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Notice Period</span>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Ready Immediately</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
