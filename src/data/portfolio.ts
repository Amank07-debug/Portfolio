export const profile = {
  name: 'Aman Kumar',
  title: 'Computer Science Undergraduate · AI Specialization',
  tagline:
    'Building backend systems, REST APIs, and real-time applications with Python, FastAPI, and modern JavaScript frameworks.',
  summary:
    'Computer Science undergraduate specializing in AI, with strong foundations in data structures, algorithms, and full-stack development. Experienced in designing and building backend systems, REST APIs, and real-time applications using Python, FastAPI, and modern JavaScript frameworks.',
  phone: '+91-9667439517',
  email: 'idforaman2019@gmail.com',
  resumePath: '/Aman_Kumar_Resume.pdf',
  socials: {
    linkedin: 'https://linkedin.com/in/aman-kumar-debug',
    github: 'https://github.com/amank07-debug',
    leetcode: 'https://leetcode.com/u/amankumar2019/',
  },
  roles: [
    'Full Stack Developer',
    'Backend Engineer (FastAPI)',
    'AI/ML Engineer',
    'Software Engineer',
  ],
} as const;

export const education = {
  institution: 'USICT, Guru Gobind Singh Indraprastha University, New Delhi',
  degree:
    'B.Tech, Computer Science and Engineering (Artificial Intelligence Specialization)',
  expected: 'Expected 2028',
} as const;

export const skills = {
  languages: ['Python', 'JavaScript', 'C', 'C++', 'HTML5', 'CSS3'],
  frameworks: ['React.js', 'FastAPI', 'Flask'],
  databases: ['PostgreSQL (PostGIS)', 'MongoDB', 'Firebase'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel', 'VS Code'],
  coursework: [
    'DSA',
    'OOP',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
  ],
} as const;

export const experience = [
  {
    id: 'aicte-intern',
    role: 'AI/ML Intern',
    org: 'AICTE Idea Lab, GGSIPU',
    period: 'June 2026 – Present',
    points: [
      'Contributing to AI/ML projects under faculty guidance, building and testing model pipelines for real-world applications.',
      'Collaborating with a technical team to implement and iterate on machine learning solutions, applying software engineering best practices.',
    ],
  },
  {
    id: 'tnp-coordinator',
    role: 'Training & Placement Coordinator (Core Team)',
    org: 'USICT Training & Placement Cell / IPU Placement Cell',
    period: '2024 – Present',
    points: [
      'Built and maintained internal tools and processes for coordinating placement drives across recruiter communication, scheduling, and hiring logistics for companies including Nagarro, TCS, and Infosys.',
    ],
  },
] as const;

export const projects = [
  {
    id: 'akhada',
    title: 'Akhada',
    subtitle: 'Enterprise-Grade Fitness Ecosystem Backend',
    badge: 'Smart India Hackathon (SIH)',
    tech: [
      'FastAPI',
      'PostgreSQL',
      'PostGIS',
      'OpenStreetMap Overpass API',
      'JWT Authentication',
    ],
    points: [
      'Architecting a B2B2C backend for Smart India Hackathon (SIH) connecting gym owners, trainers, and members, with JWT-based authentication and role-based access control.',
      'Designed RESTful APIs and PostgreSQL/PostGIS schemas to support geo-spatial queries for gym discovery, membership management, and trainer onboarding at scale.',
      'Integrated the OpenStreetMap Overpass API for location-based search, optimizing query performance for real-time geo-filtering.',
    ],
    github: 'https://github.com/amank07-debug',
  },
  {
    id: 'terravision',
    title: 'TerraVision',
    subtitle: 'AI Urban Planning Platform',
    badge: null,
    tech: [
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Firebase',
      'Gemini API',
      'Vercel',
    ],
    points: [
      'Built a full-stack platform with interactive map-based dashboards visualizing AQI, heat hotspots, EV density, and green infrastructure data.',
      'Integrated the Gemini API to generate AI-driven policy recommendations and before/after simulations, deployed on Vercel with a Firebase backend.',
    ],
    github: 'https://github.com/amank07-debug',
  },
  {
    id: 'navdrishti',
    title: 'NavDrishti',
    subtitle: 'AI Smart Cane for the Visually Impaired',
    badge: 'Top 15, Eclipse 6.0',
    tech: ['React', 'FastAPI', 'WebSockets', 'Python', 'Raspberry Pi'],
    points: [
      'Developed a real-time monitoring dashboard consuming sensor and AI-model data from an edge-deployed smart cane via WebSockets, achieving sub-second alert latency.',
      'Designed the API contract and data flow between the Raspberry Pi edge inference pipeline and the frontend dashboard.',
    ],
    github: 'https://github.com/amank07-debug',
  },
] as const;

export const achievements = [
  {
    id: 'algoverse',
    title: 'AlgoVerse Hackathon 2025',
    detail: 'Ranked in the Top 70 of 3,300+ teams.',
  },
  {
    id: 'trivizardathon',
    title: 'Trivizardathon 1.0',
    detail: 'Reached the finale round (MLSA – GLA University Chapter).',
  },
  {
    id: 'eclipse',
    title: 'Eclipse 6.0',
    detail: 'Top 15 with NavDrishti – AI Smart Cane for the Visually Impaired.',
  },
] as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
] as const;
