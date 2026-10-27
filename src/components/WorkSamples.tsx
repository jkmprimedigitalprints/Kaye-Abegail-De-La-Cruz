import React, { useState, useEffect } from 'react';
import { Eye, ArrowUpRight, X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_DATA, WorkSampleItem } from '../data/portfolioData';

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

  // Strictly hide if feature flag is false or no samples exist
  if (!showWorkSamples || workSamples.length === 0) {
    return null;
  }

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Writing':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Data Entry':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Scheduling':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    }
  };

  return (
    <section id="samples" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Demonstrated Deliverables</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Samples
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real examples of administrative and customer support deliverables. Click any card to view the full image.
          </p>
        </div>

        {/* 3 Work Sample Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSamples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className="cursor-pointer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800/80">
                  <img
                    src={sample.imageUrl}
                    alt={sample.altText}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                  
                  {/* Tag positioned on the image */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border shadow-xs ${getTagColor(sample.tag)}`}>
                      {sample.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {sample.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    "{sample.description}"
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300">
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand image</span>
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Image Viewer Modal (NO BLUR, NO BACKGROUND SCROLL) */}
      {selectedSample && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 animate-fade-in"
          onClick={() => setSelectedSample(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-sample-title"
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2.5">
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded-lg border ${getTagColor(selectedSample.tag)}`}>
                  {selectedSample.tag}
                </span>
                <h3 id="modal-sample-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {selectedSample.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSample(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950">
              <img
                src={selectedSample.imageUrl}
                alt={selectedSample.altText}
                className="max-h-[68vh] w-auto max-w-full rounded-xl shadow-lg object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                "{selectedSample.description}"
              </p>
              <button
                onClick={() => setSelectedSample(null)}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white dark:bg-teal-600 dark:hover:bg-teal-500 hover:bg-slate-800 transition-colors shrink-0"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
