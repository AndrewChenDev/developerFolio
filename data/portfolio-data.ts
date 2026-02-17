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
  GraduationCap,
  BookOpen,
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
    description: "Currently, I'm working as a Software Developer at",
    company: "Origineer Consulting Inc",
    role: "building full-stack applications for the WhatsDish delivery platform.",
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
  { icon: MapPin, label: "Location", value: "Vancouver, BC", href: null },
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
    period: "03/2025 — Present",
    title: "Software Developer",
    company: "Origineer Consulting Inc",
    companyUrl: "https://origineer.co",
    description:
      "Built operation and sales portals managing 1,500+ leads and 60+ merchants. Developed Node.js microservices for order and menu management on Heroku, AWS Lambda, and Docker/ECS. Led WhatsDish delivery driver application development using Next.js. Integrated Deliverect POS API for order management.",
    skills: ["Next.js", "Node.js", "TypeScript", "AWS Lambda", "Docker", "ECS", "Heroku"],
  },
  {
    period: "10/2020 — 12/2024",
    title: "Full Stack Developer",
    company: "Lahoo Information Ltd",
    companyUrl: "https://lahoo.ca",
    description:
      "Created full-stack applications with Next.js, PHP, and MySQL, achieving 300% load time reduction. Converted Figma designs to responsive React components with Tailwind CSS. Deployed AWS infrastructure including EC2 Auto-scaling, ECS, CloudFront, ELB, S3, and RDS.",
    skills: ["Next.js", "React", "PHP", "MySQL", "Tailwind CSS", "AWS", "Figma"],
  },
  {
    period: "10/2019 — 02/2020",
    title: "Software Engineer",
    company: "Boltz Technology",
    description:
      "Developed a power-bank sharing mobile application using Flutter. Built cross-platform iOS and Android apps with real-time features and payment integration.",
    skills: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
  },
  {
    period: "02/2019 — 04/2019",
    title: "Assistant Backend Developer",
    company: "Pick a Dish",
    description:
      "Assisted in backend development for a food-related application. Worked with Node.js and database technologies to build and maintain RESTful APIs.",
    skills: ["Node.js", "JavaScript", "REST APIs", "Database", "Git"],
  },
  {
    period: "04/2014 — Present",
    title: "IT Specialist",
    company: "Heaven Bridge Church",
    description:
      "Managing IT infrastructure and providing technical support. Maintaining website and digital presence for the organization.",
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
    skills: ["HTML5", "CSS3", "SASS", "React.js", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Bun", "Firebase", "MySQL", "Redis", "REST APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["Flutter", "Swift", "Kotlin", "WeChat Mini Program"],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Docker", "Serverless", "GitHub Actions", "Nginx", "CentOS", "Git", "pnpm"],
  },
  {
    icon: Database,
    title: "Tools & Platforms",
    skills: ["AWS (Lambda, ECS, S3, CloudFront, EC2, RDS, DynamoDB)", "Cloudflare (Workers, Pages, Durable Objects)", "Wrangler", "Vercel", "Heroku", "WordPress"],
  },
  {
    icon: Sparkles,
    title: "AI & ML",
    skills: ["Claude Code", "GitHub Copilot", "MCP", "Prompt Engineering"],
  },
]

// =============================================
// PROJECTS
// =============================================
export interface Project {
  title: string
  description: string
  image?: string
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://driver.whatsdish.com/",
  },
  {
    title: "WhatsDish Operation Dashboard",
    description:
      "Internal operations portal managing 1,500+ leads and 60+ merchants for the WhatsDish delivery platform. Features order management, merchant onboarding, and sales pipeline tracking.",
    image: "/whatsdish-dashboard.png",
    technologies: ["Next.js", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Lahoo.ca",
    description:
      "News media company website for the Chinese-Canadian community. Built and maintained using WordPress with custom themes and plugins for content management and user engagement.",
    image: "/lahoo.png",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "MySQL"],
    liveUrl: "https://lahoo.ca/",
  },
  {
    title: "Apass.ca",
    description:
      "A web application project built with modern web technologies. Designed and developed with a focus on user experience and performance.",
    image: "/apass.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "React.js", "Node.js"],
    liveUrl: "https://apass.ca/",
  },
  {
    title: "Sarahzhang.ca",
    description:
      "A professional portfolio and personal website. Built with responsive design principles to showcase work across all devices.",
    image: "/sarahzhang.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    liveUrl: "https://sarahzhang.ca/",
  },
  {
    title: "Boltz App",
    description:
      "Power-bank sharing mobile application developed with Flutter. Features real-time station tracking, QR code scanning, and integrated payment system for renting portable chargers.",
    image: "/boltzApp.png",
    technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    liveUrl: "https://apps.apple.com/app/boltz/id1488498090",
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
  {
    icon: BookOpen,
    degree: "Certificate in Computer Systems",
    school: "British Columbia Institute of Technology (BCIT)",
    period: "Jan 2017 — Apr 2018",
    description:
      "Foundation program in computer systems covering programming fundamentals, networking, and IT infrastructure.",
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
  description: "Personal portfolio website showcasing my work in web and mobile application development with JavaScript, React.js, Node.js, and Flutter",
  url: "https://andrew.ac",
  ogImage: "/og-image.png",
}
