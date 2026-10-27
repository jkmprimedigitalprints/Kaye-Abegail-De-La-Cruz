/**
 * =========================================================================
 * KAYE ABEGAIL DE LA CRUZ - PORTFOLIO SINGLE PAGE APPLICATION
 * =========================================================================
 * General Virtual Assistant | Administrative Assistant | Customer Support & Tech Support
 * 4+ Years of Customer Service & Tech Support Experience (Alorica, TELUS, Accenture)
 * 
 * ALL EDITABLE CONTENT & FEATURE FLAGS are maintained in:
 *   /src/data/portfolioData.ts
 * 
 * Rules:
 * - Uses ONLY real, verified facts.
 * - No invented metrics, QA percentages, fictional clients, or fake certifications.
 * - Optional sections (Work Samples, Testimonials) and elements (Book a Call)
 *   remain completely hidden until real content is added.
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { WorkSamples } from './components/WorkSamples';
import { Testimonials } from './components/Testimonials';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  // Dark / Light Theme State with LocalStorage Persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kaye_portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Resume Viewer Modal State
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false);

  // Pre-selected service for the Contact form when user clicks "Inquire"
  const [selectedService, setSelectedService] = useState<string>('General Virtual Assistant');

  // Sync dark class and data-theme on the <html> root element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('kaye_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('kaye_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-teal-500 selection:text-white transition-colors duration-300">
      
      {/* Sticky Header & Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onViewResumeClick={() => setIsResumeViewerOpen(true)}
      />

      {/* Main Single-Page Sections */}
      <main className="overflow-hidden">
        {/* 1. Hero Section */}
        <Hero
          onHireMeClick={handleHireMeClick}
          onViewResumeClick={() => setIsResumeViewerOpen(true)}
        />

        {/* 2. About Me Section (2-Column Bio Layout) */}
        <About
          onHireMeClick={handleHireMeClick}
        />

        {/* 3. Services Offered */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* 4. BPO & Support Work Experience (Vertical Timeline) */}
        <Experience />

        {/* 5. Grouped Skills & Tools (5 Aligned Category Tabs) */}
        <Skills />

        {/* 6. Optional Work Samples (Hidden when showWorkSamples is false) */}
        <WorkSamples />

        {/* 7. Optional Testimonials Carousel (Hidden when showTestimonials is false) */}
        <Testimonials />

        {/* 8. Education & Resume (Viewable & Downloadable CV) */}
        <Education
          onViewResumeClick={() => setIsResumeViewerOpen(true)}
        />

        {/* 9. Contact & Inquiries (FormSubmit Integrated) */}
        <Contact
          selectedService={selectedService}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive On-Screen Resume Viewer & Printable CV Modal */}
      <ResumeViewerModal
        isOpen={isResumeViewerOpen}
        onClose={() => setIsResumeViewerOpen(false)}
      />

    </div>
  );
}
