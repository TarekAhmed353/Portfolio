"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import BackgroundGlow from "@/components/BackgroundGlow";
import { site, socialLinks } from "@/data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center px-4 pt-24 pb-20 sm:px-6"
    >
      <BackgroundGlow />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-sm text-secondary sm:text-base"
          >
            Hi there, I&apos;m
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            <span className="text-gradient">{site.name}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-xl font-bold sm:text-3xl"
          >
            {site.designation}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-2 font-medium text-muted"
          >
            {site.tagline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl leading-relaxed text-muted lg:mx-0"
          >
            {site.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={site.resumeUrl}
              download={site.resumeFileName}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <Download className="size-5" />
              Download Resume
            </a>
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
            >
              View Projects
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative order-1 mx-auto lg:order-2"
        >
          <div className="rounded-full bg-linear-to-br from-primary to-secondary p-1.5 shadow-2xl shadow-primary/20">
            <div className="rounded-full bg-background p-1.5">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                width={1204}
                height={1600}
                sizes="(min-width: 1024px) 352px, (min-width: 640px) 288px, 224px"
                loading="eager"
                fetchPriority="high"
                className="aspect-square size-56 rounded-full object-cover object-[50%_20%] sm:size-72 lg:size-[22rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <Link
        href="/#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-primary sm:block"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </Link>
    </section>
  );
}
