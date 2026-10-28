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
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  result: string;
  details?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
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
  challenges: string[];
  improvements: string[];
};
