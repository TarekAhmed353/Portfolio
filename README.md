# Tarek Ahmed: Portfolio

My personal portfolio. It covers who I am, what I work with, my education, work and research, the projects I've built, and how to reach me.

**Live site:** https://tarekahmed-portfolio.vercel.app

## Features

- A responsive navbar that highlights the section you're reading and collapses into a menu on phones
- A light and a dark theme. It follows your system setting on the first visit and remembers your choice after that
- A hero section with my photo, designation, social links and a one-click resume download
- An About Me section with quick facts and interests
- Skills grouped into six categories with brand logos and filter tabs
- An education timeline, my work experience, and two presented research papers you can read or download
- Five project cards, each with its own detail page covering the tech stack, a description, live and GitHub links, the challenges I faced and future plans
- Contact details with copy buttons and a contact form that sends straight to my inbox through Web3Forms
- A custom 404 page, generated favicon and link preview image, a sitemap and robots.txt
- Animations that switch off for visitors who prefer reduced motion

## Tech stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS 4
- Motion for animations
- react-icons and lucide-react for icons
- Web3Forms for the contact form
- Deployed on Vercel

## Project structure

```
src/
├── app/
│   ├── page.tsx                Home page, made of the sections below
│   ├── projects/[slug]/        Detail page for each project
│   ├── layout.tsx              Navbar, footer, fonts, theme and metadata
│   ├── not-found.tsx           Custom 404 page
│   ├── icon.tsx, apple-icon.tsx, opengraph-image.tsx
│   └── sitemap.ts, robots.ts
├── components/
│   ├── sections/               Hero, About, Skills, Education, Experience, Projects, Contact
│   ├── ui/                     Shared pieces: section heading, scroll reveal, copy button
│   └── Navbar, Footer, ThemeToggle, ContactForm, ...
├── data/                       All the content: site info, skills, education, projects, research
└── lib/theme.ts                Light and dark theme logic
public/
├── profile.jpg, resume.pdf
├── papers/                     Research papers
└── projects/                   Project screenshots
```

All the text on the site lives in `src/data/`, so updating the content never means touching a component.

## Running it locally

```bash
git clone https://github.com/TarekAhmed353/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open http://localhost:3000.
