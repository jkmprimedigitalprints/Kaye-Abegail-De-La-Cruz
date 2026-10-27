import React from 'react';
import { 
  Headphones, 
  Wrench, 
  ClipboardList, 
  TableProperties, 
  Mail, 
  FolderGit2, 
  FileText, 
  Check, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'customer-support':
        return <Headphones className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'technical-support':
        return <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'administrative-support':
        return <ClipboardList className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'data-entry-cleanup':
        return <TableProperties className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'email-calendar-management':
        return <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'file-document-organization':
        return <FolderGit2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'ticket-call-documentation':
        return <FileText className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Headphones className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Virtual Assistant & Support Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services Offered
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Reliable, organized support across customer interactions, digital troubleshooting, accurate record keeping, and everyday administrative tasks.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.id)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Task Bullets */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200/70 dark:border-slate-800">
                  {service.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="p-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-normal">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-2 py-2.5 px-4 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white dark:hover:border-teal-600 transition-all flex items-center justify-center gap-1.5 group/btn"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
