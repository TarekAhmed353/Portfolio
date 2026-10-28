import {
  LuBookOpen,
  LuBriefcase,
  LuCalendar,
  LuCircleCheck,
  LuDownload,
  LuExternalLink,
  LuMapPin,
  LuMic,
  LuUsers,
} from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { research } from "@/data/research";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface-muted/50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Work & research"
          description="Client work that taught me deadlines and detail, and research that taught me to dig deeper."
        />

        <div className="mx-auto max-w-4xl space-y-6">
          {experience.map((job) => (
            <Reveal key={`${job.role}-${job.company}`}>
              <article className="spotlight rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-primary-foreground">
                    <LuBriefcase className="size-6" />
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-secondary">
                      {job.company}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                      <LuCalendar className="size-3.5" />
                      {job.period}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 text-muted">
                          <LuCircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {job.tools && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {job.tools.map((tool) => (
                          <li
                            key={tool}
                            className="rounded-full border border-border bg-surface-muted px-3 py-1 text-sm font-medium"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 mb-6 flex max-w-4xl items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
            <LuBookOpen className="size-5" />
          </span>
          <h3 className="text-2xl font-bold">Research & Publications</h3>
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {research.map((paper, i) => (
            <Reveal key={paper.title} delay={i * 0.1} className="h-full">
              <article className="spotlight flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/50 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    <LuMic className="size-3" />
                    {paper.status}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-1 text-muted">
                    <LuCalendar className="size-3" />
                    {paper.date}
                  </span>
                </div>

                <h4 className="mt-4 text-lg leading-snug font-bold">
                  {paper.title}
                </h4>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {paper.role}
                </p>

                <dl className="mt-3 space-y-1.5 text-sm text-muted">
                  <div className="flex gap-2">
                    <dt>
                      <LuUsers className="mt-0.5 size-4" aria-label="Co-authors" />
                    </dt>
                    <dd>With {paper.coAuthors.join(" and ")}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>
                      <LuMapPin className="mt-0.5 size-4" aria-label="Venue" />
                    </dt>
                    <dd>{paper.venue}</dd>
                  </div>
                </dl>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {paper.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    <LuExternalLink className="size-4" />
                    Read paper
                  </a>
                  <a
                    href={paper.pdfUrl}
                    download={paper.downloadName}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <LuDownload className="size-4" />
                    Download
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
