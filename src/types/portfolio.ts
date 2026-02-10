import type {ReactNode} from "react";

export interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  gitlab?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  medium?: string;
  stackoverflow?: string;
  kaggle?: string;
  display: boolean;
}

export interface Greeting {
  username: string;
  title: string;
  subTitle: ReactNode;
  resumeLink: string;
  displayGreeting: boolean;
}

export interface SoftwareSkill {
  skillName: string;
  fontAwesomeClassname: string;
}

export interface SkillsSection {
  title: string;
  subTitle: string;
  skills: ReactNode[];
  softwareSkills: SoftwareSkill[];
  display: boolean;
}

export interface School {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc?: string;
  descBullets?: string[];
}

export interface EducationInfo {
  display: boolean;
  schools: School[];
}

export interface TechStackExperience {
  Stack: string;
  progressPercentage: string;
}

export interface TechStack {
  viewSkillBars: boolean;
  experience: TechStackExperience[];
  displayCodersrank: boolean;
}

export interface WorkExperienceEntry {
  role: string;
  company: string;
  companylogo: string;
  date: string;
  desc?: string;
  descBullets?: string[];
  productName?: string;
  productLink?: string;
}

export interface WorkExperiences {
  display: boolean;
  experience: WorkExperienceEntry[];
  volunteer?: WorkExperienceEntry[];
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface BigProject {
  image: string;
  projectName: string;
  projectDesc?: string;
  footerLink?: FooterLink[];
}

export interface BigProjects {
  title: string;
  subtitle: string;
  projects: BigProject[];
  display: boolean;
}

export interface ContactInfo {
  title: ReactNode;
  subtitle: string;
  number?: string;
  email_address: string;
}

export interface SplashScreen {
  enabled: boolean;
  animation: LottieAnimationData;
  duration: number;
}

export interface Illustration {
  animated: boolean;
}

export interface StyleContextType {
  isDark: boolean;
  changeTheme: () => void;
}

export interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: unknown[];
  layers: unknown[];
  [key: string]: unknown;
}
