import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { LuArrowRight, LuExternalLink, LuStar, LuUsers } from "react-icons/lu";
import BrowserFrame from "@/components/ui/BrowserFrame";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

const VISIBLE_TECH = 4;

const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-muted/50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A few projects I'm proud of, from a Bangla price tracker to an AI-powered IELTS platform. Open any of them for the full story."
        />

        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-20 mb-8 flex items-center gap-4">
          <h3 className="text-2xl font-bold">More projects</h3>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${project.name} details`}
          className={`group block ${flip ? "lg:order-last" : ""}`}
        >
          <BrowserFrame
            url={project.liveUrl}
            className="transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </BrowserFrame>
        </Link>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-wider text-secondary uppercase">
              <LuStar className="size-3.5" />
              Featured project
            </span>
            {project.myRole && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary">
                <LuUsers className="size-3" />
                Team project
              </span>
            )}
          </div>
          <h3 className="mt-3 text-3xl font-extrabold">{project.name}</h3>
          <p className="mt-2 font-medium text-primary">{project.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              View Details
              <LuArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
            >
              <LuExternalLink className="size-4" />
              Live Site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              title="GitHub repo"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <FaGithub className="size-5" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hiddenTech = project.techStack.length - VISIBLE_TECH;

  return (
    <article className="spotlight group flex h-full flex-col rounded-2xl border border-border bg-surface p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
        <BrowserFrame url={project.liveUrl} className="shadow-none">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </BrowserFrame>
      </Link>

      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, VISIBLE_TECH).map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </li>
          ))}
          {hiddenTech > 0 && (
            <li className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted">
              +{hiddenTech} more
            </li>
          )}
        </ul>

        <div className="mt-auto flex items-center gap-3 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            View Details
            <LuArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live site`}
            title="Live site"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-secondary hover:text-secondary"
          >
            <LuExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
