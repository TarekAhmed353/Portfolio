import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutParagraphs, interests, quickFacts } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Who I am"
          description="From video timelines to code editors."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <dl className="space-y-5 rounded-2xl border border-border bg-surface p-6 shadow-sm">
                {quickFacts.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <dt className="text-sm text-muted">{label}</dt>
                      <dd className="font-semibold">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-bold">Outside of coding</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {interests.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <Icon className="size-4 text-secondary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
