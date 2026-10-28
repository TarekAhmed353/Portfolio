import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuExternalLink, LuUsers } from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const VISIBLE_TECH = 4;

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A few projects I'm proud of, from a Bangla price tracker to an AI-powered IELTS platform. Open any of them for the full story."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const hiddenTech = project.techStack.length - VISIBLE_TECH;

            return (
              <Reveal key={project.slug} delay={(i % 3) * 0.1} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-surface-muted"
                    tabIndex={-1}
                    aria-hidden
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 368px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.myRole && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-secondary shadow backdrop-blur">
                        <LuUsers className="size-3.5" />
                        Team project
                      </span>
                    )}
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
