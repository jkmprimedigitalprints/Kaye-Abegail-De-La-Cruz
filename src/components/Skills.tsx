import React, { useState } from 'react';
import { 
  FolderGit2, 
  MessageSquare, 
  Laptop, 
  Sparkles, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryFilters = [
    { id: 'All', label: 'ALL SKILLS' },
    { id: 'admin', label: 'ADMINISTRATIVE' },
    { id: 'communication', label: 'COMMUNICATION' },
    { id: 'software', label: 'SOFTWARE' },
    { id: 'competencies', label: 'CORE' },
  ];

  const categoryDesignMeta: Record<string, { gradient: string; badge: string; highlights: string[] }> = {
    admin: {
      gradient: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
      badge: '8 Competencies',
      highlights: ['Data Hygiene', 'Filing', 'Coordination'],
    },
    communication: {
      gradient: 'from-[#FAF5F0] via-[#FFE8E3] to-[#F7EFE9]',
      badge: '5 Competencies',
      highlights: ['Customer Care', 'Email Etiquette', 'De-escalation'],
    },
    software: {
      gradient: 'from-[#FAF5F0] via-[#F2E5DC] to-[#E6BE85]/20',
      badge: '6 Core Suites',
      highlights: ['Google Workspace', 'Spreadsheets', 'Troubleshooting'],
    },
    competencies: {
      gradient: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
      badge: '7 Work Ethics',
      highlights: ['Attention to Detail', 'Multitasking', 'Independence'],
    },
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'admin':
        return <FolderGit2 className="w-5 h-5 text-[#C27A52]" />;
      case 'communication':
        return <MessageSquare className="w-5 h-5 text-[#C27A52]" />;
      case 'software':
        return <Laptop className="w-5 h-5 text-[#C27A52]" />;
      case 'competencies':
        return <Sparkles className="w-5 h-5 text-[#C27A52]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C27A52]" />;
    }
  };

  const filteredCategories = skillCategories.map((group) => {
    const matchesSearch = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      filteredSkills: matchesSearch,
    };
  }).filter((group) => {
    if (selectedCategory !== 'All' && group.id !== selectedCategory) return false;
    return group.filteredSkills.length > 0;
  });

  return (
    <section id="skills" className="pt-14 sm:pt-20 pb-0 bg-[#F7EFE9] relative overflow-hidden">
      
      {/* Ambient Organic Curve Accents */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-white/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#E6BE85]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 relative z-10">
        
        {/* Section Header */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C27A52] uppercase mb-2">
            Professional Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#2D2522] tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-16 h-[2px] bg-[#C27A52]/40 mx-auto mt-3" />
          <p className="mt-3 text-xs sm:text-sm text-[#5A4A42] leading-relaxed font-light">
            Core competencies refined through 5 years of customer service, technical support, spreadsheet management, and administrative coordination.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto mb-12 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C27A52]" />
            <input
              type="text"
              placeholder="SEARCH COMPETENCY OR TOOL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white text-[#2D2522] placeholder-[#7A6A62] border border-[#E8D9CD] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C27A52] tracking-wider uppercase shadow-2xs transition-shadow"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categoryFilters.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-[10px] tracking-[0.15em] uppercase font-bold rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C27A52] text-white shadow-xs'
                      : 'bg-[#F2E5DC] text-[#4A3B32] hover:bg-[#EBD9CC]'
                  }`}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* 4 Grouped Skill Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, idx) => {
              const meta = categoryDesignMeta[group.id] || {
                gradient: 'from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC]',
                badge: 'Competencies',
                highlights: ['Professional', 'Verified'],
              };

              return (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  data-reveal-delay={(idx % 2) * 150}
                  whileHover={{ y: -6, boxShadow: '0 16px 24px -6px rgba(194, 122, 82, 0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="reveal-card p-6 sm:p-7 rounded-3xl bg-white border border-[#E8D9CD] shadow-sm flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Vector Category Design Banner */}
                    <div className={`relative aspect-[16/6] w-full overflow-hidden rounded-2xl mb-5 bg-gradient-to-r ${meta.gradient} border border-[#E8D9CD] p-4 flex items-center justify-between shadow-2xs`}>
                      {/* Decorative SVG grid / curves */}
                      <svg className="absolute -right-4 -bottom-6 w-32 h-32 text-[#C27A52]/10 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="24" />
                      </svg>

                      <div className="relative z-10 flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-[#E8D9CD] flex items-center justify-center text-[#C27A52]">
                          {getCategoryIcon(group.id)}
                        </div>
                        <div>
                          <span className="text-[9px] font-bold tracking-widest uppercase text-[#C27A52] block">
                            Stack Domain
                          </span>
                          <h4 className="text-sm sm:text-base font-serif italic font-bold text-[#2D2522]">
                            {group.categoryName}
                          </h4>
                        </div>
                      </div>

                      <div className="relative z-10 hidden sm:flex flex-col items-end">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#2D2522] text-[9px] font-bold tracking-wider uppercase border border-[#E8D9CD]">
                          {meta.badge}
                        </span>
                        <div className="flex gap-1 mt-1.5">
                          {meta.highlights.slice(0, 2).map((hl, hIdx) => (
                            <span key={hIdx} className="text-[9px] text-[#5A4A42] bg-[#FAF5F0]/80 px-1.5 py-0.5 rounded font-light">
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F2E5DC]">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C27A52]">
                        {group.count || `${group.filteredSkills.length} competencies`}
                      </span>
                      <span className="text-[10px] text-[#8A7A72] uppercase tracking-widest font-medium">
                        Verified Capability
                      </span>
                    </div>

                    <p className="text-xs text-[#5A4A42] mb-5 leading-relaxed font-light">
                      {group.description}
                    </p>

                    {/* Exact Competency Items with Micro-Hovers */}
                    <div className="flex flex-wrap gap-2">
                      {group.filteredSkills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          whileHover={{ scale: 1.04, y: -1 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-light bg-[#F7EFE9] text-[#2D2522] border border-[#E8D9CD] hover:border-[#C27A52] transition-colors cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C27A52] shrink-0" />
                          <span>{skill}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Organic Wave flowing into Light Beige Education Section */}
      <WavyDivider fillColor="#FAF5F0" variant="organic-swell" />
    </section>
  );
};
