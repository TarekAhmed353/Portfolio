import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import type { NavLink, SocialLink } from "./types";

export const site = {
  name: "Tarek Ahmed",
  designation: "Aspiring Full-Stack Developer",
  tagline: "CSE Student · AI/ML Enthusiast",
  intro:
    "I'm a CSE student from Sylhet, Bangladesh. I like building applications people can actually use, and I pick up a new technology with almost every project.",
  location: "Sylhet, Bangladesh",
  email: "tareque6229@gmail.com",
  phone: "+8801866812722",
  phoneDisplay: "+880 1866-812722",
  whatsappUrl: "https://wa.me/8801866812722",
  availability: "Open to internships, web projects & research",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Tarek-Ahmed-Resume.pdf",
  photo: "/profile.jpg",
};

// Hrefs start with "/" so the links also work from the project detail pages.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/TarekAhmed353", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tarek-ahmed-cse/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tarek.ahmed.132907",
    icon: FaFacebook,
  },
  { label: "WhatsApp", href: site.whatsappUrl, icon: FaWhatsapp },
];
