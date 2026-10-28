import Image from "next/image";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import type { Skill } from "@/data/types";

const allSkills = skillCategories.flatMap((category) => category.skills);
const pick = (names: string[]) =>
  names.map((name) => allSkills.find((skill) => skill.name === name)!);

const innerRing = pick(["React", "Next.js", "TypeScript", "Tailwind CSS"]);
const outerRing = pick([
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Python",
  "Premiere Pro",
  "Figma",
]);

// The photo with a slowly rotating gradient ring, and skill logos orbiting it
// on two dashed rings. The outer ring is hidden on phones to keep it tidy.
export default function PhotoOrbit() {
  return (
    <div className="group relative grid size-[286px] place-items-center sm:size-[460px] xl:size-[540px]">
      <Ring
        skills={outerRing}
        className="hidden [--r:210px] sm:block xl:[--r:248px]"
        spin="animate-orbit-slower [animation-direction:reverse]"
        counterSpin="animate-orbit-slower"
      />
      <Ring
        skills={innerRing}
        className="[--r:125px] sm:[--r:160px] xl:[--r:192px]"
        spin="animate-orbit-slow"
        counterSpin="animate-orbit-slow [animation-direction:reverse]"
      />

      <div className="relative rounded-full p-1.5">
        <div
          aria-hidden
          className="absolute inset-6 rounded-full bg-primary/40 blur-2xl"
        />
        <div
          aria-hidden
          className="animate-spin-ring absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--secondary),transparent_55%,var(--primary))] motion-reduce:animate-none"
        />
        <div className="relative rounded-full bg-background p-1.5">
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={1204}
            height={1600}
            sizes="(min-width: 1280px) 288px, (min-width: 640px) 240px, 176px"
            loading="eager"
            fetchPriority="high"
            className="aspect-square size-44 rounded-full object-cover object-[50%_20%] sm:size-60 xl:size-72"
          />
        </div>
      </div>
    </div>
  );
}

function Ring({
  skills,
  className,
  spin,
  counterSpin,
}: {
  skills: Skill[];
  className: string;
  spin: string;
  counterSpin: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute size-[calc(var(--r)*2)] rounded-full border border-dashed border-border group-hover:[animation-play-state:paused] motion-reduce:animate-none ${spin} ${className}`}
    >
      {skills.map(({ name, icon: Icon, color }, i) => {
        const angle = (360 / skills.length) * i;
        return (
          <span
            key={name}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--r)) rotate(${-angle}deg)`,
            }}
          >
            {/* Spins the other way so the logo stays upright */}
            <span
              title={name}
              className={`flex size-10 items-center justify-center rounded-full border border-border bg-surface shadow-md group-hover:[animation-play-state:paused] motion-reduce:animate-none xl:size-11 ${counterSpin}`}
              style={{ color: color ?? "var(--foreground)" }}
            >
              <Icon aria-hidden className="size-5" />
            </span>
          </span>
        );
      })}
    </div>
  );
}
