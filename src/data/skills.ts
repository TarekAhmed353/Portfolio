import {
  LuClapperboard,
  LuCodeXml,
  LuDatabase,
  LuPanelsTopLeft,
  LuSmartphone,
  LuWrench,
} from "react-icons/lu";
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

// A few brand colours are swapped for a lighter shade from the same logo
// (C++, Flutter, SQLite, Pandas) so they stay readable on the dark theme.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: LuPanelsTopLeft,
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#2965F1" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#1AD1A5" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: LuDatabase,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", icon: SiSqlite, color: "#0F80CC" },
    ],
  },
  {
    title: "Programming Languages",
    icon: LuCodeXml,
    skills: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#659AD2" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    title: "Mobile & Data",
    icon: LuSmartphone,
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#47C5FB" },
      { name: "Pandas", icon: SiPandas, color: "#E70488" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: LuWrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
  {
    title: "Video Editing",
    icon: LuClapperboard,
    skills: [
      { name: "Premiere Pro", icon: TbBrandAdobePremiere, color: "#9999FF" },
      { name: "After Effects", icon: TbBrandAdobeAfterEffect, color: "#D291FF" },
      { name: "DaVinci Resolve", icon: SiDavinciresolve },
    ],
  },
];
