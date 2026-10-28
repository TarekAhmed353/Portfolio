"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, site } from "@/data/site";

const sectionIds = navLinks.map((link) => link.href.split("#")[1]);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Solid background once the page has scrolled, and highlight the last link
  // at the very bottom, where the last section may be too short to reach the
  // middle of the screen.
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && document.getElementById(sectionIds.at(-1)!)) {
        setActiveId(sectionIds.at(-1)!);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The section crossing the middle of the screen is the active one. Re-run on
  // route change, since the sections only exist on the home page.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu with Escape, or when the screen grows to desktop size.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    pathname === "/" && activeId === href.split("#")[1];

  return (
    // A floating glass pill that tucks a little closer to the top and gets
    // more solid once the page scrolls.
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 sm:px-4 ${
        isScrolled ? "pt-2" : "pt-4"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border pr-2 pl-5 backdrop-blur-md transition-all duration-300 ${
          isScrolled || isOpen
            ? "border-border bg-surface/85 shadow-lg shadow-primary/10"
            : "border-border/60 bg-surface/50 shadow-sm"
        }`}
      >
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="font-display text-xl font-extrabold tracking-tight"
        >
          {site.name.split(" ")[0]}
          <span className="text-gradient">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Hire me
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-surface/95 shadow-lg shadow-primary/10 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.href) ? "true" : undefined}
                    className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 sm:hidden">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Hire me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
