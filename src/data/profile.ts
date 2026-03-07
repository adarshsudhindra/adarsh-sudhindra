export interface Experience {
  company: string;
  title: string;
  duration: string;
  location: string;
  outcomes: string[];
  current?: boolean;
}

export interface Project {
  title: string;
  problem: string;
  impact: string;
  tags: string[];
  role?: string;
  techStack?: string[];
}

export interface Article {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  date: string;
  readingTime: string;
  featured?: boolean;
}

export interface Talk {
  title: string;
  event: string;
  location: string;
  year: string;
  link?: string;
  upcoming?: boolean;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export const profile = {
  name: "Adarsh Sudhindra",
  role: "Technologist | Innovator | Entrepreneur | TEDx Speaker",
  summary: "I build products that make high-stakes learning and assessment smarter, fairer, and more secure. With deep experience across AI, product strategy, and innovation systems, I help organizations rethink how they evaluate talent and potential.",
  location: "Greater Boston, US",
  email: "adarsh.sudhindra@gmail.com",
  linkedin: "https://linkedin.com/in/adarshsudhindra",
  twitter: "https://twitter.com/adarshsudhindra",
  github: "https://github.com/adarshsudhindra",
};

export const metrics = [
  { label: "Years in Product & Tech", value: "15+" },
  { label: "Products Shipped", value: "12" },
  { label: "Conferences & Sessions", value: "30+" },
  { label: "Patents & Publications", value: "5" },
  { label: "Teams Led", value: "50+" },
  { label: "Countries Impacted", value: "20+" },
];

export const pillars = [
  {
    title: "AI-First Assessment",
    description: "Building intelligent platforms that leverage AI for adaptive testing, automated marking, and multimodal evaluation.",
    icon: "Brain",
  },
  {
    title: "Trust & Integrity",
    description: "Designing security frameworks and proctoring systems that maintain exam integrity at massive scale.",
    icon: "Shield",
  },
  {
    title: "Product Strategy",
    description: "Driving product vision from 0→1 and 1→N, with disciplined innovation systems and customer-centric roadmaps.",
    icon: "Target",
  },
  {
    title: "Applied Research",
    description: "Exploring quantum computing, edge AI, and emerging tech to stay ahead of the curve in assessment and learning.",
    icon: "Lightbulb",
  },
  {
    title: "Executive Leadership",
    description: "Communicating vision, aligning stakeholders, and building high-trust teams that deliver at velocity.",
    icon: "Users",
  },
];

export const experiences: Experience[] = [
  {
    company: "Excelsoft Technologies",
    title: "Vice President — Products & Innovation",
    duration: "Oct 2014 – Present",
    location: "Greater Boston, US",
    outcomes: [
      "Leading product strategy and innovation for AI-powered assessment and learning platforms serving millions globally",
      "Spearheaded integrity and security frameworks for high-stakes national examinations",
      "Built and scaled cross-functional teams across product, engineering, and design",
      "Drove partnerships with national bodies and global certification organizations",
      "Progressed from Product Strategist → Senior Product Strategist → VP Products & Innovation",
    ],
    current: true,
  },
  {
    company: "Adobe Systems",
    title: "Senior Software Development Engineer",
    duration: "Jun 2011 – Sep 2014",
    location: "India",
    outcomes: [
      "Worked on Adobe Flash Professional and Adobe Web Technology Group",
      "Contributed to core product development for enterprise creative tools",
      "Progressed from Software Development Engineer to Senior Software Development Engineer",
    ],
  },
  {
    company: "IBM Software Labs",
    title: "Software Development Intern",
    duration: "2008 – 2011",
    location: "India",
    outcomes: [
      "Contributed to enterprise collaboration and middleware platforms",
      "Gained foundational experience in large-scale software development",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "National Assessment Platform",
    problem: "Deliver secure, scalable assessments for millions of candidates across thousands of centers simultaneously",
    impact: "Scaled to 5M+ candidates with 99.9% uptime and zero security breaches",
    tags: ["Assessment", "Scale", "Security", "AI"],
    role: "Product Lead",
  },
  {
    title: "AI-Powered Marking Engine",
    problem: "Reduce marking time and improve consistency for subjective assessments",
    impact: "Improved marking consistency by 35% and reduced turnaround time by 60%",
    tags: ["AI", "NLP", "Assessment"],
    role: "Product & Innovation Lead",
  },
  {
    title: "Integrity & Proctoring Suite",
    problem: "Ensure exam integrity in remote and hybrid testing environments",
    impact: "Deployed across 500+ exam centers with AI-based anomaly detection",
    tags: ["Security", "AI", "Integrity"],
    role: "Product Lead",
  },
  {
    title: "Adaptive Learning Platform",
    problem: "Personalize learning paths based on student performance and knowledge gaps",
    impact: "Improved learner outcomes by 25% through personalized content delivery",
    tags: ["AI", "Learning", "Platforms"],
    role: "Product Strategy",
  },
  {
    title: "Multimodal Evaluation System",
    problem: "Support diverse assessment formats including audio, video, and practical demonstrations",
    impact: "Enabled assessment of 15+ skill types beyond traditional written exams",
    tags: ["Innovation", "Assessment", "R&D"],
    role: "Innovation Lead",
  },
  {
    title: "Certification Management Platform",
    problem: "Streamline end-to-end certification lifecycle for professional bodies",
    impact: "Reduced certification processing time by 50% for 3 national bodies",
    tags: ["Platforms", "Partnerships"],
    role: "Product Lead",
  },
];

export const articles: Article[] = [
  {
    title: "Why AI Won't Replace Examiners — But Will Make Them Better",
    slug: "ai-wont-replace-examiners",
    summary: "Exploring the augmentation thesis: how AI can enhance human judgment in assessment rather than replacing it.",
    tags: ["AI in Assessment", "Leadership"],
    date: "2024-12-15",
    readingTime: "8 min",
    featured: true,
  },
  {
    title: "Building Trust at Scale: Integrity in High-Stakes Digital Exams",
    slug: "building-trust-at-scale",
    summary: "Lessons from securing national examinations for millions of candidates in an increasingly digital world.",
    tags: ["AI in Assessment", "Product & Innovation"],
    date: "2024-10-20",
    readingTime: "6 min",
  },
  {
    title: "The Product Leader's Operating System",
    slug: "product-leaders-operating-system",
    summary: "A framework for how I think about product strategy, execution, and team building.",
    tags: ["Leadership & Executive Presence", "Personal Operating System"],
    date: "2024-08-05",
    readingTime: "10 min",
  },
  {
    title: "Quantum Computing Meets Assessment: Early Explorations",
    slug: "quantum-computing-assessment",
    summary: "What quantum computing could mean for item generation, security, and adaptive algorithms.",
    tags: ["Future Tech", "AI in Assessment"],
    date: "2024-06-18",
    readingTime: "7 min",
  },
  {
    title: "From Engineer to Executive: Lessons in Transition",
    slug: "engineer-to-executive",
    summary: "Reflections on the mindset shifts required when moving from building products to leading product organizations.",
    tags: ["Leadership & Executive Presence", "Personal Operating System"],
    date: "2024-04-10",
    readingTime: "5 min",
  },
  {
    title: "Designing Assessments That Are Fair, Valid, and Inclusive",
    slug: "fair-valid-inclusive-assessments",
    summary: "How thoughtful design can reduce bias and improve equity in standardized testing.",
    tags: ["Learning Design", "AI in Assessment"],
    date: "2024-02-22",
    readingTime: "9 min",
  },
];

export const talks: Talk[] = [
  {
    title: "AI-Driven Assessment: The Next Frontier",
    event: "EdTech World Forum",
    location: "London, UK",
    year: "2025",
    upcoming: true,
  },
  {
    title: "Securing Exams at Scale: A Product Perspective",
    event: "National Testing Conference",
    location: "New Delhi, India",
    year: "2024",
  },
  {
    title: "The Future of Credentialing in an AI World",
    event: "ATP Innovations in Testing",
    location: "Orlando, USA",
    year: "2024",
  },
  {
    title: "Building Products That Earn Trust",
    event: "ProductCon",
    location: "Bangalore, India",
    year: "2023",
  },
  {
    title: "Multimodal Assessment: Beyond Multiple Choice",
    event: "IAEA Annual Conference",
    location: "Dublin, Ireland",
    year: "2023",
  },
  {
    title: "Innovation Systems for Product Teams",
    event: "SaaSBOOMi",
    location: "Chennai, India",
    year: "2022",
  },
];

export const awards: Award[] = [
  {
    title: "Innovation Excellence Award",
    organization: "Excelsoft Technologies",
    year: "2023",
    description: "For pioneering AI-driven assessment integrity solutions",
  },
  {
    title: "Best Product Launch",
    organization: "EdTech Breakthrough Awards",
    year: "2022",
    description: "National Assessment Platform recognized for impact at scale",
  },
  {
    title: "Top 40 Under 40 — EdTech Leaders",
    organization: "EdTech Review",
    year: "2021",
  },
  {
    title: "Patent: Adaptive Item Selection Algorithm",
    organization: "USPTO",
    year: "2020",
  },
];

export const education = [
  {
    institution: "Kellogg School of Management",
    degree: "Executive Scholar — Products & Innovation",
    year: "2020",
  },
  {
    institution: "University of Illinois Urbana-Champaign",
    degree: "MS in Computer Science",
    year: "2008",
  },
];

export const principles = [
  { title: "Clarity Over Cleverness", description: "The best ideas are the ones everyone can understand and rally behind." },
  { title: "Trust Is Earned Daily", description: "Consistency, transparency, and follow-through build lasting trust with teams and customers." },
  { title: "Systems Thinking", description: "I look for patterns, feedback loops, and leverage points — not just symptoms." },
  { title: "Velocity with Quality", description: "Move fast, but never at the cost of craftsmanship or user experience." },
  { title: "Customer Empathy First", description: "Every decision starts with understanding the human on the other side." },
  { title: "Build to Learn", description: "Prototypes, experiments, and fast feedback cycles beat analysis paralysis." },
  { title: "Radical Ownership", description: "If it's in my domain, I own the outcome — no excuses, no blame." },
  { title: "Amplify Others", description: "My success is measured by how much I help my team grow and succeed." },
];

export const interests = [
  "Books & Reading", "Chess", "Travel", "Fitness & Running",
  "Mentoring", "Photography", "Podcasts", "Meditation",
];

export const capabilities = [
  "Product Strategy & Roadmapping",
  "AI/ML Applications in EdTech",
  "Assessment Design & Psychometrics",
  "Security & Integrity Systems",
  "Cross-functional Team Leadership",
  "Partnership & Stakeholder Management",
  "Innovation Frameworks",
  "Executive Communication",
  "Data-Driven Decision Making",
  "Platform Architecture",
];

export const speakerTopics = [
  "AI in Learning & Assessment",
  "Building Trust at Scale in Digital Examinations",
  "Product Strategy for Impact",
  "Innovation Systems for Product Organizations",
  "The Future of Credentialing & Certification",
  "From Engineer to Executive: Career Transitions",
];

export const articleCategories = [
  "AI in Assessment",
  "Product & Innovation",
  "Leadership & Executive Presence",
  "Learning Design",
  "Future Tech",
  "Personal Operating System",
];
