/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Single source of truth for Kaye Abegail De La Cruz's Virtual Assistant Portfolio.
 * 
 * Rules:
 * - Uses ONLY real, verified facts provided by Kaye.
 * - No invented metrics, QA percentages, fictional clients, or fake certifications.
 * - Accurately reflects 5 years of BPO experience (Customer Service, Sales, Technical Support, Collections).
 */

export interface WorkSampleItem {
  id: string;
  title: string;
  description: string;
  tag: 'Writing' | 'Data Entry' | 'Scheduling' | 'Web Creation';
  imageUrl: string;
  altText: string;
  context?: string;
  deliverables?: string[];
  toolsUsed?: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  deliverables: string[];
  bestFor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  skillsGained: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const PORTFOLIO_DATA = {
  // 1. Personal & Contact Information
  personal: {
    fullName: "Kaye Abegail De La Cruz",
    shortName: "Kaye",
    title: "General Virtual Assistant | Customer & Tech Support Specialist",
    tagline: "Reliable, detail-oriented, and calm under pressure",
    location: "Taguig, Metro Manila, Philippines",
    experienceSummary: "5 years of proven BPO experience in Customer Service, Technical Support, Sales, and Collections (Accenture, TELUS International, Alorica), now providing high-touch Virtual Assistant and Administrative Support to busy business owners and remote teams.",
    bio: "Dedicated and detail-oriented professional with solid customer service and technical support experience, now offering virtual assistant and administrative support. Highly organized, computer literate, and adaptable, with a strong background in written and verbal communication, accurate documentation, and methodical problem-solving. Able to multitask under pressure and work independently or with a team in remote environments.",
    email: "jobaye2024@gmail.com",
    phone: "+63 9687605420",
    avatarUrl: "/kaye-photo.jpg",
    resumeUrl: "/Kaye_Abegail_De_La_Cruz_CV.pdf",
    calendlyUrl: "", // If empty, the 'Book a Call' button stays cleanly hidden
    rolesForTyping: [
      "General Virtual Assistant",
      "Administrative Assistant",
      "Customer Support Specialist",
      "Technical Support Specialist",
      "Data Entry & Organizer"
    ],
    languages: [
      { name: "English", level: "Fluent (Written & Verbal)" },
      { name: "Tagalog", level: "Native" }
    ],
    availability: {
      badge: "Available for Immediate Hire",
      statusText: "Ready to start immediately",
      shift: "Any Shift (Day, Mid, or Night)",
      type: "Full-time or Part-time",
      timezones: "US (EST/CST/PST), UK (GMT), and Australian (AEST) hours",
      noticePeriod: "Immediate"
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kaye-abegail-de-la-cruz-64ba67446/",
      facebook: "https://www.facebook.com/kayeehdelacruz",
      instagram: "https://www.instagram.com/kaedelacruz/"
    }
  },

  // 2. Real Highlight Statistics (No fake numbers)
  stats: [
    {
      value: "5 Years",
      label: "BPO Experience",
      subtext: "Customer Service, Tech Support, Sales & Collections"
    },
    {
      value: "3 Top Firms",
      label: "Global BPO Employers",
      subtext: "Accenture, TELUS International & Alorica"
    },
    {
      value: "100%",
      label: "English Fluency",
      subtext: "Professional written & verbal correspondence"
    },
    {
      value: "24/7",
      label: "Shift Flexibility",
      subtext: "US, UK, and Australian timezone alignment"
    }
  ],

  // 3. Core Personal Strengths (Highlighting actual abilities)
  strengths: [
    {
      title: "Clear Communication",
      description: "Polite, empathetic, and professional verbal and written correspondence with clients and end customers.",
      icon: "MessageSquare"
    },
    {
      title: "Methodical Problem-Solving",
      description: "Root-cause troubleshooting, following SOPs carefully, and escalating complex inquiries with thorough context.",
      icon: "HelpCircle"
    },
    {
      title: "Meticulous Attention to Detail",
      description: "Clean data entry, spreadsheet organization, proofreading, and error-free ticket documentation.",
      icon: "CheckCircle2"
    },
    {
      title: "Remote Adaptability & Eagerness to Learn",
      description: "Quickly learns proprietary software, CRM workflows, and team communication guidelines without micro-management.",
      icon: "Sparkles"
    }
  ],

  // 4. Actual Entry-Level VA Services (7 Services exactly as requested)
  services: [
    {
      id: "general-va",
      title: "General Virtual Assistance",
      shortDesc: "End-to-end everyday administrative execution to keep your business running smoothly.",
      description: "Reliable, autonomous day-to-day assistance for busy founders and executives. From managing tasks and routine correspondence to organizing daily action items.",
      iconName: "Briefcase",
      deliverables: [
        "Daily task prioritization and follow-ups",
        "Internet research and competitor data gathering",
        "Document proofreading and formatting",
        "Team coordination via Slack, Teams, or email"
      ],
      bestFor: "Entrepreneurs and solo founders who need a trustworthy right-hand assistant."
    },
    {
      id: "data-entry",
      title: "Data Entry & Cleanup",
      shortDesc: "Turning messy, disorganized records into accurate, structured, and sorted spreadsheets.",
      description: "High-accuracy data entry, spreadsheet deduplication, standardized date formatting, and database maintenance using Google Sheets and Microsoft Excel.",
      iconName: "Table",
      deliverables: [
        "Spreadsheet cleanup, deduplication, and standardization",
        "Accurate record updates in CRM and internal databases",
        "Data validation, formatting, and categorization",
        "Regular data audits and hygiene checks"
      ],
      bestFor: "Teams with scattered customer lists, inventory sheets, or raw lead data."
    },
    {
      id: "email-management",
      title: "Email Management",
      shortDesc: "Inbox Zero maintenance, sorting high-priority inquiries, and professional customer drafts.",
      description: "Keep your inbox organized and never miss an important message. I filter spam, label priority emails, draft courteous replies, and handle customer follow-ups.",
      iconName: "Mail",
      deliverables: [
        "Inbox triage and color-coded priority labeling",
        "Professional email drafting with proper etiquette",
        "Routine customer response templates and follow-ups",
        "Spam reduction and archive organization"
      ],
      bestFor: "Business owners overwhelmed by hundreds of unread emails daily."
    },
    {
      id: "calendar-management",
      title: "Calendar Management",
      shortDesc: "Conflict-free schedule coordination across conflicting global time zones.",
      description: "Structured calendar management ensuring all client calls, internal meetings, and personal buffers are balanced without overlapping appointments.",
      iconName: "Calendar",
      deliverables: [
        "Time zone conversion for US, UK, and AU calls",
        "Scheduling client appointments and sending calendar invites",
        "Setting up preparation buffers between back-to-back meetings",
        "Reminding you of upcoming priority deadlines"
      ],
      bestFor: "Executives who need a smooth, clash-free daily calendar."
    },
    {
      id: "appointment-scheduling",
      title: "Appointment Scheduling",
      shortDesc: "Setting up discovery calls, client consultations, and booking automation.",
      description: "Managing scheduling links (Calendly, Acuity), emailing meeting options to prospects, and confirming attendance to minimize no-shows.",
      iconName: "Clock",
      deliverables: [
        "Calendly / booking link coordination",
        "Pre-meeting confirmation emails and reminders",
        "Rescheduling and calendar adjustments",
        "Collecting intake forms prior to scheduled calls"
      ],
      bestFor: "Consultants, agencies, and service providers booking sales calls."
    },
    {
      id: "document-organization",
      title: "Document Organization",
      shortDesc: "Structured Google Drive folder management and clean digital file filing.",
      description: "Eliminate digital clutter. I build logical folder hierarchies, establish consistent naming conventions, and make finding contracts, assets, and SOPs effortless.",
      iconName: "FolderTree",
      deliverables: [
        "Google Drive & OneDrive folder restructuring",
        "Standardized file naming conventions (YYYY-MM-DD)",
        "Archiving outdated files and managing access permissions",
        "Centralizing SOPs and shared team resources"
      ],
      bestFor: "Growing teams whose shared cloud storage has become cluttered and hard to navigate."
    },
    {
      id: "website-creation",
      title: "Basic Website Creation",
      shortDesc: "Clean, modern, and mobile-friendly websites and landing pages for your brand.",
      description: "Building responsive, easy-to-navigate web pages with clear messaging, functional contact forms, and mobile optimization using modern web tools.",
      iconName: "Globe",
      deliverables: [
        "Clean, modern single-page website layouts",
        "Mobile-responsive testing across phones, tablets & desktops",
        "Working contact form and social link integration",
        "Content structuring and visual asset arrangement"
      ],
      bestFor: "Small businesses and professionals who need a crisp, credible online presence."
    }
  ] as ServiceItem[],

  // 5. Skills & Tools (Exact categories and competencies requested by user)
  skillCategories: [
    {
      id: "admin",
      categoryName: "Administrative and Organization",
      count: "8 competencies",
      description: "Core administrative workflows that keep day-to-day operations structured and dependable.",
      skills: [
        "Administrative Support",
        "Data Entry and Cleanup",
        "File and Document Organization",
        "Google Drive Management",
        "Calendar Coordination",
        "Task Follow-up",
        "Internet Research",
        "Document Formatting"
      ]
    },
    {
      id: "communication",
      categoryName: "Communication and Customer Care",
      count: "5 competencies",
      description: "Omnichannel customer care, written de-escalation, and professional email correspondence.",
      skills: [
        "Customer Service and Client Communication",
        "Written and Verbal Communication",
        "Inquiry and Concern Resolution",
        "Accurate Ticket and Call Documentation",
        "Professional Email Etiquette"
      ]
    },
    {
      id: "software",
      categoryName: "Software and Tools",
      count: "6 competencies",
      description: "Everyday cloud applications, office suites, and digital organization tools.",
      skills: [
        "Google Docs",
        "Google Sheets (spreadsheet cleanup)",
        "Google Drive",
        "Email Communication and Drafting",
        "Technical Troubleshooting",
        "Digital File Filing"
      ]
    },
    {
      id: "competencies",
      categoryName: "Core Competencies",
      count: "7 competencies",
      description: "Essential professional attributes ensuring reliable execution under pressure.",
      skills: [
        "Attention to Detail",
        "Multitasking",
        "Time Management",
        "Working Under Pressure",
        "Working Independently",
        "Teamwork and Collaboration",
        "Following Procedures"
      ]
    }
  ],

  // 6. Portfolio / Project Showcase (4 Projects with User's 3 Photos + 1 Web Creation Card)
  workSamples: [
    {
      id: "customer-support-email-templates",
      title: "Customer Support Email Templates",
      description: "Professional replies for inquiries, complaints, and follow-ups.",
      tag: "Writing",
      imageUrl: "/images/work-sample-email-templates.jpg",
      altText: "Customer Support Email Templates with professional replies for inquiries, complaints, and follow-ups",
      context: "Created structured, polite response drafts for handling three of the most common customer interactions: initial product inquiries, complaint de-escalation with escalation notice, and courteous post-resolution follow-ups.",
      deliverables: [
        "1. Reply to an inquiry (shipping options & turnaround times)",
        "2. Reply to a complaint (acknowledging frustration & clear 24-hr resolution guarantee)",
        "3. Courteous follow-up (ensuring customer satisfaction)"
      ],
      toolsUsed: ["Email Drafting", "Customer Service Etiquette", "De-escalation"]
    },
    {
      id: "spreadsheet-cleanup",
      title: "Spreadsheet Cleanup",
      description: "Messy data turned into a clean, consistent, sorted sheet.",
      tag: "Data Entry",
      imageUrl: "/images/work-sample-spreadsheet-cleanup.jpg",
      altText: "Spreadsheet Cleanup showing before and after duplicate removal and formatting",
      context: "Normalized raw data containing inconsistent name casing (ALL CAPS vs lowercase), mixed date notations (MM/DD/YY, written months, ISO formats), and duplicate entries into a clean, deduplicated, and sorted spreadsheet.",
      deliverables: [
        "Removed redundant duplicate records",
        "Standardized names into Proper Title Case",
        "Converted mixed dates into uniform YYYY-MM-DD format",
        "Clean, sorted alphabetical output ready for CRM upload"
      ],
      toolsUsed: ["Google Sheets", "Data Deduplication", "Formatting Standards"]
    },
    {
      id: "weekly-schedule-plan",
      title: "Weekly Schedule Plan",
      description: "An organized weekly calendar for a busy business owner.",
      tag: "Scheduling",
      imageUrl: "/images/work-sample-weekly-schedule.jpg",
      altText: "Weekly Schedule Plan with color-coded calendar and admin planning",
      context: "Designed an intuitive, color-coded weekly schedule balancing high-priority client meetings, deep focus time for reports and document preparation, and recurring administrative routines (inbox triage, vendor calls, follow-ups).",
      deliverables: [
        "Color-coded activity blocks (Client Meetings, Focus Work, Admin Tasks)",
        "Daily morning inbox & email triage buffer",
        "Strategic focus work sessions protected from interruption",
        "Friday weekly review and planning for the upcoming week"
      ],
      toolsUsed: ["Calendar Management", "Time Blocking", "Executive Planning"]
    },
    {
      id: "basic-website-creation",
      title: "Basic Website Creation",
      description: "A clean, modern, and mobile-responsive personal website layout.",
      tag: "Web Creation",
      imageUrl: "/images/project-website-creation.jpg",
      altText: "Modern responsive website mockup on a laptop screen with elegant typography and clean layouts",
      context: "Developed a responsive, mobile-first website structure designed for clear visual hierarchy, smooth navigation, working contact integration, and cross-device accessibility.",
      deliverables: [
        "Clean, modern layout with balanced white space",
        "Fully responsive design for mobile, tablet, and desktop",
        "Functional contact form and social link integration",
        "Fast-loading performance with modern web standards"
      ],
      toolsUsed: ["React", "Tailwind CSS", "Responsive Web Design"],
      liveUrl: "https://kayeabegaildelacruz.vercel.app/"
    }
  ] as WorkSampleItem[],

  // 7. Work Experience (Newest first, exact BPO roles & verifiable achievements)
  workExperience: [
    {
      id: "accenture",
      role: "Technical Support Representative",
      company: "Accenture Inc.",
      period: "Apr 2023 - Present",
      location: "Taguig, Metro Manila / Remote",
      summary: "Providing prompt technical support and customer guidance via digital channels while maintaining meticulous case histories.",
      bullets: [
        "Provide prompt technical support and customer guidance via digital channels, following standard operating procedures",
        "Maintain thorough, error-free documentation of customer interactions, case histories, and troubleshooting steps in the internal database",
        "Multitask between active customer interactions, diagnostic tools, and multiple support applications in a fast-paced environment",
        "Resolve technical issues and escalate complex matters with detailed context"
      ],
      skillsGained: ["Digital Technical Support", "Case Documentation", "Multitasking Under Pressure", "SOP Adherence"]
    },
    {
      id: "telus",
      role: "Customer Service Representative",
      company: "TELUS International Philippines",
      period: "Sept 2021 - Apr 2023",
      location: "Metro Manila",
      summary: "Delivered omnichannel customer service and validated customer account data with high attention to detail.",
      bullets: [
        "Handled diverse customer inquiries and account requests with professional written and verbal communication",
        "Entered, updated, and validated customer account information with high attention to detail and data integrity",
        "Researched guidelines and account policies to resolve concerns under pressure while meeting quality and attendance standards",
        "Collaborated with team leaders and colleagues to adapt to updated account procedures and service targets"
      ],
      skillsGained: ["Omnichannel Support", "Data Integrity", "Account Research", "Policy Compliance"]
    },
    {
      id: "alorica",
      role: "Customer Service Associate",
      company: "Alorica - Fort Taguig",
      period: "Oct 2019 - Apr 2020",
      location: "Taguig, Metro Manila",
      summary: "Resolved customer concerns in a structured, high-volume environment with active listening and composure.",
      bullets: [
        "Addressed customer inquiries and service requests in a structured, high-volume environment while following company protocols",
        "Logged routine customer data accurately and routed unresolved issues to the appropriate support teams",
        "Showed composure, patience, and active listening while resolving customer concerns"
      ],
      skillsGained: ["Active Listening", "Customer Patience", "High-Volume Call Handling", "Accurate Logging"]
    }
  ] as ExperienceItem[],

  // 8. Education
  education: [
    {
      institution: "Central Bicol State University of Agriculture",
      degree: "Bachelor of Elementary Education, Major in Content Area",
      period: "2015 - 2019",
      details: "Solid academic grounding in structured communication, instructional clarity, curriculum organization, and student-centered support."
    },
    {
      institution: "Central Bicol State University of Agriculture",
      degree: "Secondary Education High School Diploma",
      period: "2015",
      details: "Academic foundation with honors and leadership participation."
    }
  ] as EducationItem[],

  // 9. Feature Flags
  showWorkSamples: true,
  showTestimonials: false,
  testimonials: [] as TestimonialItem[],

  // Backwards compatibility alias for components expecting skillGroups
  get skillGroups() {
    return this.skillCategories.map(cat => ({
      category: cat.categoryName,
      description: cat.description,
      skills: cat.skills
    }));
  }
};

