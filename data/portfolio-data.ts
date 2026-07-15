// =============================================
// PORTFOLIO DATA - Edit this file to customize your portfolio
// =============================================

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Container,
  Sparkles,
  FlaskConical,
  GraduationCap,
  MapPin,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// =============================================
// PERSONAL INFO
// =============================================
export const personalInfo = {
  name: "Andrew Chen",
  title: "Software Developer",
  bio: "A passionate Software Developer with experience building Web and Mobile applications using JavaScript, React.js, Next.js, Node.js, and Flutter across delivery platforms, media companies, and fintech products.",
  currentWork: {
    description: "Experienced in building full-stack web and mobile applications across delivery platforms, media companies, and fintech products.",
    company: "",
    role: "",
  },
  resumeUrl: "https://resume.andrew.ac",
}

// =============================================
// SOCIAL LINKS
// =============================================
export const socialLinks = [
  { icon: Github, href: "https://github.com/AndrewChenDev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andrewc-dev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:andrew@andrew.ac", label: "Email" },
]

// =============================================
// CONTACT INFO
// =============================================
export const contactInfo = [
  { icon: Mail, label: "Email", value: "andrew@andrew.ac", href: "mailto:andrew@andrew.ac" },
  { icon: MapPin, label: "Location", value: "Coquitlam, BC", href: null },
]

// =============================================
// EXPERIENCES
// =============================================
export interface Experience {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
}

export const experiences: Experience[] = [
  {
    period: "03/2025 — 04/2026",
    title: "Software Developer",
    company: "Origineer Consulting Inc",
    companyUrl: "https://www.origineer.ca",
    description:
      "Built the company's first internal operations and sales platform with Next.js, React, TypeScript, and DynamoDB, designing REST APIs and role-based access control to centralize lead tracking and merchant onboarding across 1,500+ leads and 60+ merchants. Developed internal admin dashboards with React and Node.js, replacing manual database queries with self-serve workflows for user management, transactions, and automated reporting, cutting monthly reporting time by 82%. Refactored an 8,000-line monolithic codebase into modular, documented components using AI-assisted tooling (Claude Code, Codex). Integrated the Deliverect POS API to connect restaurant partners with UberEats and DoorDash, enabling merchants to grow order revenue by 40%+. Delivered a driver signup flow end to end with a responsive React front end and Node.js REST APIs on serverless AWS Lambda.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "DynamoDB", "AWS Lambda", "Docker", "ECS"],
  },
  {
    period: "02/2020 — 03/2025",
    title: "Full Stack Developer",
    company: "Lahoo Information Ltd",
    companyUrl: "https://lahoo.ca",
    description:
      "Owned the full web stack from front-end development to hosting and server maintenance, building applications with Next.js, PHP, and MySQL and leading on-call for site reliability. Re-platformed a monolithic WordPress site into a decoupled Next.js front end with SSR and static generation, cutting page load time by 93% to 600ms. Deployed and tuned AWS infrastructure (EC2 auto-scaling, ECS, CloudFront, ELB, S3, RDS) with CI/CD pipelines (GitHub Actions, CodePipeline) and Terraform, reducing monthly server costs by 74%. Translated Figma mockups into responsive React components styled with Tailwind CSS, standardizing the front-end build across the company's web properties.",
    skills: ["Next.js", "React", "PHP", "MySQL", "Tailwind CSS", "AWS", "Terraform", "Figma"],
  },
  {
    period: "10/2019 — 02/2020",
    title: "Software Developer Intern",
    company: "Boltz Technology",
    description:
      "Built cross-platform mobile app features with Flutter as a front-end intern, redesigning component sizing and layout from user feedback to improve UI consistency, ease of use, and performance across devices.",
    skills: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
  },
  {
    period: "02/2019 — 04/2019",
    title: "Assistant Backend Developer (Volunteer)",
    company: "Pick a Dish",
    description:
      "Assisted in backend development for a food-related application. Worked with Node.js and database technologies to build and maintain RESTful APIs.",
    skills: ["Node.js", "JavaScript", "REST APIs", "Database", "Git"],
  },
  {
    period: "04/2014 — 2021",
    title: "IT Specialist (Volunteer)",
    company: "Heaven Bridge Church",
    description:
      "Managed IT infrastructure and provided technical support. Maintained website and digital presence for the organization.",
    skills: ["IT Support", "Web Development", "Networking", "WordPress"],
  },
]

// =============================================
// SKILLS
// =============================================
export interface SkillCategory {
  icon: LucideIcon
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Dart", "Swift", "Kotlin", "Java"],
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "SASS", "React.js", "Next.js", "Redux", "Tailwind CSS", "Responsive Design", "Figma"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Bun", "Firebase", "MySQL", "PostgreSQL", "Redis", "REST APIs", "GraphQL", "WebSockets", "JWT", "OAuth 2.0", "Microservices"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["Flutter", "Swift", "Kotlin", "WeChat Mini Program"],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Serverless", "GitHub Actions", "CodePipeline", "CI/CD", "Terraform", "CloudFormation", "Nginx", "Linux", "CentOS", "Git", "pnpm"],
  },
  {
    icon: Database,
    title: "Tools & Platforms",
    skills: ["AWS Lambda", "AWS ECS", "AWS S3", "CloudFront", "EC2", "RDS", "DynamoDB", "EventBridge", "API Gateway", "CloudWatch", "SQS", "Cloudflare Workers", "Cloudflare Pages", "Wrangler", "Vercel", "Heroku", "WordPress", "Jira"],
  },
  {
    icon: Sparkles,
    title: "AI & ML",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "MCP", "RAG", "Agentic AI", "Prompt Engineering"],
  },
  {
    icon: FlaskConical,
    title: "Testing & Practices",
    skills: ["Jest", "Playwright", "Unit & Integration Testing", "Agile/Scrum"],
  },
]

// =============================================
// PROJECTS
// =============================================
export interface Project {
  title: string
  description: string
  image?: string
  imageAlt?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    title: "WhatsDish Driver Signup",
    description:
      "Driver signup and onboarding page for the WhatsDish delivery platform. Built with Next.js featuring a streamlined registration flow for delivery drivers.",
    image: "/whatsdish-driver.png",
    imageAlt: "WhatsDish driver signup web app showing registration form",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://driver.whatsdish.com/",
  },
  {
    title: "WhatsDish Operation Dashboard",
    description:
      "Internal operations portal managing 1,500+ leads and 60+ merchants for the WhatsDish delivery platform. Features order management, merchant onboarding, and sales pipeline tracking.",
    image: "/whatsdish-dashboard.png",
    imageAlt: "WhatsDish operations dashboard showing merchant and lead management interface",
    technologies: ["Next.js", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Lahoo.ca",
    description:
      "News media company website for the Chinese-Canadian community. Built and maintained using WordPress with custom themes and plugins for content management and user engagement.",
    image: "/lahoo.png",
    imageAlt: "Lahoo.ca Chinese-Canadian news media website homepage",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
    liveUrl: "https://lahoo.ca/",
  },
  {
    title: "Apass.ca",
    description:
      "A web application project built with modern web technologies. Designed and developed with a focus on user experience and performance.",
    image: "/apass.png",
    imageAlt: "Apass.ca web application interface",
    technologies: ["JavaScript", "HTML5", "CSS3", "React.js", "Node.js"],
    liveUrl: "https://apass.ca/",
  },
  {
    title: "Sarahzhang.ca",
    description:
      "A professional portfolio and personal website. Built with responsive design principles to showcase work across all devices.",
    image: "/sarahzhang.png",
    imageAlt: "Sarahzhang.ca professional portfolio website with responsive design",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    liveUrl: "https://sarahzhang.ca/",
  },
  {
    title: "Boltz App",
    description:
      "Power-bank sharing mobile application developed with Flutter. Features real-time station tracking, QR code scanning, and integrated payment system for renting portable chargers.",
    image: "/boltzApp.png",
    imageAlt: "Boltz power-bank sharing mobile app with station tracking and QR scanning",
    technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
  },
]

// =============================================
// EDUCATION
// =============================================
export interface Education {
  icon: LucideIcon
  degree: string
  school: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    icon: GraduationCap,
    degree: "Diploma in Computer Systems Technology",
    school: "British Columbia Institute of Technology (BCIT)",
    period: "Jan 2018 — Mar 2019",
    description:
      "Completed an intensive program covering software development, web technologies, databases, and system administration. Hands-on experience with modern development tools and methodologies.",
  },
]

// =============================================
// CERTIFICATIONS
// =============================================
export interface Certification {
  name: string
  issuer: string
  year: string
}

export const certifications: Certification[] = []

// =============================================
// NAVIGATION
// =============================================
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

// =============================================
// SITE METADATA
// =============================================
export const siteMetadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: "Andrew Chen is a Software Developer based in Coquitlam, BC, specializing in full-stack web and mobile development with React, Next.js, Node.js, and Flutter.",
  url: "https://andrew.ac",
  ogImage: "/og-image.png",
}
