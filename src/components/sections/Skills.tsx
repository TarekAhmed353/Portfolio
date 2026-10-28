"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/data/types";

const ALL = "All";
const tabs = [ALL, ...skillCategories.map((category) => category.title)];
const totalSkills = skillCategories.reduce(
  (sum, category) => sum + category.skills.length,
  0,
);

export default function Skills() {
  const [active, setActive] = useState(ALL);
  const visible =
    active === ALL
      ? skillCategories
      : skillCategories.filter((category) => category.title === active);

  return (
    <section id="skills" className="bg-surface-muted/50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description={`${totalSkills} tools and technologies across ${skillCategories.length} areas, from the browser to the editing timeline.`}
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => setActive(tab)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === tab
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((category) => (
              <CategoryCard
                key={category.title}
                category={category}
                wide={active !== ALL}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  wide,
}: {
  category: SkillCategory;
  wide: boolean;
}) {
  const { title, icon: CategoryIcon, skills } = category;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`spotlight rounded-2xl border border-border bg-surface p-6 shadow-sm ${
        wide ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <header className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-primary-foreground">
            <CategoryIcon className="size-5" />
          </span>
          <h3 className="font-bold">{title}</h3>
        </div>
        <span className="shrink-0 rounded-full bg-surface-muted px-3 py-1 font-mono text-xs whitespace-nowrap text-muted">
          {skills.length} skills
        </span>
      </header>

      <ul
        className={`grid gap-3 ${
          wide ? "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6" : "grid-cols-3"
        }`}
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            style={{ "--brand": color ?? "var(--foreground)" } as React.CSSProperties}
            className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-muted/60 px-2 py-4 text-center transition duration-200 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
          >
            <Icon
              aria-hidden
              className="size-8 text-[var(--brand)] transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs leading-tight font-medium sm:text-sm">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
