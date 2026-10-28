"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { site } from "@/data/site";

const TYPE_SPEED = 45; // ms per character
const START_DELAY = 400;
const LINE_PAUSE = 300;

const lines = [
  {
    text: "Hi there, I'm",
    as: "p",
    className: "mt-6 font-mono text-sm text-secondary sm:text-base",
  },
  {
    text: site.name,
    as: "h1",
    className: "mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl",
    gradient: true,
  },
  {
    text: site.designation,
    as: "p",
    className: "mt-3 text-xl font-bold sm:text-3xl",
  },
] as const;

// Character offset where each line starts, and the total to type.
const starts = lines.map((_, i) =>
  lines.slice(0, i).reduce((sum, line) => sum + line.text.length, 0),
);
const total = starts.at(-1)! + lines.at(-1)!.text.length;

export default function TypewriterIntro() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const typed = reduceMotion ? total : count;

  useEffect(() => {
    if (reduceMotion || count >= total) return;
    const delay =
      count === 0
        ? START_DELAY
        : starts.includes(count)
          ? LINE_PAUSE
          : TYPE_SPEED;
    const timer = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [count, reduceMotion]);

  // The cursor sits on the line being typed, and stays on the last line
  // once everything is done.
  const activeLine =
    typed >= total
      ? lines.length - 1
      : starts.findLastIndex((start) => typed >= start);

  return (
    <>
      {lines.map((line, i) => {
        const Tag = line.as;
        const visible = line.text.slice(
          0,
          Math.max(0, Math.min(line.text.length, typed - starts[i])),
        );

        return (
          <Tag key={line.text} className={line.className}>
            <span className="inline-grid text-left">
              {/* The real text, transparent. It reserves the final size so
                  nothing below jumps, and it's what search engines and
                  screen readers read. */}
              <span className="col-start-1 row-start-1 text-transparent">
                {line.text}
              </span>
              {/* The typed letters are drawn by a ::before pseudo-element, so
                  they never show up as duplicate text in the page. */}
              <span
                aria-hidden
                data-text={visible}
                className={`pointer-events-none col-start-1 row-start-1 before:content-[attr(data-text)] ${
                  "gradient" in line ? "text-gradient" : ""
                }`}
              >
                {i === activeLine && (
                  <span className="animate-blink ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-full bg-secondary" />
                )}
              </span>
            </span>
          </Tag>
        );
      })}
    </>
  );
}
