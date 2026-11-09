import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  X, 
  Check, 
  Mail, 
  Table, 
  Calendar, 
  Globe, 
  Clock, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, WorkSampleItem } from '../data/portfolioData';
import { WavyDivider } from './WavyDivider';

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

  if (!showWorkSamples || !workSamples || workSamples.length === 0) {
    return null;
  }

  // Include 5 items for the seamless 5-column Instagram-style strip
  const stripItems: WorkSampleItem[] = [
    {
      id: 'customer-support-email-templates',
      title: 'Customer Support Email Templates',
      description: 'Professional replies for inquiries, complaints, and follow-ups.',
      tag: 'Writing',
      imageUrl: '',
      altText: 'Customer Support Email Templates with professional customer service drafting',
      context: 'Created structured, polite response drafts for handling three of the most common customer interactions: initial product inquiries, complaint de-escalation with escalation notice, and courteous post-resolution follow-ups.',
      deliverables: [
        '1. Reply to an inquiry (shipping options & turnaround times)',
        '2. Reply to a complaint (acknowledging frustration & clear 24-hr resolution guarantee)',
        '3. Courteous follow-up (ensuring customer satisfaction)'
      ],
      toolsUsed: ['Email Drafting', 'Customer Service Etiquette', 'De-escalation']
    },
    {
      id: 'spreadsheet-cleanup',
      title: 'Spreadsheet Cleanup',
      description: 'Messy data turned into a clean, consistent, sorted sheet.',
      tag: 'Data Entry',
      imageUrl: '',
      altText: 'Spreadsheet Cleanup showing duplicate removal, formatting standardization, and sorted data',
      context: 'Normalized raw data containing inconsistent name casing, mixed date notations, and duplicate entries into a clean, deduplicated, and sorted spreadsheet.',
      deliverables: [
        'Removed redundant duplicate records',
        'Standardized names into Proper Title Case',
        'Converted mixed dates into uniform YYYY-MM-DD format',
        'Clean, sorted alphabetical output ready for CRM upload'
      ],
      toolsUsed: ['Google Sheets', 'Data Deduplication', 'Formatting Standards']
    },
    {
      id: 'weekly-schedule-plan',
      title: 'Weekly Schedule Plan',
      description: 'An organized weekly calendar for a busy business owner.',
      tag: 'Scheduling',
      imageUrl: '',
      altText: 'Weekly Schedule Plan with color-coded calendar and administrative time blocking',
      context: 'Designed an intuitive, color-coded weekly schedule balancing high-priority client meetings, deep focus time for reports, and recurring admin routines.',
      deliverables: [
        'Color-coded activity blocks (Client Meetings, Focus Work, Admin Tasks)',
        'Daily morning inbox & email triage buffer',
        'Strategic focus work sessions protected from interruption',
        'Friday weekly review and planning for the upcoming week'
      ],
      toolsUsed: ['Calendar Management', 'Time Blocking', 'Executive Planning']
    },
    {
      id: 'basic-website-creation',
      title: 'Basic Website Creation',
      description: 'A clean, modern, and mobile-responsive personal website layout.',
      tag: 'Web Creation',
      imageUrl: '',
      altText: 'Modern responsive website mockup on screen with clean typography and balanced layout',
      context: 'Developed a responsive, mobile-first website structure designed for clear visual hierarchy, smooth navigation, working contact integration, and cross-device accessibility.',
      deliverables: [
        'Clean, modern layout with balanced white space',
        'Fully responsive design for mobile, tablet, and desktop',
        'Functional contact form and social link integration',
        'Fast-loading performance with modern web standards'
      ],
      toolsUsed: ['React', 'Tailwind CSS', 'Responsive Web Design'],
      liveUrl: 'https://kayeabegaildelacruz.vercel.app/'
    },
    {
      id: 'calendar-triage',
      title: 'Executive Daily Planning',
      description: 'Structured time blocking and daily meeting triage for busy founders.',
      tag: 'Scheduling',
      imageUrl: '',
      altText: 'Daily planning notebook and schedule organization notes',
      context: 'Demonstration of daily schedule buffers, priority blocking, and routine admin workflow preparation.',
      deliverables: [
        'Time-blocked daily executive calendar',
        'Meeting buffer management to prevent burnout',
        'Weekly planning review'
      ],
      toolsUsed: ['Google Calendar', 'Time Blocking', 'Executive Support']
    }
  ];

  // Render pure vector graphic design preview for the strip cards
  const renderThumbnailDesign = (id: string) => {
    switch (id) {
      case 'customer-support-email-templates':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#FAF5F0] via-[#FFE8E3] to-[#F7EFE9] p-3.5 flex flex-col justify-between text-[#2D2522]">
            <div className="flex items-center justify-between border-b border-[#E8D9CD]/80 pb-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#C27A52] uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Inbox SOP</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-1.5 py-1">
              <div className="text-[10px] font-serif italic text-[#2D2522] font-semibold truncate">
                Re: Inquiry #204 [Resolved]
              </div>
              <div className="h-1.5 w-4/5 bg-[#C27A52]/20 rounded-full" />
              <div className="h-1.5 w-full bg-[#C27A52]/10 rounded-full" />
              <div className="h-1.5 w-3/5 bg-[#C27A52]/15 rounded-full" />
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#E8D9CD]/60 text-[9px] text-[#5A4A42]">
              <span className="font-semibold text-emerald-700">✓ De-escalated</span>
              <span className="text-[#8A7A72]">Drafted</span>
            </div>
          </div>
        );

      case 'spreadsheet-cleanup':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#FAF5F0] via-[#F2E5DC] to-[#E6BE85]/20 p-3.5 flex flex-col justify-between text-[#2D2522]">
            <div className="flex items-center justify-between border-b border-[#E8D9CD]/80 pb-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#C27A52] uppercase tracking-wider">
                <Table className="w-3.5 h-3.5" />
                <span>Sheets Tidy</span>
              </span>
              <span className="px-1.5 py-0.5 rounded bg-white text-[8px] font-bold text-emerald-800 border border-emerald-300">
                CLEAN
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1 py-1 text-[8px]">
              <div className="bg-[#C27A52]/15 p-1 rounded font-bold text-center">Name</div>
              <div className="bg-[#C27A52]/15 p-1 rounded font-bold text-center">Date</div>
              <div className="bg-[#C27A52]/15 p-1 rounded font-bold text-center">Status</div>
              <div className="bg-white/80 p-1 rounded truncate">Sarah M.</div>
              <div className="bg-white/80 p-1 rounded truncate">2026-03-01</div>
              <div className="bg-emerald-50 p-1 rounded text-emerald-700 text-center font-bold">✓ Valid</div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#E8D9CD]/60 text-[9px] text-[#5A4A42]">
              <span className="font-medium text-[#C27A52]">0 Duplicates</span>
              <span className="text-[#8A7A72]">Proper Case</span>
            </div>
          </div>
        );

      case 'weekly-schedule-plan':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#FAF5F0] via-[#F7EFE9] to-[#EBD9CC] p-3.5 flex flex-col justify-between text-[#2D2522]">
            <div className="flex items-center justify-between border-b border-[#E8D9CD]/80 pb-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#C27A52] uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>Time Block</span>
              </span>
              <span className="text-[9px] text-[#C27A52] font-bold">MON-FRI</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="flex items-center gap-1.5 bg-[#C27A52] text-white px-2 py-1 rounded text-[8px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6BE85]" />
                <span className="truncate">Client Sync (EST/PST)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#E6BE85] text-[#2D2522] px-2 py-1 rounded text-[8px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C27A52]" />
                <span className="truncate">Deep Focus • Reports</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#E8D9CD]/60 text-[9px] text-[#5A4A42]">
              <span className="font-semibold text-emerald-700">No Clashes</span>
              <span className="text-[#8A7A72]">Buffer OK</span>
            </div>
          </div>
        );

      case 'basic-website-creation':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#2D2522] to-[#1E1715] p-3.5 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between border-b border-white/20 pb-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-rose-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[8px] text-white/70 font-mono tracking-tight">kaye-va.dev</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="h-4 bg-[#C27A52] rounded flex items-center px-1.5 text-[8px] font-serif italic font-bold">
                Responsive UI
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-3 bg-white/20 rounded" />
                <div className="h-3 bg-white/20 rounded" />
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/15 text-[8px] text-[#E6BE85]">
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>Modern Web</span>
              </span>
              <span>100% Fluid</span>
            </div>
          </div>
        );

      case 'calendar-triage':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#FAF5F0] via-[#F2E5DC] to-[#E6BE85]/30 p-3.5 flex flex-col justify-between text-[#2D2522]">
            <div className="flex items-center justify-between border-b border-[#E8D9CD]/80 pb-2">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#C27A52] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Daily Plan</span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#E6BE85]" />
            </div>
            <div className="space-y-1.5 py-1 text-[8px]">
              <div className="flex items-center justify-between bg-white/90 p-1 rounded border border-[#E8D9CD]/60 font-semibold">
                <span>08:30 AM</span>
                <span className="text-[#C27A52]">Inbox Zero Triage</span>
              </div>
              <div className="flex items-center justify-between bg-white/90 p-1 rounded border border-[#E8D9CD]/60 font-semibold">
                <span>10:00 AM</span>
                <span className="text-[#C27A52]">Executive Standup</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-[#E8D9CD]/60 text-[9px] text-[#5A4A42]">
              <span className="font-semibold text-emerald-700">✓ Optimized</span>
              <span className="text-[#8A7A72]">Day Buffer</span>
            </div>
          </div>
        );
    }
  };

  // Render rich interactive document inside the popup modal
  const renderModalContent = (sample: WorkSampleItem) => {
    switch (sample.id) {
      case 'customer-support-email-templates':
        return (
          <div className="w-full space-y-4 text-[#2D2522]">
            <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] space-y-2">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E8D9CD]">
                <span className="font-bold text-[#C27A52] uppercase tracking-wider">Draft 1: Product Inquiry Response</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Standard SOP</span>
              </div>
              <p className="text-xs text-[#5A4A42] leading-relaxed font-light">
                “Hello [Customer Name], thank you for reaching out to us! We would love to help. We currently offer two shipping methods: Standard (3–5 business days) and Expedited (1–2 business days with priority dispatch). All orders include tracking details sent directly to your inbox upon carrier pickup. Please let me know if you’d like me to reserve a slot for you!”
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8D9CD] space-y-2">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E8D9CD]">
                <span className="font-bold text-[#C27A52] uppercase tracking-wider">Draft 2: Complaint De-escalation</span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">High Priority</span>
              </div>
              <p className="text-xs text-[#5A4A42] leading-relaxed font-light">
                “Dear [Customer Name], I completely understand your frustration with this delay, and I sincerely apologize for the inconvenience it has caused. I have personally contacted our logistics warehouse to expedite your replacement and flagged your account with our senior supervisor. I will follow up with you directly within 24 hours with an updated confirmation number.”
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] space-y-2">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E8D9CD]">
                <span className="font-bold text-[#C27A52] uppercase tracking-wider">Draft 3: Courteous Follow-up</span>
                <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-bold">Client Care</span>
              </div>
              <p className="text-xs text-[#5A4A42] leading-relaxed font-light">
                “Hi [Customer Name], I am following up on our conversation from yesterday to verify if your issue has been completely resolved. Your satisfaction is our top priority—if there is anything else you need assistance with, please feel free to reply directly to this email.”
              </p>
            </div>
          </div>
        );

      case 'spreadsheet-cleanup':
        return (
          <div className="w-full space-y-4 text-[#2D2522]">
            <div className="overflow-x-auto rounded-2xl border border-[#E8D9CD] bg-white shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7EFE9] text-[#2D2522] uppercase tracking-wider text-[10px] font-bold border-b border-[#E8D9CD]">
                  <tr>
                    <th className="py-2.5 px-3">Record ID</th>
                    <th className="py-2.5 px-3">Standardized Name</th>
                    <th className="py-2.5 px-3">Date (YYYY-MM-DD)</th>
                    <th className="py-2.5 px-3">Cleanup Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E5DC] text-[11px] font-light">
                  <tr className="hover:bg-[#FAF5F0]">
                    <td className="py-2 px-3 font-mono font-bold text-[#C27A52]">#REC-101</td>
                    <td className="py-2 px-3 font-medium text-[#2D2522]">Alexander Hayes</td>
                    <td className="py-2 px-3 font-mono">2026-01-15</td>
                    <td className="py-2 px-3 text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Proper Case
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF5F0]">
                    <td className="py-2 px-3 font-mono font-bold text-[#C27A52]">#REC-102</td>
                    <td className="py-2 px-3 font-medium text-[#2D2522]">Beatrice Vance</td>
                    <td className="py-2 px-3 font-mono">2026-01-18</td>
                    <td className="py-2 px-3 text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Date Normalized
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF5F0]">
                    <td className="py-2 px-3 font-mono font-bold text-[#C27A52]">#REC-103</td>
                    <td className="py-2 px-3 font-medium text-[#2D2522]">Carlos Rivera</td>
                    <td className="py-2 px-3 font-mono">2026-02-04</td>
                    <td className="py-2 px-3 text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Duplicate Merged
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FAF5F0]">
                    <td className="py-2 px-3 font-mono font-bold text-[#C27A52]">#REC-104</td>
                    <td className="py-2 px-3 font-medium text-[#2D2522]">Diana Jenkins</td>
                    <td className="py-2 px-3 font-mono">2026-02-12</td>
                    <td className="py-2 px-3 text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Valid
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#E8D9CD]">
                <span className="text-[10px] uppercase font-bold text-[#C27A52] block">Duplicates</span>
                <span className="text-base font-bold text-[#2D2522]">100% Removed</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#E8D9CD]">
                <span className="text-[10px] uppercase font-bold text-[#C27A52] block">Date Formats</span>
                <span className="text-base font-bold text-[#2D2522]">ISO Standard</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#E8D9CD]">
                <span className="text-[10px] uppercase font-bold text-[#C27A52] block">CRM Ready</span>
                <span className="text-base font-bold text-emerald-700">Audit Passed</span>
              </div>
            </div>
          </div>
        );

      case 'weekly-schedule-plan':
        return (
          <div className="w-full space-y-4 text-[#2D2522]">
            <div className="p-4 rounded-2xl bg-white border border-[#E8D9CD] shadow-xs">
              <div className="grid grid-cols-5 gap-2 text-center text-xs mb-3 font-bold border-b border-[#E8D9CD] pb-2 text-[#C27A52]">
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
              </div>
              <div className="grid grid-cols-5 gap-2 text-[10px]">
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-[#C27A52] text-white font-semibold">08:30 Inbox Zero</div>
                  <div className="p-1.5 rounded bg-[#E6BE85] text-[#2D2522] font-semibold">10:00 Team Sync</div>
                </div>
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-[#E6BE85] text-[#2D2522] font-semibold">09:00 Client Call</div>
                  <div className="p-1.5 rounded bg-[#FAF5F0] border border-[#E8D9CD] font-medium">13:00 Deep Focus</div>
                </div>
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-[#C27A52] text-white font-semibold">08:30 Triage</div>
                  <div className="p-1.5 rounded bg-[#E6BE85] text-[#2D2522] font-semibold">11:00 Lead Sync</div>
                </div>
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-[#FAF5F0] border border-[#E8D9CD] font-medium">10:00 Data Audit</div>
                  <div className="p-1.5 rounded bg-[#E6BE85] text-[#2D2522] font-semibold">14:00 Vendor Sync</div>
                </div>
                <div className="space-y-1.5">
                  <div className="p-1.5 rounded bg-[#C27A52] text-white font-semibold">09:00 Weekly Review</div>
                  <div className="p-1.5 rounded bg-emerald-100 text-emerald-800 font-bold">15:00 Prep Next Wk</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between p-3 rounded-xl bg-[#FAF5F0] border border-[#E8D9CD] text-xs">
              <span className="font-semibold text-[#2D2522]">Key Architecture:</span>
              <span className="text-[#C27A52] font-medium">30-min buffer between calls</span>
              <span className="text-[#5A4A42]">US/UK/AU timezone conversion</span>
              <span className="text-emerald-700 font-semibold">Zero overlap</span>
            </div>
          </div>
        );

      case 'basic-website-creation':
        return (
          <div className="w-full space-y-4 text-[#2D2522]">
            <div className="rounded-2xl border border-[#E8D9CD] bg-[#2D2522] text-white p-4 shadow-lg space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-white/70">https://kayeabegaildelacruz.vercel.app</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">LIVE ONLINE</span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs space-y-2 text-center">
                <h4 className="text-lg font-serif italic text-white font-bold">
                  Kaye Abegail De La Cruz — Portfolio Layout
                </h4>
                <p className="text-xs text-white/80 max-w-md mx-auto font-light">
                  Clean, responsive personal branding website with fixed sticky navigation, organic terracotta wave styling, and interactive deliverables.
                </p>
                <div className="pt-2 flex justify-center">
                  <a
                    href="https://kayeabegaildelacruz.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E6BE85] text-[#2D2522] text-xs font-bold tracking-wider uppercase hover:bg-[#D4A968] transition-colors"
                  >
                    <span>Visit Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'calendar-triage':
      default:
        return (
          <div className="w-full space-y-4 text-[#2D2522]">
            <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#E8D9CD] space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E8D9CD]">
                <span className="font-bold text-[#C27A52] uppercase tracking-wider">Executive Daily Flow Blueprint</span>
                <span className="text-[10px] font-semibold text-[#5A4A42]">8-Hour Optimization</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-3 p-2 rounded-lg bg-white border border-[#E8D9CD]">
                  <span className="font-mono font-bold text-[#C27A52] shrink-0">08:00 - 09:00</span>
                  <div>
                    <strong className="block font-semibold text-[#2D2522]">Morning Inbox & Priority Triage</strong>
                    <span className="text-[11px] text-[#5A4A42] font-light">Categorize incoming emails, flag VIP clients, and draft routine responses.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-white border border-[#E8D9CD]">
                  <span className="font-mono font-bold text-[#C27A52] shrink-0">10:00 - 12:00</span>
                  <div>
                    <strong className="block font-semibold text-[#2D2522]">Strategic Meeting Window</strong>
                    <span className="text-[11px] text-[#5A4A42] font-light">Client consultations, discovery calls, and team status check-ins with 15-min buffers.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-white border border-[#E8D9CD]">
                  <span className="font-mono font-bold text-[#C27A52] shrink-0">13:30 - 15:30</span>
                  <div>
                    <strong className="block font-semibold text-[#2D2522]">Protected Deep Work Block</strong>
                    <span className="text-[11px] text-[#5A4A42] font-light">Spreadsheet cleanup, SOP documentation, and report generation without interruptions.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-white border border-[#E8D9CD]">
                  <span className="font-mono font-bold text-[#C27A52] shrink-0">16:30 - 17:00</span>
                  <div>
                    <strong className="block font-semibold text-[#2D2522]">End-of-Day Review & Tomorrow Planning</strong>
                    <span className="text-[11px] text-[#5A4A42] font-light">Update task board, confirm tomorrow's calendar appointments, and send daily wrap-up report.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="relative bg-[#C27A52] text-white pt-10 sm:pt-16 pb-0 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        
        {/* Section Header styled as "MY INSTAGRAM" from reference */}
        <div
          data-reveal="fade-in"
          className="reveal-on-scroll text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-[#E6BE85]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#E6BE85] uppercase">
              Portfolio & Deliverables
            </span>
            <div className="w-8 h-[1px] bg-[#E6BE85]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight">
            Work Samples & Deliverables
          </h2>
          <p className="mt-2 text-xs text-white/85 max-w-lg mx-auto font-light">
            Interactive samples of administrative, customer care, and technical support deliverables. Click any card to inspect full details.
          </p>
        </div>

        {/* Instagram-Style Pure Design Deliverables Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {stripItems.slice(0, 5).map((item, idx) => (
            <motion.div
              key={item.id}
              data-reveal-delay={idx * 80}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedSample(item)}
              className="reveal-card relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl border-2 border-white bg-white select-none"
            >
              {/* Bespoke Vector Graphic Thumbnail */}
              {renderThumbnailDesign(item.id)}
              
              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-[#C27A52]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <span className="px-2 py-0.5 rounded-md bg-[#E6BE85] text-[#2D2522] text-[9px] font-bold uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <p className="text-xs font-serif italic text-white line-clamp-2">
                  {item.title}
                </p>
                <span className="mt-2 text-[10px] uppercase tracking-widest text-[#FAF5F0] underline flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>Inspect Deliverable</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Deliverable Preview with Dribbble-style Spring Popup & Backdrop Blur */}
      <AnimatePresence>
        {selectedSample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedSample(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-[#E8D9CD] flex flex-col overflow-hidden text-[#2D2522]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#F2E5DC] bg-[#FAF5F0]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[10px] tracking-wider uppercase font-bold rounded-md bg-[#E6BE85] text-[#2D2522]">
                    {selectedSample.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif italic font-bold text-[#2D2522]">
                    {selectedSample.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSample(null)}
                  className="p-1.5 text-[#2D2522] hover:text-[#C27A52] rounded-md hover:bg-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Pure Vector Document Viewport (No Raster Images) */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-white">
                {renderModalContent(selectedSample)}
              </div>

              {/* Modal Footer Description */}
              <div className="p-5 px-6 border-t border-[#F2E5DC] bg-[#FAF5F0] space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-serif italic font-bold text-[#2D2522]">
                      Deliverable Details
                    </h4>
                    <p className="text-xs text-[#5A4A42] mt-0.5 font-light">
                      {selectedSample.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedSample(null)}
                    className="px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase rounded-md bg-[#C27A52] text-white hover:bg-[#A9623D] transition-colors cursor-pointer shrink-0"
                  >
                    Close Preview
                  </motion.button>
                </div>

                {selectedSample.deliverables && (
                  <div className="pt-2 border-t border-[#E8D9CD]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C27A52] block mb-1">
                      Key Outcomes
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2D2522]">
                      {selectedSample.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 font-light">
                          <Check className="w-3.5 h-3.5 text-[#C27A52] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Organic Wave flowing into Light Beige Contact Section */}
      <WavyDivider fillColor="#FAF5F0" variant="hero-wave" />
    </section>
  );
};
