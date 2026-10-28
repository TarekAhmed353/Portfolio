import { LuAward, LuCalendar, LuGraduationCap, LuSchool } from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Where I've studied"
          description="From school in Sylhet to a CSE degree, one step at a time."
        />

        <ol className="relative mx-auto max-w-3xl space-y-8">
          {/* Timeline line */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-5 w-0.5 rounded-full bg-linear-to-b from-primary to-secondary"
          />

          {education.map((item, i) => (
            <li key={item.degree} className="relative pl-16">
              <span
                aria-hidden
                className="absolute top-5 left-0 inline-flex size-10 items-center justify-center rounded-full border-4 border-background bg-linear-to-br from-primary to-secondary text-primary-foreground"
              >
                {item.current ? (
                  <LuGraduationCap className="size-4" />
                ) : (
                  <LuSchool className="size-4" />
                )}
              </span>

              <Reveal delay={i * 0.1}>
                <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-bold">{item.degree}</h3>
                    {item.current && (
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-medium text-primary">
                    {item.institution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-3 py-1 text-muted">
                      <LuCalendar className="size-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 font-semibold text-secondary">
                      <LuAward className="size-3.5" />
                      {item.result}
                    </span>
                  </div>

                  {item.details && (
                    <p className="mt-3 text-sm text-muted">{item.details}</p>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
