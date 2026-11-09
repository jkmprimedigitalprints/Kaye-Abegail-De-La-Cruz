import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { WorkSamples } from './components/WorkSamples';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  // Resume Viewer Modal State
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false);

  // Pre-selected service for the Contact form when user clicks "Inquire"
  const [selectedService, setSelectedService] = useState<string>('General Virtual Assistance');

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
    <div className="min-h-screen w-full bg-white font-sans overflow-x-hidden">
      
      {/* Smooth reading progress bar on scroll */}
      <ScrollProgressBar />

      {/* Centered Top Header & Navigation with Arch Portfolio Logo */}
      <Navbar
        onViewResumeClick={() => setIsResumeViewerOpen(true)}
      />

      {/* Main Content Sections with Organic Flowing Wave Dividers */}
      <main className="w-full overflow-hidden">
        
        {/* 1. Hero: Warm terracotta background, arch portrait, Playfair italic introduction & bottom sweeping wave */}
        <Hero
          onHireMeClick={handleHireMeClick}
          onViewResumeClick={() => setIsResumeViewerOpen(true)}
        />

        {/* 2. Services Offered: "Favorites This Month" on White Canvas with bottom wave */}
        <Services
          onSelectService={handleSelectService}
        />

        {/* 3. About Kaye: Stats, Core Strengths & Shift Flexibility on Light Beige with bottom wave */}
        <About
          onHireMeClick={handleHireMeClick}
        />

        {/* 4. Experience: Alternating Content Boxes (Accenture, TELUS, Alorica) with Arch & Circular Detail & bottom wave */}
        <Experience
          onHireMeClick={handleHireMeClick}
        />

        {/* 5. Skills: Grouped into the exact 4 requested categories with bottom wave */}
        <Skills />

        {/* 6. Education: Dedicated academic background section for CBSUA degree and languages with bottom deep wave */}
        <Education
          onViewResumeClick={() => setIsResumeViewerOpen(true)}
        />

        {/* 7. Work Samples: Terracotta "My Instagram" Style Image Strip with hover scale-up & bottom wave */}
        <WorkSamples />

        {/* 8. Contact & Inquiries: FormSubmit Integrated Contact Section on Light Beige with bottom wave into footer */}
        <Contact
          selectedService={selectedService}
        />
      </main>

      {/* 9. Warm Terracotta Footer with Hover Bounce/Rotate Socials & Back to Top */}
      <Footer />

      {/* 10. Printable Curriculum Vitae Modal */}
      <ResumeViewerModal
        isOpen={isResumeViewerOpen}
        onClose={() => setIsResumeViewerOpen(false)}
      />

    </div>
  );
}
