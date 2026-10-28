import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDaisyui,
  SiDart,
  SiDavinciresolve,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandAdobeAfterEffect, TbBrandAdobePremiere } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DaisyUI", icon: SiDaisyui },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: SiOpenjdk },
      { name: "Python", icon: SiPython },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Mobile & Data",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Pandas", icon: SiPandas },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
  {
    title: "Video Editing",
    skills: [
      { name: "Premiere Pro", icon: TbBrandAdobePremiere },
      { name: "After Effects", icon: TbBrandAdobeAfterEffect },
      { name: "DaVinci Resolve", icon: SiDavinciresolve },
    ],
  },
];
