import Link from "next/link";
import { FaChessKnight } from "react-icons/fa6";
import {
  LuArrowRight,
  LuBookOpen,
  LuGraduationCap,
  LuMapPin,
  LuSparkles,
  LuVideo,
} from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutParagraphs, interests } from "@/data/about";
import { education } from "@/data/education";
import { research } from "@/data/research";

const degree = education[0];

// A bento grid: the story takes the big tile on the left, and smaller tiles
// around it each highlight one thing about me.
export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Who I am"
          description="From video timelines to code editors."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Tile className="md:col-span-2 lg:row-span-3" delay={0}>
            <TileLabel icon={LuSparkles}>My story</TileLabel>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Tile>

          <Tile delay={0.05}>
            <div
              aria-hidden
              className="bg-dots absolute inset-0 [mask-image:radial-gradient(circle_at_70%_40%,black_10%,transparent_70%)]"
            />
            <div className="relative">
              <TileLabel icon={LuMapPin}>Based in</TileLabel>
              <div aria-hidden className="relative my-5 ml-auto mr-6 size-4">
                <span className="absolute inset-0 animate-ping rounded-full bg-secondary/60" />
                <span className="absolute inset-0 rounded-full border-2 border-surface bg-secondary" />
              </div>
              <p className="font-display text-xl font-bold">Sylhet, Bangladesh</p>
              <p className="mt-1 font-mono text-xs text-muted">
                24.89° N · 91.87° E
              </p>
            </div>
          </Tile>

          <Tile delay={0.1}>
            <TileLabel icon={LuVideo}>Before code</TileLabel>
            <p className="mt-4 font-display text-5xl font-extrabold">
              <span className="text-gradient">16</span>
            </p>
            <p className="mt-1 font-semibold">months editing video</p>
            <p className="mt-1 text-sm text-muted">
              Full-time at Twine, in Premiere Pro, After Effects and DaVinci
              Resolve.
            </p>
          </Tile>

          <Tile className="md:col-span-2" delay={0.15}>
            <div className="flex items-start justify-between gap-4">
              <TileLabel icon={LuBookOpen}>Research</TileLabel>
              <Link
                href="/#experience"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Read them
                <LuArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-4 font-display text-xl font-bold">
              {research.length} papers presented in 2026
            </p>
            <ul className="mt-3 space-y-2">
              {research.map((paper) => (
                <li
                  key={paper.title}
                  className="flex items-center justify-between gap-3 rounded-xl bg-surface-muted px-4 py-2.5 text-sm"
                >
                  <span className="font-medium">{paper.title.split(":")[0]}</span>
                  <span className="shrink-0 text-xs text-muted">{paper.role.split(" &")[0]}</span>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile delay={0.2}>
            <TileLabel icon={FaChessKnight}>Off the clock</TileLabel>
            <FaChessKnight
              aria-hidden
              className="mt-4 size-12 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-12deg]"
            />
            <p className="mt-3 font-semibold">Chess player</p>
            <p className="mt-1 text-sm text-muted">
              Probably where my patience for debugging comes from.
            </p>
          </Tile>

          <Tile delay={0.25}>
            <TileLabel icon={LuGraduationCap}>Studying</TileLabel>
            <p className="mt-4 font-display text-5xl font-extrabold">
              <span className="text-gradient">
                {degree.result.match(/\d\.\d+/)?.[0]}
              </span>
            </p>
            <p className="mt-1 font-semibold">current CGPA</p>
            <p className="mt-1 text-sm text-muted">
              BSc in CSE at Metropolitan University, final semester.
            </p>
          </Tile>

          <Tile className="md:col-span-2" delay={0.3}>
            <TileLabel icon={LuArrowRight}>Where I&apos;m heading</TileLabel>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold">
              {["Frontend", "Full-stack", "AI/ML"].map((stage, i, all) => (
                <span key={stage} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-2 ${
                      i === all.length - 1
                        ? "bg-linear-to-r from-primary to-secondary text-primary-foreground"
                        : "border border-border bg-surface-muted"
                    }`}
                  >
                    {stage}
                  </span>
                  {i < all.length - 1 && (
                    <LuArrowRight aria-hidden className="size-4 text-muted" />
                  )}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              Building full-stack web apps today, with AI and machine learning
              next on the list.
            </p>
          </Tile>

          <Tile className="md:col-span-2" delay={0.35}>
            <TileLabel icon={LuSparkles}>Outside of coding</TileLabel>
            <ul className="mt-5 flex flex-wrap gap-2">
              {interests.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-medium"
                >
                  <Icon aria-hidden className="size-4 text-secondary" />
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Curious about nearly everything, and always happy to learn how
              something works.
            </p>
          </Tile>
        </div>
      </div>
    </section>
  );
}

function Tile({
  children,
  className = "",
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="spotlight group h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        {children}
      </div>
    </Reveal>
  );
}

function TileLabel({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-secondary uppercase">
      <Icon className="size-3.5" />
      {children}
    </p>
  );
}
