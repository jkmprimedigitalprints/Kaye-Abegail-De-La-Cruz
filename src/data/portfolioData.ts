/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Single source of truth for all editable content on Kaye Abegail De La Cruz's
 * portfolio website.
 * 
 * Rules:
 * - Uses ONLY real, verified facts provided by Kaye.
 * - No invented metrics, QA percentages, fictional clients, or fake certifications.
 * - Feature flags (showWorkSamples, showTestimonials) control optional sections.
 * - Empty fields (e.g. calendlyUrl) automatically hide their respective UI elements.
 */

export interface WorkSampleItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  altText: string;
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
    title: "General Virtual Assistant | Administrative Assistant | Customer Support & Tech Support",
    valueStatement: "Reliable, detail-oriented, and calm under pressure",
    location: "Taguig, Metro Manila, Philippines",
    experienceSummary: "4+ years of customer service and technical support experience in BPO (Alorica, TELUS International Philippines, Accenture), now transitioning into a General Virtual Assistant and Administrative Support role",
    bio: "Dedicated and detail-oriented professional with solid customer service and technical support experience, now offering virtual assistant and administrative support. Highly organized, computer literate, and adaptable, with a strong background in written and verbal communication, accurate documentation, and methodical problem-solving. Able to multitask under pressure and work independently or with a team in remote environments.",
    email: "kayeabegaildelacruz02@gmail.com",
    phone: "+63 9687605420",
    resumeUrl: "/Kaye_Abegail_De_La_Cruz_CV.pdf",
    calendlyUrl: "", // If empty, the 'Book a Call' button is completely hidden
    languages: [
      { name: "English", level: "Fluent (Written and Verbal)" },
      { name: "Tagalog", level: "Native" }
    ],
    availability: {
      badge: "Available for work",
      shift: "Any (Day, Mid, or Night)",
      type: "Full-time / Part-time",
      timezones: "US, UK, or Australian time zones",
      start: "Immediately"
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kaye-abegail-de-la-cruz-64ba67446/",
      facebook: "https://www.facebook.com/kayeehdelacruz",
      instagram: "https://www.instagram.com/kaedelacruz/"
    }
  },

  // 2. Quick Stat Cards (Real facts only)
  stats: [
    {
      value: "4+ Years",
      label: "Customer Service & Tech Support",
      description: "Hands-on experience in high-standard BPO operations"
    },
    {
      value: "3 BPO Companies",
      label: "Alorica, TELUS & Accenture",
      description: "Proven record across leading international service providers"
    },
    {
      value: "English Fluent",
      label: "Written & Verbal Communication",
      description: "Clear customer correspondence, documentation, and call handling"
    },
    {
      value: "Any Shift",
      label: "Flexible Schedule",
      description: "Ready for Day, Mid, or Night shifts across US, UK, and AU time zones"
    }
  ],

  // 3. Services Offered (Exact real skills)
  services: [
    {
      id: "customer-support",
      title: "Customer Support",
      description: "Written and verbal communication, inquiry and concern resolution.",
      tasks: [
        "Professional written and verbal communication",
        "Prompt inquiry and concern resolution",
        "Active listening and patient customer assistance",
        "Following account standard operating procedures"
      ]
    },
    {
      id: "technical-support",
      title: "Technical Support",
      description: "Troubleshooting, guiding customers digitally, escalating complex issues with detailed context.",
      tasks: [
        "Step-by-step digital guidance for users",
        "System and software troubleshooting",
        "Accurate case history and troubleshooting logging",
        "Escalating complex issues with comprehensive context"
      ]
    },
    {
      id: "administrative-support",
      title: "Administrative Support",
      description: "Task follow-up, document formatting, internet research.",
      tasks: [
        "Thorough task and action-item follow-up",
        "Professional document formatting and proofing",
        "Targeted internet research and information gathering",
        "Independent execution and team coordination"
      ]
    },
    {
      id: "data-entry-cleanup",
      title: "Data Entry and Cleanup",
      description: "Accurate data entry, spreadsheet cleanup.",
      tasks: [
        "High-accuracy data entry in internal tools and sheets",
        "Spreadsheet cleanup, formatting, and data validation",
        "Maintaining database records without errors",
        "Routine information audits and updates"
      ]
    },
    {
      id: "email-calendar-management",
      title: "Email and Calendar Management",
      description: "Professional email drafting and etiquette, calendar coordination.",
      tasks: [
        "Professional email drafting with proper etiquette",
        "Inbox monitoring, sorting, and priority triage",
        "Meeting and calendar coordination across time zones",
        "Timely appointment reminders and schedule adjustments"
      ]
    },
    {
      id: "file-document-organization",
      title: "File and Document Organization",
      description: "Google Drive management, digital file filing.",
      tasks: [
        "Structured Google Drive folder organization",
        "Logical digital file naming and filing systems",
        "Document access permissions and clean archiving",
        "Ensuring resources are easy to locate quickly"
      ]
    },
    {
      id: "ticket-call-documentation",
      title: "Ticket and Call Documentation",
      description: "Accurate case histories and troubleshooting notes.",
      tasks: [
        "Detailed, error-free case history logging",
        "Precise diagnostic notes and call summaries",
        "Clear documentation for seamless handovers",
        "Strict adherence to compliance and reporting standards"
      ]
    }
  ],

  // 4. Work Experience (Newest first, exact provided companies and bullets)
  workExperience: [
    {
      id: "accenture",
      role: "Technical Support Representative",
      company: "Accenture Inc.",
      period: "Apr 2023 - Present",
      bullets: [
        "Provide prompt technical support and customer guidance via digital channels, following standard operating procedures",
        "Maintain thorough, error-free documentation of customer interactions, case histories, and troubleshooting steps in the internal database",
        "Multitask between active customer interactions, diagnostic tools, and multiple support applications in a fast-paced environment",
        "Resolve technical issues and escalate complex matters with detailed context"
      ]
    },
    {
      id: "telus",
      role: "Customer Service Representative",
      company: "TELUS International Philippines",
      period: "Sept 2021 - Apr 2023",
      bullets: [
        "Handled diverse customer inquiries and account requests with professional written and verbal communication",
        "Entered, updated, and validated customer account information with high attention to detail and data integrity",
        "Researched guidelines and account policies to resolve concerns under pressure while meeting quality and attendance standards",
        "Collaborated with team leaders and colleagues to adapt to updated account procedures and service targets"
      ]
    },
    {
      id: "alorica",
      role: "Customer Service Associate",
      company: "Alorica - Fort Taguig",
      period: "Oct 2019 - Apr 2020",
      bullets: [
        "Addressed customer inquiries and service requests in a structured, high-volume environment while following company protocols",
        "Logged routine customer data accurately and routed unresolved issues to the appropriate support teams",
        "Showed composure, patience, and active listening while resolving customer concerns"
      ]
    }
  ],

  // 5. Skills and Tools (Grouped tags exactly as provided)
  skillGroups: [
    {
      category: "Administrative and Organization",
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
      category: "Communication and Customer Care",
      skills: [
        "Customer Service and Client Communication",
        "Written and Verbal Communication",
        "Inquiry and Concern Resolution",
        "Accurate Ticket and Call Documentation",
        "Professional Email Etiquette"
      ]
    },
    {
      category: "Software and Tools",
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
      category: "Core Competencies",
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

  // 6. Education (Real education only, NO certifications)
  education: [
    {
      institution: "Central Bicol State University of Agriculture",
      degree: "Bachelor of Elementary Education, Major in Content Area",
      period: "2015 - 2019"
    },
    {
      institution: "Central Bicol State University of Agriculture",
      degree: "Secondary Education High School Diploma",
      period: "2015"
    }
  ],

  // 7. Feature Flags & Optional Sections
  showWorkSamples: true,
  workSamples: [
    {
      id: "customer-support-email-templates",
      title: "Customer Support Email Templates",
      description: "Professional replies for inquiries, complaints, and follow-ups.",
      tag: "Writing",
      imageUrl: "/assets/aistudio/3baad16b-2cbb-427b-afa5-1c43b45ef154_cb67dfce.jpg",
      altText: "Customer Support Email Templates with professional replies for inquiries, complaints, and follow-ups"
    },
    {
      id: "spreadsheet-cleanup",
      title: "Spreadsheet Cleanup",
      description: "Messy data turned into a clean, consistent, sorted sheet.",
      tag: "Data Entry",
      imageUrl: "/assets/aistudio/8bfae34b-5ac4-4791-a4da-435a3d7f60c2_6762d962.jpg",
      altText: "Spreadsheet Cleanup showing before and after duplicate removal and formatting"
    },
    {
      id: "weekly-schedule-plan",
      title: "Weekly Schedule Plan",
      description: "An organized weekly calendar for a busy business owner.",
      tag: "Scheduling",
      imageUrl: "/assets/aistudio/5441e268-eae3-4252-9a60-0b23bd66713c_1f299ba2.jpg",
      altText: "Weekly Schedule Plan with color-coded calendar and admin planning"
    }
  ] as WorkSampleItem[],

  showTestimonials: false,
  testimonials: [] as TestimonialItem[]
};
