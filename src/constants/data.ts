export const ME = {
  name: "Pratap Singh Sisodiya",
  role: "Frontend Developer | Full Stack Developer",
  location: "Chittorgarh, Rajasthan, India",
  bio: "I build AI-powered products and full-stack systems end to end.",
  github: "https://github.com/pratapsisodiya",
  linkedin: "https://linkedin.com/in/pratapsisodiya",
  twitter: "https://x.com/itspratap9",
  email: "pratap.09082005@gmail.com",
  phone: "+91-9256569039",
};

export const TECH_STACK = [
  "TypeScript", "JavaScript", "Python", "Dart", "Go",
  "React", "Next.js", "React Native", "Flutter",
  "Node.js", "FastAPI", "LangChain", "Docker", "AWS",
  "PostgreSQL", "MongoDB", "Redis",
];

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;
  category: "AI" | "SaaS" | "Mobile";
}

export const PROJECTS: Project[] = [
  // AI/SaaS Projects
  {
    id: "loomi",
    title: "Loomi",
    tagline: "AI SaaS Analytics Platform",
    description: "An advanced AI-powered SaaS analytics platform providing real-time revenue analytics, MRR tracker, churn prediction, cohort analysis, and automated weekly summaries using LLMs.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Groq AI"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#7c3aed",
    category: "AI",
  },
  {
    id: "cureq",
    title: "CureQ",
    tagline: "Smart Clinic Queue Management",
    description: "A real-time smart clinic queue management system allowing patients to book, view, and track live queues dynamically to reduce waiting times.",
    tech: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#0ea5e9",
    category: "SaaS",
  },
  {
    id: "zap-bot",
    title: "Zap-Bot",
    tagline: "AI Meeting Intelligence Assistant",
    description: "An AI-powered meeting assistant that listens to discussions, transcribes in real-time, extracts key decisions, and automatically updates task boards.",
    tech: ["Next.js", "Appwrite", "LangChain", "OpenAI"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#ec4899",
    category: "AI",
  },
  {
    id: "timeline",
    title: "Timeline",
    tagline: "Collaborative Workspace Platform",
    description: "Interactive visual workspace supporting collaborative task boards, drag-and-drop planning timelines, and real-time state synchronization across team members.",
    tech: ["React", "Tailwind CSS", "Socket.io", "Node.js"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#f59e0b",
    category: "SaaS",
  },
  {
    id: "india2world",
    title: "India2World",
    tagline: "AI Export Analytics Dashboard",
    description: "An AI-driven analytics dashboard helping Indian businesses identify global export opportunities, track custom duties, and analyze trade routes.",
    tech: ["Next.js", "Node.js", "Clerk", "PostgreSQL"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#10b981",
    category: "AI",
  },
  // Flutter/Mobile Projects
  {
    id: "lumio",
    title: "Lumio (AlarmPlus)",
    tagline: "AI-Powered Smart Alarm",
    description: "A smart assistant alarm app built with Flutter. Integrates Google Genkit and Groq/Gemini APIs to deliver dynamic audio briefings, scheduling advice, and contextual morning tasks.",
    tech: ["Flutter", "Dart", "Genkit", "Gemini API"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#d946ef",
    category: "Mobile",
  },
  {
    id: "playoti",
    title: "Playoti",
    tagline: "Mobile Audio Streaming & Sync",
    description: "A mobile media player and synchronized audio streaming client. Built with native integrations for push notification audio controls and low-latency audio processing.",
    tech: ["Flutter", "Dart", "Native Notifications", "SQLite"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#ef4444",
    category: "Mobile",
  },
  {
    id: "resumate",
    title: "Resumate",
    tagline: "AI Resume & Portfolio Builder",
    description: "Mobile resume builder utilizing Azure OpenAI models to format, optimize, and generate customizable developer portfolios directly from mobile devices.",
    tech: ["Flutter", "Azure OpenAI", "Riverpod", "Appwrite"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#3b82f6",
    category: "Mobile",
  },
  {
    id: "stoqo",
    title: "Stoqo",
    tagline: "Inventory & POS System",
    description: "Mobile inventory tracking and micro point-of-sale app designed for retail store management, operating with high-concurrency PostgreSQL backend.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Redis"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#6366f1",
    category: "Mobile",
  },
  {
    id: "servline",
    title: "Servline",
    tagline: "Service Booking & Management",
    description: "A service provider marketplace app matching local service workers with requests. Features QR code verification and Google Maps integrations.",
    tech: ["Flutter", "Appwrite", "QR Codes", "Material 3"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#06b6d4",
    category: "Mobile",
  },
  {
    id: "quirzy",
    title: "Quirzy",
    tagline: "AI Flashcards & Study Planner",
    description: "A smart studying tool generating structured flashcards from course material via Gemini AI, managing user space-repetition schedules on Firebase.",
    tech: ["Flutter", "Gemini AI", "Firebase", "Riverpod"],
    github: "https://github.com/pratapsisodiya",
    live: "#",
    accent: "#84cc16",
    category: "Mobile",
  },
];

export const SKILLS = [
  { name: "React / Next.js",      pct: 95, cat: "Frontend"  },
  { name: "TypeScript",           pct: 92, cat: "Frontend"  },
  { name: "Flutter / Dart",       pct: 90, cat: "Mobile"    },
  { name: "Node.js / Express",    pct: 91, cat: "Backend"   },
  { name: "Python / FastAPI",     pct: 88, cat: "Backend"   },
  { name: "LangChain / LLMs",     pct: 87, cat: "AI/ML"     },
  { name: "PostgreSQL / MongoDB", pct: 86, cat: "Database"  },
  { name: "Docker / AWS / DevOps",pct: 80, cat: "DevOps"    },
];

export const EXPERIENCE = [
  {
    company: "Krunk AI",
    role: "Software Engineer Intern",
    period: "Feb 2026 – May 2026",
    desc: "Improved the user experience of the Engineered Leads Dashboard, developed a Progressive Web Application (PWA), and implemented automated deployment pipelines. Created AI agent-based conversation systems using LangChain, LangGraph, and FastAPI for production use cases.",
    skills: ["LangChain", "LangGraph", "FastAPI", "React", "PWA"],
    current: false,
  },
  {
    company: "Xoidlabs",
    role: "Software Engineer Intern",
    period: "Jan 2026 – May 2026",
    desc: "Developed and shipped Skipthetask from scratch to web, Google Play Store, and Apple App Store. Built efficient CI/CD deployment pipelines on AWS ECS to scale the system for production.",
    skills: ["Flutter", "Dart", "CI/CD", "AWS ECS", "Web/Mobile"],
    current: false,
  },
  {
    company: "Axuore Technologies",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Feb 2026",
    desc: "Led frontend development for client facing applications, ensuring pixel perfect implementations, optimizing web performance, and managing a team of junior developers.",
    skills: ["React", "TypeScript", "Redux", "Frontend Architecture"],
    current: false,
  },
  {
    company: "Yardstick Educational Initiatives",
    role: "Full Stack Engineer Intern",
    period: "Jun 2025 – Aug 2025",
    desc: "Contributed to building LMS (Learning Management System) features, created AI-powered learning chatbots, set up GitHub Actions CI/CD pipelines, and managed secure asset storage with Amazon S3.",
    skills: ["Node.js", "React", "S3", "GitHub Actions", "AI Integration"],
    current: false,
  },
];

export const ACHIEVEMENTS = [
  {
    title: "1st Place Winner",
    detail: "Secured 1st place among 200+ competitors in CodeSprint 2024.",
  },
  {
    title: "1500+ DSA Solved",
    detail: "Solved over 1500+ data structures and algorithms problems across LeetCode, Codeforces, CodeChef, and GeeksforGeeks.",
  },
  {
    title: "Top 0.08% globally on LeetCode",
    detail: "Achieved global ranking in the top 0.08% of programmers on LeetCode platform.",
  },
  {
    title: "CodeChef Starters 178 Rating 1818",
    detail: "Global Rank 48 in CodeChef Starters 178 (March 2025).",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    date: "Nov 2025 - Nov 2026",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    date: "Jun 2025",
  },
  {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    date: "2025",
  },
];