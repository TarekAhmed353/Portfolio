import { FaChessKnight, FaFilm, FaLightbulb } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const aboutParagraphs: string[] = [
  "Programming didn't start as a passion for me. It started as something I kept getting wrong and refused to give up on. I'd write code that didn't run, work out why, break it again in a new way, and keep going. Somewhere in all that trying, the stubbornness turned into curiosity, and now I'm the kind of person who can't leave a bug alone until I understand it.",
  "For 16 months across 2024 and 2025 I worked full time as a video editor at Twine while studying CSE. Editing taught me to care about pacing and small details, and I bring that into the interfaces I build. On the engineering side I keep coming back to management systems: a hotel management system in C, a student portal in Java, and an accounting app in Flutter. These days most of my time goes into websites with React and Next.js, and I'm working towards being a full-stack developer who can take an idea from the database all the way to a live site, on the web and on mobile.",
  "Away from the keyboard I play chess, which is probably where my patience for debugging comes from, and I watch more movies and series than I should admit. I'm curious about nearly everything. If I don't know how something works, I want to find out, which is also why AI and machine learning are next on my list.",
];

export const quickFacts: { label: string; value: string }[] = [
  { label: "Based in", value: "Sylhet, Bangladesh" },
  { label: "Studying", value: "BSc in CSE, Metropolitan University" },
  { label: "Experience", value: "1 year 4 months as a video editor" },
  { label: "Focus", value: "Full-stack web, with an eye on AI/ML" },
];

export const interests: { label: string; icon: IconType }[] = [
  { label: "Playing chess", icon: FaChessKnight },
  { label: "Movies & series", icon: FaFilm },
  { label: "Learning new things", icon: FaLightbulb },
];
