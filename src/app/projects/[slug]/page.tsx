import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCircleCheck,
  LuClock,
  LuExternalLink,
  LuLayers,
  LuLightbulb,
  LuMountain,
  LuRocket,
  LuUsers,
} from "react-icons/lu";
import BackgroundGlow from "@/components/BackgroundGlow";
import Reveal from "@/components/ui/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

// The page reads the slug before rendering so an unknown project can return a
// real 404 status. That means it can't stream instantly, so tell Next.js this
// segment is allowed to wait. Known slugs are still prerendered at build time.
export const instant = false;

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="flex-1">
      <section className="relative isolate px-4 pt-28 pb-12 sm:px-6">
        <BackgroundGlow />
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <LuArrowLeft className="size-4" />
            Back to projects
          </Link>

          <Reveal className="mt-6">
            {project.myRole && (
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                <LuUsers className="size-3.5" />
                Team project
              </span>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient">{project.name}</span>
            </h1>
            <p className="mt-3 text-lg text-muted sm:text-xl">
              {project.tagline}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
              >
                <LuExternalLink className="size-5" />
                Live Site
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
              >
                <FaGithub className="size-5" />
                GitHub Repo (Client)
              </a>
            </div>
            {project.liveNote && (
              <p className="mt-3 inline-flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                <LuClock className="mt-0.5 size-4 shrink-0" />
                {project.liveNote}
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-primary/10">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 1024px, 100vw"
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <DetailBlock icon={LuLightbulb} title="About the project">
              <p className="leading-relaxed text-muted">{project.description}</p>
            </DetailBlock>

            <DetailBlock icon={LuCircleCheck} title="Key features">
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-muted">
                    <LuCircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock icon={LuMountain} title="Challenges I faced">
              <ol className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={challenge} className="flex gap-4">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="leading-relaxed text-muted">{challenge}</p>
                  </li>
                ))}
              </ol>
            </DetailBlock>

            <DetailBlock icon={LuRocket} title="Future plans">
              <ul className="space-y-3">
                {project.improvements.map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <LuArrowRight className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-bold">
                  <LuLayers className="size-5 text-primary" />
                  Tech stack
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {project.myRole && (
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <h2 className="flex items-center gap-2 font-bold">
                    <LuUsers className="size-5 text-secondary" />
                    My role
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.myRole}
                  </p>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <Link
                href={`/projects/${next.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary/50"
              >
                <p className="text-sm text-muted">Next project</p>
                <p className="mt-1 flex items-center justify-between gap-2 font-bold group-hover:text-primary">
                  {next.name}
                  <LuArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>
    </main>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h2 className="mb-5 flex items-center gap-3 text-xl font-bold">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-primary-foreground">
            <Icon className="size-4" />
          </span>
          {title}
        </h2>
        {children}
      </div>
    </Reveal>
  );
}
