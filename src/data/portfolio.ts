export const profile = {
  name: 'Aman Kumar',
  title: 'Computer Science & AI student',
  summary: 'I am a Computer Science undergraduate at USICT, GGSIPU, focused on backend systems, data-informed products, and interfaces that make complex work feel clear.',
  phone: '+91-9667439517', email: 'idforaman2019@gmail.com', resumePath: '/Aman_Kumar_Resume.pdf',
  socials: { linkedin: 'https://linkedin.com/in/aman-kumar-debug', github: 'https://github.com/amank07-debug', leetcode: 'https://leetcode.com/u/amankumar2019/' },
} as const;

export const education = { institution: 'USICT, Guru Gobind Singh Indraprastha University, New Delhi', degree: 'B.Tech, Computer Science & Engineering — Artificial Intelligence', expected: 'Expected 2028' } as const;

export const skillGroups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & data', items: ['FastAPI', 'Flask', 'PostgreSQL / PostGIS', 'MongoDB', 'Firebase'] },
  { title: 'Tools & workflow', items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel'] },
  { title: 'Foundations', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
] as const;

export const experience = [
  { id: 'aicte-intern', role: 'AI/ML Intern', org: 'AICTE Idea Lab, GGSIPU', period: 'Jun 2026 — Present', points: ['Contributing to AI/ML projects under faculty guidance, building and testing model pipelines for real-world applications.', 'Working with a technical team to implement and iterate on machine-learning solutions using sound software-engineering practices.'] },
  { id: 'tnp-coordinator', role: 'Training & Placement Coordinator, Core Team', org: 'USICT Training & Placement Cell / IPU Placement Cell', period: '2024 — Present', points: ['Built and maintained internal tools and processes for placement-drive coordination, including recruiter communication, scheduling, and hiring logistics.'] },
] as const;

export const projects = [
  { id: 'akhada', number: '01', title: 'Akhada', type: 'Fitness ecosystem backend', statement: 'A B2B2C foundation for gym owners, trainers, and members — designed for roles, memberships, and location-aware discovery.', contribution: 'I architected the API surface and data model, including JWT authentication, role-based access, and PostGIS-backed location queries.', tech: ['FastAPI', 'PostgreSQL', 'PostGIS', 'OpenStreetMap'], badge: 'Smart India Hackathon', github: 'https://github.com/amank07-debug', visual: 'data-grid' },
  { id: 'terravision', number: '02', title: 'TerraVision', type: 'AI urban-planning platform', statement: 'An interactive view of urban signals — AQI, heat hotspots, EV density, and green infrastructure — paired with policy exploration.', contribution: 'I built the full-stack experience: map-led dashboards, Firebase-backed data flows, and Gemini-powered recommendation and simulation features.', tech: ['React', 'FastAPI', 'Firebase', 'Gemini API'], badge: null, github: 'https://github.com/amank07-debug', visual: 'map-grid' },
  { id: 'navdrishti', number: '03', title: 'NavDrishti', type: 'AI smart cane dashboard', statement: 'A monitoring interface for an assistive smart-cane concept, built to surface edge-device sensor and model signals in real time.', contribution: 'I designed the API contract and data flow between Raspberry Pi inference and the dashboard, using WebSockets for low-latency alerts.', tech: ['React', 'FastAPI', 'WebSockets', 'Raspberry Pi'], badge: 'Top 15 · Eclipse 6.0', github: 'https://github.com/amank07-debug', visual: 'signal-grid' },
] as const;

export const achievements = [
  { title: 'AlgoVerse Hackathon 2025', detail: 'Top 70 of 3,300+ teams.' }, { title: 'Trivizardathon 1.0', detail: 'Finale round · MLSA, GLA University Chapter.' }, { title: 'Eclipse 6.0', detail: 'Top 15 with NavDrishti.' },
] as const;

export const navLinks = [
  { href: '#work', label: 'Work' }, { href: '#experience', label: 'Experience' }, { href: '#about', label: 'About' }, { href: '#contact', label: 'Contact' },
] as const;
