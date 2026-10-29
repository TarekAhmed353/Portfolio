"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  LuBookOpen,
  LuCalendar,
  LuChevronLeft,
  LuChevronRight,
  LuFileText,
  LuRocket,
  LuUsers,
  LuX,
  LuZoomIn,
} from "react-icons/lu";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/types";

const categoryIcons: Record<Certificate["category"], React.ComponentType<{ className?: string }>> = {
  Bootcamp: LuRocket,
  Course: LuBookOpen,
  Workshop: LuUsers,
  Research: LuFileText,
};

export default function Certificates() {
  // Index of the certificate open in the lightbox, or null when it's closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="bg-surface-muted/50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Bootcamps & qualifications"
          description="Bootcamps, courses and workshops I've completed outside the classroom. Click any certificate to see it full size."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, i) => {
            const Icon = categoryIcons[certificate.category];
            return (
              <Reveal key={certificate.image} delay={(i % 3) * 0.1} className="h-full">
                <article className="spotlight group flex h-full flex-col rounded-2xl border border-border bg-surface p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`View ${certificate.title} certificate full size`}
                    className="relative block aspect-[16/11] overflow-hidden rounded-xl border border-border bg-surface-muted"
                  >
                    <Image
                      src={certificate.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition group-hover:bg-background/40 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold shadow-lg">
                        <LuZoomIn className="size-4 text-primary" />
                        View
                      </span>
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                        <Icon className="size-3.5" />
                        {certificate.category}
                      </span>
                      {certificate.date && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-2.5 py-1 text-muted">
                          <LuCalendar className="size-3" />
                          {certificate.date}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg leading-snug font-bold">
                      {certificate.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-secondary">
                      {certificate.issuer}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {certificate.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            index={openIndex}
            onChange={setOpenIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({
  index,
  onChange,
  onClose,
}: {
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const certificate = certificates[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = certificates.length;
  const prev = () => onChange((index - 1 + count) % count);
  const next = () => onChange((index + 1) % count);

  // Keyboard: Escape closes, arrow keys move between certificates
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, count, onChange, onClose]);

  // Stop the page behind from scrolling, and move focus into the dialog
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <motion.figure
        key={certificate.image}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
      >
        <div className="relative min-h-0 flex-1 bg-surface-muted">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
            width={certificate.width}
            height={certificate.height}
            sizes="(min-width: 1024px) 896px, 100vw"
            className="mx-auto h-auto max-h-[70vh] w-auto object-contain"
          />
        </div>

        <figcaption className="flex items-center gap-3 border-t border-border p-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous certificate"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <LuChevronLeft className="size-5" />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <p className="truncate font-display font-bold">{certificate.title}</p>
            <p className="truncate text-sm text-muted">
              {certificate.issuer}
              {certificate.credentialId && ` · ${certificate.credentialId}`}
            </p>
            <p className="mt-1 font-mono text-xs text-muted">
              {index + 1} / {count}
            </p>
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next certificate"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <LuChevronRight className="size-5" />
          </button>
        </figcaption>
      </motion.figure>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-surface text-foreground shadow-lg transition-colors hover:text-primary"
      >
        <LuX className="size-5" />
      </button>
    </motion.div>
  );
}
