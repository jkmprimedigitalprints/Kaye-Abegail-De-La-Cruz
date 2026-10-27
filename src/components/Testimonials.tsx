import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const { showTestimonials, testimonials } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Strictly hide if feature flag is false or no real testimonials exist
  if (!showTestimonials || testimonials.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client & Supervisor Feedback
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <Quote className="w-8 h-8 text-teal-600/30 mb-4" />
            <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed italic mb-6">
              "{current.content}"
            </blockquote>
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {current.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {current.role} • {current.company}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
