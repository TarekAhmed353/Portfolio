"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getStoredTheme,
  getSystemTheme,
} from "@/lib/theme";

export default function ThemeToggle() {
  useLayoutEffect(() => {
    // In development, React's Strict Mode remount clears the class the inline
    // script put on <html>, so apply it again here. No-op in production.
    applyTheme(getStoredTheme() ?? getSystemTheme());

    // Follow the system setting until the visitor picks a theme themselves.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (!getStoredTheme()) applyTheme(getSystemTheme());
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    const switchTheme = () => {
      applyTheme(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {}
    };

    // Without View Transitions support, or for visitors who prefer reduced
    // motion, switch instantly.
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      switchTheme();
      return;
    }

    // Reveal the new theme as a circle growing out of the toggle button. The
    // browser animates a snapshot of the page, not every element, so it stays
    // smooth however much is on screen.
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(switchTheme);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  }

  // Both icons are rendered and CSS shows the right one, so the server and
  // client markup always match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <Sun className="size-5 dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
    </button>
  );
}
