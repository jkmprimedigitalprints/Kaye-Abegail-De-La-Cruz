import React, { useState } from 'react';
import { 
  FolderGit2, 
  MessageSquare, 
  Laptop, 
  Sparkles, 
  Search,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillGroups } = PORTFOLIO_DATA;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // The 5 requested category buttons
  const categoryFilters = [
    { id: 'All', label: 'All Categories' },
    { id: 'Administrative and Organization', label: 'Administrative' },
    { id: 'Communication and Customer Care', label: 'Communication' },
    { id: 'Software and Tools', label: 'Software' },
    { id: 'Core Competencies', label: 'Core' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Administrative and Organization':
        return <FolderGit2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Communication and Customer Care':
        return <MessageSquare className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Software and Tools':
        return <Laptop className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Core Competencies':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <Tag className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredGroups = skillGroups.map((group) => {
    const matchesSearch = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      filteredSkills: matchesSearch,
    };
  }).filter((group) => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) return false;
    return group.filteredSkills.length > 0;
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Abilities & Tool Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Tools
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Grouped competencies developed through 4+ years of customer support, digital technical troubleshooting, and administrative execution.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills, software, or competencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-200 shadow-2xs"
            />
          </div>
        </div>

        {/* 5 CATEGORY TABS - PERFECTLY ALIGNED IN ONE LINE */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-x-auto max-w-full shadow-2xs">
            <div className="flex items-center gap-1 sm:gap-1.5">
              {categoryFilters.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`h-9 px-3.5 sm:px-5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 flex items-center justify-center ${
                      isActive
                        ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-xs border border-slate-200/80 dark:border-slate-700/60">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {group.filteredSkills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skills Tags List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.filteredSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs hover:border-teal-500/60 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
