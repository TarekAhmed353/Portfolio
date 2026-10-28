import type { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type Skill = {
  name: string;
  icon: IconType;
  // Brand colour for the logo. Left out for black logos (Next.js, GitHub,
  // Vercel), which use the text colour so they stay visible in dark mode.
  color?: string;
};

export type SkillCategory = {
  title: string;
  icon: IconType;
  skills: Skill[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  result: string;
  details?: string;
  current?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  tools?: string[];
};

export type Research = {
  title: string;
  role: string;
  coAuthors: string[];
  venue: string;
  date: string;
  status: string;
  summary: string;
  pdfUrl: string;
  downloadName: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  repoUrl: string;
  // Featured projects get a large row at the top of the Projects section
  featured?: boolean;
  // For team projects: what I did on it
  myRole?: string;
  // Shown next to the live link, e.g. a slow free-tier host
  liveNote?: string;
  challenges: string[];
  improvements: string[];
};
